#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { compile } from './index'
import type { EmitTarget } from './types'

const args = process.argv.slice(2)

function printUsage(): void {
  console.log(`
Usage: promptui compile <file> [--target react|vue] [--export <Name>]

Options:
  --target   Output target: react (default) or vue
  --export   (React only) Wrap output as \`export function <Name>(...)\`.
             When omitted, falls back to the root block's :Name, then to a
             bare JSX fragment.
  --help     Show this help
`.trim())
}

function flagValue(argList: string[], name: string): string | undefined {
  const i = argList.indexOf(name)
  if (i === -1) return undefined
  const next = argList[i + 1]
  if (next === undefined || next.startsWith('--')) return undefined
  return next
}

function run(): void {
  if (args.includes('--help') || args.length === 0) {
    printUsage()
    process.exit(0)
  }

  const [command, filePath, ...rest] = args

  if (command !== 'compile') {
    console.error(`Unknown command: ${command}`)
    printUsage()
    process.exit(1)
  }

  if (!filePath) {
    console.error('No file provided.')
    printUsage()
    process.exit(1)
  }

  const targetValue = flagValue(rest, '--target')
  const target: EmitTarget = targetValue === 'vue' ? 'vue' : 'react'
  const exportName = flagValue(rest, '--export')

  const resolved = path.resolve(process.cwd(), filePath)

  if (!fs.existsSync(resolved)) {
    console.error(`File not found: ${resolved}`)
    process.exit(1)
  }

  const source = fs.readFileSync(resolved, 'utf-8')

  try {
    const { output, warnings } = compile(source, { target, exportName })
    if (warnings.length > 0) {
      for (const w of warnings) console.warn(`warn: ${w}`)
    }
    console.log(output)
  } catch (err) {
    console.error(String(err))
    process.exit(1)
  }
}

run()