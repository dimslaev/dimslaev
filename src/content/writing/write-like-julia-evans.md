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

## [Martin Fowler](https://martinfowler.com)

Calm, neutral, weighs tradeoffs rather than picking a side. Longer sentences. Best for documentation where every decision needs its reasoning.

> The build was resolving the wrong `config`. Two bindings shared the name: one declared in the module, one re-exported through the barrel file. The bundler picked the barrel's copy, which was stale.
>
> Renaming the local binding removes the ambiguity. Making the barrel's export explicit is the more interesting part of the change: it means the next collision fails at build time rather than silently resolving to the wrong value.

## [Simon Willison](https://simonwillison.net)

First person and hands-on - "I tried this, here's what happened." Plain sentences, tools and commands named directly. Best for workflow write-ups and quick notes on what worked.

> The bug was a name collision. `config` was declared in the file and also re-exported from the barrel, and the bundler resolved the import to the barrel's copy - the stale one.
>
> I renamed the local binding and made the barrel export explicit, so next time this happens it errors instead of quietly picking one.

## [Julia Evans](https://jvns.ca)

Friendly, concrete, plain words, no jargon without a gloss. Short sentences, generous bullets, and bold for the one thing that matters. Reads like someone explaining it to a friend, not writing a spec.

> Two different things were both called `config`.
>
> One was declared in the file. The other came in from the barrel file (the `index.ts` that re-exports everything). The bundler had to pick one, and it picked the stale one.
>
> I renamed the local one, so now there's nothing to pick between.

Four descriptions of the same fix. The last one is the only one you can read once.

## What I actually use

Julia Evans, most of the time. Plain words come first, the depth is still all there, and there's nothing to clean up afterwards.

More on building with AI dev tools over at [agentique.ch](https://agentique.ch).
