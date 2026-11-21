import type { CountryCode } from "./countries";

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

export function evaluate(a: Answers): Outcome {
  if (a.nationality === "eu") {
    return {
      headline: "No permit needed",
      route: "Free movement of EU, EEA and Swiss citizens",
      confidence: "high",
      summary:
        "Citizens of the EU, Iceland, Liechtenstein, Norway and Switzerland do not need a single permit or work authorisation. They register with the local authority after arrival, usually within 3 months.",
      nextSteps: [
        "Sign the employment contract.",
        "Register your residence with the municipality after arrival.",
        "Arrange social security and health insurance registration with your employer.",
      ],
      alternatives: ["Family members who are third-country nationals apply for a residence card as family members of an EU citizen."],
      reviewRecommended: false,
    };
  }

  if (a.offer === "no") {
    if (a.country === "de") {
      return {
        headline: "Consider the Opportunity Card",
        route: "Chancenkarte (§ 20a AufenthG)",
        confidence: "medium",
        summary:
          "Without a job offer, the single permit route is not open. Germany offers a points-based Opportunity Card to come and look for work for up to 1 year, with part-time work allowed in the meantime.",
        nextSteps: [
          "Check your points: qualification, German or English language level, age, professional experience, ties to Germany.",
          "Prepare proof of funds or a part-time job offer.",
          "Once you have a qualified job offer, switch to the residence permit for qualified employment.",
        ],
        alternatives: ["Job-seeker visa for recognised skilled workers (§ 20 AufenthG)."],
        reviewRecommended: false,
      };
    }
    return {
      headline: "A job offer comes first",
      route: "Single permit requires a concrete employer",
      confidence: "high",
      summary:
        "In Belgium, the Netherlands, France and Luxembourg the single permit is tied to a specific employer and contract. The application cannot start before an employer commits.",
      nextSteps: [
        "Secure a written job offer or signed contract.",
        "Ask the employer whether the role is on a shortage list, which can remove the labour market test.",
        "Return to this check once the offer is in hand.",
      ],
      alternatives: [
        "France: passeport talent for founders, investors and highly qualified profiles.",
        "Netherlands: orientation year for recent graduates of top universities (zoekjaar).",
        "Germany: Opportunity Card to search for work on site.",
      ],
      reviewRecommended: false,
    };
  }

  const highDegree = a.qualification === "degree";
  const highSalary = a.salary === "high";

  if (highDegree && highSalary) {
    const map: Record<string, string> = {
      be: "EU Blue Card, filed through the Belgian single permit channel by your employer.",
      nl: "Highly skilled migrant permit via a recognised sponsor, or the EU Blue Card. Both avoid the labour market test and are faster than the GVVA.",
      fr: "Passeport talent (carte bleue européenne or salarié qualifié). Multi-year permit, no labour market test, filed without the standard work authorisation.",
      de: "EU Blue Card (§ 18g AufenthG). Fastest path to settlement; the fast-track procedure can be combined with it.",
      lu: "EU Blue Card issued by the Immigration Directorate. The ADEM vacancy declaration is still required, the market test is not.",
    };
    return {
      headline: "Likely eligible for a highly qualified route",
      route: map[a.country] ?? "EU Blue Card",
      confidence: "medium",
      summary:
        "A university degree combined with a salary above the national highly qualified threshold usually opens a route that is faster than the standard single permit and carries better family and mobility rights.",
      nextSteps: [
        "Confirm the current salary threshold for the country and year with the official source.",
        "Have the degree legalised or apostilled and translated where required.",
        "Ask the employer to prepare the contract with a duration of at least 6 to 12 months as required for Blue Card purposes.",
      ],
      alternatives: ["Standard single permit if the threshold is not met in a given year."],
      reviewRecommended: false,
    };
  }

  if (a.qualification === "none" && a.country === "de") {
    return {
      headline: "Difficult without a recognised qualification",
      route: "Germany requires a qualification or substantial experience",
      confidence: "medium",
      summary:
        "German skilled-worker permits presuppose a recognised vocational or academic qualification, or at least 2 years of experience with a state-recognised qualification, or IT experience. Unskilled employment is only open through limited sector schemes.",
      nextSteps: [
        "Check whether your occupation falls under a sector agreement (for example Western Balkans regulation or seasonal work).",
        "Consider a recognition partnership to complete recognition in Germany while working.",
        "Discuss vocational training (Ausbildung) as an alternative route.",
      ],
      alternatives: ["Recognition partnership (§ 16d AufenthG).", "Vocational training visa (§ 16a AufenthG)."],
      reviewRecommended: true,
    };
  }

  const lmt =
    a.shortage === "yes"
      ? "Your occupation appears to be on a shortage list, which usually removes the labour market test and shortens the file."
      : a.shortage === "no"
        ? "Expect a labour market test: the employer must show that the position was advertised and that no suitable candidate was found locally or in the EU."
        : "Whether a labour market test applies depends on the occupation and the shortage lists of the country or region. Emismart will flag this when the case file is opened.";

  const inside =
    a.location === "inside"
      ? " You indicated you are already in the country. Several countries allow in-country filing for legally present applicants, especially since the recast directive; others require filing from abroad. This point needs confirmation for your status."
      : "";

  const routeName: Record<string, string> = {
    be: "Belgian single permit (permis unique), filed by the employer with the competent Region",
    nl: "Dutch single permit (GVVA), filed by the employer with the IND",
    fr: "French work authorisation requested by the employer on ANEF, then VLS-TS salarié or travailleur temporaire",
    de: "German residence permit for qualified employment (§ 18a or § 18b AufenthG), ideally with the fast-track procedure",
    lu: "Luxembourg temporary authorisation to stay as a salaried worker, after the ADEM vacancy declaration",
  };

  return {
    headline: "Likely eligible for the single permit route",
    route: routeName[a.country] ?? "Single permit",
    confidence: a.shortage === "unknown" || a.salary === "unknown" ? "low" : "medium",
    summary: `${lmt}${inside} ${
      a.contract === "cdd"
        ? "A fixed-term contract is acceptable; the permit will match the contract duration."
        : "An open-ended contract supports a longer first permit and simpler renewals."
    }`,
    nextSteps: [
      "Open a case file so employer and employee can upload their parts of the dossier.",
      "Generate the country checklist and start legalisation and translation early; these are the slowest documents.",
      "Confirm the salary against the applicable minimum and collective agreement.",
    ],
    alternatives: ["EU Blue Card or national highly qualified routes if the salary threshold is met."],
    reviewRecommended: a.location === "inside" || a.qualification === "experience",
  };
}
