import type { CountryDetails } from "../types";

export const gr: CountryDetails = {
  authorities: [
    "Directie Vreemdelingen en Migratie van de bevoegde Gedecentraliseerde Administratie (Αποκεντρωμένη Διοίκηση): goedkeuring van de uitnodiging van de werkgever",
    "Ministerie van Migratie en Asiel (Υπουργείο Μετανάστευσης και Ασύλου): elektronisch platform en verblijfsvergunningen",
    "Griekse ambassade of Grieks consulaat (Ministerie van Buitenlandse Zaken): nationaal visum voor tewerkstelling",
    "Ministerie van Arbeid en Sociale Zekerheid, met de Economische en Sociale Raad en de Openbare Dienst voor Arbeidsbemiddeling (DYPA): advies over het jaarlijkse maximumaantal plaatsen",
    "e-EFKA: registratie voor sociale zekerheid en ziektekostenverzekering",
  ],
  legalBasis: [
    "Wet 5038/2023, Migratiewetboek (Κώδικας Μετανάστευσης), met name de artikelen 13, 26, 27 en 61, zoals gewijzigd, onder meer bij Wet 5275/2026",
    "Gezamenlijk Ministerieel Besluit 7/95931/2024 (Staatsblad B 1807) tot vaststelling van de bewijsstukken voor visa en verblijfsvergunningen",
    "Circulaires van het Ministerie van Migratie en Asiel over de toepassing van Wet 5038/2023 en over de elektronische indiening van werkgeversverzoeken",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "De beschikbare plaatsen en de contractvoorwaarden controleren",
      actor: "Employer",
      detail:
        "De werkgever bevestigt dat de specialiteit en de regio onder het huidige besluit over het maximumaantal plaatsen vallen en bereidt een voltijdse arbeidsovereenkomst van ten minste 1 jaar voor met een loon dat ten minste gelijk is aan het maandloon van een ongeschoolde werknemer.",
    },
    {
      title: "Het verzoek om goedkeuring van de tewerkstelling (metaklisi) indienen",
      actor: "Employer",
      detail:
        "Via de elektronische diensten van het Ministerie dient de werkgever het verzoek in met vermelding van het aantal plaatsen, de gegevens en nationaliteit van de werknemer, de specialiteit en de periode van tewerkstelling, laadt hij het contract, de paspoortkopie en de fiscale documenten op en betaalt hij de vergoeding per werknemer.",
    },
    {
      title: "Goedkeuring door de Gedecentraliseerde Administratie",
      actor: "Authority",
      detail:
        "De Directie Vreemdelingen en Migratie controleert of het dossier volledig is, of de werkgever aan de inkomensdrempels voldoet en of de plaatsen niet zijn uitgeput, en geeft vervolgens het goedkeuringsbesluit af, dat samen met het ondertekende contract per e-mail naar het bevoegde Griekse consulaat wordt gestuurd.",
    },
    {
      title: "Nationaal visum bij het consulaat",
      actor: "Employee",
      detail:
        "Het consulaat roept de werknemer op, die persoonlijk verschijnt om de arbeidsovereenkomst te ondertekenen en het nationale visum voor tewerkstelling ontvangt, onder voorbehoud van de algemene visumregels en een controle van het strafregister.",
    },
    {
      title: "Online aanvraag van de E.4-verblijfsvergunning",
      actor: "Employee",
      detail:
        "Na binnenkomst en vóór het verstrijken van het visum dient de werknemer de aanvraag in op het platform van het Ministerie met de kopie van paspoort en visum, het contract, de aanwervingsmelding, het bewijs van aanvraag van een volledige ziektekostenverzekering en een foto, en betaalt hij de vergunningsvergoeding. Er wordt een bewijs van indiening afgegeven.",
    },
    {
      title: "Biometrie, beslissing en kaart",
      actor: "Authority",
      detail:
        "De dienst onderzoekt de aanvraag, neemt vingerafdrukken en geeft de elektronische verblijfsvergunning af of een gemotiveerde weigering, waartegen binnen 2 maanden een administratief beroep kan worden ingesteld.",
    },
  ],
  employerDocs: [
    { label: "Elektronisch verzoek om goedkeuring van de tewerkstelling met TAXISnet-gegevens of via een gemachtigde advocaat" },
    { label: "Arbeidsovereenkomst van ten minste 1 jaar, voltijds, met een loon dat ten minste gelijk is aan het maandloon van een ongeschoolde werknemer" },
    { label: "Kopie van de paspoortpagina's van de werknemer met identiteitsgegevens en foto" },
    { label: "Fiscaal attest of belastingaangifte waaruit blijkt dat de werkgever het contractuele loon kan betalen", note: "De inkomensdrempels per werknemer verschillen voor particulieren, eenmanszaken en vennootschappen; de landbouwsector heeft een eigen regel." },
    { label: "Bewijs dat de specialiteit van de werknemer verband houdt met de bedrijfsactiviteit van de werkgever, waar vereist" },
    { label: "Bewijs van betaling van de goedkeuringsvergoeding voor elke uitgenodigde werknemer" },
  ],
  employeeDocs: [
    { label: "Geldig door Griekenland erkend paspoort en een kopie van het nationale visum (type D)" },
    { label: "Arbeidsovereenkomst ondertekend bij het consulaat" },
    { label: "Uittreksel uit het strafregister voor de visumfase, zoals vastgesteld door het Ministerie van Buitenlandse Zaken" },
    { label: "Aanwervingsmelding van de werkgever (αναγγελία πρόσληψης) in het ERGANI-systeem" },
    { label: "Attest dat een aanvraag voor een volledige ziektekostenverzekering is ingediend bij de bevoegde verzekeringsinstelling" },
    { label: "Recente kleurenfoto op papier en in digitaal formaat volgens de paspoortspecificaties" },
    { label: "Bewijs van betaling van de vergoeding voor de verblijfsvergunning en van de kosten voor het drukken van de kaart" },
    { label: "Mobiel telefoonnummer en e-mailadres voor het elektronische platform" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart (type E.1)", summary: "Hooggekwalificeerde tewerkstelling met een contract van ten minste 6 maanden en een loon boven de drempel; de goedkeuring van de werkgever op grond van artikel 27 wordt online ingediend en erkende werkgevers genieten een beslissing binnen 30 dagen." },
    { name: "Overplaatsing binnen een onderneming (type E.2)", summary: "Managers, specialisten en stagiairs die binnen een groep worden overgeplaatst, met goedkeuring van de detachering door het Ministerie." },
    { name: "Seizoenarbeid (type E.5 en E.6)", summary: "Uitnodiging van de werkgever voor seizoenarbeid in de landbouw of het toerisme voor maximaal 9 maanden per 12, onder hetzelfde quotabesluit." },
    { name: "Vergunning voor digitale nomaden", summary: "Verblijf voor telewerkers in dienst van ondernemingen buiten Griekenland, met inkomensvoorwaarden vastgesteld in het Migratiewetboek." },
  ],
  watchOuts: [
    "De goedkeuring hangt af van de beschikbaarheid van plaatsen voor de specialiteit en de regio in het huidige besluit van de Raad van Ministers. Wanneer de plaatsen zijn uitgeput, wordt het verzoek niet goedgekeurd, ongeacht de kwaliteit van het dossier.",
    "De inkomensdrempels voor de werkgever worden per uitgenodigde werknemer gecontroleerd. Vennootschappen en particulieren met een laag aangegeven inkomen worden geweigerd, en de vergoeding wordt niet terugbetaald.",
    "De procedure is in 2026 als in herziening gemarkeerd na wijzigingen van het Migratiewetboek. Controleer de huidige formulieren en documenten op het platform van het Ministerie vóór de indiening.",
  ],
};
