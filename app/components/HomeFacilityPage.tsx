import Image from "next/image";
import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";
import PageHero from "./PageHero";
import CtaBanner from "./CtaBanner";
import SectionHeading from "./SectionHeading";
import { gallery, type HomeLocation } from "../lib/facilities";

type HomeFacilityPageProps = {
  home: HomeLocation;
};

export default function HomeFacilityPage({ home }: HomeFacilityPageProps) {
  const photos = home.gallery ?? gallery;

  return (
    <main>
      <Header />
      <PageHero
        title={home.heroTitle}
        description={home.heroDescription}
        imageSrc={home.heroImageSrc ?? "/img/facilities_hero.jpg"}
        imageAlt={home.heroImageAlt ?? `Bedroom at Penda Home Care, ${home.navLabel}`}
        imagePosition={home.heroImagePosition ?? "object-[center_40%]"}
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <SectionHeading
            align="left"
            eyebrow={home.eyebrow}
            title={home.introTitle}
          />

          <div className="prose-care -mt-4 max-w-3xl space-y-4 md:-mt-6">
            <p>{home.introDescription}</p>
            {home.introBody.map((paragraph, index) => (
              <p key={`${home.id}-intro-${index}`}>{paragraph}</p>
            ))}
          </div>

          {home.highlights && home.highlights.length > 0 && (
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {home.highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-[var(--warm-wash)] p-5 md:p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          )}

          {home.availabilityNote && (
            <aside className="mt-10 overflow-hidden rounded-2xl border border-primary/25 bg-primary-dark px-6 py-6 text-white md:px-8 md:py-7">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                Now accepting residents
              </p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {home.availabilityHeading ?? "Visit this home"}
              </p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                {home.availabilityNote}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/schedule" className="btn-on-dark !py-2.5 !px-5 text-sm">
                  {home.primaryCtaLabel}
                </Link>
                <Link href="/contact" className="btn-ghost-on-dark !py-2.5 !px-5 text-sm">
                  {home.secondaryCtaLabel}
                </Link>
              </div>
            </aside>
          )}

          <aside className="mt-10 rounded-2xl border border-dashed border-primary/40 bg-primary-soft/50 p-6 md:p-8">
            <h2 className="font-display text-xl font-semibold text-foreground">{home.detailsHeading}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-x-8">
              {home.details.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            {home.financingNote && (
              <p className="mt-6 border-t border-primary/20 pt-5 text-base font-medium leading-relaxed text-foreground">
                {home.financingNote}
              </p>
            )}
          </aside>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/schedule" className="btn-primary">
              {home.primaryCtaLabel}
            </Link>
            <Link href="/contact" className="btn-secondary">
              {home.secondaryCtaLabel}
            </Link>
          </div>

          {home.hasGallery ? (
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {photos.map((item) => (
                <div
                  key={`${home.id}-${item.src}`}
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${item.span}`}
                >
                  {/* unoptimized: gallery JPEGs are pre-sized  -  skip Next.js 30-day image cache */}
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
          ) : (
            <aside
              className="mt-12 flex min-h-[14rem] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-[var(--warm-wash)] px-6 py-12 text-center"
              aria-label="Home photos coming soon"
            >
              <p className="font-display text-2xl font-semibold text-foreground">
                {home.galleryComingSoonTitle ?? "Photos coming soon"}
              </p>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
                {home.galleryComingSoonBody ??
                  "We’re preparing a photo tour of this home. Schedule a visit to see the residence in person."}
              </p>
            </aside>
          )}

          <div className="card-quiet mt-12">
            <h2 className="font-display text-2xl font-semibold text-foreground">Address</h2>
            <div className="mt-3 text-lg leading-relaxed text-foreground">
              <a
                href={home.mapPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {home.street}
                <br />
                {home.cityLine}
              </a>
            </div>
          </div>

          <div className="card-quiet mt-5 overflow-hidden p-0">
            <div className="flex flex-col gap-3 border-b border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground">Find us</h2>
                <p className="mt-1 text-base text-muted">{home.address}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={home.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !px-4 !py-2.5 text-sm"
                >
                  Get directions
                </Link>
                <Link
                  href={home.mapPlaceUrl}
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
                title={`Map showing Penda Home Care at ${home.address}`}
                src={home.mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title={home.ctaTitle} description={home.ctaDescription} />
      <Footer />
    </main>
  );
}
