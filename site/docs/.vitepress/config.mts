import { defineConfig } from 'vitepress';
import { componentDosc } from '../router';
import UnoCSS from 'unocss/vite';

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

    sidebar: [
      {
        text: '开发指南',
        items: [{ text: '开发注意事项', link: '/docs/attention' }]
      },
      {
        text: '使用指南',
        items: [{ text: '开始', link: '/docs/start' }]
      },
      {
        text: '组件',
        collapsed: true,
        items: [{ text: '数据录入' }, ...componentDosc]
      }
    ],

    outline: {
      label: 'Contents'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/WaterAndBin/bin-web-components' }],

    search: {
      provider: 'local'
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

  vite: {
    plugins: [UnoCSS()]
  }
});
