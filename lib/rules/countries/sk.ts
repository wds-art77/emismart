import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const SLOV_LEX_404 = {
  label: "Slov-Lex: Act No. 404/2011 Coll. on the Residence of Foreigners, consolidated text (PDF)",
  url: "https://static.slov-lex.sk/pdf/SK/ZZ/2011/404/ZZ_2011_404_20261001.pdf",
};
const SLOV_LEX_128_2026 = {
  label: "Slov-Lex: Act No. 128/2026 Coll. amending Act No. 404/2011 Coll.",
  url: "https://static.slov-lex.sk/static/SK/ZZ/2026/128/vyhlasene_znenie.html",
};
const MPSVR_MIN_WAGE = {
  label: "Ministry of Labour, Social Affairs and Family: minimum wage amounts",
  url: "https://www.employment.gov.sk/sk/praca-zamestnanost/vztah-zamestnanca-zamestnavatela/odmenovanie/minimalna-mzda/sumy-minimalnej-mzdy.html",
};
const UPSVR_SHORTAGE = {
  label: "ÚPSVaR: list of occupations with a labour shortage, by region",
  url: "https://www.upsvr.gov.sk/sluzby-zamestnanosti/zamestnavanie-cudzincov/zoznam-zamestnani-s-nedostatkom-pracovnej-sily.html?page_id=806803",
};
const EU_PORTAL_WORKER = {
  label: "EU Immigration Portal: employed worker, Slovakia",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-slovakia_en",
};
const EU_PORTAL_FAMILY = {
  label: "EU Immigration Portal: family member, Slovakia",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/family-member-slovakia_en",
};

export const sk: CountryRules = {
  code: "sk",
  salary: {
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: [
      {
        value: { amount: 816, currency: "EUR", period: "month", gross: true },
        validFrom: "2025-01-01",
        validTo: "2025-12-31",
        source: MPSVR_MIN_WAGE,
        lastVerified: V,
        note: "Notice No. 263/2024 Coll.",
      },
      {
        value: { amount: 915, currency: "EUR", period: "month", gross: true, note: "Hourly rate 5,259 EUR." },
        validFrom: "2026-01-01",
        validTo: "2026-12-31",
        source: MPSVR_MIN_WAGE,
        lastVerified: V,
        note: "Notice No. 245/2025 Coll. The Ministry announced 972 EUR for 2027.",
      },
    ],
  },
  shortage: {
    list: {
      value: [
        {
          name: "Zoznam zamestnaní s nedostatkom pracovnej sily (ÚPSVaR), quarterly, per self-governing region; current list IV. Q 2026 valid until 31 January 2027 or until a new list is published",
          scope: "regional",
          url: "https://www.upsvr.gov.sk/sluzby-zamestnanosti/zamestnavanie-cudzincov/zoznam-zamestnani-s-nedostatkom-pracovnej-sily.html?page_id=806803",
        },
      ],
      validFrom: "2026-10-28",
      source: UPSVR_SHORTAGE,
      lastVerified: V,
      note: "Published under section 12(ad) of Act No. 5/2004 Coll. on employment services.",
    },
    exemptsLabourMarketTest: true,
    note: "For listed occupations the vacancy confirmation is issued without the 20-working-day labour market test and the Foreign Police decides within 30 days (section 33(8)(c) of Act 404/2011), subject to a cap on the employer's share of third-country nationals.",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
      note: "Section 27 of Act 404/2011 grants family reunification to family members of any third-country national with temporary or permanent residence; no prior residence period.",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 90,
      validFrom: "2026-07-15",
      source: SLOV_LEX_404,
      lastVerified: V,
      note: "General 90-day period for temporary residence decisions under section 33(8)(a).",
    },
    conditions: {
      value:
        "Proof of financial means for the stay and of accommodation in Slovakia; no fixed income amount is published. Foreign documents apostilled or superlegalised, translated into Slovak and no older than 90 days except civil status records.",
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
    },
    source: EU_PORTAL_FAMILY,
  },
  recast: {
    transposition: {
      value: "transposed",
      validFrom: "2026-07-15",
      source: SLOV_LEX_128_2026,
      lastVerified: V,
      note: "Act No. 128/2026 Coll., in force 15 July 2026, adds Directive (EU) 2024/1233 to Annex 2 of Act 404/2011 and Annex 4 of Act 5/2004.",
    },
    decisionDays: {
      value: 60,
      validFrom: "2026-07-15",
      source: SLOV_LEX_404,
      lastVerified: V,
      note: "60 days from delivery of a complete application for temporary residence for employment based on a vacancy confirmation; 30 days for shortage occupations.",
    },
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: true,
      validFrom: "2025-04-01",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
      note: "Single permit holders notify the Foreign Police within 5 working days; the new employer must have reported the vacancy at least 20 working days earlier.",
    },
    unemploymentGraceMonths: {
      value: 3,
      validFrom: "2026-07-15",
      source: SLOV_LEX_128_2026,
      lastVerified: V,
      note: "3 months for holders of temporary residence for employment under 2 years, 6 months over 2 years, plus 3 months in cases of exploitative conditions (section 36(3) and (4)). Unemployment must be reported within 7 working days.",
    },
    inCountryApplication: {
      value: true,
      validFrom: "2025-04-01",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
      note: "A third-country national legally staying in Slovakia may file at the Foreign Police department.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["sk", "cs"],
    swornTranslationRequired: true,
    criminalRecordMaxAgeMonths: {
      value: 3,
      validFrom: "2025-04-01",
      source: EU_PORTAL_WORKER,
      lastVerified: V,
      note: "Documents must be no older than 90 days at filing (section 32(2) of Act 404/2011).",
    },
    source: EU_PORTAL_WORKER,
  },
  validity: {
    value: { initialMonths: 60, renewalMonths: 60, note: "Section 23(3): temporary residence for employment for the expected duration of employment, up to 5 years. Blue Card up to 5 years (section 37(2))." },
    validFrom: "2026-07-15",
    source: SLOV_LEX_404,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card threshold: section 37(3) of Act 404/2011 sets it at 1.2 times the average monthly wage in the Slovak economy published by the Statistical Office for the previous calendar year (1.0 times for graduates of the last 3 years). Neither the Foreign Police nor the Statistical Office page with the 2025 average could be opened, so no amount is recorded; the Statistical Office press figure is 1 620 EUR for 2025, unverified.",
    "Validity: the consolidated Act allows up to 5 years, while the EU Immigration Portal still describes 2 years (5 years only for US citizens under reciprocity). Confirm the period the Foreign Police applies.",
    "Decision period: 90 days is the general rule; the recast's 90-day maximum therefore applies, with 60 days for vacancy-based single permits. No extension period is provided in the Act.",
    "Documents: criminal record and accommodation proofs must be no older than 90 days (recorded as 3 months). Passport validity beyond the stay is not specified.",
  ],
};
