import type { Country } from "../types";

export const si: Country =
  {
    code: "si",
    region: "Central and Eastern Europe",
    singlePermitDirective: true,
    name: "Slovenia",
    flag: "🇸🇮",
    languages: ["Slovenian"],
    permitName: "Single residence and work permit",
    localName: "Enotno dovoljenje za prebivanje in delo",
    tagline: "One application to the administrative unit, which obtains the Employment Service's consent on its own initiative.",
    overview:
      "The enotno dovoljenje combines the residence permit formerly issued by administrative units and the work permit formerly issued by the Employment Service of Slovenia (ZRSZ). The administrative unit (upravna enota) runs the procedure and asks ZRSZ for its consent ex officio; ZRSZ checks the employer, the worker and the labour market. The permit is tied to a specific employer. A fast-track applies to occupations listed in a government decree, where work may start on the certificate of submission once ZRSZ consent is given.",
    whoApplies:
      "The worker or the employer may apply. Companies and sole traders may file for the worker without a power of attorney, at any administrative unit or electronically through the SPOT portal; workers themselves cannot file electronically. A worker who is not lawfully in Slovenia applies at a Slovenian diplomatic mission or consular post, where fingerprints are also taken. A worker lawfully residing in Slovenia may apply at any administrative unit. The card is collected in person.",
    authorities: [
      "Upravne enote (administrative units): receive applications, lead the procedure and issue the permit",
      "Zavod Republike Slovenije za zaposlovanje (ZRSZ, Employment Service of Slovenia): consent to the single permit and labour market check",
      "Slovenian diplomatic missions and consular posts: applications from abroad and fingerprints",
      "Ministry of the Interior (residence rules) and the ministry responsible for labour (employment of foreigners)",
      "Administrative Court: appeals against administrative unit decisions",
    ],
    legalBasis: [
      "Zakon o tujcih (ZTuj-2, Foreigners Act), in particular Articles 33 to 37",
      "Zakon o zaposlovanju, samozaposlovanju in delu tujcev (ZZSDT, Employment, Self-employment and Work of Foreigners Act)",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Decree determining the activities and occupations in which foreigners may be employed more quickly (fast-track list), and the rules on residence permit forms and fingerprinting",
    ],
    decisionPeriod:
      "No specific decision period for the single permit is stated on the official pages; the general rules of the Slovenian administrative procedure act apply and the recast directive requires a decision within 90 days of a complete application. ZRSZ must decide within 15 days on consent to a written approval for a change of job or employer. Waiting times at administrative units have been long in recent years, and incomplete files are the main cause. Confirm current times with the administrative unit.",
    validity:
      "According to the Employment Service, a first permit is issued for the duration of the employment or work contract and for no more than 2 years, and an extension for no more than 3 years; the EU Immigration Portal still shows the earlier limits of 1 year and 2 years, so confirm the current text of Article 37 ZTuj-2. Extension must be requested before expiry under the same conditions, with a fresh criminal record certificate. A change of job or employer during validity needs a written approval from the administrative unit, after ZRSZ consent. A permanent residence permit may be requested after 5 years.",
    labourMarketTest:
      "Yes, in the form of ZRSZ consent. Before applying the employer may file a vacancy notice with labour market check (form PDM-KTD), and ZRSZ states within 5 working days whether suitable unemployed candidates are registered; if the notice is not filed beforehand ZRSZ checks the register during the consent procedure. ZRSZ also requires that the employer is registered and active, has settled its tax obligations, is not banned from employing foreigners by a final fine, and provides statements on accommodation and on any dismissals for business reasons in the previous 6 months. Consent is tied to one employer. No consent is needed for self-employed foreigners, and for citizens of Bosnia and Herzegovina and Serbia the work permit under the bilateral agreement counts as consent.",
    steps: [
      {
        title: "Optional vacancy notice and labour market check",
        actor: "Employer",
        detail:
          "The employer may file form PDM-KTD with ZRSZ through SPOT or in person. ZRSZ replies within 5 working days whether suitable candidates are registered as unemployed. Doing this first lowers the risk of refusal.",
      },
      {
        title: "Sign the employment contract and prepare statements",
        actor: "Both",
        detail:
          "The contract signed by the employer is attached to the application, together with the employer's statements on accommodation and on terminations for business reasons in the previous 6 months.",
      },
      {
        title: "File the application",
        actor: "Both",
        detail:
          "The employer files at any administrative unit or electronically via SPOT (eBDP), or the worker files at a Slovenian mission abroad or, if lawfully present, at an administrative unit. The fee is paid on filing and fingerprints are taken. Applicants lawfully in Slovenia receive a certificate of submission that serves as a temporary residence permit until the decision.",
      },
      {
        title: "Administrative unit obtains ZRSZ consent",
        actor: "Authority",
        detail:
          "The administrative unit checks the residence conditions (passport, health insurance, means of subsistence, criminal record) and asks ZRSZ ex officio for consent. ZRSZ checks the employer, the worker's qualifications and the labour market. For fast-track occupations the application is treated as a priority.",
      },
      {
        title: "Decision and collection of the card",
        actor: "Employee",
        detail:
          "The administrative unit issues its decision and the worker collects the card in person, receiving an information sheet on entry deadlines and rights. Applicants abroad enter Slovenia with the permit or a visa where required.",
      },
      {
        title: "Registration for compulsory insurance and address",
        actor: "Employer",
        detail:
          "Within 15 days of collecting the card the employer concludes the employment and registers the worker for compulsory social insurance (form M1); in the fast-track procedure the deadline is 10 days from the information sheet. The permit may be revoked if this is missed. The worker registers the address with the administrative unit.",
      },
    ],
    employerDocs: [
      { label: "Application for the issue of a single permit, filed at the administrative unit or via SPOT" },
      { label: "Employment contract signed by the employer" },
      { label: "Employer statement on whether accommodation is provided" },
      { label: "Employer statement on terminations for business reasons in the previous 6 months, with names and dates where applicable" },
      { label: "PDM-KTD vacancy notice and ZRSZ labour market check notice, where filed in advance" },
      { label: "Evidence of settled tax obligations and registered activity", note: "Checked by ZRSZ in the consent procedure" },
    ],
    employeeDocs: [
      { label: "Valid passport, valid at least 3 months beyond the intended stay" },
      { label: "Personal photograph meeting the prescribed standard" },
      { label: "Criminal record certificate from the country of origin", note: "A new certificate not older than 3 months is needed at extension" },
      { label: "Health insurance covering at least emergency care in Slovenia, unless compulsorily insured" },
      { label: "Proof of sufficient means of subsistence, normally the employment contract" },
      { label: "Proof of education or professional qualification required for the post" },
      { label: "Fingerprints, taken at the mission or administrative unit" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "For university graduates with a contract of at least 1 year paying at least 1.5 times the average annual gross wage; issued by the administrative unit for 2 years with ZRSZ consent. The employer must publish the vacancy first." },
      { name: "Temporary residence permit for digital nomads", summary: "Introduced on 21 November 2025 for remote workers employed or self-employed abroad, with means of at least twice the average net salary. Valid 1 year, not extendable; family may join at once." },
      { name: "Bilateral agreements with Bosnia and Herzegovina and Serbia", summary: "Workers from these countries obtain a work permit under the agreement, which counts as ZRSZ consent for the single permit." },
      { name: "Researchers and higher education staff", summary: "Temporary residence permit for research or teaching under a hosting agreement (Article 38 ZTuj-2), filed by the institution." },
    ],
    watchOuts: [
      "Most delays come from incomplete files; administrative units have reported that only a minority of applications arrive complete. The employer statements on accommodation and on business-reason dismissals are often missing.",
      "ZRSZ refuses consent where the employer has unpaid taxes, is barred from employing foreigners after a final fine, or where suitable unemployed candidates are registered. Filing the PDM-KTD check first avoids surprises.",
      "After the card is collected the employer has 15 days (10 in the fast-track procedure) to register the worker for compulsory insurance; the permit can be withdrawn if this deadline is missed. Family reunification requires a permit issued for at least 1 year.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Slovenia", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-slovenia_en" },
      { label: "Infotujci.si: single residence and work permit for third-country nationals", url: "https://infotujci.si/en/vsebina/non-eu-citizens/temporary-residence-permit/based-on-employment/enotno-dovoljenje-za-prebivanje-in-delo-drzavljanov-tretjih-drzav/" },
      { label: "Employment Service of Slovenia: single permit", url: "https://www.ess.gov.si/en/jobseekers/employment-of-non-eu-migrant-workers/work-in-slovenia/single-permit" },
      { label: "Gov.si: employment and work of foreign nationals", url: "https://www.gov.si/en/topics/employment-and-work-of-foreign-nationals/" },
    ],
  };
