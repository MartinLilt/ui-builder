# PromptUI

[![@getpromptui/core](https://img.shields.io/npm/v/@getpromptui/core?label=%40getpromptui%2Fcore)](https://www.npmjs.com/package/@getpromptui/core)
[![@getpromptui/ui](https://img.shields.io/npm/v/@getpromptui/ui?label=%40getpromptui%2Fui)](https://www.npmjs.com/package/@getpromptui/ui)
[![license](https://img.shields.io/github/license/MartinLilt/ui-builder)](LICENSE)

**An AI-native DSL that compiles semantic UI instructions into component-based frontend templates.**

PromptUI lets you describe UI using strict, constraint-driven blocks instead of freeform markup. You reference an existing component, declare what can change and what must stay fixed, and the preprocessor emits clean React or Vue output with imports resolved against a component registry. No hallucinated wrappers, no invented CSS, no layout drift.

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

## What v0.2 does not do

PromptUI compiles **structure + imports** only. Not supported:

- Script / TypeScript logic generation
- Conditional rendering (`if`, `v-if`)
- Loops (`v-for`, `map`)
- Computed props or state machines
- Automatic data fetching
- Full expression language

---

## Claude Code skill

If you use [Claude Code](https://claude.ai/code), the repo ships with a skill that teaches Claude the full DSL, compiler pipeline, and component catalog:

```bash
# copy the skill into your project
mkdir -p .claude/commands
curl -o .claude/commands/promptui.md \
  https://raw.githubusercontent.com/MartinLilt/ui-builder/main/.claude/commands/promptui.md
```

Then type `/promptui` in Claude Code to activate it.

---

## Contributing

```bash
git clone https://github.com/MartinLilt/ui-builder
cd ui-builder
pnpm install
pnpm build
```

pnpm monorepo with packages under `packages/`. Please open an issue before submitting a PR for non-trivial changes.

---

## Changelog

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