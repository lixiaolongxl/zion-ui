import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from 'rollup-plugin-json';
import { name } from '../package.json'
const file = type => `dist/${name}.${type}.js`
const overrides = {
  compilerOptions: { declaration: true },
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"]
}
export { name, file }
export default {
  input: 'packages/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    json(),
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({ output: `${name}.css` })
  ],
  external: ['vue']
}