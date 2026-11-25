// Entry for u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.
// Writes the one-line excuse to /output/entry.txt (Node 22, stdlib only).
// The program's only job: output the entry text, deterministically.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  "Sorry, dentist gave me a filling this morning and half my face is still numb, can't do calls today.";

function formatEntry(): string {
  return ENTRY;
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), formatEntry() + '\n', 'utf8');
