import commonjs from '@rollup/plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import {nodeResolve} from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-import-css';
import pkg from './package.json';

export default {
  input: 'js/index/index.js',
  output: [{
    file: pkg.module, // the name of our esm library
    format: 'esm', // the format of choice
    sourcemap: true, // ask rollup to include sourcemaps
  },
  {
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  }],
  plugins: [
    VuePlugin(),
    commonjs(),
    nodeResolve(),
    css()
  ],
  external: ['vue']
};
