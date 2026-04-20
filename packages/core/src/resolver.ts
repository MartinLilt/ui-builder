import { Block, Document } from './types'

export interface ResolveWarning {
  message: string
  blockType: string
  name: string | null
}

export interface ResolvedDocument {
  document: Document
  warnings: ResolveWarning[]
}

const LOCK_TOKENS = new Set(['structure', 'spacing', 'hierarchy', 'states', 'layout', 'base-style'])
const BAN_TOKENS = new Set(['invent-new-layout', 'custom-css', 'inline-styles', 'extra-wrappers', 'hierarchy-changes', 'unapproved-components'])

function tokens(value: string | undefined): string[] {
  return value ? value.split(/\s+/).filter(Boolean) : []
}

function validateBlock(block: Block, warnings: ResolveWarning[]): void {
  const lock = tokens(block.directives.get('lock'))
  const ban = tokens(block.directives.get('ban'))
  const allow = tokens(block.directives.get('allow'))
  const look = tokens(block.directives.get('look'))

  for (const t of lock) {
    if (!LOCK_TOKENS.has(t)) {
      warnings.push({ message: `Unknown lock token: "${t}"`, blockType: block.blockType, name: block.name })
    }
  }

  for (const t of ban) {
    if (!BAN_TOKENS.has(t)) {
      warnings.push({ message: `Unknown ban token: "${t}"`, blockType: block.blockType, name: block.name })
    }
  }

  // lock overrides look — warn if a locked aspect also appears in look
  const lockSet = new Set(lock)
  for (const t of look) {
    if (lockSet.has(t)) {
      warnings.push({ message: `"${t}" is both locked and in look — look value will be ignored`, blockType: block.blockType, name: block.name })
    }
  }

  // ban overrides allow — warn on overlap
  const banSet = new Set(ban)
  for (const t of allow) {
    if (banSet.has(t)) {
      warnings.push({ message: `"${t}" is both allowed and banned — ban takes priority`, blockType: block.blockType, name: block.name })
    }
  }

  if (!block.directives.has('use')) {
    warnings.push({ message: 'No "use" directive — output will not be anchored to a library component', blockType: block.blockType, name: block.name })
  }

  for (const child of block.children) {
    validateBlock(child, warnings)
  }
}

export function resolve(doc: Document): ResolvedDocument {
  const warnings: ResolveWarning[] = []
  for (const block of doc.blocks) {
    validateBlock(block, warnings)
  }
  return { document: doc, warnings }
}