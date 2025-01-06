import { h, tag, Component } from 'omi';
import '..';
import { tailwind } from '../../style/index';

@tag('text-input')
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div>
        <y-input></y-input>
      </div>
    );
  }
}
