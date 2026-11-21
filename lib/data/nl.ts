import type { Country } from "../types";

export const nl: Country =
  {
    code: "nl",
    region: "Western Europe",
    singlePermitDirective: true,
    name: "Netherlands",
    flag: "🇳🇱",
    languages: ["Dutch"],
    permitName: "Single permit (GVVA)",
    localName: "Gecombineerde vergunning voor verblijf en arbeid",
    tagline: "Residence and work in one decision from the IND, with UWV advising on the labour market.",
    overview:
      "The GVVA is the Dutch single permit for non-EU workers who will stay and work for more than 3 months and who do not fall under a separate scheme such as the highly skilled migrant route. The Immigration and Naturalisation Service (IND) decides and always asks the UWV to advise on the labour market aspects. The permit comes with an additional document stating the employer and working conditions.",
    whoFilesShort: "Employer",
    whoApplies:
      "Normally the employer applies to the IND. The worker may also apply. Recognised sponsors use the faster TEV procedure for the entry visa and residence permit together.",
    authorities: [
      "Immigratie- en Naturalisatiedienst (IND): decision on residence and work",
      "UWV (Uitvoeringsinstituut Werknemersverzekeringen): advice on the labour market test",
      "Dutch embassy or consulate: issue of the MVV entry visa where required",
    ],
    legalBasis: [
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Wet arbeid vreemdelingen (Wav) and Besluit uitvoering Wav",
      "Vreemdelingenwet 2000 and Vreemdelingenbesluit 2000",
    ],
    decisionPeriod:
      "Legal decision period of 90 days once the fee is paid. Since the recast directive took effect in the Netherlands in May 2026, the IND may extend by 30 days for first applications in complex cases; a change of employer during a valid permit has a 45-day decision period.",
    validity:
      "Issued for the duration of the employment contract, with a maximum of 3 years. Renewal is possible. After 5 years of uninterrupted work the worker is free on the labour market.",
    labourMarketTest:
      "Yes, through UWV: the vacancy must have been open to the Dutch and EEA labour market (registered with UWV for at least 5 weeks), recruitment efforts must be documented, and pay must be market-conform and at least the statutory minimum wage. Exemptions exist for specific categories.",
    steps: [
      {
        title: "Check whether a separate scheme applies",
        actor: "Employer",
        detail:
          "Highly skilled migrants (kennismigranten), EU Blue Card holders, intra-corporate transferees and researchers follow their own routes and do not need a GVVA.",
      },
      {
        title: "Register the vacancy with UWV",
        actor: "Employer",
        detail:
          "The vacancy should be reported to UWV and open to the EEA market for at least 5 weeks before the application, with evidence of recruitment efforts.",
      },
      {
        title: "File the GVVA application",
        actor: "Employer",
        detail:
          "The employer submits the application and the worker's documents to the IND, online for recognised sponsors or on paper, and pays the fee.",
      },
      {
        title: "IND seeks UWV advice",
        actor: "Authority",
        detail:
          "UWV reviews the labour market test, wages and working conditions and advises the IND, which issues a single decision on residence and work.",
      },
      {
        title: "MVV collection and entry",
        actor: "Employee",
        detail:
          "If an MVV is required, the worker collects it at the embassy within 3 months of approval and travels to the Netherlands.",
      },
      {
        title: "Residence card and additional document",
        actor: "Employee",
        detail:
          "The worker collects the residence card at an IND desk and receives the additional document naming the employer. Registration with the municipality (BRP) and a TB test may be required depending on nationality.",
      },
    ],
    employerDocs: [
      { label: "GVVA application form signed by the employer" },
      { label: "Signed employment contract with salary at least the statutory minimum and market-conform" },
      { label: "Proof of vacancy registration with UWV and recruitment efforts" },
      { label: "Chamber of Commerce (KVK) extract" },
      { label: "Antecedents certificate and declaration of the employer where requested" },
    ],
    employeeDocs: [
      { label: "Valid passport, copy of all pages with stamps or entries" },
      { label: "Antecedents certificate (antecedentenverklaring) signed by the worker" },
      { label: "Diplomas or proof of qualifications where the job requires them" },
      { label: "Proof of health insurance after arrival" },
      { label: "Passport photograph meeting Dutch requirements" },
      { label: "Legalised and translated civil status documents for accompanying family members" },
    ],
    alternativeRoutes: [
      { name: "Highly skilled migrant (kennismigrant)", summary: "Fast route via a recognised sponsor with a salary above the yearly threshold. No labour market test. Not a GVVA." },
      { name: "EU Blue Card", summary: "Higher salary threshold, university degree, EU mobility advantages." },
      { name: "Intra-corporate transfer", summary: "For managers, specialists and trainees transferred within a group." },
    ],
    watchOuts: [
      "Fees must be paid before the decision period starts. Unpaid fees mean the 90 days have not begun.",
      "The GVVA is employer-specific. A new employer must apply for a new permit or a change notification.",
      "Nationals of some countries must take a tuberculosis test within 3 months of arrival.",
    ],
    sources: [
      { label: "IND: Employing a foreign national", url: "https://ind.nl/en/residence-permits/work/employing-a-foreign-national" },
      { label: "Business.gov.nl: permits for your foreign employees", url: "https://business.gov.nl/coming-to-the-netherlands/information-for-employers/permits-for-your-foreign-employees" },
      { label: "EU Immigration Portal: employed worker, Netherlands", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-netherlands_en" },
    ],
  };
