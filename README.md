# Notely UI

> **Status: archived (2024).** A learning project, kept for reference and no longer maintained.

Front end for a simple notes app, built with **Next.js (App Router)**, **React** and **TypeScript**.

## What's in it

- Notes home page with add and edit modals, badges and a tab menu (`app/components/home/`)
- A small hand-built component library, with no UI framework: `Button`, `Modal`, `FormField`, `Select`, `TabMenu`, `ClickableIcon` (`app/components/ui/`), each with its own CSS
- Compound `Select` built with React context

The back end is a separate project: [NotelyAPI](https://github.com/Bhanuteja917/NotelyAPI) (ASP.NET Core). This UI is not wired to that API yet.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```
