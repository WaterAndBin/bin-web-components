import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  /* 屏蔽scss的警告 */
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // 或 "modern"，"legacy"
      },
    },
  },
  plugins: [
    {
      // 插件名称（可选）
      name: 'vite-plugin-ignore-css-warning',
      // 插件的 transform 方法，用于处理文件内容
      transform(code, id) {
        // 检查文件路径是否以 .scss 结尾
        if (id.endsWith('.scss')) {
          // 这里可以添加处理 CSS 文件的逻辑，但在这个例子中我们什么都不做
          // 只是简单地返回原始代码
          return code;
        }
        // 对于其他文件，返回 null 表示不进行任何处理
        return null;
      }
    }
  ]
});
