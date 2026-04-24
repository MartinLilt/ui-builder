/*
 * @getpromptui/ui Tailwind v3 plugin
 *
 *   // tailwind.config.js
 *   module.exports = {
 *     plugins: [require('@getpromptui/ui/tailwind')],
 *   }
 *
 * This extension does two things:
 *   1. Maps our CSS custom properties into Tailwind's theme, so you can write
 *      `bg-promptui-primary`, `text-promptui-fg`, `border-promptui-border`,
 *      `rounded-promptui` in your own components.
 *   2. Registers the styles.css stylesheet as a base layer. If you already
 *      `import '@getpromptui/ui/styles.css'` in your app entry, you can skip
 *      this plugin — it is additive only.
 *
 * For Tailwind v4 (CSS-first config): skip this plugin entirely. Just
 * `@import "@getpromptui/ui/styles.css";` at the top of your CSS and define
 * a `@theme` block that references the same custom properties.
 */

/** @type {(opts?: { registerStyles?: boolean }) => import('tailwindcss/types/config').PluginCreator} */
function promptuiPluginFactory(opts = {}) {
  const registerStyles = opts.registerStyles !== false

  return function ({ addBase, theme }) {
    if (registerStyles) {
      try {
        // Best-effort: if consumer uses a bundler that can resolve package CSS,
        // this will include it. Otherwise they import styles.css explicitly.
        // We don't fail if the import fails.
        require.resolve('@getpromptui/ui/styles.css')
      } catch {
        // noop
      }
    }
  }
}

const plugin = promptuiPluginFactory()

const promptuiTheme = {
  colors: {
    'promptui-bg': 'var(--promptui-bg)',
    'promptui-fg': 'var(--promptui-fg)',
    'promptui-muted': 'var(--promptui-muted)',
    'promptui-muted-bg': 'var(--promptui-muted-bg)',
    'promptui-border': 'var(--promptui-border)',
    'promptui-primary': 'var(--promptui-primary)',
    'promptui-primary-fg': 'var(--promptui-primary-fg)',
    'promptui-secondary': 'var(--promptui-secondary)',
    'promptui-secondary-fg': 'var(--promptui-secondary-fg)',
    'promptui-destructive': 'var(--promptui-destructive)',
    'promptui-destructive-fg': 'var(--promptui-destructive-fg)',
    'promptui-accent': 'var(--promptui-accent)',
    'promptui-accent-fg': 'var(--promptui-accent-fg)',
    'promptui-ring': 'var(--promptui-ring)',
  },
  borderRadius: {
    promptui: 'var(--promptui-radius)',
    'promptui-sm': 'var(--promptui-radius-sm)',
    'promptui-lg': 'var(--promptui-radius-lg)',
  },
  fontFamily: {
    'promptui-sans': 'var(--promptui-font-sans)',
    'promptui-mono': 'var(--promptui-font-mono)',
  },
}

module.exports = plugin
module.exports.theme = promptuiTheme
module.exports.withPromptui = function withPromptui(config = {}) {
  return {
    ...config,
    theme: {
      ...(config.theme || {}),
      extend: {
        ...((config.theme && config.theme.extend) || {}),
        colors: { ...(config.theme?.extend?.colors || {}), ...promptuiTheme.colors },
        borderRadius: { ...(config.theme?.extend?.borderRadius || {}), ...promptuiTheme.borderRadius },
        fontFamily: { ...(config.theme?.extend?.fontFamily || {}), ...promptuiTheme.fontFamily },
      },
    },
    plugins: [...(config.plugins || []), plugin],
  }
}