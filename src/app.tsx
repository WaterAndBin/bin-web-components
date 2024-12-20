import { h, tag, Component } from 'omi';
import { tailwind } from './style';
import './Button/button';

@tag('my-app')
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div style>
        123123
        <y-button size="tiny"></y-button>
      </div>
    );
  }
}
