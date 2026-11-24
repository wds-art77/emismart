import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const PPA_EMPLOYMENT = {
  label: "Police and Border Guard Board: residence permit for employment (salary criterion table)",
  url: "https://www.politsei.ee/en/instructions/residence-permit-for-employment",
};
const ALIENS_ACT = {
  label: "Riigi Teataja: Foreign Nationals Act (Välismaalaste seadus), English translation in force from 1 September 2026",
  url: "https://www.riigiteataja.ee/api/v1/en/akt/501092026001/blob-html",
};
const RT_MIN_WAGE = {
  label: "Riigi Teataja: Töötasu alammäära kehtestamine, Government Regulation no. 36 of 23 March 2026 (RT I, 24.03.2026, 5)",
  url: "https://www.riigiteataja.ee/akt/124032026005",
};

export const ee: CountryRules = {
  code: "ee",
  salary: {
    blueCard: [
      {
        value: { amount: 3138, currency: "EUR", period: "month", gross: true, note: "1.5 times the annual average gross monthly wage last published by Statistics Estonia (2,092 EUR)." },
        validFrom: "2026-03-05",
        source: PPA_EMPLOYMENT,
        lastVerified: V,
        note: "PPA table for applications accepted from 5 March 2026 to March 2027; coefficient 1.5 per section 190^7(1) of the Aliens Act.",
      },
    ],
    blueCardReduced: [
      {
        value: { amount: 2594, currency: "EUR", period: "month", gross: true, note: "1.24 times the average gross monthly wage." },
        validFrom: "2026-03-05",
        source: PPA_EMPLOYMENT,
        lastVerified: V,
        note: "Section 190^7(2) Aliens Act: top specialists and supervisors, top specialists in natural or technical science or health, specialists in pedagogy, business or administration, ICT, legal, cultural or social spheres.",
      },
    ],
    highlyQualified: [
      {
        value: { amount: 3138, currency: "EUR", period: "month", gross: true, note: "Top specialist (tippspetsialist): 1.5 times the average gross monthly wage." },
        validFrom: "2026-03-05",
        source: PPA_EMPLOYMENT,
        lastVerified: V,
        note: "Sections 178(1^1) and 181(2)(3) and (4) Aliens Act: exempt from the Töötukassa permission and from the immigration quota.",
      },
    ],
    minimumWage: [
      {
        value: { amount: 946, currency: "EUR", period: "month", gross: true, note: "Hourly 5.67 EUR." },
        validFrom: "2026-04-01",
        source: RT_MIN_WAGE,
        lastVerified: V,
        note: "Replaces Regulation no. 87 of 19 December 2024 (886 EUR, 5.31 EUR per hour, from 1 January 2025).",
      },
    ],
  },
  shortage: {
    list: null,
    exemptsLabourMarketTest: null,
    note: "Estonia has no occupation-based shortage list. Section 181(8) of the Aliens Act lets the Government set by order a list of fields with labour shortage (exempt from the Töötukassa permission) for a limited period; no order in force was found. The reduced Blue Card threshold applies to occupational groups named in the Act itself.",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2024-01-01",
      source: ALIENS_ACT,
      lastVerified: V,
      note: "Section 137: a spouse may join a foreign national residing on a residence permit without a prior residence period; two years of residence are required only where the sponsor holds a permit for studies (not doctoral).",
    },
    blueCardImmediate: true,
    decisionDays: null,
    conditions: {
      value:
        "Sufficient legal income for the family (section 139), medical insurance of at least 6,000 EUR per year, a registered place of residence and actual dwelling in Estonia, and a genuine, stable marriage with close economic ties (section 138).",
      validFrom: "2024-01-01",
      source: ALIENS_ACT,
      lastVerified: V,
    },
    source: ALIENS_ACT,
  },
  recast: {
    transposition: {
      value: "transposed",
      validFrom: "2026-05-22",
      source: ALIENS_ACT,
      lastVerified: V,
      note: "Amending act RT I, 21.05.2026, 2, in force 22 May 2026: registration of change of employment, unemployment periods, repeal of the separate Blue Card provisions on temporary unemployment.",
    },
    decisionDays: {
      value: 90,
      validFrom: "2026-05-22",
      source: PPA_EMPLOYMENT,
      lastVerified: V,
      note: "PPA: response within 90 days, residence card issued within 30 days thereafter.",
    },
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: true,
      validFrom: "2026-05-22",
      source: ALIENS_ACT,
      lastVerified: V,
      note: "The new employer submits an application for registration of the change of employment to the PPA before the foreign national starts work; the PPA refuses where the quota is reached or the sponsor is unreliable.",
    },
    unemploymentGraceMonths: {
      value: 3,
      validFrom: "2026-05-22",
      source: ALIENS_ACT,
      lastVerified: V,
      note: "Up to 3 months in total during the permit, 6 months after two years on the permit; the holder must have legal income when unemployed for more than 3 months. Blue Card: 3 months (6 after two years of work).",
    },
    inCountryApplication: {
      value: true,
      validFrom: "2026-05-22",
      source: PPA_EMPLOYMENT,
      lastVerified: V,
      note: "A foreign national legally staying in Estonia applies at a PPA service office; others at an Estonian mission.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: [],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: {
      value: 6,
      validFrom: "2025-04-01",
      source: PPA_EMPLOYMENT,
      lastVerified: V,
      note: "Certificate from every country of residence of at least three months in the last three years, issued within the last six months, required from age 14 (PPA document list).",
    },
    source: PPA_EMPLOYMENT,
  },
  validity: {
    value: {
      initialMonths: 60,
      renewalMonths: 120,
      note: "Temporary residence permit for employment up to 5 years, extensions up to 10 years at a time. EU Blue Card: contract plus 3 months up to 2 years 3 months, extension up to 4 years 3 months (section 190^11).",
    },
    validFrom: "2026-05-22",
    source: PPA_EMPLOYMENT,
    lastVerified: V,
  },
  reviewNotes: [
    "Salary figures are the PPA table values for applications accepted from 5 March 2026 (base 2,092 EUR); the PPA page does not state the statistical reference year. The table is replaced each March when Statistics Estonia publishes the annual average wage.",
    "Minimum wage: the Riigi Teataja page was opened but its text is script-rendered; the figures (946 EUR, 5.67 EUR per hour, regulation no. 36 of 23 March 2026, in force 1 April 2026) match the search result snippet and government announcements. The earlier 886 EUR rate was not recorded as a separate entry because its regulation page was not opened.",
    "Family reunification decision period left null: section 33 of the Aliens Act leaves the term to a regulation (maximum six months) and the PPA spouse page could not be opened. Blue Card family members follow the general rule with no waiting period.",
    "Criminal record maximum age (6 months) is taken from the PPA document list as summarised in lib/data/ee.ts; it was not visible in the fetched employment page text and should be re-verified.",
    "Accepted document languages and sworn translation rules were not confirmed on an official page.",
  ],
};
