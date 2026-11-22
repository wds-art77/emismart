import type { CountryDetails } from "../types";

export const cy: CountryDetails = {
  authorities: [
    "Departement Arbeid, Ministerie van Arbeid en Sociale Verzekering, en zijn districtsarbeidsbureaus: arbeidsmarktcontrole, goedkeuring en afstempeling van het contract",
    "Departement Burgerlijke Stand en Migratie (CRMD), Ministerie van Binnenlandse Zaken: inreisvergunning en tijdelijke verblijfs- en arbeidsvergunning",
    "Districtseenheden voor vreemdelingen en immigratie van de Cypriotische politie: ontvangst van aanvragen en immigratiecontrole",
    "Cypriotische diplomatieke missies: visa voor onderdanen die er een nodig hebben",
    "Administratieve rechtbank: beroepen tegen beslissingen van het CRMD",
  ],
  legalBasis: [
    "Aliens and Immigration Law (Cap. 105) (Wet op vreemdelingen en immigratie) en de Aliens and Immigration Regulations van 1972 (Reg. 242/72), zoals gewijzigd",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
    "Criteria voor de tewerkstelling van onderdanen van derde landen, overeengekomen tussen de sociale partners en goedgekeurd door de Raad van Ministers (besluit van 6 december 1991, zoals bijgewerkt door latere besluiten van de Raad van Ministers)",
  ],
  steps: [
    {
      title: "De vacature registreren bij het districtsarbeidsbureau",
      actor: "Employer",
      detail:
        "De werkgever meldt de vacature bij het districtsarbeidsbureau van het Departement Arbeid. Het bureau controleert de criteria en probeert de functie in te vullen vanuit de lokale en de EU-arbeidsmarkt.",
    },
    {
      title: "De goedkeuring van het Departement Arbeid aanvragen",
      actor: "Employer",
      detail:
        "Als de vacature niet ingevuld raakt, vraagt de werkgever toestemming om een genoemde niet-EU-onderdaan tewerk te stellen. Het Departement beoordeelt het verzoek aan de hand van de goedgekeurde criteria en de toegestane sectoren.",
    },
    {
      title: "Contract ondertekend en afgestempeld",
      actor: "Both",
      detail:
        "Na een positief antwoord wordt de arbeidsovereenkomst volgens het voorgeschreven model ondertekend door werkgever en werknemer en afgestempeld door het Departement Arbeid. Het origineel en de afgestempelde kopieën zijn nodig voor de migratiefase.",
    },
    {
      title: "Aanvraag van de inreisvergunning bij het CRMD",
      actor: "Employer",
      detail:
        "De werkgever vraagt de inreis- en verblijfsvergunning aan bij het CRMD of via de districtseenheden voor vreemdelingen en immigratie van de politie, met als bijlagen het afgestempelde contract, een bankgarantie ter dekking van mogelijke repatriëringskosten, het paspoort van de werknemer, het uittreksel uit het strafregister en de medische attesten.",
    },
    {
      title: "Inreisvergunning en reis",
      actor: "Authority",
      detail:
        "Het CRMD geeft de inreisvergunning af. Onderdanen die een visum nodig hebben, verkrijgen dat vóór de reis bij een Cypriotische diplomatieke missie.",
    },
    {
      title: "Registratie en afgifte van de vergunning na aankomst",
      actor: "Employee",
      detail:
        "Na aankomst meldt de werknemer zich bij het CRMD of de districtseenheid voor immigratie om te worden ingeschreven in het Vreemdelingenregister, de medische onderzoeken en de biometrie te voltooien en de tijdelijke verblijfs- en arbeidsvergunning te ontvangen.",
    },
  ],
  employerDocs: [
    { label: "Vacatureregistratie en aanvraag bij het districtsarbeidsbureau" },
    { label: "Arbeidsovereenkomst volgens het model van het Departement Arbeid, ondertekend en afgestempeld, met afgestempelde kopieën" },
    { label: "Goedkeuring van het Departement Arbeid die de werkgever toestaat onderdanen van derde landen tewerk te stellen" },
    { label: "Originele bankgarantie ter dekking van mogelijke repatriëringskosten", note: "De checklists van het CRMD bepalen de vereiste duur van de garantie" },
    { label: "Bewijs van geschikte huisvesting die voor de werknemer wordt verstrekt of geregeld" },
    { label: "Aansprakelijkheidsverzekering van de werkgever en verklaring van het postadres van de werknemer, wanneer het CRMD-formulier die vereist" },
  ],
  employeeDocs: [
    { label: "Geldig paspoort" },
    { label: "Uittreksel uit het strafregister van het land van herkomst of verblijf" },
    { label: "Attesten van medisch onderzoek, met inbegrip van bloedonderzoek en röntgenfoto van de borstkas, zoals vermeld op de CRMD-checklist" },
    { label: "Ziektekostenverzekering die het verblijf dekt" },
    { label: "Pasfoto's" },
    { label: "Bewijs van kwalificaties of ervaring wanneer de criteria van het Departement Arbeid dat vereisen" },
    { label: "Officiële vertalingen en certificering van alle buitenlandse documenten", note: "Het CRMD vereist dat documenten officieel worden vertaald en naar behoren gecertificeerd" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Ingevoerd bij een wijziging van 2024 van de Aliens and Immigration Law, met aanvragen die sinds 2025 worden aanvaard voor hooggekwalificeerde werknemers in bepaalde sectoren met een loon boven de nationale drempel. Het Departement Arbeid controleert het contract vóór de aanvraag bij het CRMD. Controleer het huidige toepassingsgebied op de pagina van het CRMD." },
    { name: "Ondernemingen met buitenlandse belangen (Business Facilitation Unit)", summary: "In aanmerking komende ondernemingen in buitenlandse handen die bij de Business Facilitation Unit zijn geregistreerd, kunnen leidinggevenden en sleutelpersoneel uit derde landen boven vastgestelde loonniveaus tewerkstellen via het CRMD, zonder de standaardprocedure van het Departement Arbeid. Vergunningen worden afgegeven voor maximaal 2 jaar en zijn verlengbaar." },
    { name: "Overplaatsing binnen een onderneming", summary: "Leidinggevenden, specialisten en stagiairs die binnen een groep worden overgeplaatst volgens de ICT-regels, behandeld door de centrale kantoren van het CRMD." },
    { name: "Visum voor digitale nomaden", summary: "Een regeling met een plafond voor werknemers op afstand die in het buitenland in dienst zijn en niet voor Cypriotische werkgevers werken. Controleer de huidige beschikbaarheid op de pagina van het CRMD." },
  ],
  watchOuts: [
    "Er gebeurt niets zolang het Departement Arbeid het verzoek niet heeft goedgekeurd en het contract niet heeft afgestempeld. Vacatures buiten de toegestane sectoren of beroepen worden in deze fase geweigerd.",
    "Het dossier voor de inreisvergunning vereist een bankgarantie voor repatriëring, medische attesten en officieel vertaalde, gecertificeerde documenten. Ontbrekende of niet-gecertificeerde vertalingen zijn een veelvoorkomende oorzaak van vertraging.",
    "De vergunning is gebonden aan de werkgever en de sector. Veranderingen van werkgever zijn beperkt tot 3 en elke verandering vereist een vrijgaveovereenkomst en goedkeuring van het Departement Arbeid; na de derde verandering wordt de vergunning niet verlengd.",
  ],
};
