import { defineConfig } from 'vitepress';
import { sidebarGuide } from '../router';
import container from 'markdown-it-container';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Bin-UI',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Vue案例', link: '/markdown-examples' },
      { text: 'React案例', link: '/markdown-examples' }
    ],

    sidebar: {
      '/docs/': { base: '/docs/', items: sidebarGuide() }
    },

    outline: {
      label: 'Contents'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/WaterAndBin/bin-web-components' }],

    search: {
      provider: 'local'
    }
  },

  vite: {
    // ssr: {
    // external: ['omi', '@omiu/utils'] // 将 omi 排除在 SSR 打包之外
    // },
    build: {
      ssr: false // 完全禁用 SSR（仅限测试，不推荐生产）
    }
  },

  vue: {
    template: {
      compilerOptions: {
        // 将所有带短横线的标签名都视为自定义元素
        isCustomElement: (tag) => tag.startsWith('y-')
      }
    }
  },

  markdown: {
    config: (md) => {
      // 定义自定义容器 `::: demo`
      md.use(container, 'demo', {
        // 定义如何解析 `::: demo` 的参数
        validate(params: string) {
          return params.trim().startsWith('demo');
        },
        // 动态生成 Markdown 内容
        render(tokens, idx) {
          const token = tokens[idx];
          if (token.nesting === 1) {
            // 提取参数（例如：`::: demo 参数1 参数2`）
            const m = token.info.trim().match(/^demo\s*(.*)$/);
            /* 获取描述 */
            const description = m && m.length > 1 ? m[1] : '';
            const sourceFileToken = tokens[idx + 2];
            /* 获取文件名你 */
            const type = sourceFileToken.children?.[0].content ?? '';
            const content = type.split('/');
            /* 生成组件的名字 */
            const name = content
              .map((part) => part.charAt(0).toUpperCase() + part.slice(1)) // 将每一部分的首字母大写
              .join(''); // 拼接成一个新的字符串

            return `<Demo title="${description}" content="${content[0]}" type="${content[1]}" name=${name}>`;
          }
          return '</Demo>';
        }
      });
    }
  }
});
