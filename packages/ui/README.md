# @getpromptui/ui

[![npm](https://img.shields.io/npm/v/@getpromptui/ui)](https://www.npmjs.com/package/@getpromptui/ui)
[![license](https://img.shields.io/npm/l/@getpromptui/ui)](https://github.com/MartinLilt/promptui/blob/main/LICENSE)

React component library for the PromptUI preprocessor. Provides the default `library/*` components that [`@getpromptui/core`](https://www.npmjs.com/package/@getpromptui/core) resolves `use` paths against.

## Design

- **Thin wrappers.** Semantic HTML + `promptui-*` class hooks + controlled props. No Radix, no CVA, no Tailwind, no internal state (with rare pragmatic exceptions for SVG charts).
- **Consumer styles.** Components expose class names; you supply CSS. Works with Tailwind, CSS Modules, or any design system.
- **A11y-minded structure.** Semantic tags, `role`/`aria-*` where appropriate. Behavior (focus trap, keyboard nav) is the consumer's responsibility.

## Install

```bash
npm install @getpromptui/ui
```

Peer dependencies: `react >= 18`, `react-dom >= 18`.

## Use directly

```tsx
import { CardDefault, CardHeader, CardTitle, CardContent, ButtonDefault } from '@getpromptui/ui'

export function Example() {
  return (
    <CardDefault>
      <CardHeader>
        <CardTitle>Pricing</CardTitle>
      </CardHeader>
      <CardContent>
        <ButtonDefault variant="destructive">Delete</ButtonDefault>
      </CardContent>
    </CardDefault>
  )
}
```

## Use via the PromptUI preprocessor

Write a `.promptui` file:

```
[Section] {
  use: library/cards/default
  [CardHeader] { [CardTitle] { text: "Pricing" } }
  [CardContent] {
    [Delete] {
      use: library/buttons/default
      variant: destructive
      text: "Delete"
    }
  }
}
```

Compile with `promptui compile <file>`. See [`@getpromptui/core`](https://www.npmjs.com/package/@getpromptui/core).

## Use with Claude Code

The intended workflow is: Claude Code generates `.promptui` files against a typed catalog, the preprocessor compiles them into JSX that imports from this package. Install the skill to let Claude use the library without guessing component names:

```bash
mkdir -p .claude/commands
curl -o .claude/commands/promptui.md \
  https://raw.githubusercontent.com/MartinLilt/promptui/main/.claude/commands/promptui.md
```

Then `/promptui` in Claude Code teaches Claude all 101 `use`-paths, sub-parts, and variants shipped by this package.

## Component catalog

50+ categories, 101 total entries across defaults and structural variants. Highlights:

- **Forms** — Input (default, email, password, search, number, file, date, withIcon, withPrefix, withSuffix, rounded), Textarea, Checkbox, Switch, Slider, Range slider, RadioGroup, Label, Form, InputOtp.
- **Buttons** — ButtonDefault (6 skin variants), ButtonIcon, ButtonLoading, legacy ButtonPrimary/ButtonGhost.
- **Layout** — Card (default, stat, profile, media, pricing, interactive), Hero (primary, split, centered, withVideo, withGradient), AspectRatio, ScrollArea, Resizable, Separator (+ withLabel), Sidebar.
- **Navigation** — Tabs (default, vertical), Breadcrumb (+ withDropdown), NavigationMenu (default, mobile, mega), Pagination (+ withPageSize), Menubar.
- **Overlay** — Dialog (3 variants), AlertDialog, Drawer, Sheet, Popover, HoverCard, Tooltip (+ rich), ContextMenu, DropdownMenu, Command, Combobox (default, multi).
- **Feedback** — Alert, Badge, Toast, Sonner, Skeleton (default, text, circle, card), Progress (default, circular, stepped).
- **Data** — DataTable, Table, Calendar (default, range, multiple), DatePicker (default, range, multiple), Avatar (default, withStatus, group), Chart (default, bar, line, area, pie, radar).
- **Disclosure** — Accordion (3 variants), Collapsible, Carousel.
- **Other** — Toggle, ToggleGroup, Select.

For the full list with sub-parts, see the [catalog on GitHub](https://github.com/MartinLilt/promptui#component-library) or inspect `LIBRARY_ENTRIES` from `@getpromptui/core`.

## Changelog

### 0.4.1

Stage 4b — four more overlays now backed by Radix:

- `AlertDialogDefault` → `@radix-ui/react-alert-dialog`. Confirmation pattern with focus on cancel by default. New `AlertDialogContent` portals + overlays.
- `SheetDefault` / `DrawerDefault` — both built on `@radix-ui/react-dialog` with side-aware slide-in animation. `side` prop moved from root to `*Content`.
- `HoverCardDefault` → `@radix-ui/react-hover-card`. Hover-only trigger (no click), `openDelay` / `closeDelay` props.

Adds: `@radix-ui/react-alert-dialog`, `@radix-ui/react-hover-card` (^1.1).

CSS: `promptui-slide-in-{right,left,top,bottom}` keyframes drive Sheet/Drawer panel entrance based on `data-side`.

### 0.4.0

**Behavior arrives.** Three overlay components now wrap Radix UI primitives for real a11y and interaction. Breaking: composition moved to shadcn-style `<Root><Trigger/><Content/></Root>`.

- `DialogDefault` → `@radix-ui/react-dialog`. Focus trap, escape-to-close, scroll-lock, portal rendering, aria attributes — all handled. New sub-part `DialogContent` wraps Radix Portal + Overlay + Content. `variant: default | fullscreen | compact` moved from DialogDefault to DialogContent.
- `PopoverDefault` → `@radix-ui/react-popover`. Click-outside dismiss, keyboard nav, Floating UI positioning. `PopoverContent` now supports `align` / `sideOffset`.
- `TooltipDefault` + `TooltipRich` → `@radix-ui/react-tooltip`. Hover/focus delays, proper keyboard support, portal.
- `TooltipProvider` is now real — wrap your app root with it for shared `delayDuration`.
- Animations: `promptui-dialog-overlay` fade, dialog content scale/translate, popover/tooltip float-in.

Migration: existing `<DialogDefault open><DialogTitle/></DialogDefault>` becomes `<DialogDefault open><DialogContent><DialogTitle/></DialogContent></DialogDefault>`.

### 0.3.0

- **Ships default CSS.** `import '@getpromptui/ui/styles.css'` and every component renders with decent defaults — tokens on `:root`, 68 KB / 589 selectors covering all 101 registered `use`-paths. Dark mode via `[data-theme="dark"]` or `prefers-color-scheme`.
- **Tailwind integration.** `@getpromptui/ui/tailwind` plugin exposes tokens as theme extension (`bg-promptui-primary`, `rounded-promptui`, etc.). `withPromptui(config)` helper to wrap an existing Tailwind config. For Tailwind v4, just `@import` the CSS.
- **Component additions** (from 0.2.x, documented here for completeness): 46 files covering input variants, card variants, hero variants, skeleton variants, charts, progress circular/stepped, range sliders/multi-selects, avatars with status, tooltips rich, pagination with page size, breadcrumb with dropdown, navigation mobile/mega. See [`LIBRARY_ENTRIES`](https://www.npmjs.com/package/@getpromptui/core) for the full catalog.

### 0.2.2

Docs-only: added a "Use with Claude Code" section linking to the skill. No code changes.

### 0.2.1

Metadata-only: repository/homepage/bugs URLs updated to `MartinLilt/promptui` after GitHub rename. No code changes.

### 0.2.0

- 46 new component files: Input variants (9), Button Icon+Loading, Card variants (5), Hero variants (4) + shared parts, Skeleton variants (3), Tab Vertical, Progress Circular+Stepped, Chart Bar/Line/Area/Pie/Radar, Slider Range, Combobox Multi, Calendar Range+Multiple, DatePicker Range+Multiple, Avatar WithStatus+Group, Tooltip Rich, Pagination WithPageSize, Breadcrumb WithDropdown, Separator WithLabel, NavigationMenu Mobile+Mega.
- `variant` prop added to Button, Badge, Alert, Toast, Tab, Accordion, Dialog, Separator, Pagination.
- `promptui-*` class hooks on every component for CSS targeting.

### 0.1.0

Initial release — 6 legacy components: HeroPrimary, ButtonPrimary, ButtonGhost, InputRounded, GradientH2, ResultText.

## License

MIT © Martin Li