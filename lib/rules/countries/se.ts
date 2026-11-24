import type { CountryRules } from "../country-rules";

const VERIFIED = "2026-11-24";

const SRC = {
  migrfs: {
    label: "Migrationsverket: MIGRFS 2026:11, salary threshold for the EU Blue Card (PDF)",
    url: "https://www.migrationsverket.se/download/18.7e7ff7f619e5ace55a74ca1/1784096582691/MIGRFS_2026_11.pdf",
  },
  blueCardEmployers: {
    label: "Migrationsverket: EU Blue Cards (employers)",
    url: "https://www.migrationsverket.se/en/employers/you-want-to-employ/employing-someone-from-outside-the-eu-eea/employment/eu-blue-cards.html",
  },
  salaryReq: {
    label: "Migrationsverket: salary requirements for a work permit",
    url: "https://www.migrationsverket.se/en/word-explanations/salary-requirements-for-a-work-permit.html",
  },
  utlF: {
    label: "Riksdagen: Utlänningsförordning (2006:97), 4 kap. 21 a and 21 b §§, 5 kap. 6 §",
    url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/utlanningsforordning-2006_sfs-2006-97/",
  },
  employees: {
    label: "Migrationsverket: work permit for employees",
    url: "https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/employees.html",
  },
  importantToKnow: {
    label: "Migrationsverket: work permit for employees, important to know",
    url: "https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/employees/flikar/important-to-know.html",
  },
  family: {
    label: "Migrationsverket: family of an employee or self-employed person",
    url: "https://www.migrationsverket.se/en/you-want-to-apply/work/employee-or-self-employed/family-of-an-employee-or-self-employed-person-who-apply-afterwards.html",
  },
  lrr: {
    label: "Regeringen: lagrådsremiss Nya regler om ansökningsförfarandet för vissa uppehålls- och arbetstillstånd (8 July 2026)",
    url: "https://regeringen.se/rattsliga-dokument/lagradsremiss/2026/07/nya-regler-om-ansokningsforfarandet-for-vissa-uppehalls--och-arbetstillstand/",
  },
  lrrPdf: {
    label: "Regeringen: lagrådsremiss, full text (PDF)",
    url: "https://regeringen.se/contentassets/6a43576470784c1e9f752b20ed36b1b1/nya-regler-om-ansokningsforfarandet-for-vissa-uppehalls--och-arbetstillstand.pdf",
  },
};

