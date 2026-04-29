import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf8'))
const versionTs = readFileSync(join(__dirname, '..', 'src', 'version.ts'), 'utf8')

const m = versionTs.match(/VERSION\s*=\s*'([^']+)'/)
if (!m) {
  console.error('check-version: could not parse VERSION from src/version.ts')
  process.exit(1)
}

if (m[1] !== pkg.version) {
  console.error(
    `check-version: mismatch — package.json says ${pkg.version}, src/version.ts says ${m[1]}.\n` +
    `Bump both before publishing.`,
  )
  process.exit(1)
}