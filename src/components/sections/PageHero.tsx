type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="border-b border-border-subtle bg-background-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        {eyebrow ? (
          <p className="mb-4 text-xs font-medium tracking-widest uppercase text-gold">
            {eyebrow}
          </p>
        ) : null}
        <div
          className="mx-auto mb-6 h-px w-10 bg-gold"
          aria-hidden="true"
        />
        <h1 className="font-playfair text-3xl text-primary sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-secondary sm:text-base md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
