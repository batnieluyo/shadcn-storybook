# Stories

## What is a story?

A **story** captures a single rendered state of a component — one variant, one set of props, one edge case. Instead of eyeballing a component by wiring it into a page, you describe the states you care about ("default button", "disabled button", "long text that wraps") and Storybook renders each one in isolation, independent of the rest of the app.

A collection of stories for one component lives in a `*.stories.tsx` file, written in [Component Story Format (CSF)](https://storybook.js.org/docs/writing-stories):

- A **default export** (`meta`) describes the component itself: which component it renders, where it shows up in the Storybook sidebar (`title`), shared `parameters`, and `argTypes` (controls for props).
- Each **named export** is one story — one state of that component, expressed as `args` (the props passed to it).

## Where stories live in this project

```
src/
  components/nova/          # the components (Button, Badge, ...)
  stories/nova/              # their stories, one file per component
    Button.stories.tsx
    Badge.stories.tsx
```

Story files mirror the component tree: for every component added under `src/components/nova`, add a matching `<Component>.stories.tsx` under `src/stories/nova`. This keeps the Storybook sidebar organized and makes it obvious which components still need coverage.

## Anatomy of a story (this project's convention)

`src/stories/nova/Button.stories.tsx`:

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/components/nova/button.tsx';

const meta = {
  title: 'nova/Button',       // sidebar location: "nova" group > "Button"
  component: Button,
  parameters: {
    layout: 'centered',        // center the component in the preview canvas
  },
  tags: ['autodocs'],          // auto-generate a docs page from argTypes/props
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Button' },
};

export const Outline: Story = {
  args: { variant: 'outline', children: 'Button' },
};
```

Each named export (`Default`, `Outline`, ...) shows up as its own entry under `nova/Button` in the sidebar, and each is independently interactive: the Controls panel lets you tweak `args` (like `variant` or `size`) live, without editing code.

## Using Storybook

```bash
npm run storybook         # dev server at http://localhost:6006
npm run build-storybook   # static build in storybook-static/
```

In the running Storybook UI:

- **Sidebar** — browse stories by `title` (e.g. `nova/Button`).
- **Canvas** — the rendered story, plus the **Controls** addon to live-edit `args`.
- **Docs tab** — auto-generated from `tags: ['autodocs']`, showing the component's props table and all its stories on one page.
- **Accessibility tab** (`@storybook/addon-a11y`) — flags a11y violations for the currently selected story.

## Adding a new story

1. Add or generate the component under `src/components/nova` (see [README.md](./README.md) for `npx shadcn@latest add <component>`).
2. Create `src/stories/nova/<Component>.stories.tsx` following the pattern above:
   - `title: 'nova/<Component>'`
   - `tags: ['autodocs']`
   - `argTypes` for any prop you want a live control for (variant/size selects, boolean toggles, etc.)
   - one named export per meaningful state (default, each variant, disabled, loading, empty, long content, ...)
3. Run `npm run storybook` and confirm the new entry renders and the Controls/Docs/Accessibility tabs look right.

You can also scaffold a starting point with `npm run create:story` (Storybook's built-in story generator) and then adapt it to this project's conventions above.

## Reference

- [Storybook docs home](https://storybook.js.org/docs)
- [Writing stories (CSF)](https://storybook.js.org/docs/writing-stories)
- [Args](https://storybook.js.org/docs/writing-stories/args) — the props driving each story
- [ArgTypes](https://storybook.js.org/docs/api/arg-types) — configuring the Controls panel
- [Autodocs](https://storybook.js.org/docs/writing-docs/autodocs) — auto-generated docs pages
- [Parameters](https://storybook.js.org/docs/writing-stories/parameters) — per-story/per-component render options (e.g. `layout`)
- [Accessibility addon](https://storybook.js.org/docs/writing-tests/accessibility-testing) — the a11y checks used in this project
- [Storybook for React + Vite](https://storybook.js.org/docs/get-started/frameworks/react-vite) — the framework integration this project uses