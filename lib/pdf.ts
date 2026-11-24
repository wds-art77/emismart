import "server-only";
import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";

// PDF generation for case files: the pre-filled application dossier and the audit trail.
// Official national forms with fillable fields can be filled through `fillForm` once a template and a
// field mapping are registered (see lib/forms.ts); the dossier sheet is the provider-neutral fallback.

type Section = { title: string; rows: [string, string][] };

export async function renderDossier(opts: { title: string; subtitle: string; sections: Section[]; footer: string }): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const navy = rgb(0, 0.2, 0.6);
  let page = pdf.addPage([595.28, 841.89]);
  let y = 800;
  const margin = 50;
  const width = 595.28 - margin * 2;
  const newPage = () => { page = pdf.addPage([595.28, 841.89]); y = 800; };
  const text = (s: string, size: number, f: PDFFont, color = rgb(0.1, 0.1, 0.1), indent = 0) => {
    for (const line of wrap(s, f, size, width - indent)) {
      if (y < 60) newPage();
      page.drawText(line, { x: margin + indent, y, size, font: f, color });
      y -= size * 1.4;
    }
  };
  text(opts.title, 18, bold, navy);
  text(opts.subtitle, 10, font, rgb(0.35, 0.35, 0.35));
  y -= 10;
  for (const s of opts.sections) {
    if (y < 120) newPage();
    y -= 6;
    text(s.title, 12, bold, navy);
    page.drawLine({ start: { x: margin, y: y + 6 }, end: { x: margin + width, y: y + 6 }, thickness: 0.5, color: rgb(0.8, 0.8, 0.8) });
    y -= 4;
    for (const [k, v] of s.rows) {
      if (y < 60) newPage();
      page.drawText(k, { x: margin, y, size: 9, font: bold, color: rgb(0.3, 0.3, 0.3) });
      const lines = wrap(v || "—", font, 10, width - 170);
      lines.forEach((line, i) => { if (y < 60) newPage(); page.drawText(line, { x: margin + 170, y, size: 10, font }); if (i < lines.length - 1) y -= 13; });
      y -= 16;
    }
  }
  const pages = pdf.getPages();
  pages.forEach((p: PDFPage, i: number) => p.drawText(`${opts.footer}  ·  ${i + 1}/${pages.length}`, { x: margin, y: 30, size: 8, font, color: rgb(0.5, 0.5, 0.5) }));
  return pdf.save();
}

function wrap(s: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const clean = s.replace(/[^\x20-\x7E -ɏ€]/g, "");
  const words = clean.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const candidate = line ? `${line} ${w}` : w;
    if (font.widthOfTextAtSize(candidate, size) > maxWidth && line) {
      lines.push(line);
      line = w;
    } else line = candidate;
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

/** Fill an official PDF form (AcroForm) from a field mapping. Unknown fields are skipped and reported. */
export async function fillForm(template: Uint8Array, values: Record<string, string>): Promise<{ pdf: Uint8Array; filled: string[]; missing: string[] }> {
  const doc = await PDFDocument.load(template);
  const form = doc.getForm();
  const filled: string[] = [];
  const missing: string[] = [];
  for (const [name, value] of Object.entries(values)) {
    try {
      const field = form.getField(name);
      if ("setText" in field && typeof (field as { setText?: unknown }).setText === "function") (field as unknown as { setText: (v: string) => void }).setText(value);
      else if ("check" in field && value) (field as unknown as { check: () => void }).check();
      filled.push(name);
    } catch {
      missing.push(name);
    }
  }
  return { pdf: await doc.save(), filled, missing };
}
