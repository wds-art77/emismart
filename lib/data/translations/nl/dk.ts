import type { CountryDetails } from "../types";

export const dk: CountryDetails = {
  authorities: [
    "Styrelsen for International Rekruttering og Integration (SIRI): beslissing over alle werkregelingen, certificering van Fast-track-bedrijven, Burgercentrum voor biometrie",
    "Deense diplomatieke missies en visumaanvraagcentra in het buitenland: registratie van biometrische gegevens",
    "Regionale Arbeidsraden (Regionale Arbejdsmarkedsråd): beoordeling of loon en voorwaarden aan de Deense normen voldoen, en aanvullingen van de Positive Lists",
    "Deense Autoriteit voor Patiëntveiligheid en andere erkenningsinstanties: erkenning voor gereglementeerde beroepen voordat een vergunning kan worden verleend",
  ],
  legalBasis: [
    "Udlændingeloven (Deense Vreemdelingenwet), artikel 9 a, dat de werkregelingen opsomt, waaronder de Positive Lists, de Pay Limit Scheme en de Fast-track Scheme",
    "Protocol nr. 22 betreffende de positie van Denemarken, gehecht aan de EU-Verdragen, op grond waarvan Richtlijn 2011/98/EU en Richtlijn (EU) 2024/1233 Denemarken niet binden",
    "Jaarlijkse aanpassing van de bedragen van de loongrens op 1 januari en halfjaarlijkse actualisering van de Positive Lists",
  ],
  steps: [
    {
      title: "De regeling kiezen en loon en voorwaarden controleren",
      actor: "Employer",
      detail:
        "De werkgever controleert of het loon de huidige loongrens overschrijdt, of de functietitel op een Positive List staat, of of het bedrijf Fast-track-gecertificeerd is. De arbeidstijd moet ten minste 30 uur per week bedragen onder de Pay Limit Scheme en voltijds zijn onder Fast-track, en de baan mag niet onder een arbeidsconflict vallen.",
    },
    {
      title: "Een case order ID aanmaken en de vergoeding betalen",
      actor: "Both",
      detail:
        "De werkgever of de werknemer maakt het case order ID aan op nyidanmark.dk en betaalt de behandelingsvergoeding. Het betaalbewijs moet bij de aanvraag worden gevoegd. Grensarbeiders die niet in Denemarken zullen wonen, hebben geen van beide nodig.",
    },
    {
      title: "De onlineaanvraag invullen",
      actor: "Both",
      detail:
        "In AR1 vult de werkgever het deel over het bedrijf en de baan in en de werknemer het persoonlijke deel, met ondertekening via MitID of een verklaring op eer. In AR6 dient de werkgever in met een volmacht. De overeenkomst of het jobaanbod, paspoortkopieën en opleidingsdocumenten worden bijgevoegd.",
    },
    {
      title: "Biometrische gegevens laten registreren binnen 14 dagen",
      actor: "Employee",
      detail:
        "De werknemer laat gezichtsopname en vingerafdrukken registreren bij een Deense missie of een aanvraagcentrum in het buitenland, of op afspraak bij een SIRI-kantoor als hij legaal in Denemarken is. Het missen van de termijn leidt tot afwijzing.",
    },
    {
      title: "Beoordeling door SIRI",
      actor: "Authority",
      detail:
        "SIRI controleert de looncomponenten, of de voorwaarden aan de Deense norm voldoen, de eventueel vereiste erkenning en de echtheid van de tewerkstelling. Het kan aanvullende documenten vragen of een Regionale Arbeidsraad raadplegen, wat de behandeltermijn verlengt.",
    },
    {
      title: "Beslissing en verblijfskaart",
      actor: "Authority",
      detail:
        "De beslissing wordt naar de aanvrager en, waar relevant, de werkgever gestuurd. De verblijfskaart wordt per post verzonden naar het in het CPR geregistreerde adres van de werknemer in Denemarken, dus de naam moet op de brievenbus staan.",
    },
    {
      title: "Aankomst, CPR-registratie en Deense bankrekening",
      actor: "Employee",
      detail:
        "De werknemer registreert een Deens adres in het CPR-register en opent binnen 180 dagen na de vergunning of na binnenkomst een Deense bankrekening op eigen naam. Het loon moet op die rekening worden gestort. Elke verandering van baan, zelfs binnen het bedrijf, moet aan SIRI worden gemeld.",
    },
  ],
  employerDocs: [
    { label: "Arbeidsovereenkomst of jobaanbod met vermelding van loon, arbeidsvoorwaarden en een functiebeschrijving" },
    { label: "Documentatie van looncomponenten die niet in de overeenkomst zijn vermeld, zoals pensioen of gegarandeerde toeslagen" },
    { label: "Volmacht van de werknemer wanneer de werkgever alleen indient (AR6)" },
    { label: "Voor pas opgerichte bedrijven: ondernemingsplan en begroting of grootboekbalans; voor bedrijven in oprichting: oprichtingsplan en overzicht van de belangrijkste kosten" },
    { label: "Werkgevers in de horeca en voedingsdiensten: de aanvullende SIRI-documentenchecklist voor de sector" },
    { label: "Fast-track-aanvragen: de SIRI-certificering van het bedrijf en, voor het opleidingsspoor, een beschrijving van het opleidingsdoel" },
  ],
  employeeDocs: [
    { label: "Betaalbewijs van de behandelingsvergoeding met het case order ID" },
    { label: "Kopie van alle paspoortpagina's, inclusief blanco pagina's en omslag" },
    { label: "Documentatie van relevante opleiding en werkervaring; voor de Positive Lists, bewijs van het vereiste niveau van hoger onderwijs of beroepsopleiding" },
    { label: "Deense erkenning wanneer het beroep die vereist, bijvoorbeeld van de Deense Autoriteit voor Patiëntveiligheid" },
    { label: "Bewijs van legaal verblijf in Denemarken bij een aanvraag vanuit het land" },
    { label: "Curriculum vitae waar relevant" },
    { label: "Vertalingen van documenten die niet in het Deens, Engels, Noors of Zweeds zijn opgesteld" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Niet beschikbaar: Denemarken neemt niet deel aan de regeling van de Europese blauwe kaart. De Pay Limit Scheme en het Fast-track-spoor pay limit dienen in plaats daarvan voor goed betaalde werknemers." },
    { name: "Positive List voor hoger opgeleiden en Positive List voor geschoold werk", summary: "Knelpuntberoepen opgesomd per DISCO-code met de vereiste opleiding, bijgewerkt op 1 januari en 1 juli, met regionale aanvullingen. Geen loongrens buiten de Deense normen; vergunningen van 4 jaar." },
    { name: "Fast-track Scheme", summary: "Voor door SIRI gecertificeerde bedrijven. Vijf sporen (pay limit, supplementary pay limit, korte termijn, onderzoeker, opleiding), snelle start van het werk en toestemming om zowel in Denemarken als in het buitenland te werken." },
    { name: "Supplementary Pay Limit Scheme", summary: "Een lagere loongrens voor banen die 2 weken op Jobnet en EURES zijn gepubliceerd, beschikbaar zolang de nationale werkloosheid onder een vastgesteld percentage blijft. Vergunningen tot 5 jaar, maar geen zoekperiode." },
  ],
  watchOuts: [
    "Biometrische gegevens moeten binnen 14 dagen na indiening worden geregistreerd en de AR1-aanvrager moet zich aanmelden met exact het e-mailadres dat de werkgever heeft ingevoerd; beide zijn veelvoorkomende oorzaken van afwijzing of van een nieuwe start.",
    "Alleen gegarandeerd loon in geld, pensioenbijdragen en vakantiegeld tellen mee voor de loongrens. Huisvesting, auto, telefoon en andere voordelen in natura tellen niet mee, en vakantiegeld dat het volgende jaar wordt uitbetaald, telt niet mee voor het jaar waarin het is verdiend.",
    "De vergunning is gebonden aan de baan. Een nieuwe functie, zelfs binnen hetzelfde bedrijf, vereist een nieuwe aanvraag, en het loon moet binnen 180 dagen op een Deense bankrekening worden gestort, anders komt de vergunning in gevaar.",
  ],
};
