import type { Country } from "../types";

export const at: Country =
  {
    code: "at",
    region: "Western Europe",
    singlePermitDirective: true,
    name: "Austria",
    flag: "🇦🇹",
    languages: ["German"],
    permitName: "Red-White-Red Card",
    localName: "Rot-Weiß-Rot – Karte",
    tagline: "A points-based residence and work title for one employer, with the AMS checking the criteria and the residence authority deciding within 8 weeks.",
    overview:
      "The Red-White-Red Card is Austria's main route for non-EU workers taking up employment. It combines a fixed-term settlement right with permission to work for the employer named in the application. Admission is criteria based: the categories are very highly qualified workers, skilled workers in shortage occupations, other key workers, graduates of Austrian universities and regular seasonal workers, each with its own points table or salary requirement. The residence authority forwards every application to the Public Employment Service (AMS), which confirms the points, the pay and, for key workers, the labour market test. After 21 months of qualifying work in the preceding 24 months the holder can move to the Red-White-Red Card plus, which gives free access to the labour market.",
    whoApplies:
      "The worker applies in person at the Austrian representation authority (embassy or consulate) in the country of residence. Alternatively the prospective employer files the application in Austria with the competent residence authority on the worker's behalf. Workers who are already in Austria legally, for example during a visa-free stay, can file in person with the residence authority. An employer's declaration (Arbeitgebererklärung) must accompany every application.",
    authorities: [
      "Residence authority (Niederlassungsbehörde): district administration (Bezirkshauptmannschaft) or city magistrate, MA 35 in Vienna, the Lower Austrian provincial government in Lower Austria and the Styrian provincial government in Graz",
      "Arbeitsmarktservice (AMS), regional office for the employer's seat: points check, salary check and labour market test",
      "Austrian representation authorities abroad (BMEIA network): receipt of applications and issue of the D visa",
      "Federal Ministry of the Interior (BMI): forms, employer's declaration and residence law",
    ],
    legalBasis: [
      "Niederlassungs- und Aufenthaltsgesetz (NAG), in particular § 41, and the NAG-Durchführungsverordnung",
      "Ausländerbeschäftigungsgesetz (AuslBG), in particular §§ 12b and 20d, with the annual Fachkräfteverordnung listing shortage occupations",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "The residence authority must decide on a Red-White-Red Card within 8 weeks, which is shorter than the 90 days the recast directive allows. The general limit for other residence titles under the NAG is 6 months. Official guidance asks applicants to file at least 8 weeks before the intended start date, and the period only runs once the file is complete.",
    validity:
      "Issued for 24 months and tied to the employer named in the application. Renewal is applied for in Austria before expiry, at the earliest 3 months beforehand. After at least 21 months of qualifying employment in the preceding 24 months the holder can apply for the Red-White-Red Card plus with unrestricted labour market access.",
    labourMarketTest:
      "Depends on the category. For other key workers and for the EU Blue Card the AMS checks whether it can refer an equally qualified jobseeker registered with it to the employer (Arbeitsmarktprüfung); an unjustified refusal of such a candidate leads to rejection. Skilled workers in shortage occupations, very highly qualified workers and Austrian graduates are admitted on points and pay without a labour market test. Minimum salaries for key workers and Blue Card holders are set each year and must be paid in addition to collective agreement minimums.",
    steps: [
      {
        title: "Choose the category and sign the employer's declaration",
        actor: "Employer",
        detail:
          "The employer confirms which Red-White-Red Card category fits the worker (shortage occupation, other key worker, graduate, very highly qualified) and completes the BMI employer's declaration stating the job, the gross salary and the working conditions.",
      },
      {
        title: "File the application",
        actor: "Both",
        detail:
          "The worker files in person at the Austrian representation abroad, or the employer files with the residence authority in Austria. The file includes the employer's declaration, passport, photo, proof of qualifications, experience and language skills, and the application fee.",
      },
      {
        title: "Forwarding to the AMS",
        actor: "Authority",
        detail:
          "The representation or residence authority forwards the application to the AMS regional office competent for the employer's seat.",
      },
      {
        title: "AMS assessment",
        actor: "Authority",
        detail:
          "The AMS checks the points, whether the pay meets the statutory minimum for the category and, for key workers, whether an equally qualified registered jobseeker is available. It reports the result to the residence authority.",
      },
      {
        title: "Decision and visa instruction",
        actor: "Authority",
        detail:
          "The residence authority checks the general requirements (health insurance, no entry ban, no risk to public order) and decides within 8 weeks. Where a visa is needed it instructs the representation authority to issue a D visa for entry and collection of the card.",
      },
      {
        title: "D visa and entry",
        actor: "Employee",
        detail:
          "The worker applies for the D visa within 3 months of being notified and travels to Austria. Visa-exempt nationals enter directly.",
      },
      {
        title: "Collect the card and start work",
        actor: "Employee",
        detail:
          "The card is collected in person at the residence authority, by appointment, within 3 months of entry. Work may start once the card has been received.",
      },
    ],
    employerDocs: [
      { label: "Employer's declaration (Arbeitgebererklärung) on the BMI form confirming the employment conditions" },
      { label: "Binding job offer or signed employment contract stating the gross monthly salary including special payments" },
      { label: "Evidence that the pay meets the statutory minimum for the category, or the collective agreement minimum plus customary overpay for shortage occupations" },
      { label: "Details of the post for the AMS labour market test where the category requires one" },
      { label: "Confirmation that English is the predominant company language, where bonus points are claimed" },
    ],
    employeeDocs: [
      { label: "Valid travel document" },
      { label: "Passport photograph 45 x 35 mm, no older than 6 months" },
      { label: "Proof of health insurance covering all risks in Austria" },
      { label: "Criminal record extract from the country of origin or long-term residence, ideally no older than 3 months", note: "Requested by most authorities on a case-by-case basis" },
      { label: "Qualification evidence: vocational certificate, university entrance certificate or degree with proof of the institution's status" },
      { label: "Work experience: service certificates and employer confirmations" },
      { label: "Language certificates at the claimed CEFR level, no older than 5 years" },
      { label: "Certified translations of documents not in German or English, with apostille or legalisation where required" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card (Blaue Karte EU)", summary: "Degree of at least 3 years or, for ICT professionals, 3 years of relevant experience, a job offer of at least 6 months and a salary above the yearly threshold based on the average full-time gross annual income. AMS labour market test, no points system, valid 24 months." },
      { name: "Red-White-Red Card for very highly qualified workers", summary: "At least 70 of 100 points. A 6-month job seeker visa allows entry to look for work; once a matching job is found the card is applied for without a labour market test." },
      { name: "Red-White-Red Card for skilled workers in shortage occupations", summary: "Vocational training in an occupation on the annual Fachkräfteverordnung list, at least 55 points and pay at the collective agreement minimum. No labour market test." },
      { name: "Temporary residence permit ICT (Aufenthaltsbewilligung ICT)", summary: "Managers, specialists and trainees transferred within a group to an Austrian entity. Must always be applied for from abroad." },
    ],
    watchOuts: [
      "The 8-week decision period and the 45-day period for a provisional start after a change of employer only run while the file is complete. Missing certificates, translations or the employer's declaration suspend them.",
      "The card is tied to one employer. A new employer means a change-of-purpose application, and the worker may only start provisionally after 45 days (30 days for Blue Card holders).",
      "Filing in Austria during a visa-free stay does not automatically extend the right to stay. Official pages describe the conditions under which a timely application allows the worker to await the decision in Austria, so confirm this with the residence authority before the visa-free period ends.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Austria", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-austria_en" },
      { label: "Migration.gv.at: Red-White-Red Card for other key workers", url: "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/other-key-workers/" },
      { label: "Oesterreich.gv.at: Red-White-Red Card for other key workers, first application", url: "https://www.oesterreich.gv.at/de/themen/menschen_aus_anderen_staaten/aufenthalt/3/2/2/Seite.120226" },
      { label: "BMI: residence titles, procedure and decision periods", url: "https://www.bmi.gv.at/312_en/08/start.html" },
    ],
  };
