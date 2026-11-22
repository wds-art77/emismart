import type { CountryDetails } from "../types";

export const se: CountryDetails = {
  authorities: [
    "Migrationsverket (Zweedse Migratiedienst): beslissing over de werk- en verblijfsvergunning, verblijfsvergunningskaart",
    "Vakbond van de sector: standpunt over de arbeidsvoorwaarden voordat de aanvraag wordt voltooid",
    "Zweedse ambassades en consulaten-generaal: tonen van het paspoort, gesprekken, biometrie en afhalen van de kaart",
    "Arbetsförmedlingen (Zweedse openbare arbeidsbemiddelingsdienst): Platsbanken, het gebruikelijke kanaal voor de vacaturepublicatie van 10 dagen",
    "Skatteverket (Zweedse belastingdienst): bevolkingsregistratie en persoonlijk identiteitsnummer voor verblijven van een jaar of langer",
  ],
  legalBasis: [
    "Utlänningslagen (2005:716), hoofdstuk 6 over werkvergunningen, met inbegrip van de loonvereiste in hoofdstuk 6, artikel 2",
    "Utlänningsförordningen (2006:97), met inbegrip van hoofdstuk 5, artikel 6 over beroepen die zijn vrijgesteld van de volledige loonvereiste en de regels over de behandelingstermijn",
    "Richtlijn 2011/98/EU, herzien bij Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "De vacature bekendmaken",
      actor: "Employer",
      detail:
        "De functie wordt ten minste 10 dagen bekendgemaakt, bijvoorbeeld op Platsbanken, zodat kandidaten in Zweden en de EU/EER kunnen solliciteren. Migrationsverket kan om bewijs vragen.",
    },
    {
      title: "De arbeidsovereenkomst ondertekenen en de verzekeringen regelen",
      actor: "Both",
      detail:
        "De overeenkomst moet door beide partijen zijn ondertekend voordat de aanvraag wordt ingediend. De werkgever controleert of het loon en de voorwaarden de drempel en de collectieve arbeidsovereenkomst halen, en sluit de vereiste verzekeringen af.",
    },
    {
      title: "Het dossier openen in de e-dienst en de vakbond raadplegen",
      actor: "Employer",
      detail:
        "De werkgever voert de gegevens van de werknemer en de arbeidsvoorwaarden in de e-dienst voor werkgevers in en stuurt ze vervolgens naar de betrokken vakbond, die kan reageren. Volledige informatie in deze fase is wat Migrationsverket toelaat de zaak met voorrang te behandelen.",
    },
    {
      title: "De aanvraag voltooien en de vergoeding betalen",
      actor: "Employee",
      detail:
        "De werknemer ontvangt een e-maillink, controleert of de voorwaarden overeenstemmen met het contract, voegt paspoortkopieën en eventuele verzekeringsdocumenten toe, kiest de ambassade of het consulaat voor de paspoortcontrole en betaalt de vergoeding met een kaart. De aanvraag wordt pas geregistreerd zodra dit deel is ingediend.",
    },
    {
      title: "Paspoortcontrole en biometrie",
      actor: "Employee",
      detail:
        "De meeste aanvragers verifiëren hun paspoort via de app van Migrationsverket. Anderen worden opgeroepen op de ambassade om het paspoort te tonen, een gesprek te hebben of vingerafdrukken en een foto te geven voor de verblijfsvergunningskaart als een visum nodig is om Zweden in te reizen.",
    },
    {
      title: "Onderzoek en beslissing",
      actor: "Authority",
      detail:
        "Migrationsverket kan meteen weigeren als duidelijk niet aan de vereisten is voldaan; anders onderzoekt het het dossier, vraagt het waar nodig aanvullende informatie op en beslist het. De werkgever wordt per post in kennis gesteld en de werknemer per e-mail of brief. De werknemer mag niet naar Zweden reizen vóór de beslissing.",
    },
    {
      title: "Verblijfsvergunningskaart, aankomst en registratie",
      actor: "Employee",
      detail:
        "De kaart wordt afgehaald op de ambassade of naar het Zweedse adres gestuurd en moet bij binnenkomst samen met het paspoort worden getoond. Het werk moet beginnen binnen 4 maanden na de eerste dag van de vergunning. Verblijven van een jaar of langer worden geregistreerd bij Skatteverket om een persoonlijk identiteitsnummer te verkrijgen.",
    },
  ],
  employerDocs: [
    { label: "Tewerkstellingsgegevens ingevoerd in de e-dienst voor werkgevers: identiteit van de werknemer, functie, loon, arbeidsuren en duur" },
    { label: "Arbeidsovereenkomst, door beide partijen ondertekend vóór de aanvraag" },
    { label: "Standpunt van de vakbond, of bewijs dat de vakbond de kans heeft gekregen om te reageren" },
    { label: "Bewijs dat de vacature ten minste 10 dagen in Zweden en de EU/EER is bekendgemaakt" },
    { label: "Bevestiging van een ziekte-, levens-, arbeidsongevallen- en bedrijfspensioenverzekering die vanaf het begin van de tewerkstelling geldt" },
    { label: "Voor sectoren met strengere vereisten (schoonmaak, horeca, bouw, handel, landbouw, werkplaatsen, uitzendarbeid): bewijs van het vermogen om het loon gedurende ten minste 3 maanden te betalen", note: "Niet vereist voor gemeentelijke, regionale of staatswerkgevers" },
  ],
  employeeDocs: [
    { label: "Kopieën van de paspoortpagina's met identiteit, geldigheid en eventuele vergunningen" },
    { label: "Kopie van de ondertekende arbeidsovereenkomst" },
    { label: "Volledige ziektekostenverzekering die het hele verblijf dekt, voor een tewerkstelling van een jaar of minder" },
    { label: "Volmacht (formulier 107011) wanneer een vertegenwoordiger indient" },
    { label: "Voor meereizende gezinsleden: bewijs van de verwantschap, geboorteakten van de kinderen en bewijs van de onderhoudsvereiste" },
    { label: "Gecertificeerde vertalingen in het Zweeds of Engels, met kopieën van de originelen" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart (EU-blåkort)", summary: "Hoger onderwijs van ten minste 180 studiepunten of 5 jaar relevante ervaring, een contract van ten minste 6 maanden en een loon van ten minste 1,25 keer het gemiddelde Zweedse loon, jaarlijks vastgesteld door Migrationsverket. Geldig tussen 9 maanden en 4 jaar." },
    { name: "Versnelde procedure voor hooggekwalificeerde werknemers", summary: "Leidinggevende en academische beroepen (SSYK-groepen 1 tot 3) buiten de sectoren met strengere vereisten krijgen een beslissing binnen 30 dagen wanneer de aanvraag volledig is." },
    { name: "ICT-vergunning", summary: "Leidinggevenden, specialisten en stagiairs die binnen een groep worden overgeplaatst, behandeld in de categorie hooggekwalificeerden." },
    { name: "Aanvraag vanuit Zweden na een bezoek aan een werkgever", summary: "Een bezoeker die een werkgever is komen ontmoeten in een beroep met grote vraag kan mogelijk aanvragen zonder Zweden te verlaten. De voorwaarden zijn strikt; controleer de pagina van Migrationsverket voor deze groep." },
  ],
  watchOuts: [
    "Onvolledige dossiers verdubbelen de wachttijd ongeveer. Alles wat de werkgever invoert, moet overeenstemmen met het ondertekende contract, en de werknemer moet alle documenten in één keer toevoegen.",
    "De loondrempel wordt getoetst aan het mediaanloon dat geldt op het moment van de beslissing, zodat een aanbod op het minimum tekort kan vallen als de drempel tijdens de behandeling stijgt.",
    "De vergunning is specifiek voor de werkgever en de taken. Een van beide veranderen zonder nieuwe aanvraag, of niet binnen 4 maanden beginnen werken, kan tot intrekking leiden.",
  ],
};
