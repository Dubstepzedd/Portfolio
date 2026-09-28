# Personal Projects — Workspace Notes

This directory holds Liam's personal projects, each as its own top-level folder (currently: [Portfolio/](Portfolio/)). It is not itself a git repo — each project inside manages its own git history. Use this file for cross-project context: house style, recurring patterns, and conventions to follow when creating or touching any project here.

## Stack (default for web projects)

- **React 19** + **TypeScript**, built with **Vite 7**
- **Tailwind CSS v4** via `@tailwindcss/vite` — no `tailwind.config.js`; theme is defined directly in CSS with `@theme` + CSS custom properties (see Theming below)
- Icons: `lucide-react` for UI icons, `react-icons` (`Si*` set) for brand/logo icons
- `babel-plugin-react-compiler` enabled in the Vite React plugin
- ESLint flat config (`eslint.config.js`) with `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- Deploy target: GitHub Pages via a GitHub Actions workflow (`.github/workflows/deploy.yml`) that runs `npm ci && npm run build` and uploads `dist/` on push to `main`

## Project layout pattern

```
src/
  components/       # small, generic, reusable UI pieces (Header, Footer, Separator, ThemeToggle)
  providers/        # React context + provider, always split into two files (see below)
  sections/<app>/   # page-specific sections for a given "app"/page (e.g. sections/app/Home.tsx)
  App.tsx           # composes sections in order, wraps everything in providers
  main.tsx          # standard Vite entrypoint, StrictMode + createRoot
```

- `sections/<name>/` groups the sections that make up one page/app. Liam names the folder after the page (`app` for the main portfolio page), so a multi-page project would get `sections/app/`, `sections/blog/`, etc.
- Only pull a component out into `components/` if it's generic/reusable across sections (e.g. `ThemeToggle`, `Separator`). A subcomponent only used within one section stays **defined in that same file**, above the section's main export (e.g. `Skill` in `Skills.tsx`, `Project` in `Projects.tsx`, `NavItem` in `Header.tsx`). Don't split a file just because a component exists — split when it's reused.
- Context is always split into **two files**: a `*Context.tsx` file holding `createContext`, the exported type, and the `useX()` hook (which throws if used outside the provider), and a `*Provider.tsx` file holding the actual provider component and its state/effects. See [ThemeContext.tsx](Portfolio/src/providers/ThemeContext.tsx) / [ThemeProvider.tsx](Portfolio/src/providers/ThemeProvider.tsx).

## Component style

- Function components as `const Name = () => { ... }`, always with an explicit `export default Name;` on its own line at the bottom of the file (not inline on the declaration).
- Component file name matches the exported component name exactly (PascalCase).
- Props are typed with a dedicated interface named `<Component>Props`, declared immediately above the component:
  ```tsx
  interface ProjectProps {
      title: string;
      description: string;
  }

  const Project = ({ title, description }: ProjectProps) => { ... }
  ```
- Type-only imports use `import type { ... }` (required by `verbatimModuleSyntax: true` in tsconfig) — e.g. `import type { Theme } from "./ThemeContext"`.
- Lists render with `.map(...)` using the value itself as `key` when it's a stable string (e.g. skill/tag names), not an index.
- Indentation is **4 spaces** in hand-written source files under `src/` (components, providers, sections). Vite-generated scaffold files (`App.tsx`, `main.tsx`) were left at the default 2-space indent — don't "fix" that mismatch, just match whichever file you're editing.
- Semicolons: used consistently at end of statements/imports.

## Styling conventions

- Tailwind utility classes inline on JSX, no CSS modules / styled-components.
- Color tokens are semantic, not raw Tailwind colors: `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `border-border`, etc. These map to CSS variables defined once in [index.css](Portfolio/index.css) under `:root` (light) and `.dark` (dark), and wired into Tailwind via `@theme { --color-x: var(--x) }`. When adding a new color, add the CSS variable in both `:root` and `.dark`, then expose it in `@theme`.
- Dark mode is a `.dark` class on `<html>`, toggled by `ThemeProvider` (stores choice in `localStorage`), matched via `@variant dark (&:where(.dark, .dark *));`. Prefer Tailwind's `dark:` variant only for cases the semantic color tokens don't already cover (see `ThemeToggle`'s icon swap).
- A shared `.section-container` utility class (`max-w-5xl mx-auto`, defined in `@layer utilities`) keeps every page section the same width — reuse it rather than repeating `max-w-* mx-auto` per section.
- Page sections follow a consistent shell: `<section id="..." className="min-h-screen flex items-center pt-16 scroll-mt-16 px-10">` wrapping a `.section-container` div, so nav anchor links (`#skills`, `#projects`) scroll to a full-height, centered block under the fixed header.
- Monospace font (`font-mono`, JetBrains Mono) is used for "terminal-like" branding bits (logo, headings, tags); body copy uses the sans font (Inter).

## Misc

- Prefer small, focused components over configuration-driven abstractions — content (skills, projects) is written as literal JSX props in the section file rather than pulled from a separate data/config file or CMS.
- No test setup currently exists in Portfolio — don't assume a test runner is present; ask before adding one.
</content>
