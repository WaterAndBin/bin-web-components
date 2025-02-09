import { DefaultTheme } from 'vitepress';

export function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '指南',
      base: '/docs/guide/',
      items: [
        { text: '开发指南', link: 'attention' },
        { text: '使用指南', link: 'use' }
      ]
    },
    {
      text: '组件',
      base: '/docs/components/',
      items: [
        {
          text: '数据录入',
          items: [
            {
              text: '开关 switch',
              link: 'switch/README'
            }
          ]
        }
      ]
    }
  ];
}
