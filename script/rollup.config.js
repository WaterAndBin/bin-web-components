import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import esbuild from 'rollup-plugin-esbuild';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import multiInput from 'rollup-plugin-multi-input';
import json from '@rollup/plugin-json';
import path, { resolve } from 'path';
import postcss from 'rollup-plugin-postcss';
import styles from 'rollup-plugin-styles';

import pkg from '../package.json';
/* 包列表 */
const externalDeps = Object.keys(pkg.dependencies || {});
const externalPeerDeps = Object.keys(pkg.peerDependencies || {});

// const input = 'src/index-lib.ts';
const inputList = [
  'src/**/*.ts',
  'src/**/*.jsx',
  'src/**/*.tsx',
  '!src/**/_example',
  '!src/**/*.d.ts',
  '!src/**/types.ts',
  '!src/**/__tests__',
  '!src/**/_usage',
  '!play/**',
  '!src/common.ts',
  '!src/main.tsx',
  '!src/app.tsx',
  '!src/vite-env.d.ts',
  '!src/globals.ts',
  '!src/types/**.ts',
  '!src/**/style/*',
  '!src/routes.tsx',
];

function removeCssQueryPlugin() {
  return {
    name: 'remove-css-query',
    resolveId(source, importer) {
      if ((importer && /\.css(\?.*)?$/.test(source)) || /\.scss(\?.*)?$/.test(source)) {
        // 移除 CSS 文件 URL 中的查询参数
        const baseUrl = source.split('?')[0];
        return resolve(importer ? path.dirname(importer) : process.cwd(), baseUrl);
      }
      return null;
    }
  };
}

const getPlugins = () => {
  const plugins = [
    nodeResolve(),
    commonjs(),
    esbuild({
      include: /\.[jt]sx?$/,
      target: 'esnext',
      minify: false,
      loader: 'tsx',
      jsxFactory: 'h',
      jsxFragment: 'h.f',
      tsconfig: resolve(__dirname, '../tsconfig.build.json')
    }),
    babel({
      babelHelpers: 'runtime',
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx']
    }),
    json(),
    url(),
    removeCssQueryPlugin(),
    postcss({
      extract: false,
      minimize: false, // 在生产环境中压缩 CSS
      sourceMap: false,
      inject: false,
      extensions: ['.sass', '.scss', '.css', '.less']
    })
  ];

  // css
  // if (!ignoreLess) {
  // plugins.push(
  //   postcss({
  //     extract: true,
  //     minimize: isProd, // 在生产环境中压缩 CSS
  //     sourceMap: false,
  //     inject: false,
  //     extensions: ['.sass', '.scss', '.css', '.less']
  //   })
  // );
  // else {
  // plugins.push(
  //   staticImport({
  //     include: ['src/**/style/index.js']
  //   }),
  //   ignoreImport({
  //     include: ['src/*/style/*'],
  //     body: 'import "./style/index.js";'
  //   })
  // );
  // }

  return plugins;
};

const cssConfig = {
  input: ['src/style/index.js'],
  plugins: [multiInput(), styles({ mode: 'extract' }), removeCssQueryPlugin()],
  output: {
    dir: 'test-ui/lib',
    sourcemap: true,
    assetFileNames: '[name].css'
  }
};

const esmConfig = {
  input: inputList,
  treeshake: true,
  external: externalDeps.concat(externalPeerDeps),
  plugins: [multiInput()].concat(getPlugins()),
  output: {
    dir: 'test-ui/lib',
    format: 'esm', // 输出格
    sourcemap: false, // 禁用 source map 文件
    // preserveModules: true, // 保持模块分离
    chunkFileNames: '_chunks/dep-[hash].js'
    // intro: `import { h } from 'omi';`,
  }
};

export default [cssConfig, esmConfig];
