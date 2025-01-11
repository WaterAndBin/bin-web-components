import { h, tag, Component } from 'omi';
import '..';
import { tailwind } from '../../style/index';

@tag('text-input')
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div className="mb-3">
        <h2 className="py-3 font-bold text-2xl">输入框</h2>
        <div className="my-1">
          <span className="min-w-40 inline-block">小一点的默认输入框：</span>
          <y-input size="small"></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">默认输入框：</span>
          <y-input size="default"></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">大一点的默认输入框：</span>
          <y-input size="large"></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">不要x的输入框：</span>
          <y-input allowClear={false}></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">密码输入框：</span>
          <y-input type="password"></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">带前缀输入框：</span>
          <y-input>
            <span slot="prefix">🏠</span>
          </y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">带后缀输入框：</span>
          <y-input>
            <span slot="suffix">🏠</span>
          </y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">加载中的输入框：</span>
          <y-input defaultValue="hallo,world" loading></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">带字数统计的输入框：</span>
          <y-input showWordLimit></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">带数字限制的输入框：</span>
          <y-input showWordTotal></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">禁用的输入框：</span>
          <y-input disabled></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">错误的输入框：</span>
          <y-input error></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">错误禁用的输入框：</span>
          <y-input error disabled></y-input>
        </div>
        <div className="my-1 flex">
          <span className="min-w-40 inline-block text-right">携带默认值的输入框：</span>
          <div className="flex flex-col">
            <y-input defaultValue="hallo,world"></y-input>
            <y-input error defaultValue="hallo,world"></y-input>
            <y-input disabled defaultValue="hallo,world"></y-input>
            <y-input error disabled defaultValue="hallo,world"></y-input>
          </div>
        </div>
      </div>
    );
  }
}
