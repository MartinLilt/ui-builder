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
}

export interface CompileResult {
  output: string
  warnings: string[]
}