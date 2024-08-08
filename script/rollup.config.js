// import resolve from "@rollup/plugin-node-resolve";
// import postcss from "rollup-plugin-postcss";
// import multiInput from "rollup-plugin-multi-input";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import esbuild from "rollup-plugin-esbuild";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import multiInput from "rollup-plugin-multi-input";
import json from "@rollup/plugin-json";
import { resolve } from "path";
import staticImport from "rollup-plugin-static-import";
import postcss from "rollup-plugin-postcss";
import ignoreImport from "rollup-plugin-ignore-import";

import pkg from "../package.json";
/* 包列表 */
const externalDeps = Object.keys(pkg.dependencies || {});
const externalPeerDeps = Object.keys(pkg.peerDependencies || {});

const input = "src/index-lib.ts";
const inputList = [
  "src/**/*.ts",
  "src/**/*.jsx",
  "src/**/*.tsx",
  "!src/**/_example",
  "!src/**/*.d.ts",
  "!src/**/__tests__",
  "!src/**/_usage",
];

const getPlugins = ({ isProd = false, ignoreLess = false } = {}) => {
  const plugins = [
    nodeResolve(),
    commonjs(),
    esbuild({
      include: /\.[jt]sx?$/,
      target: "esnext",
      minify: false,
      loader: "tsx",
      jsxFactory: "h",
      jsxFragment: "h.f",
      tsconfig: resolve(__dirname, "../tsconfig.build.json"),
    }),
    babel({
      babelHelpers: "runtime",
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
    }),
    json(),
    url(),
  ];

  if (!ignoreLess) {
    plugins.push(
      postcss({
        extract: false,
        minimize: isProd,
        sourceMap: !isProd,
        inject: false,
        extensions: [".sass", ".scss", ".css", ".less"],
      })
    );
  } else {
    plugins.push(
      staticImport({
        include: ["src/**/style/index.js", "src/_common/style/web/**/*.less"],
      }),
      ignoreImport({
        include: ["src/*/style/*"],
        body: 'import "./style/index.js";',
      })
    );
  }

  return plugins;
};

// commonjs 导出规范
const esmConfig = {
  input: inputList.concat("!src/index-lib.ts"),
  treeshake: false,
  external: externalDeps.concat(externalPeerDeps),
  plugins: [multiInput()].concat(getPlugins()),
  output: {
    dir: "test-ui",
    format: "es",
    sourcemap: true,
    // preserveModules: true, // 保持模块分离
    chunkFileNames: "_chunks/dep-[hash].js",
    // intro: `import { h } from 'omi';`,
  },
};

export default [esmConfig];
