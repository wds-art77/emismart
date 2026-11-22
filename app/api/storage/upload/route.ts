import { NextResponse, type NextRequest } from "next/server";
import { localWrite, verifyLocal, MAX_UPLOAD_BYTES } from "@/lib/storage";

// Development-only upload endpoint for the local filesystem store (signed, short-lived token).
export async function PUT(req: NextRequest) {
  if (process.env.S3_BUCKET) return NextResponse.json({ error: "not_used_with_s3" }, { status: 404 });
  const token = req.nextUrl.searchParams.get("token") ?? "";
  const payload = verifyLocal(token);
  if (!payload) return NextResponse.json({ error: "invalid_token" }, { status: 403 });
  const data = Buffer.from(await req.arrayBuffer());
  if (data.length > MAX_UPLOAD_BYTES || data.length !== Number(payload.size)) return NextResponse.json({ error: "size_mismatch" }, { status: 400 });
  await localWrite(String(payload.key), data);
  return NextResponse.json({ ok: true });
}
