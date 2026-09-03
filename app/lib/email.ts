import { SITE_NAME_SHORT } from "./site";

const RFC_FROM_RE = /^(?:"([^"]+)"|([^<]+?))\s*<([^>]+)>$/;
const EMAIL_ONLY_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function quoteDisplayName(name: string): string {
  return `"${name.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

/** Build a Resend-safe From header with a quoted display name (avoids `<P` HTML parsing bugs). */
export function formatResendFrom(): string {
  const defaultName = SITE_NAME_SHORT;
  const defaultEmail = "onboarding@resend.dev";

  const explicitName = process.env.RESEND_FROM_NAME?.trim();
  const explicitEmail = process.env.RESEND_FROM_ADDRESS?.trim();
  if (explicitName && explicitEmail) {
    return `${quoteDisplayName(explicitName)} <${explicitEmail}>`;
  }

  const raw = process.env.RESEND_FROM_EMAIL?.trim();
  if (!raw) {
    return `${quoteDisplayName(defaultName)} <${defaultEmail}>`;
  }

  if (EMAIL_ONLY_RE.test(raw)) {
    return `${quoteDisplayName(defaultName)} <${raw}>`;
  }

  const match = raw.match(RFC_FROM_RE);
  if (match) {
    const name = (match[1] ?? match[2] ?? defaultName).trim();
    const email = match[3].trim();
    return `${quoteDisplayName(name)} <${email}>`;
  }

  const angle = raw.indexOf("<");
  if (angle > 0 && raw.endsWith(">")) {
    const name = raw.slice(0, angle).trim();
    const email = raw.slice(angle + 1, -1).trim();
    if (EMAIL_ONLY_RE.test(email) && name) {
      return `${quoteDisplayName(name)} <${email}>`;
    }
  }

  return `${quoteDisplayName(defaultName)} <${defaultEmail}>`;
}
