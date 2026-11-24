import { notFound } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { getCase } from "@/lib/cases";
import { countryByCode } from "@/lib/countries";
import { localizeCountry, localizedDeadline } from "@/lib/data/translations";
import { dicts, fmt, isLocale } from "@/lib/i18n";
import { Link } from "@/components/link";
import { Pill } from "@/components/ui";
import { UploadButton } from "@/components/upload-button";
import { addCommentAction, downloadAction, fileCaseAction, inviteAction, requestDocumentAction, requestReviewAction, reviewDocumentAction, setDocumentMetaAction, setStatusAction, updateMilestoneAction } from "../../actions";
import { docTypeFields, type DocMeta, type DocType } from "@/lib/documents/types";
import { summarise } from "@/lib/documents/validate";
import { isoCountries, commonLanguages } from "@/lib/documents/iso";

export const dynamic = "force-dynamic";

const statusTone = { draft: "grey", collecting: "navy", filed: "gold", decided: "green", closed: "grey" } as const;
const docTone = { requested: "grey", uploaded: "gold", verified: "green", rejected: "navy" } as const;
type Tab = "overview" | "milestones" | "documents" | "parties" | "discussion" | "activity";
const checkTone = { pass: "green", warn: "gold", fail: "navy", info: "grey" } as const;

