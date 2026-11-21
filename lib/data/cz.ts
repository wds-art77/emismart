import type { Country } from "../types";

export const cz: Country =
  {
    code: "cz",
    region: "Central and Eastern Europe",
    singlePermitDirective: true,
    name: "Czechia",
    flag: "🇨🇿",
    languages: ["Czech"],
    permitName: "Employee Card",
    localName: "Zaměstnanecká karta",
    tagline: "A long-term residence permit for one registered vacancy, applied for in person at a Czech embassy and decided by the Ministry of the Interior.",
    overview:
      "The Employee Card is Czechia's single permit: a long-term residence permit for stays over 3 months that also authorises work in the specific job it was issued for. In the usual dual form the job must be listed in the Central Register of Job Vacancies that can be filled by Employee Card holders, kept by the Ministry of Labour and Social Affairs through the Labour Office. A non-dual card is a residence document only, for workers who have free access to the labour market or hold a separate work permit. The Ministry of the Interior decides; the worker applies in person at a Czech embassy abroad, or at a Ministry office in Czechia when already holding a long-term visa or permit.",
    whoFilesShort: "Worker, after employer registers vacancy",
    whoApplies:
      "The worker applies in person at the Czech embassy in the country of nationality or long-term residence, or inside Czechia at a Ministry of the Interior office if already holding a long-term visa or residence permit. Under government-approved programmes the employer may file on the worker's behalf by power of attorney. The employer's role is to register the vacancy with the Labour Office, consent to its inclusion in the central register and provide the vacancy number and the contract.",
    authorities: [
      "Ministry of the Interior, Department for Asylum and Migration Policy (Ministerstvo vnitra, OAMP): decision, biometrics, card issue, change notifications",
      "Czech embassies and consulates: receipt of applications abroad and issue of the D/VR visa to collect the card",
      "Labour Office of the Czech Republic (Úřad práce ČR) and Ministry of Labour and Social Affairs: vacancy registration, central register of vacancies for Employee Card holders, binding opinions and work permits",
    ],
    legalBasis: [
      "Zákon č. 326/1999 Sb., o pobytu cizinců na území České republiky (Act on the Residence of Foreign Nationals), as amended by Act No. 101/2014 Coll. transposing the Single Permit Directive",
      "Zákon č. 435/2004 Sb., o zaměstnanosti (Employment Act), on vacancy registration and the central register",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "The Ministry of the Interior decides within 60 days of a complete application, or within 90 days in especially complicated cases or where a binding opinion of the Labour Office is requested. The period stops running while proceedings are suspended, for example pending missing documents. The same periods apply to applications filed abroad and in Czechia.",
    validity:
      "Issued for the duration of the employment, up to a maximum of 2 years, and may be limited to the validity of a work permit or a qualification recognition decision. Extensions for up to 2 years at a time are filed in Czechia no earlier than 120 days and no later than the last day of validity.",
    labourMarketTest:
      "Indirect, through the central register: a vacancy can only be filled by an Employee Card holder if the employer has reported it to the regional Labour Office, consented to its inclusion in the register and, where the job could be filled from the domestic labour market, the vacancy has been published for at least 30 days. The Labour Office may also be asked by the Ministry for a binding opinion. Vacancies are removed from the register after 6 months. Employers listed as unreliable are excluded.",
    steps: [
      {
        title: "Report the vacancy and consent to the central register",
        actor: "Employer",
        detail:
          "The employer reports the vacancy to the regional Labour Office and consents to its inclusion in the Central Register of Job Vacancies fillable by Employee Card holders. After the publication period the vacancy receives an identification number which the worker needs for the application.",
      },
      {
        title: "Sign the contract and gather qualification evidence",
        actor: "Both",
        detail:
          "The parties sign an employment contract, agreement on work activity or a preliminary agreement. If the job or the employer requires a qualification, the worker obtains the diploma or certificate with a certified Czech translation.",
      },
      {
        title: "Book an appointment and file in person at the embassy",
        actor: "Employee",
        detail:
          "The worker books an appointment at the Czech embassy (some embassies run quotas or registration systems), files the application in person with the vacancy number, passport, photograph, proof of accommodation, contract, criminal record extract and other documents no older than 180 days, and pays the consular fee.",
      },
      {
        title: "Ministry of the Interior decides",
        actor: "Authority",
        detail:
          "The embassy forwards the file to the Ministry, which may ask the Labour Office for a binding opinion and decides within 60 or 90 days. A refusal can be challenged by asking the Ministry to reassess within 15 days.",
      },
      {
        title: "D/VR visa, travel insurance and entry",
        actor: "Employee",
        detail:
          "On approval the embassy issues a D/VR visa for collecting the card. The worker must show medical travel insurance covering the period until public health insurance starts, then travels to Czechia.",
      },
      {
        title: "Biometrics, bridging certificate and card collection",
        actor: "Employee",
        detail:
          "Within 30 days of arrival on the D/VR visa (3 working days if entering visa-free with a biometric passport) the worker registers at a Ministry office, gives biometric data and receives a Certificate of Compliance with the conditions, which allows work to start. The card is collected within 60 days, with the employer's confirmation that work has begun.",
      },
    ],
    employerDocs: [
      { label: "Vacancy reported to the Labour Office and consent to inclusion in the central register, giving the vacancy identification number" },
      { label: "Employment contract, agreement on work activity or preliminary agreement meeting the Labour Code and minimum wage rules" },
      { label: "Confirmation that the job does not require a qualification, or that the worker's qualification is accepted, where relevant" },
      { label: "For agency employment, a document stating the worker, the type and place of work and the user employer" },
      { label: "Confirmation that the worker has started work, needed when the card is collected" },
    ],
    employeeDocs: [
      { label: "Application form for a long-term residence permit (Employee Card) with the vacancy number" },
      { label: "Valid travel document, original" },
      { label: "Photograph of current appearance" },
      { label: "Proof of accommodation in Czechia" },
      { label: "Criminal record extract from the country of nationality and from countries of residence of more than 6 months in the last 3 years" },
      { label: "Proof of professional qualification where the job requires it, with certified Czech translation" },
      { label: "Medical report on request", note: "Attachments must be no older than 180 days, except the passport and photograph." },
      { label: "Medical travel insurance before the D/VR visa is issued" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "For highly qualified workers with a higher-education degree and a salary above the threshold published yearly, for vacancies in the separate Blue Card register." },
      { name: "Intra-company transferee card", summary: "For managers, specialists and trainees transferred within a group, outside the Employee Card register." },
      { name: "Government-approved economic migration programmes", summary: "Programmes such as Key and Research Staff and Highly Qualified Employee give access to embassy appointments, allow the employer to file by power of attorney and let employer confirmations replace some documents." },
      { name: "Non-dual Employee Card", summary: "Residence only, for workers who have free access to the labour market or hold a separate Labour Office work permit." },
    ],
    watchOuts: [
      "Embassy appointments are the bottleneck. Several embassies run quotas or registration systems and dates are cancelled or moved; the application cannot be filed by post or online and a wrong embassy means rejection.",
      "Every attachment except the passport and photograph expires after 180 days and must be in Czech or carry a certified translation; a stale criminal record extract or an unregistered vacancy stops the file.",
      "The card is tied to the registered vacancy. A change of employer or position must be reported to the Ministry in advance, normally only after 6 months with the first employer and at least 30 days before starting, and after employment ends the worker has a limited period (currently 90 days according to the Ministry's portal) to report a new job or the card lapses.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Czechia", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-czechia_en" },
      { label: "Information Portal for Foreigners (Ministry of the Interior): Employee Card", url: "https://ipc.gov.cz/en/visa-and-residence-permit-types/third-country-nationals/long-term-residence-permits/employee-card/" },
      { label: "Portál veřejné správy: report by an Employee Card holder of a change of employer", url: "https://portal.gov.cz/en/sluzby-vs/report-by-an-employee-cardholder-of-a-change-of-employer-work-position-or-employment-in-another-work-position-S8896" },
      { label: "Ministry of the Interior (archive): Employee Card and the transposition amendment", url: "https://archiv.mv.gov.cz/mvcren/article/employee-card.aspx" },
    ],
  };
