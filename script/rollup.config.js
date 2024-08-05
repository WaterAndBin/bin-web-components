// import resolve from "@rollup/plugin-node-resolve";
// import postcss from "rollup-plugin-postcss";
// import multiInput from "rollup-plugin-multi-input";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import esbuild from "rollup-plugin-esbuild";
import { DEFAULT_EXTENSIONS } from "@babel/core";

const extensions = [".ts", ".tsx", ".js", ".jsx"];

// commonjs 导出规范
const cjsConfig = {
  input: "src/index-lib.ts",
  output: {
    dir: "test-ui",
    format: "esm",
    sourcemap: true,
    // exports: "named",
    preserveModules: true, // 保持模块分离
    entryFileNames: "[name].js",
    chunkFileNames: "_chunks/dep-[hash].js",
  },
  plugins: [
    esbuild({
      target: "esnext",
      minify: false,
      jsx: "preserve",
      tsconfig: "tsconfig.build.json",
    }),
    nodeResolve({ extensions }),
    commonjs(),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
    }),
    url(),
  ],
  external: ["omi"], // 列出所有外部依赖
  optimization: {
    minimize: false, // 关闭代码压缩
  },
};

export default [cjsConfig];
