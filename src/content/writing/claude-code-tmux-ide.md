---
title: "claude code + tmux is my whole ide now"
date: "2026-07-22"
desc: "neovim, tmux and Claude Code on Max, plus an agent loop that reads the pipeline's own logs and opens PRs."
---

current setup: neovim, tmux, claude code on max. no separate editor window, no browser tab full of chat.

on top of that there's a loop that works against the running pipeline — it reads the pipeline's own observability output, spots something worth changing, and opens a pr against the repo. i mostly review. it proposes, i approve.
