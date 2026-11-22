import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

// Document storage behind one interface.
// Production: any S3-compatible bucket in the EU (Supabase Storage S3 endpoint, Cloudflare R2 EU, AWS eu-central-1),
// with server-side encryption on the bucket. Browsers upload and download directly through short-lived signed URLs,
// so files never pass through the application server and are never public.
// Development: local filesystem under .data/uploads, with signed internal URLs served by route handlers.

export type UploadTarget = { url: string; method: "PUT"; headers: Record<string, string>; expiresAt: string };

export interface Storage {
  kind: "s3" | "local";
  createUploadUrl(key: string, mime: string, size: number): Promise<UploadTarget>;
  createDownloadUrl(key: string, filename: string): Promise<string>;
  delete(key: string): Promise<void>;
}

export const MAX_UPLOAD_BYTES = 25 * 1024 * 1024;
export const ALLOWED_MIME = new Set(["application/pdf", "image/jpeg", "image/png", "image/webp", "image/heic"]);

const secret = () => process.env.AUTH_SECRET ?? "development-secret-change-me";
export function signLocal(payload: Record<string, string | number>): string {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = createHmac("sha256", secret()).update(body).digest("base64url");
  return `${body}.${sig}`;
}
export function verifyLocal(token: string): Record<string, string | number> | null {
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const expected = createHmac("sha256", secret()).update(body).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  const payload = JSON.parse(Buffer.from(body, "base64url").toString()) as Record<string, string | number>;
  if (typeof payload.exp !== "number" || payload.exp < Date.now()) return null;
  return payload;
}

export const localRoot = () => process.env.UPLOAD_DIR ?? path.join(process.cwd(), ".data", "uploads");
const safeKey = (key: string) => key.replace(/[^a-zA-Z0-9/_.-]/g, "_").replace(/\.\.+/g, ".");

const local: Storage = {
  kind: "local",
  async createUploadUrl(key, mime, size) {
    const exp = Date.now() + 10 * 60_000;
    const token = signLocal({ key: safeKey(key), mime, size, exp });
    return { url: `/api/storage/upload?token=${encodeURIComponent(token)}`, method: "PUT", headers: { "Content-Type": mime }, expiresAt: new Date(exp).toISOString() };
  },
  async createDownloadUrl(key, filename) {
    const exp = Date.now() + 2 * 60_000;
    return `/api/storage/download?token=${encodeURIComponent(signLocal({ key: safeKey(key), filename, exp }))}`;
  },
  async delete(key) {
    await rm(path.join(localRoot(), safeKey(key)), { force: true });
  },
};

export async function localWrite(key: string, data: Buffer) {
  const file = path.join(localRoot(), safeKey(key));
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, data);
}
export async function localRead(key: string): Promise<Buffer> {
  return readFile(path.join(localRoot(), safeKey(key)));
}

async function s3(): Promise<Storage> {
  const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = await import("@aws-sdk/client-s3");
  const { getSignedUrl } = await import("@aws-sdk/s3-request-presigner");
  const bucket = process.env.S3_BUCKET!;
  const client = new S3Client({
    region: process.env.S3_REGION ?? "eu-central-1",
    endpoint: process.env.S3_ENDPOINT,
    forcePathStyle: !!process.env.S3_ENDPOINT,
    credentials: { accessKeyId: process.env.S3_ACCESS_KEY_ID!, secretAccessKey: process.env.S3_SECRET_ACCESS_KEY! },
  });
  return {
    kind: "s3",
    async createUploadUrl(key, mime, size) {
      const url = await getSignedUrl(client, new PutObjectCommand({ Bucket: bucket, Key: key, ContentType: mime, ContentLength: size }), { expiresIn: 600 });
      return { url, method: "PUT", headers: { "Content-Type": mime }, expiresAt: new Date(Date.now() + 600_000).toISOString() };
    },
    async createDownloadUrl(key, filename) {
      return getSignedUrl(client, new GetObjectCommand({ Bucket: bucket, Key: key, ResponseContentDisposition: `attachment; filename="${filename.replace(/"/g, "")}"` }), { expiresIn: 120 });
    },
    async delete(key) {
      await client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
    },
  };
}

const g = globalThis as unknown as { __emismartStorage?: Promise<Storage> };
export function getStorage(): Promise<Storage> {
  if (!g.__emismartStorage) g.__emismartStorage = process.env.S3_BUCKET ? s3() : Promise.resolve(local);
  return g.__emismartStorage;
}
