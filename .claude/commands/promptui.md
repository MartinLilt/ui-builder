# PromptUI skill for Claude Code

You are an expert in the PromptUI DSL — an AI-native language that compiles semantic UI instructions into React or Vue component templates.

## What you know

### Packages

- `@getpromptui/core` — parser, resolver, emitters, CLI, library registry
- `@getpromptui/ui` — React component library (the default `library/*` component set)

### Compiler pipeline

```
.promptui file → parse() → resolve() → emitReact() / emitVue() → JSX / Vue SFC
```

- **parse** — tokenizes lines, builds a `Document` tree of `Block` nodes
- **resolve** — validates `use` paths against the library registry, validates `lock`/`ban`/`allow` tokens, validates `variant:` against registered variants, returns warnings
- **emit** — walks the tree; collects all components used; emits a single `import { ... } from '@getpromptui/ui'` block at the top; renders component markup with attrs derived from directives

### Block syntax

```
[BlockType:optionalName] {
  directive: value
  [ChildBlock] { directive: value }
}
```

- Inline shorthand (single-directive only): `[Title] { text: "Hello" }`
- Comments: `//` or `#`
- Nested blocks inside an inline block are **not** supported — use multi-line form

### Directives

| Directive  | Purpose |
|------------|---------|
| `use`      | Library path → component: `library/heroes/split` → `HeroSplit`. Validated against registry. |
| `variant`  | Skin variant (e.g. `destructive`, `outline`). Only valid when the `use` entry declares `variants`. Emitted as `variant="..."` prop. |
| `role`     | Semantic role: `landing-hero`, `interactive-form`, `pricing-section` |
| `goal`     | Natural-language intent hint for AI/review |
| `look`     | Semantic style tokens: `centered dark-gradient rounded`. Emitted as `className`. |
| `lock`     | Frozen aspects: `structure spacing hierarchy states layout base-style` |
| `allow`    | What may change: `text subtitle buttons image badge icon binding` |
| `ban`      | Forbidden: `invent-new-layout custom-css inline-styles extra-wrappers hierarchy-changes unapproved-components` |
| `states`   | Descriptive variants: `desktop tablet mobile` / `default hover disabled` |
| `text`     | Literal text content |
| `flow`     | Interaction → handler: `open-waitlist` → `onClick={openWaitlist}` |
| `bind`     | Data binding: `email` → `value={email} onChange={(v) => setEmail(v)}` |

**Priority rules:** `lock` > `look`, `ban` > `allow`

### `variant:` vs new file — the rule

- **Same markup, different skin** → use `variant:` on the existing `use` path.
- **Different markup, structure, or HTML element** → pick a different `use` path (e.g. `library/inputs/password` vs `library/inputs/search`).

Example: `[Button] { use: library/buttons/default  variant: destructive }` — correct.
Counter-example: writing `variant: "with-icon"` on a regular input is wrong — use `library/inputs/withIcon` instead.

### Sub-parts

Compound components expose sub-parts (see catalog below). Reference them as nested blocks **without** `use` — the resolver recognizes them by `blockType` and the emitter imports them automatically:

```
[Section] {
  use: library/cards/default
  [CardHeader] {
    [CardTitle] { text: "Pricing" }
  }
  [CardContent] { ... }
}
```

This resolves to:

```jsx
import { CardContent, CardDefault, CardHeader, CardTitle } from '@getpromptui/ui'

<CardDefault>
  <CardHeader>
    <CardTitle>{"Pricing"}</CardTitle>
  </CardHeader>
  <CardContent>...</CardContent>
</CardDefault>
```

### CLI

```bash
npx promptui compile <file.promptui> --target react
npx promptui compile <file.promptui> --target vue
```

### Programmatic API

```ts
import { compile, LIBRARY_ENTRIES, lookupByUse } from '@getpromptui/core'

const { output, warnings } = compile(source, { target: 'react' })
```

Low-level primitives:

```ts
import { parse, resolve, emitReact, emitVue } from '@getpromptui/core'
```

### v0.1 scope limits

The compiler emits **structure + imports** only. Not supported: script/logic, conditionals (`if`), loops (`each`), computed props, data fetching, state management.

## Component library catalog

101 `use`-paths registered. All import from `@getpromptui/ui`.

