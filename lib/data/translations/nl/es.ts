import type { CountryDetails } from "../types";

export const es: CountryDetails = {
  authorities: [
    "Oficina de Extranjería van de provincie van de werkplek (Ministerio de Inclusión, Seguridad Social y Migraciones): beslissing over de machtiging",
    "Servicio Público de Empleo Estatal (SEPE) en regionale openbare arbeidsbemiddelingsdiensten: catalogus van knelpuntberoepen en vacaturebeheer",
    "Spaanse ambassade of consulaat (Ministerio de Asuntos Exteriores, Unión Europea y Cooperación): verblijfs- en werkvisum",
    "Tesorería General de la Seguridad Social: inschrijving van de werknemer, die de machtiging activeert",
    "Policía Nacional of Oficina de Extranjería: afgifte van de TIE",
  ],
  legalBasis: [
    "Ley Orgánica 4/2000, de 11 de enero, sobre derechos y libertades de los extranjeros en España y su integración social (artikelen 36 tot 40)",
    "Reglamento de Extranjería, goedgekeurd bij Real Decreto 1155/2024, de 19 de noviembre (artikelen 72 tot 81), van kracht sinds 20 mei 2025",
    "Richtlijn 2011/98/EU, herzien bij Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "De nationale werkgelegenheidssituatie controleren",
      actor: "Employer",
      detail:
        "De werkgever gaat na of het beroep in de huidige catalogus van knelpuntberoepen voor de regio staat, of een vrijstelling op grond van artikel 40 van de Ley Orgánica 4/2000 van toepassing is, of of de vacature eerst bij de openbare arbeidsbemiddelingsdienst moet worden geregistreerd om het attest van onvoldoende kandidaten te verkrijgen.",
    },
    {
      title: "De arbeidsovereenkomst ondertekenen",
      actor: "Both",
      detail:
        "De overeenkomst wordt door werkgever en werknemer ondertekend op het officiële model, met voorwaarden in overeenstemming met de toepasselijke collectieve arbeidsovereenkomst en een begindatum die afhangt van het van kracht worden van de machtiging. Het loon voor deeltijds werk moet over het jaar nog steeds het voltijdse minimumloon bereiken.",
    },
    {
      title: "De aanvraag indienen bij de Oficina de Extranjería",
      actor: "Employer",
      detail:
        "De werkgever dient het officiële formulier in met de overeenkomst, bewijs van economische middelen, een kopie van het paspoort van de werknemer, bewijs van kwalificaties en, waar nodig, het attest van de arbeidsbemiddelingsdienst, bij de Oficina de Extranjería van de provincie van de werkplek. Onvolledige dossiers krijgen 10 dagen om te worden aangevuld.",
    },
    {
      title: "Beslissing en doorzending naar het consulaat",
      actor: "Authority",
      detail:
        "Het kantoor controleert de belastingen, de Sociale Zekerheid, het strafregister en de politierapporten en beslist binnen 3 maanden. Een gunstige beslissing wordt in het systeem geregistreerd zodat het consulaat van de verblijfplaats van de werknemer haar kan zien.",
    },
    {
      title: "Het verblijfs- en werkvisum aanvragen",
      actor: "Employee",
      detail:
        "Binnen 1 maand nadat de werkgever in kennis is gesteld, dient de werknemer persoonlijk in bij het consulaat met het paspoort, de machtiging, de afgestempelde overeenkomst, een uittreksel uit het strafregister en een medisch attest. Het consulaat beslist binnen 1 maand en de werknemer haalt het visum persoonlijk af.",
    },
    {
      title: "Spanje inreizen en inschrijven bij de Sociale Zekerheid",
      actor: "Both",
      detail:
        "De werknemer reist Spanje in met het visum. De machtiging wordt pas van kracht zodra de werkgever de werknemer inschrijft bij de Sociale Zekerheid, wat binnen 3 maanden na de legale binnenkomst moet gebeuren.",
    },
    {
      title: "De TIE aanvragen",
      actor: "Employee",
      detail:
        "Binnen 1 maand na de inschrijving bij de Sociale Zekerheid vraagt de werknemer persoonlijk de identiteitskaart voor vreemdelingen (tarjeta de identidad de extranjero) aan bij de Oficina de Extranjería of het politiebureau.",
    },
  ],
  employerDocs: [
    { label: "Officieel aanvraagformulier voor de eerste verblijfs- en werkmachtiging" },
    { label: "Fiscaal identificatienummer en, voor vennootschappen, de openbare akte die de vertegenwoordigingsbevoegdheid van de ondertekenaar aantoont" },
    { label: "Kopie van de arbeidsovereenkomst op het officiële model, door beide partijen ondertekend" },
    { label: "Bewijs van economische, materiële of personele middelen om het bedrijfsproject en de contractuele verplichtingen na te komen", note: "Natuurlijke personen tonen ook de aangifte in de inkomstenbelasting van het voorgaande jaar of machtigen een gegevenscontrole." },
    { label: "Attest van de openbare arbeidsbemiddelingsdienst van onvoldoende kandidaten, of bewijs dat het beroep in de knelpuntcatalogus staat of vrijgesteld is" },
    { label: "Bewijs dat de belasting- en socialezekerheidsverplichtingen zijn voldaan, meestal door het kantoor geverifieerd" },
  ],
  employeeDocs: [
    { label: "Volledige kopie van een geldig paspoort of reisdocument" },
    { label: "Bewijs van opleiding en, wanneer het beroep gereglementeerd is, de wettelijk vereiste beroepskwalificatie" },
    { label: "Aanvraagformulier voor een nationaal visum, ondertekend door de werknemer" },
    { label: "Uittreksel uit het strafregister van elk land van verblijf in de laatste 5 jaar, gelegaliseerd of geapostilleerd, met beëdigde vertaling in het Spaans" },
    { label: "Medisch attest, afgegeven in de laatste 3 maanden, dat bevestigt dat er geen ziekte met ernstige gevolgen voor de volksgezondheid is" },
    { label: "Recente pasfoto" },
    { label: "Bewijs van legaal verblijf in het consulaire district waar het visum wordt aangevraagd" },
    { label: "Betaling van de visumvergoeding en, later, van de verblijfs- en werkvergoedingen (modelo 790)", note: "De vergoeding voor de eerste verblijfsmachtiging wordt door de werknemer betaald en die voor de werkmachtiging door de werkgever; de bedragen veranderen jaarlijks." },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart (Tarjeta azul-UE)", summary: "Hooggekwalificeerde werknemers met een diploma hoger onderwijs of gelijkwaardige ervaring en een loon boven de bij decreet vastgestelde drempel. Geregeld in het Reglamento op grond van Richtlijn (EU) 2021/1883, zonder toets van de nationale werkgelegenheidssituatie." },
    { name: "Hooggekwalificeerde professional en ICT onder Ley 14/2013", summary: "Versnelde verblijfsmachtigingen, behandeld door de Unidad de Grandes Empresas y Colectivos Estratégicos, voor hooggekwalificeerd personeel, binnen een onderneming overgeplaatste personen, onderzoekers en investeerders, met kortere beslistermijnen." },
    { name: "Visum voor werkzoekenden", summary: "Een visum om in Spanje werk te zoeken, waarna de toegang tot de machtiging voor werk in loondienst de specifieke regels van het Reglamento voor visumhouders volgt." },
    { name: "Collectief beheer van aanwerving in het land van herkomst (GECCO)", summary: "Jaarlijks ministerieel besluit dat werkgevers toelaat groepen werknemers in het buitenland aan te werven, vaak voor seizoensarbeid, via een vereenvoudigde procedure." },
  ],
  watchOuts: [
    "Stilzwijgen betekent weigering: als de Oficina de Extranjería binnen 3 maanden geen beslissing heeft meegedeeld, wordt de aanvraag als afgewezen beschouwd en is de enige weg vooruit een beroep of een nieuwe indiening.",
    "De machtiging heeft geen effect zolang de werknemer niet binnen 3 maanden na binnenkomst bij de Sociale Zekerheid is ingeschreven. Het missen van die termijn maakt de hele procedure ongedaan.",
    "De eerste machtiging is gebonden aan één autonome gemeenschap en één beroep. Een verandering van werkgever is pas mogelijk na 3 maanden in hetzelfde beroep, of eerder bij een ernstige tekortkoming van de werkgever.",
  ],
};
