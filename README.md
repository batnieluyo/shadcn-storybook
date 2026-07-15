# Nova

React + TypeScript + Vite, with Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com) components, and Storybook for isolated component development.

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [shadcn/ui](https://ui.shadcn.com) (Radix base, "Nova" preset) for components
- [Storybook 10](https://storybook.js.org) (`@storybook/react-vite`) with the a11y, docs, and vitest addons
- [Oxlint](https://oxc.rs) for linting

## Getting started

```bash
npm install
npm run dev         # start the Vite dev server
npm run storybook   # start Storybook on http://localhost:6006
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |
| `npm run storybook` | Start Storybook in dev mode |
| `npm run build-storybook` | Build the static Storybook site |

## Project structure

```
src/
  components/nova/   # shadcn/ui components (Button, Badge, ...)
  lib/utils.ts        # cn() class-merging helper
  styles/globals.css   # Tailwind + shadcn theme tokens (light/dark)
  stories/             # Storybook stories, mirroring components/
```

The `@` import alias points to `src/` (see `tsconfig.json`, `tsconfig.app.json`, and `vite.config.ts`).

## Adding shadcn components

```bash
npx shadcn@latest add <component>
```

This reads `components.json` and drops new components into `src/components/nova`. Add a matching story under `src/stories/nova` alongside each new component.

## Theming

Design tokens (colors, radii, etc.) live as CSS variables in `src/styles/globals.css`, with light and dark variants driven by the `.dark` class. Update tokens there rather than hardcoding colors in components.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.