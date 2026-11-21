"use client";

import { Container, Eyebrow, H1, H2, Lead, Section } from "@/components/ui";
import { useT } from "@/components/locale";

export function AboutView() {
  const d = useT();
  const a = d.aboutPage;
  return (
    <>
      <Section>
        <Container>
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <H1>{a.title}</H1>
          <Lead>{a.lead}</Lead>
        </Container>
      </Section>
      <Section tone="sand">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <H2>{a.principlesTitle}</H2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-navy-800/85">
              {a.principles.map((p) => (
                <li key={p.title}><strong>{p.title}</strong> {p.body}</li>
              ))}
            </ul>
          </div>
          <div id="contact">
            <H2>{a.contactTitle}</H2>
            <p className="mt-6 text-sm leading-relaxed text-navy-800/85">{a.contactBody}</p>
            <div className="mt-6 rounded-2xl border border-navy-900/10 bg-white p-6 text-sm">
              <p className="font-semibold">{a.scopeTitle}</p>
              <ul className="mt-2 space-y-1 text-navy-800/85">
                {a.scope.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
