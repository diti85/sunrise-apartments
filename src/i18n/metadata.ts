import type { Metadata } from "next";
import { dictionaries, localePaths, type Locale } from "./dictionaries";

export function buildMetadata(locale: Locale): Metadata {
  const t = dictionaries[locale].meta;
  return {
    metadataBase: new URL("https://sunriseprishtina.com"),
    title: t.title,
    description: t.description,
    keywords: [
      "luxury apartments",
      "premium stays",
      "Airbnb",
      "furnished apartments",
      "Sunrise Apartments",
      "Prishtina",
      "apartamente Prishtinë",
    ],
    alternates: {
      canonical: localePaths[locale],
      languages: {
        en: localePaths.en,
        sq: localePaths.sq,
        "x-default": localePaths.en,
      },
    },
    openGraph: {
      title: t.title,
      description: t.ogDescription,
      type: "website",
      locale: locale === "sq" ? "sq_AL" : "en_US",
      url: localePaths[locale],
    },
  };
}
