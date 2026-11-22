"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "@/components/link";
import { useSearchParams } from "next/navigation";
import type { CountryCode } from "@/lib/countries";
import { addPeriod } from "@/lib/deadlines";
import { localizedDeadline, localizedNoDeadlineNote } from "@/lib/data/translations";
import { Pill } from "@/components/ui";
import { useLocale, useT, useCountryName, useCountries } from "@/components/locale";
import { fmt } from "@/lib/i18n";

type MilestoneStatus = "todo" | "doing" | "done";
type Milestone = { status: MilestoneStatus; date?: string; note?: string };

type CaseFile = {
  version: 1;
  reference: string;
  createdAt: string;
  country: CountryCode | "";
  role: "employer" | "employee" | "lawyer" | "";
  employerName: string;
  employeeName: string;
  nationality: string;
  jobTitle: string;
  startDate: string;
  contactEmail: string;
  notes: string;
  filedOn: string;
  milestones: Record<number, Milestone>;
};

const STORAGE = "emismart:casefile";

function newReference() {
  const d = new Date();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `EMI-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}-${rand}`;
}

const blank = (country: CountryCode | ""): CaseFile => ({
  version: 1,
  reference: newReference(),
  createdAt: new Date().toISOString(),
  country,
  role: "",
  employerName: "",
  employeeName: "",
  nationality: "",
  jobTitle: "",
  startDate: "",
  contactEmail: "",
  notes: "",
  filedOn: "",
  milestones: {},
});

function readChecklist(code: string, party: "employer" | "employee"): number {
  try {
    const raw = localStorage.getItem(`emismart:checklist:${code}:${party}`);
    if (!raw) return 0;
    return Object.values(JSON.parse(raw) as Record<string, boolean>).filter(Boolean).length;
  } catch {
    return 0;
  }
}

function fmtDate(d: Date, locale: string) {
  return d.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
}

