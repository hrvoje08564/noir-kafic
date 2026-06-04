import Link from "next/link";

export function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-xs focus:font-medium focus:uppercase focus:tracking-widest focus:text-background focus:outline-none focus:ring-2 focus:ring-primary"
    >
      Preskoči na sadržaj
    </Link>
  );
}
