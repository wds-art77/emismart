import type { CountryDetails } from "../types";

export const at: CountryDetails = {
  authorities: [
    "Verblijfsautoriteit (Niederlassungsbehörde): districtsbestuur (Bezirkshauptmannschaft) of stadsmagistraat, MA 35 in Wenen, de deelstaatregering van Neder-Oostenrijk in Neder-Oostenrijk en de Stiermarkse deelstaatregering in Graz",
    "Arbeitsmarktservice (AMS), regionaal kantoor voor de zetel van de werkgever: puntencontrole, looncontrole en arbeidsmarkttoets",
    "Oostenrijkse vertegenwoordigingen in het buitenland (BMEIA-netwerk): ontvangst van aanvragen en afgifte van het D-visum",
    "Federaal Ministerie van Binnenlandse Zaken (BMI): formulieren, werkgeversverklaring en verblijfsrecht",
  ],
  legalBasis: [
    "Niederlassungs- und Aufenthaltsgesetz (NAG), in het bijzonder § 41, en de NAG-Durchführungsverordnung",
    "Ausländerbeschäftigungsgesetz (AuslBG), in het bijzonder §§ 12b en 20d, met de jaarlijkse Fachkräfteverordnung die de knelpuntberoepen opsomt",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "De categorie kiezen en de werkgeversverklaring ondertekenen",
      actor: "Employer",
      detail:
        "De werkgever bevestigt welke categorie van de Rot-Weiß-Rot – Karte bij de werknemer past (knelpuntberoep, andere sleutelwerknemer, afgestudeerde, zeer hooggekwalificeerd) en vult de werkgeversverklaring van het BMI in, met vermelding van de functie, het brutoloon en de arbeidsvoorwaarden.",
    },
    {
      title: "De aanvraag indienen",
      actor: "Both",
      detail:
        "De werknemer dient persoonlijk in bij de Oostenrijkse vertegenwoordiging in het buitenland, of de werkgever dient in bij de verblijfsautoriteit in Oostenrijk. Het dossier bevat de werkgeversverklaring, het paspoort, een foto, bewijs van kwalificaties, ervaring en taalkennis, en de aanvraagvergoeding.",
    },
    {
      title: "Doorzending naar het AMS",
      actor: "Authority",
      detail:
        "De vertegenwoordiging of de verblijfsautoriteit stuurt de aanvraag door naar het regionale AMS-kantoor dat bevoegd is voor de zetel van de werkgever.",
    },
    {
      title: "Beoordeling door het AMS",
      actor: "Authority",
      detail:
        "Het AMS controleert de punten, of het loon het wettelijke minimum voor de categorie bereikt en, voor sleutelwerknemers, of een even gekwalificeerde ingeschreven werkzoekende beschikbaar is. Het meldt het resultaat aan de verblijfsautoriteit.",
    },
    {
      title: "Beslissing en visuminstructie",
      actor: "Authority",
      detail:
        "De verblijfsautoriteit controleert de algemene voorwaarden (ziektekostenverzekering, geen inreisverbod, geen gevaar voor de openbare orde) en beslist binnen 8 weken. Wanneer een visum nodig is, geeft zij de vertegenwoordiging de instructie een D-visum af te geven voor de binnenkomst en het afhalen van de kaart.",
    },
    {
      title: "D-visum en binnenkomst",
      actor: "Employee",
      detail:
        "De werknemer vraagt het D-visum aan binnen 3 maanden na de kennisgeving en reist naar Oostenrijk. Visumvrije onderdanen reizen rechtstreeks in.",
    },
    {
      title: "De kaart afhalen en het werk beginnen",
      actor: "Employee",
      detail:
        "De kaart wordt persoonlijk afgehaald bij de verblijfsautoriteit, op afspraak, binnen 3 maanden na binnenkomst. Het werk mag beginnen zodra de kaart is ontvangen.",
    },
  ],
  employerDocs: [
    { label: "Werkgeversverklaring (Arbeitgebererklärung) op het BMI-formulier, met bevestiging van de arbeidsvoorwaarden" },
    { label: "Bindend jobaanbod of ondertekende arbeidsovereenkomst met vermelding van het bruto maandloon inclusief bijzondere betalingen" },
    { label: "Bewijs dat het loon het wettelijke minimum voor de categorie bereikt, of het minimum van de collectieve arbeidsovereenkomst plus de gebruikelijke meerbetaling voor knelpuntberoepen" },
    { label: "Gegevens over de functie voor de arbeidsmarkttoets van het AMS, wanneer de categorie die vereist" },
    { label: "Bevestiging dat Engels de overheersende bedrijfstaal is, wanneer daarvoor bonuspunten worden gevraagd" },
  ],
  employeeDocs: [
    { label: "Geldig reisdocument" },
    { label: "Pasfoto van 45 x 35 mm, niet ouder dan 6 maanden" },
    { label: "Bewijs van een ziektekostenverzekering die alle risico's in Oostenrijk dekt" },
    { label: "Uittreksel uit het strafregister van het land van herkomst of van langdurig verblijf, idealiter niet ouder dan 3 maanden", note: "Door de meeste autoriteiten geval per geval gevraagd" },
    { label: "Bewijs van kwalificaties: beroepsdiploma, toelatingsbewijs voor het hoger onderwijs of universitair diploma met bewijs van het statuut van de instelling" },
    { label: "Werkervaring: dienstattesten en bevestigingen van werkgevers" },
    { label: "Taalcertificaten op het opgegeven ERK-niveau, niet ouder dan 5 jaar" },
    { label: "Beëdigde vertalingen van documenten die niet in het Duits of Engels zijn opgesteld, met apostille of legalisatie waar vereist" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart (Blaue Karte EU)", summary: "Diploma van ten minste 3 jaar of, voor ICT-professionals, 3 jaar relevante ervaring, een jobaanbod van ten minste 6 maanden en een loon boven de jaarlijkse drempel op basis van het gemiddelde voltijdse bruto jaarinkomen. Arbeidsmarkttoets door het AMS, geen puntensysteem, 24 maanden geldig." },
    { name: "Rot-Weiß-Rot – Karte voor zeer hooggekwalificeerde werknemers", summary: "Ten minste 70 van de 100 punten. Een visum voor werkzoekenden van 6 maanden laat toe het land binnen te komen om werk te zoeken; zodra een passende baan is gevonden, wordt de kaart aangevraagd zonder arbeidsmarkttoets." },
    { name: "Rot-Weiß-Rot – Karte voor geschoolde werknemers in knelpuntberoepen", summary: "Beroepsopleiding in een beroep op de jaarlijkse lijst van de Fachkräfteverordnung, ten minste 55 punten en loon op het minimum van de collectieve arbeidsovereenkomst. Geen arbeidsmarkttoets." },
    { name: "Tijdelijke verblijfsvergunning ICT (Aufenthaltsbewilligung ICT)", summary: "Leidinggevenden, specialisten en stagiairs die binnen een groep naar een Oostenrijkse entiteit worden overgeplaatst. Moet altijd vanuit het buitenland worden aangevraagd." },
  ],
  watchOuts: [
    "De beslistermijn van 8 weken en de termijn van 45 dagen voor een voorlopige start na een verandering van werkgever lopen alleen zolang het dossier volledig is. Ontbrekende certificaten, vertalingen of de werkgeversverklaring schorsen die termijnen.",
    "De kaart is gebonden aan één werkgever. Een nieuwe werkgever betekent een aanvraag tot wijziging van het verblijfsdoel, en de werknemer mag pas na 45 dagen voorlopig beginnen (30 dagen voor houders van een blauwe kaart).",
    "Indienen in Oostenrijk tijdens een visumvrij verblijf verlengt het verblijfsrecht niet automatisch. De officiële pagina's beschrijven de voorwaarden waaronder een tijdige aanvraag de werknemer toelaat de beslissing in Oostenrijk af te wachten; bevestig dit dus bij de verblijfsautoriteit vóór het einde van de visumvrije periode.",
  ],
};
