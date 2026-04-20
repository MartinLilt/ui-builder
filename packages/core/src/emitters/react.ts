import { Block, Document } from '../types'

function singularize(word: string): string {
  if (word.endsWith('ies')) return word.slice(0, -3) + 'y'
  if (word.endsWith('oes')) return word.slice(0, -2)   // heroes -> hero
  if (word.endsWith('ses') || word.endsWith('xes') || word.endsWith('ches') || word.endsWith('shes')) return word.slice(0, -2)
  if (word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1)
  return word
}

function useToComponentName(use: string): string {
  // library/heroes/primary -> HeroPrimary
  // library/buttons/ghost -> ButtonGhost
  const parts = use.split('/').filter(Boolean)
  return parts
    .slice(Math.max(0, parts.length - 2))
    .map(p => { const s = singularize(p); return s.charAt(0).toUpperCase() + s.slice(1) })
    .join('')
}

function lookToClassName(look: string | undefined): string {
  if (!look) return ''
  return look.split(/\s+/).filter(Boolean).join(' ')
}

function emitBlock(block: Block, indent: number): string {
  const pad = '  '.repeat(indent)
  const childPad = '  '.repeat(indent + 1)

  const use = block.directives.get('use')
  const text = block.directives.get('text')
  const flow = block.directives.get('flow')
  const bind = block.directives.get('bind')
  const look = block.directives.get('look')
  const className = lookToClassName(look)

  const componentName = use ? useToComponentName(use) : block.blockType

  const attrs: string[] = []
  if (className) attrs.push(`className="${className}"`)
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

function flowToHandler(flow: string): string {
  // open-waitlist -> openWaitlist
  return flow.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
}

export function emitReact(doc: Document): string {
  const blocks = doc.blocks.map(b => emitBlock(b, 0)).join('\n\n')
  return blocks
}