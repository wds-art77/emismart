import type { CountryDetails } from "../types";

export const it: CountryDetails = {
  authorities: [
    "Sportello Unico per l'Immigrazione (SUI) bei der Prefettura der Provinz des Arbeitsorts: nulla osta und Aufenthaltsvertrag",
    "Ministero dell'Interno, Dipartimento per le Libertà Civili e l'Immigrazione: ALI-Portal und Verfahren nach dem Decreto Flussi",
    "Ministero del Lavoro e delle Politiche Sociali: Zuweisung der Quoten an die Gebietsstellen",
    "Italienische Botschaft oder italienisches Konsulat: Einreisevisum zur unselbstständigen Arbeit",
    "Questura (Polizia di Stato): Ausstellung und Verlängerung des permesso di soggiorno",
  ],
  legalBasis: [
    "Decreto Legislativo 25 luglio 1998, n. 286, Testo Unico sull'immigrazione (Artikel 3, 5, 21, 22, 24-bis und 27)",
    "D.P.R. 31 agosto 1999, n. 394, Durchführungsverordnung",
    "D.P.C.M. 2 ottobre 2025 über die Einreiseströme 2026 bis 2028 und die interministeriellen Rundschreiben zu seiner Umsetzung",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Quote und Kategorie prüfen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber vergewissert sich, dass der Sektor und die Staatsangehörigkeit des Arbeitnehmers unter die aktuellen Quoten und Termine des Decreto Flussi fallen oder dass die Stelle zu einer Kategorie außerhalb der Quoten gehört (Artikel 27, Blaue Karte EU, Führungskräfte, Forscher, Pflegekräfte, Künstler).",
    },
    {
      title: "Nichtverfügbarkeit beim centro per l'impiego prüfen",
      actor: "Employer",
      detail:
        "Der Arbeitgeber fragt beim örtlichen Arbeitsamt an, ob ein bereits in Italien befindlicher Arbeitnehmer verfügbar ist. Bleibt eine Antwort innerhalb von 8 Tagen aus, gilt dies als negatives Ergebnis, und die Prüfung wird in der Akte dokumentiert.",
    },
    {
      title: "Antrag auf nulla osta im ALI-Portal stellen",
      actor: "Employer",
      detail:
        "Am Click Day reicht der Arbeitgeber oder ein für ihn handelnder Verband oder Arbeitsberater (consulente del lavoro) den namentlichen Antrag (Formular B2020 für nicht saisonale Arbeit) mit dem vorgeschlagenen Aufenthaltsvertrag, dem Unterkunftsnachweis, der Verpflichtung zur Übernahme der Rückreisekosten, der asseverazione nach Artikel 24-bis und einem digitalen Domizil ein. Die Anträge werden in der Reihenfolge der Einreichung bearbeitet, bis die Quote ausgeschöpft ist.",
    },
    {
      title: "Nulla osta erteilt und an das Konsulat übermittelt",
      actor: "Authority",
      detail:
        "Der Sportello Unico prüft die Akte und die Stellungnahme der Questura und erteilt das nulla osta innerhalb von 60 Tagen nach Anrechnung des Antrags auf die Quote. Das nulla osta wird elektronisch an das Konsulat übermittelt und gilt 6 Monate.",
    },
    {
      title: "Einreisevisum",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer beantragt innerhalb der Gültigkeit des nulla osta beim italienischen Konsulat des Wohnsitzlandes das Einreisevisum zur unselbstständigen Arbeit und reist nach Italien.",
    },
    {
      title: "Aufenthaltsvertrag und Antrag auf Aufenthaltserlaubnis",
      actor: "Both",
      detail:
        "Innerhalb von 8 Arbeitstagen nach der Einreise beantragt der Arbeitnehmer das permesso di soggiorno, und innerhalb der im Testo Unico festgelegten Frist (derzeit 15 Tage nach der Einreise) unterzeichnen Arbeitgeber und Arbeitnehmer den contratto di soggiorno, der elektronisch an den Sportello Unico übermittelt wird. Das nulla osta erlaubt die Arbeit, während die Erlaubnis anhängig ist.",
    },
    {
      title: "Fingerabdrücke und Kartenabholung",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer nimmt den Termin bei der Questura zur Abnahme der Fingerabdrücke wahr, holt die elektronische Aufenthaltserlaubnis ab und meldet sich bei Bedarf bei der Gemeinde und der Steuerbehörde an.",
    },
  ],
  employerDocs: [
    { label: "Namentlicher Antrag auf nulla osta im ALI-Portal (Formular B2020 für nicht saisonale unselbstständige Arbeit)" },
    { label: "Vorgeschlagener Aufenthaltsvertrag (contratto di soggiorno) einschließlich der Verpflichtung zur Übernahme der Rückreisekosten des Arbeitnehmers" },
    { label: "Nachweis einer geeigneten Unterkunft für den Arbeitnehmer, digital signiert" },
    { label: "Asseverazione eines Arbeitsberaters oder Arbeitgeberverbands nach Artikel 24-bis Absatz 2, die die Leistungsfähigkeit des Arbeitgebers und die Vertragsbedingungen bestätigt", note: "Nicht erforderlich, wenn der Antrag von einem Verband oder Berater gestellt wird, der ein Protokoll mit dem Ministerium unterzeichnet hat." },
    { label: "Ergebnis der Nichtverfügbarkeitsprüfung beim centro per l'impiego" },
    { label: "Digitales Domizil (PEC), eingetragen in INI-PEC oder INAD, sowie SPID- oder CIE-Zugang für das Portal" },
  ],
  employeeDocs: [
    { label: "Gültiger Reisepass oder Reisedokument" },
    { label: "Kopie des vom Sportello Unico erteilten nulla osta" },
    { label: "Antragsformular für das Einreisevisum und Passfotos für das Konsulat" },
    { label: "Unterzeichneter Aufenthaltsvertrag (contratto di soggiorno)" },
    { label: "Postalisches Antragskit für das permesso di soggiorno mit Stempelmarke und Gebührenbelegen" },
    { label: "Qualifikationsnachweise, wenn der Beruf reglementiert ist" },
    { label: "Codice fiscale (Steuernummer) und Adressnachweis nach der Ankunft" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU (Carta blu UE)", summary: "Hochqualifizierte mit Hochschulabschluss oder anerkannter Berufserfahrung und einem Gehalt über der Schwelle; vom Arbeitgeber beim Sportello Unico außerhalb der Quoten nach Artikel 27-quater des Testo Unico beantragt." },
    { name: "Kategorien außerhalb der Quoten (Artikel 27)", summary: "Führungskräfte und hochspezialisiertes Personal, Hochschullehrer, Forscher, Pflegekräfte, Künstler, konzernintern versetzte Arbeitnehmer und andere gelistete Kategorien können ganzjährig ohne Quote beantragt werden." },
    { name: "Vereinfachtes Protokollverfahren (Artikel 24-bis)", summary: "Arbeitgeberverbände, die ein Protokoll mit dem Arbeits- oder Innenministerium unterzeichnen, ersetzen das nulla osta durch eine Mitteilung des vorgeschlagenen Aufenthaltsvertrags, die von der Questura geprüft wird." },
    { name: "Visum für digitale Nomaden und Fernarbeitende", summary: "Aufenthaltserlaubnis für hochqualifizierte Fernarbeitende, die im Ausland beschäftigt sind, mit eigenen Einkommens- und Versicherungsbedingungen." },
  ],
  watchOuts: [
    "Die Quoten sind an Click Days innerhalb von Minuten ausgeschöpft. Ein nach Ausschöpfung der Quote gestellter Antrag bleibt anhängig und wird möglicherweise nie bearbeitet; das Vorausfüllen im ALI-Portal während des Vorbereitungsfensters ist daher unerlässlich.",
    "Das nulla osta erlischt nach 6 Monaten. Hat das Konsulat bis dahin kein Visum ausgestellt und ist der Arbeitnehmer nicht nach Italien eingereist, muss das gesamte Verfahren in einer neuen Quotenrunde neu beginnen.",
    "Jüngere Dekrete haben Prüfungen zur Betrugsbekämpfung hinzugefügt: Arbeitgeber müssen nach Erteilung des nulla osta innerhalb eines kurzen Zeitfensters ihr Interesse bestätigen, andernfalls wird die Freigabe aufgehoben. Bestätigen Sie die aktuelle Frist im neuesten Rundschreiben.",
  ],
};
