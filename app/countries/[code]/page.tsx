import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { countries, countryByCode } from "@/lib/countries";
import { CountryGuide } from "./guide";

type Params = { code: string };

export function generateStaticParams() {
  return countries.map((c) => ({ code: c.code }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { code } = await params;
  const c = countryByCode(code);
  if (!c) return {};
  return { title: `${c.name}: ${c.permitName}`, description: `${c.localName}. ${c.tagline}` };
}

export default async function CountryPage({ params }: { params: Promise<Params> }) {
  const { code } = await params;
  const c = countryByCode(code);
  if (!c) notFound();
  return <CountryGuide c={c} />;
}
