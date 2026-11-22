import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries, countryByCode } from "@/lib/countries";
import { CountryGuide } from "./guide";
import { alternates, OG_IMAGE } from "@/lib/seo";
import { countryName, isLocale } from "@/lib/i18n";
import { localizeCountry } from "@/lib/data/translations";

type Params = { code: string };

export function generateStaticParams() {
  return countries.map((c) => ({ code: c.code }));
}

export async function generateMetadata({ params }: { params: Promise<Params & { locale: string }> }): Promise<Metadata> {
  const { code, locale } = await params;
  const c = countryByCode(code);
  if (!c) return {};
  const loc = isLocale(locale) ? locale : "en";
  const name = countryName(c.code, loc, c.name);
  const lc = localizeCountry(c, loc);
  return { title: `${name}: ${lc.permitName}`, description: `${c.localName}. ${lc.tagline}`, alternates: alternates(`/countries/${c.code}`), openGraph: { title: `${name}: ${lc.permitName}`, description: lc.tagline, images: [OG_IMAGE] } };
}

export default async function CountryPage({ params }: { params: Promise<Params & { locale: string }> }) {
  const { code, locale } = await params;
  const c = countryByCode(code);
  if (!c) notFound();
  return <CountryGuide c={localizeCountry(c, isLocale(locale) ? locale : "en")} />;
}
