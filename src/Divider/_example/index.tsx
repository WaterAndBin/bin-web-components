import { h, tag, Component } from 'omi';
import '..';

@tag('text-divider')
export default class extends Component {
  render() {
    return (
      <div className="p-2 flex items-center justify-center">
        <p>这是一根分割线分割线1</p>
        <y-divider></y-divider>
        <p>这是一根分割线分割线2</p>
        <div>
          <span>Text1</span>
          <y-divider type="vertical"></y-divider>
          <span>Text2</span>
          <y-divider type="vertical"></y-divider>
          <span>Text3</span>
        </div>
      </div>
    );
  }
}
