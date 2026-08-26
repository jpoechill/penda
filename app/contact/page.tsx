import Link from "next/link";
import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import PageHero from "../components/PageHero";
import ReviewCta from "../components/ReviewCta";
import {
  GOOGLE_REVIEW_URL,
  MAP_DIRECTIONS_URL,
  MAP_EMBED_URL,
  SITE_ADDRESS,
  SITE_CITY,
  SITE_EMAIL,
  SITE_FAX,
  SITE_PHONE,
  SITE_PHONE_TEL,
  SITE_POSTAL,
  SITE_STREET,
} from "../lib/site";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    `Contact Penda Home Care LLC in Maricopa, AZ. Call ${SITE_PHONE} or email ${SITE_EMAIL} to talk with our care team about assisted living.`,
  path: "/contact",
  image: "/img/contact_hero.png",
});

const contactItems = [
  {
    title: "Phone",
    content: (
      <>
        <a href={`tel:${SITE_PHONE_TEL}`} className="text-primary hover:underline">
          {SITE_PHONE}
        </a>
        <br />
        <span className="text-muted">Fax: {SITE_FAX}</span>
      </>
    ),
  },
  {
    title: "Hours",
    content: (
      <>
        Monday–Friday: 9AM – 6PM
        <br />
        Saturday: 10AM – 4PM
      </>
    ),
  },
  {
    title: "Email",
    content: (
      <a href={`mailto:${SITE_EMAIL}`} className="text-primary hover:underline">
        {SITE_EMAIL}
      </a>
    ),
  },
  {
    title: "Address",
    content: (
      <a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        {SITE_STREET}
        <br />
        {SITE_CITY}, AZ {SITE_POSTAL}
      </a>
    ),
  },
];

export default function ContactPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Get in touch"
        description="Reach Penda Home Care LLC in Maricopa, AZ—whether you’re exploring care options, scheduling a visit, or have questions."
        imageSrc="/img/contact_hero.png"
        imageAlt="Welcoming entry and care environment in Maricopa, AZ"
        imagePosition="object-[center_45%]"
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="prose-care">
              At Penda Home Care LLC in Maricopa, Arizona, we are committed to providing
              compassionate, personalized care for every resident. Reach out anytime—we’re happy to
              listen and guide you through next steps.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {contactItems.map((item) => (
              <div key={item.title} className="card-quiet">
                <h2 className="font-display text-2xl font-semibold text-foreground">{item.title}</h2>
                <div className="mt-3 text-lg leading-relaxed text-foreground">{item.content}</div>
              </div>
            ))}
          </div>

          <div className="card-quiet mt-12 overflow-hidden p-0">
            <div className="flex flex-col gap-3 border-b border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Find us</h2>
                <p className="mt-1 text-base text-muted">{SITE_ADDRESS}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !px-4 !py-2.5 text-sm"
                >
                  Get directions
                </Link>
                <Link
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !px-4 !py-2.5 text-sm"
                >
                  Open in Google Maps
                </Link>
              </div>
            </div>
            <div className="relative aspect-[16/10] w-full bg-[var(--warm-wash)] md:aspect-[21/9]">
              <iframe
                title="Map showing Penda Home Care LLC at 40968 W. Portis Drive, Maricopa, AZ"
                src={MAP_EMBED_URL}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <ReviewCta className="mt-12" />

          <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-3xl bg-[var(--warm-wash)] p-8 text-center sm:flex-row md:p-10">
            <Link href="/schedule" className="btn-primary w-full sm:w-auto">
              Schedule a Care Consultation
            </Link>
            <Link href={`tel:${SITE_PHONE_TEL}`} className="btn-secondary w-full sm:w-auto">
              Talk With Our Care Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
