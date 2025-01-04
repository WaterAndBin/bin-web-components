import { h, tag, Component } from 'omi';
import '..';

@tag('text-divider')
export default class extends Component {
  render() {
    return (
      <div className="p-2">
        <y-divider></y-divider>
      </div>
    );
  }
}
