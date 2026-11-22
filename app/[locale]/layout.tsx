import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LocaleProvider } from "@/components/locale";
import { dicts, isLocale, locales, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const d = dicts[isLocale(locale) ? locale : "en"];
  return {
    metadataBase: new URL(SITE),
    title: { default: "Emismart", template: "%s | Emismart" },
    description: d.footer.tagline,
    openGraph: { title: "Emismart", description: d.footer.tagline, type: "website", locale },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale as Locale}>
      <body className="flex min-h-screen flex-col">
        <LocaleProvider locale={locale as Locale}>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
