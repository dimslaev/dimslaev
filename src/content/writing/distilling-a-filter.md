---
title: "distilling a filter so the model runs less"
date: "2026-07-29"
desc: "Moving the keep/drop first pass into a distilled static classifier cut cost and latency on every ingestion run."
---

per-item llm calls stop making sense the moment ingestion volume is real. every run was paying for a model to look at things that were obviously junk.

so i distilled the keep/drop decision. the llm had already produced thousands of labelled examples just by doing its job; a small static classifier trained on those agrees with it closely enough to be the high-recall first pass.

the expensive model now only sees what survives the cheap filter. same quality bar, a fraction of the calls. the agreement rate between the two is also a number i can watch — free evaluation signal.
