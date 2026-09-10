---
title: "name a writer instead of nagging the agent about tone"
date: "2026-09-10"
desc: "Instead of retyping 'plain language, fewer bullets, stop overformatting' every session, I tell the agent to write like Simon Willison, Martin Fowler, or Julia Evans."
---

Quite often I find myself asking my agent to explain things simply, because I just don't understand what it says. It's either too long, too dense, too technical, or — the one that really gets me — too much markdown formatting. So I have to ask it: _use plain language, less markdown formatting, short bullet points, explain the main idea simply before the detail_.

Lately I've stopped writing that list. I just tell it to write like a specific person — Julia Evans, Martin Fowler, Simon Willison — and it holds the voice for the rest of the session.

Here's a real example, pulled from a Claude session:

## Before

> Restructured to lead with constraints instead of findings: what the sandbox can and can't reach (stated as settled, with "do not re-litigate" so it doesn't burn turns rediscovering the 403s), then five tasks in dependency order — topic gate, Lab Watch, zero-yield report, new source modules, dry-run — each with files, acceptance criteria, and what "done" means. One correction folded in: the old doc said feed probing wasn't delegable; probe-feeds.yml changes that, so the brief documents the dispatch relay as the agent's one way to see a live feed. Rules section is explicit: no prod writes (generate SQL, hand it over), branch off master and rebase since the ruleset forbids merge commits, regenerate \*.gen.ts and baml_client/ when sources change.

Reads fine to the person who wrote it, nobody else.

## Martin Fowler

Calm, neutral, states the tradeoff, still a bit lengthy. Flowing paragraphs. Probably best for non-technical documentation like business logic or overviews.

> The brief now opens with constraints rather than findings. It states what the sandbox can and cannot reach as settled fact, including the 403 responses, and instructs the agent not to re-investigate them. The verification loop follows, then five tasks in dependency order — topic gate, Lab Watch, zero-yield report, new source modules, dry-run — each carrying its files, its acceptance criteria, and a definition of done.
>
> One earlier claim needed correcting. The previous brief said feed probing could not be delegated. `probe-feeds.yml` removes that limitation, so the brief now describes the dispatch relay as the agent's means of observing a live feed.
>
> The rules section is deliberately explicit about failure modes that carry real cost: no writes to production, generating the SQL for handover instead; branching from master and rebasing, since the ruleset forbids merge commits; regenerating `*.gen.ts` and `baml_client/` when sources change.

## Simon Willison

Practical, first person: here's what I changed and why. Plain sentences, names the tools directly, short paragraphs, almost no formatting. Assumes you'll follow a link for background rather than glossing every term inline. Best for workflow write-ups and tool notes.

> I restructured the brief so it opens with the constraints, not the findings.
>
> The old version led with what I'd turned up, including a batch of 403s from the sandbox. The agent reads those as open questions and re-checks them, which wastes turns. Now the brief states what the sandbox can and can't reach up front, marks it settled, and says don't re-investigate. Then the verification loop, then five tasks in dependency order: topic gate, Lab Watch, zero-yield report, new source modules, dry-run. Each one lists its files, its acceptance criteria, and what "done" means.
>
> One claim in the old brief was wrong: it said feed probing couldn't be delegated. That changed when `probe-feeds.yml` landed. The brief now documents the dispatch relay as the agent's one way to see a live feed, with the command to run and what each verdict means.
>
> The rules section covers the expensive mistakes: no writes to production (generate the SQL and hand it over), branch off master and rebase because the ruleset rejects merge commits, and regenerate `*.gen.ts` and `baml_client/` whenever the sources change.

## Julia Evans

Friendly, concrete, plain words, no jargon without a gloss. Short paragraphs, flat bullets, a bit of **bold**, but it's acceptable.

> I reorganised the brief. Here's what changed.
>
> **It leads with the limits now, not the findings.** Some things the sandbox can't reach — you get a 403. That's known, so the brief says "don't check this again," otherwise the agent burns turns rediscovering it. Then five tasks in the order they have to happen: topic gate, Lab Watch, zero-yield report, new source modules, dry-run. Each one lists its files, how you know it's right, and what "done" means.
>
> **One thing in the old brief was wrong.** It said the agent couldn't test feeds itself. It can now — `probe-feeds.yml` lets it trigger a feed check and read the result back.
>
> **The rules section covers what would actually cause damage:**
>
> - Don't write to prod. Generate the SQL, hand it over.
> - Branch off master and rebase — the repo rejects merge commits.
> - Regenerate `*.gen.ts` and `baml_client/` when sources change.

## What I actually use

Julia Evans, almost always. Plain words come first, the depth is still all there, and there's nothing to clean up afterwards — no heading pileups, no bold on every third phrase, no term used before it's explained.

Fowler when the doc goes to review and every decision needs its reasoning attached. Willison when I'm writing up a workflow or a tool I just wired together. Everything else: write like Julia Evans.
