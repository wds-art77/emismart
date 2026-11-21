"use client";

import type { ReactNode } from "react";
import { Container, Eyebrow, H1, Lead, Section } from "@/components/ui";
import { Disclaimer } from "@/components/disclaimer";
import { useT } from "@/components/locale";

export function ChecklistShell({ children }: { children: ReactNode }) {
  const d = useT();
  return (
    <Section>
      <Container>
        <Eyebrow>{d.checklist.eyebrow}</Eyebrow>
        <H1>{d.checklist.title}</H1>
        <Lead>{d.checklist.lead}</Lead>
        <div className="mt-10">{children}</div>
        <Disclaimer />
      </Container>
    </Section>
  );
}
