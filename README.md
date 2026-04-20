# PromptUI Preprocessor

**PromptUI** is an AI-native DSL that compiles strict semantic UI instructions into real component-based frontend templates.

Instead of asking AI to generate arbitrary markup, you write a PromptUI block that references an existing component, declares what can change, what must stay fixed, and what actions are wired. The preprocessor resolves those instructions into Vue, Nuxt, or React output.

```txt
[Hero:main] {
  role: landing-hero
  goal: show Vacancy Mirror as AI market intelligence platform for Upwork freelancers

  use: library/heroes/primary
  look: centered dark-gradient cyberpunk-glow
  lock: structure spacing hierarchy

  allow: text subtitle buttons
  ban: invent-new-layout custom-css extra-wrappers
  states: desktop tablet mobile

  [Title] { text: "Vacancy Mirror" }

  [Subtitle] {
    text: "Track Upwork trends automatically and adapt your profile before the market changes"
  }

  [PrimaryButton] {
    use: library/buttons/primary
    text: "Join Waitlist"
    flow: open-waitlist
  }

  [SecondaryButton] {
    use: library/buttons/ghost
    text: "Watch Demo"
    flow: open-demo
  }
}
```

---

## Why

Coding models handle backend logic, APIs, and data flows well. UI generation is where they break — they invent wrappers, drift from design system constraints, hallucinate Tailwind classes, and break spacing. PromptUI replaces freeform UI generation with instruction-based assembly: reference an existing pattern, declare constraints, let the preprocessor emit clean output.

---

## Syntax

A PromptUI document is a tree of **blocks** and **items**. Every block has a type, an optional name, and a set of directives.

### Block header

```txt
[BlockType:name]
```

`BlockType` is the semantic type (`Hero`, `Calculator`, `Pricing`). `name` is a local instance identifier.

### Directives

| Directive | Purpose |
|-----------|---------|
| `role`    | Semantic role of the block (`landing-hero`, `interactive-form`) |
| `goal`    | Natural-language intent — acts as an embedded mini-prompt |
| `use`     | Reference component or pattern (`library/heroes/primary`) |
| `look`    | Visual recipe as semantic tokens (`centered dark-gradient cyberpunk-glow`) |
| `lock`    | What must not change (`structure spacing hierarchy`) |
| `allow`   | What may be changed (`text subtitle buttons`) |
| `ban`     | Explicitly forbidden behaviors (`invent-new-layout custom-css extra-wrappers`) |
| `states`  | Supported responsive or interaction variants (`desktop tablet mobile`) |
| `text`    | Literal content |
| `flow`    | Interaction intent, mapped to handlers by compiler (`open-waitlist`) |
| `bind`    | Data binding target (`num1`, `email`, `result`) |

### Priority rules

1. `lock` overrides `look`
2. `ban` overrides `allow`
3. Nested item overrides are valid only if they don't violate parent `lock` and `ban`
4. If no child `use` is given, compiler assumes slot substitution into the parent reference
5. `look` values are semantic tokens, not raw CSS

---

## Example: Calculator

```txt
[Calculator:main] {
  role: interactive-form
  goal: render calculator section using strict library references only

  use: library/sections/calc
  look: bg-light-gray rounded shadow
  lock: structure spacing hierarchy

  allow: text inputs buttons result
  ban: invent-new-layout custom-css extra-wrappers
  states: desktop tablet mobile

  [Title] {
    use: library/headings/gradientH2
    text: "Calculator"
  }

  [Input:num1] {
    use: library/inputs/rounded
    bind: num1
    look: inline focus-blue-ring
    states: default focused error
  }

  [Input:num2] {
    use: library/inputs/rounded
    bind: num2
    look: inline focus-blue-ring
    states: default focused error
  }

  [PrimaryButton] {
    use: library/buttons/primary
    text: "Calculate"
    flow: calculate
    states: default hover disabled
    look: hover-darker hover-scale
  }

  [Result:output] {
    use: library/results/text
    bind: result
    look: large bold
  }
}
```

---

## Compilation model

Three stages:

1. **Parse** — PromptUI block → internal AST
2. **Resolve** — resolve `use` references, validate `lock`/`ban`/`allow` constraints, place child items
3. **Emit** — output target template (Nuxt 3, Vue SFC, React JSX, or abstract component tree)

### Example output (Vue/Nuxt)

```vue
<HeroPrimary>
  <template #title>Vacancy Mirror</template>
  <template #subtitle>
    Track Upwork trends automatically and adapt your profile before the market changes
  </template>
  <template #primaryAction>
    <PrimaryButton @click="openWaitlist">Join Waitlist</PrimaryButton>
  </template>
  <template #secondaryAction>
    <GhostButton @click="openDemo">Watch Demo</GhostButton>
  </template>
</HeroPrimary>
```

---

## MVP scope

**In scope:** block definitions, nested items, library references, text content, visual recipes (`look`), action bindings (`flow`), data bindings (`bind`), allowed/forbidden change declarations, responsive state declarations.

**Out of scope (v1):** script generation, TypeScript logic, automatic data fetching, full expression language, conditional rendering, loops, computed props, state machines.

PromptUI v1 describes template assembly intent only — it does not execute logic.

---

## Project structure

```txt
/promptui
  /spec
    syntax.md
    directives.md
    examples.md
  /library-map
    heroes.json
    buttons.json
    inputs.json
  /compiler
    parser.ts
    resolver.ts
    emit-vue.ts
    emit-react.ts
  /examples
    hero.promptui
    calculator.promptui
/vault
  Home.md
  spec/
  decisions/
  research/
```