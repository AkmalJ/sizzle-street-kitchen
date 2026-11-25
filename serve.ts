// Tiny static server for local play-testing: node serve.ts, then open
// http://localhost:8080 in desktop Chrome. Serves only the game/ folder.
import { createServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = join(fileURLToPath(new URL(".", import.meta.url)), "game");
const types: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".json": "application/json",
};

createServer((req, res) => {
  const pathOnly = (req.url ?? "/").split("?")[0];
  const rel = pathOnly === "/" ? "index.html" : pathOnly.replace(/^\/+/, "");
  const filePath = join(rootDir, rel);
  if (!filePath.startsWith(rootDir) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    res.writeHead(404); res.end("not found"); return;
  }
  res.writeHead(200, { "content-type": types[extname(filePath)] ?? "application/octet-stream" });
  res.end(readFileSync(filePath));
}).listen(8080, () => console.log("Sizzle Street Kitchen at http://localhost:8080"));
