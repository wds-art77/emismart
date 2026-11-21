"use client";

import { Button, Container, Eyebrow, H1, Lead, Pill, Section } from "@/components/ui";
import { Disclaimer } from "@/components/disclaimer";
import { useT } from "@/components/locale";

export function PricingView() {
  const d = useT();
  const p = d.pricingPage;
  const meta = [
    { price: p.free, href: "/eligibility", highlight: false },
    { price: p.perApplication, href: "/start", highlight: true },
    { price: p.perApplication, href: "/about#contact", highlight: false },
    { price: p.annual, href: "/about#contact", highlight: false },
  ];
  return (
    <Section>
      <Container>
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <H1>{p.title}</H1>
        <Lead>{p.lead}</Lead>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {p.tiers.map((t, i) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-2xl border p-6 ${meta[i].highlight ? "border-navy-900 bg-navy-950 text-white shadow-xl" : "border-navy-900/10 bg-white"}`}
            >
              {meta[i].highlight && <Pill tone="gold">{p.mostChosen}</Pill>}
              <h2 className="mt-3 text-xl font-semibold">{t.name}</h2>
              <p className={`mt-1 text-sm ${meta[i].highlight ? "text-white/70" : "text-navy-800/70"}`}>{t.tagline}</p>
              <p className="mt-4 text-3xl font-semibold">{meta[i].price}</p>
              <ul className={`mt-6 flex-1 space-y-2 text-sm ${meta[i].highlight ? "text-white/85" : "text-navy-800/85"}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={meta[i].href} variant={meta[i].highlight ? "gold" : "secondary"} className="w-full">{t.cta}</Button>
              </div>
            </div>
          ))}
        </div>
        <Disclaimer />
      </Container>
    </Section>
  );
}
