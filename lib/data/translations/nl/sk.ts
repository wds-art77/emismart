import type { CountryDetails } from "../types";

export const sk: CountryDetails = {
  authorities: [
    "Afdeling Vreemdelingenpolitie (Oddelenie cudzineckej polície Policajného zboru) van het Ministerie van Binnenlandse Zaken: ontvangst van en beslissing over het tijdelijk verblijf, verblijfskaart",
    "Arbeidsbureau (Úrad práce, sociálnych vecí a rodiny) en zijn Centraal Bureau: vacaturemeldingen, bevestiging van de mogelijkheid om een vacature in te vullen, werkvergunningen",
    "Slowaakse ambassade of consulaat: ontvangst van in het buitenland ingediende aanvragen en nationaal visum waar nodig",
    "Ministerie van Arbeid, Sociale Zaken en Gezin: beleid en de lijst van knelpuntberoepen",
  ],
  legalBasis: [
    "Zákon č. 404/2011 Z. z. o pobyte cudzincov (Wet op het verblijf van vreemdelingen), § 23 en § 33",
    "Zákon č. 5/2004 Z. z. o službách zamestnanosti (Wet op de arbeidsbemiddelingsdiensten), § 21b en § 22",
    "Zákon č. 145/1995 Z. z. o správnych poplatkoch (Wet op de administratieve vergoedingen)",
    "Richtlijn 2011/98/EU, herzien bij Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "De vacature melden bij het Arbeidsbureau",
      actor: "Employer",
      detail:
        "De werkgever meldt de vacature bij het Arbeidsbureau, via zijn elektronische formulieren, ten minste 20 werkdagen vóór de aanvraag van de werknemer. Voor knelpuntberoepen kan de melding zonder wachttijd gebeuren.",
    },
    {
      title: "Het contract of de schriftelijke belofte van tewerkstelling ondertekenen",
      actor: "Both",
      detail:
        "Als geen geschikte werkzoekende wordt geplaatst, ondertekent de werkgever een arbeidsovereenkomst of een schriftelijke belofte van tewerkstelling op het officiële formulier, die een arbeidsverhouding (pracovný pomer) moet zijn, met een loonbevestiging voor de middelentoets.",
    },
    {
      title: "De verblijfsaanvraag indienen bij de ambassade",
      actor: "Employee",
      detail:
        "De werknemer dient het aanvraagformulier in het Slowaaks persoonlijk in bij de Slowaakse ambassade, of bij de Vreemdelingenpolitie als hij legaal in Slowakije verblijft, met paspoort, foto's, contract of belofte, uittreksels uit het strafregister, bewijs van huisvesting en financiële middelen, alle geapostilleerd en in het Slowaaks vertaald en niet ouder dan 90 dagen, en betaalt de administratieve vergoeding.",
    },
    {
      title: "De Vreemdelingenpolitie vraagt de vacaturebevestiging op",
      actor: "Authority",
      detail:
        "De Vreemdelingenpolitie vraagt de bevestiging van de mogelijkheid om de vacature in te vullen op bij het Arbeidsbureau, dat haar binnen 5 werkdagen via het informatiesysteem terugstuurt, en beslist binnen de wettelijke termijn van 60 dagen (30 dagen voor knelpuntberoepen).",
    },
    {
      title: "Binnenkomst en aankomstformaliteiten",
      actor: "Employee",
      detail:
        "De werknemer reist in binnen 180 dagen na de verlening, meldt zijn aankomst binnen 3 werkdagen bij de Vreemdelingenpolitie en haalt het verblijfsdocument af.",
    },
    {
      title: "Medisch attest en ziektekostenverzekering",
      actor: "Employee",
      detail:
        "Binnen 30 dagen na het afhalen van het verblijfsdocument dient de werknemer een medisch attest van een specialist in infectieziekten in, niet ouder dan 30 dagen, en sluit hij binnen 3 werkdagen na het afhalen een ziektekostenverzekering af.",
    },
  ],
  employerDocs: [
    { label: "Vacaturemelding ingediend bij het Arbeidsbureau ten minste 20 werkdagen vóór de aanvraag" },
    { label: "Arbeidsovereenkomst of schriftelijke belofte van tewerkstelling op het officiële formulier, als arbeidsverhouding" },
    { label: "Bevestiging van het overeengekomen loon, door de werknemer gebruikt als bewijs van financiële middelen" },
    { label: "Voor gereglementeerde beroepen, de erkende kwalificatie of de erkenningsbeslissing" },
    { label: "Verklaring van de werkgever dat geen werkvergunning of vacaturebevestiging vereist is, wanneer een vrijstelling geldt" },
    { label: "Kennisgeving aan de Vreemdelingenpolitie binnen 3 werkdagen als de tewerkstelling eindigt" },
  ],
  employeeDocs: [
    { label: "Aanvraagformulier voor tijdelijk verblijf, ingevuld en ondertekend in het Slowaaks" },
    { label: "Geldig paspoort en twee kleurenfoto's" },
    { label: "Arbeidsovereenkomst of schriftelijke belofte van tewerkstelling" },
    { label: "Uittreksel uit het strafregister van het land van nationaliteit en van elk land waar de werknemer in de laatste 3 jaar meer dan 90 dagen in 6 opeenvolgende maanden heeft verbleven, geapostilleerd en vertaald, niet ouder dan 90 dagen" },
    { label: "Bewijs van huisvesting voor het verblijf, niet ouder dan 90 dagen" },
    { label: "Bewijs van financiële middelen: loonbevestiging van de werkgever of bankafschrift" },
    { label: "Medisch attest van een specialist in infectieziekten binnen 30 dagen na het afhalen van de kaart" },
    { label: "Bewijs van ziektekostenverzekering binnen 3 werkdagen na het afhalen van de kaart" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Voor hooggekwalificeerde tewerkstelling met een contract van ten minste een jaar en een loon van ten minste 1,5 keer het regionale gemiddelde loon dat het Bureau voor de Statistiek publiceert; afgegeven voor 3 jaar of de tewerkstellingsperiode plus 90 dagen." },
    { name: "Versnelde procedure voor knelpuntberoepen", summary: "Vacaturebevestiging zonder arbeidsmarkttoets en een beslistermijn van 30 dagen voor beroepen op de kwartaallijst van knelpuntberoepen, onder voorbehoud van een plafond voor het aandeel onderdanen van derde landen bij de werkgever." },
    { name: "Werkvergunning en tijdelijk verblijf", summary: "Werkvergunning van het Arbeidsbureau gevolgd door tijdelijk verblijf, gebruikt voor houders van gezinshereniging en langdurig ingezetenen van de EU in hun eerste 12 maanden." },
    { name: "Overplaatsing binnen een onderneming", summary: "Tijdelijk verblijf met het oog op tewerkstelling voor leidinggevenden en specialisten (tot 3 jaar) of stagiairs (tot 1 jaar) die binnen een groep worden overgeplaatst." },
  ],
  watchOuts: [
    "De timing wordt bepaald door de vacaturemelding. Als de werkgever de functie minder dan 20 werkdagen vóór de aanvraag heeft gemeld, kan het Arbeidsbureau de bevestiging niet afgeven en moet de Vreemdelingenpolitie weigeren.",
    "Documenten over het strafregister en de huisvesting moeten geapostilleerd of gesuperlegaliseerd zijn, in het Slowaaks vertaald en bij de indiening niet ouder dan 90 dagen. Uittreksels moeten het hele grondgebied van de afgevende staat dekken.",
    "De indiening geeft geen verblijfsrecht. Tot de beslissing mag de werknemer alleen blijven op basis van een geldig visum of een visumvrij verblijf, en hij moet binnen 180 dagen na de verlening inreizen en het medisch attest binnen 30 dagen na het afhalen van de kaart indienen.",
  ],
};
