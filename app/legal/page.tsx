import type { Metadata } from "next";
import { Container, Eyebrow, H1, Lead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Legal and privacy",
  description: "Terms of use, nature of the service and privacy notice for Emismart.",
};

export default function LegalPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <H1>Nature of the service, terms and privacy.</H1>
        <Lead>Pre-launch version. The definitive terms will be published before any paid service is offered.</Lead>

        <div className="prose mt-10 max-w-none space-y-8 text-sm leading-relaxed text-navy-900">
          <section>
            <h2 className="text-xl font-semibold">1. Nature of the service</h2>
            <p className="mt-2">
              Emismart is a technology platform that organises information and documents for immigration procedures. It is not
              a public authority, does not issue permits or visas and does not guarantee any outcome. General information on
              the platform is drawn from official sources and is provided for orientation. It does not constitute legal advice.
              Where legal advice is required, Emismart puts users in contact with qualified lawyers who act under their own
              professional rules and responsibility.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">2. Accuracy and sources</h2>
            <p className="mt-2">
              Rules, fees, thresholds and processing times change. Emismart links to the official page for each statement
              and reviews content when the authorities publish changes. The official pages prevail in case of any
              difference. Users remain responsible for checking the current requirements before filing.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">3. Personal data</h2>
            <p className="mt-2">
              This preview version stores the eligibility answers, checklist progress and case file exclusively in the user's
              browser (local storage). No personal data is transmitted to Emismart or to third parties by these tools.
              The production version will process personal data as a controller under the General Data Protection
              Regulation (EU) 2016/679, hosted in the European Union, with a published privacy notice, data processing
              agreements with employers, retention limits and the rights of access, rectification, erasure and portability.
              Immigration files may include special categories of data such as health information in medical certificates
              and criminal record extracts; these will be processed only where the procedure requires it and with
              appropriate safeguards.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">4. Government fees</h2>
            <p className="mt-2">
              Fees charged by public authorities are paid by the user or the employer directly to the authority and are
              never included in Emismart's prices.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">5. Professional rules</h2>
            <p className="mt-2">
              Lawyers who provide services through Emismart remain bound by the rules of their bar, including on
              independence, conflicts of interest, professional secrecy and fees. Emismart does not interfere with the
              lawyer-client relationship.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
