import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries, countryByCode } from "@/lib/countries";
import { CountryGuide } from "./guide";
import { alternates, OG_IMAGE } from "@/lib/seo";
import { countryName, isLocale } from "@/lib/i18n";

type Params = { code: string };

export function generateStaticParams() {
  return countries.map((c) => ({ code: c.code }));
}

export async function generateMetadata({ params }: { params: Promise<Params & { locale: string }> }): Promise<Metadata> {
  const { code, locale } = await params;
  const c = countryByCode(code);
  if (!c) return {};
  const name = countryName(c.code, isLocale(locale) ? locale : "en", c.name);
  return { title: `${name}: ${c.permitName}`, description: `${c.localName}. ${c.tagline}`, alternates: alternates(`/countries/${c.code}`), openGraph: { title: `${name}: ${c.permitName}`, description: c.tagline, images: [OG_IMAGE] } };
}

export default async function CountryPage({ params }: { params: Promise<Params> }) {
  const { code } = await params;
  const c = countryByCode(code);
  if (!c) notFound();
  return <CountryGuide c={c} />;
}
