// readguilt — Invent a Word We Need (make.fun)
// Writes the entry text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt
// outside a container). Deterministic: no network, no randomness, and the
// same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "readguilt (n.) The guilt of leaving a message on read for days while you draft the perfect reply.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
