import { h } from 'omi';
import './Button/_example/index';
import './Divider/_example/index';
import './Input/_example/index';

export const routes = [
  {
    path: '/',
    redirect: '/Button'
  },
  {
    title: '按钮',
    path: '/Button',
    render() {
      return <text-button></text-button>;
    }
  },
  {
    title: '分割线',
    path: '/Divider',
    render() {
      return <text-divider></text-divider>;
    }
  },
  {
    title: '输入框',
    path: '/Input',
    render() {
      return <text-input></text-input>;
    }
  },
  {
    path: '*',
    render() {
      return <div>404</div>;
    }
  }
];
