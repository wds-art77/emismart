"use client";

import type { ReactNode } from "react";
import { Container, Eyebrow, H1, Lead, Section } from "@/components/ui";
import { Disclaimer } from "@/components/disclaimer";
import { useT } from "@/components/locale";

export function StartShell({ children }: { children: ReactNode }) {
  const d = useT();
  return (
    <Section>
      <Container>
        <Eyebrow>{d.tracker.eyebrow}</Eyebrow>
        <H1>{d.tracker.title}</H1>
        <Lead>{d.tracker.lead}</Lead>
        <div className="mt-10">{children}</div>
        <Disclaimer />
      </Container>
    </Section>
  );
}
