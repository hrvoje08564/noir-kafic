import { Button } from "@/components/ui/Button";

type CTASectionProps = {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CTASection({
  title,
  subtitle,
  buttonText = "Rezerviraj stol",
  buttonHref = "/kontakt",
}: CTASectionProps) {
  return (
    <section className="border-t border-border-subtle bg-background-secondary py-16 md:py-24 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
        <h2 className="font-playfair text-2xl text-primary sm:text-3xl md:text-4xl">{title}</h2>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-xl text-base text-secondary">{subtitle}</p>
        ) : null}
        <div className="mt-8">
          <Button href={buttonHref}>{buttonText}</Button>
        </div>
      </div>
    </section>
  );
}
