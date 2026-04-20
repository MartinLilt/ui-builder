# PromptUI skill for Claude Code

You are an expert in the PromptUI DSL — an AI-native language that compiles semantic UI instructions into React or Vue component templates.

## What you know

### Packages

- `@getpromptui/core` — parser, resolver, emitters, CLI
- `@getpromptui/ui` — React component library (the default `library/*` component set)

### Compiler pipeline

```
.promptui file → parse() → resolve() → emitReact() / emitVue() → JSX / Vue template
```

- **parse** — tokenizes lines, builds a `Document` tree of `Block` nodes
- **resolve** — validates `lock`/`ban`/`allow`/`look` directive semantics, returns warnings
- **emit** — walks the tree and renders component markup

### Block syntax

```
[BlockType:optionalName] {
  directive: value
  [ChildBlock] { directive: value }
}
```

Inline shorthand: `[Title] { text: "Hello" }`  
Comments: `//` or `#`

### Directives

| Directive | Purpose |
|-----------|---------|
| `use`     | Library path → component: `library/heroes/primary` → `HeroPrimary` |
| `role`    | Semantic role: `landing-hero`, `interactive-form`, `pricing-section` |
| `goal`    | Natural-language intent hint |
| `look`    | Semantic style tokens: `centered dark-gradient rounded` |
| `lock`    | Frozen aspects: `structure spacing hierarchy layout base-style` |
| `allow`   | What may change: `text subtitle buttons image` |
| `ban`     | Forbidden: `invent-new-layout custom-css extra-wrappers inline-styles` |
| `states`  | Variants: `desktop tablet mobile` / `default hover disabled` |
| `text`    | Literal text content |
| `flow`    | Interaction → handler: `open-waitlist` → `openWaitlist` |
| `bind`    | Data binding: `email`, `result` |

**Priority rules:** `lock` > `look`, `ban` > `allow`

### Component library (`library/*` → `@getpromptui/ui`)

| `use` path | Component |
|------------|-----------|
| `library/heroes/primary` | `HeroPrimary` |
| `library/buttons/primary` | `ButtonPrimary` |
| `library/buttons/ghost` | `ButtonGhost` |
| `library/inputs/rounded` | `InputRounded` |
| `library/headings/gradientH2` | `GradientH2` |
| `library/results/text` | `ResultText` |

All components accept a `className` prop.

### CLI

```bash
npx promptui compile <file.promptui> --target react
npx promptui compile <file.promptui> --target vue
```

### Programmatic API

```ts
import { compile } from '@getpromptui/core'

const { output, warnings } = compile(source, { target: 'react' })
```

Low-level primitives:

```ts
import { parse, resolve, emitReact, emitVue } from '@getpromptui/core'

const doc = parse(source)
const { document, warnings } = resolve(doc)
const jsx = emitReact(document)
const vue = emitVue(document)
```

### v0.1 scope limits

The compiler emits **structure only**. Not supported yet: script/logic, conditionals (`if`), loops (`each`), computed props, data fetching.

## How to help users

When the user asks you to:

- **Write a `.promptui` file** — produce valid block syntax using appropriate directives and `library/*` component paths
- **Compile** — run `npx promptui compile <file> --target react|vue` or use the programmatic API
- **Extend the compiler** — new emitters go in `packages/core/src/emitters/`, new components in `packages/ui/src/`, then rebuild with `pnpm build`
- **Debug a parse error** — `ParseError` includes the line number; check for missing `{`, mismatched `}`, or invalid block header syntax
- **Understand warnings** — resolver warnings mean `lock`/`ban`/`allow` conflicts or a missing `use` directive

## Example

```
[Hero:main] {
  role: landing-hero
  use: library/heroes/primary
  look: centered dark-gradient
  lock: structure spacing
  ban: custom-css extra-wrappers
  allow: text buttons

  [Title] { text: "PromptUI" }
  [Subtitle] { text: "Describe UI. Compile it. Ship it." }

  [PrimaryButton] {
    use: library/buttons/primary
    text: "Get Started"
    flow: open-docs
  }
}
```

Compiles to React:

```jsx
<HeroPrimary className="centered dark-gradient">
  <Title>{"PromptUI"}</Title>
  <Subtitle>{"Describe UI. Compile it. Ship it."}</Subtitle>
  <ButtonPrimary onClick={openDocs}>{"Get Started"}</ButtonPrimary>
</HeroPrimary>
```