import type { CountryDetails } from "../types";

export const mt: CountryDetails = {
  authorities: [
    "Identità, Expatriates Unit: ontvangt de aanvraag, geeft de gecombineerde vergunning en de verblijfskaart af",
    "Jobsplus: arbeidsmarkttoets, Declaration of Suitability, arbeidsvergunningen voor kortdurend werk",
    "Malta Qualifications Recognition Information Centre (MQRIC): erkenning van kwalificaties",
    "Maltese ambassade of consulaat: inreisvisum op basis van de Approval in Principle-brief",
    "Immigration Appeals Board: beroepen tegen weigeringen van de gecombineerde vergunning",
  ],
  legalBasis: [
    "Immigration Act (hoofdstuk 217 van de wetten van Malta)",
    "Subsidiary Legislation 217.17, Single Application Procedure for a Single Permit as regards Residence and Work and a Common Set of Rights for those Third-Country Workers Legally Residing in Malta Regulations (regeling inzake de enkele aanvraagprocedure voor een gecombineerde vergunning voor verblijf en werk en een gemeenschappelijk pakket rechten voor legaal in Malta verblijvende werknemers uit derde landen)",
    "Richtlijn 2011/98/EU, herzien bij Richtlijn (EU) 2024/1233",
    "Employment and Industrial Relations Act (hoofdstuk 452), die de beschermde status van werknemers uit derde landen vastlegt",
  ],
  steps: [
    {
      title: "Registreren bij Jobsplus en toegang tot het portaal verkrijgen",
      actor: "Employer",
      detail:
        "De werkgever moet bij Jobsplus geregistreerd zijn en met een persoonlijke e-ID toegang tot het Single Permit-portaal (singlepermit.gov.mt) aanvragen. Identità screent de organisatie bij Jobsplus, het Malta Business Registry en de belastingdienst voordat toegang wordt verleend.",
    },
    {
      title: "De vacature bekendmaken",
      actor: "Employer",
      detail:
        "Plaats de vacature bij Jobsplus en op EURES gedurende ten minste 3 weken binnen de 2 maanden vóór de aanvraag, en bewaar het bewijs. Vacatures die niet aan de Jobsplus-normen voldoen, leiden tot automatische weigering.",
    },
    {
      title: "De onlineaanvraag indienen",
      actor: "Employer",
      detail:
        "De werkgever vult de aanvraag in en laadt de documenten op het portaal op, waaronder de Declaration of Suitability van Jobsplus. De werknemer ontvangt een link om de gegevens te bevestigen en te valideren. Definitieve indiening is pas mogelijk zodra de vergoeding online is betaald door de werkgever of de werknemer.",
    },
    {
      title: "Controles door de betrokken instanties en Approval in Principle",
      actor: "Authority",
      detail:
        "Identità legt het dossier voor aan Jobsplus voor de arbeidsmarktbeoordeling en aan de politie voor de veiligheidscontrole. Bij goedkeuring wordt een Approval in Principle-brief afgegeven. Die geeft de werknemer niet het recht om te beginnen werken.",
    },
    {
      title: "Visum en binnenkomst",
      actor: "Employee",
      detail:
        "Werknemers die een visum nodig hebben, leggen de Approval in Principle-brief voor aan een Maltese ambassade of consulaat; voor bemanningsleden moet de brief binnen 180 dagen worden gebruikt. Aanvragers die al in Malta zijn, moeten op de datum van de aanvraag een visum of vergunning hebben die nog ten minste 6 weken geldig is.",
    },
    {
      title: "Biometrie en afgifte van de kaart",
      actor: "Employee",
      detail:
        "Na aankomst maakt de werknemer een afspraak voor de biometrie bij Identità en toont hij de originele documenten. De tewerkstelling mag pas beginnen zodra de vergunning is afgegeven; de werknemer eerder tewerkstellen is illegaal.",
    },
    {
      title: "De tewerkstelling registreren bij Jobsplus",
      actor: "Employer",
      detail:
        "Zodra de gecombineerde vergunning in handen is, dient de werkgever het engagement form in op het Jobsplus-portaal. Engagement- en termination-formulieren moeten binnen 4 werkdagen worden ingediend.",
    },
  ],
  employerDocs: [
    { label: "Aanvraag voor een gecombineerde vergunning, ingediend op het Identità-portaal door de gescreende werkgever" },
    { label: "Declaration of Suitability van Jobsplus die bevestigt dat de werknemer geschikt is voor de functie" },
    { label: "Bewijs dat de vacature gedurende de vereiste periode bij Jobsplus en op EURES is bekendgemaakt" },
    { label: "Ondertekende arbeidsovereenkomst of jobaanbod met gegevens over loon en functie", note: "Jobsplus kan contracten, vergunningen, bewijs van bedrijfsvestiging en nalevingsdossiers opvragen" },
    { label: "Bewijs dat de werkgever aan de Jobsplus-voorwaarden voldoet, zoals de tewerkstelling van ten minste één Maltese, EU- of Zwitserse onderdaan", note: "Door Jobsplus gecontroleerd aan de hand van zijn eigen gegevens; houd de engagement forms up-to-date" },
    { label: "Notariële volmacht wanneer een vertegenwoordiger indient namens een werkgever in het buitenland" },
  ],
  employeeDocs: [
    { label: "Gecertificeerde kopie van een geldig paspoort" },
    { label: "Pasfoto" },
    { label: "Curriculum vitae" },
    { label: "Door MQRIC erkende kwalificaties, of een ontvangstbewijs waaruit blijkt dat de erkenning is aangevraagd", note: "Zonder formele kwalificaties wordt ten minste 3 jaar relevante ervaring verwacht" },
    { label: "Inschrijving bij de relevante beroepsorganisatie voor gereglementeerde beroepen" },
    { label: "Bewijs van huisvesting in Malta, zoals een huurovereenkomst", note: "Vermeld op de checklists van Identità; controleer de huidige checklist voor de categorie" },
    { label: "Bewijs van medische screening of verzekering zoals vereist door de checklist van Identità" },
    { label: "Visum of verblijfsdocument dat nog ten minste 6 weken geldig is, voor aanvragers die al in Malta zijn" },
  ],
  alternativeRoutes: [
    { name: "Key Employee Initiative (KEI)", summary: "Versnelde gecombineerde vergunning voor leidinggevende of hoogtechnische functies met een brutoloon boven een door Identità vastgestelde drempel. Behandeling in ongeveer 5 werkdagen zodra het dossier volledig is; vergunning van 1 jaar, verlengbaar tot 3 jaar; een vacaturepublicatie van 2 weken volstaat." },
    { name: "Specialist Employee Initiative (SEI)", summary: "Snellere gecombineerde vergunning voor geschoolde werknemers met kwalificaties van MQF-niveau 6, of een MQF-certificering plus 3 jaar ervaring, boven een lagere loondrempel dan het KEI." },
    { name: "Europese blauwe kaart", summary: "Voor hooggekwalificeerde werknemers met een diploma hoger onderwijs en een loon boven de drempel voor de blauwe kaart; behandeld door Identità onder afzonderlijke regelgeving." },
    { name: "Arbeidsvergunning voor werk van minder dan 6 maanden", summary: "Jobsplus geeft een arbeidsvergunning af, waarna de werknemer bij Identità een verblijfsvergunning aanvraagt. Gebruikt voor seizoensarbeid en andere korte opdrachten." },
  ],
  watchOuts: [
    "De vacature moet aan de Jobsplus-normen voldoen (Jobsplus en EURES, ten minste 3 weken, binnen de 2 maanden vóór de indiening). Niet-conforme vacatures leiden tot automatische weigering en de vergoeding wordt niet terugbetaald.",
    "Jobsplus past per werkgever een Workforce Application Limit toe en weigert aanvragen van ondernemingen die in de voorgaande 12 maanden ontslagen hebben doorgevoerd in soortgelijke functies. Zodra de limiet is bereikt, worden tot de volgende maand geen aanvragen meer aanvaard.",
    "Verlengingen en wijzigingen van werkgever, adres of paspoort moeten worden ingediend vóór het huidige document verstrijkt; laattijdige aanvragen worden afgewezen. Een beroep tegen een weigering moet binnen 3 werkdagen bij de Immigration Appeals Board toekomen.",
  ],
};
