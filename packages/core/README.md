# @getpromptui/core

[![npm](https://img.shields.io/npm/v/@getpromptui/core)](https://www.npmjs.com/package/@getpromptui/core)
[![license](https://img.shields.io/npm/l/@getpromptui/core)](https://github.com/MartinLilt/promptui/blob/main/LICENSE)

Preprocessor for the PromptUI DSL — compiles `.promptui` files into React or Vue templates with imports resolved against a component registry.

## Install

```bash
# CLI
npm install -g @getpromptui/core

# Programmatic
npm install @getpromptui/core
```

## Quick start

Create `hero.promptui`:

```
[Hero:main] {
  use: library/heroes/split

  [HeroSplitContent] {
    [HeroTitle]    { text: "Ship faster with PromptUI" }
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
  [HeroSplitVisual] { [Placeholder] { use: library/skeletons/card } }
}
```

Compile to React:

```bash
npx promptui compile hero.promptui --target react
```

Output (stdout):

```jsx
import { ButtonDefault, HeroActions, HeroSplit, HeroSplitContent, HeroSplitVisual, HeroSubtitle, HeroTitle, SkeletonCard } from '@getpromptui/ui'

<HeroSplit>
  <HeroSplitContent>
    <HeroTitle>{"Ship faster with PromptUI"}</HeroTitle>
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

Vue output is a full SFC (`<script setup lang="ts">` + `<template>`).

## Use with Claude Code

**This is the intended workflow.** PromptUI exists so an LLM can describe UI against a typed catalog instead of hallucinating markup. The repo ships with a Claude Code skill that teaches Claude the full DSL, the 101 registered `use`-paths, sub-part relationships, and the `variant:`-vs-new-file rule.

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

Claude emits a valid `.promptui`, `npx promptui compile` gives you production JSX with imports at the top. No prompt engineering, no guessed component names.

If you write `.promptui` by hand, the same CLI works. The skill is just how you get the value faster.

## Use with Vite

Drop `.promptui` files straight into your source tree — the plugin compiles them on import.

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import promptui from '@getpromptui/core/vite'

export default defineConfig({
  plugins: [react(), promptui()],
})
```

```ts
// src/promptui.d.ts — for TypeScript
declare module '*.promptui' {
  const Component: React.ComponentType<any>
  export default Component
}
```

Then anywhere in your code:

```tsx
import Signup from './signup.promptui'

<Signup onSubmitWaitlist={() => fetch('/api/waitlist', ...)} />
```

HMR reloads the page on `.promptui` save. No manual compile step.

## CLI

```bash
promptui compile <file.promptui> --target react
promptui compile <file.promptui> --target vue
promptui compile signup.promptui --export Signup -o src/Signup.tsx --watch
```

## Programmatic API

```ts
import { compile } from '@getpromptui/core'

const { output, warnings } = compile(source, { target: 'react' })
```

Low-level:

```ts
import { parse, resolve, emitReact, emitVue } from '@getpromptui/core'
```

Library introspection:

```ts
import { LIBRARY_ENTRIES, lookupByUse, isKnownComponent } from '@getpromptui/core'
```

## Directives

| Directive  | Purpose |
|------------|---------|
| `use`      | Library path → component. Validated against the registry. |
| `variant`  | Skin variant (e.g. `destructive`, `outline`). Valid only when the `use` entry declares variants. |
| `role`     | Semantic role hint. |
| `goal`     | Natural-language intent. |
| `look`     | Semantic style tokens → `className`. |
| `lock`     | Frozen aspects: `structure spacing hierarchy states layout base-style`. |
| `allow`    | What may change. |
| `ban`      | Forbidden behaviors. |
| `text`     | Literal text. |
| `flow`     | Interaction → handler (`open-docs` → `onClick={openDocs}`). |
| `bind`     | Controlled binding (`email` → `value={email} onChange={(v) => setEmail(v)}`). |

**Priority rules:** `lock` > `look`, `ban` > `allow`.

## Library registry

101 registered `use`-paths out of the box, mapped to components in [`@getpromptui/ui`](https://www.npmjs.com/package/@getpromptui/ui). The resolver warns on unknown paths; the emitter auto-imports main components + any sub-parts referenced as nested blocks.

See the [full catalog](https://github.com/MartinLilt/promptui#component-library) or `import { LIBRARY_ENTRIES } from '@getpromptui/core'`.

## Scope limits (v0.2)

The compiler emits **structure + imports** only. Not supported: conditionals, loops, computed props, state management, data fetching.

## Changelog

### 0.4.0

Version-aligned with `@getpromptui/ui@0.4.x`, the production-ready release. No core API changes — every component referenced via `use:` paths now ships with real Radix-backed behavior in `@getpromptui/ui`.

### 0.3.1

- `--watch` / `-w` flag on CLI (recompile on file change).
- `--output <file>` / `-o <file>` flag (write to file instead of stdout).
- **Vite plugin** at `@getpromptui/core/vite`. Drop into `vite.config.ts` and `import Component from './file.promptui'` works — the plugin compiles, wraps as React component, adds default export, and HMR-reloads on save.

### 0.3.0

- **Wrapped React output.** `--export <Name>` CLI flag (or root `[Block:Name]`) wraps output as `export function Name()` with auto-declared `useState` hooks for `bind:` values and an `on<Flow>?: () => void` props interface derived from `flow:` values. Without a name, emits a bare JSX fragment (back-compat).
- **`each:` directive.** `each: item in items` wraps a block in `{items.map((item, index) => ...)}` (React) or `v-for="(item, index) in items"` (Vue). Auto-adds the collection to the component's Props as `unknown[]`.
- **`if:` directive.** `if: hasError` wraps a block in `{hasError && (...)}` (React) or `v-if` (Vue). Expression is emitted verbatim.
- **Expressions in `text:`.** `text: {{user.name}}` emits as JSX expression / Vue mustache; literals without `{{}}` stay as strings.
- **Vue SFC output.** Continues to emit full `.vue` with `<script setup lang="ts">` + `<template>`.

### 0.2.2

Docs-only: promoted the Claude Code skill to a top-level section (this is the intended workflow). No code changes.

### 0.2.1

Metadata-only: repository/homepage/bugs URLs updated to `MartinLilt/promptui` after GitHub rename. No code changes.

### 0.2.0

- Library registry: 101 `use`-paths, shared via `LIBRARY_ENTRIES`.
- New `variant:` directive for skin variations.
- React emitter: collects and emits `import { ... } from '@getpromptui/ui'` at the top.
- Vue emitter: emits a full SFC with `<script setup>` imports. **Breaking:** no more per-child `<template #slot>` wrapping (fixes broken output for compound components).
- Resolver: validates `use` paths and `variant:` values against the registry.

### 0.1.0

Initial release — parser, resolver, React/Vue emitters, CLI.

## License

MIT © Martin Li