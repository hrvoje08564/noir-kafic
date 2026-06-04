import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { StorySection } from "@/components/sections/StorySection";
import { ValuesGrid } from "@/components/sections/ValuesGrid";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "O nama",
  description:
    "Upoznajte Noir Kafić — premium specialty coffee bar u centru Varaždina. Naša priča, vrijednosti i strast prema kvalitetnoj kavi.",
  path: "/o-nama",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Noir Kafić"
        title="O nama"
        subtitle="Premium specialty coffee bar u srcu Varaždina — mjesto gdje kvaliteta, ambijent i pažnja prema detaljima dolaze prije svega."
      />

      <StorySection />
      <ValuesGrid />

      <CTASection
        title="Posjetite nas"
        subtitle="Franjevački trg 4, Varaždin. Rezervirajte stol ili nas samo dođite na kavu."
        buttonText="Rezerviraj stol"
      />
    </>
  );
}
