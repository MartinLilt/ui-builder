import { LIBRARY_ENTRIES, type LibraryEntry } from '@getpromptui/core'
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'src', 'generated')

const SKIP_AUTO = new Set<string>([
  'library/calendars/default',
  'library/calendars/range',
  'library/calendars/multiple',
  'library/datePickers/default',
  'library/datePickers/range',
  'library/datePickers/multiple',
  'library/charts/default',
  'library/charts/bar',
  'library/charts/line',
  'library/charts/area',
  'library/charts/pie',
  'library/charts/radar',
  'library/dataTables/default',
  'library/forms/default',
  'library/sidebars/default',
  'library/resizables/default',
  'library/carousels/default',
  'library/sonners/default',
  'library/commands/default',
  'library/inputOtps/default',
  'library/sliders/default',
  'library/sliders/range',
  'library/progresses/default',
  'library/progresses/circular',
  'library/progresses/stepped',
  'library/heroes/primary',
  'library/results/text',
  'library/accordions/default',
  'library/tabs/default',
  'library/tabs/vertical',
  'library/collapsibles/default',
  'library/popovers/default',
  'library/hoverCards/default',
  'library/tooltips/default',
  'library/tooltips/rich',
  'library/contextMenus/default',
  'library/dropdownMenus/default',
  'library/menubars/default',
  'library/navigationMenus/default',
  'library/navigationMenus/mobile',
  'library/navigationMenus/mega',
  'library/alertDialogs/default',
  'library/drawers/default',
  'library/sheets/default',
  'library/selects/default',
  'library/radioGroups/default',
  'library/toggleGroups/default',
  'library/toasts/default',
  'library/scrollAreas/default',
])

const VARIANTS_NOT_ON_MAIN = new Set<string>(['library/dialogs/default'])

const EXTRA_PROPS_MAIN: Record<string, string> = {
  ButtonIcon: ' aria-label="Action"',
}

const EXTRA_PROPS_PART: Record<string, string> = {
  ButtonIcon: ' aria-label="Action"',
  AlertDialogCancel: '',
  AlertDialogAction: '',
  HeroWithVideoBg: ' src=""',
  AccordionItem: ' value="item-1"',
  AvatarGroupOverflow: ' count={3}',
  RadioGroupItem: ' value="option-1"',
  SelectItem: ' value="option-1"',
  TabTrigger: ' value="tab-1"',
  TabContent: ' value="tab-1"',
  ToastAction: ' altText="Action"',
  ToggleGroupItem: ' value="option-1"',
}

// Stories where layout should not be 'centered' (compound stories tend to need width).
const FULL_LAYOUT = new Set<string>([
  'library/cards/default',
  'library/cards/stat',
  'library/cards/profile',
  'library/cards/media',
  'library/cards/pricing',
  'library/cards/interactive',
  'library/heroes/split',
  'library/heroes/centered',
  'library/heroes/withVideo',
  'library/heroes/withGradient',
  'library/breadcrumbs/default',
  'library/breadcrumbs/withDropdown',
  'library/navigationMenus/default',
  'library/navigationMenus/mobile',
  'library/navigationMenus/mega',
  'library/menubars/default',
  'library/tabs/default',
  'library/tabs/vertical',
  'library/accordions/default',
  'library/paginations/default',
  'library/paginations/withPageSize',
  'library/separators/default',
  'library/separators/withLabel',
  'library/scrollAreas/default',
])

const BLOCK_DISPLAY_PARTS = new Set<string>([
  'CardHeader',
  'CardContent',
  'CardFooter',
  'CardMediaImage',
  'CardProfileAvatar',
  'CardProfileActions',
  'CardPricingHeader',
  'CardPricingFeatures',
  'CardPricingCta',
  'HeroSplitContent',
  'HeroSplitVisual',
  'HeroActions',
  'HeroEyebrow',
  'AlertDialogHeader',
  'AlertDialogFooter',
  'DialogHeader',
  'DialogFooter',
  'DrawerHeader',
  'DrawerFooter',
  'SheetHeader',
  'SheetFooter',
  'AccordionItem',
  'TabContent',
  'TabPanel',
])

