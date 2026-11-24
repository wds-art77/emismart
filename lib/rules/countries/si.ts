import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const GOV_SI_MIN_WAGE = {
  label: "Gov.si: minimum wage for 2026 set (28 January 2026)",
  url: "https://www.gov.si/novice/2026-01-28-dolocen-znesek-minimalne-place-za-2026/",
};
const GOV_SI_ZTUJ2I = {
  label: "Gov.si: amendment to the Aliens Act eases access to the EU Blue Card (21 May 2025)",
  url: "https://www.gov.si/novice/2025-05-21-z-novelo-zakona-o-tujcih-lazje-do-modre-karte-eu/",
};
const URADNI_LIST_ODREDBA = {
  label: "Uradni list RS 1793/2026: amendment extending the Decree on activities and occupations in which foreigners may be employed faster (PDF)",
  url: "https://pisrs.si/api/uradni-list/objava/u20261793.pdf",
};
const EU_PORTAL_WORKER = {
  label: "EU Immigration Portal: employed worker, Slovenia",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-slovenia_en",
};
const EU_PORTAL_HQ = {
  label: "EU Immigration Portal: highly qualified worker, Slovenia",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/highly-qualified-worker-slovenia_en",
};
const EU_PORTAL_FAMILY = {
  label: "EU Immigration Portal: family member, Slovenia",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/family-member-slovenia_en",
};
const PRESS_INFRINGEMENT = {
  label: "The Local (press): Commission letters of formal notice on Directive (EU) 2024/1233, 17 July 2026",
  url: "https://www.thelocal.de/20260717/eu-launches-legal-action-against-17-member-states-over-new-single-permit-rules",
};

export const si: CountryRules = {
  code: "si",
  salary: {
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: [
      {
        value: { amount: 1481.88, currency: "EUR", period: "month", gross: true },
        validFrom: "2026-01-01",
        source: GOV_SI_MIN_WAGE,
        lastVerified: V,
        note: "Published in Uradni list RS on 30 January 2026 for work performed from 1 January 2026.",
      },
    ],
  },
  shortage: {
    list: {
      value: [
        {
          name: "Odredba o določitvi dejavnosti in poklicev, v katerih se lahko tujci hitreje zaposlujejo (Uradni list RS 102/25, 384/26, 1793/2026), fast-track procedure valid until 30 April 2027",
          scope: "national",
          url: "https://pisrs.si/api/uradni-list/objava/u20261793.pdf",
        },
      ],
      validFrom: "2026-10-29",
      source: URADNI_LIST_ODREDBA,
      lastVerified: V,
      note: "Issued under Articles 12(7) and 17(9) of the Employment, Self-employment and Work of Foreigners Act (ZZSDT).",
    },
    exemptsLabourMarketTest: null,
    note: "Listed activities and occupations qualify for the fast-track single permit procedure for foreigners already legally present; ZRSZ consent is still required and the official pages do not state that the labour market check is waived.",
  },
  family: {
    waitingPeriodMonths: {
      value: 12,
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
      note: "Sponsor on a temporary permit must have resided in Slovenia during the previous year and hold a permit valid for at least 1 year. No limits for Blue Card, researcher and ICT holders.",
    },
    blueCardImmediate: true,
    decisionDays: null,
    conditions: {
      value:
        "Sufficient means of subsistence of at least the monthly threshold for financial social assistance per family member; adequate health insurance; criminal record certificate from the home country. No housing condition is stated.",
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
    },
    source: EU_PORTAL_FAMILY,
  },
  recast: {
    transposition: {
      value: "pending",
      validFrom: "2026-05-22",
      source: PRESS_INFRINGEMENT,
      lastVerified: V,
      note: "Slovenia is among the 17 Member States sent a letter of formal notice in July 2026. A draft ZTuj-2 amendment was in public consultation until August 2026.",
    },
    decisionDays: null,
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2025-04-01",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
      note: "Changing job or employer requires written approval of the administrative unit with ZRSZ consent.",
    },
    unemploymentGraceMonths: null,
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: {
      value: 3,
      validFrom: "2025-04-01",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
    },
    acceptedLanguages: [],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: EU_PORTAL_WORKER,
  },
  validity: {
    value: { initialMonths: 24, renewalMonths: null, note: "First residence permits issued for up to 2 years since the ZTuj-2I amendment of 21 May 2025. Blue Card: 2 years, extendable by up to 3 years." },
    validFrom: "2025-05-21",
    source: GOV_SI_ZTUJ2I,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card threshold: official pages state 1.5 times the average annual gross wage in Slovenia based on the last SURS figure published in the Official Gazette, with no amount published; recorded as null. SURS press figure for 2025: 2 536,03 EUR gross per month, unverified on an official page.",
    "Single permit validity: the EU Immigration Portal still shows 1 year initial and 2 years renewal; gov.si states first permits up to 2 years since 21 May 2025 and the Employment Service reports extensions up to 3 years. Renewal left null.",
    "No statutory decision period for the single permit or family reunification is stated on official pages; general administrative procedure rules apply.",
    "Recast transposition status rests on press coverage of the July 2026 infringement package. Unemployment grace: official pages only state that the permit is not annulled where the worker obtained unemployment insurance rights; Blue Card holders tolerate up to 3 months.",
    "Accepted languages, translation requirements and criminal record age at filing are not specified on the pages opened; a certificate not older than 3 months is required at extension.",
  ],
};
