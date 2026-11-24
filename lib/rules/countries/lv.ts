import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const PMLP_SUBSISTENCE = {
  label: "OCMA (PMLP): necessary subsistence and salary thresholds for residence permits",
  url: "https://www.pmlp.gov.lv/en/necessary-subsistence-0",
};
const LIKUMI_656 = {
  label: "Likumi.lv: Cabinet Regulation No. 656 on the minimum monthly wage, as amended by Regulation No. 680 of 19 November 2025",
  url: "https://likumi.lv/ta/id/278067",
};
const IMMIGRATION_LAW_2026 = {
  label: "Likumi.lv: Imigrācijas likums (new Immigration Law, in force 15 September 2026)",
  url: "https://likumi.lv/ta/id/370622-imigracijas-likums",
};
const LVPORTALS_CHANGE = {
  label: "LV portāls (Latvijas Vēstnesis): change of employer without a new residence permit, amendments to Cabinet Regulation No. 564 in force 10 July 2026",
  url: "https://lvportals.lv/skaidrojumi/392082-turpmak-treso-valstu-pilsoniem-mainot-darba-deveju-nevajadzes-sanemt-jaunu-terminuzturesanas-atlauju-2026",
};
const LVPORTALS_NEW_LAW = {
  label: "LV portāls (Latvijas Vēstnesis): the new Immigration Law enters into force",
  url: "https://lvportals.lv/skaidrojumi/394430-stajas-speka-jaunais-imigracijas-likums-2026",
};