### `accordions/`
- `library/accordions/default` → `AccordionDefault` · variants: `default`, `bordered`, `separated`  
  Parts: `AccordionItem`, `AccordionTrigger`, `AccordionContent`

### `alertDialogs/`
- `library/alertDialogs/default` → `AlertDialogDefault`  
  Parts: `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogHeader`, `AlertDialogFooter`, `AlertDialogTitle`, `AlertDialogDescription`, `AlertDialogAction`, `AlertDialogCancel`

### `alerts/`
- `library/alerts/default` → `AlertDefault` · variants: `default`, `destructive`  
  Parts: `AlertTitle`, `AlertDescription`

### `aspectRatios/`
- `library/aspectRatios/default` → `AspectRatioDefault`

### `avatars/`
- `library/avatars/default` → `AvatarDefault` · Parts: `AvatarImage`, `AvatarFallback`
- `library/avatars/withStatus` → `AvatarWithStatus` · Parts: `AvatarImage`, `AvatarFallback`, `AvatarStatusDot`
- `library/avatars/group` → `AvatarGroup` · Parts: `AvatarDefault`, `AvatarImage`, `AvatarFallback`, `AvatarGroupOverflow`

### `badges/`
- `library/badges/default` → `BadgeDefault` · variants: `default`, `secondary`, `destructive`, `outline`

### `breadcrumbs/`
- `library/breadcrumbs/default` → `BreadcrumbDefault`  
  Parts: `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbPage`, `BreadcrumbSeparator`, `BreadcrumbEllipsis`
- `library/breadcrumbs/withDropdown` → `BreadcrumbWithDropdown`  
  Parts: same as default + `BreadcrumbDropdown`, `BreadcrumbDropdownTrigger`, `BreadcrumbDropdownContent`

### `buttons/`
- `library/buttons/default` → `ButtonDefault` · variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- `library/buttons/icon` → `ButtonIcon` · same 6 variants (TS-required `aria-label`)
- `library/buttons/loading` → `ButtonLoading` · same 6 variants (`loading` + `spinner` slot)
- Legacy: `library/buttons/primary` → `ButtonPrimary`, `library/buttons/ghost` → `ButtonGhost`

### `calendars/`
- `library/calendars/default` → `CalendarDefault`
- `library/calendars/range` → `CalendarRange` (value: `{from?, to?}`, emits `onDayClick`)
- `library/calendars/multiple` → `CalendarMultiple` (value: `Date[]`)

### `cards/`
- `library/cards/default` → `CardDefault` · Parts: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- `library/cards/stat` → `CardStat` · Parts: `CardStatLabel`, `CardStatValue`, `CardStatTrend`, `CardStatDescription`
- `library/cards/profile` → `CardProfile` · Parts: `CardProfileAvatar`, `CardProfileName`, `CardProfileRole`, `CardProfileBio`, `CardProfileActions`
- `library/cards/media` → `CardMedia` · Parts: `CardMediaImage` + all default card parts; prop `mediaPosition: 'top' | 'bottom'`
- `library/cards/pricing` → `CardPricing` · Parts: `CardPricingHeader`, `CardPricingName`, `CardPricingPrice`, `CardPricingFeatures`, `CardPricingFeature`, `CardPricingCta`; prop `featured`
- `library/cards/interactive` → `CardInteractive` · polymorphic `<a>` if `href`, else `<button>`; reuses default card parts

### `carousels/`
- `library/carousels/default` → `CarouselDefault`  
  Parts: `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`

### `charts/`
- `library/charts/default` → `ChartDefault` (wrapper; consumer supplies content)
- `library/charts/bar` → `ChartBar` (accepts `data: ChartDatum[]`)
- `library/charts/line` → `ChartLine` (accepts `data: ChartDatum[]`)
- `library/charts/area` → `ChartArea` (accepts `data: ChartDatum[]`)
- `library/charts/pie` → `ChartPie` (accepts `data: ChartDatum[]`; `innerRadius: 0..0.95` for donut)
- `library/charts/radar` → `ChartRadar` (accepts `{ axis, value }[]`)

### `checkboxes/`
- `library/checkboxes/default` → `CheckboxDefault`

### `collapsibles/`
- `library/collapsibles/default` → `CollapsibleDefault` · Parts: `CollapsibleTrigger`, `CollapsibleContent`

