import { cp, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");
const basePath = "/celebration-life-indore";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(async (entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  }))).flat();
}

for (const file of await walk(outDir)) {
  if (!file.endsWith(".html") && !file.endsWith(".xml") && !file.endsWith(".txt") && !file.endsWith(".webmanifest")) continue;
  let content = await readFile(file, "utf8");
  content = content
    .replace(/(["'(=])\/(?!\/|celebration-life-indore\/|_next\/)/g, `$1${basePath}/`)
    .replace(new RegExp(`${basePath}${basePath}`, "g"), basePath);
  await writeFile(file, content);
}

await writeFile(path.join(outDir, ".nojekyll"), "");
await cp(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
