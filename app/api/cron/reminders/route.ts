import { NextResponse, type NextRequest } from "next/server";
import { isDatabaseConfigured } from "@/lib/db";
import { runDeadlineReminders } from "@/lib/workflows";

// Daily deadline reminders. Vercel Cron calls this with the CRON_SECRET bearer token (see vercel.json).
export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  if (!isDatabaseConfigured()) return NextResponse.json({ skipped: "database_not_configured" });
  const sent = await runDeadlineReminders();
  return NextResponse.json({ sent });
}
