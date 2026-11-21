import type { Country } from "../types";

export const es: Country =
  {
    code: "es",
    region: "Southern Europe",
    singlePermitDirective: true,
    name: "Spain",
    flag: "🇪🇸",
    languages: ["Spanish"],
    permitName: "Residence and work authorisation for employed work",
    localName: "Autorización de residencia temporal y trabajo por cuenta ajena",
    tagline: "The employer applies at the Oficina de Extranjería, the worker then collects a visa and registers with Social Security within 3 months of entry.",
    overview:
      "Spain combines residence and work in one initial authorisation for employed work. The employer requests it from the Oficina de Extranjería of the province where the workplace is located, before the worker travels to Spain. Once granted, the worker applies for a residence and work visa at the Spanish consulate, enters Spain, and the authorisation takes effect when the employer registers the worker with Social Security. A new Reglamento de Extranjería (Real Decreto 1155/2024) applies since 20 May 2025 and sets the current rules.",
    whoApplies:
      "The employer, personally or through a representative, files the application at the Oficina de Extranjería. The worker is not in Spain at that stage. The worker then applies in person for the visa at the consulate of the country of residence and, after arrival, for the foreigner identity card (TIE).",
    authorities: [
      "Oficina de Extranjería of the province of the workplace (Ministerio de Inclusión, Seguridad Social y Migraciones): decision on the authorisation",
      "Servicio Público de Empleo Estatal (SEPE) and regional public employment services: shortage occupation catalogue and vacancy management",
      "Spanish embassy or consulate (Ministerio de Asuntos Exteriores, Unión Europea y Cooperación): residence and work visa",
      "Tesorería General de la Seguridad Social: registration of the worker, which activates the authorisation",
      "Policía Nacional or Oficina de Extranjería: issue of the TIE",
    ],
    legalBasis: [
      "Ley Orgánica 4/2000, de 11 de enero, sobre derechos y libertades de los extranjeros en España y su integración social (articles 36 to 40)",
      "Reglamento de Extranjería approved by Real Decreto 1155/2024, de 19 de noviembre (articles 72 to 81), in force since 20 May 2025",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "The Oficina de Extranjería must decide and notify within a maximum of 3 months. If no decision is notified within 3 months the application is deemed refused. The consulate then has a legal period of 1 month to decide on the visa. The recast directive requires a decision within 90 days of a complete application, which matches the Spanish 3-month period.",
    validity:
      "The initial authorisation lasts as long as the job, with a maximum of 1 year, and is limited to one autonomous community and one occupation unless the national employment situation does not apply. Renewal is granted for 4 years and allows any employed or self-employed activity anywhere in Spain.",
    labourMarketTest:
      "Yes, the national employment situation (situación nacional de empleo) applies. Hiring is possible without further proof if the occupation appears in the catalogue of hard-to-fill occupations (catálogo de ocupaciones de difícil cobertura) that SEPE publishes every quarter for each autonomous community. Otherwise the employer must register the vacancy with the public employment service, which manages it for 8 days, and obtain a certificate of insufficient candidates. The law and international agreements list cases where the test does not apply.",
    steps: [
      {
        title: "Check the national employment situation",
        actor: "Employer",
        detail:
          "The employer checks whether the occupation is in the current shortage catalogue for the region, whether an exemption under article 40 of the Ley Orgánica 4/2000 applies, or whether a vacancy must first be registered with the public employment service to obtain the certificate of insufficient candidates.",
      },
      {
        title: "Sign the employment contract",
        actor: "Both",
        detail:
          "The contract is signed by employer and worker on the official model, with conditions in line with the applicable collective agreement, and a start date conditional on the authorisation taking effect. Part-time pay must still reach the full-time minimum wage over the year.",
      },
      {
        title: "File the application at the Oficina de Extranjería",
        actor: "Employer",
        detail:
          "The employer files the official form with the contract, proof of economic means, the worker's passport copy, proof of qualifications and, where needed, the employment service certificate, at the Oficina de Extranjería of the province of the workplace. Incomplete files get 10 days to be completed.",
      },
      {
        title: "Decision and transmission to the consulate",
        actor: "Authority",
        detail:
          "The office checks tax, Social Security, criminal record and police reports and decides within 3 months. A favourable decision is recorded in the system so that the consulate of the worker's place of residence can see it.",
      },
      {
        title: "Apply for the residence and work visa",
        actor: "Employee",
        detail:
          "Within 1 month of the employer being notified, the worker applies in person at the consulate with the passport, the authorisation, the stamped contract, a criminal record certificate and a medical certificate. The consulate decides within 1 month and the worker collects the visa in person.",
      },
      {
        title: "Enter Spain and register with Social Security",
        actor: "Both",
        detail:
          "The worker enters Spain with the visa. The authorisation only takes effect once the employer registers the worker with Social Security, which must happen within 3 months of legal entry.",
      },
      {
        title: "Apply for the TIE",
        actor: "Employee",
        detail:
          "Within 1 month of the Social Security registration, the worker applies in person for the foreigner identity card (tarjeta de identidad de extranjero) at the Oficina de Extranjería or police station.",
      },
    ],
    employerDocs: [
      { label: "Official application form for the initial residence and work authorisation" },
      { label: "Tax identification number and, for companies, the public document proving the signatory's power of representation" },
      { label: "Copy of the employment contract on the official model, signed by both parties" },
      { label: "Proof of economic, material or personal means to meet the business project and the contract obligations", note: "Individuals also show the previous year's income tax return or authorise a data check." },
      { label: "Certificate from the public employment service of insufficient candidates, or proof that the occupation is in the shortage catalogue or exempt" },
      { label: "Proof of being up to date with tax and Social Security obligations, usually verified by the office" },
    ],
    employeeDocs: [
      { label: "Full copy of a valid passport or travel document" },
      { label: "Proof of training and, where the profession is regulated, the legally required professional qualification" },
      { label: "National visa application form signed by the worker" },
      { label: "Criminal record certificate from each country of residence in the last 5 years, legalised or apostilled, with sworn translation into Spanish" },
      { label: "Medical certificate issued within the last 3 months confirming no disease with serious public health implications" },
      { label: "Recent passport photograph" },
      { label: "Proof of legal residence in the consular district where the visa is requested" },
      { label: "Payment of the visa fee and, later, the residence and work fees (modelo 790)", note: "The initial residence authorisation fee is paid by the worker and the work authorisation fee by the employer; amounts change yearly." },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card (Tarjeta azul-UE)", summary: "Highly qualified workers with a higher education degree or equivalent experience and a salary above the threshold set by decree. Regulated in the Reglamento under Directive (EU) 2021/1883, with no national employment situation test." },
      { name: "Highly qualified professional and ICT under Ley 14/2013", summary: "Fast-track residence authorisations handled by the Unidad de Grandes Empresas y Colectivos Estratégicos for highly qualified staff, intra-corporate transferees, researchers and investors, with shorter decision periods." },
      { name: "Job-seeker visa", summary: "A visa to look for work in Spain, after which access to the employed work authorisation follows the specific rules in the Reglamento for visa holders." },
      { name: "Collective management of hiring in origin (GECCO)", summary: "Yearly ministerial order allowing employers to recruit groups of workers abroad, often for seasonal work, through a simplified procedure." },
    ],
    watchOuts: [
      "Silence means refusal: if the Oficina de Extranjería has not notified a decision within 3 months, the application is deemed rejected and the only way forward is an appeal or a new filing.",
      "The authorisation has no effect until the worker is registered with Social Security within 3 months of entry. Missing that deadline voids the whole process.",
      "The initial authorisation is tied to one autonomous community and one occupation. A change of employer is only possible after 3 months in the same occupation, or earlier in cases of serious breach by the employer.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Spain", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-spain_en" },
      { label: "BOE: Real Decreto 1155/2024, Reglamento de Extranjería (articles 72 to 81)", url: "https://www.boe.es/boe/dias/2024/11/20/pdfs/BOE-A-2024-24099.pdf" },
      { label: "Consulate General of Spain in London: work visa for employed work", url: "https://www.exteriores.gob.es/Consulados/londres/en/ServiciosConsulares/Paginas/Consular/Visado-de-trabajo-por-cuenta-ajena.aspx" },
    ],
  };
