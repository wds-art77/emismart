import type { CountryRules } from "../country-rules";

// Belgium. Work thresholds are regional (Flanders, Brussels-Capital, Wallonia); the Flanders figure is
// recorded as the value and the other two regions are given in the note, per the research brief.
// Flanders publishes thresholds per calendar year; the 2027 amounts were published in November 2026.
// Flanders amounts for 2026 could not be confirmed on an official page (see reviewNotes).

const FL_LOON_2027 = {
  label: "Vlaanderen, Werk en Sociale Economie: Nieuwe loonvoorwaarden bij aanvraag Toelating tot Arbeid vanaf 1 januari 2027 (PDF)",
  url: "https://assets.vlaanderen.be/image/upload/v1794926284/repositories-prd/Loonvoorwaarden-toelating-tot-arbeid-012025_aql3hz.pdf",
};
const BXL_REMUNERATION = {
  label: "Bruxelles Economie et Emploi: Permis unique, rémunération minimum",
  url: "https://economie-emploi.brussels/permis-unique-remuneration-minimum",
};
const WAL_SEUILS = {
  label: "Wallonie Emploi Formation: Autorisations de travail et permis de travail B, seuils salariaux (mise à jour 08.10.2026)",
  url: "https://emploi.wallonie.be/home/actualites/actualites/autorisations-de-travail-et-permis-de-travail-b--seuils-salariaux-a-respecter-par-les-employeurs.html",
};
const CNT_TABLE = {
  label: "Conseil national du Travail: Tableau montants CCT, CCT n° 43 RMMMG (01.07.2026)",
  url: "https://cnt-nar.be/sites/default/files/documents/fr/Tableau-Tabel-Montants%20CCT-CAO%20Bedragen-2026-07-01.pdf",
};

