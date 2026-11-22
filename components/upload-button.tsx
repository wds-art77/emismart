"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { beginUploadAction, completeUploadAction } from "@/app/[locale]/app/actions";

// Direct-to-storage upload: ask the server for a short-lived signed URL, PUT the file there, confirm.
export function UploadButton({ locale, caseId, documentId, label, uploadingLabel, failedLabel }: { locale: string; caseId: string; documentId: string; label: string; uploadingLabel: string; failedLabel: string }) {
  const ref = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<"idle" | "busy" | "error">("idle");
  const router = useRouter();
  const onFile = async (file: File) => {
    setState("busy");
    try {
      const { key, target } = await beginUploadAction(caseId, documentId, file.name, file.type, file.size);
      const res = await fetch(target.url, { method: target.method, headers: target.headers, body: file });
      if (!res.ok) throw new Error(String(res.status));
      await completeUploadAction(locale, caseId, documentId, key, file.name, file.type, file.size);
      setState("idle");
      router.refresh();
    } catch {
      setState("error");
    }
  };
  return (
    <>
      <input ref={ref} type="file" accept="application/pdf,image/jpeg,image/png,image/webp" className="hidden" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} />
      <button type="button" onClick={() => ref.current?.click()} disabled={state === "busy"} className="rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white hover:bg-navy-800 disabled:opacity-50">
        {state === "busy" ? uploadingLabel : label}
      </button>
      {state === "error" && <span className="text-xs text-red-700">{failedLabel}</span>}
    </>
  );
}
