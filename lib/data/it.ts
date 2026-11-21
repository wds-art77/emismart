import type { Country } from "../types";

export const it: Country =
  {
    code: "it",
    region: "Southern Europe",
    singlePermitDirective: true,
    name: "Italy",
    flag: "🇮🇹",
    languages: ["Italian"],
    permitName: "Work clearance under the Decreto Flussi and residence permit for employed work",
    localName: "Nulla osta al lavoro subordinato e permesso di soggiorno per lavoro subordinato",
    tagline: "Quota-based: the employer files for a nulla osta on a click day, the worker then gets a visa and a residence permit from the Questura.",
    overview:
      "Entry for employed work from abroad is only possible within yearly quotas set by a decree of the President of the Council of Ministers (Decreto Flussi). The current decree covers 2026 to 2028. The employer files a request for a nulla osta al lavoro with the Sportello Unico per l'Immigrazione of the Prefettura on dates fixed each year (click days). Once the nulla osta is issued the consulate grants an entry visa, the worker enters Italy, signs the residence contract (contratto di soggiorno) and applies to the Questura for the permesso di soggiorno. Certain categories, such as EU Blue Card holders, managers, researchers, nurses and artists, are outside the quotas and can be requested all year.",
    whoApplies:
      "The employer, Italian or a foreign employer legally resident in Italy, files the nulla osta request online through the Ministry of the Interior's ALI portal, using SPID or CIE, often with the help of an employer association or a labour consultant. The worker applies for the visa at the Italian consulate and, after entry, for the residence permit.",
    authorities: [
      "Sportello Unico per l'Immigrazione (SUI) at the Prefettura of the province of work: nulla osta and residence contract",
      "Ministero dell'Interno, Dipartimento per le Libertà Civili e l'Immigrazione: ALI portal and Decreto Flussi procedure",
      "Ministero del Lavoro e delle Politiche Sociali: allocation of quotas to the territorial offices",
      "Italian embassy or consulate: entry visa for employed work",
      "Questura (Polizia di Stato): issue and renewal of the permesso di soggiorno",
    ],
    legalBasis: [
      "Decreto Legislativo 25 luglio 1998, n. 286, Testo Unico sull'immigrazione (articles 3, 5, 21, 22, 24-bis and 27)",
      "D.P.R. 31 agosto 1999, n. 394, implementing regulation",
      "D.P.C.M. 2 ottobre 2025 on entry flows for 2026 to 2028 and the interministerial circulars implementing it",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "The Sportello Unico must issue the nulla osta within a maximum of 60 days from the date the request is charged to the quota, provided the conditions are met. If the Questura has not sent its opinion within that period the nulla osta is issued anyway. The Testo Unico sets a 90-day period for the Questura to issue the residence permit after the application, in line with the recast directive. In practice the overall timeline depends on the quota being available and the consulate's visa processing.",
    validity:
      "The nulla osta is valid for 6 months from issue, during which the worker must obtain the visa and enter Italy. The residence permit follows the contract: up to 1 year for a fixed-term contract and up to 2 years for an open-ended contract. Renewal is requested at least 60 to 90 days before expiry, confirm the current deadline on the Questura page.",
    labourMarketTest:
      "Yes, in two layers. Entry is limited by the yearly quotas by sector and nationality in the Decreto Flussi. In addition, before filing, the employer must check with the competent centro per l'impiego that no suitable worker is available in Italy; the check is treated as negative if the centre does not respond within 8 days of the employer's request. Categories outside the quotas under article 27 of the Testo Unico are exempt.",
    steps: [
      {
        title: "Check the quota and the category",
        actor: "Employer",
        detail:
          "The employer confirms that the sector and the worker's nationality fall within the current Decreto Flussi quotas and dates, or that the job is in a category outside the quotas (article 27, EU Blue Card, managers, researchers, nurses, artists).",
      },
      {
        title: "Verify unavailability with the centro per l'impiego",
        actor: "Employer",
        detail:
          "The employer asks the local employment centre whether a worker already in Italy is available. No answer within 8 days counts as a negative result, and the check is documented in the file.",
      },
      {
        title: "File the nulla osta request on the ALI portal",
        actor: "Employer",
        detail:
          "On the click day the employer, or an association or labour consultant acting for it, submits the named request (form B2020 for non-seasonal work) with the proposed residence contract, proof of accommodation, the commitment to pay return costs, the asseverazione under article 24-bis and a digital domicile. Requests are processed in order of submission until the quota is used up.",
      },
      {
        title: "Nulla osta issued and sent to the consulate",
        actor: "Authority",
        detail:
          "The Sportello Unico checks the file and the Questura's opinion and issues the nulla osta within 60 days of the request being charged to the quota. The nulla osta is transmitted electronically to the consulate and is valid for 6 months.",
      },
      {
        title: "Entry visa",
        actor: "Employee",
        detail:
          "The worker applies for the entry visa for employed work at the Italian consulate of the country of residence within the validity of the nulla osta and travels to Italy.",
      },
      {
        title: "Residence contract and residence permit application",
        actor: "Both",
        detail:
          "Within 8 working days of entry the worker applies for the permesso di soggiorno, and within the period set by the Testo Unico (currently 15 days of entry) employer and worker sign the contratto di soggiorno, which is sent electronically to the Sportello Unico. The nulla osta allows work while the permit is pending.",
      },
      {
        title: "Fingerprints and card collection",
        actor: "Employee",
        detail:
          "The worker attends the Questura appointment for fingerprints and collects the electronic residence permit, then registers with the municipality and the tax authority as needed.",
      },
    ],
    employerDocs: [
      { label: "Named nulla osta request on the ALI portal (form B2020 for non-seasonal employed work)" },
      { label: "Proposed residence contract (contratto di soggiorno) including the commitment to pay the worker's return costs" },
      { label: "Documentation of suitable accommodation for the worker, digitally signed" },
      { label: "Asseverazione by a labour consultant or employer association under article 24-bis(2) confirming the employer's capacity and the contract terms", note: "Not required when the request is filed by an association or consultant that has signed a protocol with the Ministry." },
      { label: "Result of the unavailability check with the centro per l'impiego" },
      { label: "Digital domicile (PEC) registered in INI-PEC or INAD, and SPID or CIE access for the portal" },
    ],
    employeeDocs: [
      { label: "Valid passport or travel document" },
      { label: "Copy of the nulla osta issued by the Sportello Unico" },
      { label: "Entry visa application form and passport photographs for the consulate" },
      { label: "Signed residence contract (contratto di soggiorno)" },
      { label: "Postal kit application for the permesso di soggiorno with the tax stamp and fee receipts" },
      { label: "Proof of qualifications where the profession is regulated" },
      { label: "Codice fiscale (tax code) and proof of address after arrival" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card (Carta blu UE)", summary: "Highly qualified workers with a degree or recognised professional experience and a salary above the threshold; filed by the employer with the Sportello Unico outside the quotas under article 27-quater of the Testo Unico." },
      { name: "Outside-quota categories (article 27)", summary: "Managers and highly specialised staff, university lecturers, researchers, nurses, artists, intra-corporate transferees and other listed categories can be requested all year without a quota." },
      { name: "Simplified protocol procedure (article 24-bis)", summary: "Employer associations that sign a protocol with the Ministry of Labour or the Interior replace the nulla osta with a communication of the proposed residence contract, checked by the Questura." },
      { name: "Digital nomad and remote worker visa", summary: "Residence permit for highly qualified remote workers employed abroad, with its own income and insurance conditions." },
    ],
    watchOuts: [
      "Quotas run out within minutes on click days. A request filed after the quota is exhausted stays pending and may never be processed, so pre-filling on the ALI portal during the preparation window is essential.",
      "The nulla osta expires after 6 months. If the consulate has not issued the visa and the worker has not entered Italy by then, the whole procedure must restart in a new quota round.",
      "Recent decrees have added anti-fraud checks: employers must confirm their interest after the nulla osta is issued within a short window, and failure to do so cancels the clearance. Confirm the current deadline in the latest circular.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Italy", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-italy_en" },
      { label: "Ministero del Lavoro: entry and stay for work in Italy", url: "https://lavoro.gov.it/temi-e-priorita/immigrazione/focus-on/ingresso-e-soggiorno-per-lavoro-in-italia/pagine/ingresso-e-soggiorno-per-lavoro-in-italia" },
      { label: "Normattiva: Testo Unico immigrazione, article 22", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1998-07-25;286~art22" },
      { label: "Ministero dell'Interno: Portale ALI, Sportello Unico Immigrazione", url: "https://portaleservizi.dlci.interno.it/AliSportello/ali/home.htm" },
    ],
  };
