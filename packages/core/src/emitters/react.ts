import { Block, Document } from '../types'
import { lookupByUse, isKnownComponent, packageForComponent } from '../library'

function lookToClassName(look: string | undefined): string {
  if (!look) return ''
  return look.split(/\s+/).filter(Boolean).join(' ')
}

function flowToHandler(flow: string): string {
  return flow.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
}

function componentNameFor(block: Block): string {
  const use = block.directives.get('use')
  if (use) {
    const entry = lookupByUse(use)
    if (entry) return entry.main
  }
  // Sub-part or unresolved block: fall back to blockType
  return block.blockType
}

function collectUsedComponents(block: Block, used: Set<string>): void {
  const name = componentNameFor(block)
  if (isKnownComponent(name)) used.add(name)
  for (const child of block.children) collectUsedComponents(child, used)
}

function emitBlock(block: Block, indent: number): string {
  const pad = '  '.repeat(indent)
  const childPad = '  '.repeat(indent + 1)

  const text = block.directives.get('text')
  const flow = block.directives.get('flow')
  const bind = block.directives.get('bind')
  const look = block.directives.get('look')
  const variant = block.directives.get('variant')
  const className = lookToClassName(look)

  const componentName = componentNameFor(block)

  const attrs: string[] = []
  if (className) attrs.push(`className="${className}"`)
  if (variant) attrs.push(`variant="${variant}"`)
  if (bind) attrs.push(`value={${bind}} onChange={(v) => set${bind.charAt(0).toUpperCase() + bind.slice(1)}(v)}`)
  if (flow) attrs.push(`onClick={${flowToHandler(flow)}}`)

  const attrStr = attrs.length ? ' ' + attrs.join(' ') : ''

  if (block.children.length === 0 && !text) {
    return `${pad}<${componentName}${attrStr} />`
  }

  const lines: string[] = []
  lines.push(`${pad}<${componentName}${attrStr}>`)

  if (text) lines.push(`${childPad}{${JSON.stringify(text)}}`)

  for (const child of block.children) {
    lines.push(emitBlock(child, indent + 1))
  }

  lines.push(`${pad}</${componentName}>`)
  return lines.join('\n')
}

function groupImportsByPackage(components: Set<string>): Map<string, string[]> {
  const byPkg = new Map<string, string[]>()
  for (const name of components) {
    const pkg = packageForComponent(name)
    if (!pkg) continue
    const arr = byPkg.get(pkg)
    if (arr) arr.push(name)
    else byPkg.set(pkg, [name])
  }
  for (const [, names] of byPkg) names.sort()
  return byPkg
}

function emitImports(components: Set<string>): string {
  const byPkg = groupImportsByPackage(components)
  if (byPkg.size === 0) return ''
  const lines: string[] = []
  for (const [pkg, names] of [...byPkg].sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`import { ${names.join(', ')} } from '${pkg}'`)
  }
  return lines.join('\n')
}

export function emitReact(doc: Document): string {
  const used = new Set<string>()
  for (const block of doc.blocks) collectUsedComponents(block, used)

  const imports = emitImports(used)
  const body = doc.blocks.map(b => emitBlock(b, 0)).join('\n\n')

  return imports ? `${imports}\n\n${body}` : body
}