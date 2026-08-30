import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://dimslaev.com",
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: "catppuccin-macchiato" } },
});
