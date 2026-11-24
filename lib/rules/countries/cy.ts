import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const kdp457 = {
  label: "CyLaw: Κ.Δ.Π. 457/2024, Blue Card minimum gross annual salary decree (Official Gazette 5915, 20.12.2024)",
  url: "https://www.cylaw.org/KDP/data/2024_1_457.pdf",
};
const kdp456 = {
  label: "CyLaw: Κ.Δ.Π. 456/2024, Blue Card admission volumes decree (Official Gazette 5915, 20.12.2024)",
  url: "https://www.cylaw.org/KDP/data/2024_1_456.pdf",
};
const euPortalFamily = {
  label: "EU Immigration Portal: family member, Cyprus",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/family-member-cyprus_en",
};
const euPortalWorker = {
  label: "EU Immigration Portal: employed worker, Cyprus",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-cyprus_en",
};
const dolCriteria = {
  label: "Department of Labour: criteria for employment of third-country nationals",
  url: "https://www.mlsi.gov.cy/mlsi/dl/dl.nsf/page5b_en/page5b_en?OpenDocument",
};

export const cy: CountryRules = {
  code: "cy",
  salary: {
    blueCard: [
      {
        value: {
          amount: 43632,
          currency: "EUR",
          period: "year",
          gross: true,
          note: "Minimum gross annual salary for highly qualified employment of third-country nationals (Κ.Δ.Π. 457/2024, under art. 18ΣΕ(2) of the Aliens and Immigration Law as amended in 2024).",
        },
        validFrom: "2024-12-20",
        source: kdp457,
        lastVerified: V,
        note: "Decree of 19 Dec 2024, gazetted 20 Dec 2024. Applications accepted from 7 July 2025. Limited to ICT, pharmaceutical research and shipping (Κ.Δ.Π. 456/2024); zero admission volumes elsewhere.",
      },
    ],
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: null,
  },
  shortage: {
    list: null,
    exemptsLabourMarketTest: null,
    note: "Cyprus has no shortage occupation list. The Department of Labour applies a labour market test and five criteria; Blue Card admission is limited by sector (Κ.Δ.Π. 456/2024: ICT, pharmaceutical research only, shipping excluding masters and crew).",
  },
  family: {
    waitingPeriodMonths: {
      value: 24,
      validFrom: "2024-01-01",
      source: euPortalFamily,
      lastVerified: V,
      note: "Sponsor must have resided legally in Cyprus for two years. Spouse must be over 21 and the marriage at least one year old at application.",
    },
    blueCardImmediate: null,
    decisionDays: null,
    conditions: {
      value:
        "Accommodation meeting general health and safety standards and sufficient financial resources; the EU Immigration Portal gives no amount. Family members receive a one-year renewable permit not exceeding the sponsor's permit.",
      validFrom: "2024-01-01",
      source: euPortalFamily,
      lastVerified: V,
    },
    source: euPortalFamily,
  },
  recast: {
    transposition: {
      value: "pending",
      validFrom: "2026-05-22",
      source: euPortalWorker,
      lastVerified: V,
      note: "No Cypriot transposition act was found. Press reports of the Commission's July 2026 infringement package list Cyprus among 17 states sent a letter of formal notice for Directive (EU) 2024/1233.",
    },
    decisionDays: null,
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2024-01-01",
      source: euPortalWorker,
      lastVerified: V,
      note: "Change of employer requires a release agreement from the former employer and Labour Department approval of the new one; up to three employers in the same sector and occupation.",
    },
    unemploymentGraceMonths: null,
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["Greek", "English"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: euPortalWorker,
  },
  validity: {
    value: {
      initialMonths: null,
      renewalMonths: null,
      note: "Residence and employment permits are granted for a maximum of four years in total (no maximum for agriculture, domestic work, specialty chefs, priests and tourist representatives). Initial and renewal durations are not stated on the pages opened.",
    },
    validFrom: "2024-01-01",
    source: euPortalWorker,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card: Κ.Δ.Π. 457/2024 fixes a single figure of 43,632 EUR; no reduced threshold decree was found. Secondary sources mention a possible 80% floor under Cap. 105 and a 2,500 EUR per month figure for key personnel of foreign-interest companies from 2027; neither was confirmed.",
    "Minimum wage: a decree approved by the Council of Ministers on 23 Dec 2025 reportedly sets 979 EUR gross per month at recruitment and 1,088 EUR after six months with the same employer from 1 Jan 2026 to 31 Dec 2027 (previously 900 and 1,000 EUR). The Department of Labour Relations pages returned HTTP 404 or 500 and the Κ.Δ.Π. number was not found, so the field is null.",
    "Family reunification: moi.gov.cy CRMD pages (sponsor requirements, nine-month examination period) could not be opened (HTTP 404); the two-year residence rule is taken from the EU Immigration Portal. Decision period and Blue Card family rules left null.",
    "Accepted languages (Greek or English with certified translation) come from law firm pages only and should be confirmed with the CRMD.",
    "Transposition status relies on press reports of the July 2026 infringement package; no Commission page was opened.",
    "Permit duration: a 2026 guide reports a minimum salary of 1,815 EUR per month for standard permits from 1 April 2026; not confirmed on an official page.",
  ],
};
