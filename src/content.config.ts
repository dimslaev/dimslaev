import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  writing: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "src/content/writing" }),
    schema: z.object({
      title: z.string(),
      date: z.string(),
      desc: z.string(),
    }),
  }),
};
