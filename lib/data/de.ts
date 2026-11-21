import type { Country } from "../types";

export const de: Country =
  {
    code: "de",
    region: "Western Europe",
    singlePermitDirective: true,
    name: "Germany",
    flag: "🇩🇪",
    languages: ["German"],
    permitName: "Residence permit for qualified employment",
    localName: "Aufenthaltserlaubnis zur Beschäftigung (§§ 18a, 18b AufenthG)",
    tagline: "The residence permit is the single permit. Employers can accelerate it through the fast-track procedure.",
    overview:
      "Germany does not issue a separate work permit. The residence title itself authorises employment, with the Federal Employment Agency (BA) giving internal approval where required. Since the Skilled Immigration Act reforms of 2023 and 2024, skilled workers with a recognised vocational or academic qualification and a concrete job offer are entitled to a permit. Employers can use the fast-track procedure under § 81a AufenthG to shorten each stage.",
    whoApplies:
      "The worker applies for the visa at the German embassy or consulate and later for the residence permit at the local foreigners authority (Ausländerbehörde). In the fast-track procedure the employer initiates the file with the Ausländerbehörde on the worker's behalf.",
    authorities: [
      "German embassies and consulates: national visa (D visa)",
      "Ausländerbehörde: residence permit and fast-track pre-approval",
      "Bundesagentur für Arbeit (BA), ZAV: approval of employment conditions",
      "Recognition bodies: equivalence of foreign qualifications (Anerkennung)",
    ],
    legalBasis: [
      "Aufenthaltsgesetz (AufenthG), in particular §§ 18, 18a, 18b, 18g, 19c, 20a and 81a",
      "Beschäftigungsverordnung (BeschV)",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233; Directive (EU) 2021/1883 for the EU Blue Card",
    ],
    decisionPeriod:
      "No single statutory deadline for the standard route; visa processing varies by embassy. In the fast-track procedure the BA must respond within 1 week, the embassy must offer an appointment within 3 weeks and should decide within 3 weeks of the complete application.",
    validity:
      "Issued for the duration of the employment contract, generally up to 4 years. A settlement permit is possible after 3 years of qualified employment (sooner for Blue Card holders).",
    labourMarketTest:
      "No priority check for skilled workers under §§ 18a and 18b. The BA still checks that the working conditions are not less favourable than those of comparable German workers.",
    steps: [
      {
        title: "Recognition of the qualification",
        actor: "Employee",
        detail:
          "Vocational qualifications need a recognition decision; academic degrees are checked in the anabin database or through ZAB. IT specialists with experience and workers with 2 years' experience plus a state-recognised degree may use alternative routes without full recognition.",
      },
      {
        title: "Employer declaration of employment",
        actor: "Employer",
        detail:
          "The employer completes the Erklärung zum Beschäftigungsverhältnis for the BA with salary, hours and job description.",
      },
      {
        title: "Optional: fast-track procedure",
        actor: "Employer",
        detail:
          "The employer signs an agreement with the Ausländerbehörde, which coordinates recognition and BA approval and issues a pre-approval (Vorabzustimmung) for the visa.",
      },
      {
        title: "Visa application at the embassy",
        actor: "Employee",
        detail:
          "The worker books an appointment, submits the contract, qualification documents and, where available, the pre-approval, and receives a national visa for entry.",
      },
      {
        title: "Registration and residence permit",
        actor: "Employee",
        detail:
          "After arrival the worker registers the address (Anmeldung) and applies to the Ausländerbehörde for the electronic residence permit, which states the authorised employment.",
      },
    ],
    employerDocs: [
      { label: "Erklärung zum Beschäftigungsverhältnis (BA form) completed and signed" },
      { label: "Signed employment contract or binding job offer" },
      { label: "Job description showing the role requires the qualification" },
      { label: "Fast-track agreement with the Ausländerbehörde and payment of its fee", note: "Fast-track procedure only." },
      { label: "Proof of salary level for Blue Card or senior-worker thresholds where relevant" },
    ],
    employeeDocs: [
      { label: "Valid passport" },
      { label: "Recognition notice or anabin / ZAB statement of comparability for the qualification" },
      { label: "Diplomas and certificates with certified translations" },
      { label: "Curriculum vitae and proof of professional experience" },
      { label: "Proof of health insurance covering the period from entry" },
      { label: "Biometric photographs and completed national visa form (VIDEX)" },
      { label: "Professional licence where the occupation is regulated", note: "Health professions, teaching, law and others." },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card (§ 18g)", summary: "University graduates with a salary above the Blue Card threshold, reduced threshold for shortage occupations and recent graduates. Settlement after 21 to 27 months." },
      { name: "Opportunity card (Chancenkarte, § 20a)", summary: "Points-based permit to come to Germany for up to 1 year to look for work." },
      { name: "IT specialists (§ 19c (2) with § 6 BeschV)", summary: "Experience-based route for IT professionals without a formal degree." },
      { name: "Experienced professionals (§ 6 BeschV)", summary: "2 years' experience plus a state-recognised qualification, with a salary floor and no German recognition required." },
    ],
    watchOuts: [
      "Qualification recognition is the main cause of delay. Start it before the job offer is signed if possible.",
      "Embassy appointment availability differs greatly by country. The fast-track procedure guarantees a slot within 3 weeks.",
      "Regulated professions require the professional licence before the residence permit can be granted.",
    ],
    sources: [
      { label: "Make it in Germany: the Skilled Immigration Act", url: "https://www.make-it-in-germany.com/en/visa-recognition/skilled-immigration-act" },
      { label: "Make it in Germany: work for qualified professionals", url: "https://www.make-it-in-germany.com/en/visa-residence/types/work-qualified-professionals" },
      { label: "Bundesagentur für Arbeit, ZAV", url: "https://www.arbeitsagentur.de/vor-ort/zav/startseite" },
      { label: "Beschäftigungsverordnung (English)", url: "https://www.gesetze-im-internet.de/englisch_beschv/englisch_beschv.html" },
    ],
  };
