import type { MetadataRoute } from "next";
import { countries } from "@/lib/countries";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.emismart.com";
  const now = new Date();
  const staticPages = ["", "/countries", "/eligibility", "/checklist", "/start", "/how-it-works", "/blue-card", "/employers", "/pricing", "/about", "/legal"];
  const paths = [...staticPages, ...countries.map((c) => `/countries/${c.code}`)];
  return paths.flatMap((p) =>
    locales.map((l) => ({
      url: `${base}/${l}${p}`,
      lastModified: now,
      alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${base}/${x}${p}`])) },
    })),
  );
}
