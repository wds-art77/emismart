"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./ui";

const links = [
  { href: "/countries", label: "Countries" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/employers", label: "Employers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

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
  return (
    <nav className="sticky top-0 z-40 border-b border-navy-900/10 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition hover:text-navy-700 ${
                pathname.startsWith(l.href) ? "text-navy-900" : "text-navy-900/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/eligibility"
            className="rounded-full bg-navy-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            Check eligibility
          </Link>
        </div>
        <button
          className="md:hidden rounded-md p-2 text-navy-900"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
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
              Check eligibility
            </Link>
          </Container>
        </div>
      )}
    </nav>
  );
}
