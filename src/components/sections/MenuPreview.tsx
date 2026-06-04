import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const featuredItems = [
  {
    name: "Flat White",
    price: "2,50€",
    category: "Kava",
    description: "Silkasti espresso s perfektnom mikropjenom.",
    imageSeed: "noir-flatwhite",
  },
  {
    name: "Filter kava",
    price: "3,00€",
    category: "Kava",
    description: "Pour over priprema koja otkriva okus zrna.",
    imageSeed: "noir-filter",
  },
  {
    name: "Cold Brew",
    price: "3,50€",
    category: "Kava",
    description: "Hladno extrahirana kava, glatka i osvježavajuća.",
    imageSeed: "noir-coldbrew",
  },
  {
    name: "Cheesecake dana",
    price: "4,50€",
    category: "Desert",
    description: "Dnevna svježa poslastica u ograničenoj količini.",
    imageSeed: "noir-cheesecake",
  },
  {
    name: "Croissant",
    price: "2,80€",
    category: "Desert",
    description: "Maslac ili bademi — pečeno svaki jutro.",
    imageSeed: "noir-croissant",
  },
  {
    name: "Avokado toast",
    price: "6,50€",
    category: "Hrana",
    description: "Svjež kruh, zreli avokado i začinske note.",
    imageSeed: "noir-toast",
  },
] as const;

export function MenuPreview() {
  return (
    <section className="bg-background-secondary py-16 md:py-24 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Naša ponuda"
          title="Od prvog gutljaja do posljednjeg zalogaja"
          subtitle="Svaki napitak i jelo pripremljeno s pažnjom — od single-origin espressa do dnevnog deserta."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <Card key={item.name} className="group flex flex-col overflow-hidden !p-0">
              <div className="relative aspect-video w-full overflow-hidden">
                {/* TODO: Replace with client image */}
                <Image
                  src={`https://picsum.photos/seed/${item.imageSeed}/800/600`}
                  alt={`${item.name} — ${item.description}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Badge className="mb-3 w-fit">{item.category}</Badge>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-playfair text-xl text-primary">{item.name}</h3>
                  <span className="shrink-0 text-sm font-medium text-gold">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-block text-xs font-medium tracking-widest uppercase text-gold transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Pogledaj cijeli menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