export const lv: CountryRules = {
  code: "lv",
  salary: {
    blueCard: [
      {
        value: { amount: 2723, currency: "EUR", period: "month", gross: true, note: "Coefficient 1.5 applied to the previous year's average gross monthly wage (1,815 EUR for 2025, CSB)." },
        validFrom: "2026-01-01",
        source: PMLP_SUBSISTENCE,
        lastVerified: V,
        note: "Sub-paragraph 11.2 of the Cabinet regulation on financial means. The PMLP page does not state the date from which the 2025 base applies; thresholds are reset each spring.",
      },
    ],
    blueCardReduced: [
      {
        value: { amount: 2178, currency: "EUR", period: "month", gross: true, note: "Coefficient 1.2 for professions on the Cabinet list of specialities with expected significant labour shortage." },
        validFrom: "2026-01-01",
        source: PMLP_SUBSISTENCE,
        lastVerified: V,
        note: "Sub-paragraph 11.3 of the Cabinet regulation on financial means.",
      },
    ],
    highlyQualified: null,
    minimumWage: [
      {
        value: { amount: 780, currency: "EUR", period: "month", gross: true },
        validFrom: "2026-01-01",
        source: LIKUMI_656,
        lastVerified: V,
        note: "Regulation No. 656, section 2, in the wording of Regulation No. 680 of 19 November 2025 (up from 740 EUR in 2025). The Ministry of Welfare projects 835 EUR for 2027.",
      },
    ],
  },
  shortage: {
    list: {
      value: [
        {
          name: "Specialitāšu (profesiju) saraksts, kurās prognozējams būtisks darbaspēka trūkums (Cabinet Regulation No. 108 of 20 February 2018, as amended)",
          scope: "national",
          url: "https://likumi.lv/ta/id/297537",
        },
      ],
      validFrom: "2018-03-07",
      source: PMLP_SUBSISTENCE,
      lastVerified: V,
      note: "The list lowers the Blue Card salary coefficient from 1.5 to 1.2. The regulation itself was not opened; verify its current annex.",
    },
    exemptsLabourMarketTest: null,
    note: "The list affects only the Blue Card salary coefficient. Blue Card applicants are in any case exempt from NVA vacancy registration; for ordinary employment the vacancy must be registered with NVA for at least 10 working days and an NVA opinion obtained (Immigration Law, refusal ground for invitations without NVA opinion).",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2026-09-15",
      source: IMMIGRATION_LAW_2026,
      lastVerified: V,
      note: "Section 27(3): a family member (spouse, minor children, dependants) may request a temporary residence permit for the term of the sponsor's permit, without a prior residence period; excluded only for sponsors studying in first or second cycle programmes who are not NATO nationals.",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 30,
      validFrom: "2026-09-15",
      source: IMMIGRATION_LAW_2026,
      lastVerified: V,
      note: "Section 33: temporary residence permits within 30 days; family members of an EU Blue Card holder within 10 working days, extendable to 3 months.",
    },
    conditions: {
      value:
        "Financial means per the Cabinet regulation on necessary subsistence (at least the minimum monthly wage of 780 EUR for an adult and 234 EUR for a minor child where no other sub-paragraph applies), a declared place of residence, health insurance and proof of kinship; the family member's permit runs for the sponsor's permit term.",
      validFrom: "2026-09-15",
      source: PMLP_SUBSISTENCE,
      lastVerified: V,
    },
    source: IMMIGRATION_LAW_2026,
  },
  recast: {
    transposition: {
      value: "transposed",
      validFrom: "2026-07-10",
      source: LVPORTALS_CHANGE,
      lastVerified: V,
      note: "Amendments to Cabinet Regulation No. 564 (Uzturēšanās atļauju noteikumi) in force 10 July 2026 implement Directive (EU) 2024/1233; the new Immigration Law of 20 August 2026 (in force 15 September 2026) carries the unemployment and decision rules.",
    },
    decisionDays: {
      value: 30,
      validFrom: "2026-09-15",
      source: IMMIGRATION_LAW_2026,
      lastVerified: V,
      note: "Section 33(1): 30 days for a temporary residence permit; 10 working days for an EU Blue Card. Faster examination against a higher state fee.",
    },
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: true,
      validFrom: "2026-07-10",
      source: LVPORTALS_CHANGE,
      lastVerified: V,
      note: "No new residence permit: the new employer files an invitation with OCMA and may employ the worker once it is approved or at the latest 30 days after filing; Blue Card holders during unemployment or after 12 months may start on filing.",
    },
    unemploymentGraceMonths: {
      value: 3,
      validFrom: "2026-09-15",
      source: IMMIGRATION_LAW_2026,
      lastVerified: V,
      note: "Section 36: total unemployment up to 3 months during the permit, 6 months after more than two years on an employment permit, with written notice to OCMA; extended by 3 months for victims of exploitative conditions. Same periods for Blue Card holders.",
    },
    inCountryApplication: {
      value: true,
      validFrom: "2026-09-15",
      source: IMMIGRATION_LAW_2026,
      lastVerified: V,
      note: "Applicants legally in Latvia file with OCMA; section 33(7) allows them to remain until the decision takes effect. Others apply at a Latvian mission.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: {
      value: 3,
      validFrom: "2026-09-15",
      source: IMMIGRATION_LAW_2026,
      lastVerified: V,
      note: "Section 7(1)(4): travel document valid at least three months beyond the intended stay; section 7(2): at least six months when a residence permit for more than one year is requested.",
    },
    acceptedLanguages: ["lv", "en"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: IMMIGRATION_LAW_2026,
  },
  validity: {
    value: {
      initialMonths: 12,
      renewalMonths: 12,
      note: "Section 27(1)(12): employment-based permit up to one year (except employers paying micro-enterprise tax); section 27(1)(13): EU Blue Card up to two years, or contract plus three months.",
    },
    validFrom: "2026-09-15",
    source: IMMIGRATION_LAW_2026,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card thresholds (2,723 and 2,178 EUR) are read from the PMLP page, which does not give the date they apply from; validFrom 2026-01-01 is a placeholder for the year in which the 2025 average (1,815 EUR) is the base. Expect new figures once the CSB publishes the 2026 average (around March 2027).",
    "The new Immigration Law (likumi.lv ID 370622) replaced the 2002 law on 15 September 2026 and cut employment permit validity from five years to one year; earlier guidance (including lib/data/lv.ts) describes the old law.",
    "Section 5: documents for a first residence permit may be filed in Latvian or English, for repeat permits in Latvian only; sworn translation and criminal record age rules not found in the law text.",
    "The shortage professions regulation (Cabinet Regulation No. 108/2018) was identified through search but not opened; confirm it remains the list referred to by the new law.",
    "The 10 July 2026 change-of-employer rule is from the official publisher's explanatory article; the amended Regulation No. 564 was not opened.",
  ],
};
