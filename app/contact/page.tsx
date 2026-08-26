import Link from "next/link";
import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import PageHero from "../components/PageHero";
import ReviewCta from "../components/ReviewCta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Penda Home Care LLC in Maricopa, AZ. Call (520) 457-7645 or email pendacare2023@gmail.com to talk with our care team.",
};

const contactItems = [
  {
    title: "Phone",
    content: (
      <>
        <a href="tel:5204577645" className="text-primary hover:underline">
          (520) 457-7645
        </a>
        <br />
        <span className="text-muted">Fax: (520) 423-3363</span>
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
        <br />
        <span className="text-sm text-muted">[Confirm Sunday / after-hours emergency contact if applicable]</span>
      </>
    ),
  },
  {
    title: "Email",
    content: (
      <a href="mailto:pendacare2023@gmail.com" className="text-primary hover:underline">
        pendacare2023@gmail.com
      </a>
    ),
  },
  {
    title: "Address",
    content: (
      <>
        40968 W. Portis Drive
        <br />
        Maricopa, AZ 85138
      </>
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
        imageSrc="/img/getintouch_01.jpg"
        imageAlt="Welcoming entry and care environment in Maricopa, AZ"
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

          <ReviewCta className="mt-12" />

          <div className="mt-12 flex flex-col items-center justify-center gap-3 rounded-3xl bg-[var(--warm-wash)] p-8 text-center sm:flex-row md:p-10">
            <Link href="/schedule" className="btn-primary w-full sm:w-auto">
              Schedule a Care Consultation
            </Link>
            <Link href="tel:5204577645" className="btn-secondary w-full sm:w-auto">
              Talk With Our Care Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
