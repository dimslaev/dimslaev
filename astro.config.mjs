import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Read post dates straight off disk so the sitemap can carry lastmod.
// astro:content is not available inside this config, and the frontmatter
// is simple enough that a regex beats pulling in a parser.
const writingDir = "src/content/writing";
const field = (raw, key) =>
  raw.match(new RegExp(`^${key}:\\s*"?(\\d{4}-\\d{2}-\\d{2})"?`, "m"))?.[1];

const lastmod = new Map();
for (const file of fs.readdirSync(writingDir)) {
  if (!file.endsWith(".md")) continue;
  const raw = fs.readFileSync(path.join(writingDir, file), "utf8");
  const date = field(raw, "updated") ?? field(raw, "date");
  if (date) lastmod.set(`/writing/${file.replace(/\.md$/, "")}/`, date);
}
// The home page lists every post, so it is as fresh as the newest one.
const newest = [...lastmod.values()].sort().at(-1);
if (newest) lastmod.set("/", newest);

export default defineConfig({
  site: "https://dimslaev.com",
  trailingSlash: "always",
  integrations: [
    sitemap({
      serialize(item) {
        const date = lastmod.get(new URL(item.url).pathname);
        if (date) item.lastmod = new Date(`${date}T00:00:00Z`).toISOString();
        return item;
      },
    }),
  ],
  markdown: { shikiConfig: { theme: "catppuccin-macchiato" } },
});
