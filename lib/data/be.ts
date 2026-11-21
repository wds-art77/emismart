import type { Country } from "../types";

export const be: Country =
  {
    code: "be",
    region: "Western Europe",
    singlePermitDirective: true,
    name: "Belgium",
    flag: "🇧🇪",
    languages: ["French", "Dutch", "German"],
    permitName: "Single permit",
    localName: "Permis unique / Gecombineerde vergunning",
    tagline: "One application, one card: work and residence for stays over 90 days.",
    overview:
      "Since 1 January 2019 Belgium issues a single permit covering both the authorisation to work and the right to reside for employment of more than 90 days. The procedure is shared between the Region (work) and the federal Immigration Office (residence). The employer files; the worker receives a single electronic residence card once both sides approve.",
    whoFilesShort: "Employer",
    whoApplies:
      "The Belgian employer, or a mandated representative such as a law firm, files on behalf of the worker with the competent Region. The worker cannot file alone.",
    authorities: [
      "Flanders: Department of Work and Social Economy (Werk en Sociale Economie), via the Working in Belgium platform",
      "Wallonia: Service public de Wallonie, Emploi",
      "Brussels-Capital: Bruxelles Economie et Emploi",
      "German-speaking Community: Ministerium der Deutschsprachigen Gemeinschaft",
      "Federal: Immigration Office (Office des étrangers / Dienst Vreemdelingenzaken) for the residence decision",
    ],
    legalBasis: [
      "Directive 2011/98/EU (Single Permit Directive), recast by Directive (EU) 2024/1233",
      "Cooperation agreement of 2 February 2018 between the Federal State, the Regions and the Communities",
      "Law of 15 December 1980 on access to the territory, residence, settlement and removal of foreign nationals",
      "Regional decrees and orders on the employment of foreign workers",
    ],
    decisionPeriod:
      "Legal maximum of 4 months from the date the application is declared admissible. The recast Single Permit Directive requires a decision within 90 days of a complete application; Belgium has announced alignment with that deadline.",
    validity:
      "Usually tied to the employment contract, up to 1 year for a first permit in most categories, renewable. Highly skilled workers can obtain up to 3 years in some Regions.",
    labourMarketTest:
      "Required for most ordinary salaried roles unless the worker belongs to an exempt category such as highly skilled workers, executives, researchers, or shortage occupations listed by the Region.",
    steps: [
      {
        title: "Choose the competent Region",
        actor: "Employer",
        detail:
          "The Region where the worker will mainly work determines which authority receives the file. Flanders, Wallonia, Brussels and the German-speaking Community each run their own platform and category lists.",
      },
      {
        title: "Assemble the joint file",
        actor: "Both",
        detail:
          "The employer gathers its own forms and the worker's personal documents. Everything is filed together in a single electronic submission.",
      },
      {
        title: "File with the Region",
        actor: "Employer",
        detail:
          "The employer or mandated representative submits the application online. The Region checks admissibility and confirms the file is complete.",
      },
      {
        title: "Parallel review",
        actor: "Authority",
        detail:
          "The Region assesses the work component. The Immigration Office assesses the residence component (passport, criminal record, medical, public order). Both must approve.",
      },
      {
        title: "Decision and annex 46",
        actor: "Authority",
        detail:
          "On a positive decision the worker receives annex 46. If abroad, the worker uses it to obtain a D visa at the Belgian embassy or consulate.",
      },
      {
        title: "Arrival and registration",
        actor: "Employee",
        detail:
          "Within 8 days of arrival the worker registers with the municipality (commune / gemeente), which issues the electronic single permit card (A card).",
      },
    ],
    employerDocs: [
      { label: "Regional application form, signed by the employer" },
      { label: "Signed employment contract compliant with Belgian law" },
      { label: "Proof of company registration (KBO / BCE number)" },
      { label: "Proof the salary meets the applicable regional threshold", note: "Relevant for highly skilled and executive categories." },
      { label: "Mandate if a representative files on the employer's behalf" },
    ],
    employeeDocs: [
      { label: "Valid passport, full copy of all pages" },
      { label: "Medical certificate from a doctor recognised by the Belgian embassy", note: "Required when the worker is abroad." },
      { label: "Extract from the criminal record, legalised or apostilled, with sworn translation", note: "For workers aged 18 and over." },
      { label: "Diplomas or qualifications, legalised, with translation", note: "Required for highly skilled, researcher and similar categories." },
      { label: "Proof of payment of the federal fee (redevance) to the Immigration Office" },
      { label: "Passport photographs meeting ICAO standards" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "For university graduates with a contract of at least 1 year above the Blue Card salary threshold. Filed through the same single permit channel." },
      { name: "Intra-corporate transfer (ICT)", summary: "For managers, specialists and trainees seconded from a non-EU entity of the same group." },
      { name: "Professional card", summary: "For self-employed activity. Separate regional procedure, not a single permit." },
    ],
    watchOuts: [
      "Each Region applies its own salary thresholds and shortage lists. A file prepared for Flanders is not automatically valid for Brussels.",
      "The 4-month clock only starts once the Region declares the file admissible. Incomplete files restart the process.",
      "A change of employer requires a new single permit application by the new employer.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Belgium", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-belgium_en" },
      { label: "Working in Belgium platform", url: "https://www.working-in-belgium.be" },
      { label: "Immigration Office (IBZ)", url: "https://dofi.ibz.be" },
    ],
  };
