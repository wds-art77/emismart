import type { CountryCode } from "./types";

// Statutory or published decision periods used by the case tracker to compute an
// indicative "decision due" date from the filing date. Where no national period
// exists the entry is null and the tracker shows the note instead.
// Figures are taken from the official sources cited in lib/data/<code>.ts.

export type Deadline = {
  months?: number;
  days?: number;
  label: string;
  note: string;
};

export const deadlines: Record<CountryCode, Deadline | null> = {
  at: { days: 56, label: "8 weeks", note: "Decision on the Red-White-Red Card within 8 weeks (bmi.gv.at); general limit of 6 months under the NAG." },
  be: { months: 4, label: "4 months", note: "Legal maximum from the date the Region declares the file admissible. The recast directive requires 90 days from a complete application." },
  bg: { months: 2, label: "2 months", note: "Whole procedure capped at 2 months under art. 24i of the Foreigners Act, extendable by 2 months in complex cases." },
  hr: { days: 90, label: "90 days", note: "Article 91 of the Aliens Act: 90 days from a complete application, plus 30 days in complex cases." },
  cy: null,
  cz: { days: 60, label: "60 days", note: "60 days for the Employee Card, 90 days in complex cases or where a Labour Office binding opinion is requested." },
  dk: { months: 1, label: "1 month", note: "SIRI normal processing time; up to 3 months if more information is needed. Fast-track about 1 month." },
  ee: { days: 90, label: "90 days", note: "PPA: decision within 90 days of accepting the application; the card is produced within 30 days." },
  fi: { months: 4, label: "4 months", note: "Aliens Act: 4 months, extendable by up to 3 months. The recast directive requires 90 days." },
  fr: { months: 2, label: "2 months", note: "Work authorisation stage: silence after 2 months counts as refusal. Visa processing follows at the consulate." },
  de: null,
  gr: null,
  hu: { days: 90, label: "90 days", note: "Maximum 90 days per the EU Immigration Portal; Act XC of 2023 sets 21 days extendable once by 21 days." },
  ie: null,
  it: { days: 60, label: "60 days", note: "Nulla osta within 60 days of being charged to the Decreto Flussi quota; the permesso di soggiorno then within 90 days." },
  lv: { days: 30, label: "30 days", note: "Immigration Law s. 33: 30 days, or 10 or 5 working days for higher fees." },
  lt: { months: 4, label: "4 months", note: "EU Immigration Portal figure; national sources cite 1 to 3 months after the 2023 amendments. Confirm with the Migration Department." },
  lu: { months: 4, label: "4 months", note: "Legal maximum for the temporary authorisation to stay; typical decisions are faster. The recast directive requires 90 days." },
  mt: { months: 4, label: "4 months", note: "S.L. 217.17 reg. 12: within 4 months of lodging, suspended while documents are missing. The recast directive requires 90 days." },
  nl: { days: 90, label: "90 days", note: "Legal decision period from payment of the fee; extendable by 30 days for complex first applications." },
  pl: { days: 60, label: "60 days", note: "60 days from a complete application (EU Immigration Portal)." },
  pt: { days: 60, label: "60 days", note: "Residence visa stage: 60 days under art. 58 of Lei 23/2007; the residence permit then 90 days extendable by 30." },
  ro: { days: 30, label: "30 days", note: "Single application decided within 30 days of the worker's consular appearance; the permis unic then within 30 days." },
  sk: { days: 60, label: "60 days", note: "Section 33(8) of Act 404/2011: 60 days for the single permit, 30 days for regional shortage occupations, 90 days general." },
  si: null,
  es: { months: 3, label: "3 months", note: "Maximum 3 months; silence counts as refusal. Consular visa then within 1 month." },
  se: { months: 4, label: "4 months", note: "Applicant may request a decision after 4 months; Migrationsverket publishes shorter target times for complete files." },
};

export const noDeadlineNote: Partial<Record<CountryCode, string>> = {
  cy: "No published decision period was found for Cyprus. The recast directive requires a decision within 90 days of a complete application.",
  de: "No single statutory period for the standard route. In the fast-track procedure the BA responds within 1 week and the embassy decides within about 3 weeks of a complete application.",
  gr: "No statutory period was found. The mitos.gov.gr service estimates 50 to 60 days for the employer's approval and 50 to 80 days for the permit.",
  ie: "No statutory period. DETE processes employment permits strictly in date order; file at least 12 weeks before the start date and check the published processing dates.",
  si: "No statutory period was found on official pages. The recast directive requires a decision within 90 days of a complete application.",
};

export function addPeriod(from: Date, d: Deadline): Date {
  const out = new Date(from);
  if (d.months) out.setMonth(out.getMonth() + d.months);
  if (d.days) out.setDate(out.getDate() + d.days);
  return out;
}
