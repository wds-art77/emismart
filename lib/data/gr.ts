import type { Country } from "../types";

export const gr: Country =
  {
    code: "gr",
    region: "Southern Europe",
    singlePermitDirective: true,
    name: "Greece",
    flag: "🇬🇷",
    languages: ["Greek"],
    permitName: "Residence permit for dependent employment following an employer invitation (type E.4)",
    localName: "Άδεια διαμονής για εξαρτημένη εργασία κατόπιν μετάκλησης (τύπου «Ε.4»)",
    tagline: "The employer's invitation (metaklisi) is approved by the Decentralised Administration, the worker enters on a national visa and applies online for the E.4 permit.",
    overview:
      "Greece applies the Migration Code, Law 5038/2023, in force since 2024. Hiring a non-EU worker from abroad for dependent employment starts with the employer's electronic application for approval of employment, known as metaklisi, to the Directorate of Aliens and Migration of the Decentralised Administration where the employer is based. Approval is only possible if the job falls within the maximum number of positions set by an act of the Council of Ministers per specialty and region. The approval is sent to the Greek consulate, which issues a national visa after the worker signs the contract. After arrival the worker applies online to the Ministry of Migration and Asylum for the type E.4 residence permit.",
    whoFilesShort: "Employer, then worker",
    whoApplies:
      "The employer, a company or an individual, files the employment approval request through the electronic services of the Ministry of Migration and Asylum using TAXISnet credentials, or through an authorised lawyer. The worker then applies in person for the national visa at the consulate and, after entering Greece and before the visa expires, submits the residence permit application online.",
    authorities: [
      "Directorate of Aliens and Migration of the competent Decentralised Administration (Αποκεντρωμένη Διοίκηση): approval of the employer's invitation",
      "Ministry of Migration and Asylum (Υπουργείο Μετανάστευσης και Ασύλου): electronic platform and residence permits",
      "Greek embassy or consulate (Ministry of Foreign Affairs): national visa for employment",
      "Ministry of Labour and Social Security, with the Economic and Social Council and the Public Employment Service (DYPA): advice on the yearly maximum number of positions",
      "e-EFKA: social security and health insurance registration",
    ],
    legalBasis: [
      "Law 5038/2023, Migration Code (Κώδικας Μετανάστευσης), in particular articles 13, 26, 27 and 61, as amended, including by Law 5275/2026",
      "Joint Ministerial Decision 7/95931/2024 (Government Gazette B 1807) setting the supporting documents for visas and residence permits",
      "Circulars of the Ministry of Migration and Asylum on the application of Law 5038/2023 and on electronic submission of employer requests",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
    ],
    decisionPeriod:
      "No fixed statutory period for the employer approval or the residence permit decision was confirmed on the official pages. The National Registry of Administrative Procedures estimates about 50 to 60 days for the employer approval and 50 to 80 days for the residence permit stage. The recast directive requires a decision within 90 days of a complete application. While the permit application is pending the worker holds a certificate of submission and may reside legally.",
    validity:
      "Under the general rule of the Migration Code the initial residence permit is issued for 3 years and renewable for equal periods unless the Code provides otherwise. The official procedure page lists the E.4 duration as variable, so confirm the duration stated on the decision. Older guidance based on the previous law mentioned 2 years initially and 3 years on renewal.",
    labourMarketTest:
      "Yes, through a quota. An act of the Council of Ministers, on the proposal of the Minister of Labour after consulting the Economic and Social Council and the Public Employment Service, sets the maximum number of positions for dependent and seasonal work per specialty (ESCO classification) and region, taking into account the labour supply of Greek, EU and legally resident non-EU workers and unemployment rates. The employer's invitation is approved only if the positions for that specialty have not been exhausted.",
    steps: [
      {
        title: "Check the positions available and the contract terms",
        actor: "Employer",
        detail:
          "The employer confirms that the specialty and region are covered by the current act on maximum positions and prepares a full-time employment contract of at least 1 year with pay at least equal to the monthly earnings of an unskilled worker.",
      },
      {
        title: "File the employment approval request (metaklisi)",
        actor: "Employer",
        detail:
          "Through the Ministry's electronic services the employer submits the request stating the number of positions, the worker's details and nationality, the specialty and the period of employment, uploads the contract, passport copy and tax documents, and pays the fee per worker.",
      },
      {
        title: "Approval by the Decentralised Administration",
        actor: "Authority",
        detail:
          "The Directorate of Aliens and Migration checks that the file is complete, that the employer meets the income thresholds and that the positions are not exhausted, then issues the approval act, which is emailed with the signed contract to the competent Greek consulate.",
      },
      {
        title: "National visa at the consulate",
        actor: "Employee",
        detail:
          "The consulate invites the worker, who attends in person to sign the employment contract and receives the national visa for employment, subject to the general visa rules and a criminal record check.",
      },
      {
        title: "Online application for the E.4 residence permit",
        actor: "Employee",
        detail:
          "After entry and before the visa expires, the worker applies on the Ministry's platform with the passport and visa copy, the contract, the hiring notification, proof of application for full health insurance and a photograph, and pays the permit fee. A certificate of submission is issued.",
      },
      {
        title: "Biometrics, decision and card",
        actor: "Authority",
        detail:
          "The service examines the application, takes fingerprints and issues the electronic residence permit or a reasoned rejection, which can be challenged by an administrative appeal within 2 months.",
      },
    ],
    employerDocs: [
      { label: "Electronic employment approval request with TAXISnet credentials or through an authorised lawyer" },
      { label: "Employment contract of at least 1 year, full time, with pay at least equal to an unskilled worker's monthly earnings" },
      { label: "Copy of the worker's passport pages with identity details and photograph" },
      { label: "Tax clearance or tax return showing the employer's ability to pay the contractual salary", note: "Income thresholds per worker differ for individuals, sole traders and companies; the agricultural sector has its own rule." },
      { label: "Evidence that the worker's specialty relates to the employer's business activity, where required" },
      { label: "Proof of payment of the approval fee for each worker invited" },
    ],
    employeeDocs: [
      { label: "Valid passport recognised by Greece and a copy of the national visa (type D)" },
      { label: "Employment contract signed at the consulate" },
      { label: "Criminal record certificate for the visa stage, as set by the Ministry of Foreign Affairs" },
      { label: "Employer's hiring notification (αναγγελία πρόσληψης) in the ERGANI system" },
      { label: "Certificate that an application for full health insurance has been filed with the competent insurance body" },
      { label: "Recent colour photograph in print and in digital format to passport specifications" },
      { label: "Proof of payment of the residence permit fee and the card printing fee" },
      { label: "Mobile phone number and email address for the electronic platform" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card (type E.1)", summary: "Highly qualified employment with a contract of at least 6 months and a salary above the threshold; employer approval under article 27 is filed online and recognised employers benefit from a 30-day decision." },
      { name: "Intra-corporate transfer (type E.2)", summary: "Managers, specialists and trainees transferred within a group, with approval of the posting by the Ministry." },
      { name: "Seasonal work (type E.5 and E.6)", summary: "Employer invitation for seasonal work in agriculture or tourism for up to 9 months in any 12, under the same quota act." },
      { name: "Digital nomad permit", summary: "Residence for remote workers employed by companies outside Greece, with income conditions set by the Migration Code." },
    ],
    watchOuts: [
      "The approval depends on positions being available for the specialty and region in the current act of the Council of Ministers. Where positions are exhausted the request is not approved, whatever the merits of the file.",
      "Income thresholds for the employer are checked per worker invited. Companies and individuals with low declared income are refused, and the fee is not refunded.",
      "The procedure was marked as under revision in 2026 following amendments to the Migration Code. Check the current forms and documents on the Ministry's platform before filing.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Greece", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-greece_en" },
      { label: "mitos.gov.gr: Employment/hiring authorisation under an employment relationship (E.4)", url: "https://en.mitos.gov.gr/index.php/ΔΔ:Employment/hiring_authorisation_under_an_employment_relationship_(‘E.4’)" },
      { label: "mitos.gov.gr: Residence permit following approval of an invitation for dependent employment, initial granting (E.4)", url: "https://en.mitos.gov.gr/index.php/ΔΔ:Residence_permit_following_approval_of_an_invitation_for_dependent_employment_–_Initial_granting_(‘E.4’)" },
      { label: "Ministry of Migration and Asylum: circular on electronic submission of employer requests", url: "https://migration.gov.gr/wp-content/uploads/2025/03/Ηλεκτρονική-υποβολή-αιτημάτων-εργοδοτών-Εγκύκλιος-REV-2-4.11.2024-FINAL.pdf" },
    ],
  };
