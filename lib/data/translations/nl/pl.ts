import type { CountryDetails } from "../types";

export const pl: CountryDetails = {
  authorities: [
    "Voivode (wojewoda) en het voivodschapskantoor (urząd wojewódzki) van de verblijfplaats van de werknemer: beslissing over de gecombineerde vergunning en over werkvergunningen",
    "Bureau voor Vreemdelingen (Urząd do Spraw Cudzoziemców, UdSC): beheert het MOS-portaal en behandelt beroepen tegen beslissingen van de Voivode",
    "Starosta en het districtsarbeidsbureau (powiatowy urząd pracy): districtslijsten van beroepen waarvoor vergunningen worden geweigerd, en registratie van verklaringen van toevertrouwen van werk",
    "Pools consulaat: nationaal visum (type D) voor werknemers die uit het buitenland inreizen op basis van een werkvergunning",
  ],
  legalBasis: [
    "Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Wet op de vreemdelingen), in het bijzonder de bepalingen over de tijdelijke verblijfs- en werkvergunning",
    "Ustawa z dnia 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom na terytorium Rzeczypospolitej Polskiej, van kracht sinds 1 juni 2025",
    "Richtlijn 2011/98/EU, herzien bij Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Nagaan of eerst een werkvergunning en een visum nodig zijn",
      actor: "Employer",
      detail:
        "Een werknemer die in het buitenland is, kan de gecombineerde vergunning niet aanvragen. De werkgever verkrijgt een werkvergunning van de Voivode via praca.gov.pl, of registreert voor onderdanen van Oekraïne, Belarus, Rusland, Georgië, Moldavië en Armenië een verklaring van toevertrouwen van werk bij het districtsarbeidsbureau. De werknemer vraagt vervolgens een nationaal visum aan bij het Poolse consulaat.",
    },
    {
      title: "Polen inreizen en het contract ondertekenen",
      actor: "Both",
      detail:
        "De werknemer reist in met het nationale visum of op een andere legale basis en mag beginnen werken op basis van de werkvergunning of de verklaring. Er wordt een arbeidsovereenkomst, een lastgevingsovereenkomst of een overeenkomst voor een specifieke taak ondertekend met een loon van ten minste het wettelijk minimum.",
    },
    {
      title: "De werkgever vult bijlage 1 in MOS in",
      actor: "Employer",
      detail:
        "De werknemer start de MOS-aanvraag en voert het e-mailadres van de werkgever in. De werkgever ontvangt een link, vult bijlage 1 in met de functie (uit de officiële GUS-lijst), de arbeidstijd, het loon en het contracttype, en ondertekent haar met een vertrouwd profiel of een gekwalificeerde handtekening. De link is 30 dagen geldig.",
    },
    {
      title: "De werknemer dient de aanvraag in en betaalt de zegelrechten",
      actor: "Employee",
      detail:
        "De werknemer dient de aanvraag elektronisch in via MOS, uiterlijk op de laatste dag van het legale verblijf, met een kopie van het paspoort, foto's, bewijs van betaling van de zegelrechten en ondersteunende documenten zoals een ziektekostenverzekering wanneer het contracttype geen wettelijke dekking geeft.",
    },
    {
      title: "Vingerafdrukken en controle bij het voivodschapskantoor",
      actor: "Authority",
      detail:
        "Het voivodschapskantoor controleert de aanvraag, roept de werknemer op om vingerafdrukken en een handtekeningspecimen te geven, en vraagt ontbrekende documenten op binnen een gestelde termijn. Een ontbrekend document is een vormgebrek en de aanvraag blijft onbehandeld als het niet tijdig wordt aangeleverd.",
    },
    {
      title: "Beslissing en verblijfskaart",
      actor: "Authority",
      detail:
        "De Voivode neemt de beslissing. Bij goedkeuring betaalt de werknemer de kaartvergoeding en haalt hij de verblijfskaart af met de vermelding van toegang tot de arbeidsmarkt. Tegen een weigering kan binnen 14 dagen beroep worden ingesteld bij het hoofd van het Bureau voor Vreemdelingen.",
    },
  ],
  employerDocs: [
    { label: "Bijlage 1 bij de aanvraag, elektronisch ingevuld en ondertekend in MOS door een persoon die bevoegd is om de werkgever te vertegenwoordigen" },
    { label: "Arbeidsovereenkomst, lastgevingsovereenkomst of overeenkomst voor een specifieke taak met een loon van ten minste het wettelijk minimumloon" },
    { label: "Werkvergunning of geregistreerde verklaring van toevertrouwen van werk, wanneer de werknemer op die basis Polen is ingereisd" },
    { label: "Verklaring over het strafregister en de nalevingsgeschiedenis van de werkgever, zoals vereist in bijlage 1" },
    { label: "Volmacht die buiten het systeem aan de werknemer wordt bezorgd als de werkgever via een vertegenwoordiger optreedt", note: "Werkgevers kunnen zelf geen documenten aan bijlage 1 toevoegen." },
  ],
  employeeDocs: [
    { label: "Aanvraag voor een tijdelijke verblijfsvergunning, ingevuld in MOS" },
    { label: "Kopie van een geldig reisdocument, origineel getoond bij het afnemen van de vingerafdrukken" },
    { label: "Recente foto's die aan de officiële eisen voldoen" },
    { label: "Bewijs van betaling van de zegelrechten" },
    { label: "Bewijs van ziektekostenverzekering wanneer het contract geen wettelijke dekking geeft" },
    { label: "Diploma's of kwalificaties voor gereglementeerde beroepen" },
    { label: "Attest van de vorige werkgever wanneer de werknemer van werkgever verandert" },
    { label: "Poolse beëdigde vertalingen van alle anderstalige documenten" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Tijdelijke verblijfsvergunning voor werk in een beroep dat hoge kwalificaties vereist, met een diploma hoger onderwijs of kwalificerende ervaring en een loon boven een jaarlijks vastgestelde drempel. Ook ingediend via MOS." },
    { name: "Werkvergunning en nationaal visum", summary: "De werkgever verkrijgt een werkvergunning van de Voivode via praca.gov.pl en de werknemer reist in met een nationaal visum. Gebruikt vóór de gecombineerde vergunning of in plaats daarvan voor kortere verblijven." },
    { name: "Verklaring van toevertrouwen van werk", summary: "Voor onderdanen van Oekraïne, Belarus, Rusland, Georgië, Moldavië en Armenië, geregistreerd bij het districtsarbeidsbureau en tot 24 maanden geldig, zonder werkvergunning." },
    { name: "Vergunning voor overplaatsing binnen een onderneming", summary: "Afzonderlijke tijdelijke verblijfsvergunning voor leidinggevenden, specialisten en stagiairs die binnen een groep worden overgeplaatst, nog steeds op papier ingediend." },
  ],
  watchOuts: [
    "De aanvraag kan alleen worden ingediend terwijl de werknemer legaal in Polen verblijft. Binnenkomst met een toeristen-, studie- of medisch visum blokkeert de procedure volledig, en verblijfsdocumenten van een andere Schengenstaat leiden tot een weigering om de procedure te openen.",
    "Niets beweegt zolang bijlage 1 niet is ondertekend. De link van de werkgever verstrijkt na 30 dagen, het formulier kan niet tussentijds worden opgeslagen, en elke gezamenlijke vertegenwoordiger moet afzonderlijk ondertekenen.",
    "De vergunning is gebonden aan de werkgever, de functie, het loon, de arbeidstijd en het contracttype. Een verandering van werkgever of van deze voorwaarden vereist een nieuwe vergunning of een wijzigingsbeslissing; alleen een wijziging van de naam, de rechtsvorm of de zetel van de werkgever is vrijgesteld.",
  ],
};
