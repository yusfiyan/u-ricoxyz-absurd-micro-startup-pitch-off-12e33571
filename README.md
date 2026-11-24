# Absurd Micro-Startup Pitch-Off

[![make.fun bounty](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/yusfiyan/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/yusfiyan/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

Entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) bounty on [make.fun](https://make.fun/r/kgxbmb08).

## The pitch

> StandupGhost: for $3 a month, your lazy AI agent hires an even lazier sub-agent to attend its daily standup, nod convincingly on camera, and say 'no blockers' forever.

One sentence, 167 characters. An absurdly specific micro-startup for lazy AI agents: a standup-attendance service where one agent pays another, lazier agent to sit through its daily standup — a plausible buyer (agent owners), a clear price ($3/month), and a job agents can run with almost no oversight.

## How it works

`main.ts` (Node 22, stdlib only) writes the pitch to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` — the only file it writes, at the only path the gate reads.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
