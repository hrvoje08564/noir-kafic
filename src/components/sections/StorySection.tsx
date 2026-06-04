import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StorySection() {
  return (
    <section className="py-16 md:py-24 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Naša priča"
              title="Više od prosječne kave"
              align="left"
              className="mb-8"
            />
            <div className="space-y-4 text-sm leading-relaxed text-secondary md:text-base">
              <p>
                Noir Kafić nastao je iz jednostavne ideje — stvoriti mjesto u
                centru Varaždina gdje kvaliteta kave i pažnja prema detaljima
                nisu luksuz, nego standard. Svaki espresso, svaki pour over i
                svaki desert priprema se s istom razinom posvećenosti.
              </p>
              <p>
                Fokusiramo se na single-origin zrna od provjerenih pržionica,
                sezonske sastojke i ambijent koji potiče opuštanje i duži
                boravak. Bilo da dolazite na jutarnji flat white, rad iz
                kafića ili popodnevni desert — ovdje ste uvijek dobrodošli.
              </p>
              <p>
                Ciljamo na mlađe profesionalce, studente i ljubitelje kave koji
                traže nešto više od brze kave u prolazu. Noir je mjesto gdje se
                usporava, razgovara i uživa u svakom gutljaju.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full lg:aspect-square">
            {/* TODO: Replace with client image */}
            <Image
              src="https://picsum.photos/seed/noir-about/800/1000"
              alt="Unutrašnjost Noir Kafića — tamni premium ambijent s drvenim detaljima"
              fill
              className="rounded-sm object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
