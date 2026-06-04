import { Clock, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

type InfoItem = {
  icon: typeof MapPin;
  label: string;
  value?: string;
  valueMobile?: ReactNode;
  valueDesktop?: string;
  href?: string;
};

const infoItems: InfoItem[] = [
  {
    icon: MapPin,
    label: "Adresa",
    value: "Franjevački trg 4, Varaždin",
  },
  {
    icon: Clock,
    label: "Radno vrijeme",
    valueMobile: (
      <>
        Pon–Pet 07:00–22:00
        <br />
        Sub 08:00–23:00
        <br />
        Ned 09:00–21:00
      </>
    ),
    valueDesktop: "Pon–Pet 07–22 · Sub 08–23 · Ned 09–21",
    href: undefined,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+385 42 123 456",
    href: "tel:+38542123456",
  },
];

export function InfoBar() {
  return (
    <section
      className="border-y border-border bg-background-secondary py-10 animate-fadeIn"
      aria-label="Kontakt informacije"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
          {infoItems.map((item) => (
            <li key={item.label} className="flex items-start gap-4">
              <item.icon
                className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-muted">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-sm text-primary transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {item.value}
                  </a>
                ) : item.valueMobile ? (
                  <>
                    <p className="mt-1 text-sm text-primary md:hidden">
                      {item.valueMobile}
                    </p>
                    <p className="mt-1 hidden text-sm text-primary md:block">
                      {item.valueDesktop}
                    </p>
                  </>
                ) : (
                  <p className="mt-1 text-sm text-primary">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
