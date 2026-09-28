---
name: run-app
description: Launch and drive the Portfolio Vite dev server for manual checks, screenshots, or Playwright MCP exploration. Use when asked to run, start, preview, or click around the Portfolio app.
---

# Running the Portfolio app

This is a Vite + React app. There is no test suite or build step needed
to see it running — `npm run dev` starts a dev server with HMR.

## Launch

```bash
cd "/Users/liamandersson/Desktop/Personal Projects/Portfolio"

# Free the port first in case a previous dev server is still bound to it
lsof -ti:5173 -sTCP:LISTEN | xargs -r kill

npm run dev > /tmp/portfolio-dev.log 2>&1 &
disown
```

Poll the port instead of sleeping a fixed amount — Vite's ready message
prints in well under a second, but don't rely on that:

```bash
for i in $(seq 1 30); do
  curl -sf http://localhost:5173 >/dev/null && echo "SERVER UP" && break
  sleep 1
done
cat /tmp/portfolio-dev.log   # check for errors if it never came up
```

The app is now served at **http://localhost:5173**.

## Drive it

Use the Playwright MCP tools (`browser_navigate`, `browser_snapshot`,
`browser_click`, `browser_take_screenshot`, etc.) directly — don't write
a custom Playwright/Node driver script for this. Navigate to
`http://localhost:5173`, take a snapshot to see the accessibility tree,
then interact with elements by their snapshot ref.

The page has three main sections, top to bottom: **Home**, **Projects**
([src/sections/app/Projects.tsx](../../../src/sections/app/Projects.tsx)),
and **Skills**. There's also a `Header` with a theme toggle
(light/dark) and a `Footer`.

## Stop

```bash
lsof -ti:5173 -sTCP:LISTEN | xargs -r kill
```

Kill by port, not by `pkill -f vite` or similar broad patterns — those
can match unrelated processes.

## Gotchas

- **Playwright MCP defaults to the `chrome` channel**, which looks for
  a full Google Chrome install. If this machine only has Playwright's
  bundled Chromium (no system Chrome), `browser_navigate` fails with
  `Chromium distribution 'chrome' is not found`. Fix by reconfiguring
  the MCP server with `--browser chromium`:
  ```bash
  claude mcp remove playwright -s user
  claude mcp add --scope user playwright -- npx -y @playwright/mcp@latest --browser chromium
  ```
  Restart Claude Code (or VS Code, if using the extension) afterward —
  MCP server args are only picked up at session start.
- **React controlled inputs / theme toggle**: interact via the MCP
  `browser_click` tool, not raw DOM `eval`, so React's event handlers
  actually fire.
