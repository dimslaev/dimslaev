import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://dimslaev.com",
  markdown: { shikiConfig: { theme: "catppuccin-latte" } },
});
