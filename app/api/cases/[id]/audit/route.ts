import { NextResponse, type NextRequest } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { getCase } from "@/lib/cases";
import { renderDossier } from "@/lib/pdf";
import { dicts, isLocale } from "@/lib/i18n";

// Audit trail export: every event on the case with timestamp and actor.
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  const { id } = await params;
  const data = await getCase(user.id, id);
  if (!data) return NextResponse.json({ error: "not_found" }, { status: 404 });
  const l = req.nextUrl.searchParams.get("locale");
  const d = dicts[isLocale(l) ? l : "en"];
  const rows = [...data.events].reverse().map(({ e, actorEmail }) => [new Date(e.createdAt).toISOString().replace("T", " ").slice(0, 19), `${(d.app.eventTypes as Record<string, string>)[e.type] ?? e.type}${actorEmail ? ` · ${actorEmail}` : ""}`] as [string, string]);
  const pdf = await renderDossier({ title: `${d.app.activity} · ${data.case.reference}`, subtitle: `${data.case.employeeName} · ${new Date().toISOString().slice(0, 10)}`, sections: [{ title: d.app.activity, rows }], footer: "Emismart · www.emismart.com" });
  return new NextResponse(new Uint8Array(pdf), { headers: { "Content-Type": "application/pdf", "Content-Disposition": `attachment; filename="${data.case.reference}-audit.pdf"`, "Cache-Control": "private, no-store" } });
}
