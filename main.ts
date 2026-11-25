// Sizzle Street Kitchen — hand-in program (Node 22, standard library only).
// Copies the static game in game/ and the maker's screenshots in screenshots/
// into the output directory, then writes dossier.json there using the vendored
// make.fun game library. The output directory itself is never deleted: in the
// grader it can be a mount point, so we only create it and write inside it.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Play it: serve the game/ folder with any static file server and open index.html.

import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-game.ts";

const rootHere = fileURLToPath(new URL(".", import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
cpSync(join(rootHere, "game"), join(outputDir, "game"), { recursive: true });

const shotsTarget = join(outputDir, "screenshots");
mkdirSync(shotsTarget, { recursive: true });
const shotsSource = join(rootHere, "screenshots");
if (existsSync(shotsSource)) {
  cpSync(shotsSource, shotsTarget, { recursive: true });
}

const dossierText = buildDossier(outputDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  game_max_files: 993,
  game_max_bytes: 50331648,
  game_path_max_bytes: 1000,
});
writeFileSync(join(outputDir, "dossier.json"), dossierText);
console.log("Sizzle Street Kitchen handed in to", outputDir);
