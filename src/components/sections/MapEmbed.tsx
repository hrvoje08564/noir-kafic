const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Franjeva%C4%8Dki+trg+4,+42000+Vara%C5%BEdin,+Croatia&hl=hr&z=16&output=embed";

export function MapEmbed() {
  return (
    <section className="border-t border-border-subtle" aria-label="Lokacija na karti">
      <div className="relative aspect-video w-full md:aspect-[21/9]">
        <iframe
          src={MAP_EMBED_URL}
          title="Noir Kafić na karti — Franjevački trg 4, Varaždin"
          className="absolute inset-0 h-full w-full border-0 grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
