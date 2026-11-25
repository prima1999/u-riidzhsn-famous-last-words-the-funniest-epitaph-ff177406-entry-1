import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EPITAPH_LINES: string[] = [
  "After 31 years in accounting, I asked for my ashes",
  "to be mixed into the office coffee machine, so for once",
  "everyone here will wake up because of me.",
];

const EPITAPH: string = EPITAPH_LINES.join(" ");

const OUTPUT_DIR: string = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE: string = join(OUTPUT_DIR, "entry.txt");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, EPITAPH, "utf8");
