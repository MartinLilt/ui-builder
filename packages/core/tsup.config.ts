import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    cli: 'src/cli.ts',
    vite: 'src/plugins/vite.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
})