import type { CountryDetails } from "../types";

export const lu: CountryDetails = {
  authorities: [
    "Ministerium für Inneres, Einwanderungsdirektion (Direction générale de l'immigration)",
    "ADEM (Agence pour le développement de l'emploi): Stellenmeldung und Bescheinigung",
    "Luxemburgische Botschaft oder luxemburgisches Konsulat: Visum D",
    "Wohnsitzgemeinde: Ankunftsmeldung",
  ],
  legalBasis: [
    "Loi modifiée du 29 août 2008 sur la libre circulation des personnes et l'immigration",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
    "Code du travail, Buch VI über die Beschäftigung ausländischer Arbeitnehmer",
  ],
  steps: [
    {
      title: "Stelle bei ADEM melden",
      actor: "Employer",
      detail:
        "Der Arbeitgeber meldet die Stelle bei ADEM. Wird innerhalb der gesetzlichen Frist kein geeigneter Kandidat vorgeschlagen, beantragt der Arbeitgeber die Bescheinigung, die die Einstellung eines Drittstaatsangehörigen erlaubt.",
    },
    {
      title: "Arbeitsvertrag unterzeichnen",
      actor: "Both",
      detail:
        "Der Vertrag muss dem luxemburgischen Arbeitsrecht entsprechen und kann vorsehen, dass er erst mit Erteilung der Aufenthaltsgenehmigung wirksam wird.",
    },
    {
      title: "Vorläufige Aufenthaltsgenehmigung beantragen",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer stellt den Antrag bei der Einwanderungsdirektion vom Wohnsitzland aus, mit der ADEM-Bescheinigung, dem Vertrag, der Passkopie, dem Führungszeugnisauszug und dem Lebenslauf.",
    },
    {
      title: "Entscheidung und Visum D",
      actor: "Authority",
      detail:
        "Bei Genehmigung stellt die Direktion die vorläufige Genehmigung aus, die 90 Tage für die Einreise nach Luxemburg gilt. Visumpflichtige Staatsangehörige beantragen anschließend ein Visum D.",
    },
    {
      title: "Ankunftsformalitäten",
      actor: "Employee",
      detail:
        "Innerhalb von 3 Arbeitstagen nach der Ankunft meldet der Arbeitnehmer seine Ankunft bei der Gemeinde und unterzieht sich dann der ärztlichen Untersuchung.",
    },
    {
      title: "Antrag auf den Aufenthaltstitel",
      actor: "Employee",
      detail:
        "Innerhalb von 3 Monaten nach der Ankunft beantragt der Arbeitnehmer die Aufenthaltskarte (titre de séjour) bei der Einwanderungsdirektion und zahlt die Gebühr.",
    },
  ],
  employerDocs: [
    { label: "ADEM-Stellenmeldung und Bescheinigung, die die Einstellung eines Drittstaatsangehörigen erlaubt" },
    { label: "Unterzeichneter und datierter Arbeitsvertrag im Einklang mit dem luxemburgischen Arbeitsrecht" },
    { label: "Registrierungsunterlagen des Unternehmens (RCS-Auszug)" },
    { label: "Nachweis eines Gehalts, das das geltende Minimum oder die Schwelle der Blauen Karte erreicht" },
  ],
  employeeDocs: [
    { label: "Antragsformular für eine vorläufige Aufenthaltsgenehmigung" },
    { label: "Vollständige Kopie eines gültigen Reisepasses" },
    { label: "Geburtsurkunde, legalisiert oder mit Apostille, mit Übersetzung" },
    { label: "Führungszeugnisauszug des Wohnsitzlandes, legalisiert, mit Übersetzung" },
    { label: "Lebenslauf und für die Stelle relevante Diplome oder Zeugnisse" },
    { label: "Ärztliches Attest und Tuberkulosetest nach der Ankunft" },
    { label: "Adressnachweis in Luxemburg für die Phase des Aufenthaltstitels" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Hochqualifizierte mit Hochschulabschluss und einem Gehalt über der Schwelle; keine Arbeitsmarktprüfung." },
    { name: "Konzernintern versetzter Arbeitnehmer", summary: "Führungskräfte, Spezialisten und Trainees, die innerhalb eines Konzerns versetzt werden." },
    { name: "Genehmigung für Investoren oder Selbstständige", summary: "Gesondertes Verfahren mit einer Niederlassungsgenehmigung für Unternehmen." },
  ],
  watchOuts: [
    "Die vorläufige Aufenthaltsgenehmigung muss vor der Einreise nach Luxemburg eingeholt werden; im Inland gestellte Anträge werden abgelehnt, außer für bestimmte Kategorien.",
    "Dokumente in anderen Sprachen als Französisch, Deutsch oder Englisch erfordern eine beglaubigte Übersetzung.",
    "Die erste Genehmigung ist auf einen Sektor und einen Beruf beschränkt; ein Wechsel erfordert eine neue Genehmigung.",
  ],
};
