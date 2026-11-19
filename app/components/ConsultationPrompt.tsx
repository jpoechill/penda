"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE_PHONE, SITE_PHONE_TEL } from "../lib/site";

/**
 * Soft consultation prompt — trial feature.
 *
 * To turn off without deleting files:
 *   set ENABLE_CONSULTATION_PROMPT to false below
 * Or remove `<ConsultationPrompt />` from app/layout.tsx
 *
 * Dismiss lasts for this browser tab visit only. A normal refresh
 * brings the prompt back after 8s or halfway scroll — no console needed.
 */
export const ENABLE_CONSULTATION_PROMPT = true;

const SHOW_AFTER_MS = 8_000;
const SHOW_AFTER_SCROLL_RATIO = 0.5;

/** Pages where the prompt would be redundant or distracting */
const HIDDEN_PATHS = new Set(["/schedule"]);

export default function ConsultationPrompt() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!ENABLE_CONSULTATION_PROMPT) return;
    if (HIDDEN_PATHS.has(pathname)) return;
    if (dismissed) return;

    let shown = false;
    let timer = 0;

    const cleanup = () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };

    const show = () => {
      if (shown) return;
      shown = true;
      cleanup();
      setReady(true);
      requestAnimationFrame(() => setVisible(true));
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SHOW_AFTER_SCROLL_RATIO) show();
    };

    timer = window.setTimeout(show, SHOW_AFTER_MS);
    window.addEventListener("scroll", onScroll, { passive: true });

    return cleanup;
  }, [pathname, dismissed]);

  if (!ENABLE_CONSULTATION_PROMPT) return null;
  if (HIDDEN_PATHS.has(pathname)) return null;
  if (!ready || dismissed) return null;

  function dismiss() {
    setVisible(false);
    window.setTimeout(() => {
      setReady(false);
      setDismissed(true);
    }, 220);
  }

  return (
    <div
      className={`fixed bottom-4 right-4 z-[60] w-[min(100%-2rem,22rem)] transition duration-300 ease-out sm:bottom-6 sm:right-6 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
      role="dialog"
      aria-labelledby="consultation-prompt-title"
      aria-describedby="consultation-prompt-desc"
    >
      <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_12px_40px_rgba(28,47,54,0.16)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              No pressure
            </p>
            <h2
              id="consultation-prompt-title"
              className="mt-1 font-display text-xl font-semibold tracking-tight text-foreground"
            >
              Want to talk through care options?
            </h2>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="-mr-1 -mt-1 rounded-lg px-2 py-1 text-lg leading-none text-muted transition hover:bg-[var(--warm-wash)] hover:text-foreground"
            aria-label="Dismiss consultation prompt"
          >
            ×
          </button>
        </div>

        <p id="consultation-prompt-desc" className="mt-2 text-sm leading-relaxed text-muted">
          Schedule a short care consultation, or call us when you’re ready. We’re here to listen.
        </p>

        <div className="mt-4 flex flex-col gap-2">
          <Link href="/schedule" className="btn-primary !py-2.5 text-sm" onClick={dismiss}>
            Schedule a Care Consultation
          </Link>
          <a
            href={`tel:${SITE_PHONE_TEL}`}
            className="btn-secondary !py-2.5 text-sm"
            onClick={dismiss}
          >
            Call {SITE_PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}
