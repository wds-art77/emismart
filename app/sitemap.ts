import type { MetadataRoute } from "next";
import { countries } from "@/lib/countries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://emismart.eu";
  const now = new Date();
  const staticPages = ["", "/countries", "/eligibility", "/checklist", "/start", "/how-it-works", "/employers", "/pricing", "/about", "/legal"];
  return [
    ...staticPages.map((p) => ({ url: `${base}${p}`, lastModified: now })),
    ...countries.map((c) => ({ url: `${base}/countries/${c.code}`, lastModified: now })),
  ];
}
