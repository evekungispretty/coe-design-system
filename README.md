# UF COE Design System

Monorepo design system for the University of Florida College of Education, built with
**Turborepo**, **React 18**, **TypeScript**, and **Tailwind CSS**.

## Monorepo Map

```
design-system/
├── packages/
│   ├── tokens/   @coe/tokens — CSS custom properties, JS/TS objects, Figma Tokens Studio JSON
│   ├── ui/       @coe/ui    — 34 React components + Tailwind preset
│   └── utils/    @coe/utils — cn(), focusRing(), formatDate(), truncate(), generateId()
├── apps/
│   └── docs/     Storybook 8 — dark shell theme, MDX docs, auto-discovered stories
├── turbo.json    Pipeline: build → test → lint (tokens built before ui)
└── package.json  pnpm workspace root
```

## Install in a consuming app

```bash
pnpm add @coe/tokens @coe/ui @coe/utils
```

### Tailwind config

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";
import { preset } from "@coe/ui/tailwind";

export default {
  presets: [preset],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@coe/ui/dist/**/*.{js,mjs}",
  ],
} satisfies Config;
```

### CSS tokens

```ts
// main.tsx / app/layout.tsx
import "@coe/tokens/css";
```

Or in CSS:

```css
@import "@coe/tokens/css";
```

## Contributor Guide

### Prerequisites

- Node.js ≥ 18
- pnpm ≥ 9 (`npm install -g pnpm`)

### Clone and run

```bash
git clone https://github.com/ufl-coe/design-system.git
cd design-system
pnpm install      # installs all workspace packages
pnpm build        # builds tokens → utils → ui in dependency order
pnpm dev          # starts Storybook on http://localhost:6006
```

### Other commands

```bash
pnpm test         # run all Vitest suites (tokens builds first)
pnpm lint         # ESLint across all packages
pnpm format       # Prettier write
pnpm typecheck    # tsc --noEmit in each package
```

## Adding a New Component

1. Create `packages/ui/src/components/MyComponent/`
2. Add `MyComponent.tsx` — use `forwardRef`, match COE tokens via Tailwind classes
3. Add `MyComponent.test.tsx` — Vitest + React Testing Library
4. Add `MyComponent.stories.tsx` — CSF3 format, tag with `"autodocs"`
5. Add `index.ts` re-exporting everything
6. Add `export * from "./components/MyComponent"` to `packages/ui/src/index.ts`

```tsx
// packages/ui/src/components/MyComponent/MyComponent.tsx
import { forwardRef } from "react";
import { cn } from "@coe/utils";

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent";
}

export const MyComponent = forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "font-body text-sm",
        variant === "accent" && "text-coe-orange",
        className,
      )}
      {...props}
    />
  ),
);
MyComponent.displayName = "MyComponent";
```

## Changeset Publish Workflow

This repo uses [Changesets](https://github.com/changesets/changesets) for versioning.

### 1. Create a changeset after your work

```bash
pnpm changeset
# Follow the interactive prompts:
# - select affected package(s)
# - choose semver bump (major/minor/patch)
# - write a summary of the change
```

### 2. Merge the PR

The changeset `.md` file is committed alongside your code changes.

### 3. Version the packages

```bash
pnpm version-packages
# Updates package.json versions and generates CHANGELOG.md files
```

### 4. Publish to npm

```bash
pnpm release
# Builds all packages (excluding apps/), then runs `changeset publish`
```

> Requires `NPM_TOKEN` set in your environment or CI secrets.

## Brand Quick Reference

| Token | Value | Use |
|-------|-------|-----|
| `--coe-orange` | `#cc4927` | Primary CTA, active states, accents |
| `--coe-navy` | `#194588` | Headings, primary nav, outlined buttons |
| `--coe-navy-dark` | `#1c2f3d` | Nav backgrounds, dark surfaces |
| `--coe-teal` | `#1f7e98` | Semantic links, info states |
| `--coe-gold` | `#edba75` | Hero callouts, awards |
| `--coe-surface` | `#f8f7f5` | Card backgrounds, row fills |
| `--shell-bg` | `#11202b` | Admin app chrome |
| `--shell-accent` | `#cc4927` | Active nav item border |

⚠ **Do not use** `#2ea3f2`, `#1c2e3d`, or `#de6561` — see [Color Audit](./apps/docs/src/stories/ColorAudit.mdx).
