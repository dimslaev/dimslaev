import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const notes = (await getCollection("writing")).sort((a, b) =>
    a.data.date < b.data.date ? 1 : -1,
  );

  return rss({
    title: "dimslaev - writing",
    description:
      "Notes on LLM-powered applications, TypeScript, Node.js and Python.",
    site: context.site,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.desc,
      pubDate: new Date(`${note.data.date}T00:00:00Z`),
      link: `/writing/${note.id}/`,
    })),
    customData: "<language>en</language>",
  });
}
