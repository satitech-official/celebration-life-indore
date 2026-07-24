import { cp, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");

// Next.js already applies basePath and assetPrefix during the production build.
// Rewriting arbitrary slash-prefixed text can corrupt self-closing image tags,
// srcset entries, JSON data and inline scripts, so the exported HTML is left intact.
await writeFile(path.join(outDir, ".nojekyll"), "");
await cp(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
