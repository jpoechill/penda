import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import PageHero from "../components/PageHero";
import ConsultationForm from "../components/ConsultationForm";
import { pageMetadata } from "../lib/seo";
import { SITE_EMAIL, SITE_PHONE } from "../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Schedule a Care Consultation",
  description:
    `Schedule a care consultation or tour of Penda Home Care in Maricopa, AZ. Call ${SITE_PHONE} or email ${SITE_EMAIL} to visit our assisted living home.`,
  path: "/schedule",
  image: "/img/schedule_hero.jpg",
});

export default function SchedulePage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Schedule a care consultation"
        description="Visit our Maricopa, AZ home, meet the care team, and talk through what your loved one needs, at a pace that feels comfortable."
        imageSrc="/img/schedule_hero.jpg"
        imageAlt="Care director welcoming a family member at the door for a consultation visit"
        imagePosition="object-[center_30%]"
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="mx-auto max-w-2xl">
            <p className="prose-care text-center">
              Experience the warm, welcoming environment at Penda firsthand. Schedule a tour to see our
              living spaces, meet our compassionate staff, and get a feel for daily life with us.
            </p>

            <ConsultationForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
