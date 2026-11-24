import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const identitaWorking = {
  label: "Identità: Working and residing in Malta (KEI, SEI, EU Blue Card, processing times)",
  url: "https://identita.gov.mt/working-residing-in-malta/",
};
const identitaFaq = {
  label: "Identità: FAQs SIGMA 2025/26, employment-related permits for highly qualified individuals",
  url: "https://identita.gov.mt/wp-content/uploads/2025/09/FAQs-Highly-Qualified-1.pdf",
};
const identitaBlueCard = {
  label: "Identità: EU Blue Card",
  url: "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/highly-qualified-individuals/blue-card/",
};
const ln289 = {
  label: "Legislation Malta: L.N. 289 of 2025, National Minimum Wage National Standard Order, 2025",
  url: "https://legislation.mt/eli/ln/2025/289/eng/pdf",
};
const sl21706 = { label: "Legislation Malta: S.L. 217.06 Family Reunification Regulations", url: "https://legislation.mt/eli/sl/217.6/eng/pdf" };
const sl21717 = { label: "Legislation Malta: S.L. 217.17 Single Permit Regulations", url: "https://legislation.mt/eli/sl/217.17/eng/pdf" };
const sl21727 = { label: "Legislation Malta: S.L. 217.27 EU Blue Card Regulations", url: "https://legislation.mt/eli/sl/217.27/eng/pdf" };
const jobsplusVel = { label: "Jobsplus: Malta Vacancy Exemption List (ELU/FM-014, version 4.0)", url: "https://jobsplus.gov.mt/media/tfuhc1nk/maltavacancyexemptionlist2023.pdf" };
const jobsplusLmp = {
  label: "Jobsplus: Labour Migration Policy implementation document, July 2025",
  url: "https://jobsplus.gov.mt/media/0c3ppzjb/malta-labour-migration-policy-implementation-doc-jul-2025.pdf",
};
const euPortal = {
  label: "EU Immigration Portal: employed worker, Malta",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-malta_en",
};

