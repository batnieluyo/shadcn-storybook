---
version: alpha
name: "Storybook"
website: "https://storybook.js.org"
description: >-
  A frontend developer-tooling brand whose marketing page runs a deep navy-to-midnight gradient
  hero carrying a bold 56px Nunito Sans headline in white, punctuated by a hot-pink-to-coral
  gradient accent that appears in the logo mark and nowhere else on the marketing surface — all
  product chromatics come from the embedded UI workshop screenshots rather than from brand chrome.
  The system runs a single typeface (Nunito Sans) across all tiers at modest weights, relies on
  a 4px-to-full-pill radius ladder, and uses the product UI itself — rendered inside a dark
  browser-frame mockup — as the page's visual centerpiece.

seo:
  title: "Storybook Design System for React — navy gradient, Nunito Sans, 15 components"
  metaDescription: "Storybook's marketing-site design system as DESIGN.md. Midnight navy gradient canvas, Nunito Sans at 56px bold, hot-pink brand logo mark, 14 color tokens, 15 components. For React, Next.js, and AI coding tools."
  highlights:
    - "Product-screenshot canvas — the hero's visual anchor is a literal Storybook UI mockup inside a dark browser frame, not brand illustration"
    - "Logo-mark pink as the only chromatic signal — the hot-pink-to-coral gradient appears in the Storybook logomark but is absent from any CTA, text, or card fill"
    - "Midnight navy gradient — the above-fold hero graduates from near-black at center to deep indigo at edges, a depth effect rare in open-source dev-tools brands"
    - "Nunito Sans across every tier — display sits at 56px / weight 700, body at 16px / 400, with no second typeface or mono voice on the marketing surface"
    - "Pill-dominant radius — the primary CTA and nav pills use 9999px full rounding; cards and inputs use 6px; the binary choice mirrors Cloudflare's structure"
  tags:
    - "Developer Tools & IDEs"
  lastUpdated: "2026-05-19"
  author:
    name: "Dov Azencot"
    url: "https://x.com/dovazencot"
  opening: |
    Storybook's marketing page makes a choice that almost no other open-source dev-tool makes:
    the hero's visual protagonist is the product itself. A detailed mockup of the Storybook UI —
    component tree on the left, canvas in the center, controls panel on the right — sits inside
    a dark browser frame that spans the full hero width. The gradient behind it runs from near-black
    at the page center to a deep indigo-blue at the edges, creating a depth field that makes the
    product mockup appear to float. The brand's hot-pink logomark sits top-left but the pink goes
    nowhere else on the marketing surface; the only colors visible in the hero come from the
    rendered UI components inside the mockup.

    The DESIGN.md file packages the system into a machine-readable spec for React tooling. Inside:
    14 color tokens anchored on a near-black-to-midnight gradient canvas with a single structural
    gray hairline and a muted secondary text tier; 12 typography tokens running Nunito Sans at sizes
    from 12px caption to 56px display hero; 6 corner-radius tokens from 2px (the tightest code
    fragment rounding) through 9999px pill (the primary CTA); and 15 component definitions covering
    the gradient hero, the navy card surface, the pill-shaped primary button, the dark text input,
    and the brand logo badge. The gradient brand colors (hot pink, deep blue, gradient variants) are
    declared in the system but appear only inside the logomark and the hero gradient fill.

    Feed this file to Claude or Cursor and it reproduces Storybook's specific moves: near-black
    gradient hero instead of a flat dark canvas, product-screenshot as the visual hero above the fold,
    pill CTAs against a dark surface, and Nunito Sans across every typographic tier without a second
    voice. The token set is notably restrained for a brand with this much chromatic personality in its
    logomark — the design discipline is the abstinence of the pink, held back so the product can
    carry the page.
  related:
    - href: "/design"
      title: "Browse all design systems"
      description: "The full directory of DESIGN.md files on shadcn.io, with live mockups for each."
    - href: "https://storybook.js.org"
      title: "Storybook — official site"
      description: "Storybook's public marketing site — the source of truth for the live tokens captured in this file."
    - href: "https://github.com/google-labs-code/design.md"
      title: "The DESIGN.md specification"
      description: "Google Labs' open spec for machine-readable design system files — the format this page is built on."
  questions:
    - id: "primary-color"
      title: "What is Storybook's primary brand color?"
      answer: "Storybook's brand voltage is a hot-pink-to-coral gradient used exclusively in the logomark — the specific hues are approximately hot pink transitioning to salmon. On the captured marketing page this gradient appears in the logo only; no CTA button, card, heading, or section uses the pink as a fill or text color. The structural colors dominating the page are the midnight navy gradient for the hero canvas and pure white for text. The brand's 'pink' is a logo identity, not a marketing system accent."
    - id: "typography"
      title: "What typeface does Storybook use, and what should I substitute?"
      answer: "Storybook's marketing site runs Nunito Sans across every tier — display, body, label, nav link, and button all share the same family. Display headlines sit at 56px / weight 700 with a 70px line height; body at 16px / 400 / 28px line height; nav links at 14px / 700. The type system has only one family and tops out at weight 700 exclusively on the hero h1 and nav labels. The closest open-source substitute is Nunito (non-Sans, slightly more rounded) or Inter at the same weights; Nunito Sans has slightly more humanist counters than Inter at small sizes."
    - id: "hero-gradient"
      title: "What makes Storybook's hero gradient distinctive?"
      answer: "The hero gradient is not a simple dark-to-black canvas. The center of the hero is near-black (approximately the midnight navy of the brand), and the gradient radiates outward toward a deeper indigo-blue at the edges, creating a vignette-like depth field. The product mockup floats at the center of this vignette. This is the inverse of most SaaS hero gradients, which run horizontally or diagonally; Storybook's radial depth makes the browser-frame mockup read as lit from behind. The dark navy is wired as a brand-layer color in the extraction."
    - id: "radius-philosophy"
      title: "What is Storybook's corner-radius approach?"
      answer: "Storybook uses a binary radius approach: most interactive surfaces use 6px or below (nav links at 6px, inputs at 6px), while the primary CTA and pill badges use the full 9999px. This mirrors Cloudflare's binary pattern — either small-step rounding or a complete pill, with nothing in the 12–24px mid-range. The 4px radius appears on code-level surfaces (the smallest chip tier), 2px on inline code fragments. The 8px tier exists for medium cards."
    - id: "product-screenshot-as-hero"
      title: "Why does Storybook use its own UI as the hero visual?"
      answer: "Storybook's marketing strategy is to let the product demonstrate itself. The hero mockup shows a real Storybook session: a ProductCard component with 'Space Helmet X24' in the canvas, a component tree on the left with items like Dashboard, Homepage, and User Profile, and a Controls panel on the right showing backgroundColors, outOfStock toggle, and padding values. This is not an illustration — it is a screenshot of a working Storybook session. Where tools like Linear use abstract interface illustrations or abstract canvas shapes, Storybook shows exactly what it looks like to use the tool, grounding the marketing in product reality."

