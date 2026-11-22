import "server-only";

// Transactional mail. Production: Resend (EU data centre) with RESEND_API_KEY and MAIL_FROM.
// Without a key, mail is not sent: the function returns the text so that development UIs can show it.

export type Mail = { to: string; subject: string; text: string; html?: string };
export type MailResult = { delivered: boolean; preview?: string; error?: string };

export async function sendMail(mail: Mail): Promise<MailResult> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM ?? "Emismart <noreply@emismart.com>";
  if (!key) {
    console.info(`[mail:dev] to=${mail.to} subject=${mail.subject}\n${mail.text}`);
    return { delivered: false, preview: mail.text };
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [mail.to], subject: mail.subject, text: mail.text, html: mail.html ?? `<pre style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(mail.text)}</pre>` }),
    });
    if (!res.ok) return { delivered: false, error: `${res.status} ${await res.text()}` };
    return { delivered: true };
  } catch (e) {
    return { delivered: false, error: String(e) };
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] ?? c);
}
