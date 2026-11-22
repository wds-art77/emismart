import type { CountryDetails } from "../types";

export const si: CountryDetails = {
  authorities: [
    "Upravne enote (administratieve eenheden): ontvangen aanvragen, voeren de procedure en geven de vergunning af",
    "Zavod Republike Slovenije za zaposlovanje (ZRSZ, Sloveense Dienst voor Arbeidsbemiddeling): toestemming voor de gecombineerde vergunning en arbeidsmarktcontrole",
    "Sloveense diplomatieke missies en consulaire posten: aanvragen vanuit het buitenland en vingerafdrukken",
    "Ministerie van Binnenlandse Zaken (verblijfsregels) en het ministerie bevoegd voor arbeid (tewerkstelling van vreemdelingen)",
    "Administratieve rechtbank: beroepen tegen beslissingen van de administratieve eenheden",
  ],
  legalBasis: [
    "Zakon o tujcih (ZTuj-2, Vreemdelingenwet), in het bijzonder de artikelen 33 tot 37",
    "Zakon o zaposlovanju, samozaposlovanju in delu tujcev (ZZSDT, Wet op de tewerkstelling, het zelfstandig ondernemerschap en het werk van vreemdelingen)",
    "Richtlijn 2011/98/EU, herzien bij Richtlijn (EU) 2024/1233",
    "Besluit tot vaststelling van de activiteiten en beroepen waarin vreemdelingen sneller mogen worden tewerkgesteld (lijst voor de versnelde procedure), en de regels over de formulieren voor verblijfsvergunningen en het afnemen van vingerafdrukken",
  ],
  steps: [
    {
      title: "Facultatieve vacaturemelding en arbeidsmarktcontrole",
      actor: "Employer",
      detail:
        "De werkgever kan formulier PDM-KTD bij ZRSZ indienen via SPOT of persoonlijk. ZRSZ antwoordt binnen 5 werkdagen of geschikte kandidaten als werkloos zijn geregistreerd. Dit eerst doen verlaagt het risico op weigering.",
    },
    {
      title: "De arbeidsovereenkomst ondertekenen en de verklaringen voorbereiden",
      actor: "Both",
      detail:
        "De door de werkgever ondertekende overeenkomst wordt bij de aanvraag gevoegd, samen met de verklaringen van de werkgever over huisvesting en over beëindigingen om bedrijfseconomische redenen in de voorgaande 6 maanden.",
    },
    {
      title: "De aanvraag indienen",
      actor: "Both",
      detail:
        "De werkgever dient in bij een administratieve eenheid naar keuze of elektronisch via SPOT (eBDP), of de werknemer dient in bij een Sloveense missie in het buitenland of, als hij legaal aanwezig is, bij een administratieve eenheid. De vergoeding wordt bij de indiening betaald en de vingerafdrukken worden afgenomen. Aanvragers die legaal in Slovenië verblijven, ontvangen een bewijs van indiening dat tot de beslissing als tijdelijke verblijfsvergunning dient.",
    },
    {
      title: "De administratieve eenheid verkrijgt de toestemming van ZRSZ",
      actor: "Authority",
      detail:
        "De administratieve eenheid controleert de verblijfsvoorwaarden (paspoort, ziektekostenverzekering, bestaansmiddelen, strafregister) en vraagt ZRSZ ambtshalve om toestemming. ZRSZ controleert de werkgever, de kwalificaties van de werknemer en de arbeidsmarkt. Voor beroepen in de versnelde procedure wordt de aanvraag met voorrang behandeld.",
    },
    {
      title: "Beslissing en afhalen van de kaart",
      actor: "Employee",
      detail:
        "De administratieve eenheid neemt haar beslissing en de werknemer haalt de kaart persoonlijk af, waarbij hij een informatieblad over de inreistermijnen en rechten ontvangt. Aanvragers in het buitenland reizen Slovenië in met de vergunning of, waar vereist, een visum.",
    },
    {
      title: "Inschrijving voor de verplichte verzekering en registratie van het adres",
      actor: "Employer",
      detail:
        "Binnen 15 dagen na het afhalen van de kaart sluit de werkgever de arbeidsovereenkomst af en schrijft hij de werknemer in voor de verplichte sociale verzekering (formulier M1); in de versnelde procedure is de termijn 10 dagen vanaf het informatieblad. De vergunning kan worden ingetrokken als dit wordt gemist. De werknemer registreert het adres bij de administratieve eenheid.",
    },
  ],
  employerDocs: [
    { label: "Aanvraag voor de afgifte van een gecombineerde vergunning, ingediend bij de administratieve eenheid of via SPOT" },
    { label: "Arbeidsovereenkomst ondertekend door de werkgever" },
    { label: "Verklaring van de werkgever of huisvesting wordt verstrekt" },
    { label: "Verklaring van de werkgever over beëindigingen om bedrijfseconomische redenen in de voorgaande 6 maanden, met namen en data waar van toepassing" },
    { label: "PDM-KTD-vacaturemelding en kennisgeving van de arbeidsmarktcontrole van ZRSZ, wanneer vooraf ingediend" },
    { label: "Bewijs van voldane belastingverplichtingen en geregistreerde activiteit", note: "Door ZRSZ gecontroleerd in de toestemmingsprocedure" },
  ],
  employeeDocs: [
    { label: "Geldig paspoort, nog ten minste 3 maanden geldig na het beoogde verblijf" },
    { label: "Pasfoto die aan de voorgeschreven norm voldoet" },
    { label: "Uittreksel uit het strafregister van het land van herkomst", note: "Bij verlenging is een nieuw uittreksel van niet ouder dan 3 maanden nodig" },
    { label: "Ziektekostenverzekering die ten minste spoedeisende zorg in Slovenië dekt, tenzij verplicht verzekerd" },
    { label: "Bewijs van voldoende bestaansmiddelen, normaal de arbeidsovereenkomst" },
    { label: "Bewijs van de opleiding of beroepskwalificatie die voor de functie vereist is" },
    { label: "Vingerafdrukken, afgenomen bij de missie of de administratieve eenheid" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Voor universitair afgestudeerden met een contract van ten minste 1 jaar dat ten minste 1,5 keer het gemiddelde brutojaarloon betaalt; afgegeven door de administratieve eenheid voor 2 jaar met toestemming van ZRSZ. De werkgever moet de vacature eerst bekendmaken." },
    { name: "Tijdelijke verblijfsvergunning voor digitale nomaden", summary: "Ingevoerd op 21 november 2025 voor werknemers op afstand die in het buitenland in loondienst of als zelfstandige werken, met middelen van ten minste twee keer het gemiddelde nettoloon. 1 jaar geldig, niet verlengbaar; het gezin mag meteen meekomen." },
    { name: "Bilaterale overeenkomsten met Bosnië en Herzegovina en Servië", summary: "Werknemers uit deze landen verkrijgen een werkvergunning onder de overeenkomst, die geldt als toestemming van ZRSZ voor de gecombineerde vergunning." },
    { name: "Onderzoekers en personeel van het hoger onderwijs", summary: "Tijdelijke verblijfsvergunning voor onderzoek of onderwijs op basis van een gastovereenkomst (artikel 38 ZTuj-2), ingediend door de instelling." },
  ],
  watchOuts: [
    "De meeste vertragingen komen van onvolledige dossiers; administratieve eenheden hebben gemeld dat slechts een minderheid van de aanvragen volledig binnenkomt. De verklaringen van de werkgever over huisvesting en over ontslagen om bedrijfseconomische redenen ontbreken vaak.",
    "ZRSZ weigert toestemming wanneer de werkgever onbetaalde belastingen heeft, na een definitieve boete is uitgesloten van het tewerkstellen van vreemdelingen, of wanneer geschikte werkloze kandidaten zijn geregistreerd. De PDM-KTD-controle eerst indienen voorkomt verrassingen.",
    "Na het afhalen van de kaart heeft de werkgever 15 dagen (10 in de versnelde procedure) om de werknemer in te schrijven voor de verplichte verzekering; de vergunning kan worden ingetrokken als deze termijn wordt gemist. Gezinshereniging vereist een vergunning die voor ten minste 1 jaar is afgegeven.",
  ],
};
