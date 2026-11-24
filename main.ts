import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Copy-only entry: the pickup line lives in entry.txt, main.ts just delivers it.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trim();
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
