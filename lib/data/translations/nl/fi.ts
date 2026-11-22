import type { CountryDetails } from "../types";

export const fi: CountryDetails = {
  authorities: [
    "Finse Immigratiedienst (Maahanmuuttovirasto, Migri): beslissing over verblijf en werk, met inbegrip van de beoordeling van de beschikbaarheid van arbeidskrachten",
    "Ministerie van Economische Zaken en Werkgelegenheid en de regionale Centra voor Economische Ontwikkeling (elinvoimakeskukset): nationale knelpuntsectoren en regionaal werkvergunningenbeleid",
    "Finse ambassades en consulaten: identiteitscontrole, vingerafdrukken en D-visum",
    "Agentschap voor Digitale en Bevolkingsgegevensdiensten (lokale registerautoriteit): registratie van de woonplaats na aankomst",
  ],
  legalBasis: [
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
    "Ulkomaalaislaki (Vreemdelingenwet 301/2004), hoofdstuk 5 over verblijfsvergunningen op grond van werk",
    "Regeringsbesluit tot vaststelling van de in euro uitgedrukte loondrempel voor de verblijfsvergunning voor een werknemer, zoals voorzien in de Vreemdelingenwet",
  ],
  steps: [
    {
      title: "De route en het werkvergunningenbeleid controleren",
      actor: "Employer",
      detail:
        "Ga na dat de baan niet onder een baanspecifieke vergunning valt (specialist, Europese blauwe kaart, onderzoeker, seizoenarbeid). Controleer of het beroep op de nationale knelpuntenlijst of in het regionale werkvergunningenbeleid staat, wat de beschikbaarheidsbeoordeling overbodig maakt.",
    },
    {
      title: "Werven op de EU/EER-markt als een beoordeling nodig is",
      actor: "Employer",
      detail:
        "Publiceer de vacature ten minste twee weken op Job Market Finland en bewaar bewijs van de kandidaten en van de reden waarom zij ongeschikt waren. Dit moet zijn afgerond voordat de werknemer de aanvraag indient.",
    },
    {
      title: "De overeenkomst ondertekenen en de arbeidsvoorwaarden indienen",
      actor: "Employer",
      detail:
        "Voer de arbeidsvoorwaarden in via Enter Finland for Employers, of vul formulier TEM 0.54 in voor een papieren aanvraag, en voeg de werkgeversattesten bij. De behandeling kan niet beginnen zonder deze informatie.",
    },
    {
      title: "De aanvraag indienen en de identiteit bewijzen",
      actor: "Employee",
      detail:
        "Dien de aanvraag in via Enter Finland, betaal de vergoeding en bezoek binnen drie maanden een Finse ambassade of een Fins consulaat (of een externe dienstverlener) om de identiteit te bewijzen en vingerafdrukken af te geven. Een papieren aanvraag kan in plaats daarvan bij de missie worden ingediend.",
    },
    {
      title: "Beoordeling en beslissing door Migri",
      actor: "Authority",
      detail:
        "Migri controleert de beschikbaarheid van arbeidskrachten, de arbeidsvoorwaarden en de loondrempel, de naleving door de werkgever van zijn wettelijke verplichtingen en de algemene weigeringsgronden, en neemt daarna één beslissing waarin het gedekte beroepsgebied of de gedekte beroepsgebieden worden genoemd.",
    },
    {
      title: "Binnenkomst, verblijfsvergunningskaart en registratie",
      actor: "Employee",
      detail:
        "Na een positieve beslissing kan de werknemer met een D-visum, 100 dagen geldig, reizen voordat de kaart aankomt. Bij aankomst registreert de werknemer zijn woonplaats bij de lokale registerautoriteit als het verblijf langer dan een jaar duurt. De werkgever meldt het begin van de tewerkstelling en elke vroegtijdige beëindiging aan Migri.",
    },
  ],
  employerDocs: [
    { label: "Arbeidsvoorwaarden ingevoerd in Enter Finland for Employers of op formulier TEM 0.54", note: "Vereist voordat de behandeling begint." },
    { label: "Beschikbaarheidsverslag met bewijs van de publicatie op Job Market Finland en het resultaat van de werving", note: "Alleen wanneer het beroep buiten de knelpuntenlijst of het regionale beleid valt." },
    { label: "Attest van betaalde belastingen of attest van belastingschuld, niet ouder dan drie maanden" },
    { label: "Verzekeringsattesten voor pensioen (TyEL), ongevallen, groepslevensverzekering en werkloosheidsverzekering, niet ouder dan drie maanden" },
    { label: "Verslag over het aantal werknemers en het aandeel voltijdse en deeltijdse werknemers" },
    { label: "Ondertekende arbeidsovereenkomst waaruit een loon blijkt in overeenstemming met de collectieve arbeidsovereenkomst en de loondrempel" },
  ],
  employeeDocs: [
    { label: "Geldig paspoort, voorgelegd bij de missie, met kleurenkopieën van de gegevenspagina en alle pagina's met vermeldingen" },
    { label: "Pasfoto volgens de richtlijnen van de Finse politie, of een code voor het ophalen van een foto" },
    { label: "Bewijs van legaal verblijf in het land waar de aanvraag wordt ingediend" },
    { label: "Arbeidsovereenkomst of bindend aanbod" },
    { label: "Diploma's of certificaten wanneer de baan een kwalificatie of een recht op beroepsuitoefening vereist" },
    { label: "Salmonella-attest voor banen waarin met voedsel wordt gewerkt; tuberculose-attest voor werk met kinderen onder de schoolleeftijd" },
    { label: "Bewijs van betaling van de vergoeding" },
  ],
  alternativeRoutes: [
    { name: "Verblijfsvergunning voor een specialist", summary: "Voor afgestudeerden van het hoger onderwijs en IT-specialisten in expertfuncties. Geen beschikbaarheidsbeoordeling, eerste vergunning voor twee jaar, en een fast-track-dienst met een behandeldoel van twee weken." },
    { name: "Europese blauwe kaart", summary: "Hooggekwalificeerde werknemers met een diploma hoger onderwijs en een loon boven de drempel van de blauwe kaart; voordelen inzake mobiliteit binnen de EU." },
    { name: "Seizoenarbeid", summary: "Visum voor seizoenarbeid voor maximaal drie maanden of verblijfsvergunning voor seizoenarbeid voor maximaal negen maanden; de beschikbaarheidsbeoordeling geldt voor vergunningen van zes tot negen maanden." },
    { name: "Vergunning voor afgestudeerden en onderzoekers om werk te zoeken", summary: "Houders van een Fins diploma of een onderzoeksvergunning kunnen een vergunning voor werkzoekenden van maximaal twee jaar verkrijgen, aan te vragen binnen vijf jaar na de vorige vergunning." },
  ],
  watchOuts: [
    "De aanvraag wordt niet behandeld zolang de werknemer zijn identiteit niet bij een Finse missie heeft bewezen en de werkgever de arbeidsvoorwaarden niet heeft toegevoegd; beide stappen lopen vaak vertraging op.",
    "De vergunning is beperkt tot de beroepsgebieden die in de beslissing zijn genoemd. Werk in een ander gebied vereist een nieuwe vergunningsaanvraag; van de beschikbaarheidsbeoordeling wordt alleen afgezien als de werknemer al ten minste negen maanden op de vergunning heeft gewerkt.",
    "Aanvragen in vakgebieden met een overaanbod van arbeidskrachten in het regionale werkvergunningenbeleid worden gewoonlijk geweigerd, zelfs met een jobaanbod, en de werkgever moet zijn belasting- en verzekeringsverplichtingen zijn nagekomen.",
  ],
};
