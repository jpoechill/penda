import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { facilitiesIntro, homeDetails, landingPreviewPhotos } from "../lib/facilities";

const highlightStats = [
  homeDetails[0],
  homeDetails[1],
  homeDetails[3],
  homeDetails[7],
] as const;

export default function FacilitiesPreview() {
  return (
    <section className="section-pad bg-[var(--warm-wash)]" aria-labelledby="home-preview-heading">
      <div className="container-site">
        <SectionHeading
          id="home-preview-heading"
          eyebrow="Our home in Maricopa"
          title="See where everyday life feels comfortable and familiar"
        />

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:col-span-7 lg:aspect-[5/4]">
            <Image
              src="/img/facilities_hero.jpg"
              alt="Bedroom at Penda Home Care in Maricopa, AZ"
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={85}
            />
          </div>

          <div className="lg:col-span-5">
            <p className="prose-care">{facilitiesIntro.body}</p>

            <ul className="mt-8 grid grid-cols-2 gap-3">
              {highlightStats.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold leading-snug text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/schedule" className="btn-primary">
                Schedule a Home Visit
              </Link>
              <Link href="/facilities" className="btn-secondary">
                Tour the full home
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {landingPreviewPhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                unoptimized
                className="object-cover transition duration-500 hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
