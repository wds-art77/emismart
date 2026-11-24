import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const MOS_BLUE_CARD = {
  label: "MOS (Office for Foreigners): Q&A on the EU Blue Card",
  url: "https://mos.cudzoziemcy.gov.pl/uk/baza-pytan-i-odpowiedzi/zezwolenia-pobyt-i-praca/niebieska-karta-ue/",
};
const ZIELONA_LINIA_MIN_WAGE = {
  label: "Zielona Linia (Ministry of Labour): minimum wage in 2026",
  url: "https://zielonalinia.gov.pl/wynagrodzenie-minimalne-w-2026-1/",
};
const EU_PORTAL_WORKER = {
  label: "EU Immigration Portal: employed worker, Poland",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-poland_en",
};
const EU_PORTAL_FAMILY = {
  label: "EU Immigration Portal: family member, Poland",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/family-member-poland_en",
};
const UW_PODLASKI_FAMILY = {
  label: "Podlaski Voivodeship Office: family reunification",
  url: "https://www.gov.pl/web/uw-podlaski/polaczenie-z-rodzina",
};
const PRESS_INFRINGEMENT = {
  label: "The Local (press): Commission letters of formal notice on Directive (EU) 2024/1233, 17 July 2026",
  url: "https://www.thelocal.de/20260717/eu-launches-legal-action-against-17-member-states-over-new-single-permit-rules",
};

export const pl: CountryRules = {
  code: "pl",
  salary: {
    blueCard: [
      {
        value: {
          amount: 160264.08,
          currency: "PLN",
          period: "year",
          gross: true,
          note: "150% of the 2025 average wage in the national economy (8 903,56 PLN, GUS) x 12. Equals 13 355,34 PLN gross per month. Applies to applications filed in 2026.",
        },
        validFrom: "2026-01-01",
        validTo: "2026-12-31",
        source: MOS_BLUE_CARD,
        lastVerified: V,
        note: "Threshold is recalculated each year once GUS publishes the previous year's average wage (February).",
      },
    ],
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: [
      {
        value: { amount: 4666, currency: "PLN", period: "month", gross: true },
        validFrom: "2025-01-01",
        validTo: "2025-12-31",
        source: ZIELONA_LINIA_MIN_WAGE,
        lastVerified: V,
      },
      {
        value: { amount: 4806, currency: "PLN", period: "month", gross: true, note: "Hourly rate for civil-law contracts: 31,40 PLN." },
        validFrom: "2026-01-01",
        source: ZIELONA_LINIA_MIN_WAGE,
        lastVerified: V,
        note: "Council of Ministers regulation of 11 September 2025.",
      },
    ],
  },
  shortage: {
    list: null,
    exemptsLabourMarketTest: null,
    note: "Poland has no national shortage occupation list. The labour market test was abolished for new applications from 1 June 2025; instead each starosta may publish a list of occupations for which permits are refused in the county.",
  },
  family: {
    waitingPeriodMonths: {
      value: 24,
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
      note: "Sponsor on temporary residence permits must have held them for at least 2 years in total, the current one valid for at least 1 year. No waiting period for permanent residents, EU long-term residents, highly qualified workers, researchers and ICT holders.",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 60,
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
      note: "60 days from a complete application, as stated by the EU Immigration Portal.",
    },
    conditions: {
      value:
        "Stable and regular income above the social assistance thresholds (EU Immigration Portal: 776 PLN for a single person, 600 PLN net per person in a family; Podlaski Voivodeship Office: more than 823 PLN net per family member), health insurance and a secured place to live (lease or owner's declaration). Conditions waived for family of refugees applying within 6 months of the grant.",
      validFrom: "2025-04-01",
      source: UW_PODLASKI_FAMILY,
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
      note: "Poland is among the 17 Member States sent a letter of formal notice in July 2026 for not communicating transposition. The MSWiA draft amendment to the Act on Foreigners (UD408) was in government consultation in July 2026.",
    },
    decisionDays: {
      value: 60,
      validFrom: "2025-04-01",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
      note: "60 days from a complete application; the period runs only once the file is complete.",
    },
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2025-04-01",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
      note: "A change of employer requires a new or amended temporary residence and work permit. Blue Card holders only notify the voivode within 15 working days.",
    },
    unemploymentGraceMonths: null,
    inCountryApplication: {
      value: true,
      validFrom: "2025-04-01",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
      note: "The worker applies while legally present in Poland, no later than the last day of legal stay, electronically through MOS since 27 April 2026.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["pl"],
    swornTranslationRequired: true,
    criminalRecordMaxAgeMonths: null,
    source: UW_PODLASKI_FAMILY,
  },
  validity: {
    value: { initialMonths: 36, renewalMonths: 36, note: "Granted for the period needed, more than 3 months and up to 3 years; subsequent permits on the same conditions. Blue Card: contract plus 3 months, up to 3 years." },
    validFrom: "2025-04-01",
    source: EU_PORTAL_WORKER,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card threshold: the 2026 figure (160 264,08 PLN per year, 13 355,34 PLN per month) is taken from the MOS Q&A page in its Ukrainian version; the Polish page returned 404 when checked. The EU Immigration Portal still shows an outdated 9 519,23 PLN monthly figure. No 2025 entry recorded because the official page gives none.",
    "Family income conditions conflict between sources: EU Immigration Portal quotes 776 PLN (single) and 600 PLN net per person in a family; the Podlaski Voivodeship Office quotes more than 823 PLN net per family member. Confirm the current social assistance thresholds.",
    "Recast transposition status rests on press coverage of the Commission's July 2026 infringement package; the Commission press release itself could not be opened. Unemployment grace period and extension of the decision period for the single permit are not yet set in Polish law.",
    "Criminal record extract is not a standard requirement for the temporary residence and work permit; passport validity beyond the stay is not specified on official pages.",
  ],
};
