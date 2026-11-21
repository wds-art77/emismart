import type { Metadata } from "next";
import { Container, Eyebrow, H1, H2, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "Why Emismart exists and how it is built.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container>
          <Eyebrow>About Emismart</Eyebrow>
          <H1>Migration to Europe deserves the clarity that already exists elsewhere.</H1>
          <Lead>
            Digital platforms have made United States immigration more understandable for families and employers. Europe
            has had a Single Permit Directive since 2011 and a recast since 2024, yet the lived experience remains five
            different procedures, in five administrative cultures, documented in five sets of languages. Emismart was
            conceived to close that gap, starting with the Benelux countries, France and Germany.
          </Lead>
        </Container>
      </Section>
      <Section tone="sand">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <H2>Principles</H2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-navy-800/85">
              <li><strong>Official sources only.</strong> Every rule shown on the platform is traceable to a public authority or legal text, and linked.</li>
              <li><strong>Technology for routine, judgment for complexity.</strong> Standard files move fast. Edge cases go to a lawyer.</li>
              <li><strong>Transparency on fees.</strong> Government fees are shown separately and never marked up.</li>
              <li><strong>Privacy by design.</strong> Immigration files contain the most sensitive personal data there is. Data minimisation, EU hosting and GDPR compliance are structural, not optional.</li>
              <li><strong>Multilingual by default.</strong> French, Dutch, German and English are the working languages of the five jurisdictions, and of the platform.</li>
            </ul>
          </div>
          <div id="contact">
            <H2>Contact</H2>
            <p className="mt-6 text-sm leading-relaxed text-navy-800/85">
              Emismart is in pre-launch. Employers, HR teams, relocation partners and immigration lawyers interested in the
              pilot can leave their details through the case file form or write to the address that will be published
              at launch.
            </p>
            <div className="mt-6 rounded-2xl border border-navy-900/10 bg-white p-6 text-sm">
              <p className="font-semibold">Pilot scope</p>
              <ul className="mt-2 space-y-1 text-navy-800/85">
                <li>Belgium: single permit, all Regions</li>
                <li>Netherlands: GVVA and highly skilled migrant route</li>
                <li>France: work authorisation and VLS-TS salarié</li>
                <li>Germany: §§ 18a, 18b, 18g with fast-track procedure</li>
                <li>Luxembourg: salaried worker authorisation and EU Blue Card</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
