import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import ReviewCta from "../components/ReviewCta";
import {
  LICENSE_CAPACITY,
  LICENSE_NUMBER,
  LICENSE_TYPE,
  LICENSING_STATEMENT,
} from "../lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Penda Home Care LLC—an Arizona licensed assisted living home (ADHS AL13024H) in Maricopa dedicated to personalized, compassionate care.",
};

const differences = [
  "A small private home—not a large institution",
  "Care tailored to each resident’s needs and preferences",
  "Focus on comfort, connection, and everyday dignity",
];

const values = ["Compassion", "Respect", "Dignity", "Independence", "Integrity"];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Who we are"
        description="A small private home in Maricopa, AZ where personalized care, dignity, and belonging come first."
        imageSrc="/img/about_cover.png"
        imageAlt="Penda Home Care care team smiling together"
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Our mission
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Care that comes from the heart
            </h2>
            <p className="mt-5 prose-care">
              Penda Home Care LLC offers a home-like experience grounded in respect, loyalty, and
              integrity. Our caregivers provide personalized support so seniors can live
              comfortably—with their preferences and well-being at the center of every day.
            </p>

            <h3 className="mt-12 font-display text-2xl font-semibold text-foreground">Our story</h3>
            <p className="mt-4 prose-care">
              Penda began because large care facilities often lack personal connection. Drawing on
              their own experiences with elderly loved ones, our founders set out to create a more
              intimate home—where physical care, emotional well-being, and individual preferences
              all matter.
            </p>

            <h3 className="mt-12 font-display text-2xl font-semibold text-foreground">
              What sets us apart
            </h3>
            <ul className="mt-5 space-y-3">
              {differences.map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base text-muted">
              Explore how we support daily living on our{" "}
              <Link href="/services" className="font-semibold text-primary hover:underline">
                Services
              </Link>{" "}
              page, or see the residence on{" "}
              <Link href="/facilities" className="font-semibold text-primary hover:underline">
                Our Home
              </Link>
              .
            </p>

            <h3 className="mt-12 font-display text-2xl font-semibold text-foreground">Our values</h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {values.map((value) => (
                <li
                  key={value}
                  className="rounded-lg border border-border bg-[var(--warm-wash)] px-4 py-2 text-base font-medium text-foreground"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <aside
            className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-[var(--warm-wash)] p-6 md:p-8"
            aria-labelledby="licensing-heading"
          >
            <h3
              id="licensing-heading"
              className="font-display text-xl font-semibold text-foreground md:text-2xl"
            >
              Our licensing &amp; credentials
            </h3>
            <ul className="mt-5 space-y-2 text-base leading-relaxed text-foreground">
              <li>{LICENSE_TYPE}</li>
              <li>
                ADHS License No. <span className="font-semibold">{LICENSE_NUMBER}</span>
              </li>
              <li>Licensed Capacity: {LICENSE_CAPACITY} Residents</li>
            </ul>
            <p className="mt-5 text-base leading-relaxed text-muted">{LICENSING_STATEMENT}</p>
          </aside>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              {
                src: "/img/services_hero.png",
                alt: "Caregiver walking arm-in-arm with a senior resident",
              },
              {
                src: "/img/who_we_are.png",
                alt: "Caregivers sharing a photo album with a senior resident",
              },
            ].map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/schedule" className="btn-primary">
              Schedule a Care Consultation
            </Link>
            <Link href="/facilities" className="btn-secondary">
              See our home
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-site">
          <ReviewCta />
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
