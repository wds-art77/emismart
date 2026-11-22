import type { CountryDetails } from "../types";

export const cz: CountryDetails = {
  authorities: [
    "Ministerie van Binnenlandse Zaken, Departement Asiel- en Migratiebeleid (Ministerstvo vnitra, OAMP): beslissing, biometrie, afgifte van de kaart, melding van wijzigingen",
    "Tsjechische ambassades en consulaten: ontvangst van aanvragen in het buitenland en afgifte van het D/VR-visum om de kaart af te halen",
    "Arbeidsbureau van de Tsjechische Republiek (Úřad práce ČR) en Ministerie van Arbeid en Sociale Zaken: vacatureregistratie, centraal register van vacatures voor houders van een Werknemerskaart, bindende adviezen en werkvergunningen",
  ],
  legalBasis: [
    "Zákon č. 326/1999 Sb., o pobytu cizinců na území České republiky (Wet op het verblijf van vreemdelingen), zoals gewijzigd bij Wet nr. 101/2014 Sb. tot omzetting van de richtlijn gecombineerde vergunning",
    "Zákon č. 435/2004 Sb., o zaměstnanosti (Wet op de werkgelegenheid), over vacatureregistratie en het centrale register",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "De vacature melden en instemmen met het centrale register",
      actor: "Employer",
      detail:
        "De werkgever meldt de vacature bij het regionale Arbeidsbureau en stemt in met opname in het Centraal Register van Vacatures die door houders van een Werknemerskaart kunnen worden ingevuld. Na de publicatieperiode krijgt de vacature een identificatienummer dat de werknemer nodig heeft voor de aanvraag.",
    },
    {
      title: "De overeenkomst ondertekenen en bewijs van kwalificaties verzamelen",
      actor: "Both",
      detail:
        "De partijen ondertekenen een arbeidsovereenkomst, een overeenkomst inzake werkactiviteit of een voorovereenkomst. Als de baan of de werkgever een kwalificatie vereist, verkrijgt de werknemer het diploma of certificaat met een gecertificeerde Tsjechische vertaling.",
    },
    {
      title: "Een afspraak maken en persoonlijk indienen bij de ambassade",
      actor: "Employee",
      detail:
        "De werknemer maakt een afspraak bij de Tsjechische ambassade (sommige ambassades werken met quota of registratiesystemen), dient de aanvraag persoonlijk in met het vacaturenummer, paspoort, foto, bewijs van huisvesting, overeenkomst, uittreksel uit het strafregister en andere documenten die niet ouder zijn dan 180 dagen, en betaalt de consulaire vergoeding.",
    },
    {
      title: "Het Ministerie van Binnenlandse Zaken beslist",
      actor: "Authority",
      detail:
        "De ambassade stuurt het dossier door naar het Ministerie, dat het Arbeidsbureau om een bindend advies kan vragen en binnen 60 of 90 dagen beslist. Een weigering kan worden aangevochten door het Ministerie binnen 15 dagen om een herbeoordeling te vragen.",
    },
    {
      title: "D/VR-visum, reisverzekering en binnenkomst",
      actor: "Employee",
      detail:
        "Bij goedkeuring geeft de ambassade een D/VR-visum af om de kaart af te halen. De werknemer moet een medische reisverzekering voorleggen die de periode dekt tot de openbare ziektekostenverzekering begint, en reist daarna naar Tsjechië.",
    },
    {
      title: "Biometrie, overbruggingsattest en afhalen van de kaart",
      actor: "Employee",
      detail:
        "Binnen 30 dagen na aankomst met het D/VR-visum (3 werkdagen bij visumvrije binnenkomst met een biometrisch paspoort) meldt de werknemer zich bij een kantoor van het Ministerie, geeft biometrische gegevens af en ontvangt een Attest van naleving van de voorwaarden, waarmee het werk kan beginnen. De kaart wordt binnen 60 dagen afgehaald, met de bevestiging van de werkgever dat het werk is begonnen.",
    },
  ],
  employerDocs: [
    { label: "Vacature gemeld bij het Arbeidsbureau en instemming met opname in het centrale register, met vermelding van het identificatienummer van de vacature" },
    { label: "Arbeidsovereenkomst, overeenkomst inzake werkactiviteit of voorovereenkomst die voldoet aan het Arbeidswetboek en de minimumloonregels" },
    { label: "Bevestiging dat de baan geen kwalificatie vereist, of dat de kwalificatie van de werknemer wordt aanvaard, waar relevant" },
    { label: "Bij uitzendarbeid, een document met vermelding van de werknemer, de aard en de plaats van het werk en de inlenende werkgever" },
    { label: "Bevestiging dat de werknemer het werk heeft aangevat, nodig bij het afhalen van de kaart" },
  ],
  employeeDocs: [
    { label: "Aanvraagformulier voor een verblijfsvergunning voor langere duur (Werknemerskaart) met het vacaturenummer" },
    { label: "Geldig reisdocument, origineel" },
    { label: "Foto van het huidige uiterlijk" },
    { label: "Bewijs van huisvesting in Tsjechië" },
    { label: "Uittreksel uit het strafregister van het land van nationaliteit en van de landen waar de werknemer in de laatste 3 jaar meer dan 6 maanden heeft verbleven" },
    { label: "Bewijs van beroepskwalificatie wanneer de baan dat vereist, met gecertificeerde Tsjechische vertaling" },
    { label: "Medisch verslag op verzoek", note: "Bijlagen mogen niet ouder zijn dan 180 dagen, behalve het paspoort en de foto." },
    { label: "Medische reisverzekering vóór de afgifte van het D/VR-visum" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Voor hooggekwalificeerde werknemers met een diploma hoger onderwijs en een loon boven de jaarlijks gepubliceerde drempel, voor vacatures in het afzonderlijke register voor de blauwe kaart." },
    { name: "Kaart voor binnen een onderneming overgeplaatste personen", summary: "Voor leidinggevenden, specialisten en stagiairs die binnen een groep worden overgeplaatst, buiten het register voor de Werknemerskaart." },
    { name: "Door de regering goedgekeurde programma's voor economische migratie", summary: "Programma's zoals Key and Research Staff en Highly Qualified Employee geven toegang tot afspraken bij de ambassade, laten de werkgever indienen met een volmacht en laten werkgeversbevestigingen sommige documenten vervangen." },
    { name: "Niet-duale Werknemerskaart", summary: "Alleen verblijf, voor werknemers die vrije toegang tot de arbeidsmarkt hebben of een afzonderlijke werkvergunning van het Arbeidsbureau bezitten." },
  ],
  watchOuts: [
    "Afspraken bij de ambassade vormen het knelpunt. Verschillende ambassades werken met quota of registratiesystemen en data worden geannuleerd of verplaatst; de aanvraag kan niet per post of online worden ingediend en een verkeerde ambassade betekent afwijzing.",
    "Elke bijlage behalve het paspoort en de foto vervalt na 180 dagen en moet in het Tsjechisch zijn opgesteld of een gecertificeerde vertaling dragen; een verouderd uittreksel uit het strafregister of een niet-geregistreerde vacature blokkeert het dossier.",
    "De kaart is gebonden aan de geregistreerde vacature. Een verandering van werkgever of functie moet vooraf aan het Ministerie worden gemeld, normaal pas na 6 maanden bij de eerste werkgever en ten minste 30 dagen vóór de start, en na het einde van de tewerkstelling heeft de werknemer een beperkte periode (momenteel 90 dagen volgens het portaal van het Ministerie) om een nieuwe baan te melden, anders vervalt de kaart.",
  ],
};
