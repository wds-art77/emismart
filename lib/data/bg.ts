import type { Country } from "../types";

export const bg: Country =
  {
    code: "bg",
    region: "Central and Eastern Europe",
    singlePermitDirective: true,
    name: "Bulgaria",
    flag: "🇧🇬",
    languages: ["Bulgarian"],
    permitName: "Single residence and work permit (ERPR)",
    localName: "Единно разрешение за пребиваване и работа (ЕРПР)",
    tagline: "One file lodged by the employer with the Migration Directorate, an Employment Agency opinion inside it, a D visa, then the card after a joint appearance within 14 days of entry.",
    overview:
      "Bulgaria issues a single residence and work permit under Article 24i of the Foreigners in the Republic of Bulgaria Act for third-country nationals hired under a Bulgarian employment contract by a local employer. The permit contains the positive written opinion of the executive director of the Employment Agency on access to the labour market, so there is no separate work permit document. The employer lodges the file with the Migration Directorate of the Ministry of Interior before the worker arrives. The Migration Directorate forwards it to the Employment Agency and the State Agency for National Security, notifies the employer when access is granted, and the worker then obtains a type D visa. The card is issued after the worker and employer appear together at the Migration Directorate shortly after entry. A bill approved by the Council of Ministers in July 2026 to transpose the recast Directive (EU) 2024/1233 was before the National Assembly at the time of writing; check the official pages for its adoption.",
    whoApplies:
      "The employer, or a person it authorises, submits the application to the Migration Directorate in Sofia or to the Migration unit of a regional directorate of the Ministry of Interior. A worker who already holds extended residence in Bulgaria may file in person, with the employer co-signing, and in that case must file at least 2 months before the current residence expires. The worker applies for the type D visa at a Bulgarian embassy or consulate.",
    authorities: [
      "Дирекция Миграция, Министерство на вътрешните работи (Migration Directorate, Ministry of Interior): receives the file and issues or refuses the permit",
      "Агенция по заетостта (Employment Agency): written opinion of the executive director on access to the labour market",
      "Държавна агенция Национална сигурност (State Agency for National Security): security opinion on each application",
      "Ministry of Foreign Affairs, Consular Relations Directorate and Bulgarian embassies: type D visa",
      "Изпълнителна агенция Главна инспекция по труда (General Labour Inspectorate): notification within 7 days of the start of work and enforcement",
    ],
    legalBasis: [
      "Закон за чужденците в Република България (Foreigners in the Republic of Bulgaria Act), Article 24i and the implementing regulation (ППЗЧРБ)",
      "Закон за трудовата миграция и трудовата мобилност (Labour Migration and Labour Mobility Act), Chapter Two, and its implementing rules (ППЗТМТМ)",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "The Foreigners Act caps the whole procedure at 2 months, extendable by a further 2 months in cases of factual and legal complexity. Inside that period the Migration Directorate forwards the file to the Employment Agency within 14 days of filing, the Employment Agency gives its opinion within 15 days of receiving the file, the Directorate notifies the employer within 3 days of positive opinions, and after the worker's appearance following entry the Directorate issues or refuses the card within 3 days. The recast directive requires a decision within 90 days of a complete application; the pending transposition bill is reported to shorten the national period, so confirm the current rule on the official page.",
    validity:
      "Issued for 3 years, or for the duration of the employment contract where the contract is shorter. Renewal is requested from the Migration Directorate at least 2 months before expiry. The permit is tied to the employer, position and place of work stated in the file.",
    labourMarketTest:
      "Yes. The employer must advertise the vacancy in national and local media and with the local labour office for a period set in the implementing rules (at least 15 days) and attach a written justification explaining why no Bulgarian, EU, EEA or Swiss citizen or equivalent resident was hired. In addition, third-country nationals employed by the employer in the previous 12 months may not exceed 20 per cent of its average headcount (35 per cent for small and medium enterprises), and pay and conditions must not be less favourable than for Bulgarian citizens. Exemptions apply to employment under international treaties, guest lecturers and teachers, performing artists confirmed by the Ministry of Culture and sportspeople confirmed by the national federations. The Minister of Labour may authorise access above the quota in justified cases.",
    steps: [
      {
        title: "Advertise the vacancy and prepare the justification",
        actor: "Employer",
        detail:
          "The employer publishes the vacancy in local and national media and online, including with the local labour office, for the period set in the implementing rules, then writes a justification of why a third-country national is needed, attaching copies of the advertisements. The employer also checks that the 20 per cent (or 35 per cent) headcount limit is respected.",
      },
      {
        title: "Sign the fixed-term contract and lodge the file at the Migration Directorate",
        actor: "Employer",
        detail:
          "The employer signs a fixed-term employment contract with an NKPD occupation code that takes effect on the date the worker receives the residence document, then files the application form (Annex 3a) with the worker's and employer's documents at the Migration Directorate or a regional Migration unit. If documents are missing the Directorate sets a 7-day period to complete the file, after which the procedure is terminated.",
      },
      {
        title: "Employment Agency and security opinions",
        actor: "Authority",
        detail:
          "Within 14 days of filing the Migration Directorate sends the file electronically to the Employment Agency and to the State Agency for National Security. The Employment Agency collects tax and labour inspection information on the employer and sends the written opinion of its executive director within 15 days of receiving the file; the security agency has 14 days.",
      },
      {
        title: "Notification of labour market access",
        actor: "Authority",
        detail:
          "Within 3 days of receiving positive opinions the Migration Directorate notifies the employer electronically that the worker may be given access to the labour market, with a copy to the Consular Relations Directorate of the Ministry of Foreign Affairs. The employer informs the worker.",
      },
      {
        title: "Type D visa application",
        actor: "Employee",
        detail:
          "Within 20 days of the notification the worker must apply for a long-stay type D visa at the Bulgarian embassy or consulate, presenting proof of accommodation and, for foreign higher education, the recognition certificate of the National Centre for Information and Documentation where relevant. A refusal is reported back to the Migration Directorate.",
      },
      {
        title: "Joint appearance within 14 days of entry and issue of the card",
        actor: "Both",
        detail:
          "Within 14 days of entering Bulgaria on the D visa, the employer or its representative and the worker appear together at the Migration Directorate or regional unit with a copy of the visa page and health insurance valid for at least 3 months. The Directorate issues or refuses the permit within 3 days and the residence card marked single residence and work permit follows. Missing the 14-day deadline terminates the procedure.",
      },
      {
        title: "Post-arrival obligations",
        actor: "Employer",
        detail:
          "The worker registers the address within the legal period. The employer notifies the General Labour Inspectorate within 7 days of the actual start of work and must report to the Migration Directorate within 3 days any change affecting the admission criteria or the termination of employment, which ends the right of residence.",
      },
    ],
    employerDocs: [
      { label: "Application form (Annex 3a to the implementing regulation of the Foreigners Act) signed by the employer, stating an e-mail address" },
      { label: "Written justification of the need to hire a third-country national, with copies of vacancy advertisements in local and national media and online" },
      { label: "Declaration listing third-country nationals already employed, with names, dates of birth, citizenship and residence grounds" },
      { label: "Declaration of the average monthly headcount of Bulgarian, EU, EEA and Swiss employees over the previous 12 months" },
      { label: "Declaration that pay and working conditions are not less favourable than for Bulgarian citizens (Employment Agency template), first application only" },
      { label: "Certified copy of the signed fixed-term employment contract with NKPD code, taking effect on issue of the residence document, plus the job description where it forms part of the contract" },
    ],
    employeeDocs: [
      { label: "Copy of the passport pages with photograph and personal data" },
      { label: "Criminal record certificate from the country of nationality or habitual residence, first application only" },
      { label: "Proof of secured accommodation in Bulgaria" },
      { label: "Documents on education, speciality, qualification and professional experience, legalised and with a certified Bulgarian translation, matching the requirements of the advertised post" },
      { label: "Certificate of the National Centre for Information and Documentation (NACID) recognising foreign higher education, where applicable" },
      { label: "Proof of the right to practise a regulated profession, or the licence or permit required for the occupation, where applicable" },
      { label: "Health insurance valid in Bulgaria for at least 3 months, until the permit is issued, where the worker is not covered by Bulgarian health insurance" },
      { label: "Copy of the passport page with the type D visa, presented at the joint appearance after entry" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card (Синя карта на ЕС)", summary: "Highly qualified workers with a higher education qualification of at least 3 years, or qualifying professional experience, and a gross salary above the threshold set by law as a multiple of the national average wage. The Employment Agency gives its opinion within 10 days, the whole procedure is capped at 3 months and the card is issued for up to 5 years. No labour market test or headcount quota." },
      { name: "Intra-corporate transfer permit", summary: "Managers, specialists and trainee employees transferred within a group of undertakings, under Article 33p of the Foreigners Act." },
      { name: "Seasonal worker permit", summary: "Short seasonal work up to 90 days on a registration, or a seasonal worker permit for longer periods, under Article 24k of the Foreigners Act." },
      { name: "EU Blue Card holder from another Member State", summary: "After 12 months in the first Member State (6 months in a second), the holder may move to Bulgaria and apply within one month of entry, with a decision within 30 days." },
    ],
    watchOuts: [
      "The 14-day joint appearance after entry is strict: if the employer and worker do not present the visa copy and health insurance in time, the Migration Directorate terminates the procedure and the file starts again.",
      "The 20 per cent headcount ceiling (35 per cent for SMEs) is checked over the previous 12 months and blocks approval for employers with many third-country staff, unless an exemption or a ministerial decision under the Labour Migration Act applies.",
      "Foreign diplomas and criminal records must be legalised and translated by a notary or the consular directorate, and foreign higher education needs NACID recognition; incomplete files get only 7 days to be cured.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Bulgaria", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-bulgaria_en" },
      { label: "Employment Agency: procedure for issuing the single residence and work permit", url: "https://www.az.government.bg/pages/uprajniavane-na-trudova-zaetost-erpr/" },
      { label: "Migration Directorate: residence and work permits (procedures)", url: "https://www.mvr.bg/migration/административни-услуги/административни-услуги-за-граждани/rpr" },
      { label: "EU Immigration Portal: highly qualified worker, Bulgaria", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/highly-qualified-worker-bulgaria_en" },
    ],
  };
