import Link from "next/link";
import { GOOGLE_REVIEW_URL } from "../lib/site";

type ReviewCtaProps = {
  variant?: "light" | "dark" | "soft";
  className?: string;
};

export default function ReviewCta({ variant = "soft", className = "" }: ReviewCtaProps) {
  const styles =
    variant === "dark"
      ? "border-white/20 bg-white/10 text-white"
      : variant === "light"
        ? "border-border bg-surface text-foreground"
        : "border-border bg-[var(--warm-wash)] text-foreground";

  const muted = variant === "dark" ? "text-white/80" : "text-muted";
  const linkClass =
    variant === "dark"
      ? "btn-on-dark !py-2.5 !px-5 text-sm"
      : "btn-primary !py-2.5 !px-5 text-sm";

  return (
    <aside
      className={`rounded-2xl border px-6 py-7 text-center md:px-8 md:py-8 ${styles} ${className}`}
      aria-labelledby="review-cta-heading"
    >
      <h2
        id="review-cta-heading"
        className={`font-display text-xl font-semibold tracking-tight md:text-2xl ${
          variant === "dark" ? "text-white" : "text-foreground"
        }`}
      >
        Leave a Google review for Penda Home Care
      </h2>
      <p className={`mx-auto mt-2 max-w-lg text-base leading-relaxed ${muted}`}>
        If we’ve cared for your family in Maricopa, AZ, a short Google review helps other families
        find the right local home for their loved one.
      </p>
      <Link
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${linkClass} mt-5`}
      >
        Leave a Google Review
      </Link>
    </aside>
  );
}