export const be: CountryRules = {
  code: "be",
  salary: {
    blueCard: [
      {
        value: {
          amount: 65362,
          currency: "EUR",
          period: "year",
          gross: true,
          note:
            "Flanders: 130% of the Belgian average gross annual wage, for hires after 30 April 2024 (60,334 for contracts started before 1 May 2024). Brussels: 4,748.00 per month until 31/12/2026, 5,148.00 per month from 01/01/2027 (100% of the regional average monthly wage, basic salary only). Wallonia: 68,815 per year in 2026, 70,741 in 2027.",
        },
        validFrom: "2027-01-01",
        source: FL_LOON_2027,
        lastVerified: "2026-11-24",
        note: "Flanders figure. Brussels and Wallonia figures are in the Money note (Brussels source: economie-emploi.brussels/permis-unique-remuneration-minimum; Wallonia source: emploi.wallonie.be seuils salariaux). Flanders 2026 amount not confirmed on an official page, see reviewNotes.",
      },
    ],
    blueCardReduced: null,
    highlyQualified: [
      {
        value: {
          amount: 50278,
          currency: "EUR",
          period: "year",
          gross: true,
          note:
            "Flanders 'hooggeschoolde': 100% of the Belgian average gross annual wage; 80% (40,222.40) for workers under 30, nurses and teachers in local employment, never for posted workers. Brussels 'personnel hautement qualifié': 3,703.44 per month until 31/12/2026, 4,015.44 per month from 01/01/2027 (78% of the regional average monthly wage). Wallonia 'hautement qualifié': 53,220 per year in 2026 and 54,709 in 2027; under 30: 42,576 (2026) and 43,767 (2027).",
        },
        validFrom: "2027-01-01",
        source: FL_LOON_2027,
        lastVerified: "2026-11-24",
        note: "Flanders figure. Flanders issues up to a 3-year single permit to highly skilled workers without a labour market test.",
      },
    ],
    minimumWage: [
      {
        value: { amount: 2154.11, currency: "EUR", period: "month", gross: true, note: "RMMMG / GMMI (CCT n° 43), indexation of 1 January 2026." },
        validFrom: "2026-01-01",
        validTo: "2026-03-31",
        source: CNT_TABLE,
        lastVerified: "2026-11-24",
      },
      {
        value: { amount: 2189.81, currency: "EUR", period: "month", gross: true, note: "RMMMG / GMMI, +35 EUR under CCT n° 43/18 of 24 March 2026." },
        validFrom: "2026-04-01",
        validTo: "2026-06-30",
        source: CNT_TABLE,
        lastVerified: "2026-11-24",
      },
      {
        value: { amount: 2233.61, currency: "EUR", period: "month", gross: true, note: "RMMMG / GMMI (CCT n° 43), indexation of 1 July 2026. Floor for every work permit category in all three Regions." },
        validFrom: "2026-07-01",
        source: CNT_TABLE,
        lastVerified: "2026-11-24",
        note: "The Flemish page rounds this to 2,233.60; the CNT table and the Brussels and Walloon pages give 2,233.61.",
      },
    ],
  },
  shortage: {
    list: {
      value: [
        {
          name: "Flanders: lijst met middengeschoolde functies (migratielijst), ministerieel besluit van 1 december 2025",
          scope: "regional",
          url: "https://www.vlaanderen.be/werken/een-buitenlander-in-vlaanderen-tewerkstellen/categorieen/middengeschoolde-functie",
        },
        {
          name: "Brussels-Capital: Actiris liste des professions en pénurie (fonctions critiques), 1 July 2026",
          scope: "regional",
          url: "https://economie-emploi.brussels/media/1492/download?attachment",
        },
        {
          name: "Wallonia: liste des métiers en pénurie pour travailleurs hors UE, valid 1 October 2026 to 30 September 2027",
          scope: "regional",
          url: "https://emploi.wallonie.be/home/travailleurs-etrangers/permis-de-travail/liste-des-metiers-en-penurie.html",
        },
      ],
      validFrom: "2026-10-01",
      source: {
        label: "Wallonie Emploi Formation: Liste des métiers en pénurie (travailleurs hors UE)",
        url: "https://emploi.wallonie.be/home/travailleurs-etrangers/permis-de-travail/liste-des-metiers-en-penurie.html",
      },
      lastVerified: "2026-11-24",
      note: "validFrom is the start of the current Walloon list. Flanders list: MB 1 December 2025; Brussels list: 1 July 2026 (AGRBC 16/05/2024 art. 14 §2 1°). Each Region applies its own list; a Flemish file is not valid for Brussels or Wallonia.",
    },
    exemptsLabourMarketTest: null,
    note: "Flanders states that for functions on the migratielijst the employer no longer has to prove a structural shortage (labour market test waived), with the sectoral minimum wage as salary condition. The Brussels and Walloon pages opened do not state whether listing waives the labour market investigation, so the field is null.",
  },
  family: {
    waitingPeriodMonths: null,
    blueCardImmediate: null,
    decisionDays: null,
    conditions: null,
    source: {
      label: "Belgian Embassy in Pakistan: Visa on the basis of a work permit (family reunion with a single permit holder, art. 10)",
      url: "https://pakistan.diplomatie.belgium.be/en/travel-belgium/visa-belgium-and-grand-duchy-luxembourg/visa-basis-work-permit",
    },
  },
  recast: {
    transposition: {
      value: "pending",
      validFrom: "2026-07-15",
      source: {
        label: "European Commission, infringement decisions 15 July 2026: letters of formal notice to 17 Member States including Belgium for non-communication of transposition of Directive (EU) 2024/1233",
        url: "https://ec.europa.eu/commission/presscorner/api/files/document/print/en/inf_26_1380/INF_26_1380_EN.pdf",
      },
      lastVerified: "2026-11-23",
      note: "Belgium had not communicated transposition by 21 May 2026. Transposition requires federal law changes and an amended cooperation agreement with the Regions; no adopted text found on the Chamber or Moniteur belge sites on the verification date.",
    },
    decisionDays: null,
    extensionDays: null,
    changeOfEmployerByNotification: null,
    unemploymentGraceMonths: null,
    inCountryApplication: null,
  },
  documents: {
    passportValidityBeyondStayMonths: null,
    acceptedLanguages: ["Dutch", "French", "German", "English"],
    swornTranslationRequired: null,
    criminalRecordMaxAgeMonths: null,
    source: {
      label: "Belgian Embassy in Pakistan: Visa on the basis of a work permit",
      url: "https://pakistan.diplomatie.belgium.be/en/travel-belgium/visa-belgium-and-grand-duchy-luxembourg/visa-basis-work-permit",
    },
  },
  validity: {
    value: {
      initialMonths: 36,
      renewalMonths: null,
      note: "Flanders: the employer may request a single permit for up to three years at once for highly skilled workers; renewal to be filed between 6 and 2 months before expiry. Other categories and Regions are usually limited to the contract, up to 1 year. EU Blue Card (Flanders): tied to at least 6 months of employment, 3-year card on extension after 24 months.",
    },
    validFrom: "2026-01-01",
    source: {
      label: "Vlaanderen: Een buitenlander in Vlaanderen tewerkstellen, hooggeschoolde",
      url: "https://www.vlaanderen.be/werken/een-buitenlander-in-vlaanderen-tewerkstellen/categorieen/hooggeschoolde",
    },
    lastVerified: "2026-11-23",
  },
  reviewNotes: [
    "Flanders 2026 thresholds: the official Flemish pages (hooggeschoolde, Europese blauwe kaart, lonen en toeslagen) only show the amounts from 1 January 2027 (50,278 highly skilled, 40,222.40 at 80%, 65,362 Blue Card, 80,445 executives). The Flemish PDF states that Statbel published no new average wage in 2026 and that the 2027 amounts are the most recent amount indexed. The Flemish agency site vreemdelingenrecht.be reports 48,912 (100%) and 39,129.60 (80%) as the amounts in force, but it could not be opened (HTTP 429), so no Flanders entry is recorded for 2026 and the engine returns null for Belgium until 1 January 2027. Brussels (3,703.44 per month highly qualified, 4,748.00 per month Blue Card) and Wallonia (53,220 highly qualified, 68,815 Blue Card) 2026 amounts are confirmed on official regional pages.",
    "blueCardReduced is null because Flanders and Brussels have no reduced Blue Card threshold. Wallonia applies a 'carte bleue européenne junior' threshold for workers with less than 3 years of experience: 55,052 in 2026 and 56,593 in 2027 (emploi.wallonie.be).",
    "Brussels 2027 amounts are based on a reference average salary of 5,148 EUR per month 'sous réserve d'approbation par le Gouvernement'.",
    "Family reunification: the Immigration Office (dofi.ibz.be) pages are behind a human verification challenge and could not be opened; the EU Immigration Portal host is not reachable from this environment. Secondary official snippets indicate a 9-month decision period (extendable), stable, regular and sufficient means of subsistence, adequate housing and health insurance for a third-country sponsor, and no waiting period for family of single permit holders, but none was confirmed on an opened official page, so the fields are null.",
    "Documents: the Belgian Embassy page opened requires official documents in English, French, Dutch or German, translation by a certified translator in Belgium, a criminal record extract for applicants aged 18 and over and a medical certificate from an accredited doctor, but states no maximum age for the extract. The dofi.ibz.be single permit page (not openable) is the authoritative list.",
    "Statutory decision period on the single permit: currently 4 months from the admissibility decision under the 2018 cooperation agreement (see lib/data/be.ts), not confirmed on an opened official page because the Working in Belgium and dofi.ibz.be pages were not reachable; recast.decisionDays is therefore null.",
    "Recast: the Commission sent Belgium a letter of formal notice on 15 July 2026. Flemish planning documents (Themis, October 2025) foresaw the Flemish decree in Q2 2026 and the implementing decision in Q3-Q4 2026. Re-check lachambre.be and the Moniteur belge for the federal transposition law and the amended cooperation agreement.",
    "Flanders charges a regional fee for single permit applications (reported 180 EUR from 1 September 2026, 200 EUR proposed in the ministerial note); not recorded as it is not a rule field.",
    "GMMI: the CNT table confirms 2,154.11 (1 January 2026), 2,189.81 (1 April 2026, CCT 43/18) and 2,233.61 (1 July 2026). Next indexation expected in 2027.",
  ],
};
