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

import pkg from "../package.json";
/* 包列表 */
const externalDeps = Object.keys(pkg.dependencies || {});
const externalPeerDeps = Object.keys(pkg.peerDependencies || {});

// commonjs 导出规范
const cjsConfig = {
  input: "src/index-lib.ts",
  treeshake: false,
  external: externalDeps.concat(externalPeerDeps),
  plugins: [
    multiInput(),
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
  ],
  output: {
    dir: "test-ui",
    format: "esm",
    sourcemap: true,
    preserveModules: true, // 保持模块分离
    chunkFileNames: "_chunks/dep-[hash].js",
  },
};

export default [cjsConfig];