mockups:
  - "marketing-hero"
  - "dashboard-card-grid"

colors:
  primary: "#ff4785"
  primary-alt: "#4791ff"
  canvas: "#0d1026"
  canvas-gradient-edge: "#232a35"
  ink: "#ffffff"
  ink-muted: "#94a3b8"
  ink-secondary: "#73828c"
  ink-tertiary: "#71717a"
  surface-1: "#232a35"
  hairline: "#e5e7eb"
  hairline-dark: "#3f3f46"
  focus-ring: "#029cfd"
  status-error: "#ef4444"
  status-warning: "#eab308"
  status-success: "#22c55e"

typography:
  display-xl:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 70px
    letterSpacing: 0
  heading-lg:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: 0
  heading-md:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: 0
  body-lg:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0
  body-md:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0
  body-sm:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0
  body-xs:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 19.5px
    letterSpacing: 0
  label-md:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0
  button-md:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: 0
  nav-link:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0
  caption:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0
  overline:
    fontFamily: "\"Nunito Sans\", system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 700
    lineHeight: 16.5px
    letterSpacing: "0.55px"

rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "6px"
  base: "8px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"
  3xl: "80px"

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
    height: "40px"
    border: "0"
  button-primary-hover:
    backgroundColor: "{colors.ink-muted}"
    textColor: "{colors.canvas}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
    height: "40px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"
    rounded: "{rounded.full}"
    padding: "8px 20px"
    height: "40px"
    borderColor: "{colors.hairline-dark}"
  top-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "8px 32px"
    height: "56px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.md}"
    padding: "0px 8px"
    height: "32px"
  hero-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "80px 32px"
  hero-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "0"
  section-heading:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
  body-paragraph:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
  body-paragraph-muted:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-md}"
  card-dark:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: "24px"
  text-input:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "0px 100px 0px 16px"
    height: "48px"
    borderColor: "{colors.hairline}"
  badge-pill:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 8px"
  status-dot-error:
    backgroundColor: "{colors.status-error}"
    rounded: "{rounded.full}"
  status-dot-success:
    backgroundColor: "{colors.status-success}"
    rounded: "{rounded.full}"
