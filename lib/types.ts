// Emismart shared types for the country data layer.

export type CountryCode =
  | "at" | "be" | "bg" | "hr" | "cy" | "cz" | "dk" | "ee" | "fi" | "fr" | "de" | "gr" | "hu" | "ie" | "it" | "lv" | "lt" | "lu" | "mt" | "nl" | "pl" | "pt" | "ro" | "sk" | "si" | "es" | "se";

export type Region =
  | "Western Europe"
  | "Nordics"
  | "Southern Europe"
  | "Central and Eastern Europe"
  | "Baltics";

export type Step = {
  title: string;
  actor: "Employer" | "Employee" | "Authority" | "Both";
  detail: string;
};

export type Doc = {
  label: string;
  note?: string;
};

export type Route = {
  name: string;
  summary: string;
};

export type Country = {
  code: CountryCode;
  name: string;
  region: Region;
  /** false for Denmark and Ireland, which are not bound by Directive 2011/98/EU */
  singlePermitDirective: boolean;
  flag: string;
  languages: string[];
  permitName: string;
  localName: string;
  tagline: string;
  overview: string;
  whoApplies: string;
  /** short label for tables, e.g. "Employer" */
  whoFilesShort: string;
  authorities: string[];
  legalBasis: string[];
  decisionPeriod: string;
  validity: string;
  labourMarketTest: string;
  steps: Step[];
  employerDocs: Doc[];
  employeeDocs: Doc[];
  alternativeRoutes: Route[];
  watchOuts: string[];
  sources: { label: string; url: string }[];
};
