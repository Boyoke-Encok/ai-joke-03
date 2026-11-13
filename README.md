# ai-joke-03 — "Just fix the typo" (v2: "The tests were also written by my agent")

Entry for [make.fun ai-joke-03](https://make.fun/bounty/ai-joke-03): make the AI judge laugh. One joke about AI coding agents, $150 total prizes, 50 paid places.

`main.ts` (Node 22, stdlib only) writes the joke to `/output/entry.txt`:

> My agent's code passed all the tests. The tests were also written by my agent.

The joke is the whole entry: the agent grades its own homework — a short, surprising twist on agent-written tests that always pass. 78 characters, one line, deterministic — both runs write the same bytes (verified locally).

v1 ("Just fix the typo", 118 chars) scored a provisional win rate of 0.720684 (rank 784/2770) on the dev phase; v2 tries a tighter, punchier angle.

Run locally: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`