---

## Overview

Storybook's marketing page does something almost no other open-source developer tool does. **Product-as-proof**: the hero is not an illustration of the tool — it is a screenshot of the tool running. A real Storybook session fills a dark browser-frame mockup spanning the full hero width: component tree on the left (ProductCard, Dashboard, Homepage, Sign In), canvas in the center showing a Space Helmet product card, controls panel on the right with backgroundColors, outOfStock toggle, and padding slider. The surrounding gradient is the brand's midnight-navy-to-indigo radial depth field, making the frame appear lit from behind. Where Linear renders its interface as a perspective illustration and GitHub shows abstract code animations, Storybook puts the real interface in front.

**Single-voltage restraint in the wrong place**: the brand owns a vivid hot-pink-to-coral gradient, but it appears only in the logomark. The marketing surface itself is nearly monochrome — white text on the navy gradient hero, dark-navy cards in the feature sections, and white for body surfaces below the fold. The pink is withheld so that the product's own UI colors (the rendered component states, status indicators, control panel tokens) are the page's only chromatic moments. Unlike tools like Netlify or Vercel that stamp their brand accent on every primary CTA, Storybook lets the product's UI language do the chromatic work.

Typography is Nunito Sans across every tier — the humanist rounded sans used consistently from the 56px hero headline to the 11px overline labels. Display weight is 700, body is 400, and there is no intermediate 500 or 600 weight on the captured surfaces. The system's typographic character comes from Nunito Sans's rounded apertures rather than weight manipulation.

