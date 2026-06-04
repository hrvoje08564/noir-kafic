import { CTASection } from "@/components/sections/CTASection";
import { MenuSection } from "@/components/sections/MenuSection";
import { PageHero } from "@/components/sections/PageHero";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Menu",
  description:
    "Pogledajte ponudu Noir Kafića — specialty kava, deserti i hrana. Espresso, flat white, pour over, cheesecake i više.",
  path: "/menu",
});

const coffeeItems = [
  {
    name: "Espresso",
    price: "1,50€",
    description: "Intenzivan shot iz dnevno svježe mljevenih single-origin zrna.",
  },
  {
    name: "Cappuccino",
    price: "2,20€",
    description: "Espresso s kremastom mliječnom pjenom, u savršenom omjeru.",
  },
  {
    name: "Flat White",
    price: "2,50€",
    description: "Silkasti espresso s perfektnom mikropjenom.",
  },
  {
    name: "Filter kava (pour over)",
    price: "3,00€",
    description: "Ručna priprema koja otkriva pun karakter odabranog zrna.",
  },
  {
    name: "Cold Brew",
    price: "3,50€",
    description: "Hladna ekstrakcija — glatka, osvježavajuća i nježno slatka.",
  },
];

const dessertItems = [
  {
    name: "Cheesecake dana",
    price: "4,50€",
    description: "Svježe pripremljen svaki dan u ograničenoj količini.",
  },
  {
    name: "Croissant (maslac / bademi)",
    price: "2,80€",
    description: "Pečeno svako jutro — hrskav vani, mekan iznutra.",
  },
  {
    name: "Brownie",
    price: "3,20€",
    description: "Tamna čokolada, toplo posluženo po narudžbi.",
  },
];

const foodItems = [
  {
    name: "Avokado toast",
    price: "6,50€",
    description: "Svjež kruh, zreli avokado i pažljivo odabrane začinske note.",
  },
  {
    name: "Granola bowl",
    price: "5,50€",
    description: "Jogurt, sezonsko voće i domaća granula.",
  },
];

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Ponuda"
        title="Naš menu"
        subtitle="Svaki napitak i jelo pripremljeno s pažnjom — od prvog espressa ujutro do posljednjeg zalogaja navečer."
      />

      <MenuSection
        eyebrow="Piće"
        title="Kava"
        items={coffeeItems}
      />

      <MenuSection
        eyebrow="Slatko"
        title="Deserti"
        items={dessertItems}
        className="bg-background-secondary"
      />

      <MenuSection
        eyebrow="Jelo"
        title="Hrana"
        items={foodItems}
      />

      <CTASection
        title="Rezervirajte stol"
        subtitle="Dođite na kavu, rad ili opuštanje — rezervirajte svoje mjesto unaprijed."
      />
    </>
  );
}
