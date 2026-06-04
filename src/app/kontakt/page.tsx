import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { PageHero } from "@/components/sections/PageHero";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Kontaktirajte Noir Kafić — rezervacija stola, upiti i informacije. Franjevački trg 4, Varaždin.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Javite nam se"
        subtitle="Rezervirajte stol, pošaljite upit ili nas posjetite u centru Varaždina."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-16 md:grid-cols-2 md:gap-12 lg:gap-20">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <MapEmbed />
    </>
  );
}
