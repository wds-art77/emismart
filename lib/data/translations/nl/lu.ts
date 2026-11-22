import type { CountryDetails } from "../types";

export const lu: CountryDetails = {
  authorities: [
    "Ministerie van Binnenlandse Zaken, Directie Immigratie (Direction générale de l'immigration)",
    "ADEM (Agence pour le développement de l'emploi): vacaturemelding en attest",
    "Luxemburgse ambassade of Luxemburgs consulaat: D-visum",
    "Gemeente van verblijf: aankomstverklaring",
  ],
  legalBasis: [
    "Loi modifiée du 29 août 2008 sur la libre circulation des personnes et l'immigration",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
    "Code du travail, boek VI over de tewerkstelling van buitenlandse werknemers",
  ],
  steps: [
    {
      title: "De vacature melden bij ADEM",
      actor: "Employer",
      detail:
        "De werkgever meldt de functie bij ADEM. Als binnen de wettelijke termijn geen geschikte kandidaat wordt voorgesteld, vraagt de werkgever het attest aan dat de aanwerving van een onderdaan van een derde land toestaat.",
    },
    {
      title: "De arbeidsovereenkomst ondertekenen",
      actor: "Both",
      detail:
        "Het contract moet in overeenstemming zijn met het Luxemburgse arbeidsrecht en mag bepalen dat het in werking treedt zodra de verblijfsmachtiging is verleend.",
    },
    {
      title: "De tijdelijke verblijfsmachtiging aanvragen",
      actor: "Employee",
      detail:
        "De werknemer dient de aanvraag in bij de Directie Immigratie vanuit het land van verblijf, met het ADEM-attest, het contract, de paspoortkopie, het uittreksel uit het strafregister en het cv.",
    },
    {
      title: "Beslissing en D-visum",
      actor: "Authority",
      detail:
        "Bij goedkeuring geeft de Directie de tijdelijke machtiging af, 90 dagen geldig om Luxemburg in te reizen. Visumplichtige onderdanen vragen vervolgens een D-visum aan.",
    },
    {
      title: "Aankomstformaliteiten",
      actor: "Employee",
      detail:
        "Binnen 3 werkdagen na aankomst doet de werknemer de aankomstverklaring bij de gemeente en ondergaat hij vervolgens het medisch onderzoek.",
    },
    {
      title: "Aanvraag van de verblijfsvergunning",
      actor: "Employee",
      detail:
        "Binnen 3 maanden na aankomst vraagt de werknemer de verblijfsvergunningskaart (titre de séjour) aan bij de Directie Immigratie en betaalt hij de vergoeding.",
    },
  ],
  employerDocs: [
    { label: "ADEM-vacaturemelding en attest dat de aanwerving van een onderdaan van een derde land toestaat" },
    { label: "Ondertekende en gedateerde arbeidsovereenkomst in overeenstemming met het Luxemburgse arbeidsrecht" },
    { label: "Bedrijfsregistratiedocumenten (RCS-uittreksel)" },
    { label: "Bewijs van een loon dat het geldende minimum of de drempel van de blauwe kaart haalt" },
  ],
  employeeDocs: [
    { label: "Aanvraagformulier voor een tijdelijke verblijfsmachtiging" },
    { label: "Volledige kopie van een geldig paspoort" },
    { label: "Geboorteakte, gelegaliseerd of geapostilleerd, met vertaling" },
    { label: "Uittreksel uit het strafregister van het land van verblijf, gelegaliseerd, met vertaling" },
    { label: "Curriculum vitae en diploma's of certificaten die relevant zijn voor de baan" },
    { label: "Medisch attest en tbc-test na aankomst" },
    { label: "Bewijs van adres in Luxemburg voor de fase van de verblijfsvergunning" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Hooggekwalificeerde werknemers met een diploma hoger onderwijs en een loon boven de drempel; geen arbeidsmarkttoets." },
    { name: "Binnen een onderneming overgeplaatste werknemer", summary: "Managers, specialisten en stagiairs die binnen een groep worden overgeplaatst." },
    { name: "Machtiging voor investeerders of zelfstandigen", summary: "Afzonderlijke procedure met een vestigingsvergunning voor de onderneming." },
  ],
  watchOuts: [
    "De tijdelijke verblijfsmachtiging moet worden verkregen vóór de binnenkomst in Luxemburg; aanvragen die vanuit het land worden ingediend, worden geweigerd behalve voor specifieke categorieën.",
    "Documenten in andere talen dan Frans, Duits of Engels vereisen een beëdigde vertaling.",
    "De eerste vergunning is beperkt tot één sector en één beroep; een wijziging vereist een nieuwe machtiging.",
  ],
};
