"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { countries, type CountryCode } from "@/lib/countries";
import { Pill } from "@/components/ui";

type CaseFile = {
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
};

const STORAGE = "emismart:casefile";

function newReference() {
  const d = new Date();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `EMI-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}-${rand}`;
}

const blank = (country: CountryCode | ""): CaseFile => ({
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
});

export function Intake() {
  const params = useSearchParams();
  const preset = params.get("country") as CountryCode | null;
  const [file, setFile] = useState<CaseFile | null>(null);
  const [step, setStep] = useState(0);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        setFile(JSON.parse(raw));
        setSaved(true);
        setStep(3);
        return;
      }
    } catch {
      // ignore
    }
    setFile(blank(preset && countries.some((c) => c.code === preset) ? preset : ""));
  }, [preset]);

  if (!file) return null;

  const update = (patch: Partial<CaseFile>) => setFile({ ...file, ...patch });
  const country = countries.find((c) => c.code === file.country);

  const save = () => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(file));
    } catch {
      // ignore
    }
    setSaved(true);
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
  };

  const input = "mt-1 w-full rounded-xl border border-navy-900/20 px-4 py-3 text-sm focus:border-navy-900 focus:outline-none";
  const label = "block text-sm font-medium text-navy-900";

  const steps = ["Country and role", "Parties", "Position", "Summary"];

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <ol className="no-print space-y-2">
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

      <div className="rounded-3xl border border-navy-900/10 bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-wider text-navy-800/60">Reference {file.reference}</p>
          {saved && <Pill tone="green">Saved locally</Pill>}
        </div>

        {step === 0 && (
          <div className="mt-6 space-y-6">
            <div>
              <label className={label} htmlFor="country">Destination country</label>
              <select
                id="country"
                value={file.country}
                onChange={(e) => update({ country: e.target.value as CountryCode })}
                className={input}
              >
                <option value="" disabled>
                  Choose one of the 27 EU member states
                </option>
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span className={label}>I am the</span>
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                {(["employer", "employee", "lawyer"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => update({ role: r })}
                    className={`rounded-xl border px-3 py-3 text-sm font-medium capitalize transition ${
                      file.role === r ? "border-navy-900 bg-navy-900 text-white" : "border-navy-900/15 hover:border-navy-900/40"
                    }`}
                  >
                    {r === "lawyer" ? "Lawyer or mandatary" : r}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button disabled={!file.country || !file.role} onClick={() => setStep(1)} className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white disabled:opacity-40">
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="employerName">Employer (legal entity)</label>
              <input id="employerName" className={input} value={file.employerName} onChange={(e) => update({ employerName: e.target.value })} />
            </div>
            <div>
              <label className={label} htmlFor="employeeName">Employee (full name)</label>
              <input id="employeeName" className={input} value={file.employeeName} onChange={(e) => update({ employeeName: e.target.value })} />
            </div>
            <div>
              <label className={label} htmlFor="nationality">Employee nationality</label>
              <input id="nationality" className={input} value={file.nationality} onChange={(e) => update({ nationality: e.target.value })} />
            </div>
            <div>
              <label className={label} htmlFor="contactEmail">Contact e-mail</label>
              <input id="contactEmail" type="email" className={input} value={file.contactEmail} onChange={(e) => update({ contactEmail: e.target.value })} />
            </div>
            <div className="flex justify-between sm:col-span-2">
              <button onClick={() => setStep(0)} className="text-sm text-navy-800/70 hover:text-navy-900">Back</button>
              <button onClick={() => setStep(2)} className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white">Continue</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="jobTitle">Job title</label>
              <input id="jobTitle" className={input} value={file.jobTitle} onChange={(e) => update({ jobTitle: e.target.value })} />
            </div>
            <div>
              <label className={label} htmlFor="startDate">Intended start date</label>
              <input id="startDate" type="date" className={input} value={file.startDate} onChange={(e) => update({ startDate: e.target.value })} />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="notes">Notes for the reviewer</label>
              <textarea id="notes" rows={4} className={input} value={file.notes} onChange={(e) => update({ notes: e.target.value })} placeholder="Previous permits, family members, regulated profession, urgency..." />
            </div>
            <div className="flex justify-between sm:col-span-2">
              <button onClick={() => setStep(1)} className="text-sm text-navy-800/70 hover:text-navy-900">Back</button>
              <button onClick={save} className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white">Save case file</button>
            </div>
          </div>
        )}

        {step === 3 && country && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">
              {country.flag} {country.permitName} in {country.name}
            </h2>
            <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
              {[
                ["Role", file.role],
                ["Employer", file.employerName || "—"],
                ["Employee", file.employeeName || "—"],
                ["Nationality", file.nationality || "—"],
                ["Job title", file.jobTitle || "—"],
                ["Start date", file.startDate || "—"],
                ["Contact", file.contactEmail || "—"],
                ["Opened", new Date(file.createdAt).toLocaleDateString()],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-sand-50 p-4">
                  <dt className="text-xs uppercase tracking-wider text-navy-800/60">{k}</dt>
                  <dd className="mt-1 font-medium capitalize">{v}</dd>
                </div>
              ))}
            </dl>
            {file.notes && <p className="mt-4 rounded-xl border border-navy-900/10 p-4 text-sm">{file.notes}</p>}

            <h3 className="mt-8 font-semibold">Indicative timeline</h3>
            <ol className="mt-3 space-y-2 text-sm">
              {country.steps.map((s, i) => (
                <li key={s.title} className="flex gap-3">
                  <span className="font-semibold text-gold-600">{i + 1}.</span>
                  <span>
                    <span className="font-medium">{s.title}</span> <span className="text-navy-800/60">({s.actor})</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-navy-800/80">Official decision period: {country.decisionPeriod}</p>

            <div className="no-print mt-8 flex flex-wrap gap-3">
              <Link href={`/checklist?country=${country.code}`} className="rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800">
                Open the document checklist
              </Link>
              <button onClick={() => window.print()} className="rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 hover:border-navy-900/50">
                Print summary
              </button>
              <button onClick={() => setStep(2)} className="rounded-full px-6 py-3 text-sm font-semibold text-navy-900 underline-offset-4 hover:underline">
                Edit
              </button>
              <button onClick={reset} className="rounded-full px-6 py-3 text-sm font-semibold text-navy-800/60 hover:text-navy-900">
                Delete and start over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
