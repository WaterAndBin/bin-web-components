import { h } from 'omi';
import './Button/_example/index';
import './Icon/_example/index';
import './Divider/_example/index';
import './Input/_example/index';
import './Switch/_example/index';

// 定义所有组件的路由信息
const components = [
  { title: '按钮', path: '/Button', tag: 'text-button' },
  { title: '图标', path: '/Icon', tag: 'text-icon' },
  { title: '分割线', path: '/Divider', tag: 'text-divider' },
  { title: '输入框', path: '/Input', tag: 'text-input' },
  { title: '开关', path: '/Switch', tag: 'text-switch' }
];

// 动态生成路由
export const routes = [
  {
    title: '重定向',
    path: '/',
    redirect: '/Button'
  },
  ...components.map((item) => ({
    title: item.title,
    path: item.path,
    render() {
      return <item.tag></item.tag>;
    }
  })),
  {
    title: '404',
    path: '*',
    render() {
      return <div>404</div>;
    }
  }
];
