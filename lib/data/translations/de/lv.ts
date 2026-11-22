import type { CountryDetails } from "../types";

export const lv: CountryDetails = {
  authorities: [
    "Amt für Staatsbürgerschafts- und Migrationsangelegenheiten (Pilsonības un migrācijas lietu pārvalde, OCMA/PMLP): Genehmigung von Einladungen und Entscheidungen über Aufenthaltserlaubnisse",
    "Staatliche Arbeitsagentur (Nodarbinātības valsts aģentūra, NVA): Stellenmeldung und Stellungnahme zur Einstellung eines Drittstaatsangehörigen",
    "Lettische Botschaften und Konsulate: Entgegennahme von Anträgen auf Aufenthaltserlaubnis aus dem Ausland",
    "Staatliche Steuerverwaltung (VID): Registrierung als Steuerpflichtiger nach der Ankunft",
  ],
  legalBasis: [
    "Imigrācijas likums (Einwanderungsgesetz), insbesondere Abschnitt 9 über das Recht auf Beschäftigung, Abschnitt 23 über befristete Aufenthaltserlaubnisse und Abschnitt 33 über Entscheidungsfristen",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Verordnungen des Ministerkabinetts über Aufenthaltserlaubnisse und über die staatliche Gebühr für die Prüfung von Visum- und Aufenthaltserlaubnisunterlagen (Verordnung Nr. 731)",
  ],
  steps: [
    {
      title: "Stelle bei der NVA melden",
      actor: "Employer",
      detail:
        "Veröffentlichen Sie die Stelle auf dem NVA-Portal mit den Gründen für die Stelle und der Zahl der Positionen. Lassen Sie sie mindestens 10 Arbeitstage offen, beurteilen Sie die von der NVA vorgeschlagenen Kandidaten und melden Sie die Ergebnisse über das Portal.",
    },
    {
      title: "Stellungnahme der NVA einholen",
      actor: "Authority",
      detail:
        "Die NVA gibt eine Stellungnahme zur Einstellung eines Drittstaatsangehörigen ab, in der Regel innerhalb von 10 Arbeitstagen nach der Veröffentlichung. Eine positive Stellungnahme steht OCMA elektronisch zur Verfügung; eine Ablehnung kann beim Direktor der NVA angefochten werden.",
    },
    {
      title: "Genehmigung der Einladung bei OCMA beantragen",
      actor: "Employer",
      detail:
        "Reichen Sie innerhalb eines Monats nach der Stellungnahme den Einladungsantrag elektronisch ein, mit dem Arbeitsvertrag oder Vertragsentwurf, den Bildungs- oder Erfahrungsnachweisen des Arbeitnehmers und etwaigen Lizenzen, jede Datei e-signiert, und zahlen Sie die staatliche Gebühr. OCMA entscheidet innerhalb von 5 Arbeitstagen oder von 10, wenn eine zusätzliche Prüfung erforderlich ist.",
    },
    {
      title: "Aufenthaltserlaubnis beantragen",
      actor: "Employee",
      detail:
        "Reichen Sie mit der genehmigten Einladung das Antragsformular, die Passkopie, ein Lichtbild, das Führungszeugnis und den Nachweis der staatlichen Gebühr bei einer lettischen Auslandsvertretung ein oder senden Sie sie an OCMA, wenn Sie sich rechtmäßig in Lettland aufhalten. Die Gebühr hängt von der gewählten Prüfgeschwindigkeit ab.",
    },
    {
      title: "Entscheidung durch OCMA",
      actor: "Authority",
      detail:
        "OCMA prüft die Akte innerhalb von 30 Tagen (10 oder 5 Arbeitstage bei den höheren Gebühren) und erteilt bei positivem Ergebnis die Aufenthaltserlaubnis mit dem Recht auf Beschäftigung beim genannten Arbeitgeber in der genannten Position.",
    },
    {
      title: "Ankunftsformalitäten und Karte",
      actor: "Employee",
      detail:
        "Melden Sie den Wohnort an, legen Sie den Befund eines Radiologen über eine in Lettland durchgeführte Röntgenaufnahme des Brustkorbs vor und weisen Sie eine Krankenversicherung für den Aufenthalt nach, dann holen Sie die Aufenthaltserlaubniskarte ab. Registrieren Sie sich bei der Staatlichen Steuerverwaltung als Steuerpflichtiger. Der Arbeitgeber muss OCMA Änderungen bei Gehalt, Arbeitszeit oder Arbeitsort innerhalb von drei Arbeitstagen mitteilen.",
    },
  ],
  employerDocs: [
    { label: "Elektronisch mit sicherer E-Signatur eingereichter Einladungsantrag, mit Erläuterungen auf Lettisch" },
    { label: "Arbeitsvertrag oder Vertragsentwurf", note: "Auch für Folgeerlaubnisse und die jährliche Registrierung erforderlich." },
    { label: "Bildungsnachweis (legalisierte Kopie) oder Nachweis von drei Jahren Berufserfahrung; Anerkennungsbescheinigung für reglementierte Berufe" },
    { label: "Kopie der Erlaubnis oder Lizenz, wenn die Arbeit eine solche erfordert" },
    { label: "Stellungnahme der NVA zur Stelle", note: "Wird OCMA elektronisch übermittelt; der Arbeitgeber muss sie nicht beifügen." },
    { label: "Nachweis der Zahlung der staatlichen Gebühr für die Einladung und das Recht auf Beschäftigung" },
  ],
  employeeDocs: [
    { label: "Antragsformular für die Aufenthaltserlaubnis" },
    { label: "Vollständige Kopie eines gültigen, in Lettland anerkannten Reisedokuments" },
    { label: "Lichtbild" },
    { label: "Führungszeugnis aus dem Land der Staatsangehörigkeit oder des Wohnsitzes", note: "Für Antragsteller über 14 Jahre, die dort länger als 12 Monate gelebt haben; nicht erforderlich für Staatsangehörige visumfreier Länder." },
    { label: "Nachweis des Lebensunterhalts, in der Regel das Gehalt im Vertrag, das die geltende Schwelle erreicht" },
    { label: "Nachweis der Zahlung der staatlichen Gebühr" },
    { label: "Nach der Ankunft: Befund eines Radiologen über eine in Lettland angefertigte Röntgenaufnahme und Krankenversicherung für den Aufenthalt" },
    { label: "Für Familienangehörige: Nachweis der Verwandtschaft und, bei einem mit nur einem Elternteil reisenden Kind, die notariell beglaubigte Zustimmung des anderen Elternteils" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Hochschulabschluss oder fünf Jahre Berufserfahrung und ein Gehalt von 1,5-mal dem nationalen Durchschnitt (1,2-mal für gelistete Engpassberufe). Keine Stellenmeldung bei der NVA, Entscheidung über die Einladung in 10 Arbeitstagen, Karte für bis zu zwei Jahre." },
    { name: "Konzerninterner Transfer", summary: "Führungskräfte, Spezialisten und Trainees, die nach mindestens sechs Monaten beim ausländischen Arbeitgeber innerhalb eines Konzerns versetzt werden, auf Grundlage eines Schreibens des entsendenden Unternehmens." },
    { name: "Start-up-Gründer", summary: "Gesonderte Aufenthaltserlaubnis für Gründer innovativer Start-ups, von OCMA nach eigenen Kriterien bearbeitet." },
    { name: "Kurzzeitige Arbeit mit Visum", summary: "Für eine Beschäftigung von bis zu 90 Tagen beantragt der Arbeitgeber eine Einladung, und der Arbeitnehmer erhält ein Visum mit Vermerk des Rechts auf Arbeit; die Stelle muss weiterhin bei der NVA gemeldet werden." },
  ],
  watchOuts: [
    "Alle Dokumente müssen in einer einzigen Einreichung vorgelegt werden. Stellt OCMA Lücken fest, muss der vollständige Satz erneut eingereicht werden, und die Gebühr wird nicht erstattet, wenn die Einladung abgelehnt oder zurückgezogen wird.",
    "Das Recht auf Arbeit erfasst nur den in der Einladung genannten Arbeitgeber und Beruf. Ein Positionswechsel beim selben Arbeitgeber erfordert eine neue Einladung, und ein Arbeitgeberwechsel erfordert neue Beschäftigungsrechte.",
    "Die Schwellen für Lebensunterhalt und Gehalt werden jedes Frühjahr anhand der Statistik des Vorjahres neu festgelegt, und die Stellenmeldung und die Stellungnahme verfallen, wenn die Einladung nicht innerhalb eines Monats eingereicht wird.",
  ],
};
