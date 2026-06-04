export const siteConfig = {
  name: "Noir Kafić",
  url: "https://noir-kafic.hr",
  description:
    "Premium specialty coffee bar u centru Varaždina. Single-origin kava, deserti i ambijent za opuštanje i rad.",
  locale: "hr_HR",
  address: "Franjevački trg 4, 42000 Varaždin",
  phone: "+385 42 123 456",
  email: "noir@kafic.hr",
} as const;

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): import("next").Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
