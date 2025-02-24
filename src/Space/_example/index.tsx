import { h, tag, Component } from 'omi';
import '..';
import { tailwind } from '../../style/index';

@tag('text-space')
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div>
        <h2 className="py-3 font-bold text-2xl">间距</h2>
        <y-space>
          222
          <y-button onClick={() => console.log(123123)}>4444</y-button>
          <div>555</div>
        </y-space>
      </div>
    );
  }
}
