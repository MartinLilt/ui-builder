export { parse, ParseError } from './parser'
export { resolve } from './resolver'
export { emitReact } from './emitters/react'
export { emitVue } from './emitters/vue'
export type { Block, Document, CompileOptions, CompileResult, EmitTarget } from './types'
export type { ResolvedDocument, ResolveWarning } from './resolver'

import { parse } from './parser'
import { resolve } from './resolver'
import { emitReact } from './emitters/react'
import { emitVue } from './emitters/vue'
import type { CompileOptions, CompileResult } from './types'

export function compile(source: string, options: CompileOptions): CompileResult {
  const doc = parse(source)
  const { document, warnings } = resolve(doc)

  const output = options.target === 'vue'
    ? emitVue(document)
    : emitReact(document)

  return {
    output,
    warnings: warnings.map(w => `[${w.blockType}${w.name ? ':' + w.name : ''}] ${w.message}`),
  }
}