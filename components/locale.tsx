"use client";

import { createContext, useContext, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { dicts, locales, type Dict, type Locale } from "@/lib/i18n";

type Ctx = { locale: Locale; d: Dict };
const LocaleContext = createContext<Ctx>({ locale: "en", d: dicts.en });

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={{ locale, d: dicts[locale] }}>{children}</LocaleContext.Provider>;
}

export function useT(): Dict {
  return useContext(LocaleContext).d;
}

export function useLocale() {
  const { locale } = useContext(LocaleContext);
  const router = useRouter();
  const pathname = usePathname();
  const setLocale = (next: Locale) => {
    try {
      document.cookie = `emismart_locale=${next}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      // ignore
    }
    const rest = pathname.replace(/^\/(en|fr|nl|de)(?=\/|$)/, "");
    const search = typeof window !== "undefined" ? window.location.search : "";
    router.push(`/${next}${rest}${search}`);
  };
  return { locale, setLocale };
}

export function LanguageSwitcher({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const { locale, setLocale } = useLocale();
  const d = useT();
  return (
    <label className={`flex items-center gap-2 text-xs ${className}`}>
      <span className="sr-only">{d.nav.language}</span>
      <select
        aria-label={d.nav.language}
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider focus:outline-none ${
          dark ? "border-white/20 bg-transparent text-white" : "border-navy-900/20 bg-white text-navy-900"
        }`}
      >
        {locales.map((l) => (
          <option key={l} value={l} className="text-navy-900">
            {dicts[l].meta.name}
          </option>
        ))}
      </select>
    </label>
  );
}
