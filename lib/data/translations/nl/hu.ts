import type { CountryDetails } from "../types";

export const hu: CountryDetails = {
  authorities: [
    "Nationaal Directoraat-Generaal voor Vreemdelingenpolitie (Országos Idegenrendészeti Főigazgatóság, OIF) en zijn regionale directies: beslissing en afgifte van de kaart",
    "Provinciaal overheidskantoor (kormányhivatal) als arbeidsautoriteit: bindend advies over de tewerkstelling, met inbegrip van de arbeidsmarkttoets waar van toepassing",
    "Hongaarse ambassades en consulaten: ontvangst van aanvragen in het buitenland en afgifte van het visum voor het afhalen van de verblijfsvergunning",
    "Enter Hungary (enterhungary.gov.hu): elektronisch indieningsplatform voor aanvragers en werkgevers",
  ],
  legalBasis: [
    "2023. évi XC. törvény a harmadik országbeli állampolgárok beutazására és tartózkodására vonatkozó általános szabályokról (Wet XC van 2023), met name §§ 28, 30 tot 31, 36, 168, 173 en 242",
    "Regeringsdecreet 35/2024 (II. 29.) tot uitvoering van Wet XC van 2023, en de decreten met de lijsten van in aanmerking komende nationaliteiten en uitgesloten beroepen",
    "Regeringsdecreet 445/2013 (XI. 28.) over activiteiten die zijn vrijgesteld van de werkvergunningsplicht",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Nagaan welk vergunningstype en welke nationaliteitsregels gelden",
      actor: "Employer",
      detail:
        "De werkgever bevestigt dat de nationaliteit van de werknemer op de bij regeringsdecreet vastgestelde lijst voor tewerkstellingsvergunningen staat, dat het beroep niet is uitgesloten, of de Hungarian Card of de gastarbeidersvergunning beter past, en dat de werkgever aan een eventuele registratievereiste voldoet.",
    },
    {
      title: "Een voorovereenkomst of arbeidsovereenkomst ondertekenen",
      actor: "Both",
      detail:
        "Voor de aanvraag is een voorovereenkomst tot het aangaan van een arbeidsverhouding, of een ondertekend contract, vereist, samen met elke kwalificatie die de baan vereist.",
    },
    {
      title: "Een personeelsaanvraag indienen en de aanvraag indienen",
      actor: "Employer",
      detail:
        "De werkgever kan een personeelsaanvraag indienen bij de openbare arbeidsbemiddelingsdienst. De aanvraag wordt vervolgens ingediend door de werknemer bij het consulaat of door de werkgever via Enter Hungary met de schriftelijke toestemming van de werknemer, waarbij de vergoeding bij de indiening wordt betaald.",
    },
    {
      title: "Advies van de arbeidsautoriteit en beslissing",
      actor: "Authority",
      detail:
        "De regionale directie vraagt het bindende advies van het provinciale overheidskantoor over de tewerkstelling, dat de arbeidsmarkttoets omvat tenzij een vrijstelling geldt, en beslist over verblijf en werk in één gecombineerde vergunning.",
    },
    {
      title: "Visum en binnenkomst",
      actor: "Employee",
      detail:
        "Als de werknemer vanuit het buitenland heeft ingediend, geeft het consulaat een visum af voor het afhalen van de verblijfsvergunning. De werknemer reist Hongarije in en moet de vergunning bij de regionale directie verkrijgen vóór het verstrijken van het visum.",
    },
    {
      title: "De verblijfsvergunning afhalen en het adres registreren",
      actor: "Employee",
      detail:
        "De werknemer geeft biometrische gegevens af waar die nog niet zijn genomen, haalt de verblijfskaart af bij de regionale directie en meldt de Hongaarse verblijfplaats. De ziektekostenverzekering volgt automatisch uit de geregistreerde tewerkstelling.",
    },
  ],
  employerDocs: [
    { label: "Voorovereenkomst tot het aangaan van een arbeidsverhouding, of ondertekende arbeidsovereenkomst" },
    { label: "Schriftelijke toestemming van de werknemer wanneer de werkgever indient via Enter Hungary" },
    { label: "Personeelsaanvraag bij de openbare arbeidsbemiddelingsdienst, waar de arbeidsmarkttoets van toepassing is" },
    { label: "Bewijs van registratie als preferentiële werkgever of gekwalificeerd uitzendbureau, voor de gastarbeidersvergunning" },
    { label: "Bedrijfsregistratie en toegang van de werkgever tot het bedrijfsportaal van Enter Hungary" },
  ],
  employeeDocs: [
    { label: "Aanvraagformulier, op papier bij het consulaat of elektronisch in Enter Hungary" },
    { label: "Reisdocument dat ten minste 3 maanden na het voorgenomen verblijf geldig is" },
    { label: "Bewijs van passende huisvesting in Hongarije" },
    { label: "Bewijs van voldoende middelen, normaal de arbeidsovereenkomst of de voorovereenkomst" },
    { label: "Gecertificeerde kwalificatie met vertaling wanneer de baan er een vereist" },
    { label: "Bewijs van ziektekostenverzekering, waaraan is voldaan door geregistreerde tewerkstelling" },
    { label: "Pasfoto en biometrische gegevens" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Voor hooggekwalificeerde werknemers met een diploma hoger onderwijs en een loon boven de nationale drempel; ingediend via dezelfde kanalen, met EU-mobiliteitsrechten." },
    { name: "Hungarian Card (Magyar Kártya)", summary: "Voor houders van een kwalificatie hoger onderwijs in loondienst of bedrijfsleiding, en voor genoemde categorieën zoals beroepssporters en artiesten. Geldig tot 3 jaar en telkens met 3 jaar verlengbaar, zonder het plafond van 3 jaar." },
    { name: "Verblijfsvergunning voor gastarbeiders (vendégmunkás-tartózkodási engedély)", summary: "Voor lager geschoold werk bij een geregistreerde preferentiële werkgever of een gekwalificeerd uitzendbureau, beperkt tot bij decreet vastgestelde nationaliteiten en beroepen. Tot 2 jaar plus 1 jaar, in totaal 3 jaar." },
    { name: "National Card (Nemzeti Kártya)", summary: "Voor onderdanen van bij regeringsdecreet genoemde landen die in Hongarije in loondienst werken of een onderneming leiden. Afgegeven voor maximaal 2 jaar en telkens met maximaal 3 jaar verlengbaar." },
  ],
  watchOuts: [
    "De toelating is op lijsten gebaseerd. De nationaliteitenlijsten en de lijsten van uitgesloten beroepen wijzigen bij decreet, en het jaarlijkse plafond voor tewerkstellings- en gastarbeidersvergunningen kan de route sluiten; controleer de huidige decreten vóór de aanwerving.",
    "De tewerkstellingsvergunning kent een hard plafond van 3 jaar. Een werknemer die langer wil blijven, moet tijdig overstappen naar de Hungarian Card, de blauwe kaart of een ander statuut, en het vergunningstype kan tijdens de geldigheid niet in Hongarije worden gewijzigd behalve zoals de Wet toestaat.",
    "Verlies van de baan of een wisseling van werkgever vereist een nieuwe aanvraag binnen een korte termijn (het EU-immigratieportaal vermeldt 5 dagen), en verlengingen moeten vóór het verstrijken via Enter Hungary worden ingediend (het EU-immigratieportaal vermeldt ten minste 30 dagen vooraf).",
  ],
};
