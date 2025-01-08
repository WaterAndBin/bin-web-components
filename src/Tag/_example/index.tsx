import { h, tag, Component } from 'omi';
import '../index';

@tag('text-tag')
export default class extends Component {
  render() {
    return (
      <div className="p-2 flex items-center justify-center">
        <p>标签</p>
        <y-tag size="large">large</y-tag>
        <y-tag>default</y-tag>
        <y-tag size="small">small</y-tag>
      </div>
    );
  }
}
