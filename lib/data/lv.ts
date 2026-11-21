import type { Country } from "../types";

export const lv: Country =
  {
    code: "lv",
    region: "Baltics",
    singlePermitDirective: true,
    name: "Latvia",
    flag: "🇱🇻",
    languages: ["Latvian"],
    permitName: "Temporary residence permit with the right to employment",
    localName: "Termiņuzturēšanās atļauja (darba līgums)",
    tagline: "Vacancy registered with the State Employment Agency, an electronically approved invitation from OCMA, then a residence permit decided within 30 days.",
    overview:
      "In Latvia the right to work is written into the temporary residence permit issued by the Office of Citizenship and Migration Affairs (OCMA, in Latvian PMLP). The employer first registers the vacancy on the State Employment Agency (NVA) portal so that local and EU candidates can apply, then asks OCMA to approve an invitation (izsaukums) for the worker. With the approved invitation the worker applies for the residence permit, from abroad at a Latvian mission or, where legally present, directly to OCMA. The permit is tied to the employer and the position named in the invitation.",
    whoFilesShort: "Worker, after employer invitation",
    whoApplies:
      "The employer registers the vacancy with NVA and submits the invitation request to OCMA electronically with a secure e-signature. The worker applies for the residence permit at a Latvian embassy or consulate, or directly to OCMA if staying legally in Latvia (visa-free nationals, holders of a Schengen residence permit or a visa with work rights).",
    authorities: [
      "Office of Citizenship and Migration Affairs (Pilsonības un migrācijas lietu pārvalde, OCMA/PMLP): approval of invitations and residence permit decisions",
      "State Employment Agency (Nodarbinātības valsts aģentūra, NVA): vacancy registration and opinion on recruiting a third-country national",
      "Latvian embassies and consulates: receipt of residence permit applications from abroad",
      "State Revenue Service (VID): taxpayer registration after arrival",
    ],
    legalBasis: [
      "Imigrācijas likums (Immigration Law), in particular section 9 on the right to employment, section 23 on temporary residence permits and section 33 on decision deadlines",
      "Directive 2011/98/EU, recast by Directive (EU) 2024/1233",
      "Cabinet of Ministers regulations on residence permits and on the state fee for examining visa and residence permit documents (Regulation No. 731)",
    ],
    decisionPeriod:
      "The Immigration Law requires OCMA to decide on a temporary residence permit within 30 days of a complete application; a higher fee buys examination within 10 or 5 working days. Approval of an employment invitation takes 5 working days, or 10 where an additional check is needed. All of this falls within the 90-day deadline of the recast directive.",
    validity:
      "For the period of employment but not longer than five years. The permit must be registered with OCMA each year, and the card is issued for one year at a time. An EU Blue Card is issued for up to two years. Confirm current validity rules on the OCMA page.",
    labourMarketTest:
      "Yes. For work under an employment contract the employer must register the vacancy on the NVA CV and vacancies portal and leave it unfilled for at least 10 working days, cooperating with NVA on the candidates it proposes. NVA then issues an opinion allowing or refusing recruitment of a third-country national, which OCMA can see electronically; the employer must lodge the invitation within one month. Pay must be at least the average gross monthly wage of the sector in the previous year, with the national average as a floor, and higher thresholds apply to Blue Card holders and some other categories. The Immigration Law lists exceptions, including EU Blue Card applicants, for whom no vacancy registration is needed.",
    steps: [
      {
        title: "Register the vacancy with NVA",
        actor: "Employer",
        detail:
          "Publish the vacancy on the NVA portal with the reasons for the post and the number of positions. Keep it open for at least 10 working days, assess the candidates NVA proposes and report the results through the portal.",
      },
      {
        title: "Obtain the NVA opinion",
        actor: "Authority",
        detail:
          "NVA issues an opinion on recruiting a third-country national, usually within 10 working days of publication. A positive opinion is available to OCMA electronically; a refusal can be appealed to the NVA Director.",
      },
      {
        title: "Request approval of the invitation from OCMA",
        actor: "Employer",
        detail:
          "Within one month of the opinion, submit the invitation request electronically with the employment contract or draft, the worker's education or experience documents and any licence, each file e-signed, and pay the state fee. OCMA decides within 5 working days, or 10 if an extra check is needed.",
      },
      {
        title: "Apply for the residence permit",
        actor: "Employee",
        detail:
          "With the approved invitation, lodge the application form, passport copy, photograph, criminal record certificate and proof of the state fee at a Latvian mission abroad, or send them to OCMA if legally in Latvia. The fee depends on the speed of examination chosen.",
      },
      {
        title: "Decision by OCMA",
        actor: "Authority",
        detail:
          "OCMA examines the file within 30 days (10 or 5 working days for the higher fees) and, if positive, issues the residence permit with the right to employment for the named employer and position.",
      },
      {
        title: "Arrival formalities and card",
        actor: "Employee",
        detail:
          "Declare the place of residence, provide a radiologist's report on a chest X-ray carried out in Latvia and show health insurance covering the stay, then collect the residence permit card. Register with the State Revenue Service as a taxpayer. The employer must notify OCMA of changes in pay, working time or workplace within three working days.",
      },
    ],
    employerDocs: [
      { label: "Invitation request submitted electronically with a secure e-signature, with explanations in Latvian" },
      { label: "Employment contract or draft contract", note: "Also needed for repeat permits and annual registration." },
      { label: "Education document (legalised copy) or proof of three years' experience in the profession; recognition certificate for regulated professions" },
      { label: "Copy of the permit or licence where the work requires one" },
      { label: "NVA opinion on the vacancy", note: "Transmitted to OCMA electronically; the employer need not attach it." },
      { label: "Proof of payment of the state fee for the invitation and the right to employment" },
    ],
    employeeDocs: [
      { label: "Residence permit application form" },
      { label: "Full copy of a valid travel document recognised in Latvia" },
      { label: "Photograph" },
      { label: "Criminal record certificate from the country of citizenship or residence", note: "For applicants over 14 who lived there more than 12 months; not required from citizens of visa-free countries." },
      { label: "Proof of subsistence, normally the salary in the contract meeting the applicable threshold" },
      { label: "Proof of payment of the state fee" },
      { label: "After arrival: radiologist's report on an X-ray taken in Latvia and health insurance covering the stay" },
      { label: "For family members: proof of kinship and, for a child travelling with one parent, the other parent's notarised consent" },
    ],
    alternativeRoutes: [
      { name: "EU Blue Card", summary: "Higher-education degree or five years of experience and pay of 1.5 times the national average (1.2 times for listed shortage professions). No NVA vacancy registration, invitation decided in 10 working days, card for up to two years." },
      { name: "Intra-corporate transfer", summary: "Managers, specialists and trainees transferred within a group after at least six months with the foreign employer, on a letter from the sending company." },
      { name: "Start-up founder", summary: "Separate residence permit for founders of innovative start-ups, handled by OCMA with its own criteria." },
      { name: "Short-term work on a visa", summary: "For employment of up to 90 days the employer requests an invitation and the worker obtains a visa stating the right to work; the vacancy must still be registered with NVA." },
    ],
    watchOuts: [
      "All documents must be filed in one submission. If OCMA finds gaps the complete set has to be resubmitted, and the fee is not refunded if the invitation is refused or withdrawn.",
      "The right to work covers only the employer and profession named in the invitation. A change of position with the same employer needs a new invitation, and a change of employer needs new employment rights.",
      "Subsistence and salary thresholds are reset every spring from the previous year's statistics, and the vacancy registration and opinion lapse if the invitation is not lodged within one month.",
    ],
    sources: [
      { label: "EU Immigration Portal: employed worker, Latvia", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-latvia_en" },
      { label: "OCMA (PMLP): employment of foreigners", url: "https://www.pmlp.gov.lv/en/employment-foreigners" },
      { label: "State Employment Agency (NVA): employment of third-country nationals in Latvia", url: "https://www.nva.gov.lv/en/employment-third-country-nationals-latvia" },
      { label: "Likumi.lv: Immigration Law (English translation)", url: "https://likumi.lv/ta/en/id/68522-immigration-law" },
    ],
  };
