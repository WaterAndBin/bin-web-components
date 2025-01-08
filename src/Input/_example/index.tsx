import { h, tag, Component } from 'omi';
import '..';
import { tailwind } from '../../style/index';

@tag('text-input')
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div className="mb-3">
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
          <y-input></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">带后缀输入框：</span>
          <y-input></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">加载中的输入框：</span>
          <y-input></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">带数字统计的输入框：</span>
          <y-input></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">禁用的输入框：</span>
          <y-input></y-input>
        </div>
        <div className="my-1">
          <span className="min-w-40 inline-block text-right">错误的输入框：</span>
          <y-input></y-input>
        </div>
      </div>
    );
  }
}
