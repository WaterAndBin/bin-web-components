import { h, tag, Component } from 'omi';
import '..';
import { tailwind } from '../../style/index';
import icon from '../uil.json';

@tag('text-icon')
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div className="w-full">
        <h2 className="py-3 font-bold text-2xl w-full">图标</h2>
        <div className="flex flex-wrap">
          {icon.map((items) => (
            <y-icon name={items.name}></y-icon>
          ))}
        </div>
      </div>
    );
  }
}
