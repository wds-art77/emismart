import "server-only";
import { randomBytes } from "node:crypto";
import * as schema from "./schema";

// Database access. Production: DATABASE_URL (managed Postgres in the EU, e.g. Supabase or Neon in Frankfurt).
// Development and tests: embedded Postgres (PGlite) persisted under .data/, no server to run.
// Migrations in lib/db/migrations are applied automatically on first use.

export type Db = import("drizzle-orm/node-postgres").NodePgDatabase<typeof schema> | import("drizzle-orm/pglite").PgliteDatabase<typeof schema>;

// One instance per process, shared across route bundles (each Next.js route bundle has its own module scope).
const g = globalThis as unknown as { __emismartDb?: Promise<Db> };

export function isDatabaseConfigured(): boolean {
  return !!process.env.DATABASE_URL || process.env.NODE_ENV !== "production" || process.env.EMISMART_EMBEDDED_DB === "1";
}

async function create(): Promise<Db> {
  const migrationsFolder = `${process.cwd()}/lib/db/migrations`;
  if (process.env.DATABASE_URL) {
    const { drizzle } = await import("drizzle-orm/node-postgres");
    const { migrate } = await import("drizzle-orm/node-postgres/migrator");
    const { Pool } = await import("pg");
    const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 5 });
    const db = drizzle(pool, { schema });
    await migrate(db, { migrationsFolder });
    return db;
  }
  const { PGlite } = await import("@electric-sql/pglite");
  const { drizzle } = await import("drizzle-orm/pglite");
  const { migrate } = await import("drizzle-orm/pglite/migrator");
  const dataDir = process.env.PGLITE_DATA_DIR ?? `${process.cwd()}/.data/pglite`;
  const client = new PGlite(dataDir);
  const db = drizzle(client, { schema });
  await migrate(db, { migrationsFolder });
  return db;
}

export function getDb(): Promise<Db> {
  if (!g.__emismartDb) g.__emismartDb = create();
  return g.__emismartDb;
}

export { schema };

export function newId(prefix = ""): string {
  return prefix + randomBytes(12).toString("base64url");
}
