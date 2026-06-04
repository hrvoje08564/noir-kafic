import { SectionHeading } from "@/components/ui/SectionHeading";

export type MenuItem = {
  name: string;
  price: string;
  description: string;
};

type MenuSectionProps = {
  eyebrow: string;
  title: string;
  items: MenuItem[];
  className?: string;
};

export function MenuSection({
  eyebrow,
  title,
  items,
  className = "",
}: MenuSectionProps) {
  return (
    <section className={`py-16 md:py-20 animate-fadeIn ${className}`.trim()}>
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          align="left"
          className="mb-8 md:mb-12"
        />

        <ul className="divide-y divide-border-subtle">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex flex-col gap-1 py-6 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
            >
              <div className="min-w-0 flex-1">
                <h3 className="font-playfair text-lg text-primary sm:text-xl">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-secondary">
                  {item.description}
                </p>
              </div>
              <span className="shrink-0 text-sm font-medium tabular-nums text-gold">
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
