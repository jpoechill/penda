/** Shared consultation form validation (client + server). */

export type ConsultationFields = {
  name: string;
  contact: string;
  availability: string;
  referral: string;
  notes: string;
};

export type FieldErrors = Partial<Record<keyof ConsultationFields, string>>;

const URL_RE = /https?:\/\/|www\.|\.com\b|\.net\b|\.org\b|\.ru\b|\.xyz\b/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_DIGIT_RE = /\d/g;
const SPAM_PHRASE_RE =
  /\b(viagra|cialis|crypto\s*invest|bitcoin|forex|seo\s*service|backlink|guest\s*post|onlyfans|casino|lottery|prize\s*winner|click\s*here|act\s*now)\b/i;

export function trimField(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function looksLikeEmail(value: string): boolean {
  return EMAIL_RE.test(value);
}

export function looksLikePhone(value: string): boolean {
  const digits = value.match(PHONE_DIGIT_RE)?.join("") ?? "";
  // US-friendly: 10 digits, or 11 starting with 1
  if (digits.length === 10) return true;
  if (digits.length === 11 && digits.startsWith("1")) return true;
  // Allow international-ish 8–15 digits
  return digits.length >= 8 && digits.length <= 15;
}

export function isValidContact(value: string): boolean {
  return looksLikeEmail(value) || looksLikePhone(value);
}

function hasTooManyLinks(value: string): boolean {
  const matches = value.match(/https?:\/\/|www\./gi);
  return (matches?.length ?? 0) >= 2;
}

function looksSpammy(value: string): boolean {
  if (!value) return false;
  if (SPAM_PHRASE_RE.test(value)) return true;
  if (hasTooManyLinks(value)) return true;
  // Long unbroken strings (bot paste)
  if (/\S{80,}/.test(value)) return true;
  return false;
}

export function validateConsultationFields(raw: {
  name?: unknown;
  contact?: unknown;
  availability?: unknown;
  referral?: unknown;
  notes?: unknown;
}): { fields: ConsultationFields; errors: FieldErrors } {
  const fields: ConsultationFields = {
    name: trimField(raw.name, 80),
    contact: trimField(raw.contact, 120),
    availability: trimField(raw.availability, 200),
    referral: trimField(raw.referral, 120),
    notes: trimField(raw.notes, 1500),
  };

  const errors: FieldErrors = {};

  if (!fields.name) {
    errors.name = "Please enter your name.";
  } else if (fields.name.length < 2) {
    errors.name = "Name looks too short.";
  } else if (URL_RE.test(fields.name) || looksSpammy(fields.name)) {
    errors.name = "Please enter a real name.";
  }

  if (!fields.contact) {
    errors.contact = "Please enter an email or phone number.";
  } else if (!isValidContact(fields.contact)) {
    errors.contact = "Enter a valid email address or phone number.";
  }

  if (fields.availability && looksSpammy(fields.availability)) {
    errors.availability = "Please remove links or promotional text.";
  }

  if (fields.referral && looksSpammy(fields.referral)) {
    errors.referral = "Please remove links or promotional text.";
  }

  if (fields.notes) {
    if (URL_RE.test(fields.notes) && hasTooManyLinks(fields.notes)) {
      errors.notes = "Please remove links from your message.";
    } else if (looksSpammy(fields.notes)) {
      errors.notes = "Please keep your note brief and free of promotional text.";
    }
  }

  return { fields, errors };
}
