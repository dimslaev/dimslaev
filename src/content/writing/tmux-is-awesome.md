---
title: "tmux is awesome"
date: "2026-08-30"
desc: "A tmux hub command that rebuilds a window-per-project layout — claude code, opencode, dev server and git in always-open panes, one prefix+n away."
---

i recently started using `tmux` — a terminal multiplexer that splits a single terminal into multiple sessions, each with its own windows, and each window splittable into panes. it's awesome. one tip before diving in: if you're on mac, run it inside iterm2 rather than the default terminal app.

for me, still fairly new to it, the win is opening a window per project with a single command — `hub`. it kills any existing `projects` session and rebuilds tmux from scratch, each window already `cd`'d into the right directory:

```bash
hub() {
  local s="projects"
  tmux has-session -t "$s" 2>/dev/null && tmux kill-session -t "$s"

  tmux set-option -g allow-rename off
  tmux set-option -g automatic-rename off
  tmux new-session -d -s "$s" -n "web-app" -c "$HOME/workspace/web-app"
  tmux new-window -t "$s" -n "design-system" -c "$HOME/workspace/design-system"
  tmux new-window -t "$s" -n "api" -c "$HOME/workspace/api"
  tmux new-window -t "$s" -n "chat" -c "$HOME/workspace/chat"
  tmux select-window -t "$s:0"

  tmux attach -t "$s"
}
```

from there i switch between projects with `prefix + n`, and split each project's window into panes that stay open all day — claude code, opencode, the dev server, a shell for git.

```text
[projects]  0:web-app*  1:design-system  2:api  3:chat

┌── claude ────────────┬── opencode ──────────┐
│ refactoring the auth │ ~ planning the v2    │
│ middleware…          │   ingestion pass     │
├── dev server ────────┼── git ───────────────┤
│ ▲ ready on :3000     │ $ git status         │
│ ✓ compiled in 240ms  │ ✔ nothing to commit  │
└──────────────────────┴──────────────────────┘
```

right now i'm also learning neovim, the goal being that i never have to leave the terminal at all. i still keep vs code open next to it for actual editing while the nvim muscle memory catches up. but even before that's done — even with no real ide in the picture — this setup is a straight 100% productivity gain over what i had before. and it's just so beautiful to look at.

if you want to get into tmux and neovim, [typecraft.dev](https://typecraft.dev) has a free course that's genuinely excellent. 👍
