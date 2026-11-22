import type { CountryDetails } from "../types";

export const bg: CountryDetails = {
  authorities: [
    "Дирекция Миграция, Министерство на вътрешните работи (Directie Migratie, Ministerie van Binnenlandse Zaken): ontvangt het dossier en geeft de vergunning af of weigert die",
    "Агенция по заетостта (Arbeidsagentschap): schriftelijk advies van de uitvoerend directeur over de toegang tot de arbeidsmarkt",
    "Държавна агенция Национална сигурност (Staatsagentschap voor Nationale Veiligheid): veiligheidsadvies over elke aanvraag",
    "Ministerie van Buitenlandse Zaken, Directie Consulaire Betrekkingen en Bulgaarse ambassades: visum type D",
    "Изпълнителна агенция Главна инспекция по труда (Algemene Arbeidsinspectie): kennisgeving binnen 7 dagen na het begin van het werk en handhaving",
  ],
  legalBasis: [
    "Закон за чужденците в Република България (Wet op de vreemdelingen in de Republiek Bulgarije), artikel 24i en het uitvoeringsreglement (ППЗЧРБ)",
    "Закон за трудовата миграция и трудовата мобилност (Wet op de arbeidsmigratie en arbeidsmobiliteit), hoofdstuk twee, en de uitvoeringsregels ervan (ППЗТМТМ)",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "De vacature bekendmaken en de motivering voorbereiden",
      actor: "Employer",
      detail:
        "De werkgever publiceert de vacature in lokale en nationale media en online, ook bij het lokale arbeidsbureau, gedurende de in de uitvoeringsregels vastgestelde periode, en schrijft daarna een motivering waarom een onderdaan van een derde land nodig is, met kopieën van de advertenties als bijlage. De werkgever controleert ook of de personeelslimiet van 20 procent (of 35 procent) wordt nageleefd.",
    },
    {
      title: "De overeenkomst van bepaalde duur ondertekenen en het dossier indienen bij de Directie Migratie",
      actor: "Employer",
      detail:
        "De werkgever ondertekent een arbeidsovereenkomst van bepaalde duur met een NKPD-beroepscode, die ingaat op de datum waarop de werknemer het verblijfsdocument ontvangt, en dient daarna het aanvraagformulier (bijlage 3a) met de documenten van werknemer en werkgever in bij de Directie Migratie of een regionale migratie-eenheid. Als documenten ontbreken, stelt de Directie een termijn van 7 dagen om het dossier aan te vullen, waarna de procedure wordt beëindigd.",
    },
    {
      title: "Adviezen van het Arbeidsagentschap en de veiligheidsdienst",
      actor: "Authority",
      detail:
        "Binnen 14 dagen na indiening stuurt de Directie Migratie het dossier elektronisch naar het Arbeidsagentschap en naar het Staatsagentschap voor Nationale Veiligheid. Het Arbeidsagentschap verzamelt fiscale en arbeidsinspectiegegevens over de werkgever en stuurt het schriftelijke advies van zijn uitvoerend directeur binnen 15 dagen na ontvangst van het dossier; de veiligheidsdienst heeft 14 dagen.",
    },
    {
      title: "Kennisgeving van de toegang tot de arbeidsmarkt",
      actor: "Authority",
      detail:
        "Binnen 3 dagen na ontvangst van positieve adviezen brengt de Directie Migratie de werkgever elektronisch op de hoogte dat de werknemer toegang tot de arbeidsmarkt kan krijgen, met kopie aan de Directie Consulaire Betrekkingen van het Ministerie van Buitenlandse Zaken. De werkgever informeert de werknemer.",
    },
    {
      title: "Aanvraag van het visum type D",
      actor: "Employee",
      detail:
        "Binnen 20 dagen na de kennisgeving moet de werknemer een visum voor langdurig verblijf type D aanvragen bij de Bulgaarse ambassade of het Bulgaarse consulaat, met bewijs van huisvesting en, voor buitenlands hoger onderwijs, waar relevant het erkenningscertificaat van het Nationaal Centrum voor Informatie en Documentatie. Een weigering wordt teruggemeld aan de Directie Migratie.",
    },
    {
      title: "Gezamenlijke verschijning binnen 14 dagen na binnenkomst en afgifte van de kaart",
      actor: "Both",
      detail:
        "Binnen 14 dagen na binnenkomst in Bulgarije met het D-visum verschijnen de werkgever of zijn vertegenwoordiger en de werknemer samen bij de Directie Migratie of de regionale eenheid, met een kopie van de visumpagina en een ziektekostenverzekering die ten minste 3 maanden geldig is. De Directie geeft de vergunning binnen 3 dagen af of weigert die, en daarna volgt de verblijfskaart met de vermelding gecombineerde verblijfs- en werkvergunning. Het missen van de termijn van 14 dagen beëindigt de procedure.",
    },
    {
      title: "Verplichtingen na aankomst",
      actor: "Employer",
      detail:
        "De werknemer registreert het adres binnen de wettelijke termijn. De werkgever brengt de Algemene Arbeidsinspectie binnen 7 dagen na het werkelijke begin van het werk op de hoogte en moet elke wijziging die de toelatingscriteria beïnvloedt of de beëindiging van de tewerkstelling, die het verblijfsrecht doet eindigen, binnen 3 dagen melden aan de Directie Migratie.",
    },
  ],
  employerDocs: [
    { label: "Aanvraagformulier (bijlage 3a bij het uitvoeringsreglement van de Wet op de vreemdelingen), ondertekend door de werkgever, met vermelding van een e-mailadres" },
    { label: "Schriftelijke motivering van de noodzaak om een onderdaan van een derde land aan te werven, met kopieën van de vacatureadvertenties in lokale en nationale media en online" },
    { label: "Verklaring met de lijst van reeds tewerkgestelde onderdanen van derde landen, met namen, geboortedata, nationaliteit en verblijfsgrond" },
    { label: "Verklaring van het gemiddelde maandelijkse aantal Bulgaarse, EU-, EER- en Zwitserse werknemers over de voorgaande 12 maanden" },
    { label: "Verklaring dat loon en arbeidsvoorwaarden niet minder gunstig zijn dan voor Bulgaarse burgers (sjabloon van het Arbeidsagentschap), alleen bij een eerste aanvraag" },
    { label: "Gecertificeerde kopie van de ondertekende arbeidsovereenkomst van bepaalde duur met NKPD-code, die ingaat bij afgifte van het verblijfsdocument, plus de functiebeschrijving wanneer die deel uitmaakt van de overeenkomst" },
  ],
  employeeDocs: [
    { label: "Kopie van de paspoortpagina's met foto en persoonsgegevens" },
    { label: "Uittreksel uit het strafregister van het land van nationaliteit of gewone verblijfplaats, alleen bij een eerste aanvraag" },
    { label: "Bewijs van verzekerde huisvesting in Bulgarije" },
    { label: "Documenten over opleiding, specialisatie, kwalificatie en beroepservaring, gelegaliseerd en met een gecertificeerde Bulgaarse vertaling, in overeenstemming met de vereisten van de bekendgemaakte functie" },
    { label: "Certificaat van het Nationaal Centrum voor Informatie en Documentatie (NACID) tot erkenning van buitenlands hoger onderwijs, indien van toepassing" },
    { label: "Bewijs van het recht om een gereglementeerd beroep uit te oefenen, of de voor het beroep vereiste licentie of vergunning, indien van toepassing" },
    { label: "Ziektekostenverzekering die in Bulgarije ten minste 3 maanden geldig is, tot de vergunning is afgegeven, wanneer de werknemer niet onder de Bulgaarse ziektekostenverzekering valt" },
    { label: "Kopie van de paspoortpagina met het visum type D, voorgelegd bij de gezamenlijke verschijning na binnenkomst" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart (Синя карта на ЕС)", summary: "Hooggekwalificeerde werknemers met een hogeronderwijskwalificatie van ten minste 3 jaar, of kwalificerende beroepservaring, en een brutoloon boven de wettelijk vastgestelde drempel als veelvoud van het nationale gemiddelde loon. Het Arbeidsagentschap geeft zijn advies binnen 10 dagen, de hele procedure is beperkt tot 3 maanden en de kaart wordt afgegeven voor maximaal 5 jaar. Geen arbeidsmarkttoets of personeelsquotum." },
    { name: "Vergunning voor overplaatsing binnen een onderneming", summary: "Leidinggevenden, specialisten en stagiair-werknemers die binnen een groep van ondernemingen worden overgeplaatst, op grond van artikel 33p van de Wet op de vreemdelingen." },
    { name: "Vergunning voor seizoenarbeiders", summary: "Korte seizoenarbeid tot 90 dagen op basis van een registratie, of een vergunning voor seizoenarbeiders voor langere periodes, op grond van artikel 24k van de Wet op de vreemdelingen." },
    { name: "Houder van een Europese blauwe kaart uit een andere lidstaat", summary: "Na 12 maanden in de eerste lidstaat (6 maanden in een tweede) mag de houder naar Bulgarije verhuizen en binnen een maand na binnenkomst een aanvraag indienen, met een beslissing binnen 30 dagen." },
  ],
  watchOuts: [
    "De gezamenlijke verschijning binnen 14 dagen na binnenkomst is strikt: als werkgever en werknemer de visumkopie en de ziektekostenverzekering niet tijdig voorleggen, beëindigt de Directie Migratie de procedure en begint het dossier opnieuw.",
    "Het personeelsplafond van 20 procent (35 procent voor kmo's) wordt over de voorgaande 12 maanden gecontroleerd en blokkeert de goedkeuring voor werkgevers met veel personeel uit derde landen, tenzij een vrijstelling of een ministerieel besluit op grond van de Wet op de arbeidsmigratie van toepassing is.",
    "Buitenlandse diploma's en strafregisteruittreksels moeten worden gelegaliseerd en vertaald door een notaris of de consulaire directie, en buitenlands hoger onderwijs heeft NACID-erkenning nodig; voor onvolledige dossiers geldt slechts een termijn van 7 dagen om ze aan te vullen.",
  ],
};
