import type { Country } from "../types";

export const sk: Country =
  {
    code: "sk",
    region: "Central and Eastern Europe",
    singlePermitDirective: true,
    name: "Slovakia",
    flag: "🇸🇰",
    languages: ["Slovak"],
    permitName: "Temporary residence for the purpose of employment (single permit)",
    localName: "Prechodný pobyt na účel zamestnania (jednotné povolenie na pobyt a zamestnanie)",
    tagline: "Vacancy reported to the Labour Office first, then one residence application to the Foreign Police which obtains the vacancy confirmation itself.",
    overview:
      "Slovakia's single permit is temporary residence for the purpose of employment granted by the Foreign Police on the basis of a confirmation from the Labour Office that the vacancy may be filled by a third-country national. The employer reports the vacancy to the Labour Office in advance; the worker files one application for residence, normally at the Slovak embassy abroad, and the Foreign Police requests the vacancy confirmation from the Labour Office through the information system. A separate work permit issued by the Labour Office is used only in specific cases, such as family members in their first year. The permit is tied to the employer, position and place of work.",
    whoApplies:
      "The worker applies in person at the Slovak embassy in the country of nationality or residence, or at the competent Foreign Police department in Slovakia if already staying there legally. The employer does not file the residence application but must report the vacancy to the Labour Office at least 20 working days beforehand and supply the contract or written promise of employment.",
    authorities: [
      "Foreign Police department (Oddelenie cudzineckej polície Policajného zboru) of the Ministry of the Interior: receipt and decision on temporary residence, residence card",
      "Labour Office (Úrad práce, sociálnych vecí a rodiny) and its Central Office: vacancy reports, confirmation on the possibility of filling a vacancy, work permits",
      "Slovak embassy or consulate: receipt of applications filed abroad and national visa where needed",
      "Ministry of Labour, Social Affairs and Family: policy and the list of shortage occupations",
    ],
    legalBasis: [
      "Zákon č. 404/2011 Z. z. o pobyte cudzincov (Act on the Residence of Foreigners), § 23 and § 33",
      "Zákon č. 5/2004 Z. z. o službách zamestnanosti (Act on Employment Services), § 21b and § 22",
      "Zákon č. 145/1995 Z. z. o správnych poplatkoch (Act on Administrative Fees)",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "Under § 33(8) of the Act on the Residence of Foreigners the Foreign Police decides within 90 days as a general rule, within 60 days of a complete application for the single permit based on a vacancy confirmation, and within 30 days where the job is a shortage occupation in the region and the employer meets the conditions of the Employment Services Act. The Labour Office must return its vacancy confirmation to the police within 5 working days of the request.",
    validity:
      "Granted for the expected duration of employment, up to a maximum of 2 years in the usual case, and renewable repeatedly. The Act allows up to 5 years for temporary residence for employment, and the EU Immigration Portal notes this longer period applies where a treaty or reciprocity provides for it. The worker must enter Slovakia within 180 days of the grant.",
    labourMarketTest:
      "Yes. The employer reports the vacancy to the Labour Office at least 20 working days before the residence application. If no registered jobseeker fills the post in that time, the Labour Office confirms that the vacancy may be filled by a third-country national. For shortage occupations published quarterly by the Central Office of Labour, the confirmation is issued without a labour market test provided the employer's share of third-country nationals stays below the statutory limit. Some categories need neither a confirmation nor a work permit.",
    steps: [
      {
        title: "Report the vacancy to the Labour Office",
        actor: "Employer",
        detail:
          "The employer reports the vacancy to the Labour Office (electronically through slovensko.sk) at least 20 working days before the worker's application. For shortage occupations the report can be made without the waiting period.",
      },
      {
        title: "Sign the contract or written promise of employment",
        actor: "Both",
        detail:
          "If no suitable jobseeker is placed, the employer signs an employment contract or a written promise of employment on the official form, which must be an employment relationship (pracovný pomer), with pay confirmation for the means test.",
      },
      {
        title: "File the residence application at the embassy",
        actor: "Employee",
        detail:
          "The worker files the application form in Slovak in person at the Slovak embassy, or at the Foreign Police if legally in Slovakia, with passport, photographs, contract or promise, criminal record extracts, proof of accommodation and financial means, all apostilled and translated into Slovak and no older than 90 days, and pays the administrative fee.",
      },
      {
        title: "Foreign Police obtains the vacancy confirmation",
        actor: "Authority",
        detail:
          "The Foreign Police requests the confirmation on the possibility of filling the vacancy from the Labour Office, which returns it through the information system within 5 working days, and decides within the statutory period of 60 days (30 days for shortage occupations).",
      },
      {
        title: "Entry and arrival formalities",
        actor: "Employee",
        detail:
          "The worker enters within 180 days of the grant, reports arrival to the Foreign Police within 3 working days and collects the residence document.",
      },
      {
        title: "Medical report and health insurance",
        actor: "Employee",
        detail:
          "Within 30 days of collecting the residence document the worker submits a medical report from an infectious diseases specialist, no older than 30 days, and takes out health insurance within 3 working days of collection.",
      },
    ],
    employerDocs: [
      { label: "Vacancy report filed with the Labour Office at least 20 working days before the application" },
      { label: "Employment contract or written promise of employment on the official form, as an employment relationship" },
      { label: "Confirmation of the agreed salary, used by the worker as proof of financial means" },
      { label: "For regulated professions, the recognised qualification or recognition decision" },
      { label: "Employer confirmation that no work permit or vacancy confirmation is required, where an exemption applies" },
      { label: "Notification to the Foreign Police within 3 working days if the employment ends" },
    ],
    employeeDocs: [
      { label: "Application form for temporary residence, completed and signed in Slovak" },
      { label: "Valid passport and two colour photographs" },
      { label: "Employment contract or written promise of employment" },
      { label: "Criminal record extract from the country of nationality and from any country of residence of more than 90 days in 6 consecutive months in the last 3 years, apostilled and translated, no older than 90 days" },
      { label: "Proof of accommodation for the stay, no older than 90 days" },
      { label: "Proof of financial means: employer's salary confirmation or bank statement" },
      { label: "Medical report from an infectious diseases specialist within 30 days of collecting the card" },
      { label: "Proof of health insurance within 3 working days of collecting the card" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "For highly qualified employment with a contract of at least one year and pay of at least 1.5 times the regional average wage published by the Statistical Office; issued for 3 years or the employment period plus 90 days." },
      { name: "Shortage occupation fast track", summary: "Vacancy confirmation without a labour market test and a 30-day decision period for occupations on the quarterly shortage list, subject to a cap on the employer's share of third-country nationals." },
      { name: "Work permit and temporary residence", summary: "Labour Office work permit followed by temporary residence, used for family reunification holders and EU long-term residents in their first 12 months." },
      { name: "Intra-corporate transfer", summary: "Temporary residence for employment for managers and specialists (up to 3 years) or trainees (up to 1 year) transferred within a group." },
    ],
    watchOuts: [
      "Timing is set by the vacancy report. If the employer reported the post fewer than 20 working days before the application, the Labour Office cannot issue the confirmation and the Foreign Police must refuse.",
      "Criminal record and accommodation documents must be apostilled or superlegalised, translated into Slovak and no older than 90 days on filing. Extracts must cover the whole territory of the issuing state.",
      "Filing does not give a right to stay. Until the decision the worker may remain only under a valid visa or visa-free stay, and must enter within 180 days of the grant and submit the medical report within 30 days of collecting the card.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Slovakia", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-slovakia_en" },
      { label: "Ministry of Labour, Social Affairs and Family: employment of a third country national", url: "https://www.employment.gov.sk/en/information-foreigners/employment/employment-third-country-national.html" },
      { label: "Slov-Lex: Act No. 404/2011 Coll. on the Residence of Foreigners, consolidated text", url: "https://static.slov-lex.sk/pdf/SK/ZZ/2011/404/ZZ_2011_404_20261001.pdf" },
      { label: "Ministry of the Interior, Foreign Police FAQ: documents for temporary residence for employment", url: "https://www.minv.sk/swift_data/source/policia/hranicna_a_cudzinecka_policia/ocp/faq/jul_2025/16_otazka.pdf" },
    ],
  };
