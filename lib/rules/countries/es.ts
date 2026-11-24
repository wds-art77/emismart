import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const boeRd1155 = {
  label: "BOE: Real Decreto 1155/2024, Reglamento de Extranjería (texto consolidado)",
  url: "https://www.boe.es/buscar/act.php?id=BOE-A-2024-24099",
};

export const es: CountryRules = {
  code: "es",
  salary: {
    // Orden PJC/44/2026 sets the threshold as a multiple (1.4x INE average gross annual earnings), not as a euro figure.
    // The euro result is published by the UGE-CE (art. 4 of the Orden); that page could not be opened. See reviewNotes.
    blueCard: null,
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: [
      {
        value: {
          amount: 1221,
          currency: "EUR",
          period: "month",
          gross: true,
          note: "SMI 2026, 40.70 EUR/day or 1,221 EUR/month (art. 1 RD 126/2026). Paid in 14 instalments; art. 3.1 uses 17,094 EUR as the annual reference.",
        },
        validFrom: "2026-01-01",
        validTo: "2026-12-31",
        source: { label: "BOE: Real Decreto 126/2026, salario mínimo interprofesional 2026", url: "https://www.boe.es/buscar/act.php?id=BOE-A-2026-3815" },
        lastVerified: V,
        note: "Published BOE 19 Feb 2026, effects from 1 Jan 2026.",
      },
      {
        value: {
          amount: 1286,
          currency: "EUR",
          period: "month",
          gross: true,
          note: "SMI 2027, 42.87 EUR/day or 1,286 EUR/month (art. 1 RD 1013/2026).",
        },
        validFrom: "2027-01-01",
        validTo: "2027-12-31",
        source: { label: "BOE: Real Decreto 1013/2026, salario mínimo interprofesional 2027", url: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-24189" },
        lastVerified: V,
        note: "Published BOE 19 Nov 2026, effects 1 Jan 2027 to 31 Dec 2027.",
      },
    ],
  },
  shortage: {
    list: {
      value: [
        {
          name: "Catálogo de Ocupaciones de Difícil Cobertura (SEPE), tercer trimestre 2026",
          scope: "regional",
          url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2026-18504",
        },
        {
          name: "SEPE: profesiones de difícil cobertura (current catalogue page)",
          scope: "regional",
          url: "https://www.sepe.es/HomeSepe/empresas/informacion-para-empresas/profesiones-de-dificil-cobertura",
        },
      ],
      validFrom: "2026-09-02",
      source: { label: "BOE: Resolución de 3 de agosto de 2026, SEPE, Catálogo de Ocupaciones de Difícil Cobertura, tercer trimestre 2026", url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2026-18504" },
      lastVerified: V,
      note: "Quarterly catalogue per Comunidad Autónoma or province (art. 75.1 RD 1155/2024). Q3 2026 published BOE 2 Sep 2026; no Q4 2026 catalogue found on 24 Nov 2026.",
    },
    exemptsLabourMarketTest: true,
    note: "Listing allows the initial residence and work authorisation to be processed without the situación nacional de empleo test (art. 75.1 RD 1155/2024). Also used for the 0.8 reduced Blue Card threshold (ISCO groups 1 and 2).",
  },
  family: {
    waitingPeriodMonths: {
      value: 12,
      validFrom: "2025-05-20",
      source: boeRd1155,
      lastVerified: V,
      note: "Art. 68.1: sponsor must have resided one year and have applied for a further year; the family permit is only granted once the sponsor's renewal is effective.",
    },
    blueCardImmediate: null,
    decisionDays: {
      value: 60,
      validFrom: "2025-05-20",
      source: boeRd1155,
      lastVerified: V,
      note: "Art. 68.6: two months; silence means refusal.",
    },
    conditions: {
      value:
        "Stable and regular income of 150% of IPREM for sponsor plus one family member and 50% of IPREM per additional member (reduced for minors to 110% of the Ingreso Mínimo Vital). Adequate housing proven by a social services report no older than six months, health insurance for the family.",
      validFrom: "2025-05-20",
      source: boeRd1155,
      lastVerified: V,
      note: "Art. 67 RD 1155/2024.",
    },
    source: boeRd1155,
  },
  recast: {
    transposition: null,
    decisionDays: {
      value: 90,
      validFrom: "2025-05-20",
      source: boeRd1155,
      lastVerified: V,
      note: "Art. 77.6: three months for the initial residence and work authorisation; silence means refusal.",
    },
    extensionDays: null,
    changeOfEmployerByNotification: {
      value: true,
      validFrom: "2025-05-20",
      source: boeRd1155,
      lastVerified: V,
      note: "Art. 79: after three months of validity and within the first year, change of employer in the same occupation; the new employer communicates it to the oficina de extranjería. Earlier change only for serious employer breach or supervening circumstances.",
    },
    unemploymentGraceMonths: null,
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["Spanish"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: boeRd1155,
  },
  validity: {
    value: {
      initialMonths: 12,
      renewalMonths: 48,
      note: "Art. 73.4: initial authorisation for the duration of the activity, maximum one year. Renewal for four years (art. 80), unless long-term residence applies.",
    },
    validFrom: "2025-05-20",
    source: boeRd1155,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card threshold: Orden PJC/44/2026 (BOE 30 Jan 2026, in force 31 Jan 2026) sets 1.4 times the INE average gross annual earnings (Encuesta Anual de Estructura Salarial), with a 0.8 coefficient for ISCO 1 and 2 occupations in the Catálogo de Ocupaciones de Difícil Cobertura and for graduates of the last three years. The euro figure is published by the UGE-CE (inclusion.gob.es/documents/d/unidadgrandesempresas/umbral-salarial.pdf), which returned HTTP 403. Secondary sources report 39,269.92 EUR (INE 2023 base) and, from about June 2026, 41,356.36 EUR general and 33,085.09 EUR reduced (INE 2024 average 29,540.26 EUR). Confirm on the UGE page before use.",
    "National highly qualified permit (Ley 14/2013 art. 71.2.a): the Orden applies the same reference threshold; secondary sources say the 0.8 reduction does not apply to it. Left null pending the UGE figure.",
    "Minimum wage: RD 126/2026 states the SMI as a monthly figure (1,221 EUR) in 14 payments; annual reference 17,094 EUR. RD 1013/2026 already fixes 1,286 EUR/month for 2027.",
    "Recast Directive (EU) 2024/1233: no BOE instrument identifying itself as the transposition was found; press reports of the Commission's July 2026 letters of formal notice list 17 states without Spain. The Ministry announced in 2024 that only minor adaptations to the Reglamento were needed. Status left null; web search budget was exhausted before this could be settled.",
    "Family reunification: the Tribunal Supremo annulled several provisions of RD 1155/2024 in 2026, reportedly including points on family reunification; check whether arts. 67 and 68 are affected.",
    "Blue Card family (Ley 14/2013 art. 62, simultaneous application) and in-country application via modificación (RD 1155/2024 título XIII) were not re-opened in this pass and are left null.",
    "Documents: RD 1155/2024 only requires a passport in force (art. 77.2.d). Consular practice on criminal record age (commonly six months) and sworn translation into Spanish was not confirmed on an official page.",
  ],
};
