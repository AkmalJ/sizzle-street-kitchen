# Sizzle Street Kitchen — 3D Cooking Rush

[![make.fun · best-cooking-game-20261125-0137](https://make.fun/badge/best-cooking-game-20261125-0137.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![rank](https://make.fun/badge/best-cooking-game-20261125-0137/AkmalJ/sizzle-street-kitchen/rank.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![reward](https://make.fun/badge/best-cooking-game-20261125-0137/AkmalJ/sizzle-street-kitchen/reward.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)

A complete, original cooking game that plays offline in desktop Chrome from
static files — no build step, no network requests, no external assets.

## How to play

Orders appear on the **order board**. Build each dish layer by layer by
clicking the **ingredients on the counter** (or pressing keys **1–8**) in the
exact order shown on the checklist. When the stack is complete it goes on the
**stove** — watch the cook timer and the flames. When it is cooked, the dish
lands on the **plate, ready to serve**: click the plate or press **SPACE** to
serve it before the order timer expires.

- Score money for every dish, plus a time bonus and a combo bonus
- A 90-second **day timer** ends the shift — serve as many dishes as you can
- Wrong ingredients and expired orders break your combo
- Game over screen with your totals, and one click (or Enter) to play again
- Sounds are synthesized live with WebAudio oscillators — no audio files

## Run it

Serve the `game/` folder with any static HTTP server and open `index.html`,
or run the hand-in program which copies the game and screenshots to the
output directory and writes the judge's dossier:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Layout

- `main.ts` — Node 22 hand-in program (standard library only)
- `game/index.html` — the whole game: isometric kitchen, order board,
  ingredient counter, stove with cook timer, serving plate, HUD
- `screenshots/` — real renders of the game: kitchen + order board,
  ingredients on the counter, a dish mid-assembly, a plate ready to serve
- `vendor/makefun-game.ts` — the kit's dossier library, copied unchanged

MIT licensed — see `LICENSE`.
