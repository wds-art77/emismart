import type { CountryCode } from "./types";

// Registry of national application forms that can be auto-filled.
// A mapping names the official PDF form, where its template is stored (uploaded once by an administrator
// to the document bucket under forms/<country>/<id>.pdf) and how case data maps onto its field names.
// Until a template is registered for a country, the application dossier sheet is generated instead,
// laid out in the sections of the national form so that the data can be transferred in minutes.

export type CaseFormData = {
  reference: string;
  employeeName: string;
  nationality: string;
  jobTitle: string;
  startDate: string;
  employerName: string;
  country: string;
  filedOn: string;
  decisionDue: string;
};

export type FormMapping = {
  id: string;
  country: CountryCode;
  name: string;
  authority: string;
  templateKey: string; // storage key of the official PDF
  fields: Partial<Record<keyof CaseFormData, string>>; // case field -> PDF field name
  sections: { title: string; fields: (keyof CaseFormData)[] }[]; // for the dossier sheet
};

export const formMappings: FormMapping[] = [
  {
    id: "de-beschaeftigungsverhaeltnis",
    country: "de",
    name: "Erklärung zum Beschäftigungsverhältnis",
    authority: "Bundesagentur für Arbeit",
    templateKey: "forms/de/erklaerung-zum-beschaeftigungsverhaeltnis.pdf",
    fields: {}, // field names are filled in once the official PDF template is uploaded and inspected
    sections: [
      { title: "Arbeitnehmer", fields: ["employeeName", "nationality"] },
      { title: "Arbeitgeber", fields: ["employerName"] },
      { title: "Beschäftigung", fields: ["jobTitle", "startDate"] },
    ],
  },
];

export function sectionsFor(country: string): FormMapping["sections"] {
  const m = formMappings.find((f) => f.country === country);
  return (
    m?.sections ?? [
      { title: "Applicant", fields: ["employeeName", "nationality"] },
      { title: "Employer", fields: ["employerName"] },
      { title: "Employment", fields: ["jobTitle", "startDate"] },
      { title: "Procedure", fields: ["country", "filedOn", "decisionDue", "reference"] },
    ]
  );
}
