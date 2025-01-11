import { h, tag, Component } from 'omi';
import { tailwind } from './style';
import './Button/_example';
import './Divider/_example';
import './Input/_example';
import { Router } from 'omi-router';
import { routes } from './routes';

const router = new Router({
  routes,
  renderTo: '#test'
});

@tag('my-app')
export default class extends Component {
  static css = [tailwind];

  // 获取当前路由地址
  get getCurrentPath() {
    return router.el?.currentRoute?.path ?? '/Button';
  }

  render() {
    return (
      <div className="h-full bg-gray-200 w-[14rem] p-4 overflow-x: hidden;">
        <h3 className="py-4 font-bold text-4xl text-center">Bin-UI</h3>
        <div>
          <ul>
            {routes.map((items, index) => {
              const isActive = items.path === this.getCurrentPath; // 判断是否为当前路径

              return (
                index !== 0 &&
                index !== routes.length - 1 && (
                  <li
                    className={`hover:bg-gray-100 cursor-pointer text-xl my-1 py-3 font-bold px-2 rounded-md ${isActive ? 'bg-gray-100' : ''}`}
                    onClick={() => {
                      router.push(items.path);
                      this.update();
                    }}
                  >
                    <button>{items.title}</button>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
