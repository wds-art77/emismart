import type { Country } from "../types";

export const ee: Country =
  {
    code: "ee",
    region: "Baltics",
    singlePermitDirective: true,
    name: "Estonia",
    flag: "🇪🇪",
    languages: ["Estonian"],
    permitName: "Temporary residence permit for employment",
    localName: "Tähtajaline elamisluba töötamiseks",
    tagline: "Permission from the Unemployment Insurance Fund and an employer's invitation first, then one permit from the Police and Border Guard Board within an annual quota.",
    overview:
      "Estonia issues a single temporary residence permit for employment through the Police and Border Guard Board (PPA). The employer prepares the ground: unless the job falls in an exempt category it obtains permission from the Estonian Unemployment Insurance Fund (Töötukassa) to fill the post with a foreign national, and it files an employer's invitation with the PPA. The worker then applies for the permit. Pay must reach at least the Estonian average gross salary last published by Statistics Estonia, and most work-based permits count towards an annual immigration quota of 0.1 per cent of the permanent population. Work of up to one year can instead be registered as short-term employment without a residence permit.",
    whoFilesShort: "Worker, with employer invitation",
    whoApplies:
      "The worker applies in person, at an Estonian embassy or consulate or, if already legally in Estonia, at a PPA service office by appointment. The employer applies for the Töötukassa permission and submits the employer's invitation to the PPA by e-mail or post.",
    authorities: [
      "Police and Border Guard Board (Politsei- ja Piirivalveamet, PPA): decision on the residence permit and issue of the residence card",
      "Estonian Unemployment Insurance Fund (Eesti Töötukassa): permission to fill the position with a foreign national",
      "Estonian embassies and consulates: receipt of applications, biometrics and D visas",
      "Ministry of the Interior: immigration policy and the annual quota set by government regulation",
    ],
    legalBasis: [
      "Välismaalaste seadus (Aliens Act, translated as the Foreign Nationals Act), in particular sections 176 to 181 on the residence permit for employment and sections 113 to 115 on the immigration quota",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Government of the Republic regulation establishing the annual immigration quota",
    ],
    decisionPeriod:
      "The PPA states that a decision is made within 90 days of accepting a complete application, with the residence card issued within 30 days of the decision. This matches the 90-day deadline of the recast directive; older guidance cited two months. Time for delivery of the card to a foreign mission is added.",
    validity:
      "Up to five years for the first permit, depending on the employment, and extensions of up to ten years at a time according to the PPA. The residence card is collected at the mission or service office named in the application.",
    labourMarketTest:
      "Yes, in the form of the Töötukassa permission. The Fund permits the hiring only if the post cannot be filled by an Estonian citizen, an EU citizen or a foreign national already resident in Estonia with the required qualifications, taking account of its labour market data. It decides within seven working days, the permission is valid for six months and is tied to the position rather than the person. The Aliens Act exempts categories such as teachers, researchers, start-up employees, top specialists paid at least 1.5 times the average salary and ICT staff from the permission and, in part, from the salary criterion and the quota. A separate salary criterion applies regardless of working time.",
    steps: [
      {
        title: "Check exemptions, salary criterion and quota",
        actor: "Employer",
        detail:
          "Confirm whether the job falls in a category exempt from the Töötukassa permission, the salary criterion or the immigration quota, and that the offered pay reaches the Estonian average gross salary last published by Statistics Estonia.",
      },
      {
        title: "Obtain the Töötukassa permission",
        actor: "Employer",
        detail:
          "Apply to the regional Töötukassa office for the company's registered address, by digitally signed e-mail or on paper. The Fund decides within seven working days and the permission is valid for six months.",
      },
      {
        title: "Submit the employer's invitation to the PPA",
        actor: "Employer",
        detail:
          "The employer or its authorised representative sends the signed invitation, with the Töötukassa permission, to the PPA by e-mail or post before or when the worker applies.",
      },
      {
        title: "Lodge the application with biometrics",
        actor: "Employee",
        detail:
          "Book an appointment and apply in person at an Estonian embassy or consulate, or at a PPA service office if legally in Estonia. Fingerprints are taken unless given within the last six years. Pay the state fee.",
      },
      {
        title: "Examination and decision",
        actor: "Authority",
        detail:
          "The PPA checks the conditions, the employer's reliability and the quota, may request additional evidence, and decides within 90 days of accepting a complete application. The residence card follows within 30 days.",
      },
      {
        title: "Arrival, card collection and registration of residence",
        actor: "Employee",
        detail:
          "Collect the residence card at the mission or service office named in the application. Register the place of residence in the Population Register within one month of arrival. The employer must report changes in the employment conditions and the end of the contract.",
      },
    ],
    employerDocs: [
      { label: "Permission of the Estonian Unemployment Insurance Fund to fill the position with a foreign national", note: "Unless the job is exempt under section 181 of the Aliens Act." },
      { label: "Employer's invitation, signed by the employer or its authorised representative and sent to the PPA" },
      { label: "Employment contract or binding offer showing pay at least equal to the Estonian average gross salary" },
      { label: "Evidence that the worker meets the qualification and skills requirements of the position" },
      { label: "Registration of the employer in the Estonian commercial register and absence of tax arrears" },
    ],
    employeeDocs: [
      { label: "Application form for a temporary residence permit and the form on close relatives and family members" },
      { label: "Valid identity document (passport)" },
      { label: "One digital colour photograph" },
      { label: "Documents showing legal income for the six months before the application" },
      { label: "Criminal record certificate from every country of residence of at least three months in the last three years, issued within the last six months", note: "Required from age 14." },
      { label: "Proof of payment of the state fee" },
      { label: "Health insurance contract where the Aliens Act requires it for the permit holder" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "Higher-education degree or five years of experience, a contract of at least one year and pay of 1.5 times the average salary (1.24 times for listed professions). Töötukassa permission generally still needed, with exemptions." },
      { name: "Top specialist", summary: "Pay of at least 1.5 times the Estonian average gross salary; exempt from the Töötukassa permission and from the immigration quota." },
      { name: "Start-up employee", summary: "Employment with a start-up recognised by the expert committee; exempt from the salary criterion, the Töötukassa permission and the quota." },
      { name: "Registration of short-term employment", summary: "The employer registers work of up to 365 days within 455 days with the PPA; no residence permit, no quota and no Töötukassa permission, but the salary criterion applies." },
    ],
    watchOuts: [
      "The immigration quota of 0.1 per cent of the population is often used up during the year; applications outside the exempt categories are refused once it is full.",
      "The Töötukassa permission expires six months after issue and covers a specific position; a different position or a late application means starting again.",
      "The permit is tied to the employer. Since 22 May 2026 a new employer must register the change of employment with the PPA before the worker starts, and unemployment is tolerated only for three months (six months after two years on the permit).",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Estonia", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-estonia_en" },
      { label: "Police and Border Guard Board: residence permit for employment", url: "https://www.politsei.ee/en/instructions/residence-permit-for-employment" },
      { label: "Eesti Töötukassa: permission to hire a foreign national", url: "https://www.tootukassa.ee/en/services/employers/permission-hire-alien" },
      { label: "Riigi Teataja: Foreign Nationals Act (Välismaalaste seadus), English translation", url: "https://www.riigiteataja.ee/api/v1/en/akt/501092026001/blob-html" },
    ],
  };
