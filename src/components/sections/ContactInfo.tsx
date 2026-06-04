import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-playfair text-2xl text-primary md:text-3xl">
          Kontakt informacije
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-secondary">
          Rezervirajte stol, pošaljite upit ili nas jednostavno posjetite —
          tu smo za vas.
        </p>
      </div>

      <ul className="space-y-6">
        <li className="flex items-start gap-4">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-muted">
              Adresa
            </p>
            <p className="mt-1 text-sm text-primary">
              Franjevački trg 4, 42000 Varaždin
            </p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-muted">
              Telefon
            </p>
            <a
              href="tel:+38542123456"
              className="mt-1 block text-sm text-primary transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              +385 42 123 456
            </a>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-muted">
              Email
            </p>
            <a
              href="mailto:noir@kafic.hr"
              className="mt-1 block text-sm text-primary transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              noir@kafic.hr
            </a>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-muted">
              Radno vrijeme
            </p>
            <p className="mt-1 text-sm text-primary">
              Pon–Pet 07:00–22:00
              <br />
              Sub 08:00–23:00
              <br />
              Ned 09:00–21:00
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
