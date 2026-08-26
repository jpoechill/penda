import Image from "next/image";
import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import SectionHeading from "../components/SectionHeading";
import { LICENSE_CAPACITY } from "../lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Penda Home Care LLC services in Maricopa, AZ—including comfortable living, accessibility, safety, transportation, medication management, and prepared meals.",
};

const services = [
  {
    title: "Comfortable Living Spaces",
    description:
      "We prioritize creating comfortable living spaces that feel like home. Each room is thoughtfully designed to balance privacy with accessibility, offering cozy furnishings, personalized touches, and ample natural light.",
    image: "/img/comfortable_living.png",
    alt: "Comfortable living room with cozy seating and natural light",
  },
  {
    title: "Accessibility for All",
    description:
      "Our facility is thoughtfully designed to accommodate residents with varying mobility needs. With wide hallways, grab bars, and wheelchair-friendly entrances, everyone can navigate their home with ease.",
    image: "/img/accessibility.png",
    alt: "Accessible hallway with handrails supporting independent mobility",
  },
  {
    title: "Safety and Security",
    description:
      "Your loved ones’ safety is our top priority. Penda Assisted Living is equipped with advanced emergency response systems and 24/7 staff supervision, ensuring that help is always just a call away.",
    image: "/img/safety_security.png",
    alt: "Illustration of a protected home representing safety and security",
  },
  {
    title: "Transportation Services",
    description:
      "We are able to arrange reliable and accessible transportation for all residents. Our transportation services accommodate mobility needs, and our staff are trained to assist every step of the way, helping you stay connected and independent.",
    image: "/img/transportation.png",
    alt: "Caregiver assisting a senior boarding an accessible passenger van",
  },
  {
    title: "Medication Management",
    description:
      "We provide comprehensive medication management to ensure residents take their medications safely and on time. We coordinate with healthcare providers, monitor prescriptions, and administer medications according to personalized care plans.",
    image: "/img/medication_management.png",
    alt: "Careful medication management with a weekly organizer",
  },
  {
    title: "Prepared Meals",
    description:
      "Specializing in dietary needs, we offer heart-healthy, low-sodium, diabetic-friendly, and customized meal options. Our kitchen creates a warm, home-like dining experience where residents enjoy fresh, balanced meals that support their well-being.",
    image: "/img/prepared_meals.png",
    alt: "Prepared balanced meal served with care",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Our care services"
        description="Practical, compassionate support in Maricopa, AZ that helps seniors live safely, comfortably, and with dignity—day by day."
        imageSrc="/img/services_hero.png"
        imageAlt="Caregiver walking arm-in-arm with a senior resident in a bright, welcoming home"
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <SectionHeading
            title="Wellness support for everyday living"
            description="Each service is designed around real daily needs—for residents and for the families who want them to feel secure and at home."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground">{service.title}</h2>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{service.description}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-12 rounded-2xl border border-dashed border-primary/40 bg-primary-soft/50 p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold text-foreground md:text-2xl">
              Who Our Services Are For
            </h2>
            <p className="mt-4 prose-care text-base">
              Penda Home Care is a good fit for seniors who need dependable daily support in a safe,
              comfortable, home-like setting. This may include help with mobility, medications, meals,
              personal care, or simply the reassurance of having a caring professional nearby.
            </p>
            <p className="mt-4 prose-care text-base">
              With a licensed capacity of only {LICENSE_CAPACITY} residents, we provide individualized
              attention without the institutional feel of a large facility. Our services include:
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {[
                "Individualized resident care plans",
                "Assistance with activities of daily living",
                "Medication support and management, as authorized",
                "Personal care and daily living assistance",
                "Trained and qualified caregivers",
                "CPR and First Aid-trained staff",
                "Coordination with healthcare providers and families",
                "Hospice coordination and support, when appropriate",
                "Respect for each resident’s rights, privacy, dignity, and independence",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 prose-care text-base">
              Penda Home Care also works with eligible residents through AHCCCS and ALTCS when services
              are authorized and covered.
            </p>
          </aside>
        </div>
      </section>

      <CtaBanner
        title="Not sure which services you need?"
        description="Tell us about your loved one’s routines and concerns. We’ll help you understand how Penda Home Care LLC in Maricopa, AZ can support them."
      />
      <Footer />
    </main>
  );
}