export default async function CasePage({ params, searchParams }: { params: Promise<{ locale: string; id: string }>; searchParams: Promise<{ tab?: string }> }) {
  const { locale: l, id } = await params;
  const locale = isLocale(l) ? l : "en";
  const d = dicts[locale];
  const a = d.app;
  const user = await requireUser(locale, `/${locale}/app/cases/${id}`);
  const data = await getCase(user.id, id);
  if (!data) notFound();
  const { case: c, access, milestones, documents, events, members, invitations, org, comments, counselOrgs, nextActions } = data;
  const raw = countryByCode(c.country);
  const country = raw ? localizeCountry(raw, locale) : null;
  const tab = ((await searchParams).tab ?? "overview") as Tab;
  const canEdit = access.role !== "employee";
  const done = milestones.filter((m) => m.status === "done").length;
  const deadline = localizedDeadline(c.country as never, locale);
  const readiness = { pass: 0, warn: 0, fail: 0 };
  for (const doc of documents) { const lvl = summarise(doc.checks as never); if (lvl in readiness) readiness[lvl as keyof typeof readiness]++; }
  const regionNames = new Intl.DisplayNames([locale], { type: "region" });
  const langNames = new Intl.DisplayNames([locale], { type: "language" });
  const checkText = (chk: { code: string; params?: Record<string, string | number> }) => fmt((a.checks as Record<string, string>)[chk.code] ?? chk.code, chk.params);
  // Generated documents keep their English label in the database; show the localized label by position.
  const localizedDoc = (party: "employer" | "employee", label: string) => {
    const source = party === "employer" ? raw?.employerDocs : raw?.employeeDocs;
    const target = party === "employer" ? country?.employerDocs : country?.employeeDocs;
    const i = source?.findIndex((x) => x.label === label) ?? -1;
    return i >= 0 && target?.[i] ? target[i] : null;
  };
  const input = "rounded-lg border border-navy-900/20 px-2 py-1 text-xs";
  const btn = "rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white hover:bg-navy-800";
  const btn2 = "rounded-full border border-navy-900/20 px-4 py-2 text-xs font-semibold text-navy-900 hover:border-navy-900/50";
  const hidden = (extra: Record<string, string> = {}) => (
    <>
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="caseId" value={c.id} />
      {Object.entries(extra).map(([k, v]) => <input key={k} type="hidden" name={k} value={v} />)}
    </>
  );

  return (
    <div>
      <Link href="/app" className="text-sm text-navy-800/70 hover:text-navy-900">{a.backToCases}</Link>
      <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-navy-800/60">{c.reference} · {org?.name}</p>
          <h1 className="mt-1 text-3xl font-semibold">{country?.flag} {c.employeeName}</h1>
          <p className="mt-1 text-sm text-navy-800/70">{country?.permitName}, {country?.name}{c.jobTitle ? ` · ${c.jobTitle}` : ""}</p>
          <p className="mt-2 text-xs text-navy-800/60">{fmt(a.yourRole, { role: a.roles[access.role] })}</p>
        </div>
        <div className="text-right">
          <Pill tone={statusTone[c.status]}>{a.status[c.status]}</Pill>
          <p className="mt-2 text-2xl font-semibold">{milestones.length ? Math.round((done / milestones.length) * 100) : 0}%</p>
          <p className="text-xs text-navy-800/60">{fmt(a.progress, { done, total: milestones.length })}</p>
        </div>
      </div>
      {access.role === "employee" && <p className="mt-4 rounded-xl bg-navy-100 p-3 text-sm">{a.employeeHint}</p>}

      <div className="mt-6 flex flex-wrap gap-2 border-b border-navy-900/10">
        {(["overview", "milestones", "documents", "parties", "discussion", "activity"] as Tab[]).map((t) => (
          <Link key={t} href={`/app/cases/${c.id}?tab=${t}`} className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium ${tab === t ? "border-navy-900 text-navy-900" : "border-transparent text-navy-800/60 hover:text-navy-900"}`}>{a.tabs[t]}</Link>
        ))}
      </div>

      {tab === "overview" && (
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-gold-500/40 bg-gold-100/40 p-5">
              <h2 className="font-semibold">{d.tracker.deadlineTitle}</h2>
              {c.filedOn ? (
                <p className="mt-2 text-sm">{a.filedOn}: <strong>{c.filedOn}</strong>{c.decisionDue && <> · {a.decisionDue}: <strong>{c.decisionDue}</strong></>}</p>
              ) : canEdit ? (
                <form action={fileCaseAction} className="mt-3 flex flex-wrap items-end gap-3">
                  {hidden()}
                  <label className="text-sm">{a.filedOn}<input type="date" name="filedOn" required className="mt-1 block rounded-xl border border-navy-900/20 px-3 py-2 text-sm" /></label>
                  <button className={btn}>{a.markFiled}</button>
                </form>
              ) : null}
              <p className="mt-3 text-xs text-navy-800/70">{deadline?.note ?? country?.decisionPeriod}</p>
            </div>
            <div className="rounded-2xl border border-navy-900/10 bg-white p-5">
              <h2 className="font-semibold">{a.nextActions}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {nextActions.length === 0 && <li className="text-navy-800/60">—</li>}
                {nextActions.map((n, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Pill tone={n.party === "authority" ? "grey" : n.party === "employee" ? "gold" : "navy"}>{a.partyLabel[n.party]}</Pill>
                    <span>{fmt(a.nextLabels[n.code], { count: n.count ?? 0, label: (n.label && country?.steps[milestones.findIndex((m) => m.title === n.label)]?.title) || n.label || "" })}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-navy-900/10 bg-white p-5">
              <h2 className="font-semibold">{a.readiness}</h2>
              <p className="mt-2 text-sm">{fmt(a.readinessCounts, readiness)}</p>
              <div className="mt-3 flex h-2 w-full overflow-hidden rounded-full bg-navy-100">
                {documents.length > 0 && (
                  <>
                    <div className="bg-emerald-600" style={{ width: `${(readiness.pass / documents.length) * 100}%` }} />
                    <div className="bg-gold-500" style={{ width: `${(readiness.warn / documents.length) * 100}%` }} />
                    <div className="bg-red-500" style={{ width: `${(readiness.fail / documents.length) * 100}%` }} />
                  </>
                )}
              </div>
            </div>
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              {[[a.nationality, c.nationality], [a.jobTitle, c.jobTitle], [a.startDate, c.startDate], [d.tracker.fields.opened, new Date(c.createdAt).toLocaleDateString(locale)]].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-white p-4"><dt className="text-xs uppercase tracking-wider text-navy-800/60">{k}</dt><dd className="mt-1 font-medium">{v || "—"}</dd></div>
              ))}
            </dl>
            {c.notes && canEdit && <p className="rounded-xl border border-navy-900/10 bg-white p-4 text-sm">{c.notes}</p>}
          </div>
          <div className="space-y-3">
            {canEdit && (
              <>
                <form action={requestReviewAction}>{hidden()}<button className={`${btn} w-full bg-gold-500 text-navy-950 hover:bg-gold-600`}>{a.requestReview}</button></form>
                {c.reviewRequestedAt && <p className="text-xs text-navy-800/70">{fmt(a.reviewRequested, { date: new Date(c.reviewRequestedAt).toLocaleDateString(locale) })}</p>}
                <form action={setStatusAction}>{hidden({ status: c.status === "closed" ? "collecting" : "closed" })}<button className={`${btn2} w-full`}>{c.status === "closed" ? a.reopen : a.close}</button></form>
              </>
            )}
            <a href={`/api/cases/${c.id}/dossier?locale=${locale}`} className={`${btn2} block text-center`}>{a.exportDossier}</a>
            <a href={`/api/cases/${c.id}/audit?locale=${locale}`} className={`${btn2} block text-center`}>{a.exportAudit}</a>
            <Link href={`/countries/${c.country}`} className="block text-center text-sm font-semibold text-navy-900 underline-offset-4 hover:underline">{d.eligibility.result.guide}</Link>
          </div>
        </div>
      )}

      {tab === "milestones" && (
        <ol className="mt-6 space-y-3">
          {milestones.map((m, i) => {
            const step = country?.steps[m.position];
            return (
              <li key={m.id} className="rounded-2xl border border-navy-900/10 bg-white p-4">
                <form action={updateMilestoneAction} className="flex flex-wrap items-start justify-between gap-3">
                  {hidden({ milestoneId: m.id })}
                  <div className="flex gap-3">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${m.status === "done" ? "bg-emerald-600 text-white" : "bg-navy-100 text-navy-900"}`}>{m.status === "done" ? "✓" : i + 1}</span>
                    <div>
                      <p className="font-medium">{step?.title ?? m.title}</p>
                      <p className="text-xs text-navy-800/60">{m.actor}</p>
                      <p className="mt-1 max-w-2xl text-sm text-navy-800/80">{step?.detail}</p>
                    </div>
                  </div>
                  {canEdit ? (
                    <div className="flex flex-wrap items-center gap-2">
                      <select name="status" defaultValue={m.status} className={input}>
                        {(["todo", "doing", "done"] as const).map((s) => <option key={s} value={s}>{a.milestoneStatus[s]}</option>)}
                      </select>
                      <input type="date" name="date" defaultValue={m.date ?? ""} className={input} />
                      <input name="note" defaultValue={m.note ?? ""} placeholder={d.tracker.notePlaceholder} className={`${input} w-56`} />
                      <button className={btn}>{a.save}</button>
                    </div>
                  ) : (
                    <Pill tone={m.status === "done" ? "green" : m.status === "doing" ? "gold" : "grey"}>{a.milestoneStatus[m.status]}</Pill>
                  )}
                </form>
              </li>
            );
          })}
        </ol>
      )}

      {tab === "documents" && (
        <div className="mt-6 space-y-8">
          {(["employer", "employee"] as const).map((party) => {
            const docs = documents.filter((x) => x.party === party);
            const canUpload = canEdit || party === "employee";
            return (
              <section key={party}>
                <h2 className="text-lg font-semibold">{a.docParty[party]}</h2>
                <ul className="mt-3 divide-y divide-navy-900/10 rounded-2xl border border-navy-900/10 bg-white">
                  {docs.map((doc) => (
                    <li key={doc.id} className="flex flex-wrap items-center justify-between gap-3 p-4">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium">{localizedDoc(party, doc.label)?.label ?? doc.label}</p>
                        {(localizedDoc(party, doc.label)?.note ?? doc.note) && <p className="text-xs text-navy-800/60">{localizedDoc(party, doc.label)?.note ?? doc.note}</p>}
                        {doc.filename && <p className="mt-1 text-xs text-navy-800/70">{doc.filename} · {Math.round((doc.size ?? 0) / 1024)} KB · {doc.uploadedAt ? new Date(doc.uploadedAt).toLocaleDateString(locale) : ""}</p>}
                        {doc.reviewNote && doc.status === "rejected" && <p className="mt-1 text-xs text-red-700">{doc.reviewNote}</p>}
                        {doc.storageKey && doc.checks.length > 0 && (
                          <ul className="mt-2 space-y-1">
                            {doc.checks.filter((x) => x.code !== "missing").map((x, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs"><Pill tone={checkTone[x.level as keyof typeof checkTone] ?? "grey"}>{x.level}</Pill><span className="text-navy-800/80">{checkText(x)}</span></li>
                            ))}
                          </ul>
                        )}
                        {doc.storageKey && docTypeFields[(doc.docType ?? "other") as DocType].length > 0 && (canEdit || party === "employee") && (
                          <details className="mt-2 text-xs">
                            <summary className="cursor-pointer font-semibold text-navy-900">{a.details}</summary>
                            <form action={setDocumentMetaAction} className="mt-2 grid gap-2 sm:grid-cols-3">
                              {hidden({ documentId: doc.id })}
                              {docTypeFields[(doc.docType ?? "other") as DocType].map((f) => {
                                const meta = doc.meta as DocMeta;
                                const label = a.meta[f];
                                if (f === "issuingCountry") return <label key={f}>{label}<select name={f} defaultValue={meta[f] ?? ""} className={`${input} mt-1 w-full`}><option value="">—</option>{isoCountries.map((cc) => <option key={cc} value={cc}>{regionNames.of(cc) ?? cc}</option>)}</select></label>;
                                if (f === "language") return <label key={f}>{label}<select name={f} defaultValue={meta[f] ?? ""} className={`${input} mt-1 w-full`}><option value="">—</option>{commonLanguages.map((lc) => <option key={lc} value={lc}>{langNames.of(lc) ?? lc}</option>)}</select></label>;
                                if (f === "legalised") return <label key={f}>{label}<select name={f} defaultValue={meta[f] ?? ""} className={`${input} mt-1 w-full`}><option value="">—</option>{(["none", "apostille", "legalisation", "not_required"] as const).map((o) => <option key={o} value={o}>{a.legalisedOptions[o]}</option>)}</select></label>;
                                if (f === "translated") return <label key={f}>{label}<select name={f} defaultValue={meta[f] ?? ""} className={`${input} mt-1 w-full`}><option value="">—</option>{(["none", "certified", "sworn"] as const).map((o) => <option key={o} value={o}>{a.translatedOptions[o]}</option>)}</select></label>;
                                return <label key={f}>{label}<input name={f} type={f.endsWith("Date") ? "date" : "text"} defaultValue={meta[f] ?? ""} className={`${input} mt-1 w-full`} /></label>;
                              })}
                              <div className="sm:col-span-3"><button className={btn}>{a.saveDetails}</button></div>
                            </form>
                          </details>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Pill tone={docTone[doc.status]}>{a.docStatus[doc.status]}</Pill>
                        {doc.storageKey && (
                          <form action={downloadAction}>{hidden({ documentId: doc.id })}<button className={btn2}>{a.download}</button></form>
                        )}
                        {canUpload && <UploadButton locale={locale} caseId={c.id} documentId={doc.id} label={doc.storageKey ? a.replace : a.upload} uploadingLabel={a.uploading} failedLabel={a.uploadFailed} />}
                        {canEdit && doc.status === "uploaded" && (
                          <form action={reviewDocumentAction} className="flex items-center gap-2">
                            {hidden({ documentId: doc.id })}
                            <input name="note" placeholder={a.reviewNote} className={`${input} w-40`} />
                            <button name="status" value="verified" className={btn}>{a.verify}</button>
                            <button name="status" value="rejected" className={btn2}>{a.reject}</button>
                          </form>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
                {canEdit && (
                  <form action={requestDocumentAction} className="mt-3 flex flex-wrap items-center gap-2">
                    {hidden({ party })}
                    <input name="label" required placeholder={a.docLabel} className={`${input} w-64`} />
                    <input name="note" placeholder={a.reviewNote} className={`${input} w-64`} />
                    <button className={btn2}>{a.addDocument}</button>
                  </form>
                )}
              </section>
            );
          })}
          <p className="text-xs text-navy-800/60">{a.uploadHint}</p>
        </div>
      )}

      {tab === "parties" && (
        <div className="mt-6 max-w-2xl space-y-6">
          <div className="rounded-2xl border border-navy-900/10 bg-white p-5">
            <h2 className="font-semibold">{a.members}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex justify-between"><span>{org?.name}</span><Pill>{a.organisation}</Pill></li>
              {counselOrgs.map((o) => <li key={o.name} className="flex justify-between"><span>{o.name}</span><Pill tone="green">{a.counsel}</Pill></li>)}
              {members.map((m) => <li key={m.email} className="flex justify-between"><span>{m.name ?? m.email}</span><Pill tone="gold">{a.roles[m.role]}</Pill></li>)}
              {invitations.map((i) => <li key={i.id} className="flex justify-between text-navy-800/60"><span>{i.email}</span><span className="text-xs">{a.roles[i.role]} · {a.invitePending}</span></li>)}
            </ul>
          </div>
          {canEdit && (
            <form action={inviteAction} className="flex flex-wrap items-end gap-3 rounded-2xl border border-navy-900/10 bg-white p-5">
              {hidden()}
              <label className="text-sm">{a.inviteEmail}<input name="email" type="email" required className="mt-1 block rounded-xl border border-navy-900/20 px-3 py-2 text-sm" /></label>
              <label className="text-sm">{a.inviteRole}<select name="role" className="mt-1 block rounded-xl border border-navy-900/20 px-3 py-2 text-sm">{(["employee", "employer", "lawyer"] as const).map((r) => <option key={r} value={r}>{a.roles[r]}</option>)}</select></label>
              <button className={btn}>{a.invite}</button>
            </form>
          )}
        </div>
      )}

      {tab === "discussion" && (
        <div className="mt-6 max-w-3xl space-y-4">
          <form action={addCommentAction} className="rounded-2xl border border-navy-900/10 bg-white p-4">
            {hidden()}
            <label htmlFor="body" className="block text-sm font-medium">{a.writeComment}</label>
            <textarea id="body" name="body" required rows={3} className="mt-1 w-full rounded-xl border border-navy-900/20 px-3 py-2 text-sm focus:border-navy-900 focus:outline-none" />
            <button className={`${btn} mt-2`}>{a.post}</button>
          </form>
          <ul className="space-y-3">
            {comments.length === 0 && <li className="text-sm text-navy-800/70">{a.noComments}</li>}
            {comments.map(({ c: cm, email, name }) => (
              <li key={cm.id} className="rounded-2xl border border-navy-900/10 bg-white p-4">
                <div className="flex justify-between gap-3 text-xs text-navy-800/60"><span className="font-medium text-navy-900">{name ?? email}</span><span>{new Date(cm.createdAt).toLocaleString(locale)}</span></div>
                <p className="mt-2 whitespace-pre-wrap text-sm">{cm.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tab === "activity" && (
        <ul className="mt-6 max-w-3xl space-y-2">
          {events.length === 0 && <li className="text-sm text-navy-800/70">{a.noActivity}</li>}
          {events.map(({ e, actorEmail }) => (
            <li key={e.id} className="flex flex-wrap justify-between gap-2 rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm">
              <span><span className="font-medium">{(a.eventTypes as Record<string, string>)[e.type] ?? e.type}</span>{actorEmail && <span className="text-navy-800/60"> · {actorEmail}</span>}</span>
              <span className="text-xs text-navy-800/60">{new Date(e.createdAt).toLocaleString(locale)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
