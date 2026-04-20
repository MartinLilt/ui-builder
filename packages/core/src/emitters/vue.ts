import { Block, Document } from '../types'

function singularize(word: string): string {
  if (word.endsWith('ies')) return word.slice(0, -3) + 'y'
  if (word.endsWith('oes')) return word.slice(0, -2)
  if (word.endsWith('ses') || word.endsWith('xes') || word.endsWith('ches') || word.endsWith('shes')) return word.slice(0, -2)
  if (word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1)
  return word
}

function useToComponentName(use: string): string {
  const parts = use.split('/').filter(Boolean)
  return parts
    .slice(Math.max(0, parts.length - 2))
    .map(p => { const s = singularize(p); return s.charAt(0).toUpperCase() + s.slice(1) })
    .join('')
}

function flowToHandler(flow: string): string {
  return flow.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
}

function lookToClass(look: string | undefined): string {
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
  const cls = lookToClass(look)

  const tag = use ? useToComponentName(use) : block.blockType

  const attrs: string[] = []
  if (cls) attrs.push(`class="${cls}"`)
  if (bind) attrs.push(`:modelValue="${bind}" @update:modelValue="${bind} = $event"`)
  if (flow) attrs.push(`@click="${flowToHandler(flow)}"`)

  const attrStr = attrs.length ? ' ' + attrs.join(' ') : ''

  if (block.children.length === 0 && !text) {
    return `${pad}<${tag}${attrStr} />`
  }

  const lines: string[] = []
  lines.push(`${pad}<${tag}${attrStr}>`)

  if (text) lines.push(`${childPad}${text}`)

  for (const child of block.children) {
    // named slots: child blockType becomes slot name (camelCase)
    const slotName = child.blockType.charAt(0).toLowerCase() + child.blockType.slice(1)
    lines.push(`${childPad}<template #${slotName}>`)
    lines.push(emitBlock(child, indent + 2))
    lines.push(`${childPad}</template>`)
  }

  lines.push(`${pad}</${tag}>`)
  return lines.join('\n')
}

export function emitVue(doc: Document): string {
  return doc.blocks.map(b => emitBlock(b, 0)).join('\n\n')
}