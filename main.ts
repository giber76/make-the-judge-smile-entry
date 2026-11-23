// Make the Judge Smile — entry for u-gentle-badger-68-make-the-judge-smile-9228676d.
//
// Writes one short text to /output/entry.txt. The text is fixed: it was
// drafted against the published judge brief (on subject first, then warmth,
// then surprise, then one concrete detail, then fresh wording) and the
// strongest draft won a pairwise comparison of five candidates.
// No network, no randomness, no dependencies. Plain JavaScript syntax so
// it runs under plain Node 22 as well as a TypeScript loader.

const fs = require("node:fs");
const path = require("node:path");

const TEXT =
  "A toddler on the morning train offered me half her biscuit, solemn as a diplomat signing a treaty.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, TEXT, "utf8");
