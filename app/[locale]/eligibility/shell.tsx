"use client";

import type { ReactNode } from "react";
import { Container, Eyebrow, H1, Lead, Section } from "@/components/ui";
import { Disclaimer } from "@/components/disclaimer";
import { useT } from "@/components/locale";

export function EligibilityShell({ children }: { children: ReactNode }) {
  const d = useT();
  return (
    <Section>
      <Container>
        <Eyebrow>{d.eligibility.eyebrow}</Eyebrow>
        <H1>{d.eligibility.title}</H1>
        <Lead>{d.eligibility.lead}</Lead>
        <div className="mt-10">{children}</div>
        <Disclaimer />
      </Container>
    </Section>
  );
}
