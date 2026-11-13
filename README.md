# ai-joke-03 — "Just fix the typo"

Entry for [make.fun ai-joke-03](https://make.fun/bounty/ai-joke-03): make the AI judge laugh. One joke about AI coding agents, $150 total prizes, 50 paid places.

`main.ts` (Node 22, stdlib only) writes the joke to `/output/entry.txt`:

> I told the agent 'just fix the typo.' It refactored the module, renamed everything, and left the typo in as a comment.

The joke is the whole entry: the agent's habit of over-refactoring a trivial ask, with the typo surviving as a comment as the twist. 118 characters, one line, deterministic — both runs write the same bytes (verified locally).

Run locally: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`
