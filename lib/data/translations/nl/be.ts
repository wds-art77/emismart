import type { CountryDetails } from "../types";

export const be: CountryDetails = {
  authorities: [
    "Vlaanderen: Departement Werk en Sociale Economie, via het platform Working in Belgium",
    "Wallonië: Service public de Wallonie, Emploi",
    "Brussels Hoofdstedelijk Gewest: Brussel Economie en Werkgelegenheid (Bruxelles Economie et Emploi)",
    "Duitstalige Gemeenschap: Ministerium der Deutschsprachigen Gemeenschaft",
    "Federaal: Dienst Vreemdelingenzaken (Office des étrangers) voor de verblijfsbeslissing",
  ],
  legalBasis: [
    "Richtlijn 2011/98/EU (richtlijn gecombineerde vergunning), herschikt bij Richtlijn (EU) 2024/1233",
    "Samenwerkingsakkoord van 2 februari 2018 tussen de Federale Staat, de Gewesten en de Gemeenschappen",
    "Wet van 15 december 1980 betreffende de toegang tot het grondgebied, het verblijf, de vestiging en de verwijdering van vreemdelingen",
    "Gewestelijke decreten, ordonnanties en besluiten over de tewerkstelling van buitenlandse werknemers",
  ],
  steps: [
    {
      title: "Het bevoegde Gewest kiezen",
      actor: "Employer",
      detail:
        "Het Gewest waar de werknemer hoofdzakelijk zal werken, bepaalt welke overheid het dossier ontvangt. Vlaanderen, Wallonië, Brussel en de Duitstalige Gemeenschap hebben elk hun eigen platform en categorielijsten.",
    },
    {
      title: "Het gezamenlijke dossier samenstellen",
      actor: "Both",
      detail:
        "De werkgever verzamelt zijn eigen formulieren en de persoonlijke documenten van de werknemer. Alles wordt samen ingediend in één elektronische indiening.",
    },
    {
      title: "Indienen bij het Gewest",
      actor: "Employer",
      detail:
        "De werkgever of de gemandateerde vertegenwoordiger dient de aanvraag online in. Het Gewest controleert de ontvankelijkheid en bevestigt dat het dossier volledig is.",
    },
    {
      title: "Parallel onderzoek",
      actor: "Authority",
      detail:
        "Het Gewest beoordeelt het luik werk. De Dienst Vreemdelingenzaken beoordeelt het luik verblijf (paspoort, strafregister, medisch attest, openbare orde). Beide moeten goedkeuren.",
    },
    {
      title: "Beslissing en bijlage 46",
      actor: "Authority",
      detail:
        "Bij een positieve beslissing ontvangt de werknemer bijlage 46. Als de werknemer in het buitenland is, gebruikt hij die om een D-visum te verkrijgen bij de Belgische ambassade of het Belgische consulaat.",
    },
    {
      title: "Aankomst en inschrijving",
      actor: "Employee",
      detail:
        "Binnen 8 dagen na aankomst schrijft de werknemer zich in bij de gemeente (commune / gemeente), die de elektronische kaart van de gecombineerde vergunning (A-kaart) afgeeft.",
    },
  ],
  employerDocs: [
    { label: "Gewestelijk aanvraagformulier, ondertekend door de werkgever" },
    { label: "Ondertekende arbeidsovereenkomst conform het Belgische recht" },
    { label: "Bewijs van inschrijving van de onderneming (KBO/BCE-nummer)" },
    { label: "Bewijs dat het loon de toepasselijke gewestelijke drempel bereikt", note: "Relevant voor de categorieën hooggeschoolden en leidinggevenden." },
    { label: "Mandaat wanneer een vertegenwoordiger namens de werkgever indient" },
  ],
  employeeDocs: [
    { label: "Geldig paspoort, volledige kopie van alle pagina's" },
    { label: "Medisch attest van een door de Belgische ambassade erkende arts", note: "Vereist wanneer de werknemer in het buitenland is." },
    { label: "Uittreksel uit het strafregister, gelegaliseerd of geapostilleerd, met beëdigde vertaling", note: "Voor werknemers van 18 jaar en ouder." },
    { label: "Diploma's of kwalificaties, gelegaliseerd, met vertaling", note: "Vereist voor de categorieën hooggeschoolden, onderzoekers en gelijkaardige categorieën." },
    { label: "Bewijs van betaling van de federale bijdrage (redevance) aan de Dienst Vreemdelingenzaken" },
    { label: "Pasfoto's die aan de ICAO-normen voldoen" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Voor universitair afgestudeerden met een overeenkomst van ten minste 1 jaar boven de loondrempel van de blauwe kaart. Ingediend via hetzelfde kanaal als de gecombineerde vergunning." },
    { name: "Overplaatsing binnen een onderneming (ICT)", summary: "Voor leidinggevenden, specialisten en stagiairs die worden gedetacheerd vanuit een niet-EU-entiteit van dezelfde groep." },
    { name: "Beroepskaart", summary: "Voor zelfstandige activiteiten. Afzonderlijke gewestelijke procedure, geen gecombineerde vergunning." },
  ],
  watchOuts: [
    "Elk Gewest past zijn eigen loondrempels en knelpuntenlijsten toe. Een dossier dat voor Vlaanderen is voorbereid, is niet automatisch geldig voor Brussel.",
    "De termijn van 4 maanden begint pas te lopen zodra het Gewest het dossier ontvankelijk verklaart. Onvolledige dossiers doen de procedure opnieuw beginnen.",
    "Een verandering van werkgever vereist een nieuwe aanvraag van een gecombineerde vergunning door de nieuwe werkgever.",
  ],
};
