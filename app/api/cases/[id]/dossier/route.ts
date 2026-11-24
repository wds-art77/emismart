import { NextResponse, type NextRequest } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { getCase } from "@/lib/cases";
import { countryByCode } from "@/lib/countries";
import { renderDossier } from "@/lib/pdf";
import { sectionsFor, type CaseFormData } from "@/lib/forms";
import { dicts, isLocale } from "@/lib/i18n";

// Pre-filled application dossier: case data laid out in the structure of the national form,
// plus the document checklist with its status and validation results.
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  const { id } = await params;
  const data = await getCase(user.id, id);
  if (!data) return NextResponse.json({ error: "not_found" }, { status: 404 });
  const l = req.nextUrl.searchParams.get("locale");
  const d = dicts[isLocale(l) ? l : "en"];
  const { case: c, documents, org } = data;
  const country = countryByCode(c.country);
  const form: CaseFormData = { reference: c.reference, employeeName: c.employeeName, nationality: c.nationality ?? "", jobTitle: c.jobTitle ?? "", startDate: c.startDate ?? "", employerName: org?.name ?? "", country: country?.name ?? c.country, filedOn: c.filedOn ?? "", decisionDue: c.decisionDue ?? "" };
  const labels: Record<keyof CaseFormData, string> = { reference: d.app.colReference, employeeName: d.app.employeeName, nationality: d.app.nationality, jobTitle: d.app.jobTitle, startDate: d.app.startDate, employerName: d.app.organisation, country: d.app.country, filedOn: d.app.filedOn, decisionDue: d.app.decisionDue };
  const sections = sectionsFor(c.country).map((s) => ({ title: s.title, rows: s.fields.map((f) => [labels[f], form[f]] as [string, string]) }));
  for (const party of ["employer", "employee"] as const) {
    sections.push({ title: d.app.docParty[party], rows: documents.filter((x) => x.party === party).map((x) => [x.label, `${d.app.docStatus[x.status]}${x.filename ? ` (${x.filename})` : ""}`] as [string, string]) });
  }
  const pdf = await renderDossier({ title: `${country?.permitName ?? ""} · ${c.reference}`, subtitle: `${c.employeeName} · ${org?.name ?? ""} · ${new Date().toISOString().slice(0, 10)}`, sections, footer: "Emismart · www.emismart.com" });
  return new NextResponse(new Uint8Array(pdf), { headers: { "Content-Type": "application/pdf", "Content-Disposition": `attachment; filename="${c.reference}-dossier.pdf"`, "Cache-Control": "private, no-store" } });
}
