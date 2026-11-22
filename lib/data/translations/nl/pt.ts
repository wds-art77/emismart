import type { CountryDetails } from "../types";

export const pt: CountryDetails = {
  authorities: [
    "AIMA, Agência para a Integração, Migrações e Asilo: verblijfsvergunningen en verlengingen",
    "Portugese ambassades en consulaten (Ministério dos Negócios Estrangeiros): verblijfsvisa",
    "IEFP, Instituto do Emprego e da Formação Profissional: openbaar systeem van jobaanbiedingen",
    "Segurança Social: inschrijving van de werknemer, een voorwaarde voor de verblijfsvergunning",
    "ACT, Autoridade para as Condições do Trabalho: arbeidsinspectie",
  ],
  legalBasis: [
    "Lei n.º 23/2007, de 4 de julho (regime jurídico de entrada, permanência, saída e afastamento de estrangeiros), zoals gewijzigd, artikelen 52, 58, 59, 75, 77, 82 en 88",
    "Decreto Regulamentar n.º 84/2007, de 5 de novembro, ter uitvoering van de Lei de Estrangeiros",
    "Richtlijn 2011/98/EU, herzien bij Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Een jobaanbod in Portugal verkrijgen",
      actor: "Both",
      detail:
        "De werkgever stelt een arbeidsovereenkomst, een belofte van overeenkomst of een geïndividualiseerde verklaring van belangstelling om de werknemer aan te werven op. Voor gereglementeerde beroepen moet de werknemer ook over de erkende kwalificatie beschikken.",
    },
    {
      title: "Het verblijfsvisum aanvragen bij het consulaat",
      actor: "Employee",
      detail:
        "De werknemer dient persoonlijk in bij het Portugese consulaat van het land van verblijf, met het contract, het paspoort, een uittreksel uit het strafregister, bewijs van middelen, een reisverzekering en bewijs van huisvesting. Over het visum wordt binnen 60 dagen beslist en het is 4 maanden geldig voor twee binnenkomsten.",
    },
    {
      title: "Portugal inreizen en inschrijven",
      actor: "Both",
      detail:
        "De werknemer reist met het visum. De werkgever schrijft de werknemer in bij de Sociale Zekerheid en de werknemer verkrijgt een fiscaal nummer (NIF) en een socialezekerheidsnummer (NISS), beide nodig voor de vergunningsaanvraag.",
    },
    {
      title: "De AIMA-afspraak boeken en bijwonen",
      actor: "Employee",
      detail:
        "Binnen de geldigheid van 4 maanden van het visum vraagt de werknemer een afspraak bij AIMA aan en dient hij de aanvraag voor een verblijfsvergunning in op grond van artikel 88, lid 1, waarbij de biometrie tijdens de afspraak wordt afgenomen.",
    },
    {
      title: "Beslissing door AIMA",
      actor: "Authority",
      detail:
        "AIMA controleert de algemene voorwaarden van artikel 77 (geldig visum, bestaansmiddelen, huisvesting, inschrijving bij de Sociale Zekerheid, geen strafrechtelijke of veiligheidsgronden) en moet binnen 90 dagen beslissen, verlengbaar met 30 dagen.",
    },
    {
      title: "Verblijfskaart en verlenging",
      actor: "Employee",
      detail:
        "De verblijfskaart wordt afgegeven voor 2 jaar. De verlenging voor periodes van 3 jaar wordt vóór het verstrijken aangevraagd, met bewijs van voortgezette tewerkstelling of voldoende middelen, en wordt binnen 60 dagen beslist.",
    },
  ],
  employerDocs: [
    { label: "Arbeidsovereenkomst, belofte van arbeidsovereenkomst of geïndividualiseerde verklaring van belangstelling om de werknemer aan te werven" },
    { label: "Registratiegegevens van de onderneming en bewijs dat de werkgever in Portugal gevestigd is" },
    { label: "Bewijs van inschrijving van de werknemer bij de Segurança Social na aankomst" },
    { label: "Verklaring over de functie, het loon en de werkplek voor het visumdossier", note: "Consulaten kunnen de werkgever om een verklaring op eer vragen." },
  ],
  employeeDocs: [
    { label: "Aanvraagformulier voor een nationaal visum en recente pasfoto's" },
    { label: "Geldig paspoort met voldoende resterende geldigheid" },
    { label: "Uittreksel uit het strafregister van het land van nationaliteit of verblijf, gelegaliseerd of geapostilleerd, en machtiging voor AIMA om het Portugese strafregister te raadplegen" },
    { label: "Bewijs van bestaansmiddelen zoals vastgesteld bij ministerieel besluit" },
    { label: "Reisverzekering voor de visumfase en bewijs van huisvesting in Portugal" },
    { label: "Kwalificaties of beroepscertificaten waar de functie die vereist" },
    { label: "Portugees fiscaal nummer (NIF) en socialezekerheidsnummer (NISS) voor de AIMA-fase" },
    { label: "Gecertificeerde Portugese of Engelse vertalingen van documenten in andere talen" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart (Cartão azul UE)", summary: "Hooggekwalificeerd werk met een contract van ten minste 6 maanden en een loon boven een veelvoud van het nationale gemiddelde brutojaarloon; 2 jaar geldig, verlengbaar voor periodes van 3 jaar, met mobiliteitsrechten binnen de EU." },
    { name: "Visum voor werkzoekenden (visto para procura de trabalho qualificado)", summary: "Een visum van 120 dagen, verlengbaar met 60 dagen, nu gericht op personen met gespecialiseerde technische vaardigheden die gekwalificeerd werk zoeken. Zodra de houder is aangeworven, vraagt hij in Portugal de verblijfsvergunning aan." },
    { name: "Hooggekwalificeerde activiteit en Tech Visa", summary: "Verblijfsvisum en -vergunning voor hooggekwalificeerde activiteit, met inbegrip van de Tech Visa-certificeringsroute voor technologiebedrijven, op grond van afzonderlijke artikelen van de Lei de Estrangeiros." },
    { name: "Overplaatsing binnen een onderneming", summary: "Vergunning voor leidinggevenden, specialisten en stagiairs die binnen een groep worden overgeplaatst op grond van Richtlijn 2014/66/EU." },
  ],
  watchOuts: [
    "Het visum moet vóór aankomst worden verkregen. Sinds de route van de blijk van belangstelling in 2024 is afgeschaft, kan een werknemer die als toerist binnenkomt zich in Portugal niet regulariseren via een arbeidsovereenkomst.",
    "Afspraken en beslissingen van AIMA hebben de wettelijke termijnen ruim overschreden. Het visum is slechts 4 maanden geldig, dus de afspraak moet worden aangevraagd zodra de werknemer aankomt.",
    "De verblijfsvergunning vereist inschrijving bij de Sociale Zekerheid door de werkgever en een fiscaal nummer voor de werknemer. Dossiers lopen vast wanneer die ontbreken op de AIMA-afspraak.",
  ],
};
