import type { Metadata } from "next";
import type { Locale } from "@/types/content";
import { routeFor } from "@/lib/i18n";
import { site } from "@/lib/content";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  locale: Locale;
  noIndex?: boolean;
};

export function createMetadata({ title, description, path = "/", locale, noIndex = false }: MetadataInput): Metadata {
  const canonicalPath = routeFor(locale, path);
  const canonical = `${site.domain}${canonicalPath}`;

  return {
    title,
    description,
    metadataBase: new URL(site.domain),
    alternates: {
      canonical,
      languages: {
        tr: `${site.domain}${routeFor("tr", path)}`,
        en: `${site.domain}${routeFor("en", path)}`
      }
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Hasan Kaşıkcı Portfolio",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    robots: noIndex
      ? {
          index: false,
          follow: false
        }
      : {
          index: true,
          follow: true
        }
  };
}
