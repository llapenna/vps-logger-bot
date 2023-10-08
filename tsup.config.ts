import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  splitting: true,
  sourcemap: false,
  clean: true,
  target: 'node16',
  treeshake: true,
  dts: true,
  metafile: true,
  async onSuccess() {
    console.log('\n');
  },
});
