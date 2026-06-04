type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-10 md:mb-16 ${isCentered ? "text-center" : "text-left"} ${className}`.trim()}
    >
      <p className="mb-4 text-xs font-medium tracking-widest uppercase text-gold">
        {eyebrow}
      </p>
      <div
        className={`mb-6 h-px w-10 bg-gold ${isCentered ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      <h2 className="font-playfair text-3xl text-primary sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? (
        <p
          className={`mt-4 max-w-2xl text-sm text-secondary sm:text-base ${isCentered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
