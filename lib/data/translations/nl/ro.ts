import type { CountryDetails } from "../types";

export const ro: CountryDetails = {
  authorities: [
    "Inspectoratul General pentru Imigrări (IGI): controleert de ontvankelijkheid van de gecombineerde aanvraag, beslist over het verblijfsrecht voor werk en geeft de permis unic af",
    "Agenția Națională pentru Ocuparea Forței de Muncă (ANOFM): registreert en erkent werkgevers en arbeidsbemiddelingsbureaus, stelt de lijst van knelpuntberoepen op",
    "Ministerul Afacerilor Externe en de Roemeense diplomatieke missies: ontvangen de werknemer op het consulaat en geven het D/AM-visum af via het eViza-systeem",
    "Ministerul Educației și Cercetării (CNRED): erkenning van kwalificaties voor hooggekwalificeerde werknemers",
    "Inspecția Muncii: arbeidsinspectie en registratie van contracten in REGES-ONLINE",
  ],
  legalBasis: [
    "Ordonanța de urgență nr. 32/2026 privind accesul străinilor pe piața muncii din România",
    "Ordonanța de urgență nr. 194/2002 privind regimul străinilor în România, republicată, zoals gewijzigd bij OUG 32/2026 (art. 27^1, 27^2, 44 en 56)",
    "Richtlijn 2011/98/EU, herzien bij Richtlijn (EU) 2024/1233",
    "Hotărârea Guvernului nr. 295/2025 privind Registrul general de evidență a salariaților (REGES-ONLINE)",
  ],
  steps: [
    {
      title: "De werkgever registreren op WorkinRomania.gov.ro",
      actor: "Employer",
      detail:
        "De werkgever maakt een account aan op het platform en vraagt de registratie aan in het register van werkgevers van buitenlandse werknemers (RAS). ANOFM controleert belastingschulden, eerdere sancties voor zwartwerk en strafrechtelijke veroordelingen en beslist binnen 30 werkdagen. Werkgevers die D/AM2-werknemers zonder bureau willen aanwerven, hebben een afzonderlijke vergunning nodig met een financiële waarborg per werknemer.",
    },
    {
      title: "Het vaste jobaanbod opladen en de route kiezen",
      actor: "Employer",
      detail:
        "De werkgever laadt een vast jobaanbod op met vermelding van beroep, taken, loon, arbeidstijd, contractduur en werkplek. Hooggekwalificeerde werknemers en andere bijzondere categorieën volgen de D/AM1-route. Vaste, seizoens- en grensarbeiders volgen de D/AM2-route, die een beroep op de knelpuntlijst vereist en, tenzij de werkgever een vergunning heeft, een dienstencontract met een erkend arbeidsbemiddelingsbureau en een tripartiete bemiddelingsovereenkomst met de werknemer.",
    },
    {
      title: "De arbeidsovereenkomst ondertekenen en de gecombineerde aanvraag indienen",
      actor: "Employer",
      detail:
        "De individuele arbeidsovereenkomst, in het Roemeens en in een taal die de werknemer begrijpt, wordt geregistreerd in REGES-ONLINE. De werkgever (D/AM1) of het arbeidsbemiddelingsbureau of de vergunde werkgever (D/AM2) vult de gecombineerde aanvraag in op het platform en laadt de documenten van de werknemer op. IGI, het Ministerie van Onderwijs en het Ministerie van Buitenlandse Zaken controleren de voorwaarden via het platform.",
    },
    {
      title: "Visumgesprek en D/AM-visum",
      actor: "Employee",
      detail:
        "De werknemer verschijnt persoonlijk bij de Roemeense ambassade of het Roemeense consulaat met het originele paspoort en de ondersteunende documenten, en de biometrische gegevens worden afgenomen. Over de gecombineerde aanvraag wordt beslist binnen 30 dagen na die verschijning. Een positieve beslissing leidt tot het D/AM1- of D/AM2-visum, 90 dagen geldig voor de binnenkomst, dat ook het recht om te werken bevestigt.",
    },
    {
      title: "Binnenkomst en begin van het werk",
      actor: "Both",
      detail:
        "De werknemer reist Roemenië in en begint te werken onder het geregistreerde contract. Vergunde werkgevers moeten het vervoer vanaf het punt van binnenkomst regelen en de werknemer ten minste 10 dagen vóór aankomst over de voorwaarden informeren. De werkgever meldt elke beëindiging of wijziging van het contract binnen de wettelijke termijnen aan IGI.",
    },
    {
      title: "De permis unic aanvragen bij IGI",
      actor: "Employee",
      detail:
        "Vóór het visum verstrijkt, maakt de werknemer een afspraak bij de territoriale eenheid van IGI van de provincie van verblijf en dient hij de aanvraag in voor verlenging van het verblijfsrecht voor werk, met paspoort, visum, contract, bewijs van huisvesting, ziektekostenverzekering en bewijs van betaling van de vergoeding. IGI beslist binnen 30 dagen, verlengbaar in complexe gevallen, en geeft de permis unic af, die ook als identiteitsdocument dient.",
    },
    {
      title: "Verlenging of verandering van werkgever",
      actor: "Both",
      detail:
        "De verlenging wordt vóór het verstrijken van de vergunning aangevraagd op basis van een doorlopend voltijds contract. Een verandering van werkgever door ontslagname is pas mogelijk na ten minste 6 maanden geregistreerd werk bij de eerste werkgever, met een nieuwe gecombineerde aanvraag voor de verlenging, ingediend door de nieuwe werkgever of het bureau.",
    },
  ],
  employerDocs: [
    { label: "Registratie op WorkinRomania.gov.ro in het register van werkgevers van buitenlandse werknemers (RAS), plus vergunning en financiële waarborg wanneer de werkgever D/AM2-werknemers rechtstreeks aanwerft" },
    { label: "Vast jobaanbod opgeladen op het platform, met beroep, taken, loon, arbeidstijd, contractduur en werkplek" },
    { label: "Individuele arbeidsovereenkomst geregistreerd in REGES-ONLINE, voltijds, in het Roemeens en in een taal die de werknemer begrijpt, met een loon van ten minste het nationale minimumbrutoloon (ten minste het gemiddelde brutoloon voor hooggekwalificeerde werknemers)" },
    { label: "Voor hooggekwalificeerde werknemers: attest over beschikbare arbeidskrachten van het provinciale arbeidsbureau, afgegeven niet meer dan 90 dagen vóór de indiening, en het cv van de werknemer met erkenning van de studies" },
    { label: "Voor D/AM2-werknemers: dienstencontract met een erkend arbeidsbemiddelingsbureau, tripartiete bemiddelingsovereenkomst, organogram met ingevulde en vacante functies, en bewijs dat het beroep op de knelpuntlijst staat" },
    { label: "Notariële verklaring over huisvesting wanneer de werkgever woonruimte verstrekt, met een huur die het wettelijke aandeel van het nettoloon niet overschrijdt" },
  ],
  employeeDocs: [
    { label: "Geldig paspoort, volledige kopie voor het platform en het origineel op het consulaat" },
    { label: "Uittreksel uit het strafregister van het land van herkomst of verblijf, vertaald in het Roemeens, Engels of Frans en gelegaliseerd" },
    { label: "Reisziektekostenverzekering die de volledige visumperiode dekt, geldig in alle lidstaten, met de wettelijk vastgestelde minimumdekking" },
    { label: "Bewijs van bestaansmiddelen op het niveau van het nationale minimumbrutoloon voor 90 dagen, waar vereist voor de categorie" },
    { label: "Cv en diploma's of kwalificatiecertificaten, met erkenning door het Ministerie van Onderwijs voor hooggekwalificeerde werknemers en gereglementeerde beroepen" },
    { label: "Wettelijk vereist machtigingsdocument voor het beroep, waar van toepassing" },
    { label: "Voor de permis unic: arbeidsovereenkomst, bewijs van legale huisvesting in Roemenië, bewijs van ziektekostenverzekering en bewijs van betaling van de vergoeding" },
    { label: "Pasfoto's en biometrische gegevens, afgenomen op het consulaat en bij IGI" },
  ],
  alternativeRoutes: [
    { name: "Europese blauwe kaart (Cartea albastră a UE)", summary: "Hooggekwalificeerde werknemers met een diploma hoger onderwijs of, voor gereglementeerde beroepen, vergelijkbare ervaring, tewerkgesteld met een voltijds contract van ten minste 6 maanden tegen een loon boven de wettelijke drempel. De route loopt via de gecombineerde D/AM1-aanvraag en de kaart wordt door IGI afgegeven voor de contractduur plus 3 maanden, tot 3 jaar. Houders van een blauwe kaart uit een andere lidstaat mogen na 12 maanden naar Roemenië verhuizen en binnen een maand na binnenkomst aanvragen." },
    { name: "Gedetacheerde en binnen een onderneming overgeplaatste werknemers (D/DT)", summary: "Detacheringen en overplaatsingen binnen een groep volgen het visum voor lang verblijf met het oog op detachering (D/DT) en een verblijfsvergunning voor detachering, met vereenvoudigde regels voor overplaatsingen vanuit entiteiten in de EU, de EER en Zwitserland op basis van een geldige verblijfsvergunning afgegeven door die staat." },
    { name: "Onderdanen van Moldavië, Oekraïne en Servië", summary: "Burgers van deze drie landen die voltijds worden tewerkgesteld, komen in aanmerking voor de D/AM1-route zonder knelpuntberoep, arbeidsbemiddelingsbureau of arbeidsmarkttoets." },
    { name: "Working holiday-visum (D/VM)", summary: "Alleen beschikbaar voor onderdanen van staten waarmee Roemenië een bilaterale working holiday-overeenkomst heeft." },
  ],
  watchOuts: [
    "Niets kan worden ingediend zolang ANOFM de werkgever niet op het platform heeft geregistreerd, wat tot 30 werkdagen kan duren. D/AM2-werving hangt bovendien af van de aanwezigheid van het beroep op de knelpuntlijst en van het niet uitgeput zijn van het jaarlijkse quotum.",
    "De beslistermijn van 30 dagen voor de gecombineerde aanvraag loopt pas vanaf de persoonlijke verschijning van de werknemer op het consulaat, zodat een late of ontbrekende consulaire afspraak het dossier stillegt. De permis unic moet daarna worden aangevraagd vóór het visum van 90 dagen verstrijkt.",
    "De vergunning is gebonden aan de werkgever. Een verandering door ontslagname is pas toegestaan na 6 maanden geregistreerd werk, en als het contract eindigt, duurt het verblijfsrecht niet langer dan de werkloosheidsuitkering of 90 dagen zonder uitkering.",
  ],
};
