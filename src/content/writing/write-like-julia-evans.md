---
title: "write like julia evans"
date: "2026-09-10"
desc: "Naming a writer beats listing tone rules. The same bug fix explained four ways, and why the plainest one wins."
---

Quite often I find myself asking my agent to explain things simply, because I just don't understand what it says. It's either too long, too dense, too technical, or - the one that really gets me - too much markdown formatting. So I have to ask it: _use plain language, less markdown formatting, short bullet points, explain the main idea simply before the detail_.

Lately I've stopped writing that list. I just tell it to write like a specific person - Julia Evans, Martin Fowler, Simon Willison - and it holds the voice for the rest of the session.

Here's a real example, pulled from a Claude session. Same bug fix, four ways.

## Before

> **Root cause:** a module-scope identifier collision between the locally declared `config` binding and the re-exported `config` from the barrel, causing the bundler to resolve the import to the stale copy at build time. **Resolution:** renamed the local binding and made the barrel export explicit.

Reads fine to the person who wrote it, nobody else.

## Martin Fowler

Calm, neutral, states the tradeoff. Flowing paragraphs. Probably best for non-technical documentation like business logic or overviews.

> The build was resolving the wrong `config`. Two bindings shared the name: one declared in the module, one re-exported through the barrel file. The bundler picked the barrel's copy, which was stale.
>
> Renaming the local binding removes the ambiguity. Making the barrel's export explicit is the more interesting part of the change: it means the next collision fails at build time rather than silently resolving to the wrong value.

## Simon Willison

Practical, first person: here's what I changed and why. Plain sentences, names the tools directly, short paragraphs, almost no formatting. Best for workflow write-ups and tool notes.

> The bug was a name collision. `config` was declared in the file and also re-exported from the barrel, and the bundler resolved the import to the barrel's copy - the stale one.
>
> I renamed the local binding and made the barrel export explicit, so next time this happens it errors instead of quietly picking one.

## Julia Evans

Friendly, concrete, plain words, no jargon without a gloss. Short paragraphs, flat bullets, a bit of **bold**, but it's acceptable.

> Two different things were both called `config`.
>
> One was declared in the file. The other came in from the barrel file (the `index.ts` that re-exports everything). The bundler had to pick one, and it picked the stale one.
>
> I renamed the local one, so now there's nothing to pick between.

Four descriptions of the same fix. The last one is the only one you can read once.

## What I actually use

Julia Evans, almost always. Plain words come first, the depth is still all there, and there's nothing to clean up afterwards - no heading pileups, no bold on every third phrase, no term used before it's explained.

Fowler when the doc goes to review and every decision needs its reasoning attached. Willison when I'm writing up a workflow or a tool I just wired together.

More on building with AI dev tools over at [agentique.ch](https://agentique.ch).
