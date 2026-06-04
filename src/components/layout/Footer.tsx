import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/menu", label: "Menu" },
  { href: "/o-nama", label: "O nama" },
  { href: "/galerija", label: "Galerija" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              className="font-playfair text-2xl text-primary transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Noir Kafić
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary">
              Premium specialty coffee bar u srcu Varaždina. Single-origin kava,
              pažljivo odabrani deserti i ambijent za opuštanje.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium tracking-widest uppercase text-gold">
              Navigacija
            </h2>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium tracking-widest uppercase text-gold">
              Kontakt
            </h2>
            <ul className="flex flex-col gap-4 text-sm text-secondary">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span>Franjevački trg 4, 42000 Varaždin</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href="tel:+38542123456"
                  className="transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  +385 42 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href="mailto:noir@kafic.hr"
                  className="transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  noir@kafic.hr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span>
                  Pon–Pet 07:00–22:00
                  <br />
                  Sub 08:00–23:00
                  <br />
                  Ned 09:00–21:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border-subtle pt-8">
          <p className="text-center text-xs text-muted">
            © {new Date().getFullYear()} Noir Kafić. Sva prava pridržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
