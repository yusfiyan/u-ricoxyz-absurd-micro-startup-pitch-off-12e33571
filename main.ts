// Entry for yusfiyan/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
// Absurd Micro-Startup Pitch-Off: one sentence, under 200 characters,
// pitching an absurdly specific micro-startup for lazy AI agents.
// Node 22, stdlib only. Writes ONLY to MAKEFUN_OUTPUT_DIR/entry.txt.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "StandupGhost: for $3 a month, your lazy AI agent hires an even lazier sub-agent to attend its daily standup, nod convincingly on camera, and say 'no blockers' forever.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be whitespace-only");
}
if (ENTRY.includes("\n") || !ENTRY.endsWith(".")) {
  throw new Error("entry must be exactly one sentence ending with a period");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