// Parts to skip entirely when auto-rendering (need real data we can't fake).
const SKIP_PARTS = new Set<string>([
  'AspectRatioImage',
  'AvatarImage',
  'CardMediaImage',
  'HeroWithVideoBg',
  'CardProfileAvatar',
  'AvatarStatusDot',
])

function pascalCategory(use: string): string {
  const seg = use.split('/')[1] ?? 'Misc'
  return seg.charAt(0).toUpperCase() + seg.slice(1)
}

function variantSegment(use: string): string {
  const seg = use.split('/')[2] ?? 'default'
  return seg.charAt(0).toUpperCase() + seg.slice(1)
}

function fileNameFor(entry: LibraryEntry): string {
  return `${entry.main}.stories.tsx`
}

function categoryDir(entry: LibraryEntry): string {
  return entry.use.split('/')[1] ?? 'misc'
}

function singleAtomChildren(main: string): string {
  if (/Button/.test(main)) {
    if (/Icon/.test(main)) return `<span aria-hidden="true">★</span>`
    return `'Click me'`
  }
  if (/Badge/.test(main)) return `'Badge'`
  if (/Label/.test(main)) return `'Email address'`
  if (/Toggle/.test(main)) return `'Bold'`
  if (/Tooltip/.test(main)) return `'Tooltip text'`
  if (/AspectRatio/.test(main)) {
    return `<div style={{ width: '100%', height: '100%', background: '#e5e7eb' }} />`
  }
  if (/Skeleton/.test(main)) return `null`
  if (/Separator/.test(main)) return `null`
  return `'Sample content'`
}

function partChildren(part: string): string | null {
  if (SKIP_PARTS.has(part)) return null
  if (/Separator/.test(part)) return null
  if (/Ellipsis/.test(part)) return null
  if (/Indicator|Dot|Slot/.test(part)) return null

  if (/Title|Name/.test(part)) return `'Card title'`
  if (/Description|Bio/.test(part)) return `'A short supporting description for context.'`
  if (/Label/.test(part)) return `'Label'`
  if (/Eyebrow/.test(part)) return `'Eyebrow'`
  if (/Cta/.test(part)) return `'Get started'`
  if (/Cancel|Close/.test(part)) return `'Cancel'`
  if (/Action(?!s$)/.test(part)) return `'Continue'`
  if (/Trigger/.test(part)) return `'Open'`
  if (/Link/.test(part)) return `'Home'`
  if (/Page$/.test(part)) return `'Current page'`
  if (/Item/.test(part)) return `'Menu item'`
  if (/Group/.test(part)) return `null`
  if (/Footer/.test(part)) return `'Footer text'`
  if (/Header/.test(part)) return `null`
  if (/Content/.test(part)) return `'Content goes here.'`
  if (/Role$/.test(part)) return `'Software engineer'`
  if (/Price/.test(part)) return `'$19/mo'`
  if (/Value$/.test(part)) return `'1,234'`
  if (/Trend/.test(part)) return `'+12%'`
  if (/Features$|Feature$/.test(part)) return `'Unlimited components'`
  if (/Overflow/.test(part)) return `'+3'`
  if (/Fallback/.test(part)) return `'JD'`
  if (/Bg/.test(part)) return null
  return `'Text'`
}

function takesChildrenAtom(main: string): boolean {
  if (/Skeleton/.test(main)) return false
  if (/Separator/.test(main)) return false
  if (/Avatar(Image|Fallback)?$/.test(main)) return /Fallback|Default|WithStatus/.test(main)
  if (/Switch|Checkbox|Radio(?!Group)/.test(main)) return false
  if (/Input(?!Otp)/.test(main)) return false
  if (/Textarea/.test(main)) return false
  return true
}

function importLine(entry: LibraryEntry): string {
  const all = [entry.main, ...entry.parts.filter((p) => !SKIP_PARTS.has(p))]
  return `import { ${all.join(', ')} } from '@getpromptui/ui'`
}

