import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  looksLikeEmail,
  trimField,
  validateConsultationFields,
} from "../../lib/consultation";
import { formatResendFrom } from "../../lib/email";
import { SITE_EMAIL } from "../../lib/site";

export const runtime = "nodejs";

type ConsultationBody = {
  name?: string;
  contact?: string;
  availability?: string;
  referral?: string;
  notes?: string;
  /** Honeypot — must stay empty */
  company?: string;
  /** Client form-open timestamp (ms) */
  formStartedAt?: number | string;
};

/** Minimum time a real person typically needs before submitting */
const MIN_SUBMIT_MS = 3_000;
/** Reject very old/stale form sessions (replay / abandoned bots) */
const MAX_SUBMIT_MS = 1000 * 60 * 60 * 6; // 6 hours

const RATE_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_MAX = 3; // max successful-looking attempts per IP per window

type RateEntry = { count: number; resetAt: number };
const rateByIp = new Map<string, RateEntry>();

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function pruneRateMap(now: number) {
  if (rateByIp.size < 200) return;
  rateByIp.forEach((entry, ip) => {
    if (entry.resetAt <= now) rateByIp.delete(ip);
  });
}

function isRateLimited(ip: string, now: number): boolean {
  pruneRateMap(now);
  const entry = rateByIp.get(ip);
  if (!entry || entry.resetAt <= now) {
    rateByIp.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_MAX;
}

function silentOk() {
  // Same shape as success so bots can't tell they were blocked
  return NextResponse.json({ ok: true });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured. Please call us instead." },
      { status: 503 },
    );
  }

  const now = Date.now();
  const ip = clientIp(request);

  if (isRateLimited(ip, now)) {
    return NextResponse.json(
      {
        error:
          "Too many requests from this network. Please wait a bit, or call us.",
      },
      { status: 429 },
    );
  }

  let body: ConsultationBody;
  try {
    body = (await request.json()) as ConsultationBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled → pretend success
  if (trimField(body.company, 200)) {
    return silentOk();
  }

  // Timing check: too fast = bot; too old = stale/replay
  const startedRaw = body.formStartedAt;
  const startedAt =
    typeof startedRaw === "number"
      ? startedRaw
      : typeof startedRaw === "string"
        ? Number(startedRaw)
        : NaN;

  if (!Number.isFinite(startedAt)) {
    return silentOk();
  }

  const elapsed = now - startedAt;
  if (elapsed < MIN_SUBMIT_MS || elapsed > MAX_SUBMIT_MS) {
    return silentOk();
  }

  const { fields, errors } = validateConsultationFields(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        error: Object.values(errors)[0],
        fieldErrors: errors,
      },
      { status: 400 },
    );
  }

  const to = process.env.CONSULTATION_TO_EMAIL?.trim() || SITE_EMAIL;
  const from = formatResendFrom();

  const lines = [
    `New care consultation request from the website.`,
    ``,
    `Name: ${fields.name}`,
    `Email or phone: ${fields.contact}`,
    `Availability: ${fields.availability || "—"}`,
    `How they heard about us: ${fields.referral || "—"}`,
    ``,
    `Notes:`,
    fields.notes || "—",
  ];

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: `Care consultation request — ${fields.name}`,
      text: lines.join("\n"),
      ...(looksLikeEmail(fields.contact) ? { replyTo: fields.contact } : {}),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your request. Please try again or call us." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Consultation email failed:", err);
    return NextResponse.json(
      { error: "Could not send your request. Please try again or call us." },
      { status: 502 },
    );
  }
}
