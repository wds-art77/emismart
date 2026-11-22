import type { CountryDetails } from "../types";

export const lt: CountryDetails = {
  authorities: [
    "Migratiedepartement onder het Ministerie van Binnenlandse Zaken (Migracijos departamentas): bemiddelingsbrieven, beslissingen over verblijfsvergunningen, MIGRIS",
    "Dienst voor Arbeidsbemiddeling onder het Ministerie van Sociale Zekerheid en Arbeid (Užimtumo tarnyba): werkvergunningen, knelpuntenlijsten en arbeidsmarktbeslissingen waar nog vereist",
    "Litouwse ambassades en consulaten en hun externe dienstverleners: biometrie en nationale visa voor aanvragers in het buitenland",
    "Staatsarbeidsinspectie (VDI): werkgeversmeldingen en handhaving van de regels over de tewerkstelling van vreemdelingen",
  ],
  legalBasis: [
    "Įstatymas dėl užsieniečių teisinės padėties (Wet op de rechtspositie van vreemdelingen, nr. IX-2206), zoals gewijzigd met ingang van 1 juli 2024, 1 januari 2025 en 22 mei 2026",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
    "Jaarlijks besluit van de Minister van Sociale Zekerheid en Arbeid tot goedkeuring van het quotum voor vreemdelingen die komen werken",
  ],
  steps: [
    {
      title: "De route, het quotum en de werkgeversvoorwaarden controleren",
      actor: "Employer",
      detail:
        "Ga na of het quotum nog ruimte heeft of of de loon- of knelpuntenlijstvrijstelling geldt, dat het contract voltijds zal zijn voor ten minste zes maanden, en dat de onderneming geen recente boetes heeft voor illegaal of niet-aangegeven werk, die het aanwerven van vreemdelingen een jaar lang uitsluiten.",
    },
    {
      title: "De bemiddelingsbrief indienen in MIGRIS",
      actor: "Employer",
      detail:
        "Dien de elektronische bemiddelingsbrief in, betaal de vergoeding en vermeld de kwalificatie en ervaring van de werknemer of de verbintenis om ten minste het gemiddelde brutomaandloon te betalen. MIGRIS kent een nummer toe voor de aanvraag van de werknemer.",
    },
    {
      title: "De aanvraag van de verblijfsvergunning indienen",
      actor: "Employee",
      detail:
        "Vul de aanvraag in MIGRIS in, voer het nummer van de bemiddelingsbrief in, laad de documenten op, betaal de staatsvergoeding (hoger voor de spoedprocedure) en maak een afspraak.",
    },
    {
      title: "Biometrie en originelen",
      actor: "Employee",
      detail:
        "Ga naar het kantoor van het Migratiedepartement, of naar een Litouwse missie of externe dienstverlener in het buitenland, om vingerafdrukken en een gezichtsopname te geven en de originele documenten te tonen. Aanvragers in het buitenland die een visum nodig hebben, kunnen na een positieve beslissing een nationaal visum aanvragen om in te reizen.",
    },
    {
      title: "Onderzoek en beslissing",
      actor: "Authority",
      detail:
        "Het Migratiedepartement controleert het quotum, de werkgever, de documenten van de werknemer en eventuele veiligheidsgronden, en beslist binnen de wettelijke termijn (4 maanden of 2 maanden bij spoed volgens het EU-immigratieportaal).",
    },
    {
      title: "Afhalen, aangifte van verblijfplaats en meldingen",
      actor: "Both",
      detail:
        "De werknemer haalt de kaart af, geeft zijn verblijfplaats aan en meldt latere wijzigingen binnen 10 werkdagen. De werkgever meldt het begin van de tewerkstelling en moet de beëindiging melden; een werknemer die zijn baan verliest, heeft drie maanden (zes na twee jaar met de vergunning) om een nieuwe werkgever te vinden.",
    },
  ],
  employerDocs: [
    { label: "Bemiddelingsbrief ingediend in MIGRIS met bewijs van de vergoeding" },
    { label: "Arbeidsovereenkomst of bindende verbintenis voor voltijds werk van ten minste zes maanden", note: "Vermeldt het overeengekomen brutomaandloon." },
    { label: "Bewijs van de kwalificatie van de werknemer en ten minste één jaar relevante ervaring in de laatste drie jaar, of een verbintenis om ten minste het nationale gemiddelde brutomaandloon te betalen" },
    { label: "Bedrijfsregistratiegegevens en een verklaring over boetes voor inbreuken op arbeids- of immigratieregels" },
    { label: "Werkvergunning of beslissing van de Dienst voor Arbeidsbemiddeling waar de route er nog een vereist (seizoenarbeid, nationaal visum)" },
  ],
  employeeDocs: [
    { label: "Aanvraag ingevuld in MIGRIS" },
    { label: "Geldig paspoort" },
    { label: "Foto die voldoet aan de vereisten van het Migratiedepartement" },
    { label: "Nummer van de aan de werkgever afgegeven bemiddelingsbrief" },
    { label: "Uittreksels uit het strafregister van de staten van verblijf in de laatste twee jaar", note: "Alleen bij de eerste vergunning." },
    { label: "Bewijs van voldoende middelen of regelmatige inkomsten en van huisvesting in Litouwen" },
    { label: "Ziektekostenverzekering die het verblijf dekt tot de Litouwse dekking geldt" },
    { label: "Diploma of ander bewijs van kwalificatie wanneer de werkgever zich op de kwalificatie van de werknemer beroept" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Diploma hoger onderwijs of vijf jaar ervaring en een loon van ten minste 1,5 keer het gemiddelde brutoloon; buiten het quotum, vergunning van drie jaar, beslissing binnen 2 maanden of 1 maand bij spoed, en geen beslissing van de Dienst voor Arbeidsbemiddeling wanneer het loon drie keer het gemiddelde bereikt of de baan op de knelpuntenlijst staat." },
    { name: "Overplaatsing binnen een onderneming", summary: "Managers, specialisten en stagiair-werknemers die binnen een groep worden overgeplaatst volgens de ICT-regels van dezelfde wet." },
    { name: "Nationaal visum met werkvergunning", summary: "Voor seizoenarbeid en andere korte opdrachten van maximaal één jaar geeft de Dienst voor Arbeidsbemiddeling een werkvergunning af en reist de werknemer in met een nationaal visum, dat niet kan worden verlengd." },
    { name: "Afgestudeerden van Litouwse instellingen", summary: "Werknemers die in de laatste vijf jaar een opleiding in Litouwen hebben voltooid, vallen buiten het quotum en zijn vrijgesteld van de voorwaarde van voorafgaande ervaring." },
  ],
  watchOuts: [
    "Het jaarlijkse quotum kan ruim vóór het einde van het jaar opgebruikt zijn; in oktober 2025 stopte het Migratiedepartement met het aannemen van nieuwe aanvragen, zodat alleen de uitzonderingen voor hogere lonen en knelpuntberoepen overbleven.",
    "Vanaf 1 november 2026 moeten aanvragers die in Litouwen verblijven met een Schengenvisum of een nationaal visum van een ander land vanuit het buitenland indienen, en de lijst van externe dienstverleners die werkgebonden aanvragen aannemen, is ingekort.",
    "Het verleden van de werkgever telt: een boete voor illegaal of niet-aangegeven werk of herhaalde inbreuken op de meldingsplicht blokkeert nieuwe vergunningen een jaar lang, en het niet langer vervullen van de voorwaarde van een voltijds contract van zes maanden leidt tot weigering of intrekking.",
  ],
};
