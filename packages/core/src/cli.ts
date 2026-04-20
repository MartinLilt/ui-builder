#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { compile } from './index'
import type { EmitTarget } from './types'

const args = process.argv.slice(2)

function printUsage(): void {
  console.log(`
Usage: promptui compile <file> [--target react|vue]

Options:
  --target   Output target: react (default) or vue
  --help     Show this help
`.trim())
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

  const targetIdx = rest.indexOf('--target')
  const target: EmitTarget = targetIdx !== -1 && rest[targetIdx + 1] === 'vue' ? 'vue' : 'react'

  const resolved = path.resolve(process.cwd(), filePath)

  if (!fs.existsSync(resolved)) {
    console.error(`File not found: ${resolved}`)
    process.exit(1)
  }

  const source = fs.readFileSync(resolved, 'utf-8')

  try {
    const { output, warnings } = compile(source, { target })
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