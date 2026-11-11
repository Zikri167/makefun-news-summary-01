// news-summary-01 entry (Node 22, standard library only).
// The summary is the summary.txt beside this file, written by hand from
// reporting published on 11 November 2026; this program copies it to
// /output/entry.txt. It makes no network calls and writes the same bytes
// on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./summary.txt', import.meta.url), join(outDir, 'entry.txt'));
