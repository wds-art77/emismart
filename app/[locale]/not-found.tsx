"use client";

import { Button, Container, H1, Lead, Section } from "@/components/ui";
import { useT } from "@/components/locale";

export default function NotFound() {
  const d = useT();
  return (
    <Section>
      <Container className="text-center">
        <H1>{d.notFound.title}</H1>
        <Lead className="mx-auto">{d.notFound.lead}</Lead>
        <div className="mt-8">
          <Button href="/">{d.notFound.cta}</Button>
        </div>
      </Container>
    </Section>
  );
}
