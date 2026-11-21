import { Button, Container, H1, Lead, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section>
      <Container className="text-center">
        <H1>Page not found</H1>
        <Lead className="mx-auto">The page you are looking for does not exist or has moved.</Lead>
        <div className="mt-8">
          <Button href="/">Back to the home page</Button>
        </div>
      </Container>
    </Section>
  );
}
