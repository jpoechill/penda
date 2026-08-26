import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Home",
  description:
    "Tour Penda Home Care LLC’s comfortable assisted living home in Maricopa, AZ—private rooms, shared living spaces, and welcoming outdoor areas.",
};

const gallery = [
  {
    src: "/photography/master_bedroom_2_123026.jpg",
    alt: "Master bedroom living accommodation",
    span: "col-span-2",
  },
  { src: "/photography/living_01.jpg", alt: "Living room seating area", span: "" },
  { src: "/img/two_beds.jpg", alt: "Comfortable bedroom with two beds", span: "" },
  { src: "/photography/living_03.jpg", alt: "Bright shared living space", span: "" },
  { src: "/photography/living_02.jpg", alt: "Home living area at Penda", span: "" },
  { src: "/img/backyard_01.jpg", alt: "Outdoor backyard space", span: "" },
  { src: "/img/backyard_02.jpg", alt: "Landscaped outdoor area", span: "" },
];

export default function FacilitiesPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Our living home"
        description="Comfortable rooms and shared spaces in Maricopa, AZ—designed for safety, accessibility, and the feeling of belonging."
        imageSrc="/photography/master_bedroom_123026.jpg"
        imageAlt="Bedroom at Penda Home Care"
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <SectionHeading
            align="left"
            title="A place that feels like home"
            description="At Penda Assisted Living, we take pride in providing a comfortable, safe, and welcoming environment for our residents. Our home is thoughtfully designed to meet the unique needs of seniors while fostering community and independence."
          />

          <div className="prose-care max-w-3xl space-y-4">
            <p>
              From spacious private and semi-private rooms to beautifully landscaped outdoor areas, every
              detail of our living spaces promotes both comfort and accessibility. Our common areas—including
              cozy lounges and dining spaces—encourage social connection, making residents feel truly at home.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {gallery.map((item) => (
              <div
                key={item.src}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${item.span}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          <aside className="mt-12 rounded-2xl border border-dashed border-primary/40 bg-primary-soft/50 p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold text-foreground">Amenities to confirm</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
              <li>[Room types and availability—private / semi-private]</li>
              <li>[On-site amenities such as gardens, activity spaces, or wellness features]</li>
              <li>[Any accessibility certifications or safety system details beyond what’s listed]</li>
            </ul>
          </aside>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/schedule" className="btn-primary">
              Schedule a Care Consultation
            </Link>
            <Link href="/contact" className="btn-secondary">
              Ask about availability
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Come see the home for yourself"
        description="A visit is the best way to feel the atmosphere and ask the questions that matter to your family."
      />
      <Footer />
    </main>
  );
}
