import type { CountryDetails } from "../types";

export const ro: CountryDetails = {
  authorities: [
    "Inspectoratul General pentru Imigrări (IGI): prüft die Zulässigkeit des kombinierten Antrags, entscheidet über das Aufenthaltsrecht zur Arbeit und stellt das permis unic aus",
    "Agenția Națională pentru Ocuparea Forței de Muncă (ANOFM): registriert und lässt Arbeitgeber und Vermittlungsagenturen zu, erstellt die Liste der Mangelberufe",
    "Ministerul Afacerilor Externe und rumänische diplomatische Vertretungen: empfangen den Arbeitnehmer im Konsulat und stellen das D/AM-Visum über das eViza-System aus",
    "Ministerul Educației și Cercetării (CNRED): Anerkennung von Qualifikationen für Hochqualifizierte",
    "Inspecția Muncii: Arbeitsinspektion und Registrierung der Verträge in REGES-ONLINE",
  ],
  legalBasis: [
    "Ordonanța de urgență nr. 32/2026 privind accesul străinilor pe piața muncii din România",
    "Ordonanța de urgență nr. 194/2002 privind regimul străinilor în România, republicată, geändert durch die OUG 32/2026 (Art. 27^1, 27^2, 44 und 56)",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Hotărârea Guvernului nr. 295/2025 privind Registrul general de evidență a salariaților (REGES-ONLINE)",
  ],
  steps: [
    {
      title: "Arbeitgeber auf WorkinRomania.gov.ro registrieren",
      actor: "Employer",
      detail:
        "Der Arbeitgeber legt ein Konto auf der Plattform an und beantragt die Eintragung in das Register der Arbeitgeber ausländischer Arbeitnehmer (RAS). ANOFM prüft Steuerschulden, frühere Sanktionen wegen Schwarzarbeit und strafrechtliche Verurteilungen und entscheidet innerhalb von 30 Arbeitstagen. Arbeitgeber, die D/AM2-Arbeitnehmer ohne Agentur rekrutieren möchten, benötigen eine gesonderte Zulassung mit einer finanziellen Garantie je Arbeitnehmer.",
    },
    {
      title: "Verbindliches Stellenangebot hochladen und Weg wählen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber lädt ein verbindliches Stellenangebot mit Beruf, Aufgaben, Gehalt, Arbeitszeit, Vertragsdauer und Arbeitsort hoch. Hochqualifizierte und andere besondere Kategorien folgen dem D/AM1-Weg. Dauerhaft Beschäftigte, Saison- und Grenzarbeitnehmer folgen dem D/AM2-Weg, der einen Beruf auf der Mangelliste und, sofern der Arbeitgeber nicht zugelassen ist, einen Dienstleistungsvertrag mit einer zugelassenen Vermittlungsagentur sowie einen dreiseitigen Vermittlungsvertrag mit dem Arbeitnehmer erfordert.",
    },
    {
      title: "Arbeitsvertrag unterzeichnen und kombinierten Antrag einreichen",
      actor: "Employer",
      detail:
        "Der individuelle Arbeitsvertrag, auf Rumänisch und in einer Sprache, die der Arbeitnehmer versteht, wird in REGES-ONLINE registriert. Der Arbeitgeber (D/AM1) oder die Vermittlungsagentur bzw. der zugelassene Arbeitgeber (D/AM2) füllt den kombinierten Antrag auf der Plattform aus und lädt die Unterlagen des Arbeitnehmers hoch. IGI, das Bildungsministerium und das Außenministerium prüfen die Voraussetzungen über die Plattform.",
    },
    {
      title: "Visumgespräch und D/AM-Visum",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer erscheint persönlich mit dem Originalreisepass und den Belegen bei der rumänischen Botschaft oder dem Konsulat, wo die biometrischen Daten erfasst werden. Über den kombinierten Antrag wird innerhalb von 30 Tagen nach diesem Erscheinen entschieden. Eine positive Entscheidung führt zum D/AM1- oder D/AM2-Visum, das 90 Tage für die Einreise gilt und zugleich das Recht zu arbeiten bescheinigt.",
    },
    {
      title: "Einreise und Arbeitsbeginn",
      actor: "Both",
      detail:
        "Der Arbeitnehmer reist nach Rumänien ein und nimmt die Arbeit im Rahmen des registrierten Vertrags auf. Zugelassene Arbeitgeber müssen den Transport vom Einreiseort organisieren und den Arbeitnehmer mindestens 10 Tage vor der Ankunft über die Bedingungen informieren. Der Arbeitgeber meldet IGI jede Beendigung oder Änderung des Vertrags innerhalb der gesetzlichen Fristen.",
    },
    {
      title: "Permis unic bei IGI beantragen",
      actor: "Employee",
      detail:
        "Vor Ablauf des Visums bucht der Arbeitnehmer einen Termin bei der territorialen IGI-Dienststelle des Wohnsitzkreises und reicht den Antrag auf Verlängerung des Aufenthaltsrechts zur Arbeit ein, mit Reisepass, Visum, Vertrag, Wohnungsnachweis, Krankenversicherung und Nachweis der Gebührenzahlung. IGI entscheidet innerhalb von 30 Tagen, in komplexen Fällen verlängerbar, und stellt das permis unic aus, das zugleich als Identitätsdokument dient.",
    },
    {
      title: "Verlängerung oder Arbeitgeberwechsel",
      actor: "Both",
      detail:
        "Die Verlängerung wird vor Ablauf der Erlaubnis auf Grundlage eines fortbestehenden Vollzeitvertrags beantragt. Ein Arbeitgeberwechsel durch Kündigung ist erst nach mindestens 6 Monaten registrierter Arbeit beim ersten Arbeitgeber möglich, mit einem neuen kombinierten Antrag auf Verlängerung, den der neue Arbeitgeber oder die Agentur einreicht.",
    },
  ],
  employerDocs: [
    { label: "Registrierung auf WorkinRomania.gov.ro im Register der Arbeitgeber ausländischer Arbeitnehmer (RAS), zuzüglich Zulassung und finanzieller Garantie, wenn der Arbeitgeber D/AM2-Arbeitnehmer direkt rekrutiert" },
    { label: "Auf die Plattform hochgeladenes verbindliches Stellenangebot mit Beruf, Aufgaben, Gehalt, Arbeitszeit, Vertragsdauer und Arbeitsort" },
    { label: "In REGES-ONLINE registrierter individueller Arbeitsvertrag, Vollzeit, auf Rumänisch und in einer Sprache, die der Arbeitnehmer versteht, mit einem Gehalt mindestens in Höhe des nationalen Bruttomindestlohns (mindestens der durchschnittliche Bruttoverdienst für Hochqualifizierte)" },
    { label: "Für Hochqualifizierte: Bescheinigung der Kreisarbeitsagentur über verfügbare Arbeitskräfte, ausgestellt höchstens 90 Tage vor der Einreichung, sowie Lebenslauf des Arbeitnehmers mit Anerkennung der Studienabschlüsse" },
    { label: "Für D/AM2-Arbeitnehmer: Dienstleistungsvertrag mit einer zugelassenen Vermittlungsagentur, dreiseitiger Vermittlungsvertrag, Organigramm mit besetzten und offenen Stellen sowie Nachweis, dass der Beruf auf der Mangelliste steht" },
    { label: "Notariell beglaubigte Erklärung zur Unterkunft, wenn der Arbeitgeber Wohnraum stellt, mit einer Miete, die den gesetzlichen Anteil am Nettogehalt nicht überschreitet" },
  ],
  employeeDocs: [
    { label: "Gültiger Reisepass, vollständige Kopie für die Plattform und Original beim Konsulat" },
    { label: "Strafregisterauszug des Herkunfts- oder Wohnsitzlandes, ins Rumänische, Englische oder Französische übersetzt und legalisiert" },
    { label: "Reisekrankenversicherung für die gesamte Visumdauer, gültig in allen Mitgliedstaaten, mit der gesetzlich festgelegten Mindestdeckung" },
    { label: "Nachweis des Lebensunterhalts in Höhe des nationalen Bruttomindestlohns für 90 Tage, soweit für die Kategorie erforderlich" },
    { label: "Lebenslauf und Diplome oder Qualifikationsnachweise, mit Anerkennung durch das Bildungsministerium für Hochqualifizierte und reglementierte Berufe" },
    { label: "Gesetzlich für den Beruf vorgeschriebenes Zulassungsdokument, soweit zutreffend" },
    { label: "Für das permis unic: Arbeitsvertrag, Nachweis einer legalen Unterkunft in Rumänien, Nachweis einer Krankenversicherung und Nachweis der Gebührenzahlung" },
    { label: "Passfotos und biometrische Daten, erfasst im Konsulat und bei IGI" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU (Cartea albastră a UE)", summary: "Hochqualifizierte mit einem Hochschulabschluss oder, für reglementierte Berufe, vergleichbarer Erfahrung, beschäftigt mit einem Vollzeitvertrag von mindestens 6 Monaten und einem Gehalt über der gesetzlichen Schwelle. Der Weg führt über den kombinierten D/AM1-Antrag, und die Karte wird von IGI für die Vertragsdauer plus 3 Monate, bis zu 3 Jahre, ausgestellt. Inhaber einer Blauen Karte aus einem anderen Mitgliedstaat können nach 12 Monaten nach Rumänien wechseln und den Antrag innerhalb eines Monats nach der Einreise stellen." },
    { name: "Entsandte und unternehmensintern transferierte Arbeitnehmer (D/DT)", summary: "Entsendungen und konzerninterne Transfers laufen über das Visum für den langfristigen Aufenthalt zur Entsendung (D/DT) und eine Aufenthaltserlaubnis zur Entsendung, mit vereinfachten Regeln für Transfers von EU-, EWR- und Schweizer Einheiten auf Grundlage einer gültigen, von diesem Staat ausgestellten Aufenthaltserlaubnis." },
    { name: "Staatsangehörige Moldaus, der Ukraine und Serbiens", summary: "In Vollzeit beschäftigte Bürger dieser drei Länder qualifizieren sich für den D/AM1-Weg ohne Mangelberuf, Vermittlungsagentur oder Arbeitsmarktprüfung." },
    { name: "Working-Holiday-Visum (D/VM)", summary: "Nur für Staatsangehörige von Staaten verfügbar, mit denen Rumänien ein bilaterales Working-Holiday-Abkommen hat." },
  ],
  watchOuts: [
    "Es kann nichts eingereicht werden, bevor ANOFM den Arbeitgeber auf der Plattform registriert hat, was bis zu 30 Arbeitstage dauern kann. Die D/AM2-Rekrutierung hängt zudem davon ab, dass der Beruf auf der Mangelliste steht und die Jahresquote nicht ausgeschöpft ist.",
    "Die 30-tägige Entscheidungsfrist für den kombinierten Antrag läuft erst ab dem persönlichen Erscheinen des Arbeitnehmers im Konsulat, sodass ein verspäteter oder fehlender Konsulatstermin die Akte blockiert. Das permis unic muss dann vor Ablauf des 90-tägigen Visums beantragt werden.",
    "Die Erlaubnis ist an den Arbeitgeber gebunden. Ein Wechsel durch Kündigung ist erst nach 6 Monaten registrierter Arbeit erlaubt, und endet der Vertrag, dauert das Aufenthaltsrecht nicht länger als das Arbeitslosengeld oder 90 Tage ohne Leistungsbezug.",
  ],
};
