"use client";

import { Container, Eyebrow, H1, Lead, Section } from "@/components/ui";
import { useT } from "@/components/locale";

export function LegalView() {
  const d = useT();
  const l = d.legalPage;
  return (
    <Section>
      <Container className="max-w-3xl">
        <Eyebrow>{l.eyebrow}</Eyebrow>
        <H1>{l.title}</H1>
        <Lead>{l.lead}</Lead>
        <div className="mt-10 max-w-none space-y-8 text-sm leading-relaxed text-navy-900">
          {l.sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2">{s.body}</p>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
