"use client";

import { useActionState } from "react";
import { sendLoginLink, type LoginState } from "../app/actions";

export function LoginForm({ locale, next, labels }: { locale: string; next?: string; labels: { email: string; send: string; sent: string; dev: string } }) {
  const [state, action, pending] = useActionState<LoginState, FormData>(sendLoginLink, {});
  if (state.sent) {
    return (
      <div className="rounded-2xl border border-navy-900/10 bg-sand-50 p-6 text-sm">
        <p className="font-medium">{labels.sent}</p>
        {state.devLink && (
          <p className="mt-3 rounded-lg border border-gold-500/40 bg-gold-100/50 p-3 break-all">
            {labels.dev}{" "}
            <a href={state.devLink} className="font-semibold underline" data-testid="dev-link">{state.devLink}</a>
          </p>
        )}
      </div>
    );
  }
  return (
    <form action={action} className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm">
      <input type="hidden" name="locale" value={locale} />
      {next && <input type="hidden" name="next" value={next} />}
      <label htmlFor="email" className="block text-sm font-medium">{labels.email}</label>
      <input id="email" name="email" type="email" required autoComplete="email" className="mt-1 w-full rounded-xl border border-navy-900/20 px-4 py-3 text-sm focus:border-navy-900 focus:outline-none" />
      {state.error && <p className="mt-2 text-sm text-red-700">{state.error}</p>}
      <button disabled={pending} className="mt-4 w-full rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-800 disabled:opacity-50">{labels.send}</button>
    </form>
  );
}
