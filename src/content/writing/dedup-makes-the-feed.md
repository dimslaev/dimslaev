---
title: "dedup is most of what makes a feed readable"
date: "2026-07-15"
desc: "Near-duplicate detection over pgvector collapses the same story arriving from four sources within an hour."
---

the same story lands from hacker news, two rss feeds and a substack inside an hour, each with a slightly different title. left alone the feed reads like a stutter.

near-duplicate detection over pgvector embeddings collapses them into one. the ranking gets the credit for the feed feeling curated; the dedup pass does a lot of the actual work.
