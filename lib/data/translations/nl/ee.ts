import type { CountryDetails } from "../types";

export const ee: CountryDetails = {
  authorities: [
    "Politie- en Grenswachtdienst (Politsei- ja Piirivalveamet, PPA): beslissing over de verblijfsvergunning en afgifte van de verblijfskaart",
    "Ests Werkloosheidsverzekeringsfonds (Eesti Töötukassa): toestemming om de functie met een buitenlandse onderdaan in te vullen",
    "Estse ambassades en consulaten: ontvangst van aanvragen, biometrie en D-visa",
    "Ministerie van Binnenlandse Zaken: immigratiebeleid en het jaarlijkse quotum vastgesteld bij regeringsverordening",
  ],
  legalBasis: [
    "Välismaalaste seadus (Vreemdelingenwet, vertaald als Foreign Nationals Act), in het bijzonder de artikelen 176 tot 181 over de verblijfsvergunning voor tewerkstelling en de artikelen 113 tot 115 over het immigratiequotum",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
    "Verordening van de Regering van de Republiek tot vaststelling van het jaarlijkse immigratiequotum",
  ],
  steps: [
    {
      title: "Vrijstellingen, looncriterium en quotum controleren",
      actor: "Employer",
      detail:
        "Ga na of de baan in een categorie valt die is vrijgesteld van de toestemming van Töötukassa, het looncriterium of het immigratiequotum, en of het aangeboden loon het Estse gemiddelde brutoloon bereikt zoals laatst gepubliceerd door Statistics Estonia.",
    },
    {
      title: "De toestemming van Töötukassa verkrijgen",
      actor: "Employer",
      detail:
        "Dien de aanvraag in bij het regionale kantoor van Töötukassa voor het geregistreerde adres van de onderneming, per digitaal ondertekende e-mail of op papier. Het Fonds beslist binnen zeven werkdagen en de toestemming is zes maanden geldig.",
    },
    {
      title: "De werkgeversuitnodiging indienen bij de PPA",
      actor: "Employer",
      detail:
        "De werkgever of zijn gemachtigde vertegenwoordiger stuurt de ondertekende uitnodiging, met de toestemming van Töötukassa, per e-mail of post naar de PPA vóór of op het moment dat de werknemer de aanvraag indient.",
    },
    {
      title: "De aanvraag indienen met biometrie",
      actor: "Employee",
      detail:
        "Maak een afspraak en dien persoonlijk in bij een Estse ambassade of een Ests consulaat, of bij een servicekantoor van de PPA als u legaal in Estland bent. Vingerafdrukken worden afgenomen tenzij ze in de laatste zes jaar zijn afgegeven. Betaal de staatsvergoeding.",
    },
    {
      title: "Onderzoek en beslissing",
      actor: "Authority",
      detail:
        "De PPA controleert de voorwaarden, de betrouwbaarheid van de werkgever en het quotum, kan aanvullend bewijs vragen en beslist binnen 90 dagen na aanvaarding van een volledige aanvraag. De verblijfskaart volgt binnen 30 dagen.",
    },
    {
      title: "Aankomst, afhalen van de kaart en registratie van de woonplaats",
      actor: "Employee",
      detail:
        "Haal de verblijfskaart af bij de missie of het servicekantoor dat in de aanvraag is genoemd. Registreer de woonplaats in het Bevolkingsregister binnen een maand na aankomst. De werkgever moet wijzigingen in de arbeidsvoorwaarden en het einde van de overeenkomst melden.",
    },
  ],
  employerDocs: [
    { label: "Toestemming van het Estse Werkloosheidsverzekeringsfonds om de functie met een buitenlandse onderdaan in te vullen", note: "Tenzij de baan is vrijgesteld op grond van artikel 181 van de Vreemdelingenwet." },
    { label: "Werkgeversuitnodiging, ondertekend door de werkgever of zijn gemachtigde vertegenwoordiger en verzonden naar de PPA" },
    { label: "Arbeidsovereenkomst of bindend aanbod waaruit een loon blijkt dat ten minste gelijk is aan het Estse gemiddelde brutoloon" },
    { label: "Bewijs dat de werknemer voldoet aan de kwalificatie- en vaardigheidsvereisten van de functie" },
    { label: "Inschrijving van de werkgever in het Estse handelsregister en afwezigheid van belastingachterstanden" },
  ],
  employeeDocs: [
    { label: "Aanvraagformulier voor een tijdelijke verblijfsvergunning en het formulier over naaste verwanten en gezinsleden" },
    { label: "Geldig identiteitsdocument (paspoort)" },
    { label: "Eén digitale kleurenfoto" },
    { label: "Documenten waaruit legaal inkomen blijkt voor de zes maanden vóór de aanvraag" },
    { label: "Uittreksel uit het strafregister van elk land waar de werknemer in de laatste drie jaar ten minste drie maanden heeft verbleven, afgegeven in de laatste zes maanden", note: "Vereist vanaf 14 jaar." },
    { label: "Bewijs van betaling van de staatsvergoeding" },
    { label: "Ziektekostenverzekeringsovereenkomst wanneer de Vreemdelingenwet die voor de vergunninghouder vereist" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Diploma hoger onderwijs of vijf jaar ervaring, een overeenkomst van ten minste een jaar en een loon van 1,5 keer het gemiddelde loon (1,24 keer voor opgesomde beroepen). Toestemming van Töötukassa in de regel nog steeds nodig, met vrijstellingen." },
    { name: "Topspecialist", summary: "Loon van ten minste 1,5 keer het Estse gemiddelde brutoloon; vrijgesteld van de toestemming van Töötukassa en van het immigratiequotum." },
    { name: "Werknemer van een start-up", summary: "Tewerkstelling bij een door het deskundigencomité erkende start-up; vrijgesteld van het looncriterium, de toestemming van Töötukassa en het quotum." },
    { name: "Registratie van kortdurende tewerkstelling", summary: "De werkgever registreert werk van maximaal 365 dagen binnen 455 dagen bij de PPA; geen verblijfsvergunning, geen quotum en geen toestemming van Töötukassa, maar het looncriterium is van toepassing." },
  ],
  watchOuts: [
    "Het immigratiequotum van 0,1 procent van de bevolking is in de loop van het jaar vaak opgebruikt; aanvragen buiten de vrijgestelde categorieën worden geweigerd zodra het vol is.",
    "De toestemming van Töötukassa vervalt zes maanden na afgifte en dekt een specifieke functie; een andere functie of een te late aanvraag betekent opnieuw beginnen.",
    "De vergunning is gebonden aan de werkgever. Sinds 22 mei 2026 moet een nieuwe werkgever de verandering van tewerkstelling bij de PPA registreren voordat de werknemer begint, en werkloosheid wordt slechts drie maanden getolereerd (zes maanden na twee jaar op de vergunning).",
  ],
};
