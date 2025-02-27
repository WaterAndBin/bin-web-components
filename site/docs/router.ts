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
          text: '基础',
          items: [
            {
              text: '按钮 Button',
              link: 'button/README'
            }
          ]
        },
        {
          text: '布局',
          items: [
            {
              text: '分割线 Divider',
              link: 'divider/README'
            }
          ]
        },
        {
          text: '数据录入',
          items: [
            {
              text: '输入框 Input',
              link: 'input/README'
            },
            {
              text: '开关 Switch',
              link: 'switch/README'
            }
          ]
        }
      ]
    }
  ];
}
