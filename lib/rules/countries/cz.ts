import type { CountryRules } from "../country-rules";

const V = "2026-11-24";

const SDELENI_44_2026 = {
  label: "Sdělení MPSV č. 44/2026 Sb. on the average gross annual wage for Blue Cards (PDF)",
  url: "https://mpsv.gov.cz/cms/documents/8169fe76-c0b4-321a-5c05-2f00ca9b2e23/sdělení č. 44_2026 Sb., o výši průměrné hrubé roční mzdy v České republice za rok 2025 pro účely vydávání modrých karet.pdf",
};
const IPC_BLUE_CARD = {
  label: "Information Portal for Foreigners (Ministry of the Interior): Blue Card",
  url: "https://ipc.gov.cz/typy-viz-a-pobytu/obcane-tretich-zemi/dlouhodobe-pobyty/modra-karta/",
};
const IPC_EMPLOYEE_CARD = {
  label: "Information Portal for Foreigners (Ministry of the Interior): Employee Card",
  url: "https://ipc.gov.cz/en/visa-and-residence-permit-types/third-country-nationals/long-term-residence-permits/employee-card/",
};
const MPSV_MIN_WAGE = {
  label: "MPSV: minimum wage rises to 22 400 CZK from January 2026",
  url: "https://mpsv.gov.cz/minimalni-mzda-od-ledna-2026-vzroste-o-1-600-korun-na-22-400-korun-mesicne",
};
const MZV_FAMILY = {
  label: "Ministry of Foreign Affairs: long-term residence for family reunification",
  url: "https://mzv.gov.cz/jnp/cz/informace_pro_cizince/pobytova_opravneni_k_pobytu_nad_90_dnu/slouceni_rodiny_1.html",
};
const EU_PORTAL_FAMILY = {
  label: "EU Immigration Portal: family member, Czechia",
  url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/family-member-czechia_en",
};

export const cz: CountryRules = {
  code: "cz",
  salary: {
    blueCard: [
      {
        value: {
          amount: 885870,
          currency: "CZK",
          period: "year",
          gross: true,
          note: "1.5 x the average gross annual wage of 590 580 CZK published in Sdělení č. 44/2026 Sb. (section 42i of Act 326/1999 Sb.). Arithmetic by Emismart; the Ministry of the Interior publishes the equivalent monthly figure of 73 823 CZK.",
        },
        validFrom: "2026-05-01",
        validTo: "2027-04-30",
        source: SDELENI_44_2026,
        lastVerified: V,
        note: "The reference period runs from 1 May to 30 April. The wage condition is checked on the date of the decision.",
      },
    ],
    blueCardReduced: null,
    highlyQualified: null,
    minimumWage: [
      {
        value: { amount: 22400, currency: "CZK", period: "month", gross: true },
        validFrom: "2026-01-01",
        source: MPSV_MIN_WAGE,
        lastVerified: V,
      },
    ],
  },
  shortage: {
    list: null,
    exemptsLabourMarketTest: null,
    note: "Czechia has no shortage occupation list. Access is controlled through the Central Register of Job Vacancies for Employee Card holders; the Labour Office may issue a binding opinion. Government economic migration programmes give procedural priority only.",
  },
  family: {
    waitingPeriodMonths: {
      value: 6,
      validFrom: "2025-04-01",
      source: MZV_FAMILY,
      lastVerified: V,
      note: "6 months of residence for an Employee Card holder; 15 months for other long-term or permanent residence holders. No minimum for researchers.",
    },
    blueCardImmediate: true,
    decisionDays: {
      value: 270,
      validFrom: "2025-04-01",
      source: MZV_FAMILY,
      lastVerified: V,
      note: "270 days for long-term residence for family reunification; 90 days for family of Blue Card holders.",
    },
    conditions: {
      value:
        "Aggregate monthly household income after reunification must be at least the sum of the subsistence minimums of all household members (3 550 CZK first adult, 3 200 CZK other adults, 1 970 to 2 770 CZK per child) plus the normative housing costs or proven actual housing costs. Proof of accommodation is required.",
      validFrom: "2025-04-01",
      source: MZV_FAMILY,
      lastVerified: V,
    },
    source: EU_PORTAL_FAMILY,
  },
  recast: {
    transposition: null,
    decisionDays: {
      value: 60,
      validFrom: "2025-04-01",
      source: IPC_EMPLOYEE_CARD,
      lastVerified: V,
      note: "60 days from a complete application; the period stops while proceedings are suspended.",
    },
    extensionDays: {
      value: 30,
      validFrom: "2025-04-01",
      source: IPC_EMPLOYEE_CARD,
      lastVerified: V,
      note: "90 days in especially complicated cases or where a binding opinion of the Labour Office is requested.",
    },
    changeOfEmployerByNotification: {
      value: true,
      validFrom: "2025-04-01",
      source: IPC_EMPLOYEE_CARD,
      lastVerified: V,
      note: "Change of employer or position is reported to the Ministry of the Interior; no new card is issued. The new vacancy must carry a number from the central register.",
    },
    unemploymentGraceMonths: {
      value: 3,
      validFrom: "2025-10-01",
      source: IPC_EMPLOYEE_CARD,
      lastVerified: V,
      note: "90 days after loss of employment to report a new job or apply for another permit, otherwise the card expires (extended from 60 days on 1 October 2025).",
    },
    inCountryApplication: {
      value: true,
      validFrom: "2025-04-01",
      source: IPC_EMPLOYEE_CARD,
      lastVerified: V,
      note: "Holders of a long-term visa or long-term residence permit may apply in person at a Ministry office no later than the last day of their current stay.",
    },
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["cs"],
    swornTranslationRequired: true,
    criminalRecordMaxAgeMonths: {
      value: 6,
      validFrom: "2025-04-01",
      source: MZV_FAMILY,
      lastVerified: V,
      note: "All attachments except passport and photograph must be no older than 180 days.",
    },
    source: MZV_FAMILY,
  },
  validity: {
    value: { initialMonths: 24, renewalMonths: 24, note: "Employee Card for the duration of the employment, up to 2 years, extendable by up to 2 years at a time. Blue Card: contract plus 3 months, up to 3 years." },
    validFrom: "2025-04-01",
    source: IPC_EMPLOYEE_CARD,
    lastVerified: V,
  },
  reviewNotes: [
    "Blue Card threshold: the official notice publishes only the average gross annual wage (590 580 CZK for 1 May 2026 to 30 April 2027); the 1.5 multiplier is statutory. The yearly amount recorded is the product of the two. The Ministry of the Interior Blue Card page (archiv.mv.gov.cz) that normally states the monthly figure could not be read.",
    "Recast transposition status could not be confirmed. Czechia is not among the 17 Member States named in press coverage of the July 2026 letters of formal notice, but no transposing act was found; the new Act on the Residence of Foreigners approved by the Chamber of Deputies on 11 September 2026 is proposed to take effect on 1 January 2029.",
    "Translation: official pages require a certified Czech translation (úředně ověřený překlad) with higher authentication; recorded as sworn. Document age limit of 180 days applies to all attachments except passport and photograph.",
    "Minimum wage 2025 (20 800 CZK) not recorded because the MPSV page only states the 2026 figure and the increase.",
  ],
};
