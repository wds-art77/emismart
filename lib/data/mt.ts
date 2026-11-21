import type { Country } from "../types";

export const mt: Country =
  {
    code: "mt",
    region: "Southern Europe",
    singlePermitDirective: true,
    name: "Malta",
    flag: "🇲🇹",
    languages: ["Maltese", "English"],
    permitName: "Single permit",
    localName: "Permess uniku (Single Permit)",
    tagline: "Employer-led online application to Identità, with Jobsplus assessing the labour market before the permit is approved.",
    overview:
      "Malta issues one card combining residence and work for non-EU nationals employed for more than 6 months. The employer applies online through the Single Permit portal run by Identità (formerly Identity Malta). Identità refers each application to Jobsplus, the national employment agency, for a labour market assessment, and to the police for security clearance. Shorter engagements of under 6 months use a separate Jobsplus employment licence followed by a residence permit. Highly paid or specialised workers can use the faster Key Employee Initiative or Specialist Employee Initiative, which still result in a single permit.",
    whoApplies:
      "Only the employer, as the Maltese organisation offering the job, can submit a single permit application; the worker confirms the data through a link and attends biometrics. The worker must either still be abroad or already hold legal status in Malta through a valid residence permit or visa. The employer must be registered with Jobsplus and vetted by Identità before it can access the portal. Live-in carers are the one category allowed to apply directly, with the employer's endorsement.",
    authorities: [
      "Identità, Expatriates Unit: receives the application, issues the single permit and residence card",
      "Jobsplus: labour market test, Declaration of Suitability, employment licences for short-term work",
      "Malta Qualifications Recognition Information Centre (MQRIC): recognition of qualifications",
      "Maltese embassy or consulate: entry visa on the strength of the Approval in Principle letter",
      "Immigration Appeals Board: appeals against single permit refusals",
    ],
    legalBasis: [
      "Immigration Act (Chapter 217 of the Laws of Malta)",
      "Subsidiary Legislation 217.17, Single Application Procedure for a Single Permit as regards Residence and Work and a Common Set of Rights for those Third-Country Workers Legally Residing in Malta Regulations",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Employment and Industrial Relations Act (Chapter 452), which defines the protected status of third-country workers",
    ],
    decisionPeriod:
      "Regulation 12 of S.L. 217.17 requires a decision on a complete application as soon as possible and in any event within 4 months of lodging, extendable in exceptional circumstances linked to complexity. The clock is suspended while Identità waits for missing documents, and if no decision is given in time the file passes automatically to the Immigration Appeals Board. Jobsplus states that processing with all stakeholders may take up to 4 months. The recast directive requires a decision within 90 days of a complete application. Key Employee Initiative applications are processed in about 5 working days once complete.",
    validity:
      "A single permit is normally issued for a maximum of 1 year and is renewable, with a yearly renewal fee. Key Employee Initiative permits are issued for 1 year and may be renewed for up to 3 years. The permit is tied to the named employer and position. Long-term resident status is available after 5 years of legal and continuous residence.",
    labourMarketTest:
      "Yes. Identità refers every application to Jobsplus. Under the Jobsplus guidelines in force from August 2025 the employer must first try to recruit Maltese, EU or Swiss nationals or third-country nationals already entitled to work in Malta, and must place the vacancy with Jobsplus and on the EURES portal for at least 3 weeks within the 2 months before a first application. Jobsplus also checks the employer (at least one Maltese, EU or Swiss employee, no redundancies in similar roles in the previous 12 months, a Workforce Application Limit on third-country recruitment, compliance with the disability employment quota) and the worker (qualifications, experience and a Declaration of Suitability). Jobsplus may restrict recruitment in saturated sectors. Certain occupations are exempt from the test and the Key Employee Initiative has a lighter 2-week advertising requirement.",
    steps: [
      {
        title: "Register with Jobsplus and obtain portal access",
        actor: "Employer",
        detail:
          "The employer must be registered with Jobsplus and request access to the Single Permit portal (singlepermit.gov.mt) using a personal e-ID. Identità vets the organisation against Jobsplus, the Malta Business Registry and the tax authorities before granting access.",
      },
      {
        title: "Advertise the vacancy",
        actor: "Employer",
        detail:
          "Place the job advert with Jobsplus and on EURES for at least 3 weeks within the 2 months before applying, and keep evidence. Adverts that do not meet the Jobsplus standards lead to automatic refusal.",
      },
      {
        title: "Submit the online application",
        actor: "Employer",
        detail:
          "The employer completes the application and uploads the documents on the portal, including the Jobsplus Declaration of Suitability. The worker receives a link to confirm and validate the data. Final submission is only possible once the fee has been paid online by the employer or the worker.",
      },
      {
        title: "Stakeholder checks and Approval in Principle",
        actor: "Authority",
        detail:
          "Identità refers the file to Jobsplus for the labour market assessment and to the police for clearance. If approved, an Approval in Principle letter is issued. It does not allow the worker to start work.",
      },
      {
        title: "Visa and entry",
        actor: "Employee",
        detail:
          "Workers who need a visa present the Approval in Principle letter to a Maltese embassy or consulate; for crew members the letter must be used within 180 days. In-country applicants must hold a visa or permit valid for at least 6 more weeks on the application date.",
      },
      {
        title: "Biometrics and card issue",
        actor: "Employee",
        detail:
          "After arrival the worker books a biometrics appointment with Identità and shows the original documents. Employment may only start once the permit is issued; employing the worker before that is illegal.",
      },
      {
        title: "Register the engagement with Jobsplus",
        actor: "Employer",
        detail:
          "Once the single permit is in hand, the employer files the engagement form on the Jobsplus portal. Engagement and termination forms must be filed within 4 working days.",
      },
    ],
    employerDocs: [
      { label: "Single permit application submitted on the Identità portal by the vetted employer" },
      { label: "Jobsplus Declaration of Suitability confirming the worker is fit for the position" },
      { label: "Proof that the vacancy was advertised with Jobsplus and on EURES for the required period" },
      { label: "Signed employment contract or job offer with pay and position details", note: "Jobsplus may ask for contracts, licences, evidence of business establishment and compliance records" },
      { label: "Evidence that the employer meets Jobsplus conditions, such as employing at least one Maltese, EU or Swiss national", note: "Checked by Jobsplus against its own records; keep engagement forms up to date" },
      { label: "Notarised power of attorney where a representative files on behalf of an employer abroad" },
    ],
    employeeDocs: [
      { label: "Certified copy of a valid passport" },
      { label: "Passport-size photograph" },
      { label: "Curriculum vitae" },
      { label: "Qualifications recognised by MQRIC, or a receipt showing recognition was requested", note: "Without formal qualifications, at least 3 years of relevant experience is expected" },
      { label: "Registration with the relevant professional body for regulated professions" },
      { label: "Proof of accommodation in Malta, such as a lease agreement", note: "Listed on Identità checklists; confirm the current checklist for the category" },
      { label: "Health screening or insurance evidence as required by the Identità checklist" },
      { label: "Visa or residence document valid for at least 6 more weeks, for applicants already in Malta" },
    ],
    alternativeRoutes: [
      { name: "Key Employee Initiative (KEI)", summary: "Fast-track single permit for managerial or highly technical posts with a gross salary above a threshold set by Identità. Processing in about 5 working days once complete; 1-year permit renewable up to 3 years; a 2-week job advert suffices." },
      { name: "Specialist Employee Initiative (SEI)", summary: "Faster single permit for skilled workers with MQF level 6 qualifications, or MQF certification plus 3 years of experience, above a lower salary threshold than the KEI." },
      { name: "EU Blue Card", summary: "For highly qualified workers with a higher education qualification and a salary above the Blue Card threshold; processed by Identità under separate regulations." },
      { name: "Employment licence for work under 6 months", summary: "Jobsplus issues an employment licence, after which the worker applies to Identità for a residence permit. Used for seasonal and other short engagements." },
    ],
    watchOuts: [
      "The job advert must meet the Jobsplus standards (Jobsplus and EURES, at least 3 weeks, within the 2 months before filing). Non-compliant adverts cause automatic refusal and the fee is not refunded.",
      "Jobsplus applies a Workforce Application Limit per employer and refuses applications from companies that made redundancies in similar roles in the previous 12 months. Once the limit is reached, no further applications are accepted until the following month.",
      "Renewals, changes of employer, address or passport must be filed before the current document expires; late applications are rejected. An appeal against a refusal must reach the Immigration Appeals Board within 3 working days.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Malta", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-malta_en" },
      { label: "Identità, Expatriates Unit: single permit application", url: "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/single-permit/single-permit-application/" },
      { label: "Jobsplus: employing non-EU nationals (TCNs)", url: "https://jobsplus.gov.mt/find-candidates/non-eu-nationals-tcns" },
      { label: "Legislation Malta: Subsidiary Legislation 217.17", url: "https://legislation.mt/eli/sl/217.17/eng/pdf" },
    ],
  };
