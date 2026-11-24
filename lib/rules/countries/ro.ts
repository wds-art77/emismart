import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const OUG_32_2026 = {
  label: "IGI: text of OUG 32/2026 on access of foreigners to the labour market (PDF), incl. amendments to OUG 194/2002",
  url: "https://igi.mai.gov.ro/wp-content/uploads/2026/05/ORDONANTA-DE-URGENTA-nr.-32-din-23-aprilie-2026.pdf",
};
const WORKINRO_LIST = {
  label: "WorkinRomania.gov.ro: Lista ocupațiilor deficitare (Ordinul MMFTSS nr. 1714/2026)",
  url: "https://workinromania.gov.ro/workinro/default/lista-ocupatii-deficitare",
};
const IGI_FAMILY = {
  label: "IGI: approval of family reunification with third-country nationals",
  url: "https://igi.mai.gov.ro/aprobarea-reintregirii-familiei-cu-cetateni-terti/",
};

export const ro: CountryRules = {
  code: "ro",
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
          name: "Lista ocupațiilor deficitare, approved by Order of the Minister of Labour no. 1714/2026 (Monitorul Oficial, Part I, no. 941 of 11 November 2026), 372 occupations by COR code",
          scope: "national",
          url: "https://workinromania.gov.ro/workinro/default/lista-ocupatii-deficitare",
        },
      ],
      validFrom: "2026-11-11",
      source: WORKINRO_LIST,
      lastVerified: V,
      note: "Replaces Order no. 1073/2026 (289 occupations, MO 6 August 2026), which the Bucharest Court of Appeal had suspended in September 2026. Updated every six months or when needed (art. 1(4) OUG 32/2026).",
    },
    exemptsLabourMarketTest: true,
    note: "Listing is the gateway for the D/AM2 route (permanent, seasonal and cross-border workers): art. 27^2 OUG 194/2002 requires the occupation to be on the list, a registered full-time contract at least at the minimum wage and room in the annual quota, with no individual proof of recruitment efforts. Highly qualified D/AM1 workers are outside the list but the employer must still attach the county employment agency certificate on available labour (art. 27^1(4)(d)).",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2026-08-08",
      source: IGI_FAMILY,
      lastVerified: V,
      note: "No waiting period. The sponsor must hold a temporary residence permit valid for one year, or an EU Blue Card, ICT permit, long-term residence permit or protection status.",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 90,
      validFrom: "2026-08-08",
      source: IGI_FAMILY,
      lastVerified: V,
      note: "IGI decides within at most 3 months of filing. Family members then have 60 days to request the visa.",
    },
    conditions: {
      value:
        "Means of subsistence above the sponsor's own needs, at least the national gross minimum wage for each family member, legally held housing considered normal for a similar family in Romania, and health insurance. Blue Card, ICT and research permit holders may apply even if their permit is valid for less than one year.",
      validFrom: "2026-08-08",
      source: IGI_FAMILY,
      lastVerified: V,
    },
    source: IGI_FAMILY,
  },
  recast: {
    transposition: {
      value: "transposed",
      validFrom: "2026-04-27",
      source: OUG_32_2026,
      lastVerified: V,
      note: "OUG 32/2026 (in force 27 April 2026, fully applied from 8 August 2026) adds Directive (EU) 2024/1233 to the transposition note of OUG 194/2002 (point 72).",
    },
    decisionDays: {
      value: 30,
      validFrom: "2026-08-08",
      source: OUG_32_2026,
      lastVerified: V,
      note: "Two stages: IGI checks the single application within 30 days of filing on the platform and decides within 30 days of the worker's appearance at the consulate (art. 44(10) and (14)); after entry the permis unic is decided within 30 days of filing (art. 51(4)).",
    },
    extensionDays: {
      value: 15,
      validFrom: "2026-08-08",
      source: OUG_32_2026,
      lastVerified: V,
      note: "Art. 51(4): 15 days for additional checks; for work-based extensions a further 30 days in exceptional, justified complex cases with written notice.",
    },
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2026-08-08",
      source: OUG_32_2026,
      lastVerified: V,
      note: "Change of employer by resignation only after 6 months of registered work (art. 56(13)); the new employer or agency files a new single application on the platform (art. 56(9)(e) and (10)).",
    },
    unemploymentGraceMonths: {
      value: 3,
      validFrom: "2026-08-08",
      source: OUG_32_2026,
      lastVerified: V,
      note: "Art. 56(6): right of residence continues for the unemployment benefit period, or 90 days from registration of termination without benefit.",
    },
    inCountryApplication: {
      value: true,
      validFrom: "2026-08-08",
      source: OUG_32_2026,
      lastVerified: V,
      note: "Only for the categories in art. 56(9): graduates of Romanian studies, seasonal or posted workers becoming permanent, change of employer, protection beneficiaries, visa-exempt nationals. Others need the D/AM visa from abroad.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["ro", "en", "fr"],
    swornTranslationRequired: true,
    criminalRecordMaxAgeMonths: null,
    source: OUG_32_2026,
  },
  validity: {
    value: {
      initialMonths: 24,
      renewalMonths: 24,
      note: "Right of residence for work equals the contract duration up to 2 years (art. 56(2)); highly qualified workers get contract duration plus 3 months up to 3 years (art. 56(3)); seasonal workers contract plus 5 days within 180 days per 365.",
    },
    validFrom: "2026-08-08",
    source: OUG_32_2026,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card and highly qualified threshold left null: OUG 194/2002 as amended by OUG 32/2026 (art. 27^1(4)(a), art. 56(1)) requires a salary at least equal to 'câștigul salarial mediu brut' (average gross earnings) for highly qualified workers, with no multiplier. IGI applies the figure from the annual social insurance budget law; press reports give 9,192 lei per month for 2026 (Law 44/2026). The consolidated OUG 194/2002 on legislatie.just.ro could not be opened (server errors), so the Blue Card article (art. 50(2)(g)) and the amount were not verified.",
    "Minimum wage left null: HG 146/2026 (reported in Monitorul Oficial of 13 March 2026) raises the gross minimum wage from 4,050 lei to 4,325 lei per month from 1 July 2026 (hourly 25.949 lei), but only press and law-firm pages were reachable; legislatie.just.ro and the Ministry of Labour press pages returned errors. Confirm on legislatie.just.ro before use.",
    "Passport validity and criminal record age are not stated in OUG 32/2026; the criminal record must be translated into Romanian, English or French and legalised (art. 27^1(2)(c)). Translation rules for other documents not verified.",
    "The single application decision periods run from two different events (platform filing and consular appearance); the engine value of 30 days refers to each stage, not the total.",
    "Shortage list: the WorkinRomania platform page carries a notice that it is in a testing phase and that the downloadable list is for information; the legally binding text is Order 1714/2026 in Monitorul Oficial no. 941/2026, which was not opened directly.",
  ],
};
