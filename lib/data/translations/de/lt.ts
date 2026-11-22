import type { CountryDetails } from "../types";

export const lt: CountryDetails = {
  authorities: [
    "Migrationsabteilung beim Innenministerium (Migracijos departamentas): Vermittlungsschreiben, Entscheidungen über Aufenthaltserlaubnisse, MIGRIS",
    "Arbeitsverwaltung beim Ministerium für soziale Sicherheit und Arbeit (Užimtumo tarnyba): Arbeitserlaubnisse, Engpassberufslisten und Arbeitsmarktentscheidungen, soweit noch erforderlich",
    "Litauische Botschaften und Konsulate sowie ihre externen Dienstleister: Biometrie und nationale Visa für Antragsteller im Ausland",
    "Staatliche Arbeitsinspektion (VDI): Arbeitgebermeldungen und Durchsetzung der Regeln zur Beschäftigung von Ausländern",
  ],
  legalBasis: [
    "Įstatymas dėl užsieniečių teisinės padėties (Gesetz über die Rechtsstellung von Ausländern, Nr. IX-2206), in der mit Wirkung vom 1. Juli 2024, 1. Januar 2025 und 22. Mai 2026 geänderten Fassung",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Jährlicher Erlass des Ministers für soziale Sicherheit und Arbeit zur Festlegung der Quote für zur Arbeit einreisende Ausländer",
  ],
  steps: [
    {
      title: "Weg, Quote und Arbeitgeberbedingungen prüfen",
      actor: "Employer",
      detail:
        "Vergewissern Sie sich, ob die Quote noch Raum bietet oder ob die Gehalts- oder Engpasslisten-Ausnahme gilt, dass der Vertrag eine Vollzeitbeschäftigung von mindestens sechs Monaten vorsieht und dass das Unternehmen keine jüngeren Bußgelder wegen illegaler oder nicht angemeldeter Arbeit hat, die die Einstellung von Ausländern für ein Jahr ausschließen.",
    },
    {
      title: "Vermittlungsschreiben in MIGRIS einreichen",
      actor: "Employer",
      detail:
        "Reichen Sie das elektronische Vermittlungsschreiben ein, zahlen Sie die Gebühr und geben Sie die Qualifikation und Erfahrung des Arbeitnehmers oder die Verpflichtung an, mindestens den durchschnittlichen Bruttomonatslohn zu zahlen. MIGRIS vergibt eine Nummer für den Antrag des Arbeitnehmers.",
    },
    {
      title: "Antrag auf Aufenthaltserlaubnis stellen",
      actor: "Employee",
      detail:
        "Füllen Sie den Antrag in MIGRIS aus, geben Sie die Nummer des Vermittlungsschreibens ein, laden Sie die Dokumente hoch, zahlen Sie die staatliche Gebühr (höher im Eilverfahren) und buchen Sie einen Termin.",
    },
    {
      title: "Biometrie und Originale",
      actor: "Employee",
      detail:
        "Erscheinen Sie bei der Migrationsabteilung oder bei einer litauischen Auslandsvertretung oder einem externen Dienstleister im Ausland, um Fingerabdrücke und ein Gesichtsbild abzugeben und die Originaldokumente vorzulegen. Visumpflichtige Antragsteller im Ausland können nach positiver Entscheidung ein nationales Visum zur Einreise beantragen.",
    },
    {
      title: "Prüfung und Entscheidung",
      actor: "Authority",
      detail:
        "Die Migrationsabteilung prüft die Quote, den Arbeitgeber, die Dokumente des Arbeitnehmers und etwaige Sicherheitsgründe und entscheidet innerhalb der gesetzlichen Frist (4 Monate oder 2 Monate im Eilverfahren laut EU-Zuwanderungsportal).",
    },
    {
      title: "Abholung, Wohnsitzanmeldung und Meldungen",
      actor: "Both",
      detail:
        "Der Arbeitnehmer holt die Karte ab, meldet den Wohnort an und meldet spätere Änderungen innerhalb von 10 Arbeitstagen. Der Arbeitgeber meldet den Beschäftigungsbeginn und muss die Beendigung melden; ein Arbeitnehmer, der seine Stelle verliert, hat drei Monate (sechs nach zwei Jahren mit der Erlaubnis), um einen neuen Arbeitgeber zu finden.",
    },
  ],
  employerDocs: [
    { label: "In MIGRIS eingereichtes Vermittlungsschreiben mit Gebührennachweis" },
    { label: "Arbeitsvertrag oder verbindliche Zusage für eine Vollzeitbeschäftigung von mindestens sechs Monaten", note: "Weist den vereinbarten Bruttomonatslohn aus." },
    { label: "Nachweis der Qualifikation des Arbeitnehmers und mindestens eines Jahres einschlägiger Erfahrung in den letzten drei Jahren oder Verpflichtung, mindestens den nationalen durchschnittlichen Bruttomonatslohn zu zahlen" },
    { label: "Registrierungsdaten des Unternehmens und eine Erklärung zu Bußgeldern wegen Verstößen gegen Beschäftigungs- oder Einwanderungsvorschriften" },
    { label: "Arbeitserlaubnis oder Entscheidung der Arbeitsverwaltung, wenn der Weg eine solche noch erfordert (Saisonarbeit, nationales Visum)" },
  ],
  employeeDocs: [
    { label: "In MIGRIS ausgefüllter Antrag" },
    { label: "Gültiger Reisepass" },
    { label: "Lichtbild, das den Anforderungen der Migrationsabteilung entspricht" },
    { label: "Dem Arbeitgeber erteilte Nummer des Vermittlungsschreibens" },
    { label: "Führungszeugnisse aus den Wohnsitzstaaten der letzten zwei Jahre", note: "Nur bei der ersten Erlaubnis." },
    { label: "Nachweis ausreichender Mittel oder regelmäßiger Einkünfte und einer Unterkunft in Litauen" },
    { label: "Krankenversicherung für den Aufenthalt, bis der litauische Versicherungsschutz greift" },
    { label: "Diplom oder sonstiger Qualifikationsnachweis, wenn der Arbeitgeber sich auf die Qualifikation des Arbeitnehmers stützt" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Hochschulabschluss oder fünf Jahre Berufserfahrung und ein Gehalt von mindestens 1,5-mal dem durchschnittlichen Bruttolohn; außerhalb der Quote, Erlaubnis für drei Jahre, Entscheidung innerhalb von 2 Monaten oder 1 Monat im Eilverfahren, und keine Entscheidung der Arbeitsverwaltung, wenn das Gehalt das Dreifache des Durchschnitts erreicht oder die Stelle auf der Engpassliste steht." },
    { name: "Konzerninterner Transfer", summary: "Führungskräfte, Spezialisten und Trainees, die nach den ICT-Regeln desselben Gesetzes innerhalb eines Konzerns versetzt werden." },
    { name: "Nationales Visum mit Arbeitserlaubnis", summary: "Für Saisonarbeit und andere kurze Einsätze von bis zu einem Jahr stellt die Arbeitsverwaltung eine Arbeitserlaubnis aus, und der Arbeitnehmer reist mit einem nationalen Visum ein, das nicht verlängert werden kann." },
    { name: "Absolventen litauischer Einrichtungen", summary: "Arbeitnehmer, die ihr Studium in Litauen innerhalb der letzten fünf Jahre abgeschlossen haben, fallen nicht unter die Quote und sind von der Bedingung der Vorerfahrung befreit." },
  ],
  watchOuts: [
    "Die Jahresquote kann lange vor Jahresende ausgeschöpft sein; im Oktober 2025 nahm die Migrationsabteilung keine neuen Anträge mehr an, sodass nur die Ausnahmen für höhere Gehälter und Engpasslisten blieben.",
    "Ab dem 1. November 2026 müssen Antragsteller, die sich mit einem Schengen-Visum oder dem nationalen Visum eines anderen Landes in Litauen aufhalten, aus dem Ausland beantragen, und die Liste der externen Dienstleister, die arbeitsbezogene Anträge annehmen, wurde verkürzt.",
    "Die Vorgeschichte des Arbeitgebers zählt: Ein Bußgeld wegen illegaler oder nicht angemeldeter Arbeit oder wiederholte Meldeverstöße blockieren neue Erlaubnisse für ein Jahr, und der Wegfall der Bedingung eines sechsmonatigen Vollzeitvertrags führt zur Ablehnung oder zum Widerruf.",
  ],
};
