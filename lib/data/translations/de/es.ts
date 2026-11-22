import type { CountryDetails } from "../types";

export const es: CountryDetails = {
  authorities: [
    "Oficina de Extranjería der Provinz des Arbeitsplatzes (Ministerio de Inclusión, Seguridad Social y Migraciones): Entscheidung über die Genehmigung",
    "Servicio Público de Empleo Estatal (SEPE) und regionale öffentliche Arbeitsverwaltungen: Katalog der Mangelberufe und Stellenverwaltung",
    "Spanische Botschaft oder Konsulat (Ministerio de Asuntos Exteriores, Unión Europea y Cooperación): Aufenthalts- und Arbeitsvisum",
    "Tesorería General de la Seguridad Social: Anmeldung des Arbeitnehmers, die die Genehmigung wirksam macht",
    "Policía Nacional oder Oficina de Extranjería: Ausstellung der TIE",
  ],
  legalBasis: [
    "Ley Orgánica 4/2000, de 11 de enero, sobre derechos y libertades de los extranjeros en España y su integración social (Artikel 36 bis 40)",
    "Reglamento de Extranjería, genehmigt durch das Real Decreto 1155/2024, de 19 de noviembre (Artikel 72 bis 81), in Kraft seit dem 20. Mai 2025",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Nationale Beschäftigungslage prüfen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber prüft, ob der Beruf im aktuellen Mangelkatalog der Region steht, ob eine Ausnahme nach Artikel 40 der Ley Orgánica 4/2000 gilt oder ob zunächst eine Stelle bei der öffentlichen Arbeitsverwaltung gemeldet werden muss, um die Bescheinigung über unzureichende Kandidaten zu erhalten.",
    },
    {
      title: "Arbeitsvertrag unterzeichnen",
      actor: "Both",
      detail:
        "Der Vertrag wird von Arbeitgeber und Arbeitnehmer auf dem amtlichen Muster unterzeichnet, mit Bedingungen gemäß dem anwendbaren Tarifvertrag und einem Beginn, der vom Wirksamwerden der Genehmigung abhängt. Die Vergütung bei Teilzeit muss über das Jahr dennoch den Vollzeit-Mindestlohn erreichen.",
    },
    {
      title: "Antrag bei der Oficina de Extranjería einreichen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber reicht das amtliche Formular mit dem Vertrag, dem Nachweis der wirtschaftlichen Mittel, der Passkopie des Arbeitnehmers, den Qualifikationsnachweisen und, soweit erforderlich, der Bescheinigung der Arbeitsverwaltung bei der Oficina de Extranjería der Provinz des Arbeitsplatzes ein. Für unvollständige Akten gilt eine Nachfrist von 10 Tagen.",
    },
    {
      title: "Entscheidung und Übermittlung an das Konsulat",
      actor: "Authority",
      detail:
        "Die Behörde prüft Steuer-, Sozialversicherungs-, Strafregister- und Polizeiberichte und entscheidet innerhalb von 3 Monaten. Eine positive Entscheidung wird im System erfasst, sodass das Konsulat am Wohnort des Arbeitnehmers sie einsehen kann.",
    },
    {
      title: "Aufenthalts- und Arbeitsvisum beantragen",
      actor: "Employee",
      detail:
        "Innerhalb von 1 Monat nach der Zustellung an den Arbeitgeber beantragt der Arbeitnehmer das Visum persönlich beim Konsulat mit Reisepass, Genehmigung, dem abgestempelten Vertrag, einem Strafregisterauszug und einem ärztlichen Attest. Das Konsulat entscheidet innerhalb von 1 Monat, und der Arbeitnehmer holt das Visum persönlich ab.",
    },
    {
      title: "Einreise nach Spanien und Anmeldung bei der Sozialversicherung",
      actor: "Both",
      detail:
        "Der Arbeitnehmer reist mit dem Visum nach Spanien ein. Die Genehmigung wird erst wirksam, wenn der Arbeitgeber den Arbeitnehmer bei der Sozialversicherung anmeldet, was innerhalb von 3 Monaten nach der rechtmäßigen Einreise geschehen muss.",
    },
    {
      title: "TIE beantragen",
      actor: "Employee",
      detail:
        "Innerhalb von 1 Monat nach der Anmeldung bei der Sozialversicherung beantragt der Arbeitnehmer persönlich die Ausländeridentitätskarte (tarjeta de identidad de extranjero) bei der Oficina de Extranjería oder der Polizeidienststelle.",
    },
  ],
  employerDocs: [
    { label: "Amtliches Antragsformular für die Erstgenehmigung zu Aufenthalt und Arbeit" },
    { label: "Steueridentifikationsnummer und, bei Gesellschaften, die öffentliche Urkunde über die Vertretungsbefugnis des Unterzeichners" },
    { label: "Kopie des Arbeitsvertrags auf dem amtlichen Muster, von beiden Parteien unterzeichnet" },
    { label: "Nachweis der wirtschaftlichen, materiellen oder personellen Mittel zur Umsetzung des Geschäftsvorhabens und zur Erfüllung der Vertragspflichten", note: "Privatpersonen legen zusätzlich die Einkommensteuererklärung des Vorjahres vor oder ermächtigen zur Datenabfrage." },
    { label: "Bescheinigung der öffentlichen Arbeitsverwaltung über unzureichende Kandidaten oder Nachweis, dass der Beruf im Mangelkatalog steht oder ausgenommen ist" },
    { label: "Nachweis, dass Steuer- und Sozialversicherungspflichten erfüllt sind, in der Regel von der Behörde geprüft" },
  ],
  employeeDocs: [
    { label: "Vollständige Kopie eines gültigen Reisepasses oder Reisedokuments" },
    { label: "Nachweis der Ausbildung und, bei reglementierten Berufen, der gesetzlich vorgeschriebenen beruflichen Qualifikation" },
    { label: "Vom Arbeitnehmer unterzeichnetes Antragsformular für das nationale Visum" },
    { label: "Strafregisterauszug aus jedem Wohnsitzland der letzten 5 Jahre, legalisiert oder mit Apostille, mit beglaubigter Übersetzung ins Spanische" },
    { label: "Ärztliches Attest, ausgestellt in den letzten 3 Monaten, das das Fehlen einer Krankheit mit schwerwiegenden Folgen für die öffentliche Gesundheit bestätigt" },
    { label: "Aktuelles Passfoto" },
    { label: "Nachweis des rechtmäßigen Wohnsitzes im Konsularbezirk, in dem das Visum beantragt wird" },
    { label: "Zahlung der Visumgebühr und später der Gebühren für Aufenthalt und Arbeit (modelo 790)", note: "Die Gebühr für die Erstaufenthaltsgenehmigung zahlt der Arbeitnehmer, die Gebühr für die Arbeitsgenehmigung der Arbeitgeber; die Beträge ändern sich jährlich." },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU (Tarjeta azul-UE)", summary: "Hochqualifizierte Arbeitnehmer mit einem Hochschulabschluss oder gleichwertiger Erfahrung und einem Gehalt über der per Dekret festgelegten Schwelle. Im Reglamento nach der Richtlinie (EU) 2021/1883 geregelt, ohne Prüfung der nationalen Beschäftigungslage." },
    { name: "Hochqualifizierte Fachkräfte und ICT nach der Ley 14/2013", summary: "Beschleunigte Aufenthaltsgenehmigungen, bearbeitet von der Unidad de Grandes Empresas y Colectivos Estratégicos, für hochqualifiziertes Personal, unternehmensintern transferierte Arbeitnehmer, Forscher und Investoren, mit kürzeren Entscheidungsfristen." },
    { name: "Visum zur Arbeitssuche", summary: "Ein Visum zur Arbeitssuche in Spanien, nach dem der Zugang zur Genehmigung für abhängige Beschäftigung den besonderen Regeln des Reglamento für Visuminhaber folgt." },
    { name: "Kollektive Anwerbung im Herkunftsland (GECCO)", summary: "Jährlicher Ministerialerlass, der Arbeitgebern erlaubt, Gruppen von Arbeitnehmern im Ausland zu rekrutieren, oft für Saisonarbeit, in einem vereinfachten Verfahren." },
  ],
  watchOuts: [
    "Schweigen gilt als Ablehnung: Hat die Oficina de Extranjería innerhalb von 3 Monaten keine Entscheidung zugestellt, gilt der Antrag als abgelehnt, und der einzige Weg ist ein Rechtsbehelf oder ein neuer Antrag.",
    "Die Genehmigung ist wirkungslos, bis der Arbeitnehmer innerhalb von 3 Monaten nach der Einreise bei der Sozialversicherung angemeldet ist. Wird diese Frist versäumt, ist das gesamte Verfahren hinfällig.",
    "Die Erstgenehmigung ist an eine Autonome Gemeinschaft und einen Beruf gebunden. Ein Arbeitgeberwechsel ist erst nach 3 Monaten im selben Beruf möglich, oder früher bei schweren Pflichtverletzungen des Arbeitgebers.",
  ],
};
