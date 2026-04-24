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

### 0.2.0

- 46 new component files: Input variants (9), Button Icon+Loading, Card variants (5), Hero variants (4) + shared parts, Skeleton variants (3), Tab Vertical, Progress Circular+Stepped, Chart Bar/Line/Area/Pie/Radar, Slider Range, Combobox Multi, Calendar Range+Multiple, DatePicker Range+Multiple, Avatar WithStatus+Group, Tooltip Rich, Pagination WithPageSize, Breadcrumb WithDropdown, Separator WithLabel, NavigationMenu Mobile+Mega.
- `variant` prop added to Button, Badge, Alert, Toast, Tab, Accordion, Dialog, Separator, Pagination.
- `promptui-*` class hooks on every component for CSS targeting.

### 0.1.0

Initial release — 6 legacy components: HeroPrimary, ButtonPrimary, ButtonGhost, InputRounded, GradientH2, ResultText.

## License

MIT © Martin Li