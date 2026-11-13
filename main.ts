// ai-joke-03 entry (Node 22, standard library only): writes one joke about AI
// coding agents to /output/entry.txt. The gate takes UTF-8 text of 1 to 280
// characters that is not only white space (this joke: 78), and the judge
// reads exactly the bytes written, so no trailing line end.
// v2 (2026-11-13): revised after v1's provisional win rate 0.720684 (rank 784/2770).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "My agent's code passed all the tests. The tests were also written by my agent.",
);
