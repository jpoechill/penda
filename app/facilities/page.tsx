import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import SectionHeading from "../components/SectionHeading";
import { pageMetadata } from "../lib/seo";
import { facilitiesIntro, gallery, homeDetails } from "../lib/facilities";

export const metadata: Metadata = pageMetadata({
  title: "Our Assisted Living Home",
  description:
    "Tour Penda Home Care LLC’s assisted living home in Maricopa, AZ—5 bedrooms, 3 bathrooms, private and semi-private rooms, community areas, patio, and backyard.",
  path: "/facilities",
  image: "/img/facilities_hero.jpg",
});

export default function FacilitiesPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Our living home"
        description="Comfortable rooms and shared spaces in Maricopa, AZ—designed for safety, accessibility, and the feeling of belonging."
        imageSrc="/img/facilities_hero.jpg"
        imageAlt="Bedroom at Penda Home Care"
        imagePosition="object-[center_40%]"
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <SectionHeading
            align="left"
            title={facilitiesIntro.title}
            description={facilitiesIntro.description}
          />

          <div className="prose-care max-w-3xl space-y-4">
            <p>{facilitiesIntro.body}</p>
          </div>

          <aside className="mt-10 rounded-2xl border border-dashed border-primary/40 bg-primary-soft/50 p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold text-foreground">Home details</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-x-8">
              {homeDetails.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
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

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {gallery.map((item) => (
              <div
                key={item.src}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${item.span}`}
              >
                {/* unoptimized: gallery JPEGs are pre-sized — skip Next.js 30-day image cache */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
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
