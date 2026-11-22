import type { CountryDetails } from "../types";

export const pl: CountryDetails = {
  authorities: [
    "Woiwode (wojewoda) und das Woiwodschaftsamt (urząd wojewódzki) am Wohnort des Arbeitnehmers: Entscheidung über die kombinierte Erlaubnis und über Arbeitserlaubnisse",
    "Amt für Ausländer (Urząd do Spraw Cudzoziemców, UdSC): betreibt das MOS-Portal und entscheidet über Rechtsbehelfe gegen Entscheidungen des Woiwoden",
    "Starost und das Kreisarbeitsamt (powiatowy urząd pracy): Kreislisten von Berufen, für die Erlaubnisse verweigert werden, und Registrierung von Erklärungen über die Übertragung von Arbeit",
    "Polnisches Konsulat: nationales Visum (Typ D) für Arbeitnehmer, die mit einer Arbeitserlaubnis aus dem Ausland einreisen",
  ],
  legalBasis: [
    "Ustawa z dnia 12 grudnia 2013 r. o cudzoziemcach (Ausländergesetz), insbesondere die Bestimmungen über die befristete Aufenthalts- und Arbeitserlaubnis",
    "Ustawa z dnia 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom na terytorium Rzeczypospolitej Polskiej, in Kraft seit dem 1. Juni 2025",
    "Richtlinie 2011/98/EU, neu gefasst durch die Richtlinie (EU) 2024/1233",
  ],
  steps: [
    {
      title: "Prüfen, ob zuerst Arbeitserlaubnis und Visum erforderlich sind",
      actor: "Employer",
      detail:
        "Ein Arbeitnehmer, der sich im Ausland befindet, kann die kombinierte Erlaubnis nicht beantragen. Der Arbeitgeber holt über praca.gov.pl eine Arbeitserlaubnis beim Woiwoden ein oder registriert für Staatsangehörige der Ukraine, Belarus', Russlands, Georgiens, Moldaus und Armeniens eine Erklärung über die Übertragung von Arbeit beim Kreisarbeitsamt. Der Arbeitnehmer beantragt dann beim polnischen Konsulat ein nationales Visum.",
    },
    {
      title: "Einreise nach Polen und Vertragsunterzeichnung",
      actor: "Both",
      detail:
        "Der Arbeitnehmer reist mit dem nationalen Visum oder auf einer anderen rechtlichen Grundlage ein und darf auf Grundlage der Arbeitserlaubnis oder der Erklärung die Arbeit aufnehmen. Es wird ein Arbeitsvertrag, Auftragsvertrag oder Werkvertrag mit einer Vergütung mindestens in Höhe des gesetzlichen Mindestlohns unterzeichnet.",
    },
    {
      title: "Arbeitgeber füllt Anlage 1 in MOS aus",
      actor: "Employer",
      detail:
        "Der Arbeitnehmer beginnt den MOS-Antrag und gibt die E-Mail-Adresse des Arbeitgebers ein. Der Arbeitgeber erhält einen Link, füllt die Anlage 1 mit Position (aus der amtlichen GUS-Liste), Arbeitszeit, Vergütung und Vertragsart aus und unterzeichnet sie mit einem Trusted Profile (profil zaufany) oder einer qualifizierten Signatur. Der Link ist 30 Tage gültig.",
    },
    {
      title: "Arbeitnehmer reicht den Antrag ein und zahlt die Stempelgebühr",
      actor: "Employee",
      detail:
        "Der Arbeitnehmer reicht den Antrag spätestens am letzten Tag des rechtmäßigen Aufenthalts elektronisch über MOS ein, mit einer Kopie des Reisepasses, Fotos, dem Nachweis der Zahlung der Stempelgebühr und Belegen wie einer Krankenversicherung, wenn die Vertragsart keinen gesetzlichen Schutz bietet.",
    },
    {
      title: "Fingerabdrücke und Prüfung beim Woiwodschaftsamt",
      actor: "Authority",
      detail:
        "Das Woiwodschaftsamt prüft den Antrag, lädt den Arbeitnehmer zur Abgabe der Fingerabdrücke und einer Unterschriftsprobe vor und fordert fehlende Unterlagen bis zu einer gesetzten Frist nach. Ein fehlendes Dokument ist ein formeller Mangel, und der Antrag bleibt unbearbeitet, wenn es nicht rechtzeitig nachgereicht wird.",
    },
    {
      title: "Entscheidung und Aufenthaltskarte",
      actor: "Authority",
      detail:
        "Der Woiwode erlässt die Entscheidung. Bei Genehmigung zahlt der Arbeitnehmer die Kartengebühr und holt die Aufenthaltskarte mit dem Vermerk über den Arbeitsmarktzugang ab. Gegen eine Ablehnung kann innerhalb von 14 Tagen beim Leiter des Amtes für Ausländer Widerspruch eingelegt werden.",
    },
  ],
  employerDocs: [
    { label: "Anlage 1 zum Antrag, in MOS elektronisch ausgefüllt und unterzeichnet von einer zur Vertretung des Arbeitgebers befugten Person" },
    { label: "Arbeits-, Auftrags- oder Werkvertrag mit einer Vergütung mindestens in Höhe des gesetzlichen Mindestlohns" },
    { label: "Arbeitserlaubnis oder registrierte Erklärung über die Übertragung von Arbeit, wenn der Arbeitnehmer auf dieser Grundlage nach Polen eingereist ist" },
    { label: "Erklärung zu Vorstrafen und zur Compliance-Historie des Arbeitgebers, wie in Anlage 1 verlangt" },
    { label: "Vollmacht, die dem Arbeitnehmer außerhalb des Systems übergeben wird, wenn der Arbeitgeber durch einen Vertreter handelt", note: "Arbeitgeber können der Anlage 1 selbst keine Dokumente beifügen." },
  ],
  employeeDocs: [
    { label: "In MOS ausgefüllter Antrag auf eine befristete Aufenthaltserlaubnis" },
    { label: "Kopie eines gültigen Reisedokuments, Original bei der Abnahme der Fingerabdrücke vorzulegen" },
    { label: "Aktuelle Fotos nach den amtlichen Anforderungen" },
    { label: "Nachweis der Zahlung der Stempelgebühr" },
    { label: "Nachweis einer Krankenversicherung, wenn der Vertrag keinen gesetzlichen Schutz bietet" },
    { label: "Diplome oder Qualifikationen für reglementierte Berufe" },
    { label: "Bescheinigung des bisherigen Arbeitgebers bei einem Arbeitgeberwechsel" },
    { label: "Beglaubigte polnische Übersetzungen aller fremdsprachigen Dokumente" },
  ],
  alternativeRoutes: [
    { name: "Blaue Karte EU", summary: "Befristete Aufenthaltserlaubnis zur Arbeit in einem Beruf, der hohe Qualifikationen erfordert, mit einem Hochschulabschluss oder qualifizierender Erfahrung und einem Gehalt über einer jährlich festgelegten Schwelle. Wird ebenfalls über MOS eingereicht." },
    { name: "Arbeitserlaubnis und nationales Visum", summary: "Der Arbeitgeber holt über praca.gov.pl eine Arbeitserlaubnis beim Woiwoden ein, und der Arbeitnehmer reist mit einem nationalen Visum ein. Wird vor der kombinierten Erlaubnis oder anstelle davon für kürzere Aufenthalte genutzt." },
    { name: "Erklärung über die Übertragung von Arbeit", summary: "Für Staatsangehörige der Ukraine, Belarus', Russlands, Georgiens, Moldaus und Armeniens, beim Kreisarbeitsamt registriert und bis zu 24 Monate gültig, ohne Arbeitserlaubnis." },
    { name: "Erlaubnis für unternehmensinterne Transfers", summary: "Gesonderte befristete Aufenthaltserlaubnis für Führungskräfte, Spezialisten und Trainees, die innerhalb eines Konzerns versetzt werden, weiterhin in Papierform einzureichen." },
  ],
  watchOuts: [
    "Der Antrag kann nur gestellt werden, solange sich der Arbeitnehmer rechtmäßig in Polen aufhält. Eine Einreise mit einem Touristen-, Studien- oder Behandlungsvisum schließt das Verfahren vollständig aus, und Aufenthaltsdokumente eines anderen Schengen-Staates führen zur Verweigerung der Verfahrenseröffnung.",
    "Ohne unterzeichnete Anlage 1 geht nichts voran. Der Link des Arbeitgebers verfällt nach 30 Tagen, das Formular kann nicht zwischengespeichert werden, und jeder Gesamtvertreter muss gesondert unterzeichnen.",
    "Die Erlaubnis ist an Arbeitgeber, Position, Vergütung, Arbeitszeit und Vertragsart gebunden. Ein Wechsel des Arbeitgebers oder dieser Bedingungen erfordert eine neue Erlaubnis oder eine Änderungsentscheidung; nur eine Änderung des Namens, der Rechtsform oder des Sitzes des Arbeitgebers ist ausgenommen.",
  ],
};
