"use client";

import { Link } from "@/components/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./ui";
import { LanguageSwitcher, useLocale, useT } from "./locale";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Emismart home">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg font-serif text-lg font-bold ${
          dark ? "bg-white text-navy-950" : "bg-navy-950 text-white"
        }`}
      >
        E
      </span>
      <span className={`font-serif text-xl font-semibold tracking-tight ${dark ? "text-white" : "text-navy-950"}`}>
        Emismart
      </span>
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const d = useT();
  const { locale } = useLocale();
  const links = [
    { href: "/countries", label: d.nav.countries },
    { href: "/blue-card", label: d.nav.blueCard },
    { href: "/how-it-works", label: d.nav.howItWorks },
    { href: "/employers", label: d.nav.employers },
    { href: "/pricing", label: d.nav.pricing },
    { href: "/about", label: d.nav.about },
  ];
  return (
    <nav className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition hover:text-navy-700 ${
                pathname.startsWith(`/${locale}${l.href}`) ? "text-navy-900" : "text-navy-900/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            href="/eligibility"
            className="rounded-full bg-navy-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            {d.nav.checkEligibility}
          </Link>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button className="rounded-md p-2 text-navy-900" aria-label={d.nav.menu} aria-expanded={open} onClick={() => setOpen(!open)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </Container>
      {open && (
        <div className="border-t border-navy-900/10 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-navy-900 hover:bg-navy-50">
                {l.label}
              </Link>
            ))}
            <Link href="/eligibility" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-navy-900 px-5 py-2 text-center text-sm font-semibold text-white">
              {d.nav.checkEligibility}
            </Link>
          </Container>
        </div>
      )}
    </nav>
  );
}
