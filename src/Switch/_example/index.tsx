import { h, tag, Component } from 'omi';
import '..';
import { tailwind } from '../../style/index';

@tag('text-switch')
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div className="mb-3">
        <h2 className="py-3 font-bold text-2xl">开关</h2>
        <div>
          <span>基础的开关：</span>
          <y-switch />
        </div>
      </div>
    );
  }
}
