import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// A malformed date ships silently into the JSON-LD and invalidates the
// rich result, so it is worth failing the build over.
const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Expected a YYYY-MM-DD date");

export const collections = {
  writing: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "src/content/writing" }),
    schema: z.object({
      title: z.string(),
      date: isoDate,
      updated: isoDate.optional(),
      // Search engines truncate descriptions around 160 characters.
      desc: z.string().min(50).max(160),
    }),
  }),
};
