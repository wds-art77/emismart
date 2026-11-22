import type { CountryDetails } from "../types";

export const it: CountryDetails = {
  authorities: [
    "Sportello Unico per l'Immigrazione (SUI) bij de Prefettura van de provincie van tewerkstelling: nulla osta en verblijfscontract",
    "Ministero dell'Interno, Dipartimento per le Libertà Civili e l'Immigrazione: ALI-portaal en procedure van het Decreto Flussi",
    "Ministero del Lavoro e delle Politiche Sociali: toewijzing van de quota aan de territoriale kantoren",
    "Italiaanse ambassade of Italiaans consulaat: inreisvisum voor werk in loondienst",
    "Questura (Polizia di Stato): afgifte en verlenging van de permesso di soggiorno",
  ],
  legalBasis: [
    "Decreto Legislativo 25 luglio 1998, n. 286, Testo Unico sull'immigrazione (artikelen 3, 5, 21, 22, 24-bis en 27)",
    "D.P.R. 31 agosto 1999, n. 394, uitvoeringsbesluit",
    "D.P.C.M. 2 ottobre 2025 over de instroom voor 2026 tot 2028 en de interministeriële circulaires ter uitvoering ervan",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Het quotum en de categorie controleren",
      actor: "Employer",
      detail:
        "De werkgever bevestigt dat de sector en de nationaliteit van de werknemer binnen de huidige quota en data van het Decreto Flussi vallen, of dat de baan tot een categorie buiten de quota behoort (artikel 27, Europese blauwe kaart, managers, onderzoekers, verpleegkundigen, kunstenaars).",
    },
    {
      title: "De onbeschikbaarheid nagaan bij het centro per l'impiego",
      actor: "Employer",
      detail:
        "De werkgever vraagt het lokale arbeidsbemiddelingscentrum of een werknemer die al in Italië is beschikbaar is. Geen antwoord binnen 8 dagen geldt als een negatief resultaat, en de controle wordt in het dossier gedocumenteerd.",
    },
    {
      title: "Het verzoek om nulla osta indienen op het ALI-portaal",
      actor: "Employer",
      detail:
        "Op de click day dient de werkgever, of een organisatie of arbeidsconsulent die voor hem optreedt, het verzoek op naam in (formulier B2020 voor niet-seizoensgebonden werk) met het voorgestelde verblijfscontract, het bewijs van huisvesting, de verbintenis om de terugkeerkosten te betalen, de asseverazione op grond van artikel 24-bis en een digitale woonplaats. Verzoeken worden behandeld in volgorde van indiening tot het quotum is opgebruikt.",
    },
    {
      title: "Nulla osta afgegeven en naar het consulaat gestuurd",
      actor: "Authority",
      detail:
        "De Sportello Unico controleert het dossier en het advies van de Questura en geeft de nulla osta af binnen 60 dagen nadat het verzoek op het quotum is aangerekend. De nulla osta wordt elektronisch naar het consulaat verzonden en is 6 maanden geldig.",
    },
    {
      title: "Inreisvisum",
      actor: "Employee",
      detail:
        "De werknemer vraagt het inreisvisum voor werk in loondienst aan bij het Italiaanse consulaat van het land van verblijf binnen de geldigheid van de nulla osta en reist naar Italië.",
    },
    {
      title: "Verblijfscontract en aanvraag van de verblijfsvergunning",
      actor: "Both",
      detail:
        "Binnen 8 werkdagen na binnenkomst vraagt de werknemer de permesso di soggiorno aan, en binnen de door de Testo Unico vastgestelde termijn (momenteel 15 dagen na binnenkomst) ondertekenen werkgever en werknemer het contratto di soggiorno, dat elektronisch naar de Sportello Unico wordt gestuurd. De nulla osta laat toe te werken zolang de vergunning hangende is.",
    },
    {
      title: "Vingerafdrukken en afhalen van de kaart",
      actor: "Employee",
      detail:
        "De werknemer gaat naar de afspraak bij de Questura voor de vingerafdrukken en haalt de elektronische verblijfsvergunning af, en registreert zich vervolgens waar nodig bij de gemeente en de belastingdienst.",
    },
  ],
  employerDocs: [
    { label: "Verzoek om nulla osta op naam op het ALI-portaal (formulier B2020 voor niet-seizoensgebonden werk in loondienst)" },
    { label: "Voorgesteld verblijfscontract (contratto di soggiorno) met de verbintenis om de terugkeerkosten van de werknemer te betalen" },
    { label: "Documentatie van passende huisvesting voor de werknemer, digitaal ondertekend" },
    { label: "Asseverazione door een arbeidsconsulent of werkgeversorganisatie op grond van artikel 24-bis(2), ter bevestiging van de draagkracht van de werkgever en de contractvoorwaarden", note: "Niet vereist wanneer het verzoek wordt ingediend door een organisatie of consulent die een protocol met het Ministerie heeft ondertekend." },
    { label: "Resultaat van de onbeschikbaarheidscontrole bij het centro per l'impiego" },
    { label: "Digitale woonplaats (PEC) geregistreerd in INI-PEC of INAD, en SPID- of CIE-toegang voor het portaal" },
  ],
  employeeDocs: [
    { label: "Geldig paspoort of reisdocument" },
    { label: "Kopie van de nulla osta afgegeven door de Sportello Unico" },
    { label: "Aanvraagformulier voor het inreisvisum en pasfoto's voor het consulaat" },
    { label: "Ondertekend verblijfscontract (contratto di soggiorno)" },
    { label: "Aanvraag van de permesso di soggiorno via de postkit met het fiscaal zegel en de betalingsbewijzen" },
    { label: "Bewijs van kwalificaties wanneer het beroep gereglementeerd is" },
    { label: "Codice fiscale (fiscaal nummer) en bewijs van adres na aankomst" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart (Carta blu UE)", summary: "Hooggekwalificeerde werknemers met een diploma of erkende beroepservaring en een loon boven de drempel; door de werkgever ingediend bij de Sportello Unico buiten de quota op grond van artikel 27-quater van de Testo Unico." },
    { name: "Categorieën buiten de quota (artikel 27)", summary: "Managers en hooggespecialiseerd personeel, universitaire docenten, onderzoekers, verpleegkundigen, kunstenaars, binnen een onderneming overgeplaatste werknemers en andere genoemde categorieën kunnen het hele jaar zonder quotum worden aangevraagd." },
    { name: "Vereenvoudigde protocolprocedure (artikel 24-bis)", summary: "Werkgeversorganisaties die een protocol met het Ministerie van Arbeid of van Binnenlandse Zaken ondertekenen, vervangen de nulla osta door een mededeling van het voorgestelde verblijfscontract, gecontroleerd door de Questura." },
    { name: "Visum voor digitale nomaden en telewerkers", summary: "Verblijfsvergunning voor hooggekwalificeerde telewerkers in dienst in het buitenland, met eigen inkomens- en verzekeringsvoorwaarden." },
  ],
  watchOuts: [
    "De quota zijn op click days binnen enkele minuten opgebruikt. Een verzoek dat na uitputting van het quotum wordt ingediend, blijft hangende en wordt mogelijk nooit behandeld, zodat het vooraf invullen op het ALI-portaal tijdens de voorbereidingsperiode essentieel is.",
    "De nulla osta verstrijkt na 6 maanden. Als het consulaat het visum dan nog niet heeft afgegeven en de werknemer Italië nog niet is ingereisd, moet de hele procedure opnieuw beginnen in een nieuwe quotaronde.",
    "Recente decreten hebben fraudebestendige controles toegevoegd: werkgevers moeten hun belangstelling na de afgifte van de nulla osta binnen een korte termijn bevestigen, en wie dat niet doet, verliest de toestemming. Controleer de huidige termijn in de laatste circulaire.",
  ],
};
