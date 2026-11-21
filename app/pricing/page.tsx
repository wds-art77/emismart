import type { Metadata } from "next";
import { Button, Container, Disclaimer, Eyebrow, H1, Lead, Pill, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for Emismart single permit case files.",
};

const tiers = [
  {
    name: "Explore",
    price: "Free",
    tagline: "For anyone checking their options.",
    features: ["Eligibility check", "Country guides for all 27 EU member states", "Document checklists", "Local case file preview"],
    cta: { label: "Start free", href: "/eligibility" },
    highlight: false,
  },
  {
    name: "Case file",
    price: "Per application",
    tagline: "For one employer and one employee.",
    features: [
      "Shared digital case file",
      "Guided document collection with completeness checks",
      "Deadline tracking and reminders",
      "Filing package for the competent authority",
      "E-mail support in English, French, Dutch and German",
    ],
    cta: { label: "Open a case file", href: "/start" },
    highlight: true,
  },
  {
    name: "Case file + counsel",
    price: "Per application",
    tagline: "For complex or urgent files.",
    features: [
      "Everything in Case file",
      "Review by a qualified immigration lawyer before filing",
      "Filing by a mandated representative where permitted",
      "Handling of requests for information and appeals",
    ],
    cta: { label: "Request a quote", href: "/about#contact" },
    highlight: false,
  },
  {
    name: "Employer plan",
    price: "Annual",
    tagline: "For HR teams with recurring hires.",
    features: ["Unlimited case files", "Team roles and approvals", "Compliance log and audit exports", "Account manager"],
    cta: { label: "Talk to us", href: "/about#contact" },
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Pricing</Eyebrow>
        <H1>Simple plans. Government fees are always shown separately.</H1>
        <Lead>
          Prices will be published at launch. Emismart never bundles official fees into its own price: visa fees,
          permit fees and administrative charges are paid directly to the authorities of the country concerned and
          listed transparently in the case file.
        </Lead>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-2xl border p-6 ${
                t.highlight ? "border-navy-900 bg-navy-950 text-white shadow-xl" : "border-navy-900/10 bg-white"
              }`}
            >
              {t.highlight && <Pill tone="gold">Most chosen</Pill>}
              <h2 className="mt-3 text-xl font-semibold">{t.name}</h2>
              <p className={`mt-1 text-sm ${t.highlight ? "text-white/70" : "text-navy-800/70"}`}>{t.tagline}</p>
              <p className="mt-4 text-3xl font-semibold">{t.price}</p>
              <ul className={`mt-6 flex-1 space-y-2 text-sm ${t.highlight ? "text-white/85" : "text-navy-800/85"}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={t.cta.href} variant={t.highlight ? "gold" : "secondary"} className="w-full">
                  {t.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Disclaimer />
      </Container>
    </Section>
  );
}