export const se: CountryRules = {
  code: "se",
  salary: {
    blueCard: [
      {
        value: {
          amount: 53625,
          currency: "SEK",
          period: "month",
          gross: true,
          note: "1.25 times the average gross salary in Sweden (National Mediation Office), set by Migrationsverket regulation after consultation; MIGRFS 2026:11 decided 14 July 2026, replaces MIGRFS 2025:11.",
        },
        validFrom: "2026-07-15",
        source: SRC.migrfs,
        lastVerified: VERIFIED,
      },
    ],
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: null,
  },
  shortage: {
    list: {
      value: [
        {
          name: "Occupations exempt from the work permit salary requirement (utlänningsförordningen 5 kap. 6 §, SSYK 2012 groups; lower threshold of 75% of the median salary)",
          scope: "national",
          url: SRC.salaryReq.url,
        },
      ],
      validFrom: "2026-06-01",
      source: SRC.utlF,
      lastVerified: VERIFIED,
      note: "Introduced by förordning (2026:605), in force 1 June 2026. Covers 27 SSYK groups (chemistry and laboratory technicians, IT technicians, assistant nurses and care assistants, animal and forestry workers, welders, maintenance mechanics, meat and food processing operators, agricultural machinery drivers and others). Berry pickers remain excluded.",
    },
    exemptsLabourMarketTest: null,
    note: "Sweden applies no labour market test; the job must be advertised for 10 days in Sweden and the EU/EEA and the union given an opportunity to comment. Listing lowers the salary requirement from 90% of the median (SEK 34,470) to 75% (SEK 28,725), median SEK 38,300 from 16 June 2026. No statutory minimum wage.",
  },
  family: {
    waitingPeriodMonths: {
      value: 0,
      validFrom: "2026-01-01",
      source: SRC.family,
      lastVerified: VERIFIED,
      note: "Family may apply at the same time as the worker or afterwards; spouses, partners and unmarried children under 21 (under 18 for Blue Card, ICT and researcher families).",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 270,
      validFrom: "2026-01-01",
      source: SRC.utlF,
      lastVerified: VERIFIED,
      note: "Utlänningsförordningen 4 kap. 21 a §: family tie applications decided within nine months unless there are special reasons. Migrationsverket reports 75% of complete cases decided within 2 months.",
    },
    conditions: {
      value:
        "The worker must have income covering housing and living costs for the whole household. 2025 standard amounts left after housing costs: SEK 6,243 for a single adult, SEK 10,314 for a couple, SEK 3,336 to 5,339 per child by age, less child allowance. From 1 October 2026 the maintenance requirement is also checked at extension and family of EU Blue Card and ICT holders staying up to one year need comprehensive health insurance.",
      validFrom: "2026-10-01",
      source: SRC.family,
      lastVerified: VERIFIED,
    },
    source: SRC.family,
  },
  recast: {
    transposition: {
      value: "pending",
      validFrom: "2026-07-08",
      source: SRC.lrr,
      lastVerified: VERIFIED,
      note: "Lagrådsremiss published 8 July 2026 (based on Ds 2025:18) implementing Directive (EU) 2024/1233; amendments proposed to enter into force on 1 February 2027. No bill (proposition) to the Riksdag found by the verification date; the 21 May 2026 deadline was missed.",
    },
    decisionDays: {
      value: 120,
      validFrom: "2026-01-01",
      source: SRC.utlF,
      lastVerified: VERIFIED,
      note: "Utlänningsförordningen 4 kap. 21 b §: four months from filing for residence permits for work and work permits. Proposal: 90 days from a complete application, from 1 February 2027.",
    },
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: false,
      validFrom: "2026-01-01",
      source: SRC.importantToKnow,
      lastVerified: VERIFIED,
      note: "A new work permit application is required for a new employer, a changed company identity number or a change of profession; work may start before the decision if the application was filed before the previous permit expired. The 2027 proposal replaces this with a duty to notify the end and start of employment.",
    },
    unemploymentGraceMonths: {
      value: 3,
      validFrom: "2026-01-01",
      source: SRC.lrrPdf,
      lastVerified: VERIFIED,
      note: "Utlänningslagen 7 kap. 7 e §: three months to find a new job before the permit may be revoked, four months where a revocation inquiry had already been opened. Proposal from 1 February 2027: three months, or six months after more than two years of permits, plus three months in cases of exploitation.",
    },
    inCountryApplication: {
      value: false,
      validFrom: "2026-01-01",
      source: SRC.importantToKnow,
      lastVerified: VERIFIED,
      note: "Main rule: first-time applicants apply from outside Sweden. Exceptions include extensions, change of employer or profession, students and graduates, holders of highly qualified or job-seeker permits and Swedish EU Blue Card, ICT and seasonal permit holders.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: {
      value: 0,
      validFrom: "2026-01-01",
      source: SRC.importantToKnow,
      lastVerified: VERIFIED,
      note: "No fixed margin: a permit can never be granted for longer than the passport is valid, so the passport must cover the whole permit period.",
    },
    acceptedLanguages: ["Swedish", "English"],
    swornTranslationRequired: false,
    criminalRecordMaxAgeMonths: null,
    source: SRC.importantToKnow,
  },
  validity: {
    value: {
      initialMonths: 24,
      renewalMonths: 24,
      note: "Work permit for a maximum of two years at a time, never longer than the employment contract or the passport. From 1 June 2026 the EU Blue Card is granted for at least nine months and up to four years at a time (plus three months if the employment is shorter). Permanent residence may be applied for after four years of work permits.",
    },
    validFrom: "2026-06-01",
    source: SRC.employees,
    lastVerified: VERIFIED,
  },
  reviewNotes: [
    "EU Blue Card threshold: MIGRFS 2026:11 (decided 14 July 2026, in force 15 July 2026) sets SEK 53,625 per month. The English Migrationsverket employer page states the same amount 'as of 15 July 2025' and an April 2026 news item said 'today 52,000 SEK'; the regulation date was used. Check the Swedish page for the correct history before relying on a 2025 value.",
    "No reduced Blue Card threshold and no distinct national highly qualified threshold; the general work permit requirement is 90% of the median salary (SEK 34,470 per month from 16 June 2026, decisions from 1 June 2026), 75% (SEK 28,725) for exempt occupations. Permits granted before 1 June 2026 and extended between 1 June and 1 December 2026 keep the former 80% rule (SEK 30,640).",
    "No statutory minimum wage in Sweden; collective agreements apply.",
    "Recast: lagrådsremiss of 8 July 2026 proposes 90 days plus 30 days, change of employer by notification and a six-month adjustment period after two years of permits, all from 1 February 2027. Migrationsverket indicated that some proposals may only be implemented after the September 2026 election; status should be re-checked.",
    "extensionDays left null: current law allows extending the four-month period for special reasons or incomplete applications without a fixed number of days.",
    "Translations must be certified (Swedish or English, with a copy of the original); not described as sworn. No criminal record extract is required for work permits.",
    "Family standard amounts shown on the Migrationsverket page are 2025 figures; 2026 amounts were not found on an opened page.",
  ],
};