export function Intake() {
  const d = useT();
  const cn = useCountryName();
  const countries = useCountries();
  const t = d.tracker;
  const { locale } = useLocale();
  const partyLabel = (p: "employer" | "employee") => (p === "employer" ? d.common.employer : d.common.employee);
  const params = useSearchParams();
  const preset = params.get("country") as CountryCode | null;
  const [file, setFile] = useState<CaseFile | null>(null);
  const [step, setStep] = useState(0);
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState<"overview" | "milestones" | "documents">("overview");
  const [docCounts, setDocCounts] = useState({ employer: 0, employee: 0 });
  const importRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<CaseFile>;
        setFile({ ...blank(""), ...parsed, milestones: parsed.milestones ?? {}, filedOn: parsed.filedOn ?? "", version: 1 });
        setSaved(true);
        setStep(3);
        return;
      }
    } catch {
      // ignore
    }
    setFile(blank(preset && countries.some((c) => c.code === preset) ? preset : ""));
  }, [preset]);

  useEffect(() => {
    if (!file?.country) return;
    setDocCounts({ employer: readChecklist(file.country, "employer"), employee: readChecklist(file.country, "employee") });
  }, [file?.country, tab]);

  if (!file) return null;

  const country = countries.find((c) => c.code === file.country);

  const persist = (next: CaseFile) => {
    setFile(next);
    try {
      localStorage.setItem(STORAGE, JSON.stringify(next));
      setSaved(true);
    } catch {
      // storage unavailable
    }
  };

  const update = (patch: Partial<CaseFile>) => {
    const next = { ...file, ...patch };
    if (saved) persist(next);
    else setFile(next);
  };

  const setMilestone = (i: number, patch: Partial<Milestone>) => {
    const current = file.milestones[i] ?? { status: "todo" as MilestoneStatus };
    persist({ ...file, milestones: { ...file.milestones, [i]: { ...current, ...patch } } });
  };

  const save = () => {
    persist(file);
    setStep(3);
  };

  const reset = () => {
    try {
      localStorage.removeItem(STORAGE);
    } catch {
      // ignore
    }
    setFile(blank(""));
    setSaved(false);
    setStep(0);
    setTab("overview");
  };

  const requestReview = () => {
    if (!country) return;
    const lines = [
      d.review.intro,
      "",
      `${t.fields.role}: ${file.role ? t.roles[file.role] : ""}`,
      `${t.destination}: ${cn(country)} (${country.permitName})`,
      `${t.fields.employer}: ${file.employerName}`,
      `${t.fields.employee}: ${file.employeeName} (${file.nationality})`,
      `${t.fields.jobTitle}: ${file.jobTitle}`,
      `${t.fields.startDate}: ${file.startDate}`,
      `${t.filedOn}: ${file.filedOn}`,
      "",
      `${t.notes}: ${file.notes}`,
      "",
      ...country.steps.map((s, i) => `${i + 1}. ${s.title}: ${t.status[file.milestones[i]?.status ?? "todo"]}${file.milestones[i]?.date ? ` (${file.milestones[i].date})` : ""}`),
    ];
    const to = process.env.NEXT_PUBLIC_REVIEW_EMAIL ?? "weds@desaeger.be";
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(fmt(d.review.subject, { ref: file.reference }))}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(file, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${file.reference}.emismart.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJson = (f: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as Partial<CaseFile>;
        if (!parsed.reference || !parsed.country) throw new Error("not a case file");
        persist({ ...blank(""), ...parsed, milestones: parsed.milestones ?? {}, filedOn: parsed.filedOn ?? "", version: 1 });
        setStep(3);
      } catch {
        alert(t.importError);
      }
    };
    reader.readAsText(f);
  };

  const input = "mt-1 w-full rounded-xl border border-navy-900/20 px-4 py-3 text-sm focus:border-navy-900 focus:outline-none";
  const label = "block text-sm font-medium text-navy-900";
  const steps = t.steps;

  const total = country?.steps.length ?? 0;
  const done = country ? country.steps.filter((_, i) => file.milestones[i]?.status === "done").length : 0;
  const progress = total ? Math.round((done / total) * 100) : 0;
  const deadline = country ? localizedDeadline(country.code, locale) : null;
  const filed = file.filedOn ? new Date(file.filedOn) : null;
  const due = filed && deadline ? addPeriod(filed, deadline) : null;
  const daysLeft = due ? Math.ceil((due.getTime() - Date.now()) / 86400000) : null;

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <div className="no-print space-y-6">
        <ol className="space-y-2">
          {steps.map((s, i) => (
            <li
              key={s}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${
                i === step ? "bg-navy-900 text-white" : i < step ? "text-navy-900" : "text-navy-800/50"
              }`}
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${i === step ? "bg-white text-navy-900" : "bg-navy-100 text-navy-900"}`}>
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
        <div className="rounded-xl border border-navy-900/10 p-4 text-xs text-navy-800/70">
          <p className="font-semibold text-navy-900">{t.shareTitle}</p>
          <p className="mt-1">{t.shareBody}</p>
          <div className="mt-3 flex flex-col gap-2">
            <button onClick={exportJson} disabled={!saved} className="rounded-full border border-navy-900/20 px-4 py-2 text-xs font-semibold text-navy-900 hover:border-navy-900/50 disabled:opacity-40">
              {t.export}
            </button>
            <button onClick={() => importRef.current?.click()} className="rounded-full border border-navy-900/20 px-4 py-2 text-xs font-semibold text-navy-900 hover:border-navy-900/50">
              {t.import}
            </button>
            <input ref={importRef} type="file" accept="application/json,.json" className="hidden" onChange={(e) => e.target.files?.[0] && importJson(e.target.files[0])} />
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-wider text-navy-800/60">{fmt(t.reference, { ref: file.reference })}</p>
          {saved && <Pill tone="green">{t.saved}</Pill>}
        </div>

        {step === 0 && (
          <div className="mt-6 space-y-6">
            <div>
              <label className={label} htmlFor="country">{t.destination}</label>
              <select id="country" value={file.country} onChange={(e) => update({ country: e.target.value as CountryCode })} className={input}>
                <option value="" disabled>
                  {d.common.chooseCountry}
                </option>
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {cn(c)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span className={label}>{t.iAm}</span>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {(["employer", "employee", "lawyer"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => update({ role: r })}
                    className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                      file.role === r ? "border-navy-900 bg-navy-900 text-white" : "border-navy-900/15 hover:border-navy-900/40"
                    }`}
                  >
                    {t.roles[r]}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button disabled={!file.country || !file.role} onClick={() => setStep(1)} className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white disabled:opacity-40">
                {d.common.continue}
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="employerName">{t.employerName}</label>
              <input id="employerName" className={input} value={file.employerName} onChange={(e) => update({ employerName: e.target.value })} />
            </div>
            <div>
              <label className={label} htmlFor="employeeName">{t.employeeName}</label>
              <input id="employeeName" className={input} value={file.employeeName} onChange={(e) => update({ employeeName: e.target.value })} />
            </div>
            <div>
              <label className={label} htmlFor="nationality">{t.nationality}</label>
              <input id="nationality" className={input} value={file.nationality} onChange={(e) => update({ nationality: e.target.value })} />
            </div>
            <div>
              <label className={label} htmlFor="contactEmail">{t.contact}</label>
              <input id="contactEmail" type="email" className={input} value={file.contactEmail} onChange={(e) => update({ contactEmail: e.target.value })} />
            </div>
            <div className="flex justify-between sm:col-span-2">
              <button onClick={() => setStep(0)} className="text-sm text-navy-800/70 hover:text-navy-900">{d.common.back}</button>
              <button onClick={() => setStep(2)} className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white">{d.common.continue}</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="jobTitle">{t.jobTitle}</label>
              <input id="jobTitle" className={input} value={file.jobTitle} onChange={(e) => update({ jobTitle: e.target.value })} />
            </div>
            <div>
              <label className={label} htmlFor="startDate">{t.startDate}</label>
              <input id="startDate" type="date" className={input} value={file.startDate} onChange={(e) => update({ startDate: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="notes">{t.notes}</label>
              <textarea id="notes" rows={4} className={input} value={file.notes} onChange={(e) => update({ notes: e.target.value })} placeholder={t.notesPlaceholder} />
            </div>
            <div className="flex justify-between sm:col-span-2">
              <button onClick={() => setStep(1)} className="text-sm text-navy-800/70 hover:text-navy-900">{d.common.back}</button>
              <button onClick={save} className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white">{t.save}</button>
            </div>
          </div>
        )}

        {step === 3 && country && (
          <div className="mt-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  {country.flag} {fmt(t.inCountry, { permit: country.permitName, country: cn(country) })}
                </h2>
                <p className="mt-1 text-sm text-navy-800/70">
                  {file.employeeName || d.common.employee} · {file.employerName || d.common.employer} · {file.jobTitle || t.jobTitle}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-semibold">{progress}%</p>
                <p className="text-xs text-navy-800/60">{fmt(t.milestonesDone, { done, total })}</p>
              </div>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-navy-100">
              <div className="h-full bg-navy-900 transition-all" style={{ width: `${progress}%` }} />
            </div>

            <div className="no-print mt-6 flex gap-2 border-b border-navy-900/10">
              {(["overview", "milestones", "documents"] as const).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setTab(tabKey)}
                  className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium ${tab === tabKey ? "border-navy-900 text-navy-900" : "border-transparent text-navy-800/60 hover:text-navy-900"}`}
                >
                  {t.tabs[tabKey]}
                </button>
              ))}
            </div>

            {tab === "overview" && (
              <div className="mt-6 space-y-6">
                <div className="rounded-2xl border border-gold-500/40 bg-gold-100/40 p-5">
                  <h3 className="font-semibold">{t.deadlineTitle}</h3>
                  {deadline ? (
                    <>
                      <div className="mt-3 grid gap-4 sm:grid-cols-[220px_1fr] sm:items-end">
                        <div>
                          <label className={label} htmlFor="filedOn">{t.filedOn}</label>
                          <input id="filedOn" type="date" className={input} value={file.filedOn} onChange={(e) => update({ filedOn: e.target.value })} />
                        </div>
                        <div className="text-sm">
                          {due ? (
                            <p>
                              {fmt(t.dueBy, { period: deadline.label, date: fmtDate(due, locale) })}
                              {daysLeft !== null && (
                                <span className="text-navy-800/70"> ({daysLeft >= 0 ? fmt(t.daysLeft, { n: daysLeft }) : fmt(t.daysOverdue, { n: Math.abs(daysLeft) })})</span>
                              )}
                              .
                            </p>
                          ) : (
                            <p className="text-navy-800/70">{fmt(t.enterFiling, { period: deadline.label })}</p>
                          )}
                        </div>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-navy-800/70">{deadline.note} {t.indicative}</p>
                    </>
                  ) : (
                    <p className="mt-2 text-sm leading-relaxed text-navy-800/80">{localizedNoDeadlineNote(country.code, locale)}</p>
                  )}
                </div>

                <dl className="grid gap-4 text-sm sm:grid-cols-2">
                  {[
                    [t.fields.role, file.role ? t.roles[file.role] : "—"],
                    [t.fields.employer, file.employerName || "—"],
                    [t.fields.employee, file.employeeName || "—"],
                    [t.fields.nationality, file.nationality || "—"],
                    [t.fields.jobTitle, file.jobTitle || "—"],
                    [t.fields.startDate, file.startDate || "—"],
                    [t.fields.contact, file.contactEmail || "—"],
                    [t.fields.opened, new Date(file.createdAt).toLocaleDateString(locale)],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-xl bg-sand-50 p-4">
                      <dt className="text-xs uppercase tracking-wider text-navy-800/60">{k}</dt>
                      <dd className="mt-1 font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
                {file.notes && <p className="rounded-xl border border-navy-900/10 p-4 text-sm">{file.notes}</p>}
                <p className="text-sm text-navy-800/80">{fmt(t.officialPeriod, { text: country.decisionPeriod })}</p>
              </div>
            )}

            {tab === "milestones" && (
              <ol className="mt-6 space-y-3">
                {country.steps.map((s, i) => {
                  const m = file.milestones[i] ?? { status: "todo" as MilestoneStatus };
                  const tone = m.status === "done" ? "green" : m.status === "doing" ? "gold" : "grey";
                  return (
                    <li key={s.title} className="rounded-2xl border border-navy-900/10 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${m.status === "done" ? "bg-emerald-600 text-white" : "bg-navy-100 text-navy-900"}`}>
                            {m.status === "done" ? "✓" : i + 1}
                          </span>
                          <div>
                            <p className="font-medium">{s.title}</p>
                            <p className="text-xs text-navy-800/60">{s.actor === "Employer" ? d.common.employer : s.actor === "Employee" ? d.common.employee : s.actor === "Authority" ? d.common.authority : d.common.both}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Pill tone={tone}>{t.status[m.status]}</Pill>
                          <select
                            aria-label={fmt(t.statusOf, { title: s.title })}
                            value={m.status}
                            onChange={(e) => setMilestone(i, { status: e.target.value as MilestoneStatus, date: e.target.value === "done" && !m.date ? new Date().toISOString().slice(0, 10) : m.date })}
                            className="rounded-lg border border-navy-900/20 px-2 py-1 text-xs"
                          >
                            <option value="todo">{t.status.todo}</option>
                            <option value="doing">{t.status.doing}</option>
                            <option value="done">{t.status.done}</option>
                          </select>
                          <input aria-label={fmt(t.dateOf, { title: s.title })} type="date" value={m.date ?? ""} onChange={(e) => setMilestone(i, { date: e.target.value })} className="rounded-lg border border-navy-900/20 px-2 py-1 text-xs" />
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-navy-800/80">{s.detail}</p>
                      <input
                        aria-label={fmt(t.noteFor, { title: s.title })}
                        placeholder={t.notePlaceholder}
                        value={m.note ?? ""}
                        onChange={(e) => setMilestone(i, { note: e.target.value })}
                        className="mt-3 w-full rounded-lg border border-navy-900/10 px-3 py-2 text-xs focus:border-navy-900 focus:outline-none"
                      />
                    </li>
                  );
                })}
              </ol>
            )}

            {tab === "documents" && (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {(["employer", "employee"] as const).map((p) => {
                  const list = p === "employer" ? country.employerDocs : country.employeeDocs;
                  const n = docCounts[p];
                  return (
                    <div key={p} className="rounded-2xl border border-navy-900/10 p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{fmt(t.docsTitle, { party: partyLabel(p) })}</h3>
                        <Pill tone={n === list.length ? "green" : "navy"}>{fmt(t.docsCount, { n, total: list.length })}</Pill>
                      </div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-navy-100">
                        <div className="h-full bg-navy-900" style={{ width: `${list.length ? Math.round((n / list.length) * 100) : 0}%` }} />
                      </div>
                      <ul className="mt-4 space-y-1 text-sm text-navy-800/80">
                        {list.map((d) => (
                          <li key={d.label}>{d.label}</li>
                        ))}
                      </ul>
                      <Link href={`/checklist?country=${country.code}`} className="mt-4 inline-block text-sm font-semibold text-navy-900 underline-offset-4 hover:underline">
                        {fmt(t.openChecklist, { party: partyLabel(p) })}
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="no-print mt-8 flex flex-wrap gap-3 border-t border-navy-900/10 pt-6">
              <button onClick={requestReview} className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-gold-600">
                {d.review.button}
              </button>
              <button onClick={() => window.print()} className="rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 hover:border-navy-900/50">
                {t.print}
              </button>
              <button onClick={() => setStep(2)} className="rounded-full px-6 py-3 text-sm font-semibold text-navy-900 underline-offset-4 hover:underline">
                {t.edit}
              </button>
              <button onClick={reset} className="rounded-full px-6 py-3 text-sm font-semibold text-navy-800/60 hover:text-navy-900">
                {t.reset}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
