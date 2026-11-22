"use client";

import { Button, Card, Container, Eyebrow, H1, H2, Lead, Section } from "@/components/ui";
import { Disclaimer } from "@/components/disclaimer";
import { useT } from "@/components/locale";

export function EmployersView() {
  const d = useT();
  const e = d.employersPage;
  return (
    <>
      <Section>
        <Container>
          <Eyebrow>{e.eyebrow}</Eyebrow>
          <H1>{e.title}</H1>
          <Lead>{e.lead}</Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/start">{e.cta1}</Button>
            <Button href="/pricing" variant="secondary">{e.cta2}</Button>
          </div>
        </Container>
      </Section>
      <Section tone="sand">
        <Container>
          <H2>{e.benefitsTitle}</H2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {e.benefits.map((b) => (
              <Card key={b.title}>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/80">{b.body}</p>
              </Card>
            ))}
          </div>
          <Disclaimer />
        </Container>
      </Section>
    </>
  );
}
