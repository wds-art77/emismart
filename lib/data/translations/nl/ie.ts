import type { CountryDetails } from "../types";

export const ie: CountryDetails = {
  authorities: [
    "Department of Enterprise, Tourism and Employment (DETE), Employment Permits Section: Employment Permits Online, beslissingen en herzieningen",
    "Immigration Service Delivery (ISD), Department of Justice, Home Affairs and Migration: visa, verblijfstoestemming en registratie voor de Irish Residence Permit",
    "Garda National Immigration Bureau (GNIB): registratie bij Garda-kantoren buiten Dublin",
    "Department of Social Protection, JobsIreland/EURES: bekendmaking van de vacature voor de Labour Market Needs Test",
    "Ierse ambassades en consulaten: aanvragen van een D-visum voor lang verblijf",
  ],
  legalBasis: [
    "Employment Permits Act 2024, van kracht sinds 2 september 2024 (Commencement Order S.I. No. 443 of 2024)",
    "Employment Permits Regulations 2024 (S.I. No. 444 of 2024), tot vaststelling van de vergunningstypes, de loondrempels, de Critical Skills en Ineligible Occupations Lists en de Labour Market Needs Test",
    "Protocol nr. 21 betreffende de positie van Ierland, gehecht aan de EU-Verdragen: Ierland heeft niet gekozen voor deelname aan Richtlijn 2011/98/EU of Richtlijn (EU) 2024/1233",
  ],
  steps: [
    {
      title: "De toelatingsvoorwaarden controleren en het werkgeversaccount aanmaken",
      actor: "Employer",
      detail:
        "De werkgever bevestigt dat het beroep niet op de Ineligible Occupations List staat, dat het loon de drempel in de Regulations haalt en dat aan de 50:50-regel voor EER-personeel is voldaan. Het account op Employment Permits Online vereist een Revenue-registratie en het CRO-nummer.",
    },
    {
      title: "De Labour Market Needs Test uitvoeren",
      actor: "Employer",
      detail:
        "Tenzij een vrijstelling geldt, wordt de vacature 28 opeenvolgende dagen zonder wijziging geplaatst op JobsIreland/EURES en op een tweede onlineplatform. Het JobsIreland-referentienummer wordt in de aanvraag opgenomen.",
    },
    {
      title: "Het contract ondertekenen en online aanvragen",
      actor: "Both",
      detail:
        "Het contract moet door beide partijen zijn ondertekend. De werkgever of de werknemer dient de aanvraag in op Employment Permits Online ten minste 12 weken vóór de startdatum, met de functieomschrijving, de kwalificaties, de immigratiegeschiedenis en het LMNT-bewijs, en betaalt de vergoeding. Onvolledige aanvragen die in het systeem blijven staan, worden verwijderd.",
    },
    {
      title: "Behandeling in volgorde van datum",
      actor: "Authority",
      detail:
        "DETE plaatst de aanvraag in de wachtrij op datum van ontvangst, kan aanvullende informatie vragen die binnen 28 dagen moet worden teruggestuurd, en verleent of weigert vervolgens. Een weigering kan binnen 28 dagen ter herziening worden voorgelegd aan een hogere ambtenaar.",
    },
    {
      title: "Vergunning afgegeven en D-visum waar vereist",
      actor: "Employee",
      detail:
        "De vergunning wordt afgegeven aan de werknemer en een kopie aan de werkgever. Visumplichtige onderdanen vragen online een D-visum voor lang verblijf voor tewerkstelling aan via de Ierse ambassade, met de vergunning als bijlage.",
    },
    {
      title: "Aankomst en registratie voor de Irish Residence Permit",
      actor: "Employee",
      detail:
        "Aan de grens verleent de immigratieambtenaar toestemming tot binnenkomst en draagt hij de werknemer op zich te registreren. Binnen 90 dagen registreert de werknemer zich bij ISD in Dublin of bij het lokale Garda-registratiekantoor, betaalt hij de registratievergoeding en ontvangt hij de Irish Residence Permit-kaart per post.",
    },
    {
      title: "Verlenging en wijzigingen",
      actor: "Both",
      detail:
        "De verlenging kan tot 4 maanden vóór het verstrijken worden aangevraagd. De werkgever moet DETE binnen de vastgestelde termijnen in kennis stellen van ontslag wegens herstructurering, vertrek of wijzigingen van de voorwaarden, en de verblijfstoestemming wordt afzonderlijk bij ISD verlengd vóór zij verstrijkt.",
    },
  ],
  employerDocs: [
    { label: "Werkgeversaccount op Employment Permits Online met Revenue-registratie en nummer van het Companies Registration Office" },
    { label: "Arbeidsovereenkomst ondertekend door beide partijen" },
    { label: "Volledige functieomschrijving met taken, uren, duur, locatie en loon" },
    { label: "Bewijs van de Labour Market Needs Test: JobsIreland/EURES-referentie en kopie van de tweede onlineadvertentie, of de grond voor een vrijstelling" },
    { label: "Personeelsgegevens waaruit de naleving van de 50:50-EER-regel blijkt, of ondersteuningsbrief van Enterprise Ireland/IDA Ireland voor start-ups" },
    { label: "Vergunningschecklist ingevuld vóór de indiening" },
  ],
  employeeDocs: [
    { label: "Geldig paspoort" },
    { label: "Bewijs van de kwalificaties, vaardigheden en ervaring die voor de functie vereist zijn" },
    { label: "Gegevens over de immigratiegeschiedenis en de huidige Ierse toestemming indien al in het land" },
    { label: "Kopie van de ondertekende arbeidsovereenkomst" },
    { label: "Aanvraag van een D-visum voor lang verblijf met de employment permit, voor visumplichtige onderdanen" },
    { label: "Originele employment permit en paspoort voor de registratie bij ISD" },
    { label: "Betaling van de door ISD vastgestelde registratievergoeding bij het afhalen van de Irish Residence Permit", note: "Controleer de huidige vergoeding op de website van ISD" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart", summary: "Niet beschikbaar: Ierland neemt niet deel aan de richtlijn Europese blauwe kaart. De Critical Skills Employment Permit is het nationale equivalent." },
    { name: "Critical Skills Employment Permit", summary: "Beroepen op de Critical Skills Occupations List of elke in aanmerking komende baan boven de hogere loondrempel, met een contract van ten minste 2 jaar. Geen Labour Market Needs Test, onmiddellijke gezinshereniging en een Stamp 4-toestemming na het verstrijken van de vergunning." },
    { name: "Intra-Company Transfer Employment Permit", summary: "Hoger management, sleutelpersoneel en stagiairs die van een buitenlandse vestiging naar de Ierse entiteit worden overgeplaatst, met een eigen behandelingswachtrij." },
    { name: "Atypical Working Scheme", summary: "Kortetermijntoestemming van ISD voor werk van maximaal 90 dagen dat buiten het stelsel van employment permits valt." },
  ],
  watchOuts: [
    "De aanlooptijd van 12 weken is een harde regel en de wachtrij loopt strikt in volgorde van datum; een onvolledige aanvraag gaat naar het einde van de wachtrij of wordt uit het portaal verwijderd.",
    "De JobsIreland-advertentie moet 28 dagen zonder wijziging lopen en de aanvraag moet binnen 90 dagen na de eerste publicatie worden ingediend, anders moet de Labour Market Needs Test worden herhaald.",
    "Een employment permit is geen verblijfstoestemming. De werknemer heeft waar vereist nog steeds een D-visum nodig en moet zich binnen 90 dagen bij ISD registreren; een late registratie kan latere aanvragen voor langdurig verblijf of staatsburgerschap beïnvloeden.",
  ],
};
