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
  /**
   * Source `.promptui` path (typically relative to project root). When provided,
   * it's referenced in the "DO NOT EDIT — generated" header at the top of the
   * compiled output, so a human or AI editing the wrong file knows where to
   * make changes. Pass `false` to suppress the header entirely.
   */
  sourcePath?: string | false
}

export interface CompileResult {
  output: string
  warnings: string[]
}