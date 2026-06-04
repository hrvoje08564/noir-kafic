import Image from "next/image";

type GalleryImage = {
  seed: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  {
    seed: "noir-gallery-interior-1",
    alt: "Tamni premium ambijent Noir Kafića s drvenim stolovima i toplim osvjetljenjem",
  },
  {
    seed: "noir-gallery-coffee-1",
    alt: "Flat white s latte artom poslužen u Noir Kafiću",
  },
  {
    seed: "noir-gallery-interior-2",
    alt: "Pogled na barski dio kafića s profesionalnim espresso aparatom",
  },
  {
    seed: "noir-gallery-coffee-2",
    alt: "Pour over filter kava u pripremi na drvenom stolu",
  },
  {
    seed: "noir-gallery-dessert-1",
    alt: "Cheesecake dana poslužen na tamnom tanjuru",
  },
  {
    seed: "noir-gallery-interior-3",
    alt: "Sjedalni dio kafića s pogledom na Franjevački trg",
  },
  {
    seed: "noir-gallery-food-1",
    alt: "Avokado toast na sourdough kruhu s svježim začinskim biljem",
  },
  {
    seed: "noir-gallery-coffee-3",
    alt: "Espresso u keramičkoj šalici na mramornoj površini",
  },
  {
    seed: "noir-gallery-dessert-2",
    alt: "Hrskavi croissant poslužen uz jutarnju kavu",
  },
];

export function GalleryGrid() {
  return (
    <section className="py-16 md:py-24 animate-fadeIn">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <li key={image.seed}>
              <figure className="group relative aspect-square overflow-hidden rounded-sm border border-border transition-colors duration-200 hover:border-gold-muted">
                {/* TODO: Replace with client image */}
                <Image
                  src={`https://picsum.photos/seed/${image.seed}/800/800`}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
