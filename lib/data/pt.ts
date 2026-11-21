import type { Country } from "../types";

export const pt: Country =
  {
    code: "pt",
    region: "Southern Europe",
    singlePermitDirective: true,
    name: "Portugal",
    flag: "🇵🇹",
    languages: ["Portuguese"],
    permitName: "Residence visa and residence permit for employed work",
    localName: "Visto de residência e autorização de residência para exercício de atividade profissional subordinada",
    tagline: "A residence visa from the consulate on the strength of a Portuguese job offer, then a residence permit from AIMA after arrival.",
    overview:
      "Portugal runs a two-stage process. The worker first obtains a residence visa for employed work (visto de residência para exercício de atividade profissional subordinada) at the Portuguese consulate, based on an employment contract, a promise of contract or an individualised expression of interest from an employer. After entering Portugal the worker applies to AIMA, the Agency for Integration, Migration and Asylum, for the residence permit under article 88 of the Lei de Estrangeiros. The former route of applying inside Portugal through a manifestation of interest (manifestação de interesse) was abolished in 2024 and the corresponding paragraph of article 88 is now revoked, so the visa must be obtained before arrival.",
    whoFilesShort: "Worker, employer provides contract",
    whoApplies:
      "The worker applies for the visa in person at the Portuguese consulate of the country of residence, often through an outsourced visa centre, with the employer's contract or promise of contract attached. After arrival the worker applies to AIMA for the residence permit. The employer does not file with the authorities but must provide the contract, register the worker with Social Security and, where relevant, support the file.",
    authorities: [
      "AIMA, Agência para a Integração, Migrações e Asilo: residence permits and renewals",
      "Portuguese embassies and consulates (Ministério dos Negócios Estrangeiros): residence visas",
      "IEFP, Instituto do Emprego e da Formação Profissional: public job offer system",
      "Segurança Social: registration of the worker, a condition for the residence permit",
      "ACT, Autoridade para as Condições do Trabalho: labour inspection",
    ],
    legalBasis: [
      "Lei n.º 23/2007, de 4 de julho (regime jurídico de entrada, permanência, saída e afastamento de estrangeiros), as amended, articles 52, 58, 59, 75, 77, 82 and 88",
      "Decreto Regulamentar n.º 84/2007, de 5 de novembro, implementing the Lei de Estrangeiros",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "The law sets 60 days for the consulate to decide on the residence visa. AIMA must decide on the residence permit within 90 days of the application, extendable by 30 days in exceptional and justified cases; renewals have a 60-day period. In practice AIMA backlogs have been long, so build in time. The recast directive requires a decision within 90 days of a complete application, which matches the Portuguese permit period.",
    validity:
      "The residence visa is valid for two entries and a stay of 4 months, during which the residence permit must be requested. The temporary residence permit is valid for 2 years from issue and renewable for successive periods of 3 years.",
    labourMarketTest:
      "No formal test is applied today. The former annual quota (contingente global) and the IEFP preference check in article 59 have been revoked. IEFP keeps a public, permanently updated job offer system, and the visa requires a genuine contract, promise of contract or individualised employer interest together with suitable qualifications. Confirm current practice with the consulate, since consular posts may ask for proof that the offer is real.",
    steps: [
      {
        title: "Secure a job offer in Portugal",
        actor: "Both",
        detail:
          "The employer issues an employment contract, a promise of contract, or an individualised declaration of interest in hiring the worker. For regulated professions the worker must also hold the recognised qualification.",
      },
      {
        title: "Apply for the residence visa at the consulate",
        actor: "Employee",
        detail:
          "The worker applies in person at the Portuguese consulate of the country of residence with the contract, passport, criminal record certificate, proof of means, travel insurance and accommodation. The visa is decided within 60 days and is valid for 4 months with two entries.",
      },
      {
        title: "Enter Portugal and register",
        actor: "Both",
        detail:
          "The worker travels on the visa. The employer registers the worker with Social Security and the worker obtains a tax number (NIF) and Social Security number (NISS), both needed for the permit application.",
      },
      {
        title: "Book and attend the AIMA appointment",
        actor: "Employee",
        detail:
          "Within the 4-month validity of the visa the worker requests an appointment with AIMA and submits the residence permit application under article 88(1), with biometrics taken at the appointment.",
      },
      {
        title: "Decision by AIMA",
        actor: "Authority",
        detail:
          "AIMA checks the general conditions of article 77 (valid visa, means of subsistence, accommodation, Social Security registration, no criminal or security grounds) and must decide within 90 days, extendable by 30 days.",
      },
      {
        title: "Residence card and renewal",
        actor: "Employee",
        detail:
          "The residence card is issued for 2 years. Renewal for 3-year periods is requested before expiry, with proof of continued employment or sufficient means, and is decided within 60 days.",
      },
    ],
    employerDocs: [
      { label: "Employment contract, promise of employment contract or individualised declaration of interest in hiring the worker" },
      { label: "Company registration details and proof that the employer is established in Portugal" },
      { label: "Proof of registration of the worker with Segurança Social after arrival" },
      { label: "Statement on the job, salary and place of work used for the visa file", note: "Consulates may ask for a declaration under commitment of honour from the employer." },
    ],
    employeeDocs: [
      { label: "National visa application form and recent passport photographs" },
      { label: "Valid passport with sufficient remaining validity" },
      { label: "Criminal record certificate from the country of nationality or residence, legalised or apostilled, and authorisation for AIMA to check the Portuguese criminal record" },
      { label: "Proof of means of subsistence as set by ministerial order" },
      { label: "Travel insurance for the visa stage and proof of accommodation in Portugal" },
      { label: "Qualifications or professional certificates where the job requires them" },
      { label: "Portuguese tax number (NIF) and Social Security number (NISS) for the AIMA stage" },
      { label: "Certified Portuguese or English translations of documents in other languages" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card (Cartão azul UE)", summary: "Highly qualified work with a contract of at least 6 months and a salary above a multiple of the national average gross annual salary; valid 2 years, renewable for 3-year periods, with mobility rights within the EU." },
      { name: "Job-seeker visa (visto para procura de trabalho qualificado)", summary: "A visa of 120 days, extendable by 60 days, now aimed at people with specialised technical skills looking for qualified work. Once hired the holder applies for the residence permit in Portugal." },
      { name: "Highly qualified activity and tech visa", summary: "Residence visa and permit for highly qualified activity, including the Tech Visa certification route for technology companies, under separate articles of the Lei de Estrangeiros." },
      { name: "Intra-corporate transfer", summary: "Permit for managers, specialists and trainees transferred within a group under Directive 2014/66/EU." },
    ],
    watchOuts: [
      "The visa must be obtained before arrival. Since the manifestation of interest route was abolished in 2024, a worker who enters as a tourist cannot regularise through an employment contract in Portugal.",
      "AIMA appointments and decisions have run well beyond the legal periods. The visa is only valid for 4 months, so the appointment should be requested as soon as the worker arrives.",
      "The residence permit requires Social Security registration by the employer and a tax number for the worker. Files stall when these are missing at the AIMA appointment.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Portugal", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-portugal_en" },
      { label: "PGD Lisboa: consolidated text of Lei n.º 23/2007 (Lei de Estrangeiros)", url: "https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=920&tabela=leis" },
    ],
  };
