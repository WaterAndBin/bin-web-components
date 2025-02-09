import { defineConfig } from 'vitepress';
import { sidebarGuide } from '../router';

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

  vue: {
    template: {
      compilerOptions: {
        // 将所有带短横线的标签名都视为自定义元素
        isCustomElement: (tag) => tag.startsWith('y-')
      }
    }
  }
});
