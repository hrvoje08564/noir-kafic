import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center lg:min-h-screen">
      {/* TODO: Replace with client image */}
      <Image
        src="https://picsum.photos/seed/noir-hero/1920/1080"
        alt="Tamni ambijent Noir Kafića s pažljivo pripremljenom specialty kavom"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 text-center md:px-8 md:py-24">
        <p className="mb-4 text-xs font-medium tracking-widest uppercase text-gold animate-fadeIn">
          Specialty Coffee · Varaždin
        </p>
        <h1 className="font-playfair text-3xl leading-tight text-primary sm:text-4xl md:text-6xl lg:text-7xl animate-fadeIn">
          Kava koja ima priču.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-secondary sm:text-base md:text-lg animate-fadeIn">
          Premium specialty coffee bar u centru Varaždina. Single-origin zrna,
          pažljivo odabrani deserti i ambijent za opuštanje ili rad.
        </p>
        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center animate-fadeIn">
          <Button href="/kontakt" className="w-full sm:w-auto">
            Rezerviraj stol
          </Button>
          <Button href="/menu" variant="secondary" className="w-full sm:w-auto">
            Pogledaj menu
          </Button>
        </div>
      </div>
    </section>
  );
}
