// readguilt — Invent a Word We Need (make.fun)
// Pronounced RED-gilt: "read" as in a read receipt + "guilt".
// Writes the entry text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt
// outside a container). The entry string is exactly 97 characters with no
// trailing newline (the gate checks 1–140 characters of UTF-8 text).
// Deterministic: no network, no randomness, and the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "readguilt (n.) The guilt of leaving a message on read for days while you draft the perfect reply.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