export const mt: CountryRules = {
  code: "mt",
  salary: {
    // S.L. 217.27 and Identità: at least 1.5 times the average gross annual salary in Malta (NSO Labour Force Survey).
    // No euro figure is published on an official page. See reviewNotes.
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: [
      {
        value: {
          amount: 45000,
          currency: "EUR",
          period: "year",
          gross: true,
          note: "Key Employee Initiative (KEI): annual gross salary of at least 45,000 EUR excluding allowances. Specialist Employee Initiative (SEI): at least 30,000 EUR.",
        },
        validFrom: "2025-08-01",
        source: identitaWorking,
        lastVerified: V,
        note: "New thresholds introduced 1 August 2025 (Labour Migration Policy). KEI processed in 5 working days, SEI in 15.",
      },
    ],
    minimumWage: [
      {
        value: {
          amount: 11930.88,
          currency: "EUR",
          period: "year",
          gross: true,
          note: "Published as 229.44 EUR per week for age 18 and over (222.66 EUR at 17, 219.82 EUR under 17). The yearly figure is 52 weeks, computed by Emismart because the type has no weekly period; the authority publishes a weekly rate only.",
        },
        validFrom: "2026-01-01",
        source: ln289,
        lastVerified: V,
        note: "L.N. 289 of 2025, Government Gazette 21,560 of 22 Dec 2025, in force 1 Jan 2026.",
      },
    ],
  },
  shortage: {
    list: {
      value: [
        { name: "Malta Vacancy Exemption List (Jobsplus Employment Licence Unit)", scope: "national", url: jobsplusVel.url },
      ],
      validFrom: "2023-01-01",
      source: jobsplusVel,
      lastVerified: V,
      note: "Undated version 4.0 (file name indicates 2023). Covers health, technical and building, IT, finance, gaming and education professions, sportspersons and entertainers. May change according to labour market needs.",
    },
    exemptsLabourMarketTest: true,
    note: "Listed occupations are exempt from advertising the vacancy locally before a single permit application. A separate Skilled Occupation List (updated 2025) shortens the advertising period to two weeks and gives three-year renewals from January 2026; its text was not found online.",
  },
  family: {
    waitingPeriodMonths: {
      value: 12,
      validFrom: "2025-09-01",
      source: identitaFaq,
      lastVerified: V,
      note: "Identità: non-EU nationals normally must live in Malta 12 months before applying for family; waived for KEI and SEI holders meeting income (50,000 EUR plus 6,000 EUR per extra dependant), insurance and schooling conditions. S.L. 217.06 reg. 3 requires a permit valid at least one year and reasonable prospects of permanent residence.",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 270,
      validFrom: "2018-01-01",
      source: sl21706,
      lastVerified: V,
      note: "S.L. 217.06 reg. 9: decision no later than nine months, extendable in exceptional complex cases. Blue Card family: decided with the Blue Card or within 90 days (S.L. 217.27 reg. 15(4)).",
    },
    conditions: {
      value:
        "Accommodation regarded as normal for a comparable family in Malta meeting health and safety standards; sickness insurance for the sponsor and family; stable and regular resources sufficient to maintain the family without social assistance (S.L. 217.06 reg. 12).",
      validFrom: "2018-01-01",
      source: sl21706,
      lastVerified: V,
    },
    source: sl21706,
  },
  recast: {
    transposition: {
      value: "pending",
      validFrom: "2026-05-22",
      source: sl21717,
      lastVerified: V,
      note: "S.L. 217.17 still implements Directive 2011/98/EU. Press reports of the Commission's July 2026 infringement package list Malta among 17 states sent a letter of formal notice for Directive (EU) 2024/1233.",
    },
    decisionDays: {
      value: 120,
      validFrom: "2014-01-01",
      source: sl21717,
      lastVerified: V,
      note: "S.L. 217.17 reg. 12: decision on a complete application within four months; Identità quotes up to 4 months.",
    },
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2025-08-01",
      source: jobsplusLmp,
      lastVerified: V,
      note: "A change of employer is a new single permit application (fee 600 EUR under the 2025 Labour Migration Policy).",
    },
    unemploymentGraceMonths: null,
    inCountryApplication: {
      value: true,
      validFrom: "2025-04-01",
      source: euPortal,
      lastVerified: V,
      note: "Applications from within Malta are accepted if the visa is valid for at least a further six weeks on the application date.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["English", "Maltese"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: euPortal,
  },
  validity: {
    value: {
      initialMonths: 12,
      renewalMonths: 12,
      note: "Identità: most permits are issued for one year; some cases qualify for two to three years. Blue Card: standard 24 months, renewal may be three years. From January 2026 KEI, SEI, Blue Card and Skilled Occupation List permits are renewed for three years (Labour Migration Policy).",
    },
    validFrom: "2025-08-01",
    source: identitaWorking,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card threshold: S.L. 217.27 reg. 5 and Identità require at least 1.5 times the average gross annual salary (NSO Labour Force Survey), with a possible 1.2 times threshold for ISCO 1 and 2 occupations the Minister designates. No official page gives the euro result; secondary sources quote about 38,628 EUR for 2026 and the EU Immigration Portal quoted 34,956 EUR in April 2025. Left null.",
    "Minimum wage is published weekly (229.44 EUR); the yearly amount is a 52-week conversion by Emismart, not a published figure. A WageIndicator headline of 31 Oct 2026 refers to a 2027 cost-of-living adjustment; the 2027 legal notice was not checked.",
    "Family waiting period: the 12-month practice comes from the Identità FAQ; S.L. 217.06 reg. 13 reads 'stayed lawfully in Malta for a period not exceeding two years', which appears inconsistent with the Directive and should be checked.",
    "Transposition status relies on press reports of the July 2026 infringement package; no Commission page was opened.",
    "Documents: Identità checklists page returned HTTP 404. The EU Immigration Portal mentions certified translated copies of qualifications; no passport validity or police conduct certificate age was found.",
    "validFrom dates for S.L. 217.06 and S.L. 217.17 entries are approximate (last amendments L.N. 166 of 2018 and original 2014 regulations); the texts read are the current consolidated versions.",
  ],
};
