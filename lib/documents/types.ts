// Canonical document types with the metadata the validation rules need.
// Generated document requests are classified by their label (see classify()).

export type DocType =
  | "passport"
  | "criminal_record"
  | "birth_certificate"
  | "marriage_certificate"
  | "diploma"
  | "employment_contract"
  | "medical_certificate"
  | "photo"
  | "company_registration"
  | "salary_proof"
  | "insurance"
  | "application_form"
  | "other";

export type DocMeta = {
  issuingCountry?: string; // ISO alpha-2
  issueDate?: string; // ISO date
  expiryDate?: string; // ISO date
  language?: string; // ISO 639-1
  legalised?: "none" | "apostille" | "legalisation" | "not_required";
  translated?: "none" | "certified" | "sworn";
  documentNumber?: string;
};

export const docTypeFields: Record<DocType, (keyof DocMeta)[]> = {
  passport: ["issuingCountry", "documentNumber", "issueDate", "expiryDate"],
  criminal_record: ["issuingCountry", "issueDate", "language", "legalised", "translated"],
  birth_certificate: ["issuingCountry", "issueDate", "language", "legalised", "translated"],
  marriage_certificate: ["issuingCountry", "issueDate", "language", "legalised", "translated"],
  diploma: ["issuingCountry", "issueDate", "language", "legalised", "translated"],
  employment_contract: ["issueDate", "language"],
  medical_certificate: ["issuingCountry", "issueDate", "language", "translated"],
  photo: [],
  company_registration: ["issueDate"],
  salary_proof: ["issueDate"],
  insurance: ["issueDate", "expiryDate"],
  application_form: [],
  other: ["issuingCountry", "issueDate", "language"],
};

const patterns: [RegExp, DocType][] = [
  [/passport/i, "passport"],
  [/criminal|police|good conduct|casier|strafregister|führungszeugnis/i, "criminal_record"],
  [/birth/i, "birth_certificate"],
  [/marriage|civil status/i, "marriage_certificate"],
  [/diploma|degree|qualification|recognition|anabin|zab/i, "diploma"],
  [/contract|offer of employment|promise of employment|erklärung zum beschäftigungsverhältnis/i, "employment_contract"],
  [/medical|health certificate|tb test/i, "medical_certificate"],
  [/photograph|photo/i, "photo"],
  [/registration|kbo|bce|kbis|rcs|kvk|chamber of commerce|extract from the register/i, "company_registration"],
  [/salary|threshold|payslip|remuneration/i, "salary_proof"],
  [/insurance/i, "insurance"],
  [/application form|form\b/i, "application_form"],
];

export function classify(label: string): DocType {
  for (const [re, t] of patterns) if (re.test(label)) return t;
  return "other";
}

/** Public documents normally needing apostille or legalisation when issued abroad. */
export const legalisationSensitive: DocType[] = ["criminal_record", "birth_certificate", "marriage_certificate", "diploma"];
