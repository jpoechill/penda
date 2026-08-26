import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Schedule a Care Consultation",
  description:
    "Schedule a care consultation or tour of Penda Home Care LLC in Maricopa, Arizona. Meet our team and see if we’re the right fit.",
};

export default function SchedulePage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Schedule a care consultation"
        description="Visit our Maricopa, AZ home, meet the care team, and talk through what your loved one needs—at a pace that feels comfortable."
        imageSrc="/img/landscape_02.jpg"
        imageAlt="Welcoming outdoor setting at Penda"
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-2xl">
            <p className="prose-care text-center">
              Experience the warm, welcoming environment at Penda firsthand. Schedule a tour to see our
              living spaces, meet our compassionate staff, and get a feel for daily life with us.
            </p>

            <form
              className="mt-10 rounded-3xl border border-border bg-[var(--warm-wash)] p-6 md:p-10"
              action="mailto:pendacare2023@gmail.com"
              method="get"
              encType="text/plain"
            >
              <input type="hidden" name="subject" value="Care consultation request — Penda Home Care" />

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block font-semibold text-foreground">
                  Name <span className="text-primary">*</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="input-field font-normal"
                    placeholder="Jane Smith"
                  />
                </label>
                <label className="block font-semibold text-foreground">
                  Email or phone <span className="text-primary">*</span>
                  <input
                    type="text"
                    name="contact"
                    required
                    autoComplete="email"
                    className="input-field font-normal"
                    placeholder="email@example.com or (520) 555-0123"
                  />
                </label>
              </div>

              <label className="mt-5 block font-semibold text-foreground">
                What is your availability?
                <input
                  type="text"
                  name="availability"
                  className="input-field font-normal"
                  placeholder="e.g. Weekday mornings, or specific dates"
                />
              </label>

              <label className="mt-5 block font-semibold text-foreground">
                How did you hear about us?
                <input
                  type="text"
                  name="referral"
                  className="input-field font-normal"
                  placeholder="Friend, search, social media…"
                />
              </label>

              <label className="mt-5 block font-semibold text-foreground">
                Anything else we should know?
                <textarea
                  name="notes"
                  rows={4}
                  className="input-field resize-y font-normal"
                  placeholder="Share a bit about the care you’re looking for (optional)"
                />
              </label>

              <p className="mt-4 text-sm text-muted">
                {/* PLACEHOLDER: Wire this form to your preferred inbox, CRM, or scheduling tool */}
                Submitting opens your email client to send this request to pendacare2023@gmail.com. Prefer
                to talk now?{" "}
                <a href="tel:5204577645" className="font-semibold text-primary hover:underline">
                  Call (520) 457-7645
                </a>
                .
              </p>

              <button type="submit" className="btn-primary mt-6 w-full md:w-auto">
                Request a Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
