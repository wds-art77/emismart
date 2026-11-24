import type { CountryRules } from "../country-rules";

const VERIFIED = "2026-11-24";

const SRC = {
  csep: {
    label: "DETE: Critical Skills Employment Permit",
    url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/critical-skills-employment-permit/",
  },
  gep: {
    label: "DETE: General Employment Permit",
    url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/employment-permits/permit-types/general-employment-permit/",
  },
  roadmap: {
    label: "DETE: Employment Permits Minimum Annual Remuneration, outcome of the Roadmap Review 2025 (PDF)",
    url: "https://enterprise.gov.ie/en/publications/publication-files/employment-permits-minimum-annual-remuneration-outcome-of-the-roadmap-review-2025.pdf",
  },
  csol: {
    label: "DETE: Critical Skills Occupations List (CSOL)",
    url: "https://enterprise.gov.ie/en/what-we-do/workplace-and-skills/economic-migration-policy/occupations-lists-and-reviews/csol.html",
  },
  familyPolicy: {
    label: "ISD: Policy Document on Non-EEA Family Reunification, 12 June 2026 (PDF)",
    url: "https://www.irishimmigration.ie/wp-content/uploads/2026/06/Family-Reunification-Policy-12-June-2026.pdf",
  },
  minWage: {
    label: "DETE: SME test, S.I. 472 of 2025, National Minimum Wage 2026 (PDF)",
    url: "https://www.enterprise.gov.ie/en/publications/publication-files/sme-test-si-472-of-2025-2026-national-minimum-wage.pdf",
  },
};

export const ie: CountryRules = {
  code: "ie",
  salary: {
    // Ireland does not take part in Directive (EU) 2021/1883 (EU Blue Card); the national route is the
    // Critical Skills Employment Permit, recorded under highlyQualified.
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: [
      {
        value: {
          amount: 40904,
          currency: "EUR",
          period: "year",
          gross: true,
          note: "Critical Skills Employment Permit, occupation on the Critical Skills Occupations List with relevant degree. EUR 68,911 applies to any eligible occupation off the list; EUR 36,848 for graduates qualified within the previous 12 months. Thresholds assume a 39-hour week.",
        },
        validFrom: "2026-03-01",
        source: SRC.csep,
        lastVerified: VERIFIED,
        note: "Increase of 7.66% from EUR 38,000 implemented on 1 March 2026 under the Roadmap Review 2025. Next step marked TBD for January 2027.",
      },
    ],
    // Statutory minimum wage exists but is published per hour only (EUR 14.15 from 1 January 2026);
    // see reviewNotes. Not converted to a monthly or yearly figure.
    minimumWage: null,
  },
  shortage: {
    list: {
      value: [
        {
          name: "Critical Skills Occupations List (CSOL)",
          scope: "national",
          url: SRC.csol.url,
        },
      ],
      validFrom: VERIFIED,
      source: SRC.csol,
      lastVerified: VERIFIED,
      note: "The CSOL page does not date the current version; the latest published review is the occupations lists review 2025. validFrom records the date the list was confirmed in force.",
    },
    exemptsLabourMarketTest: true,
    note: "The CSOL is the only occupations list that exempts a General Employment Permit from the Labour Market Needs Test. Other exemptions: remuneration of at least EUR 68,911, Enterprise Ireland or IDA Ireland recommendation, certain carers and re-hires. The Ineligible Occupations List bars permits at any salary.",
  },
  family: {
    waitingPeriodMonths: {
      value: 12,
      validFrom: "2026-06-12",
      source: SRC.familyPolicy,
      lastVerified: VERIFIED,
      note: "Category C sponsors (General Employment Permit holders) may apply for nuclear family after 12 months. Category B sponsors (Critical Skills Employment Permit holders, ICTs, researchers) have no waiting period and family may accompany them on arrival.",
    },
    blueCardImmediate: null,
    decisionDays: {
      value: 365,
      validFrom: "2026-06-12",
      source: SRC.familyPolicy,
      lastVerified: VERIFIED,
      note: "Policy states an expected processing time of approximately 12 months as a business goal, expressly not a legal obligation. Ireland is not bound by Directive 2003/86/EC.",
    },
    conditions: {
      value:
        "Category B sponsors (Critical Skills permit holders) face no income threshold and may be accompanied by nuclear family on entry. Category C sponsors (General Employment Permit holders) need gross income above EUR 30,000 in the previous year for a couple without children and, for children, net income above the Working Family Payment limits. All sponsors must show suitable accommodation within 6 months of request and must not live in emergency, IPAS or social housing.",
      validFrom: "2026-06-12",
      source: SRC.familyPolicy,
      lastVerified: VERIFIED,
    },
    source: SRC.familyPolicy,
  },
  recast: {
    transposition: {
      value: "not_applicable",
      validFrom: "2024-05-20",
      source: SRC.gep,
      lastVerified: VERIFIED,
      note: "Ireland does not take part in Directive 2011/98/EU or the recast Directive (EU) 2024/1233 (Protocol 21). Employment permits are governed by the Employment Permits Act 2024.",
    },
    decisionDays: null,
    extensionDays: null,
    changeOfEmployerByNotification: null,
    unemploymentGraceMonths: null,
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["English"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: SRC.gep,
  },
  validity: {
    value: {
      initialMonths: 24,
      renewalMonths: 36,
      note: "General Employment Permit: initial period of 2 years, renewable for up to a further 3 years. The Critical Skills Employment Permit is tied to a job offer of at least 2 years; after it, holders apply to ISD for permission to work without a permit (Stamp 4).",
    },
    validFrom: "2026-01-01",
    source: SRC.gep,
    lastVerified: VERIFIED,
  },
  reviewNotes: [
    "Ireland is outside the EU Blue Card and single permit directives; blueCard, blueCardReduced and most recast fields are null by design. National highly skilled route is the Critical Skills Employment Permit.",
    "Conflicting official figures: the DETE CSEP page, the 2 December 2025 announcement and the Roadmap Review 2025 PDF give EUR 40,904 (degree) and EUR 36,848 (graduate) from 1 March 2026, while the DETE 'MAR thresholds' web page shows EUR 40,909 and EUR 36,849. The PDF and announcement figures were used.",
    "General Employment Permit threshold is EUR 36,605 from 1 March 2026 (EUR 34,009 for recent Irish graduates; EUR 32,691 for care, meat and horticulture roles). Next increases are marked TBD for January 2027 and phased to 2030.",
    "Statutory national minimum wage: EUR 14.15 per hour from 1 January 2026 (S.I. No. 472/2025, confirmed on the DETE SME test PDF). Published per hour only, so minimumWage is null rather than converted; DETE assumes a 39-hour week for permit purposes.",
    "ISD pages on the long stay employment visa and Stamp 4 upgrades could not be read (content not served); passport validity (reported as 12 months beyond planned arrival for D visas), translation and police clearance rules are therefore null. Critical Skills permit duration (2 years, then Stamp 4) was not confirmed on an opened page; validity records the General Employment Permit.",
    "Family reunification processing time of about 12 months is a business goal in the 12 June 2026 policy, not a statutory period. The policy no longer covers refugees and beneficiaries of subsidiary protection from 12 June 2026.",
    "The date of the current CSOL version is not shown on the DETE page; verify against the occupations lists review 2025 report.",
  ],
};
