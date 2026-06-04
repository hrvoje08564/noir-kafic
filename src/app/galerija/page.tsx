import { CTASection } from "@/components/sections/CTASection";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { PageHero } from "@/components/sections/PageHero";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Galerija",
  description:
    "Pogledajte ambijent, kavu i ponudu Noir Kafića u Varaždinu. Fotografije prostora i specialty kave.",
  path: "/galerija",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galerija"
        title="Ambijent i trenutci"
        subtitle="Tamni prostor, pažljivo pripremljena kava i deserti — pogledajte što vas čeka u Noir Kafiću."
      />

      <GalleryGrid />

      <CTASection
        title="Posjetite nas"
        subtitle="Doživite ambijent uživo — rezervirajte stol ili nas samo dođite na kavu."
        buttonText="Rezerviraj stol"
      />
    </>
  );
}
