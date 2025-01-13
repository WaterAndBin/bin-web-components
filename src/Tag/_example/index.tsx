import { h, tag, Component } from 'omi';
import '../index';

@tag('text-tag')
export default class extends Component {
  render() {
    return (
      <div className="p-2 flex items-center justify-center">
        <p>标签</p>
        <div>
          <span>size:</span>
          <y-tag size="large">large</y-tag>
          <y-tag>default</y-tag>
          <y-tag size="small">small</y-tag>
        </div>
        <div>
          <span>color</span>
          <y-tag color="red" closable>
            red
          </y-tag>
          <y-tag color="orange" closable>
            orange
          </y-tag>
          <y-tag color="green" closable>
            green
          </y-tag>
          <y-tag color="cyan" closable>
            cyan
          </y-tag>
          <y-tag color="blue" closable>
            blue
          </y-tag>
          <y-tag color="purple" closable>
            purple
          </y-tag>
          <y-tag color="#f53f3f" closable>
            #f53f3f
          </y-tag>
          <y-tag color="#7816ff" closable>
            #7816ff
          </y-tag>
          <y-tag color="#ffb400" closable>
            #ffb400
          </y-tag>
        </div>
        <div>
          <span>bordered</span>
          <y-tag color="red" bordered closable>
            red
          </y-tag>
          <y-tag color="orange" bordered closable>
            orange
          </y-tag>
          <y-tag color="green" bordered closable>
            green
          </y-tag>
          <y-tag color="cyan" bordered closable>
            cyan
          </y-tag>
          <y-tag color="blue" bordered closable>
            blue
          </y-tag>
          <y-tag color="purple" bordered closable>
            purple
          </y-tag>
          <y-tag color="#f53f3f" bordered closable>
            #f53f3f
          </y-tag>
          <y-tag color="#7816ff" bordered closable>
            #7816ff
          </y-tag>
          <y-tag color="#ffb400" bordered closable>
            #ffb400
          </y-tag>
        </div>
      </div>
    );
  }
}
