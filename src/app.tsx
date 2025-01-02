import { h, tag, Component } from 'omi';
import { tailwind } from './style';
import './Button/_example';

@tag('my-app')
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div>
        <text-button></text-button>
      </div>
    );
  }
}
