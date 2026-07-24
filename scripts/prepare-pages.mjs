import { cp, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");
const basePath = "/celebration-life-indore";
const assetExtensions = new Set([
  ".avif",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".json",
  ".mp4",
  ".pdf",
  ".png",
  ".svg",
  ".webm",
  ".webmanifest",
  ".webp",
  ".woff",
  ".woff2"
]);
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".txt",
  ".webmanifest",
  ".xml"
]);

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      return entry.isDirectory() ? walk(fullPath) : [fullPath];
    })
  );
  return nested.flat();
}

const files = await walk(outDir);
const assetPaths = files
  .map((file) => path.relative(outDir, file).split(path.sep).join("/"))
  .filter((relativePath) => {
    if (relativePath.startsWith("_next/")) return false;
    return assetExtensions.has(path.extname(relativePath).toLowerCase());
  })
  .map((relativePath) => `/${relativePath}`)
  .sort((a, b) => b.length - a.length);

for (const file of files) {
  const extension = path.extname(file).toLowerCase();
  if (!textExtensions.has(extension)) continue;

  let content = await readFile(file, "utf8");
  for (const assetPath of assetPaths) {
    content = content.split(assetPath).join(`${basePath}${assetPath}`);
  }

  while (content.includes(`${basePath}${basePath}`)) {
    content = content.split(`${basePath}${basePath}`).join(basePath);
  }

  await writeFile(file, content);
}

// Fail the build rather than publishing a site with broken root-level assets.
const unresolved = [];
for (const file of files) {
  const extension = path.extname(file).toLowerCase();
  if (!textExtensions.has(extension)) continue;
  const content = await readFile(file, "utf8");
  for (const assetPath of assetPaths) {
    if (content.includes(assetPath) && !content.includes(`${basePath}${assetPath}`)) {
      unresolved.push(`${path.relative(outDir, file)} -> ${assetPath}`);
    }
  }
}

if (unresolved.length) {
  throw new Error(`Unresolved GitHub Pages asset paths:\n${unresolved.slice(0, 30).join("\n")}`);
}

await writeFile(path.join(outDir, ".nojekyll"), "");
await cp(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
