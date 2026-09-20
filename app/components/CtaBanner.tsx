import Link from "next/link";

type CtaBannerProps = {
  title?: string;
  description?: string;
  /** Extra classes for the outer section (e.g. background). */
  className?: string;
};

export default function CtaBanner({
  title = "Ready to talk about care for your loved one?",
  description = "We’re here to listen, answer questions, and help you explore whether Penda Home Care in Maricopa, AZ is the right fit. No pressure, just a caring conversation.",
  className = "",
}: CtaBannerProps) {
  return (
    <section className={`section-pad ${className}`.trim()} aria-labelledby="cta-heading">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl bg-primary-dark px-8 py-12 text-center md:px-16 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 20% 80%, #0d6b8c 0%, transparent 55%), radial-gradient(ellipse at 90% 10%, #3d7a6a 0%, transparent 45%)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <h2
              id="cta-heading"
              className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl"
            >
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/schedule" className="btn-on-dark w-full sm:w-auto">
                Schedule a Care Consultation
              </Link>
              <Link href="tel:5204577645" className="btn-ghost-on-dark w-full sm:w-auto">
                Talk With Our Care Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
