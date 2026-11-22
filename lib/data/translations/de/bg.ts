import type { CountryDetails } from "../types";

export const bg: CountryDetails = {
  authorities: [
    "Дирекция Миграция, Министерство на вътрешните работи (Migrationsdirektion, Innenministerium): nimmt die Akte entgegen und erteilt oder verweigert die Erlaubnis",
    "Агенция по заетостта (Arbeitsagentur): schriftliche Stellungnahme des Exekutivdirektors zum Arbeitsmarktzugang",
    "Държавна агенция Национална сигурност (Staatliche Agentur für nationale Sicherheit): Sicherheitsstellungnahme zu jedem Antrag",
    "Außenministerium, Direktion für konsularische Beziehungen, und bulgarische Botschaften: Visum des Typs D",
    "Изпълнителна агенция Главна инспекция по труда (Generalarbeitsinspektion): Meldung innerhalb von 7 Tagen nach Arbeitsbeginn und Durchsetzung",
  ],
  legalBasis: [
    "Закон за чужденците в Република България (Gesetz über Ausländer in der Republik Bulgarien), Artikel 24i, und die Durchführungsverordnung (ППЗЧРБ)",
    "Закон за трудовата миграция и трудовата мобилност (Gesetz über Arbeitsmigration und Arbeitskräftemobilität), Kapitel Zwei, und seine Durchführungsvorschriften (ППЗТМТМ)",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Stelle ausschreiben und Begründung vorbereiten",
      actor: "Employer",
      detail:
        "Der Arbeitgeber veröffentlicht die Stelle in lokalen und nationalen Medien und online, auch beim örtlichen Arbeitsamt, für den in den Durchführungsvorschriften festgelegten Zeitraum und verfasst dann eine Begründung, warum ein Drittstaatsangehöriger benötigt wird, unter Beifügung von Kopien der Anzeigen. Der Arbeitgeber prüft außerdem, dass die Grenze von 20 Prozent (oder 35 Prozent) des Personalbestands eingehalten wird.",
    },
    {
      title: "Befristeten Vertrag unterschreiben und Akte bei der Migrationsdirektion einreichen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber unterschreibt einen befristeten Arbeitsvertrag mit einem NKPD-Berufscode, der an dem Tag wirksam wird, an dem der Arbeitnehmer das Aufenthaltsdokument erhält, und reicht dann das Antragsformular (Anlage 3a) mit den Dokumenten des Arbeitnehmers und des Arbeitgebers bei der Migrationsdirektion oder einer regionalen Migrationsstelle ein. Fehlen Dokumente, setzt die Direktion eine Frist von 7 Tagen zur Vervollständigung der Akte, nach deren Ablauf das Verfahren eingestellt wird.",
    },
    {
      title: "Stellungnahmen der Arbeitsagentur und der Sicherheitsbehörde",
      actor: "Authority",
      detail:
        "Innerhalb von 14 Tagen nach der Einreichung übermittelt die Migrationsdirektion die Akte elektronisch an die Arbeitsagentur und an die Staatliche Agentur für nationale Sicherheit. Die Arbeitsagentur holt Steuer- und Arbeitsinspektionsinformationen über den Arbeitgeber ein und übersendet die schriftliche Stellungnahme ihres Exekutivdirektors innerhalb von 15 Tagen nach Erhalt der Akte; die Sicherheitsbehörde hat 14 Tage.",
    },
    {
      title: "Mitteilung über den Arbeitsmarktzugang",
      actor: "Authority",
      detail:
        "Innerhalb von 3 Tagen nach Erhalt positiver Stellungnahmen teilt die Migrationsdirektion dem Arbeitgeber elektronisch mit, dass dem Arbeitnehmer Zugang zum Arbeitsmarkt gewährt werden kann, mit Kopie an die Direktion für konsularische Beziehungen des Außenministeriums. Der Arbeitgeber informiert den Arbeitnehmer.",
    },
    {
      title: "Antrag auf ein Visum des Typs D",
      actor: "Employee",
      detail:
        "Innerhalb von 20 Tagen nach der Mitteilung muss der Arbeitnehmer bei der bulgarischen Botschaft oder dem Konsulat ein langfristiges Visum des Typs D beantragen und dabei einen Unterkunftsnachweis sowie bei ausländischer Hochschulbildung gegebenenfalls die Anerkennungsbescheinigung des Nationalen Zentrums für Information und Dokumentation vorlegen. Eine Ablehnung wird der Migrationsdirektion zurückgemeldet.",
    },
    {
      title: "Gemeinsames Erscheinen innerhalb von 14 Tagen nach der Einreise und Ausstellung der Karte",
      actor: "Both",
      detail:
        "Innerhalb von 14 Tagen nach der Einreise nach Bulgarien mit dem Visum D erscheinen der Arbeitgeber oder sein Vertreter und der Arbeitnehmer gemeinsam bei der Migrationsdirektion oder der regionalen Stelle, mit einer Kopie der Visumseite und einer für mindestens 3 Monate gültigen Krankenversicherung. Die Direktion erteilt oder verweigert die Erlaubnis innerhalb von 3 Tagen, und die Aufenthaltskarte mit dem Vermerk kombinierte Aufenthalts- und Arbeitserlaubnis folgt. Wird die 14-Tage-Frist versäumt, wird das Verfahren eingestellt.",
    },
    {
      title: "Pflichten nach der Ankunft",
      actor: "Employer",
      detail:
        "Der Arbeitnehmer meldet die Adresse innerhalb der gesetzlichen Frist an. Der Arbeitgeber meldet der Generalarbeitsinspektion innerhalb von 7 Tagen nach dem tatsächlichen Arbeitsbeginn und muss der Migrationsdirektion innerhalb von 3 Tagen jede Änderung, die die Zulassungskriterien berührt, sowie die Beendigung des Arbeitsverhältnisses melden, mit der das Aufenthaltsrecht endet.",
    },
  ],
  employerDocs: [
    { label: "Antragsformular (Anlage 3a zur Durchführungsverordnung des Ausländergesetzes), vom Arbeitgeber unterschrieben, mit Angabe einer E-Mail-Adresse" },
    { label: "Schriftliche Begründung der Notwendigkeit, einen Drittstaatsangehörigen einzustellen, mit Kopien der Stellenanzeigen in lokalen und nationalen Medien und online" },
    { label: "Erklärung mit Auflistung der bereits beschäftigten Drittstaatsangehörigen, mit Namen, Geburtsdaten, Staatsangehörigkeit und Aufenthaltsgrund" },
    { label: "Erklärung über den durchschnittlichen monatlichen Personalbestand an bulgarischen, EU-, EWR- und Schweizer Beschäftigten in den vorangegangenen 12 Monaten" },
    { label: "Erklärung, dass Entlohnung und Arbeitsbedingungen nicht ungünstiger sind als für bulgarische Staatsangehörige (Vorlage der Arbeitsagentur), nur beim Erstantrag" },
    { label: "Beglaubigte Kopie des unterschriebenen befristeten Arbeitsvertrags mit NKPD-Code, wirksam mit Ausstellung des Aufenthaltsdokuments, zuzüglich der Stellenbeschreibung, wenn sie Teil des Vertrags ist" },
  ],
  employeeDocs: [
    { label: "Kopie der Passseiten mit Foto und Personendaten" },
    { label: "Strafregisterbescheinigung aus dem Staat der Staatsangehörigkeit oder des gewöhnlichen Aufenthalts, nur beim Erstantrag" },
    { label: "Nachweis einer gesicherten Unterkunft in Bulgarien" },
    { label: "Dokumente über Ausbildung, Fachrichtung, Qualifikation und Berufserfahrung, legalisiert und mit beglaubigter bulgarischer Übersetzung, entsprechend den Anforderungen der ausgeschriebenen Stelle" },
    { label: "Bescheinigung des Nationalen Zentrums für Information und Dokumentation (NACID) über die Anerkennung ausländischer Hochschulbildung, soweit zutreffend" },
    { label: "Nachweis der Berechtigung zur Ausübung eines reglementierten Berufs oder die für den Beruf erforderliche Lizenz oder Genehmigung, soweit zutreffend" },
    { label: "In Bulgarien gültige Krankenversicherung für mindestens 3 Monate, bis zur Ausstellung der Erlaubnis, wenn der Arbeitnehmer nicht von der bulgarischen Krankenversicherung erfasst ist" },
    { label: "Kopie der Passseite mit dem Visum des Typs D, vorgelegt beim gemeinsamen Erscheinen nach der Einreise" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU (Синя карта на ЕС)", summary: "Hochqualifizierte Arbeitnehmer mit einem Hochschulabschluss von mindestens 3 Jahren oder qualifizierender Berufserfahrung und einem Bruttogehalt über der gesetzlich als Vielfaches des nationalen Durchschnittslohns festgelegten Schwelle. Die Arbeitsagentur gibt ihre Stellungnahme innerhalb von 10 Tagen ab, das gesamte Verfahren ist auf 3 Monate begrenzt und die Karte wird für bis zu 5 Jahre ausgestellt. Keine Arbeitsmarktprüfung und keine Personalbestandsquote." },
    { name: "Erlaubnis für unternehmensinterne Transfers", summary: "Führungskräfte, Spezialisten und Trainees, die innerhalb einer Unternehmensgruppe transferiert werden, nach Artikel 33p des Ausländergesetzes." },
    { name: "Saisonarbeitserlaubnis", summary: "Kurze Saisonarbeit bis zu 90 Tagen auf Grundlage einer Registrierung oder eine Saisonarbeitserlaubnis für längere Zeiträume, nach Artikel 24k des Ausländergesetzes." },
    { name: "Inhaber einer Blauen Karte EU aus einem anderen Mitgliedstaat", summary: "Nach 12 Monaten im ersten Mitgliedstaat (6 Monaten in einem zweiten) kann der Inhaber nach Bulgarien wechseln und innerhalb eines Monats nach der Einreise einen Antrag stellen, mit Entscheidung innerhalb von 30 Tagen." },
  ],
  watchOuts: [
    "Das gemeinsame Erscheinen innerhalb von 14 Tagen nach der Einreise ist strikt: Legen Arbeitgeber und Arbeitnehmer die Visumkopie und die Krankenversicherung nicht rechtzeitig vor, stellt die Migrationsdirektion das Verfahren ein und die Akte beginnt von neuem.",
    "Die Obergrenze von 20 Prozent des Personalbestands (35 Prozent bei KMU) wird über die vorangegangenen 12 Monate geprüft und blockiert die Genehmigung für Arbeitgeber mit vielen Beschäftigten aus Drittstaaten, sofern keine Ausnahme oder eine Ministerentscheidung nach dem Arbeitsmigrationsgesetz greift.",
    "Ausländische Diplome und Strafregisterauszüge müssen legalisiert und von einem Notar oder der Konsulardirektion übersetzt sein, und ausländische Hochschulbildung benötigt die NACID-Anerkennung; unvollständige Akten erhalten nur 7 Tage zur Nachbesserung.",
  ],
};
