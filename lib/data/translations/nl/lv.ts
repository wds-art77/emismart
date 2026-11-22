import type { CountryDetails } from "../types";

export const lv: CountryDetails = {
  authorities: [
    "Bureau voor Burgerschaps- en Migratiezaken (Pilsonības un migrācijas lietu pārvalde, OCMA/PMLP): goedkeuring van uitnodigingen en beslissingen over verblijfsvergunningen",
    "Staatsagentschap voor Werkgelegenheid (Nodarbinātības valsts aģentūra, NVA): vacatureregistratie en advies over de aanwerving van een onderdaan van een derde land",
    "Letse ambassades en consulaten: ontvangst van aanvragen van verblijfsvergunningen vanuit het buitenland",
    "Staatsbelastingdienst (VID): registratie als belastingplichtige na aankomst",
  ],
  legalBasis: [
    "Imigrācijas likums (Immigratiewet), met name artikel 9 over het recht op tewerkstelling, artikel 23 over tijdelijke verblijfsvergunningen en artikel 33 over beslistermijnen",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
    "Verordeningen van het Kabinet van Ministers over verblijfsvergunningen en over de staatsvergoeding voor het onderzoek van visum- en verblijfsvergunningsdocumenten (Verordening nr. 731)",
  ],
  steps: [
    {
      title: "De vacature registreren bij NVA",
      actor: "Employer",
      detail:
        "Publiceer de vacature op het NVA-portaal met de redenen voor de functie en het aantal plaatsen. Houd haar ten minste 10 werkdagen open, beoordeel de kandidaten die NVA voorstelt en meld de resultaten via het portaal.",
    },
    {
      title: "Het NVA-advies verkrijgen",
      actor: "Authority",
      detail:
        "NVA geeft een advies over de aanwerving van een onderdaan van een derde land, gewoonlijk binnen 10 werkdagen na de publicatie. Een positief advies is elektronisch beschikbaar voor OCMA; tegen een weigering kan beroep worden ingesteld bij de directeur van NVA.",
    },
    {
      title: "De goedkeuring van de uitnodiging aanvragen bij OCMA",
      actor: "Employer",
      detail:
        "Dien binnen één maand na het advies het verzoek om uitnodiging elektronisch in met de arbeidsovereenkomst of het ontwerp ervan, de opleidings- of ervaringsdocumenten van de werknemer en elke vergunning, elk bestand e-ondertekend, en betaal de staatsvergoeding. OCMA beslist binnen 5 werkdagen, of 10 als een aanvullende controle nodig is.",
    },
    {
      title: "De verblijfsvergunning aanvragen",
      actor: "Employee",
      detail:
        "Dien met de goedgekeurde uitnodiging het aanvraagformulier, de paspoortkopie, een foto, het uittreksel uit het strafregister en het bewijs van de staatsvergoeding in bij een Letse missie in het buitenland, of stuur ze naar OCMA bij legaal verblijf in Letland. De vergoeding hangt af van de gekozen behandelingssnelheid.",
    },
    {
      title: "Beslissing door OCMA",
      actor: "Authority",
      detail:
        "OCMA onderzoekt het dossier binnen 30 dagen (10 of 5 werkdagen tegen de hogere vergoedingen) en geeft bij een positieve beslissing de verblijfsvergunning af met het recht op tewerkstelling bij de genoemde werkgever en in de genoemde functie.",
    },
    {
      title: "Aankomstformaliteiten en kaart",
      actor: "Employee",
      detail:
        "Geef de verblijfplaats aan, leg een radiologisch verslag voor van een in Letland uitgevoerde röntgenfoto van de borstkas en toon een ziektekostenverzekering die het verblijf dekt, en haal vervolgens de verblijfsvergunningskaart af. Registreer u als belastingplichtige bij de Staatsbelastingdienst. De werkgever moet wijzigingen in loon, arbeidstijd of werkplek binnen drie werkdagen aan OCMA melden.",
    },
  ],
  employerDocs: [
    { label: "Verzoek om uitnodiging, elektronisch ingediend met een beveiligde e-handtekening, met toelichtingen in het Lets" },
    { label: "Arbeidsovereenkomst of ontwerpovereenkomst", note: "Ook nodig voor herhaalde vergunningen en de jaarlijkse registratie." },
    { label: "Opleidingsdocument (gelegaliseerde kopie) of bewijs van drie jaar ervaring in het beroep; erkenningscertificaat voor gereglementeerde beroepen" },
    { label: "Kopie van de vergunning of licentie wanneer het werk er een vereist" },
    { label: "NVA-advies over de vacature", note: "Elektronisch aan OCMA bezorgd; de werkgever hoeft het niet bij te voegen." },
    { label: "Bewijs van betaling van de staatsvergoeding voor de uitnodiging en het recht op tewerkstelling" },
  ],
  employeeDocs: [
    { label: "Aanvraagformulier voor de verblijfsvergunning" },
    { label: "Volledige kopie van een geldig in Letland erkend reisdocument" },
    { label: "Foto" },
    { label: "Uittreksel uit het strafregister van het land van nationaliteit of verblijf", note: "Voor aanvragers ouder dan 14 die daar meer dan 12 maanden hebben gewoond; niet vereist van burgers van visumvrije landen." },
    { label: "Bewijs van bestaansmiddelen, normaal het loon in het contract dat de geldende drempel haalt" },
    { label: "Bewijs van betaling van de staatsvergoeding" },
    { label: "Na aankomst: radiologisch verslag van een in Letland gemaakte röntgenfoto en ziektekostenverzekering die het verblijf dekt" },
    { label: "Voor gezinsleden: bewijs van verwantschap en, voor een kind dat met één ouder reist, de notariële toestemming van de andere ouder" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Diploma hoger onderwijs of vijf jaar ervaring en een loon van 1,5 keer het nationale gemiddelde (1,2 keer voor genoemde knelpuntberoepen). Geen vacatureregistratie bij NVA, beslissing over de uitnodiging binnen 10 werkdagen, kaart voor maximaal twee jaar." },
    { name: "Overplaatsing binnen een onderneming", summary: "Managers, specialisten en stagiairs die binnen een groep worden overgeplaatst na ten minste zes maanden bij de buitenlandse werkgever, op basis van een brief van de uitzendende onderneming." },
    { name: "Oprichter van een start-up", summary: "Afzonderlijke verblijfsvergunning voor oprichters van innovatieve start-ups, behandeld door OCMA met eigen criteria." },
    { name: "Kortdurend werk met een visum", summary: "Voor tewerkstelling van maximaal 90 dagen vraagt de werkgever een uitnodiging aan en verkrijgt de werknemer een visum met vermelding van het recht om te werken; de vacature moet nog steeds bij NVA worden geregistreerd." },
  ],
  watchOuts: [
    "Alle documenten moeten in één indiening worden ingediend. Als OCMA lacunes vaststelt, moet de volledige set opnieuw worden ingediend, en de vergoeding wordt niet terugbetaald als de uitnodiging wordt geweigerd of ingetrokken.",
    "Het recht om te werken geldt alleen voor de werkgever en het beroep die in de uitnodiging zijn genoemd. Een wijziging van functie bij dezelfde werkgever vereist een nieuwe uitnodiging, en een wisseling van werkgever vereist nieuwe werkrechten.",
    "De bestaansmiddelen- en loondrempels worden elk voorjaar opnieuw vastgesteld op basis van de statistieken van het voorgaande jaar, en de vacatureregistratie en het advies vervallen als de uitnodiging niet binnen één maand wordt ingediend.",
  ],
};
