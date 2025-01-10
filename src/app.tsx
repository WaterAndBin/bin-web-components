import { h, tag, Component } from 'omi';
import { tailwind } from './style';
import './Button/_example';
import './Divider/_example';
import './Input/_example';

@tag('my-app')
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-xl font-semibold my-3">按钮</h2>
          <text-button></text-button>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-xl font-semibold my-3">分割线</h2>
          <text-divider></text-divider>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-xl font-semibold my-3">输入框</h2>
          <text-input></text-input>
        </div>
      </div>
    );
  }
}
