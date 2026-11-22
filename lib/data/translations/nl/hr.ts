import type { CountryDetails } from "../types";

export const hr: CountryDetails = {
  authorities: [
    "Ministerie van Binnenlandse Zaken (MUP), via de politieadministraties en politiebureaus: beslissing over de verblijfs- en werkvergunning",
    "Kroatische Dienst voor Arbeidsbemiddeling (Hrvatski zavod za zapošljavanje, HZZ): arbeidsmarkttoets, advies en knelpuntenlijst",
    "Kroatische diplomatieke missies en consulaire posten: ontvangst van aanvragen en visum D voor langdurig verblijf",
    "Administratieve rechtbanken in Zagreb, Split, Rijeka en Osijek: administratieve geschillen tegen beslissingen van het Ministerie",
  ],
  legalBasis: [
    "Zakon o strancima (Vreemdelingenwet, Staatsblad 133/20, met wijzigingen waaronder die van 2025 en 2026), in het bijzonder de artikelen 91 tot 110",
    "Pravilnik o boravku državljana trećih zemalja u Republici Hrvatskoj (Verordening betreffende het verblijf van onderdanen van derde landen)",
    "Richtlijn 2011/98/EU, herschikt bij Richtlijn (EU) 2024/1233",
    "Zakon o upravnim sporovima (Wet op de administratieve geschillen) voor rechterlijke toetsing",
  ],
  steps: [
    {
      title: "De arbeidsmarkttoets aanvragen bij HZZ",
      actor: "Employer",
      detail:
        "Tenzij het beroep op de knelpuntenlijst van HZZ staat of de werknemer onder artikel 110 valt, vraagt de werkgever HZZ of zijn regionale kantoor de toets uit te voeren. HZZ meldt binnen 15 dagen of geschikte kandidaten zijn ingeschreven.",
    },
    {
      title: "Aanvragen via het HZZ-platform",
      actor: "Employer",
      detail:
        "Binnen 90 dagen na een negatief toetsresultaat dient de werkgever de aanvraag voor de verblijfs- en werkvergunning voor de genoemde werknemer in op het webplatform van HZZ, met de overeenkomst en de documenten van de werknemer. HZZ controleert de werkgeversvoorwaarden en stuurt zijn advies door naar de bevoegde politieadministratie.",
    },
    {
      title: "De politieadministratie beslist",
      actor: "Authority",
      detail:
        "De politieadministratie of het politiebureau van de beoogde verblijfplaats van de werknemer onderzoekt het dossier, vraagt binnen 5 werkdagen om ontbrekende stukken en moet binnen 90 dagen na een volledige aanvraag beslissen. De werkgever betaalt de administratieve vergoeding en haalt de beslissing af.",
    },
    {
      title: "Visum D en binnenkomst",
      actor: "Employee",
      detail:
        "Werknemers die een visum nodig hebben, vragen op basis van de goedgekeurde vergunning een visum D voor langdurig verblijf aan bij een Kroatische diplomatieke missie. Visumvrije onderdanen mogen het land binnenkomen en de formaliteiten in Kroatië afronden.",
    },
    {
      title: "Het adres registreren en biometrische gegevens afgeven",
      actor: "Employee",
      detail:
        "De werknemer registreert het adres bij de politie binnen 3 dagen na binnenkomst en geeft biometrische gegevens af, binnen 30 dagen na afgifte van het visum wanneer er een nodig was, om de biometrische verblijfskaart te ontvangen.",
    },
    {
      title: "Het werk beginnen en wijzigingen melden",
      actor: "Both",
      detail:
        "Het werk mag pas beginnen zodra de vergunning is afgegeven, en alleen voor de genoemde werkgever en het genoemde beroep. De beëindiging van de tewerkstelling moet binnen 15 dagen aan de politie worden gemeld. Een verandering van werkgever of beroep vereist een nieuwe HZZ-toets, tenzij het beroep op de knelpuntenlijst staat.",
    },
  ],
  employerDocs: [
    { label: "Verzoek om de arbeidsmarkttoets bij HZZ en de kennisgeving van het resultaat" },
    { label: "Aanvraag voor een verblijfs- en werkvergunning (Obrazac 2a) of een Europese blauwe kaart (Obrazac 4a), ingevuld en ondertekend" },
    { label: "Arbeidsovereenkomst ondertekend door werkgever en werknemer", note: "Dient als bewijs van bestaansmiddelen voor de eerste vergunning" },
    { label: "Bewijs dat de werkgever aan de voorwaarden voor het HZZ-advies voldoet: geregistreerde activiteit, geen belasting- of bijdrageschulden, ten minste één Kroatische of EER-werknemer voltijds met een overeenkomst van onbepaalde duur in de laatste 6 maanden", note: "HZZ kan een attest van fiscale regelmatigheid vragen" },
    { label: "Bewijs van betaling van de administratieve vergoeding voor de vergunning en de verblijfskaart" },
  ],
  employeeDocs: [
    { label: "Kopie van een geldig reisdocument" },
    { label: "Kleurenfoto (30 x 35 mm)" },
    { label: "Attest van geen strafrechtelijke veroordeling uit het land van herkomst of een land van verblijf van meer dan 1 jaar, gelegaliseerd", note: "Alleen vereist voor de eerste vergunning" },
    { label: "Bewijs van onderwijs- of beroepskwalificatie" },
    { label: "Erkenning van de beroepskwalificatie voor gereglementeerde beroepen" },
    { label: "Bewijs van ziektekostenverzekering", note: "Niet nodig bij een eerste aanvraag onder een overeenkomst met een Kroatische werkgever; vereist bij verlenging met de HZZO-kaart of het HZZO-formulier" },
    { label: "Zes loonfiches van onmiddellijk vóór de aanvraag, voor verlengingen" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Voor hooggekwalificeerde werknemers met hoger onderwijs en een overeenkomst van ten minste 1 jaar met een loon van ten minste 1,5 keer het gemiddelde bruto jaarloon. Geen arbeidsmarkttoets of HZZ-advies; 2 jaar geldig; de Wet stelt een beslistermijn van 60 dagen." },
    { name: "Categorieën van artikel 110 (sleutelpersoneel, binnen een onderneming overgeplaatste personen, dienstverleners)", summary: "Verblijfs- en werkvergunning zonder arbeidsmarkttoets of HZZ-advies, rechtstreeks aangevraagd bij de politieadministratie. Omvat eigenaars van een vennootschap of ambachtsbedrijf met een belang van ten minste 51 procent." },
    { name: "Tijdelijk verblijf van digitale nomaden", summary: "Voor werknemers op afstand die in dienst zijn van of een onderneming leiden die niet in Kroatië is geregistreerd en geen Kroatische werkgevers bedient. Verleend voor maximaal 18 maanden met een maandelijkse drempel van bestaansmiddelen van 2,5 gemiddelde nettolonen; geen werkvergunning." },
    { name: "Attest van registratie van werk", summary: "Potvrda o prijavi rada voor korte opdrachten van maximaal 90 dagen (of 30 dagen per kalenderjaar voor sommige categorieën) zonder verblijfs- en werkvergunning." },
  ],
  watchOuts: [
    "Het resultaat van de arbeidsmarkttoets vervalt: de vergunningsaanvraag moet binnen 90 dagen na de kennisgeving van HZZ worden ingediend, anders moet de toets worden herhaald. HZZ geeft negatieve adviezen wanneer doorverwezen kandidaten niet werden uitgenodigd voor een gesprek of wanneer werkgeversvoorwaarden zoals fiscale regelmatigheid of de vereiste van een Kroatische werknemer niet zijn vervuld.",
    "Het e-mailkanaal van de politie en de rechtstreekse indiening zijn alleen bedoeld voor vergunningen die geen toets of advies nodig hebben, verlengingen en gevallen van artikel 110. Een HZZ-afhankelijke aanvraag die daar wordt ingediend, loopt vast; zij moet via het HZZ-platform gaan.",
    "Gezinshereniging voor houders van een vergunning op basis van het HZZ-advies is onderworpen aan een wachttijd van 1 jaar, en periodes als seizoenarbeider, stagiair, ICT of dienstverlener tellen niet mee voor langdurig verblijf.",
  ],
};
