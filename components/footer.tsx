"use client";

import { Link } from "@/components/link";
import { Container } from "./ui";
import { Logo } from "./nav";
import { useT } from "./locale";
import { regions } from "@/lib/countries";

export function Footer() {
  const d = useT();
  return (
    <footer className="border-t border-navy-900/10 bg-navy-950 text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo dark />
          <p className="mt-4 text-sm leading-relaxed text-white/70">{d.footer.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">{d.footer.countries}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/countries" className="text-white/85 hover:text-white">{d.common.allStates}</Link>
            </li>
            {regions.map((r) => (
              <li key={r}>
                <Link href={`/countries#${r.toLowerCase().replace(/ /g, "-")}`} className="text-white/85 hover:text-white">
                  {d.common.regions[r]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">{d.footer.tools}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/eligibility" className="text-white/85 hover:text-white">{d.footer.eligibility}</Link></li>
            <li><Link href="/checklist" className="text-white/85 hover:text-white">{d.footer.checklist}</Link></li>
            <li><Link href="/start" className="text-white/85 hover:text-white">{d.footer.start}</Link></li>
            <li><Link href="/how-it-works" className="text-white/85 hover:text-white">{d.footer.howItWorks}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">{d.footer.company}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-white/85 hover:text-white">{d.footer.about}</Link></li>
            <li><Link href="/employers" className="text-white/85 hover:text-white">{d.footer.employers}</Link></li>
            <li><Link href="/pricing" className="text-white/85 hover:text-white">{d.footer.pricing}</Link></li>
            <li><Link href="/legal" className="text-white/85 hover:text-white">{d.footer.legal}</Link></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Emismart. {d.footer.rights}</p>
          <p>{d.footer.notAuthority}</p>
        </Container>
      </div>
    </footer>
  );
}
