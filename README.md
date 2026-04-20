# PromptUI

[![npm](https://img.shields.io/npm/v/@promptui/core)](https://www.npmjs.com/package/@promptui/core)
[![license](https://img.shields.io/github/license/martinli/promptui)](LICENSE)

**An AI-native DSL that compiles semantic UI instructions into component-based frontend templates.**

PromptUI lets you describe UI using strict, constraint-driven blocks instead of freeform markup. You reference an existing component, declare what can change and what must stay fixed, and the preprocessor emits clean React or Vue output. No hallucinated wrappers, no invented CSS, no layout drift.

---

## Packages

| Package | Description |
|---------|-------------|
| [`@promptui/core`](packages/core) | Parser, resolver, emitters, and CLI |
| [`@promptui/ui`](packages/ui) | React component library — the default component set |

---

## Install

```bash
# CLI
npm install -g @promptui/core

# Programmatic API
npm install @promptui/core

# Component library (React)
npm install @promptui/ui
```

---

## Quick start

Create a file `hero.promptui`:

```
[Hero:main] {
  role: landing-hero
  goal: present the product as an AI market intelligence tool

  use: library/heroes/primary
  look: centered dark-gradient
  lock: structure spacing hierarchy

  allow: text subtitle buttons
  ban: invent-new-layout custom-css extra-wrappers
  states: desktop tablet mobile

  [Title] { text: "PromptUI" }

  [Subtitle] {
    text: "Describe UI. Compile it. Ship it."
  }

  [PrimaryButton] {
    use: library/buttons/primary
    text: "Get Started"
    flow: open-docs
  }

  [SecondaryButton] {
    use: library/buttons/ghost
    text: "View on GitHub"
    flow: open-github
  }
}
```

Compile to React:

```bash
promptui compile hero.promptui --target react
```

Output:

```jsx
<HeroPrimary className="centered dark-gradient">
  <Title>{"PromptUI"}</Title>
  <Subtitle>{"Describe UI. Compile it. Ship it."}</Subtitle>
  <ButtonPrimary onClick={openDocs}>{"Get Started"}</ButtonPrimary>
  <ButtonGhost onClick={openGithub}>{"View on GitHub"}</ButtonGhost>
</HeroPrimary>
```

Or compile to Vue:

```bash
promptui compile hero.promptui --target vue
```

---

## Programmatic API

```ts
import { compile } from '@promptui/core'
import { readFileSync } from 'node:fs'

const source = readFileSync('hero.promptui', 'utf-8')
const { output, warnings } = compile(source, { target: 'react' })

console.log(output)
warnings.forEach(w => console.warn(w))
```

You can also use the lower-level primitives directly:

```ts
import { parse, resolve, emitReact, emitVue } from '@promptui/core'

const doc = parse(source)
const { document, warnings } = resolve(doc)
const jsx = emitReact(document)
const vue = emitVue(document)
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

| Directive | Purpose |
|-----------|---------|
| `role`    | Semantic role: `landing-hero`, `interactive-form`, `pricing-section` |
| `goal`    | Natural-language intent, used as a hint for AI-assisted workflows |
| `use`     | Library reference: `library/heroes/primary`, `library/buttons/ghost` |
| `look`    | Semantic style tokens: `centered dark-gradient rounded` |
| `lock`    | What must not change: `structure spacing hierarchy layout` |
| `allow`   | What may be changed: `text subtitle buttons image` |
| `ban`     | Explicitly forbidden: `invent-new-layout custom-css extra-wrappers` |
| `states`  | Supported variants: `desktop tablet mobile` / `default hover disabled` |
| `text`    | Literal text content |
| `flow`    | Interaction intent mapped to a handler: `open-waitlist`, `submit-form` |
| `bind`    | Data binding target: `email`, `result` |

### Priority rules

- `lock` overrides `look`
- `ban` overrides `allow`
- Child overrides are valid only if they don't violate parent `lock` and `ban`
- `look` tokens are semantic — they are not emitted as raw CSS classes

---

## Component library (`@promptui/ui`)

The `use` directive references components by path. `library/*` maps to `@promptui/ui` by default.

| Path | Component |
|------|-----------|
| `library/heroes/primary` | `HeroPrimary` |
| `library/buttons/primary` | `ButtonPrimary` |
| `library/buttons/ghost` | `ButtonGhost` |
| `library/inputs/rounded` | `InputRounded` |
| `library/headings/gradientH2` | `GradientH2` |
| `library/results/text` | `ResultText` |

All components accept a `className` prop for custom styling.

---

## What v1 does not do

PromptUI v1 compiles **template structure only**. The following are out of scope:

- Script / TypeScript logic generation
- Conditional rendering (`if`, `v-if`)
- Loops (`v-for`, `map`)
- Computed props or state machines
- Automatic data fetching
- Full expression language

---

## Contributing

Contributions are welcome. Please open an issue before submitting a PR for non-trivial changes.

```bash
git clone https://github.com/martinli/promptui
cd promptui
pnpm install
pnpm build
```

This is a pnpm monorepo. Each package lives in `packages/`.

---

## License

MIT © Martin Li. See [LICENSE](LICENSE).