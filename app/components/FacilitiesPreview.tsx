'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  homeLocations,
  landingPreviewPhotos,
  SANTA_MONICA_PHOTO_VERSION,
  type HomeLocationId,
} from "../lib/facilities";

const previewByHome: Record<
  HomeLocationId,
  {
    featureImage: string;
    featureAlt: string;
    featurePosition: string;
    body: string;
    highlights: string[];
    thumbs: { src: string; alt: string }[];
  }
> = {
  portis: {
    featureImage: "/img/facilities_hero.jpg",
    featureAlt: "Bedroom at Penda Home Care on W. Portis Drive",
    featurePosition: "object-[center_40%]",
    body: "Our Portis Drive home offers comfortable private and semi-private rooms with easy access to welcoming shared spaces. Residents can relax, enjoy meals, and spend time together indoors or outside.",
    highlights: ["5 bedrooms", "3 bathrooms", "Community area", "Backyard"],
    thumbs: landingPreviewPhotos.map((photo) => ({
      src: photo.src,
      alt: photo.alt,
    })),
  },
  "santa-monica": {
    featureImage: `/photography/santa_monica_bedroom_01.jpg?v=${SANTA_MONICA_PHOTO_VERSION}`,
    featureAlt: "Bedroom at Penda Home Care on W. Santa Monica Drive",
    featurePosition: "object-[center_45%]",
    body: "Our newest residence on W. Santa Monica Drive is open and welcoming residents. Private-pay admissions only, with rooms currently available in a calm, home-like setting.",
    highlights: [
      "Now open",
      "Rooms available",
      "Private pay only",
      "Small-home setting",
    ],
    thumbs: [
      {
        src: `/photography/santa_monica_bedroom_01.jpg?v=${SANTA_MONICA_PHOTO_VERSION}`,
        alt: "Bright bedroom with soft linens at the Santa Monica Drive home",
      },
      {
        src: `/photography/santa_monica_bedroom_02.jpg?v=${SANTA_MONICA_PHOTO_VERSION}`,
        alt: "Cozy bedroom corner at the Santa Monica Drive home",
      },
    ],
  },
};

export default function FacilitiesPreview() {
  const [activeId, setActiveId] = useState<HomeLocationId>("portis");
  const home = homeLocations.find((item) => item.id === activeId)!;
  const preview = previewByHome[activeId];

  return (
    <section className="section-pad bg-[var(--warm-wash)]" aria-labelledby="home-preview-heading">
      <div className="container-site">
        <div className="mb-10 max-w-2xl md:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Our homes in Maricopa
          </p>
          <h2
            id="home-preview-heading"
            className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            See where everyday life feels comfortable and familiar
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:col-span-7 lg:aspect-[5/4]">
            <Image
              key={preview.featureImage}
              src={preview.featureImage}
              alt={preview.featureAlt}
              fill
              className={`object-cover ${preview.featurePosition}`}
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={85}
              unoptimized={preview.featureImage.includes("photography/")}
            />
          </div>

          <div className="lg:col-span-5">
            <div
              className="mb-4 flex w-full rounded-xl border border-border bg-white p-1"
              role="tablist"
              aria-label="Choose a home"
            >
              {homeLocations.map((item) => {
                const selected = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold transition duration-200 ${
                      selected
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted hover:bg-primary-soft hover:text-primary-dark"
                    }`}
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.navLabel.replace(" Drive", "")}
                  </button>
                );
              })}
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              {home.street}
            </p>
            <p className="mt-4 prose-care">{preview.body}</p>

            <ul className="mt-8 grid grid-cols-2 gap-3">
              {preview.highlights.map((item) => (
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
              <Link href={home.path} className="btn-secondary">
                Tour this home
              </Link>
            </div>
          </div>
        </div>

        {preview.thumbs.length > 0 && (
          <div
            className={`mt-12 grid grid-cols-1 gap-4 ${
              preview.thumbs.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
            }`}
          >
            {preview.thumbs.map((photo) => (
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
        )}
      </div>
    </section>
  );
}
