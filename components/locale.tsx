"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dicts, isLocale, locales, type Dict, type Locale } from "@/lib/i18n";

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; d: Dict };
const LocaleContext = createContext<Ctx>({ locale: "en", setLocale: () => {}, d: dicts.en });
const STORAGE = "emismart:locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE);
      if (isLocale(stored)) {
        setLocaleState(stored);
        return;
      }
      const nav = navigator.language?.slice(0, 2).toLowerCase();
      if (isLocale(nav)) setLocaleState(nav);
    } catch {
      // storage unavailable
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE, l);
    } catch {
      // ignore
    }
  };

  return <LocaleContext.Provider value={{ locale, setLocale, d: dicts[locale] }}>{children}</LocaleContext.Provider>;
}

export function useT(): Dict {
  return useContext(LocaleContext).d;
}

export function useLocale() {
  const { locale, setLocale } = useContext(LocaleContext);
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
