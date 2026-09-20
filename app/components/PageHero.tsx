import Image from "next/image";

type PageHeroProps = {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  /** Tailwind object-position class. Prefer object-top when faces are near the top of the photo. */
  imagePosition?: string;
};

export default function PageHero({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "object-top",
}: PageHeroProps) {
  return (
    <div className="pt-[4.75rem] md:pt-[5.5rem]">
      <header className="relative isolate min-h-[44vh] overflow-hidden md:min-h-[50vh]">
        {/* unoptimized: heroes are already compressed JPEGs  -  skip slow on-demand re-encode */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          unoptimized
          className={`object-cover ${imagePosition}`}
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#025176]/92 via-[#025176]/50 to-[#025176]/25"
          aria-hidden="true"
        />
        <div className="container-site relative flex min-h-[44vh] flex-col justify-end pb-12 pt-16 md:min-h-[50vh] md:pb-16 md:pt-20">
          <div className="max-w-3xl rounded-2xl bg-black/15 px-5 py-5 sm:px-7 sm:py-6">
            <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-2xl text-lg text-white/95 md:text-xl">{description}</p>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
