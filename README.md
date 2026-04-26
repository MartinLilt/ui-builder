# PromptUI

[![@getpromptui/core](https://img.shields.io/npm/v/@getpromptui/core?label=%40getpromptui%2Fcore)](https://www.npmjs.com/package/@getpromptui/core)
[![@getpromptui/ui](https://img.shields.io/npm/v/@getpromptui/ui?label=%40getpromptui%2Fui)](https://www.npmjs.com/package/@getpromptui/ui)
[![license](https://img.shields.io/github/license/MartinLilt/promptui)](LICENSE)

**The typed contract between your LLM and your frontend.**

PromptUI is an AI-native UI DSL. You give Claude (or any coding agent) a catalog of ~100 anchored components and a constraint-driven block grammar; it emits a `.promptui` file; the preprocessor compiles deterministic React or Vue — imports resolved, no hallucinated components, no invented CSS, no layout drift. Components ship with default styles and **real Radix-backed behavior** (focus trap, keyboard nav, a11y) so the output runs in production.

[Install](#install) · **[Use with Claude Code](#use-with-claude-code)** · [Quick start](#quick-start) · [Component library](#component-library)

---

## Use with Claude Code

PromptUI ships with a Claude Code skill that teaches Claude the full DSL, the 101 registered `use`-paths, sub-part relationships, and the `variant:`-vs-new-file rule. One command to install:

```bash
mkdir -p .claude/commands
curl -o .claude/commands/promptui.md \
  https://raw.githubusercontent.com/MartinLilt/promptui/main/.claude/commands/promptui.md
```

Then in Claude Code:

```
/promptui

make a signup card: email input + destructive alert on error + loading button
```

Claude writes a valid `.promptui`:

```
[Signup] {
  use: library/cards/default
  [CardHeader] { [CardTitle] { text: "Join the waitlist" } }
  [CardContent] {
    [Email] { use: library/inputs/email bind: email }
    [Error] {
      use: library/alerts/default
      variant: destructive
      [AlertTitle]       { text: "Invalid email" }
      [AlertDescription] { text: "Please provide a valid address." }
    }
  }
  [CardFooter] {
    [Submit] { use: library/buttons/loading text: "Notify me" flow: submit-waitlist }
  }
}
```

Run `npx promptui compile` and you have production JSX with imports at the top. Because Claude resolves against a typed registry, not guessing, output is consistent run-to-run.

This is the intended workflow. The CLI works standalone, but the skill is how you get the value without writing `.promptui` by hand.

---

## Packages

| Package | Description |
|---------|-------------|
| [`@getpromptui/core`](packages/core) | Parser, resolver, emitters, CLI, library registry |
| [`@getpromptui/ui`](packages/ui) | React component library — 101 `use`-paths across 50+ categories |

---

## Install

```bash
# CLI
npm install -g @getpromptui/core

# Programmatic API
npm install @getpromptui/core

# Component library (React)
npm install @getpromptui/ui
```

---

## Quick start

Create `hero.promptui`:

```
[Hero:main] {
  role: landing-hero
  use: library/heroes/split
  lock: structure spacing
  allow: text buttons

  [HeroSplitContent] {
    [HeroEyebrow]  { text: "Now in beta" }
    [HeroTitle]    { text: "Describe UI. Compile it. Ship it." }
    [HeroSubtitle] { text: "AI-native DSL for frontend templates." }
    [HeroActions] {
      [CTA] {
        use: library/buttons/default
        text: "Get started"
        flow: open-docs
      }
      [Docs] {
        use: library/buttons/default
        variant: outline
        text: "Read docs"
      }
    }
  }

  [HeroSplitVisual] {
    [Placeholder] { use: library/skeletons/card }
  }
}
```

Compile to React:

```bash
promptui compile hero.promptui --target react
```

Output:

```jsx
import { ButtonDefault, HeroActions, HeroEyebrow, HeroSplit, HeroSplitContent, HeroSplitVisual, HeroSubtitle, HeroTitle, SkeletonCard } from '@getpromptui/ui'

<HeroSplit>
  <HeroSplitContent>
    <HeroEyebrow>{"Now in beta"}</HeroEyebrow>
    <HeroTitle>{"Describe UI. Compile it. Ship it."}</HeroTitle>
    <HeroSubtitle>{"AI-native DSL for frontend templates."}</HeroSubtitle>
    <HeroActions>
      <ButtonDefault onClick={openDocs}>{"Get started"}</ButtonDefault>
      <ButtonDefault variant="outline">{"Read docs"}</ButtonDefault>
    </HeroActions>
  </HeroSplitContent>
  <HeroSplitVisual>
    <SkeletonCard />
  </HeroSplitVisual>
</HeroSplit>
```

Vue output is a full SFC with `<script setup lang="ts">` + `<template>`.

---

## Programmatic API

```ts
import { compile } from '@getpromptui/core'
import { readFileSync } from 'node:fs'

const source = readFileSync('hero.promptui', 'utf-8')
const { output, warnings } = compile(source, { target: 'react' })

console.log(output)
warnings.forEach(w => console.warn(w))
```

Low-level primitives:

```ts
import { parse, resolve, emitReact, emitVue } from '@getpromptui/core'

const doc = parse(source)
const { document, warnings } = resolve(doc)
const jsx = emitReact(document)
const vue = emitVue(document)
```

Library introspection:

```ts
import { LIBRARY_ENTRIES, lookupByUse, isKnownComponent } from '@getpromptui/core'
```

---

## Syntax

A PromptUI file is a tree of **blocks**. Each block has a type, an optional name, directives, and optional child blocks.

```
[BlockType:name] {
  directive: value
  ...
  [ChildType] { ... }
}
```

### Directives

| Directive  | Purpose |
|------------|---------|
| `use`      | Library path → component: `library/heroes/split` → `HeroSplit`. Validated against the registry. |
| `variant`  | Skin variant (e.g. `destructive`, `outline`). Valid only when the `use` entry declares variants. Emitted as `variant="..."` prop. |
| `role`     | Semantic role hint: `landing-hero`, `interactive-form`, `pricing-section` |
| `goal`     | Natural-language intent, used as a hint for AI-assisted workflows |
| `look`     | Semantic style tokens → `className`: `centered dark-gradient rounded` |
| `lock`     | What must not change: `structure spacing hierarchy states layout base-style` |
| `allow`    | What may be changed: `text subtitle buttons image badge icon binding` |
| `ban`      | Explicitly forbidden: `invent-new-layout custom-css inline-styles extra-wrappers hierarchy-changes unapproved-components` |
| `states`   | Supported variants: `desktop tablet mobile` / `default hover disabled` |
| `text`     | Literal text content |
| `flow`     | Interaction intent → handler: `open-waitlist` → `onClick={openWaitlist}` |
| `bind`     | Data binding: `email` → `value={email} onChange={(v) => setEmail(v)}` |

### Priority rules

- `lock` overrides `look`
- `ban` overrides `allow`
- `look` tokens are semantic — they pass through to `className`, not resolved as CSS classes by the compiler

### `variant:` vs new `use` path

- **Same markup, different skin** → `variant:` on the existing `use` path.
- **Different markup, structure, or HTML element** → pick a different `use` path (e.g. `library/inputs/password` vs `library/inputs/search`).

---

## Component library

101 `use`-paths registered in [`@getpromptui/core`](https://www.npmjs.com/package/@getpromptui/core), mapped to components in [`@getpromptui/ui`](https://www.npmjs.com/package/@getpromptui/ui). Sub-parts are imported automatically when referenced as nested blocks by `blockType`.

| Category | `use`-paths | Notes |
|----------|-------------|-------|
| `accordions` | `default` | variants: `default`, `bordered`, `separated` |
| `alertDialogs` | `default` | 8 sub-parts |
| `alerts` | `default` | variants: `default`, `destructive` |
| `aspectRatios` | `default` | |
| `avatars` | `default`, `withStatus`, `group` | |
| `badges` | `default` | variants: `default`, `secondary`, `destructive`, `outline` |
| `breadcrumbs` | `default`, `withDropdown` | |
| `buttons` | `default`, `icon`, `loading` + legacy `primary`, `ghost` | 6 skin variants on each new |
| `calendars` | `default`, `range`, `multiple` | |
| `cards` | `default`, `stat`, `profile`, `media`, `pricing`, `interactive` | |
| `carousels` | `default` | |
| `charts` | `default`, `bar`, `line`, `area`, `pie`, `radar` | SVG rendering from `data` prop |
| `checkboxes` | `default` | |
| `collapsibles` | `default` | |
| `comboboxes` | `default`, `multi` | |
| `commands` | `default` | Command palette pattern |
| `contextMenus` | `default` | |
| `dataTables` | `default` | Generic `columns` + `data` |
| `datePickers` | `default`, `range`, `multiple` | |
| `dialogs` | `default` | variants: `default`, `fullscreen`, `compact` |
| `drawers` | `default` | `side: top \| bottom \| left \| right` |
| `dropdownMenus` | `default` | |
| `forms` | `default` | |
| `headings` | `gradientH2` (legacy) | |
| `heroes` | `split`, `centered`, `withVideo`, `withGradient` + legacy `primary` | Shared `HeroTitle`/`HeroSubtitle`/`HeroActions`/`HeroEyebrow` parts |
| `hoverCards` | `default` | |
| `inputOtps` | `default` | |
| `inputs` | `default`, `email`, `password`, `search`, `number`, `file`, `date`, `withIcon`, `withPrefix`, `withSuffix` + legacy `rounded` | |
| `labels` | `default` | |
| `menubars` | `default` | |
| `navigationMenus` | `default`, `mobile`, `mega` | |
| `paginations` | `default`, `withPageSize` | variants: `default`, `compact` |
| `popovers` | `default` | |
| `progresses` | `default`, `circular`, `stepped` | |
| `radioGroups` | `default` | |
| `resizables` | `default` | |
| `results` | `text` (legacy) | |
| `scrollAreas` | `default` | |
| `selects` | `default` | |
| `separators` | `default`, `withLabel` | variants: `default`, `dashed`, `dotted` |
| `sheets` | `default` | |
| `sidebars` | `default` | |
| `skeletons` | `default`, `text`, `circle`, `card` | |
| `sliders` | `default`, `range` | |
| `sonners` | `default` | |
| `switches` | `default` | |
| `tables` | `default` | |
| `tabs` | `default`, `vertical` | variants: `default`, `pills`, `boxed` |
| `textareas` | `default` | |
| `toasts` | `default` | variants: `default`, `destructive` |
| `toggles` | `default` | |
| `toggleGroups` | `default` | |
| `tooltips` | `default`, `rich` | |

For the full catalog with every sub-part, see [`packages/core/README.md`](packages/core/README.md) or the Claude Code skill at [`.claude/commands/promptui.md`](.claude/commands/promptui.md). You can also inspect `LIBRARY_ENTRIES` at runtime:

```ts
import { LIBRARY_ENTRIES } from '@getpromptui/core'
```

### Design principles

- **Thin wrappers.** Semantic HTML + `promptui-*` class hooks + controlled props. No Radix, no CVA, no Tailwind, no internal state (with rare pragmatic exceptions for SVG charts).
- **Consumer styles.** Components expose class names — you supply CSS. Works with Tailwind, CSS Modules, or any design system.
- **Structure, not behavior.** Focus trap, keyboard navigation, portals, animations are the consumer's responsibility.

---

## What v0.4 does and doesn't do

**Does:**
- Compiles `.promptui` files to React (`.tsx` files with imports + props + state hooks) and Vue (full SFC with `<script setup>`).
- 101 anchored `use`-paths across 50+ component categories.
- Real behavior on all interactive primitives (Dialog, Popover, Tooltip, DropdownMenu, ContextMenu, Menubar, NavigationMenu, Accordion, Collapsible, Tabs, Select, Switch, Checkbox, RadioGroup, Slider, Toggle, ToggleGroup, ScrollArea, AspectRatio, Avatar, Label, Toast, Separator, AlertDialog, Sheet, Drawer, HoverCard) — focus trap, keyboard nav, escape-to-close, scroll-lock, type-ahead, all wired via Radix UI.
- Default styles (`@getpromptui/ui/styles.css`) + Tailwind preset.
- `each:` / `if:` directives, `{{expr}}` interpolation, `variant:` skin prop.
- Vite plugin (`@getpromptui/core/vite`) for native `import` of `.promptui` files.
- CLI watch mode (`--watch`) for non-Vite projects.

**Doesn't (yet):**
- Computed/derived state, data fetching, logic in DSL — keep that in your own code.
- Vue Radix integration (Vue components are still pure structural — Radix Vue exists, would land in v0.5).
- Custom-still: Combobox, Calendar/DatePicker, Carousel, Sidebar, Form (use react-hook-form), Heroes, Cards (variants), Skeletons, Charts.

---

## Contributing

```bash
git clone https://github.com/MartinLilt/promptui
cd ui-builder
pnpm install
pnpm build
```

pnpm monorepo with packages under `packages/`. Please open an issue before submitting a PR for non-trivial changes.

---

## Changelog

### 0.4.0–0.4.3 — Production-ready ("behavior arrives")

The big shift: 30+ interactive primitives now wrap **Radix UI** for real a11y and behavior. PromptUI is no longer just "structure + imports" — components actually work.

- **Stage 4a (0.4.0):** Dialog, Popover, Tooltip, TooltipRich.
- **Stage 4b (0.4.1):** AlertDialog, Sheet, Drawer, HoverCard.
- **Stage 4c (0.4.2):** DropdownMenu, ContextMenu, Menubar, NavigationMenu, Accordion, Collapsible, Tabs, TabVertical.
- **Stage 4d (0.4.3):** Select, Switch, Checkbox, RadioGroup, Slider, SliderRange, Toggle, ToggleGroup, ScrollArea, AspectRatio, Avatar, Label, Toast, Separator.

**Breaking** (composition shift to shadcn-style `<Root><Trigger/><Content/></Root>`): Dialog, AlertDialog, Sheet, Drawer, Popover, HoverCard, Tooltip. The DSL `use` paths and sub-part names are unchanged — only manual JSX usage needs updates.

Adds 25 `@radix-ui/*` deps as `dependencies` (not peer) so consumers don't need to install them manually.

`@getpromptui/core@0.4.0` is version-aligned with `@getpromptui/ui@0.4.x`. No core API changes since 0.3.1.

### 0.3.0–0.3.1

- Wrapped React output: `--export Name` (or root `[Block:Name]`) → `export function Name()` with `useState` for `bind:`, `on<Flow>` props for `flow:`.
- `each: item in items` and `if: expr` directives. `{{expr}}` for expressions in `text:`.
- Default CSS (`@getpromptui/ui/styles.css`, 68 KB / 589 selectors).
- Tailwind plugin at `@getpromptui/ui/tailwind`.
- CLI `--watch` + `--output`. Vite plugin at `@getpromptui/core/vite`.

### 0.2.2

Docs: promoted the Claude Code skill to a hero section in the root + core READMEs. No code changes.

### 0.2.1

Metadata-only: repository URLs updated to `MartinLilt/promptui` after GitHub rename.

### 0.2.0

- Library registry: 101 `use`-paths shared via `LIBRARY_ENTRIES`.
- New `variant:` directive for skin variations.
- 46 new component files covering inputs/buttons/cards/heroes/skeletons/charts/progresses/calendars/datePickers/comboboxes/sliders/avatars/tooltips/paginations/breadcrumbs/separators/navigationMenus/tabs.
- React emitter: auto-imports `import { ... } from '@getpromptui/ui'` at the top.
- Vue emitter: full SFC output with `<script setup>` imports. **Breaking:** no more per-child `<template #slot>` wrapping.
- Resolver validates `use` paths and `variant:` values.

### 0.1.0

Initial release — parser, resolver, React/Vue emitters, CLI, 6 legacy components.

---

## License

MIT © Martin Li. See [LICENSE](LICENSE).