### `comboboxes/`
- `library/comboboxes/default` → `ComboboxDefault` (single value)
- `library/comboboxes/multi` → `ComboboxMulti` (`value: string[]`)

### `commands/`
- `library/commands/default` → `CommandDefault`  
  Parts: `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, `CommandSeparator`

### `contextMenus/`
- `library/contextMenus/default` → `ContextMenuDefault`  
  Parts: `ContextMenuTrigger`, `ContextMenuContent`, `ContextMenuItem`, `ContextMenuSeparator`, `ContextMenuLabel`, `ContextMenuGroup`

### `dataTables/`
- `library/dataTables/default` → `DataTableDefault` (generic, takes `columns` + `data`)

### `datePickers/`
- `library/datePickers/default` → `DatePickerDefault`
- `library/datePickers/range` → `DatePickerRange`
- `library/datePickers/multiple` → `DatePickerMultiple`

### `dialogs/`
- `library/dialogs/default` → `DialogDefault` · variants: `default`, `fullscreen`, `compact`  
  Parts: `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogFooter`, `DialogTitle`, `DialogDescription`, `DialogClose`

### `drawers/`
- `library/drawers/default` → `DrawerDefault` (`side: 'top' | 'bottom' | 'left' | 'right'`)  
  Parts: `DrawerTrigger`, `DrawerContent`, `DrawerHeader`, `DrawerFooter`, `DrawerTitle`, `DrawerDescription`, `DrawerClose`

### `dropdownMenus/`
- `library/dropdownMenus/default` → `DropdownMenuDefault`  
  Parts: `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuLabel`, `DropdownMenuSeparator`, `DropdownMenuGroup`, `DropdownMenuCheckboxItem`

### `forms/`
- `library/forms/default` → `FormDefault` · Parts: `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`

### `headings/`
- `library/headings/gradientH2` → `GradientH2` (legacy)

### `heroes/`
- `library/heroes/primary` → `HeroPrimary` (legacy; takes `title`/`subtitle`/`primaryAction`/`secondaryAction` as props)
- `library/heroes/split` → `HeroSplit` · Parts: `HeroSplitContent`, `HeroSplitVisual`, `HeroTitle`, `HeroSubtitle`, `HeroActions`, `HeroEyebrow`
- `library/heroes/centered` → `HeroCentered` · Parts: `HeroTitle`, `HeroSubtitle`, `HeroActions`, `HeroEyebrow`
- `library/heroes/withVideo` → `HeroWithVideo` · Parts: `HeroWithVideoBg`, `HeroWithVideoOverlay`, `HeroWithVideoContent`, `HeroTitle`, `HeroSubtitle`, `HeroActions`, `HeroEyebrow`
- `library/heroes/withGradient` → `HeroWithGradient` · Parts: `HeroTitle`, `HeroSubtitle`, `HeroActions`, `HeroEyebrow`; prop `preset: 'sunset' | 'ocean' | 'forest' | 'midnight' | 'custom'`

### `hoverCards/`
- `library/hoverCards/default` → `HoverCardDefault` · Parts: `HoverCardTrigger`, `HoverCardContent`

### `inputOtps/`
- `library/inputOtps/default` → `InputOtpDefault` · Parts: `InputOtpGroup`, `InputOtpSlot`, `InputOtpSeparator`

### `inputs/`
- `library/inputs/default` → `InputDefault` (type text)
- `library/inputs/email` → `InputEmail`
- `library/inputs/password` → `InputPassword`
- `library/inputs/search` → `InputSearch`
- `library/inputs/number` → `InputNumber` (emits `number | null`)
- `library/inputs/file` → `InputFile` (`onFilesChange: (files: FileList | null) => void`)
- `library/inputs/date` → `InputDate`
- `library/inputs/withIcon` → `InputWithIcon` (slot for icon, `iconPosition: 'left' | 'right'`)
- `library/inputs/withPrefix` → `InputWithPrefix` (slot for prefix element)
- `library/inputs/withSuffix` → `InputWithSuffix` (slot for suffix element)
- Legacy: `library/inputs/rounded` → `InputRounded`

### `labels/`
- `library/labels/default` → `LabelDefault`

### `menubars/`
- `library/menubars/default` → `MenubarDefault` · Parts: `MenubarMenu`, `MenubarTrigger`, `MenubarContent`, `MenubarItem`, `MenubarSeparator`

### `navigationMenus/`
- `library/navigationMenus/default` → `NavigationMenuDefault` · Parts: `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent`, `NavigationMenuLink`
- `library/navigationMenus/mobile` → `NavigationMenuMobile` · Parts: `NavigationMenuMobileTrigger`, `NavigationMenuMobileDrawer`, `NavigationMenuMobileClose` + `NavigationMenuList/Item/Link`
- `library/navigationMenus/mega` → `NavigationMenuMega` · Parts: `NavigationMenuMegaContent`, `NavigationMenuMegaColumns`, `NavigationMenuMegaColumn`, `NavigationMenuMegaGroup`, `NavigationMenuMegaGroupTitle` + shared nav parts

### `paginations/`
- `library/paginations/default` → `PaginationDefault` · variants: `default`, `compact`  
  Parts: `PaginationContent`, `PaginationItem`, `PaginationLink`, `PaginationPrevious`, `PaginationNext`, `PaginationEllipsis`
- `library/paginations/withPageSize` → `PaginationWithPageSize`  
  Parts: default pagination parts + `PaginationPageSize`, `PaginationPageSizeLabel`, `PaginationPageSizeSelect`

### `popovers/`
- `library/popovers/default` → `PopoverDefault` · Parts: `PopoverTrigger`, `PopoverContent`

### `progresses/`
- `library/progresses/default` → `ProgressDefault` (linear)
- `library/progresses/circular` → `ProgressCircular` (SVG ring, `showValue`)
- `library/progresses/stepped` → `ProgressStepped` (N steps, `labels[]`)

### `radioGroups/`
- `library/radioGroups/default` → `RadioGroupDefault` · Parts: `RadioGroupItem`

### `resizables/`
- `library/resizables/default` → `ResizableDefault` · Parts: `ResizablePanel`, `ResizableHandle`

### `results/`
- `library/results/text` → `ResultText` (legacy)

### `scrollAreas/`
- `library/scrollAreas/default` → `ScrollAreaDefault` · Parts: `ScrollAreaViewport`, `ScrollBar`

### `selects/`
- `library/selects/default` → `SelectDefault` · Parts: `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`, `SelectGroup`, `SelectLabel`, `SelectSeparator`

### `separators/`
- `library/separators/default` → `SeparatorDefault` · variants: `default`, `dashed`, `dotted`; orientation prop `horizontal | vertical`
- `library/separators/withLabel` → `SeparatorWithLabel` (`align: 'start' | 'center' | 'end'`)

### `sheets/`
- `library/sheets/default` → `SheetDefault` (`side: 'top' | 'bottom' | 'left' | 'right'`)  
  Parts: `SheetTrigger`, `SheetContent`, `SheetHeader`, `SheetFooter`, `SheetTitle`, `SheetDescription`, `SheetClose`

### `sidebars/`
- `library/sidebars/default` → `SidebarDefault` (`side: 'left' | 'right'`, `variant: 'sidebar' | 'floating' | 'inset'`, `collapsed`)  
  Parts: `SidebarHeader`, `SidebarContent`, `SidebarFooter`, `SidebarGroup`, `SidebarGroupLabel`, `SidebarMenu`, `SidebarMenuItem`, `SidebarMenuButton`, `SidebarTrigger`

### `skeletons/`
- `library/skeletons/default` → `SkeletonDefault`
- `library/skeletons/text` → `SkeletonText` (N lines, `lastLineWidth`)
- `library/skeletons/circle` → `SkeletonCircle` (avatar placeholder)
- `library/skeletons/card` → `SkeletonCard` (media bar + lines)

### `sliders/`
- `library/sliders/default` → `SliderDefault` (single thumb)
- `library/sliders/range` → `SliderRange` (`value: [from, to]`)

### `sonners/`
- `library/sonners/default` → `SonnerDefault` (`position: 'top-left' | 'top-center' | ... | 'bottom-right'`)

### `switches/`
- `library/switches/default` → `SwitchDefault`

### `tables/`
- `library/tables/default` → `TableDefault` · Parts: `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell`, `TableCaption`

### `tabs/`
- `library/tabs/default` → `TabDefault` · variants: `default`, `pills`, `boxed` · Parts: `TabList`, `TabTrigger`, `TabContent`
- `library/tabs/vertical` → `TabVertical` · Parts: `TabVerticalList`, `TabVerticalPanels`, `TabTrigger`, `TabContent`

### `textareas/`
- `library/textareas/default` → `TextareaDefault`

### `toasts/`
- `library/toasts/default` → `ToastDefault` · variants: `default`, `destructive`  
  Parts: `ToastAction`, `ToastClose`, `ToastTitle`, `ToastDescription`, `ToastViewport`

### `toggles/`
- `library/toggles/default` → `ToggleDefault`

### `toggleGroups/`
- `library/toggleGroups/default` → `ToggleGroupDefault` · Parts: `ToggleGroupItem`

### `tooltips/`
- `library/tooltips/default` → `TooltipDefault` · Parts: `TooltipTrigger`, `TooltipContent`, `TooltipProvider`
- `library/tooltips/rich` → `TooltipRich` · Parts: `TooltipRichTrigger`, `TooltipRichContent`, `TooltipRichTitle`, `TooltipRichDescription`, `TooltipRichActions`

## How to help users

When the user asks you to:

- **Write a `.promptui` file** — produce valid block syntax. Pick the most specific `use` path (e.g. `library/inputs/password`, not `library/inputs/default` + `type="password"`). Use sub-parts as nested blocks. Use `variant:` only when the entry declares variants.
- **Compile** — run `npx promptui compile <file> --target react|vue` or use the programmatic `compile(source, { target })`.
- **Extend the compiler** — new emitters in `packages/core/src/emitters/`, new components in `packages/ui/src/{category}/{Variant}.tsx`. Add an entry to `packages/core/src/library.ts` and re-export from `packages/ui/src/index.ts`. Rebuild with `pnpm build`.
- **Debug a parse error** — `ParseError` includes the line number; check for missing `{`, mismatched `}`, invalid block header, or inline blocks with nested blocks (not supported).
- **Understand a warning** — resolver warns on: unknown `use` path, unknown `lock`/`ban` token, conflicting `lock`/`look` or `ban`/`allow`, unknown `variant:` value, `variant:` without a valid `use`.

## Examples

### Landing hero with CTA

```
[Hero:main] {
  role: landing-hero
  use: library/heroes/split
  lock: structure spacing
  allow: text buttons

  [HeroSplitContent] {
    [HeroEyebrow]  { text: "Now in beta" }
    [HeroTitle]    { text: "Ship faster with PromptUI" }
    [HeroSubtitle] { text: "AI-native DSL for frontend templates." }
    [HeroActions] {
      [CTA:get] {
        use: library/buttons/default
        text: "Get started"
        flow: open-docs
      }
      [CTA:docs] {
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

### Signup card with error state

```
[Section:signup] {
  use: library/cards/default
  role: signup-card
  allow: text buttons

  [CardHeader] {
    [CardTitle]       { text: "Join the waitlist" }
    [CardDescription] { text: "Ping me when it ships." }
  }
  [CardContent] {
    [Email] { use: library/inputs/email  bind: email }
    [Err] {
      use: library/alerts/default
      variant: destructive
      [AlertTitle]       { text: "Invalid email" }
      [AlertDescription] { text: "Please provide a valid address." }
    }
  }
  [CardFooter] {
    [Submit] {
      use: library/buttons/loading
      text: "Notify me"
      flow: submit-waitlist
    }
  }
}
```

### Dashboard with metrics + chart

```
[Dashboard] {
  use: library/cards/stat
  [CardStatLabel]       { text: "MRR" }
  [CardStatValue]       { text: "$45,231" }
  [CardStatTrend]       { text: "+12.4%" }
  [CardStatDescription] { text: "vs. last month" }
}

[Chart] {
  use: library/charts/bar
  goal: "Monthly revenue over last 6 months"
}
```

### Vertical tabs

```
[Tabs] {
  use: library/tabs/vertical

  [TabVerticalList] {
    [TabTrigger] { text: "Account" }
    [TabTrigger] { text: "Billing" }
    [TabTrigger] { text: "API" }
  }
  [TabVerticalPanels] {
    [TabContent] { text: "Account settings" }
  }
}
```

Each example above compiles cleanly to both React and Vue with imports collected at the top. No warnings if directives and `use` paths are used correctly.