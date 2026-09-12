# TypeTasks

A small, **type-safe task tracker** built with **HTML, CSS, and TypeScript** — no frameworks.

**Live:** https://kalviumcommunity.github.io/TypeTasks/

Add tasks, advance them through `todo → in-progress → done`, filter by status, and delete — all driven by a strict TypeScript data model, so an invalid task can't exist.

## Features

- ✅ A typed `Task` model and a `TaskStatus` literal union (`"todo" | "in-progress" | "done"`)
- ➕ Fully typed operations: `addTask`, `advanceTask`, `completeTask`, `deleteTask`, `filterByStatus`, `countByStatus`
- 🔎 Filter chips + a live status summary
- 💾 Saves to `localStorage` — your tasks persist across refreshes
- 📱 Clean, responsive, dependency-free UI

## How it's built

| File | Role |
|------|------|
| `model.ts` | The typed data model: `Task`, `TaskStatus`, and all task operations (**Part 1**) |
| `app.ts` | Wires the model to the UI: render, add, advance, delete, filter (**Part 2**) |
| `index.html` | Structure: header, add row, filter chips, task list |
| `styles.css` | Styling: gradient header, task cards, status badges |
| `model.js` / `app.js` | Compiled output that the browser runs (`tsc` emits these) |
| `tsconfig.json` | Compiler settings — `target: ES2020`, `strict: true` |

This project is built across two Learning Units in Kalvium's Frontend Web Development course:

1. **Model & Types** — the typed data model and operations (the logic layer)
2. **UI, Build & Ship** — the HTML/CSS UI, wired to the model, compiled and deployed

## Run / build locally

```bash
# install TypeScript (once)
npm install -g typescript

# compile .ts -> .js
tsc

# then open index.html in a browser (or use VS Code Live Server)
```

## Deploy

Push to GitHub and enable **GitHub Pages** (or drag the folder onto **Netlify** / connect the repo to **Vercel**). GitHub Pages serves `index.html`, which loads the compiled `app.js`.
