import { countryByCode, type CountryCode } from "./countries";
import type { Country } from "./types";
import { fmt, type Dict } from "./i18n";

export type Answers = {
  nationality: "eu" | "third" | "";
  country: CountryCode | "";
  location: "abroad" | "inside" | "";
  offer: "yes" | "no" | "";
  contract: "cdi" | "cdd" | "";
  qualification: "degree" | "vocational" | "experience" | "none" | "";
  salary: "high" | "standard" | "unknown" | "";
  shortage: "yes" | "no" | "unknown" | "";
};

export const emptyAnswers: Answers = {
  nationality: "",
  country: "",
  location: "",
  offer: "",
  contract: "",
  qualification: "",
  salary: "",
  shortage: "",
};

export type Outcome = {
  headline: string;
  route: string;
  confidence: "high" | "medium" | "low";
  summary: string;
  nextSteps: string[];
  alternatives: string[];
  reviewRecommended: boolean;
};

type O = Dict["eligibility"]["outcomes"];

export function evaluate(a: Answers, o: O, name: (c: { code: string; name: string }) => string = (c) => c.name, localize: (c: Country) => Country = (c) => c): Outcome {
  if (a.nationality === "eu") {
    return { headline: o.eu.headline, route: o.eu.route, confidence: "high", summary: o.eu.summary, nextSteps: [...o.eu.next], alternatives: [...o.eu.alt], reviewRecommended: false };
  }

  if (a.offer === "no") {
    if (a.country === "de") {
      return { headline: o.chancenkarte.headline, route: o.chancenkarte.route, confidence: "medium", summary: o.chancenkarte.summary, nextSteps: [...o.chancenkarte.next], alternatives: [...o.chancenkarte.alt], reviewRecommended: false };
    }
    return { headline: o.offerFirst.headline, route: o.offerFirst.route, confidence: "high", summary: o.offerFirst.summary, nextSteps: [...o.offerFirst.next], alternatives: [...o.offerFirst.alt], reviewRecommended: false };
  }

  const raw = countryByCode(a.country);
  const c = raw ? localize(raw) : undefined;
  const highDegree = a.qualification === "degree";
  const highSalary = a.salary === "high";

  if (highDegree && highSalary) {
    const known = (o.highSkill.routes as Record<string, string>)[a.country];
    const blue = c?.alternativeRoutes.find((r) => /blue card/i.test(r.name));
    const fallback = blue
      ? fmt(o.highSkill.genericRoute, { route: blue.name, country: c ? name(c) : "", summary: blue.summary })
      : fmt(o.highSkill.genericBlue, { country: c ? name(c) : "" });
    return { headline: o.highSkill.headline, route: known ?? fallback, confidence: "medium", summary: o.highSkill.summary, nextSteps: [...o.highSkill.next], alternatives: [...o.highSkill.alt], reviewRecommended: false };
  }

  if (a.qualification === "none" && a.country === "de") {
    return { headline: o.deNoQual.headline, route: o.deNoQual.route, confidence: "medium", summary: o.deNoQual.summary, nextSteps: [...o.deNoQual.next], alternatives: [...o.deNoQual.alt], reviewRecommended: true };
  }

  const lmt = a.shortage === "yes" ? o.single.lmtYes : a.shortage === "no" ? o.single.lmtNo : o.single.lmtUnknown;
  const inside = a.location === "inside" ? ` ${o.single.inside}` : "";
  const contract = a.contract === "cdd" ? o.single.cdd : o.single.cdi;
  const known = (o.single.routes as Record<string, string>)[a.country];
  const generic = c ? fmt(o.single.generic, { permit: c.permitName, country: name(c), local: c.localName, who: c.whoApplies.split(".")[0] }) : "";

  return {
    headline: c && !c.singlePermitDirective ? o.single.headlineNational : o.single.headline,
    route: known ?? generic,
    confidence: a.shortage === "unknown" || a.salary === "unknown" ? "low" : "medium",
    summary: `${lmt}${inside} ${contract}`,
    nextSteps: [...o.single.next],
    alternatives: [...o.single.alt],
    reviewRecommended: a.location === "inside" || a.qualification === "experience",
  };
}
