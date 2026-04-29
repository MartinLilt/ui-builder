# PromptUI

[![@getpromptui/core](https://img.shields.io/npm/v/@getpromptui/core?label=%40getpromptui%2Fcore)](https://www.npmjs.com/package/@getpromptui/core)
[![@getpromptui/ui](https://img.shields.io/npm/v/@getpromptui/ui?label=%40getpromptui%2Fui)](https://www.npmjs.com/package/@getpromptui/ui)
[![license](https://img.shields.io/github/license/MartinLilt/promptui)](LICENSE)

PromptUI is a declarative UI DSL that lets LLMs and developers generate real React interfaces from structured text.

It includes:

- A **preprocessor** that compiles PromptUI syntax into React components.
- A **component library** for rendering production-ready UI with default styles and a11y-correct behavior.

---

## See it in 5 seconds

**Input** — `pricing.promptui`:

```
[Pricing:PricingPage] {
  use: library/cards/default
  [CardHeader] { [CardTitle] { text: "Pricing" } }
  [CardContent] {
    [Plan] {
      each: plan in plans
      use: library/cards/pricing
      [CardPricingName]  { text: {{plan.name}} }
      [CardPricingPrice] { text: {{plan.price}} }
    }
  }
}
```

**Output** — `PricingPage.tsx`:

```tsx
import { CardContent, CardDefault, CardHeader, CardPricing, CardPricingName, CardPricingPrice, CardTitle } from "@getpromptui/ui"

export interface PricingPageProps {
  plans: unknown[]
}

export function PricingPage({ plans }: PricingPageProps) {
  return (
    <CardDefault>
      <CardHeader><CardTitle>Pricing</CardTitle></CardHeader>
      <CardContent>
        {plans.map((plan, index) => (
          <CardPricing key={index}>
            <CardPricingName>{plan.name}</CardPricingName>
            <CardPricingPrice>{plan.price}</CardPricingPrice>
          </CardPricing>
        ))}
      </CardContent>
    </CardDefault>
  )
}
```

Real React, fully typed. Imports resolved. State + props inferred. No glue code.

---

## Why PromptUI?

- **Built for LLMs.** UI is generated from text against an anchored catalog of 109 components, including site chrome (`headers/`, `footers/`, `layouts/*`) — no hallucinated names, no invented props.
- **Declarative.** No manual component wiring, no JSX scaffolding by hand.
- **Serializable.** UI lives as text — store it, version-control it, edit it, stream it from a chat.
- **Works with the React ecosystem.** Compiles to plain `.tsx`. Use it with Vite, Next.js, Astro — anything that runs React.

---

## Comparison

| Feature              | PromptUI | shadcn/ui |
|----------------------|:--------:|:---------:|
| Declarative DSL      | ✅       | ❌         |
| AI-friendly          | ✅       | ❌         |
| Manual control       | ⚠️       | ✅         |
| Default styles       | ✅       | ✅         |
| Real behavior (a11y) | ✅       | ✅         |

PromptUI trades manual flexibility for AI predictability. Use it where consistency and structured generation matter; reach for raw shadcn/Radix when you want full hand-control.

---

## Install

```bash
npm install @getpromptui/core @getpromptui/ui
```

```ts
// app entry
import "@getpromptui/ui/styles.css"
```

```ts
// any component
import { Card, CardHeader, CardTitle, Button, InputEmail } from "@getpromptui/ui"
```

> Both `Card` and `CardDefault` work — the short names are aliases of the
> registry-emitted `*Default` exports (added in 0.4.4). Pick whichever reads
> better in your code.

---

## Use with Claude Code

Workflow:

1. **Write PromptUI** — Claude generates `.promptui` against the typed catalog.
2. **Compile** with `@getpromptui/core` (CLI, Vite plugin, or programmatic API).
3. **Render** with `@getpromptui/ui` components.

Install the skill once. The skill ships **inside** `@getpromptui/core` and is regenerated on every release from `LIBRARY_ENTRIES`, so the catalog you teach Claude always matches the package version you installed:

```bash
mkdir -p .claude/commands
cp node_modules/@getpromptui/core/skill.md .claude/commands/promptui.md
```

Re-run that line whenever you upgrade `@getpromptui/core`.

Then `/promptui` in Claude Code teaches Claude all 109 `use`-paths, sub-parts, variants, and DSL grammar. Ask "make a signup card with email + destructive alert + loading button" and Claude writes valid `.promptui` you can compile straight into your project.

---

## How it works

```
.promptui  →  parse  →  resolve  →  emit  →  .tsx (or .vue)
                            ↓
                   library registry
                (101 anchored entries)
```

- **Parse** turns block syntax into an AST.
- **Resolve** validates `use:` paths against the registry, checks `lock`/`ban`/`allow`, validates `variant:`.
- **Emit** walks the tree, collects every component used (main + nested sub-parts), and produces React or Vue with imports at the top.

Use the **Vite plugin** to import `.promptui` files directly:

```ts
// vite.config.ts
import promptui from "@getpromptui/core/vite"
export default defineConfig({ plugins: [react(), promptui()] })
```

```tsx
import Pricing from "./pricing.promptui"
<Pricing plans={plans} />
```

---

## Use cases

- **AI-generated dashboards** — LLM produces metric cards, charts, tables against a fixed catalog.
- **Internal tools** — admin panels with consistent, constrained UI.
- **Chat-driven UI** — interface streams from a model in response to user messages.
- **Design-system handoff** — designers describe pages in `.promptui`, devs own the component implementations.

---

## Storybook playground

Live catalog of every registered component. Auto-generated from `LIBRARY_ENTRIES` plus hand-written stories for compound layouts (Heroes, Cards, Dialog, Combobox, Calendar, Charts).

```bash
pnpm install
pnpm --filter @getpromptui/storybook storybook
# → http://localhost:6006
```

---

## Packages

| Package | Description |
|---------|-------------|
| [`@getpromptui/core`](packages/core) | Parser, resolver, emitters, CLI, Vite plugin, library registry |
| [`@getpromptui/ui`](packages/ui) | React component library — 109 entries, default CSS, Radix-backed behavior |
| [`@getpromptui/storybook`](packages/storybook) | Storybook 8 playground (private; not published) |

---

## Programmatic API

```ts
import { compile } from "@getpromptui/core"

const { output, warnings } = compile(source, { target: "react", exportName: "Pricing" })
```

Low-level primitives:

```ts
import { parse, resolve, emitReact, emitVue } from "@getpromptui/core"
```

Library introspection:

```ts
import { LIBRARY_ENTRIES, lookupByUse, isKnownComponent } from "@getpromptui/core"
```

CLI:

```bash
promptui compile pricing.promptui --export Pricing -o src/Pricing.tsx --watch
```

---

## Syntax

A PromptUI file is a tree of **blocks**. Each block has a type, an optional name, directives, and optional child blocks.

```
[BlockType:name] {
  directive: value
  [ChildType] { ... }
}
```

### Directives

| Directive  | Purpose |
|------------|---------|
| `use`      | Library path → component: `library/cards/default` → `CardDefault`. Validated against the registry. |
| `variant`  | Skin variant (e.g. `destructive`, `outline`). Valid only when the `use` entry declares variants. Emitted as `variant="..."` prop. |
| `each`     | Repeat block: `each: item in items` → React `{items.map((item, i) => ...)}` / Vue `v-for`. |
| `if`       | Conditional: `if: hasError` → React `{hasError && (...)}` / Vue `v-if`. |
| `text`     | Literal text or `{{expr}}` for an expression. |
| `flow`     | Interaction → handler: `open-docs` → prop `onOpenDocs?: () => void`. |
| `bind`     | Two-way binding: `email` → `useState` + controlled `value`/`onChange`. |
| `look`     | Semantic style tokens → `className`. |
| `lock`     | Frozen aspects: `structure spacing hierarchy states layout base-style`. |
| `allow`    | What may change: `text subtitle buttons image badge icon binding`. |
| `ban`      | Forbidden: `invent-new-layout custom-css inline-styles extra-wrappers hierarchy-changes unapproved-components`. |
| `role`     | Semantic role hint. |
| `goal`     | Natural-language intent (used by AI tooling). |
| `states`   | Supported responsive/interaction states. |

**Priority rules:** `lock` > `look`, `ban` > `allow`.

---

## Component library

109 anchored `use`-paths across 50+ categories. Sub-parts are imported automatically when referenced as nested blocks.

| Category | `use`-paths | Notes |
|----------|-------------|-------|
| `accordions` | `default` | variants: `default`, `bordered`, `separated` |
| `alertDialogs` | `default` | 8 sub-parts |
| `alerts` | `default` | variants: `default`, `destructive` |
| `aspectRatios` | `default` | |
| `avatars` | `default`, `withStatus`, `group` | |
| `badges` | `default` | variants: `default`, `secondary`, `destructive`, `outline` |
| `breadcrumbs` | `default`, `withDropdown` | |
| `buttons` | `default`, `icon`, `loading` + legacy `primary`, `ghost` | 6 skin variants on each |
| `calendars` | `default`, `range`, `multiple` | |
| `cards` | `default`, `stat`, `profile`, `media`, `pricing`, `interactive` | |
| `carousels` | `default` | |
| `charts` | `default`, `bar`, `line`, `area`, `pie`, `radar` | SVG-rendered from `data` prop |
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
| `footers` | `default` | variants: `default`, `minimal`, `columns`, `newsletter`; 9 sub-parts |
| `forms` | `default` | |
| `headers` | `default` | variants: `default`, `minimal`, `full`, `sticky` |
| `headings` | `gradientH2` (legacy) | |
| `heroes` | `split`, `centered`, `withVideo`, `withGradient` + legacy `primary` | Shared `HeroTitle`/`HeroSubtitle`/`HeroActions`/`HeroEyebrow` parts |
| `hoverCards` | `default` | |
| `inputOtps` | `default` | |
| `inputs` | `default`, `email`, `password`, `search`, `number`, `file`, `date`, `withIcon`, `withPrefix`, `withSuffix` + legacy `rounded` | |
| `labels` | `default` | |
| `layouts` | `header`, `footer`, `main`, `nav`, `section`, `article` | thin semantic-tag wrappers |
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

For the full catalog with every sub-part, see [`packages/core/README.md`](packages/core/README.md) or inspect `LIBRARY_ENTRIES` at runtime.

### Design principles

- **Anchored, not freeform.** Every `use:` path is validated against the registry. Unknown paths warn at compile time.
- **Real behavior.** Interactive primitives (Dialog, Popover, Tooltip, Menu, Tabs, Select, Switch, etc.) wrap [Radix UI](https://www.radix-ui.com) for focus trap, keyboard navigation, scroll lock, and ARIA semantics.
- **Default styles.** `@getpromptui/ui/styles.css` ships ~70 KB of opinionated defaults plus dark mode. Override via CSS custom properties on `:root`.
- **Tailwind-friendly.** `@getpromptui/ui/tailwind` exposes tokens as theme extension.

---

## What v0.4 does and doesn't do

**Does:**

- Compiles `.promptui` files to React (typed `.tsx` with imports + props + state hooks) and Vue (full SFC with `<script setup>`).
- 109 anchored `use`-paths across 50+ component categories.
- Real Radix-backed behavior on 30+ interactive primitives.
- Default styles + Tailwind preset + Vite plugin + CLI watch mode.
- DSL features: `use`, `variant`, `each`, `if`, `{{expr}}`, `lock`/`ban`/`allow`, `bind`, `flow`.

**Doesn't (yet):**

- Computed/derived state, data fetching, business logic in DSL — keep it in your code.
- Vue Radix integration (Vue output is structural-only; Radix Vue parity is on the v0.5 list).
- Custom-still: Combobox, Calendar/DatePicker, Carousel, Sidebar, Form (use react-hook-form), Heroes, Cards (variants), Skeletons, Charts.

---

## Contributing

```bash
git clone https://github.com/MartinLilt/promptui
cd promptui
pnpm install
pnpm build
```

pnpm monorepo with packages under `packages/`. Open an issue before submitting a PR for non-trivial changes.

---

## Changelog

### 0.4.0–0.4.3 — Production-ready ("behavior arrives")

30+ interactive primitives now wrap **Radix UI** for real a11y and behavior. PromptUI is no longer just "structure + imports" — components actually work.

- **Stage 4a (0.4.0):** Dialog, Popover, Tooltip, TooltipRich.
- **Stage 4b (0.4.1):** AlertDialog, Sheet, Drawer, HoverCard.
- **Stage 4c (0.4.2):** DropdownMenu, ContextMenu, Menubar, NavigationMenu, Accordion, Collapsible, Tabs, TabVertical.
- **Stage 4d (0.4.3):** Select, Switch, Checkbox, RadioGroup, Slider, SliderRange, Toggle, ToggleGroup, ScrollArea, AspectRatio, Avatar, Label, Toast, Separator.

**Breaking** (composition shift to shadcn-style `<Root><Trigger/><Content/></Root>`): Dialog, AlertDialog, Sheet, Drawer, Popover, HoverCard, Tooltip. The DSL `use` paths and sub-part names are unchanged — only manual JSX usage needs updates.

Adds 25 `@radix-ui/*` deps as `dependencies` (not peer) so consumers don't need to install them manually.

### 0.3.0–0.3.1

- Wrapped React output: `--export Name` (or root `[Block:Name]`) → `export function Name()` with `useState` for `bind:`, `on<Flow>` props for `flow:`.
- `each: item in items` and `if: expr` directives. `{{expr}}` for expressions in `text:`.
- Default CSS (`@getpromptui/ui/styles.css`).
- Tailwind plugin at `@getpromptui/ui/tailwind`.
- CLI `--watch` + `--output`. Vite plugin at `@getpromptui/core/vite`.

### 0.2.x

- Library registry with 101 `use`-paths.
- `variant:` directive for skin variants.
- React emitter auto-imports from `@getpromptui/ui`.
- Vue emitter outputs full SFC.

### 0.1.0

Initial release — parser, resolver, React/Vue emitters, CLI, 6 legacy components.

---

## License

MIT © Martin Li. See [LICENSE](LICENSE).
