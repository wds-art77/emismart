import type { CountryRules } from "../country-rules";

const VERIFIED = "2026-11-24";

const SRC = {
  payLimit: {
    label: "New to Denmark (SIRI): Pay Limit Scheme",
    url: "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Pay-Limit-Scheme",
  },
  supplementary: {
    label: "New to Denmark (SIRI): the Supplementary Pay Limit Scheme's minimum amount",
    url: "https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Minimum-amounts/The-Supplementary-Pay-Limit-Scheme's-minimum-amount",
  },
  positiveNews: {
    label: "New to Denmark (SIRI): the Positive Lists are updated as of 1 July 2026",
    url: "https://nyidanmark.dk/en-GB/News-Front-Page/2026/06/The-Positive-Lists-are-updated-as-of-1-July-2026",
  },
  positiveHigherEd: {
    label: "New to Denmark (SIRI): Positive List for People with a Higher Education",
    url: "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Positive-List-Higher-Education",
  },
  positiveLists: {
    label: "New to Denmark (SIRI): the Positive Lists",
    url: "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/The-Positive-Lists/",
  },
  family: {
    label: "New to Denmark (SIRI): accompanying family member of a worker",
    url: "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Family/Accompanying-family-members/Accompanying-family---work",
  },
  documentation: {
    label: "New to Denmark (SIRI): documentation requirements",
    url: "https://www.nyidanmark.dk/en-GB/Words-and-concepts/SIRI/Documentation---SIRI-has-these-requirements-for-documents",
  },
};

export const dk: CountryRules = {
  code: "dk",
  salary: {
    // Denmark does not take part in Directive (EU) 2021/1883 (EU Blue Card); the national route is the
    // Pay Limit Scheme, recorded under highlyQualified.
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: [
      {
        value: {
          amount: 552000,
          currency: "DKK",
          period: "year",
          gross: true,
          note: "Pay Limit Scheme minimum annual salary, 2026 level, adjusted every 1 January. Only liquid salary, labour market pension contributions and holiday allowance count. The Supplementary Pay Limit Scheme (unemployment below 3.75% and job advertised on Jobnet and EURES) requires DKK 446,000 for applications from 1 January 2026 (DKK 415,000 in 2025).",
        },
        validFrom: "2026-01-01",
        source: SRC.payLimit,
        lastVerified: VERIFIED,
      },
    ],
    minimumWage: null,
  },
  shortage: {
    list: {
      value: [
        {
          name: "Positive List for People with a Higher Education (164 job titles from 1 July 2026; further update 1 October 2026)",
          scope: "national",
          url: SRC.positiveHigherEd.url,
        },
        {
          name: "Positive List for Skilled Work (63 job titles from 1 July 2026)",
          scope: "national",
          url: SRC.positiveLists.url,
        },
      ],
      validFrom: "2026-07-01",
      source: SRC.positiveNews,
      lastVerified: VERIFIED,
      note: "Updated on 1 January and 1 July from labour market monitoring, and normally on 1 April and 1 October by the Regional Labour Market Councils and unemployment insurance funds. Job titles may be added at any time in case of acute shortage.",
    },
    exemptsLabourMarketTest: null,
    note: "Denmark applies no labour market test to the Pay Limit or Positive List schemes. The Positive Lists are an eligibility route for jobs below the pay limit; salary and terms must match Danish standards for the field. No statutory minimum wage; collective agreements apply.",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2026-01-01",
      source: SRC.family,
      lastVerified: VERIFIED,
      note: "Spouse, registered or cohabiting partner and children under 18 may apply together with the worker; no waiting period mentioned.",
    },
    blueCardImmediate: null,
    decisionDays: {
      value: 60,
      validFrom: "2026-01-01",
      source: SRC.family,
      lastVerified: VERIFIED,
      note: "SIRI normal processing time of 2 months, up to 3 months if further information is needed. Service standard, not a statutory period; Denmark is not bound by Directive 2003/86/EC.",
    },
    conditions: {
      value:
        "Family members must live at the same address as the sponsor in Denmark and hold a valid passport; the permit runs until 3 months before passport expiry at most. No financial support requirement where the sponsor holds a residence and work permit based on salaried employment. Cohabiting partners must show 1.5 to 2 years of cohabitation. Fee DKK 3,080. The family permit is granted for the same period as the sponsor's permit.",
      validFrom: "2026-01-01",
      source: SRC.family,
      lastVerified: VERIFIED,
    },
    source: SRC.family,
  },
  recast: {
    transposition: {
      value: "not_applicable",
      validFrom: "2024-05-20",
      source: SRC.payLimit,
      lastVerified: VERIFIED,
      note: "Denmark does not take part in Directive 2011/98/EU or the recast Directive (EU) 2024/1233 (Protocol 22). Work permits are issued under the Danish Aliens Act by SIRI.",
    },
    decisionDays: null,
    extensionDays: null,
    changeOfEmployerByNotification: null,
    unemploymentGraceMonths: null,
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: {
      value: 3,
      validFrom: "2026-01-01",
      source: SRC.payLimit,
      lastVerified: VERIFIED,
      note: "A residence permit can only be valid until 3 months before the expiry date of the passport; a shorter passport shortens the permit. Copies of all passport pages must be submitted.",
    },
    acceptedLanguages: ["Danish", "English"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: SRC.documentation,
  },
  validity: {
    value: {
      initialMonths: 48,
      renewalMonths: null,
      note: "Pay Limit Scheme: normally 4 years where the employment lasts 4 years or more; otherwise for the period of employment plus an automatic 6-month job-seeking permit. Extension must be applied for before expiry; the extension length is not stated on the SIRI page.",
    },
    validFrom: "2026-01-01",
    source: SRC.payLimit,
    lastVerified: VERIFIED,
  },
  reviewNotes: [
    "Denmark is outside the EU Blue Card and single permit directives; blueCard, blueCardReduced and most recast fields are null by design. National highly skilled route is the Pay Limit Scheme (DKK 552,000 for 2026); 2025 level DKK 514,000 appears in SIRI's December 2025 newsletter, which was not opened.",
    "Supplementary Pay Limit Scheme: DKK 446,000 for applications from 1 January 2026 (DKK 415,000 in 2025, DKK 393,000 in 2024), confirmed on the SIRI minimum amount page. Fast-track Scheme pay limit track uses the same amounts.",
    "No statutory minimum wage in Denmark; salary must match Danish standards for the field (SIRI checks against wage statistics, updated 1 August 2026 for skilled work).",
    "Positive List counts: 164 (higher education) and 63 (skilled work) as of 1 July 2026 per SIRI news; the higher education list was updated again on 1 October 2026 and the new count was not published on the page opened. The Skilled Work list page URL could not be resolved (404); the general Positive Lists page is referenced.",
    "Documentation: SIRI requires translation by an authorised translator; marriage and custody documents into Danish or English, educational documents may also be in Norwegian, Swedish, French or German. Whether 'authorised' equals a sworn translation is left null. No criminal record extract is required for work schemes.",
    "Family decision period of 60 days is SIRI's published normal processing time, not a statutory limit.",
  ],
};
