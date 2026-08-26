type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass} mb-10 md:mb-14`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.14em] ${
            light ? "text-white/80" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`font-display text-3xl font-semibold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/85" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