**Key Characteristics:**
- Midnight-navy-to-indigo radial gradient hero (`{colors.canvas}` deep to `{colors.canvas-gradient-edge}`), not a flat dark canvas — the vignette depth is the hero's structural device.
- Hot-pink brand voltage (`{colors.primary}` — #ff4785) appears only in the logomark; absent from all marketing CTAs, cards, and text.
- Product UI screenshot inside a dark browser frame as the primary above-fold visual — 100% real product, not illustration.
- Nunito Sans across all 12 typographic tokens — single family, 56px display at 700 down to 11px overline at 700 with 0.55px letter-spacing.
- Full-pill primary CTA (`{rounded.full}`) against the dark canvas; small surfaces (6px) elsewhere — binary radius pattern.
- Status colors (error red `{colors.status-error}`, warning amber `{colors.status-warning}`, success green `{colors.status-success}`) appear in the product mockup as component state indicators, not as brand chrome.

## Colors

### Brand

- **Primary Pink** (`{colors.primary}` — #ff4785): frequency 2. Used as gradient fill only — exclusively inside the Storybook logomark. Not rendered on CTAs, cards, or section fills. The brand's held-in-reserve identity color.
- **Primary Blue** (`{colors.primary-alt}` — #4791ff): frequency 3. Used as gradient fill only — appears paired with the pink in the logomark gradient. Wired into the logo mark with no marketing-surface application.

### Surface

- **Canvas** (`{colors.canvas}` — #0d1026): frequency 3. The deep-navy hero floor, used as background fill on the above-fold section and inside gradient animations. Wired as a brand-layer color.
- **Canvas Gradient Edge** (`{colors.canvas-gradient-edge}` — #232a35): frequency 2. The secondary dark surface — used for the edge of the hero gradient and for the dark card surfaces in the feature sections below.
- **Surface-1** (`{colors.surface-1}` — #232a35): the elevated dark card surface, same hex as the gradient edge tone. Used for feature cards and the embedded browser frame background.

### Text

- **Ink** (`{colors.ink}` — #ffffff): frequency 278 — the dominant page text color. White on every dark surface, used for display headlines, body paragraphs, nav labels, and button text. Also the background fill for the text-input below the fold.
- **Ink Muted** (`{colors.ink-muted}` — #94a3b8): frequency 21 — cool slate used for secondary text, metadata labels, and muted body paragraphs.
- **Ink Secondary** (`{colors.ink-secondary}` — #73828c): frequency 21 — mid-range muted text for captions and tertiary labels.
- **Ink Tertiary** (`{colors.ink-tertiary}` — #71717a): frequency 7 — the dimmest text tier, used for the smallest metadata below the product mockup.

### Hairlines

- **Hairline** (`{colors.hairline}` — #e5e7eb): frequency 620 — the dominant border token, appearing on 611 border occurrences. Card outlines, input edges, and section dividers. The high frequency is driven by the product mockup's internal UI chrome.
- **Hairline Dark** (`{colors.hairline-dark}` — #3f3f46): frequency 12. Used on the dark-surface card borders in the feature sections.

### Semantic

- **Focus Ring** (`{colors.focus-ring}` — #029cfd): frequency 12 — wired as `--tw-ring-color`. Appears as the focus state on the email input field.
- **Status Error** (`{colors.status-error}` — #ef4444), **Status Warning** (`{colors.status-warning}` — #eab308), **Status Success** (`{colors.status-success}` — #22c55e): each frequency 1, all as background fills in the product mockup's component status dots. Not brand chrome — these are the status colors Storybook renders for component state visualization.

## Typography

### Font Family

The system runs **Nunito Sans** for everything — a humanist rounded sans-serif that reads warmly at both display and label sizes. Fallbacks walk `system-ui, sans-serif`. There is no second family and no monospace voice on the captured marketing surfaces; even the technical labels inside the product mockup inherit Nunito Sans. The rounded apertures give the brand a friendlier character than the geometric or grotesque alternatives that dominate dev-tools brands.

### Hierarchy

| Token | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | 56px | 700 | 70px | Hero h1, section h2 ("Build, test & document components") |
| `{typography.heading-lg}` | 24px | 700 | 32px | Feature section h3 headings |
| `{typography.heading-md}` | 20px | 400 | 32px | Blockquote / testimonial tier |
| `{typography.body-lg}` | 16px | 400 | 28px | Hero sub-paragraph, lead body copy |
| `{typography.body-md}` | 16px | 400 | 24px | Default running text |
| `{typography.body-sm}` | 14px | 400 | 20px | Secondary body, nav descriptions |
| `{typography.body-xs}` | 13px | 400 | 19.5px | Tertiary descriptions |
| `{typography.label-md}` | 14px | 700 | 20px | Labels, active nav badges |
| `{typography.button-md}` | 16px | 700 | 24px | CTA button labels |
| `{typography.nav-link}` | 14px | 700 | 20px | Top-nav link labels |
| `{typography.caption}` | 12px | 700 | 16px | Badge text, small labels |
| `{typography.overline}` | 11px | 700 | 16.5px | Small-caps overlines above section headings |

### Principles

Display weight is 700 — the single heavy typographic moment. Body and most labels sit at 400. The 700 weight appears on display headlines, nav links, button labels, and captions, but at sizes that descend from 56px to 11px; the single weight stretches across all roles rather than each role having its own weight. Nunito Sans's rounded terminals remain legible at 11px, which is why the system can hold one family this far down.

### Note on Font Substitutes

Nunito Sans is available from Google Fonts at no cost. The commercial Nunito (slightly more rounded) is a close sibling. For an open-source alternative with similar humanist warmth, **DM Sans** transfers well at the heading and body sizes; **Plus Jakarta Sans** at 95% line-height covers the display tier.

## Layout

### Spacing System

- **Base unit:** 8px.
- **Tokens:** `{spacing.xs}` 4px · `{spacing.sm}` 6px · `{spacing.base}` 8px · `{spacing.md}` 16px · `{spacing.lg}` 20px · `{spacing.xl}` 24px · `{spacing.2xl}` 32px · `{spacing.3xl}` 80px.
- **Section padding (vertical):** 80px between major sections — `{spacing.3xl}`.
- **Card internal padding:** `{spacing.xl}` (24px) for feature cards.
- **Hero internal padding:** 0 horizontal on the headline; the product mockup extends full-width.

### Grid & Container

- **Max content width:** ~1376px on the hero; feature sections constrain to ~1080px.
- **Hero:** full-bleed midnight-navy gradient canvas. The browser-frame product mockup spans approximately 80% of the viewport width.
- **Feature sections:** alternating left-text / right-image layout at 50/50 below the fold.
- **Integration logo wall:** six-icon row (VS Code, GitHub, Airbnb, Mozilla, monday.com, BBC) in white on the dark mid-section.

### Rhythm

The page runs on a consistent dark canvas from hero through the feature sections. There is no light-mode inversion below the fold — the entire page holds the near-black surface. Individual sections are separated by vertical rhythm only, not by background-color shifts. This is unusual among open-source dev-tools brands; most (Linear, Vercel) alternate between dark hero and light content sections.

## Elevation

The system uses **tonal lift** rather than shadows — dark cards (`{colors.surface-1}` #232a35) lift off the hero canvas (`{colors.canvas}` #0d1026) through lightness contrast alone. The browser-frame product mockup is the most visually elevated element, but its lift comes from the radial gradient depth field rather than from a drawn shadow. There are 60 shadow occurrences in the capture, all pure black — used as logo glows and gradient overlays rather than card elevation.

## Shapes

The radius scale centers on **pill-or-small** with nothing in between:

- `{rounded.none}` 0px — section dividers, full-bleed bands.
- `{rounded.xs}` 2px — inline code-fragment corners.
- `{rounded.sm}` 4px — the smallest interactive chip surfaces.
- `{rounded.md}` 6px — nav links, the text input, and the product mockup tab bar.
- `{rounded.lg}` 8px — feature cards and medium surfaces.
- `{rounded.xl}` 12px — the browser-frame mockup outer container.
- `{rounded.full}` 9999px — the primary "Get Started" CTA pill and badge pills.

There is no 16px or 24px middle tier. The system is binary: small-step rounding for content surfaces, full pill for interactive CTAs and badges.

## Components

**`button-primary`** — White fill, dark text, full pill `{rounded.full}`, 8×20px padding, 40px height. "Get Started" is the canonical instance, rendered as a white pill against the dark hero.

**`button-primary-hover`** — Background shifts to muted `{colors.ink-muted}` for the hover state.

**`button-secondary`** — Transparent fill, white text, 1px dark hairline `{colors.hairline-dark}` border, full pill, same dimensions. Used for secondary CTAs like "npm create storybook@latest" in the hero.

**`top-nav`** — Transparent over the hero gradient, 56px height, 32px horizontal padding. Houses the Storybook wordmark, product nav (Docs, AI, Addons, Showcase, Blog, Visual Test, Enterprise), GitHub star count, search, and the "Get Started" CTA.

**`nav-link`** — Transparent background, white text, `{typography.nav-link}` (14px / 700), `{rounded.md}` 6px hover radius, 0×8px padding.

**`hero-section`** — Midnight-navy radial gradient canvas, 80×32px padding. Holds the headline, sub-copy, CTA row, stat row (66.41m installs/month, 2282 contributors), and the full-width browser-frame product mockup.

**`hero-heading`** — White text at `{typography.display-xl}` (56px / 700 / 70px line-height). "Build, test & document components."

**`section-heading`** — Same `{typography.display-xl}` token on the dark canvas for section h2s.

**`body-paragraph`** — White text at `{typography.body-lg}` (16px / 400 / 28px). Standard lead copy beneath section headings.

**`body-paragraph-muted`** — `{colors.ink-secondary}` text at `{typography.body-md}`. Sub-text and secondary feature descriptions.

**`card-dark`** — `{colors.surface-1}` fill, white text, `{rounded.lg}` 8px, 24px padding. Used in the feature grid below the fold.

**`text-input`** — White `{colors.ink}` background, dark text, 1px `{colors.hairline}` border, `{rounded.md}` 6px, 100px right padding (for the submit button inset), 48px height.

**`badge-pill`** — Dark surface `{colors.surface-1}`, white text, `{rounded.full}` pill, 4×8px padding. Used for the "Introducing MCP for React" announcement banner.

**`status-dot-error`** / **`status-dot-success`** — Circular dots in `{colors.status-error}` and `{colors.status-success}`, full pill. Appear inside the product mockup as component state indicators — not brand decorations.

## Do's and Don'ts

**Do** use the product-UI mockup as the hero's primary visual anchor. The mockup is not a decorative illustration — it is the argument for using the tool. Replacing it with abstract illustration would break the page's editorial logic.

**Do** hold the hot-pink brand voltage for the logomark only. The design discipline of the system is restraint: the pink is the identity, not the interactive accent. Spreading it to CTAs or card backgrounds defeats the entire "product-as-proof" strategy.

**Do** use `{colors.surface-1}` (#232a35) for elevated card surfaces against the hero canvas. The lightness gap between the two dark tones provides all the elevation the system needs — no shadow required.

**Do** keep display weight at 700 only for the hero h1 and section h2 headings. Nunito Sans at 700 is assertive; applying it to body paragraphs or feature descriptions makes the page feel loud.

**Don't** add a second typeface for code or monospace content. The marketing surface runs Nunito Sans throughout — even the product mockup's panel labels use it. Adding a mono family would introduce a voice the system doesn't have.

**Don't** use the status colors (`{colors.status-error}` #ef4444, `{colors.status-warning}` #eab308, `{colors.status-success}` #22c55e) as brand accents. They are component-state indicators that appear inside the product mockup; using them in marketing chrome would conflate tool output with brand identity.

**Don't** lighten the hero canvas to charcoal or use a flat dark background. The radial gradient — darker at center, navy at edges — is the structural device that makes the product mockup float. A flat dark canvas collapses the depth field.

**Don't** use the 12–24px mid-range radii that the system skips. The radius scale is binary: small-step (2–8px) for content surfaces or full pill (9999px) for CTAs and badges. Introducing a 16px or 24px radius would soften the distinction between content surfaces and interactive pill elements.

## Known Gaps

- **Dark mode / light mode toggle:** the captured marketing surface is dark-only. The product itself ships a light-mode canvas, but the marketing page does not expose a theme toggle.
- **Hover and focus states:** documented for `{component.button-primary-hover}` only; the complete interaction matrix (focus rings on nav links, active-state pills, disabled button tints) was not visible on the captured surfaces.
- **Animation and motion:** the hero gradient animates subtly on load, and the feature-section alternating layout uses scroll-triggered visibility. Timing, easing, and stagger values are not captured in this static spec.
- **Mobile breakpoint:** the marketing site collapses the hero mockup on narrow viewports. The token system represents desktop capture at 1440px width only.
- **Product surfaces:** this DESIGN.md captures the marketing site only. The Storybook editor itself (the actual workshop surface) carries a richer token system — light canvas, sidebar trees, control panels, addon tabs — that is not represented here.
- **Addon ecosystem colors:** Storybook's addon directory and showcase pages use product-specific accent colors (the Test addon badge, the A11y addon badge) that are not present in the marketing capture.
