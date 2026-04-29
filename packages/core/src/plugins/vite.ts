import path from 'node:path'
import { compile } from '../index'

export interface PromptUIViteOptions {
  /**
   * Force the exported component name for every `.promptui` module.
   * By default the plugin uses the root block's `:Name` if present,
   * otherwise the filename converted to PascalCase.
   */
  exportName?: string
  /**
   * Surface resolver warnings as Vite warnings (default: true). Warnings
   * are cheap; setting this to false silences them entirely.
   */
  logWarnings?: boolean
}

interface VitePluginLike {
  name: string
  enforce?: 'pre' | 'post'
  transform(code: string, id: string): { code: string; map: null } | null
  handleHotUpdate?(ctx: { file: string; server: { ws: { send(msg: unknown): void } } }): void
}

function pascalCaseFromFilename(p: string): string {
  const base = path.basename(p, '.promptui')
  return base
    .replace(/^[_.]/, '')
    .replace(/(?:^|[-_ ])([a-zA-Z0-9])/g, (_, c: string) => c.toUpperCase())
}

/**
 * Vite plugin that treats `.promptui` files as importable React modules.
 *
 *     // vite.config.ts
 *     import promptui from '@getpromptui/core/vite'
 *     export default defineConfig({ plugins: [promptui()] })
 *
 *     // then anywhere in your source:
 *     import Signup from './signup.promptui'
 *     <Signup onSubmitWaitlist={handler} />
 *
 * For TypeScript, add a declaration file (e.g. `src/promptui.d.ts`):
 *
 *     declare module '*.promptui' {
 *       const Component: React.ComponentType<any>
 *       export default Component
 *     }
 */
export default function promptui(options: PromptUIViteOptions = {}): VitePluginLike {
  const { exportName: forcedName, logWarnings = true } = options

  return {
    name: 'vite-plugin-promptui',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.promptui')) return null

      const name = forcedName ?? pascalCaseFromFilename(id)
      const sourcePath = path.relative(process.cwd(), id)
      const { output, warnings } = compile(code, { target: 'react', exportName: name, sourcePath })

      if (logWarnings && warnings.length > 0) {
        for (const w of warnings) console.warn(`[promptui] ${path.relative(process.cwd(), id)}: ${w}`)
      }

      // Re-export the generated component as default so `import X from './x.promptui'` works.
      const withDefault = `${output}\n\nexport default ${name}\n`

      return { code: withDefault, map: null }
    },
    handleHotUpdate(ctx) {
      if (ctx.file.endsWith('.promptui')) {
        ctx.server.ws.send({ type: 'full-reload' })
      }
    },
  }
}