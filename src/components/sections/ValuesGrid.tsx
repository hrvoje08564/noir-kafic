import { Armchair, Coffee, Heart, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    icon: Coffee,
    title: "Kvaliteta",
    description:
      "Single-origin zrna, svježe mljevenje i precizna priprema u svakoj šalici.",
  },
  {
    icon: Armchair,
    title: "Ambijent",
    description:
      "Tamni, mirni prostor dizajniran za opuštanje, razgovor ili fokusiran rad.",
  },
  {
    icon: Heart,
    title: "Pažnja",
    description:
      "Od prvog espressa ujutro do posljednjeg deserta navečer — svaki detalj je važan.",
  },
  {
    icon: Users,
    title: "Zajednica",
    description:
      "Mjesto gdje se susreću ljubitelji kave, studenti i profesionalci iz Varaždina.",
  },
];

export function ValuesGrid() {
  return (
    <section className="bg-background-secondary py-16 md:py-24 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Vrijednosti"
          title="Zašto Noir"
          subtitle="Ono što nas vodi svaki dan — od odabira zrna do posljednjeg detalja u prostoru."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} className="flex flex-col">
              <value.icon
                className="h-6 w-6 text-gold"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-playfair text-xl text-primary">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
