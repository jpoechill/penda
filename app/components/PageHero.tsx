import Image from "next/image";

type PageHeroProps = {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
};

export default function PageHero({
  title,
  description,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <header className="relative isolate min-h-[42vh] overflow-hidden pt-24 md:min-h-[48vh] md:pt-28">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#025176]/90 via-[#025176]/55 to-[#025176]/25"
        aria-hidden="true"
      />
      <div className="container-site relative flex min-h-[42vh] flex-col justify-end pb-12 pt-32 md:min-h-[48vh] md:pb-16">
        <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-white/90 md:text-xl">{description}</p>
        )}
      </div>
    </header>
  );
}
