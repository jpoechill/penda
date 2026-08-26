import Link from "next/link";
import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import ReviewCta from "../components/ReviewCta";

export const metadata: Metadata = {
  title: "Family Stories",
  description:
    "Family stories from Penda Home Care LLC in Maricopa, AZ are coming soon. Leave a Google review or contact us to learn more.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Family stories"
        description="We’re gathering real experiences from families we serve in Maricopa, Arizona."
        imageSrc="/img/about_02.jpg"
        imageAlt="Meaningful moments of care and companionship"
      />

      <section className="section-pad bg-surface" aria-labelledby="stories-coming-soon">
        <div className="container-site">
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-[var(--warm-wash)] px-8 py-14 text-center md:px-12 md:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Coming soon
            </p>
            <h2
              id="stories-coming-soon"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Family stories are on the way
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We’re preparing authentic reflections from families who have trusted Penda Home Care
              LLC in Maricopa, AZ. Check back soon—or leave a Google review to share your experience
              with other local families.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/schedule" className="btn-primary w-full sm:w-auto">
                Schedule a Care Consultation
              </Link>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto">
                Talk With Our Care Team
              </Link>
            </div>
          </div>

          <ReviewCta className="mx-auto mt-10 max-w-2xl" />
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
