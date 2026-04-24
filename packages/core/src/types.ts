export interface Block {
  blockType: string
  name: string | null
  directives: Map<string, string>
  children: Block[]
}

export interface Document {
  blocks: Block[]
}

export type EmitTarget = 'react' | 'vue'

export interface CompileOptions {
  target: EmitTarget
  libraryPrefix?: string
  /**
   * If set, the React emitter wraps the output as `export function ${exportName}(...)`.
   * When undefined, falls back to the root block's `:Name` (PascalCased). If neither
   * is set, emits a bare JSX fragment (back-compat).
   */
  exportName?: string
}

export interface CompileResult {
  output: string
  warnings: string[]
}