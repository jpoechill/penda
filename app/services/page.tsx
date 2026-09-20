import Image from "next/image";
import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import SectionHeading from "../components/SectionHeading";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Assisted Living Services",
  description:
    "Explore Penda Home Care LLC services in Maricopa, AZ: comfortable living, accessibility, safety, transportation, medication management, prepared meals, and AHCCCS/ALTCS support.",
  path: "/services",
  image: "/img/services_hero.jpg",
});

const SERVICE_IMAGE_VERSION = "20260902-living";

const services = [
  {
    title: "Comfortable Living Spaces",
    description:
      "We prioritize creating comfortable living spaces that feel like home. Each room is thoughtfully designed to balance privacy with accessibility, offering cozy furnishings, personalized touches, and ample natural light.",
    image: `/img/comfortable_living.png?v=${SERVICE_IMAGE_VERSION}`,
    alt: "Illustration of a cozy armchair by a sunny window with personalized home touches",
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
        description="Practical, compassionate support in Maricopa, AZ that helps seniors live safely, comfortably, and with dignity, day by day."
        imageSrc="/img/services_hero.jpg"
        imageAlt="Caregiver walking arm-in-arm with a senior resident in a bright, welcoming home"
        imagePosition="object-[center_18%]"
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <SectionHeading
            title="Wellness support for everyday living"
            description="Each service is designed around real daily needs, for residents and for the families who want them to feel secure and at home."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white">
                <div className="relative aspect-[4/3]">
                  {/* unoptimized: skip Next image cache so replaced card art shows immediately */}
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    unoptimized
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
        </div>
      </section>

      <section
        className="section-pad border-t border-border bg-[#f8faf9]"
        aria-labelledby="who-services-heading"
      >
        <div className="container-site">
          <div className="rounded-2xl border border-border bg-white p-6 md:p-10 lg:p-12">
            <SectionHeading
              id="who-services-heading"
              title="Who our services are for"
              description="Penda Home Care is a good fit for seniors who need dependable daily support in a safe, comfortable, home-like setting. That may include help with mobility, medications, meals, personal care, or simply having a caring professional nearby."
            />

            <div className="mx-auto max-w-3xl">
              <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                What our care includes
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Individualized care plans",
                  "Help with daily living activities",
                  "Medication support, as authorized",
                  "Personal care assistance",
                  "Trained, CPR and First Aid-ready caregivers",
                  "Coordination with families and healthcare providers",
                  "Hospice support when appropriate",
                  "Respect for rights, privacy, dignity, and independence",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-base leading-relaxed text-foreground"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        className="bg-white"
        title="Not sure which services you need?"
        description="Tell us about your loved one’s routines and concerns. We’ll help you understand how Penda Home Care LLC in Maricopa, AZ can support them."
      />
      <Footer />
    </main>
  );
}
