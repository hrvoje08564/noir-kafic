import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Najbolja kava u Varaždinu, bez konkurencije. Ambijent je savršen za rad ili opuštanje.",
    author: "Ana K.",
    source: "Google recenzija",
  },
  {
    quote:
      "Konačno mjesto gdje znaš da je kava pripremljena s pažnjom. Uvijek se vraćam.",
    author: "Matej P.",
    source: "Google recenzija",
  },
  {
    quote:
      "Cheesecake je nevjerojatan, a flat white je moj novi ritual svakog jutra.",
    author: "Sara L.",
    source: "Google recenzija",
  },
] as const;

function StarRating() {
  return (
    <div className="flex gap-1" aria-label="5 od 5 zvjezdica">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-gold text-gold"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Recenzije"
          title="Ono što naši gosti kažu"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.author} className="flex flex-col">
              <StarRating />
              <blockquote className="mt-4 flex-1">
                <p className="text-sm leading-relaxed text-primary">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </blockquote>
              <footer className="mt-6 border-t border-border-subtle pt-4">
                <cite className="not-italic">
                  <span className="block text-sm font-medium text-primary">
                    {item.author}
                  </span>
                  <span className="text-xs text-muted">{item.source}</span>
                </cite>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
