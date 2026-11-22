import type { CountryDetails } from "../types";

export const fr: CountryDetails = {
  authorities: [
    "Ministerie van Binnenlandse Zaken, ANEF-platform en de interregionale platforms voor buitenlandse arbeidskrachten (plateformes de main-d'œuvre étrangère)",
    "France Travail: publicatie van de vacature voor de arbeidsmarkttoets",
    "Frans consulaat (France-Visas): visum voor lang verblijf",
    "Prefectuur: verlengingen van de verblijfsvergunning en statuswijzigingen in het land",
  ],
  legalBasis: [
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
    "Code de l'entrée et du séjour des étrangers et du droit d'asile (CESEDA), met name de artikelen L. 421-1 en volgende, en R. 5221-1 en volgende van de Code du travail",
    "Arrêté van 3 januari 2025 over de bewijsstukken en arrêté van 21 mei 2025 over de regionale lijsten van knelpuntberoepen",
  ],
  steps: [
    {
      title: "De vacature publiceren",
      actor: "Employer",
      detail:
        "Tenzij de baan op de knelpuntenlijst staat, publiceert de werkgever het aanbod ten minste 3 weken bij France Travail en bewaart hij het bewijs van de vruchteloze aanwerving.",
    },
    {
      title: "De arbeidsvergunning online aanvragen",
      actor: "Employer",
      detail:
        "De werkgever dient de aanvraag in op het ANEF-werkgeversportaal met het contract, de bedrijfsdocumenten en de identiteits- en kwalificatiedocumenten van de werknemer.",
    },
    {
      title: "Beoordeling door het platform voor buitenlandse arbeidskrachten",
      actor: "Authority",
      detail:
        "Het platform controleert de arbeidsmarkttoets, het loon (ten minste de SMIC of het minimum van de collectieve arbeidsovereenkomst), het nalevingsverleden van de werkgever en de overeenstemming tussen baan en kwalificaties.",
    },
    {
      title: "Beveiligde arbeidsvergunning afgegeven",
      actor: "Authority",
      detail:
        "De werkgever en de werknemer ontvangen de vergunning per e-mail. Zij geldt voor de specifieke baan en werkgever.",
    },
    {
      title: "Het VLS-TS aanvragen bij het consulaat",
      actor: "Employee",
      detail:
        "De werknemer dient de aanvraag in op France-Visas met de arbeidsvergunning, het paspoort, foto's en bewijsstukken, en gaat vervolgens naar de visumafspraak.",
    },
    {
      title: "Het visum na aankomst online valideren",
      actor: "Employee",
      detail:
        "Binnen 3 maanden na binnenkomst valideert de werknemer het VLS-TS op het ANEF-portaal en betaalt hij de taks. Het gevalideerde visum is voor zijn duur de verblijfs- en werktitel.",
    },
  ],
  employerDocs: [
    { label: "Online aanvraag van de arbeidsvergunning op ANEF" },
    { label: "Kbis-uittreksel of gelijkwaardig registratiedocument" },
    { label: "Ondertekende arbeidsovereenkomst of belofte van tewerkstelling (CERFA waar van toepassing)" },
    { label: "Bewijs van publicatie van de vacature bij France Travail gedurende 3 weken", note: "Niet vereist voor knelpuntberoepen." },
    { label: "Attest van naleving van de sociale bijdragen (URSSAF)" },
  ],
  employeeDocs: [
    { label: "Geldig paspoort" },
    { label: "Curriculum vitae en diploma's of bewijs van ervaring die relevant is voor de functie" },
    { label: "Beveiligde arbeidsvergunning afgegeven aan de werkgever" },
    { label: "Aanvraagformulier France-Visas en ICAO-foto's" },
    { label: "Bewijs van huisvesting in Frankrijk voor de visumfase" },
    { label: "Geboorteakte en documenten van de burgerlijke stand, vertaald, voor gezinsaanvragen" },
  ],
  alternativeRoutes: [
    { name: "Passeport talent", summary: "Meerjarige vergunning voor hooggekwalificeerde werknemers, Europese blauwe kaart, onderzoekers, investeerders en oprichters van ondernemingen. Geen arbeidsmarkttoets." },
    { name: "Salarié détaché ICT", summary: "Voor overplaatsingen binnen een groep van managers en deskundigen." },
    { name: "Changement de statut", summary: "Voor studenten of andere ingezetenen die al in Frankrijk zijn en een in aanmerking komende baan vinden." },
  ],
  watchOuts: [
    "De arbeidsvergunning is baangebonden. Een nieuw contract vereist een nieuwe vergunning.",
    "De werkgever moet de echtheid van een bestaande verblijfstitel ten minste 2 werkdagen vóór de aanwerving bij de prefectuur laten controleren.",
    "De regionale knelpuntenlijsten zijn in mei 2025 gewijzigd en worden bijgewerkt; raadpleeg de lijst voor het departement van tewerkstelling.",
  ],
};
