import type { Metadata } from "next";
import { dicts, isLocale, locales, type Dict } from "./i18n";

export const SITE = "https://emismart.com";

export function alternates(path: string): Metadata["alternates"] {
  return {
    canonical: `${SITE}/en${path}`,
    languages: Object.fromEntries([...locales.map((l) => [l, `${SITE}/${l}${path}`]), ["x-default", `${SITE}/en${path}`]]),
  };
}

export async function pageMeta(
  params: Promise<{ locale: string }>,
  path: string,
  pick: (d: Dict) => { title: string; description: string },
): Promise<Metadata> {
  const { locale } = await params;
  const d = dicts[isLocale(locale) ? locale : "en"];
  const { title, description } = pick(d);
  return { title, description, alternates: alternates(path), openGraph: { title, description } };
}
