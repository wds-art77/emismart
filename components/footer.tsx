import Link from "next/link";
import { Container } from "./ui";
import { Logo } from "./nav";
import { countries } from "@/lib/countries";

export function Footer() {
  return (
    <footer className="border-t border-navy-900/10 bg-navy-950 text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo dark />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Streamlined, digital single permit applications for Belgium, the Netherlands, France, Germany and Luxembourg.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Countries</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {countries.map((c) => (
              <li key={c.code}>
                <Link href={`/countries/${c.code}`} className="text-white/85 hover:text-white">
                  {c.flag} {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Tools</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/eligibility" className="text-white/85 hover:text-white">Eligibility check</Link></li>
            <li><Link href="/checklist" className="text-white/85 hover:text-white">Document checklist</Link></li>
            <li><Link href="/start" className="text-white/85 hover:text-white">Start a case file</Link></li>
            <li><Link href="/how-it-works" className="text-white/85 hover:text-white">How it works</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-white/85 hover:text-white">About Emismart</Link></li>
            <li><Link href="/employers" className="text-white/85 hover:text-white">For employers</Link></li>
            <li><Link href="/pricing" className="text-white/85 hover:text-white">Pricing</Link></li>
            <li><Link href="/legal" className="text-white/85 hover:text-white">Legal and privacy</Link></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Emismart. All rights reserved.</p>
          <p>Emismart is a technology platform. It is not a public authority and does not issue permits.</p>
        </Container>
      </div>
    </footer>
  );
}
