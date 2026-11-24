import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const EU_PORTAL_HQ = {
  label: "EU Immigration Portal: highly qualified worker, Lithuania",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/highly-qualified-worker-lithuania_en",
};
const EU_PORTAL_WORKER = {
  label: "EU Immigration Portal: employed worker, Lithuania",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-lithuania_en",
};
const EU_PORTAL_FAMILY = {
  label: "EU Immigration Portal: family member, Lithuania",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/family-member-lithuania_en",
};

export const lt: CountryRules = {
  code: "lt",
  salary: {
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: null,
  },
  shortage: {
    list: {
      value: [
        {
          name: "Aukštą pridėtinę vertę kuriančių profesijų, kurių darbuotojų trūksta Lietuvos Respublikoje, sąrašas (Minister of Economy and Innovation order No. 4-404 of 23 July 2024, consolidated version from 10 June 2026)",
          scope: "national",
          url: "https://e-seimas.lrs.lt/rs/actualedition/368c1962492a11efb121d2fe3a0eff27/XCWTxxVRfg/",
        },
        {
          name: "Profesijų, kurių darbuotojų trūksta Lietuvos Respublikoje, sąrašas pagal ekonominės veiklos rūšis (Employment Service, Užimtumo tarnyba, approved per half-year)",
          scope: "national",
          url: "https://uzt.lt/",
        },
      ],
      validFrom: "2026-06-10",
      source: EU_PORTAL_HQ,
      lastVerified: V,
      note: "List URLs identified through search; e-seimas and uzt.lt refused automated access, so the list contents were not opened.",
    },
    exemptsLabourMarketTest: true,
    note: "Blue Card applicants whose profession is on the high value-added shortage list, or who earn at least 3 times the average wage, need no Employment Service decision on labour market needs. For ordinary permits a listed occupation allows a permit outside the exhausted annual quota at a salary of at least the national average (1.2 times the average otherwise).",
  },
  family: {
    waitingPeriodMonths: {
      value: 24,
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
      note: "A sponsor holding a residence permit must have resided legally in Lithuania for at least two years, hold a permit valid for at least one year and have reasonable prospects of permanent residence; waived for Blue Card holders and some other categories.",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 120,
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
      note: "Up to 4 months, 2 months for an additional fee; shorter for family of highly qualified workers, researchers and ICTs.",
    },
    conditions: {
      value:
        "Sufficient financial resources and adequate accommodation (no amounts published on the page), health insurance with a sum insured of 6,000 EUR, proof of family relationship; the family member's permit lasts as long as the sponsor's.",
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
    },
    source: EU_PORTAL_FAMILY,
  },
  recast: {
    transposition: null,
    decisionDays: {
      value: 120,
      validFrom: "2025-04-01",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
      note: "Temporary residence permit decided within 4 months, 2 months for an additional fee; renewal 2 months or 1 month. Blue Card: 2 months or 1 month (half a month urgent where salary is 3 times the average or the profession is listed).",
    },
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2025-04-01",
      source: EU_PORTAL_HQ,
      lastVerified: V,
      note: "During the first two years a change of employer requires an application to and favourable decision of the Migration Department; from the third year Blue Card holders may change employer on the same permit without applying.",
    },
    unemploymentGraceMonths: {
      value: 3,
      validFrom: "2025-04-01",
      source: EU_PORTAL_HQ,
      lastVerified: V,
      note: "Permit cancelled if unemployed for more than 3 consecutive months or more than once during its validity (Blue Card). Later national guidance gives 3 months, 6 months after two years, for work-based permits.",
    },
    inCountryApplication: {
      value: true,
      validFrom: "2025-04-01",
      source: EU_PORTAL_HQ,
      lastVerified: V,
      note: "Applications are filed in MIGRIS with biometrics at a Migration Department office when legally in Lithuania. Reported restriction from 1 November 2026: holders of a Schengen visa or another state's national visa may no longer apply in-country for an ordinary work-based permit.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: [],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: EU_PORTAL_WORKER,
  },
  validity: {
    value: {
      initialMonths: 24,
      renewalMonths: 24,
      note: "Work-based permit up to 2 years, renewable; highly qualified workers and Blue Card 3 years, or contract plus 3 months when shorter.",
    },
    validFrom: "2025-04-01",
    source: EU_PORTAL_WORKER,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card threshold left null: the rule is 1.5 times the average gross monthly wage of the previous calendar year (1.2 times for listed high value-added professions) but the Migration Department site (migracija.lrv.lt) and e-seimas refused automated access. Work in Lithuania (state investment agency) material dated June 2026 gives 3,617.10 EUR (1.5) and 2,893.68 EUR (1.2) on an average of 2,411.40 EUR; confirm on the Migration Department page.",
    "Minimum wage left null: Government Resolution No. 700 of 16 October 2025 sets 1,153 EUR per month and 7.05 EUR per hour from 1 January 2026, and the Government approved 1,245 EUR (7.61 EUR) for 2027; the Ministry of Social Security and Labour, VDI and lrv.lt pages could not be opened (bot protection), so no official page was read.",
    "Recast transposition left null: amendments to the Law on the Legal Status of Aliens implementing Directive (EU) 2024/1233 are reported in force from 22 May 2026 (law-firm and ministry summaries), but the consolidated law on e-seimas could not be opened. Decision periods recorded are from the EU Immigration Portal pages dated 1 April 2025 and may have been shortened.",
    "Family reunification figures come from the EU Immigration Portal page dated 1 April 2025; the 2026 amendments reportedly simplified the conditions for keeping family reunification permits.",
    "Document rules (passport validity, translation language, criminal record age) were not found on an official page; criminal record certificates are required from states of residence in the last two years for the first permit only.",
    "The 2025 quota (24,830) was exhausted in October 2025; the 2026 quota figure was not verified.",
  ],
};
