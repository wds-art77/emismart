import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const AZ_ERPR = {
  label: "Employment Agency: procedure for the single residence and work permit (ЕРПР)",
  url: "https://www.az.government.bg/pages/uprajniavane-na-trudova-zaetost-erpr/",
};
const MLSP_ZTMTM = {
  label: "Ministry of Labour and Social Policy: Labour Migration and Labour Mobility Act, consolidated text (PDF, Ciela, 13.02.2026)",
  url: "https://www.mlsp.government.bg/uploads/78/sdrmi/za-trudovata-migratsiya-i-trudovata-mobilnost.pdf",
};
const STRATEGY_MRZ = {
  label: "Council of Ministers consultation portal: draft decree setting the national minimum wage from 1 January 2026",
  url: "https://www.strategy.bg/bg/public-consultations/11485/export",
};
const PARL_BILL = {
  label: "National Assembly: bill 52-602-01-29 amending the Foreigners in the Republic of Bulgaria Act (RTF)",
  url: "https://www.parliament.bg/bills/52/52-602-01-29.rtf",
};
const BTA_SECOND_READING = {
  label: "BTA: Parliament debates amendments to the Foreigners Act at second reading, 18 November 2026",
  url: "https://www.bta.bg/bg/news/bulgaria/1249000-deputatite-obsazhdat-na-vtoro-chetene-promeni-v-zakona-za-chuzhdentsite-v-republ",
};
const EU_PORTAL_FAMILY = {
  label: "EU Immigration Portal: family member, Bulgaria",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/family-member-bulgaria_en",
};

export const bg: CountryRules = {
  code: "bg",
  salary: {
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: [
      {
        value: { amount: 1077, currency: "BGN", period: "month", gross: true },
        validFrom: "2025-01-01",
        validTo: "2025-12-31",
        source: STRATEGY_MRZ,
        lastVerified: V,
        note: "Previous level cited in the 2026 decree consultation.",
      },
      {
        value: { amount: 620.2, currency: "EUR", period: "month", gross: true, note: "1,213 BGN at the fixed rate; hourly 3.74 EUR (7.31 BGN)." },
        validFrom: "2026-01-01",
        source: STRATEGY_MRZ,
        lastVerified: V,
        note: "Adopted as Council of Ministers Decree No. 243 of 13 November 2025 (State Gazette no. 98 of 18 November 2025); Bulgaria adopted the euro on 1 January 2026. A draft for 2027 proposes 660 EUR.",
      },
    ],
  },
  shortage: {
    list: null,
    exemptsLabourMarketTest: null,
    note: "No official shortage occupation list is used for the single permit or the Blue Card. The Blue Card threshold (1.5 times the average wage, art. 17(2)(2) Labour Migration Act) has no reduced variant and the Blue Card is exempt from the labour market test by law (art. 17(1)).",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
      note: "No waiting period; the sponsor must hold a residence permit valid for at least one year.",
    },
    blueCardImmediate: null,
    decisionDays: null,
    conditions: {
      value:
        "Family members show sufficient financial resources, accommodation and health insurance for the stay; the family member's permit follows the sponsor's permit, up to one year at a time.",
      validFrom: "2025-04-01",
      source: EU_PORTAL_FAMILY,
      lastVerified: V,
    },
    source: EU_PORTAL_FAMILY,
  },
  recast: {
    transposition: {
      value: "pending",
      validFrom: "2026-11-18",
      source: BTA_SECOND_READING,
      lastVerified: V,
      note: "Bill 52-602-01-29 (Council of Ministers Decision 575 of 27 July 2026) transposing Directive (EU) 2024/1233 was debated at second reading on 18 November 2026; promulgation in the State Gazette not found on the verification date.",
    },
    decisionDays: {
      value: 60,
      validFrom: "2021-06-01",
      source: AZ_ERPR,
      lastVerified: V,
      note: "Current art. 24i(18) Foreigners Act: the procedure may not exceed two months. The pending bill replaces this with 90 days from filing.",
    },
    extensionDays: {
      value: 60,
      validFrom: "2021-06-01",
      source: AZ_ERPR,
      lastVerified: V,
      note: "Extension of two months in cases of factual and legal complexity. The pending bill provides 30 days.",
    },
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2021-06-01",
      source: AZ_ERPR,
      lastVerified: V,
      note: "The permit is tied to the employer, position and workplace; a change needs a new application. The pending bill allows a change of employer after 6 months with the first employer, by an application to the Migration Directorate with a reduced document set.",
    },
    unemploymentGraceMonths: {
      value: 0,
      validFrom: "2021-06-01",
      source: AZ_ERPR,
      lastVerified: V,
      note: "Currently the right of residence ends on termination of employment. The pending bill (new art. 24i(20)) tolerates 3 months of unemployment, 6 months after more than two years on the permit, with registration at the Employment Agency within 7 working days.",
    },
    inCountryApplication: {
      value: true,
      validFrom: "2021-06-01",
      source: AZ_ERPR,
      lastVerified: V,
      note: "A foreigner holding continuous (extended) residence in Bulgaria may file in person, co-signed by the employer, at least two months before the current residence expires; others are filed by the employer before entry.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["bg"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: AZ_ERPR,
  },
  validity: {
    value: {
      initialMonths: 36,
      renewalMonths: null,
      note: "Issued for three years, or for the contract duration when shorter; renewal requested at least two months before expiry.",
    },
    validFrom: "2021-06-01",
    source: AZ_ERPR,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card threshold left null: art. 17(2)(2) of the Labour Migration and Labour Mobility Act requires a gross salary at least 1.5 times the average wage in Bulgaria per the latest NSI data for the 12 months before the contract; no authority publishes an absolute figure, so no amount is recorded. Contract of at least 6 months (art. 17(2)(3)).",
    "Minimum wage source is the Council of Ministers consultation record of the draft decree; the adopted Decree No. 243/2025 in State Gazette no. 98/2025 could not be opened (NRA and State Gazette pages unavailable). Amount and date match the NRA notice found via search.",
    "Recast: the National Assembly debated the bill at second reading on 18 November 2026; press reports call the adoption final but no State Gazette publication was found. Figures in the recast notes (90 + 30 days, 3/6 months unemployment, change of employer after 6 months) are from the bill text as introduced and may differ in the adopted law.",
    "Family reunification: the Foreigners Act text (lex.bg) could not be opened, so the statutory decision period and the Blue Card family rule (art. 33l) are unverified; values from the EU Immigration Portal page dated 1 April 2025.",
    "Document rules: the Employment Agency page requires education documents legalised with a certified Bulgarian translation; passport validity and criminal record age are not specified.",
    "Permit validity 3 years comes from the Employment Agency page cached from an earlier session (the page returned 503 on the verification date).",
  ],
};
