#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { compile } from './index'
import type { EmitTarget } from './types'

const args = process.argv.slice(2)

function printUsage(): void {
  console.log(`
Usage: promptui compile <file> [options]

Options:
  --target <react|vue>   Output target (default: react)
  --export <Name>        (React) Wrap output as \`export function <Name>()\`.
                         Falls back to root block's :Name, then bare fragment.
  --output, -o <file>    Write output to file instead of stdout.
  --watch, -w            Recompile on file change. Requires --output for a
                         clean loop (stdout works but is noisy on each save).
  --help                 Show this help
`.trim())
}

function flagValue(argList: string[], ...names: string[]): string | undefined {
  for (const name of names) {
    const i = argList.indexOf(name)
    if (i === -1) continue
    const next = argList[i + 1]
    if (next === undefined || next.startsWith('--') || next.startsWith('-')) continue
    return next
  }
  return undefined
}

function flagPresent(argList: string[], ...names: string[]): boolean {
  return names.some(n => argList.includes(n))
}

function runCompile(resolved: string, target: EmitTarget, exportName: string | undefined, outputPath: string | undefined): void {
  const source = fs.readFileSync(resolved, 'utf-8')
  const sourcePath = path.relative(process.cwd(), resolved)
  const { output, warnings } = compile(source, { target, exportName, sourcePath })
  if (warnings.length > 0) {
    for (const w of warnings) console.warn(`warn: ${w}`)
  }
  if (outputPath) {
    fs.writeFileSync(outputPath, output + '\n', 'utf-8')
    console.error(`[${new Date().toLocaleTimeString()}] wrote ${outputPath}`)
  } else {
    console.log(output)
  }
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
  const outputPath = flagValue(rest, '--output', '-o')
  const watch = flagPresent(rest, '--watch', '-w')

  const resolved = path.resolve(process.cwd(), filePath)
  const resolvedOutput = outputPath ? path.resolve(process.cwd(), outputPath) : undefined

  if (!fs.existsSync(resolved)) {
    console.error(`File not found: ${resolved}`)
    process.exit(1)
  }

  try {
    runCompile(resolved, target, exportName, resolvedOutput)
  } catch (err) {
    console.error(String(err))
    if (!watch) process.exit(1)
  }

  if (!watch) return

  console.error(`[${new Date().toLocaleTimeString()}] watching ${filePath}`)
  let pending: NodeJS.Timeout | null = null

  fs.watch(resolved, () => {
    if (pending) clearTimeout(pending)
    pending = setTimeout(() => {
      pending = null
      try {
        runCompile(resolved, target, exportName, resolvedOutput)
      } catch (err) {
        console.error(`[${new Date().toLocaleTimeString()}] error:`, String(err))
      }
    }, 50)
  })

  process.on('SIGINT', () => { console.error('\nstopping'); process.exit(0) })
}

run()