function renderPart(part: string, indent: string): string {
  if (SKIP_PARTS.has(part)) return ''
  const extra = EXTRA_PROPS_PART[part] ?? ''
  const block = BLOCK_DISPLAY_PARTS.has(part) ? '\n' + indent : ''
  const children = partChildren(part)
  if (children === null) {
    return `${indent}<${part}${extra} />`
  }
  if (children === `null`) {
    return `${indent}<${part}${extra} />`
  }
  return `${indent}<${part}${extra}>{${children}}</${part}>${block}`
}

function renderCompound(entry: LibraryEntry, indent: string): string {
  const renderable = entry.parts.filter((p) => !SKIP_PARTS.has(p))
  const inner = renderable.map((p) => renderPart(p, indent + '  ')).filter(Boolean).join('\n')
  const extraMain = EXTRA_PROPS_MAIN[entry.main] ?? ''
  return `<${entry.main}${extraMain}>\n${inner}\n${indent}</${entry.main}>`
}

function renderAtom(entry: LibraryEntry): string {
  const extra = EXTRA_PROPS_MAIN[entry.main] ?? ''
  if (takesChildrenAtom(entry.main)) {
    return `<${entry.main}${extra}>{${singleAtomChildren(entry.main)}}</${entry.main}>`
  }
  return `<${entry.main}${extra} />`
}

function renderDefault(entry: LibraryEntry, indent: string): string {
  if (entry.parts.length > 0) return renderCompound(entry, indent)
  return renderAtom(entry)
}

function variantsBlock(entry: LibraryEntry): string {
  if (!entry.variants?.length) return ''
  if (VARIANTS_NOT_ON_MAIN.has(entry.use)) return ''
  if (entry.parts.length > 0) return ''
  const extra = EXTRA_PROPS_MAIN[entry.main] ?? ''
  const items = entry.variants
    .map((v) => {
      if (takesChildrenAtom(entry.main)) {
        return `      <${entry.main}${extra} variant="${v}">{'${v}'}</${entry.main}>`
      }
      return `      <${entry.main}${extra} variant="${v}" />`
    })
    .join('\n')
  return `

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
${items}
    </div>
  ),
}`
}

function storyContents(entry: LibraryEntry): string {
  const cat = pascalCategory(entry.use)
  const variant = variantSegment(entry.use)
  const title = `Generated/${cat}/${variant}`
  const layout = FULL_LAYOUT.has(entry.use) ? 'padded' : 'centered'
  const inv = renderDefault(entry, '    ')

  return `import type { Meta, StoryObj } from '@storybook/react'
${importLine(entry)}

const meta: Meta<typeof ${entry.main}> = {
  title: '${title}',
  component: ${entry.main},
  parameters: { layout: '${layout}' },
}

export default meta
type Story = StoryObj<typeof ${entry.main}>

export const Default: Story = {
  render: () => (
    ${inv}
  ),
}${variantsBlock(entry)}
`
}

function stubContents(entry: LibraryEntry, reason: string): string {
  const cat = pascalCategory(entry.use)
  const variant = variantSegment(entry.use)
  const title = `Generated/${cat}/${variant}`
  return `import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: '${title}',
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div style={{ padding: '1rem', color: '#888', fontFamily: 'system-ui' }}>
      ${reason}
    </div>
  ),
}
`
}

function main() {
  if (existsSync(OUT_DIR)) {
    rmSync(OUT_DIR, { recursive: true, force: true })
  }
  mkdirSync(OUT_DIR, { recursive: true })

  let written = 0
  let stubbed = 0

  for (const entry of LIBRARY_ENTRIES) {
    const dir = join(OUT_DIR, categoryDir(entry))
    mkdirSync(dir, { recursive: true })
    const file = join(dir, fileNameFor(entry))

    let contents: string
    if (SKIP_AUTO.has(entry.use)) {
      contents = stubContents(
        entry,
        `Composition required — see manual stories for ${entry.main}.`,
      )
      stubbed++
    } else {
      contents = storyContents(entry)
      written++
    }
    writeFileSync(file, contents)
  }

  console.log(`generated: ${written} auto + ${stubbed} stub = ${written + stubbed} stories`)
}

main()