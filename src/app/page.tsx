import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { InfoBar } from "@/components/sections/InfoBar";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Početna",
  description:
    "Noir Kafić — premium specialty coffee bar u centru Varaždina. Rezervirajte stol, pogledajte menu i doživite kavu koja ima priču.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <MenuPreview />
      <Testimonials />
      <InfoBar />
    </>
  );
}
