import { Block, Document } from './types'
import { lookupByUse, isKnownComponent } from './library'

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

  const useValue = block.directives.get('use')
  const entry = useValue ? lookupByUse(useValue) : undefined
  if (!useValue) {
    // Child blocks may reference library sub-parts by blockType (e.g. [AccordionItem]) — those are fine.
    // Only warn at the root level where a missing `use` means output won't resolve to a real component.
    if (!isKnownComponent(block.blockType)) {
      warnings.push({ message: 'No "use" directive — output will not be anchored to a library component', blockType: block.blockType, name: block.name })
    }
  } else if (!entry) {
    warnings.push({ message: `Unknown library path: "${useValue}"`, blockType: block.blockType, name: block.name })
  }

  const eachStr = block.directives.get('each')
  if (eachStr !== undefined && !/^\s*[a-zA-Z_][a-zA-Z0-9_]*\s+in\s+.+\s*$/.test(eachStr)) {
    warnings.push({ message: `"each" must be of the form "<var> in <collection>", got: "${eachStr}"`, blockType: block.blockType, name: block.name })
  }

  const variant = block.directives.get('variant')
  if (variant !== undefined) {
    if (!entry) {
      warnings.push({ message: `"variant" directive requires a valid "use" — ignored`, blockType: block.blockType, name: block.name })
    } else if (!entry.variants) {
      warnings.push({ message: `Library entry "${entry.use}" does not declare variants — "variant: ${variant}" ignored`, blockType: block.blockType, name: block.name })
    } else if (!entry.variants.includes(variant)) {
      warnings.push({ message: `Unknown variant "${variant}" for "${entry.use}". Allowed: ${entry.variants.join(', ')}`, blockType: block.blockType, name: block.name })
    }
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