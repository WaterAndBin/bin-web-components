import { h, tag, Component } from 'omi';
import '..';

@tag('text-button')
export default class extends Component {
  render() {
    return (
      <div className="p-2">
        <div>
          <span>主要：</span>
          <y-button size="small"></y-button>
          <y-button size="default"></y-button>
          <y-button size="large"></y-button>
          <y-button size="small" disabled></y-button>
          <y-button size="default" disabled></y-button>
          <y-button size="large" disabled></y-button>
        </div>
        <div>
          <span>次要：</span>
          <y-button size="small" type="secondary"></y-button>
          <y-button size="default" type="secondary"></y-button>
          <y-button size="large" type="secondary"></y-button>
          <y-button size="small" type="secondary" disabled></y-button>
          <y-button size="default" type="secondary" disabled></y-button>
          <y-button size="large" type="secondary" disabled></y-button>
        </div>
        <div>
          <span>线形：</span>
          <y-button size="small" type="outline"></y-button>
          <y-button size="default" type="outline"></y-button>
          <y-button size="large" type="outline"></y-button>
          <y-button size="small" type="outline" disabled></y-button>
          <y-button size="default" type="outline" disabled></y-button>
          <y-button size="large" type="outline" disabled></y-button>
        </div>
        <div>
          <span>文本：</span>
          <y-button size="small" type="text"></y-button>
          <y-button size="default" type="text"></y-button>
          <y-button size="large" type="text"></y-button>
          <y-button size="small" type="text" disabled></y-button>
          <y-button size="default" type="text" disabled></y-button>
          <y-button size="large" type="text" disabled></y-button>
        </div>
        <div>
          <span>成功：</span>
          <y-button size="small"></y-button>
          <y-button size="default" status="success" type="secondary"></y-button>
          <y-button size="default" status="success" type="outline"></y-button>
          <y-button size="large" status="success" type="text"></y-button>
          <y-button size="small" status="success" disabled></y-button>
          <y-button size="default" status="success" type="secondary" disabled></y-button>
          <y-button size="default" status="success" type="outline" disabled></y-button>
          <y-button size="large" status="success" type="text" disabled></y-button>
        </div>
      </div>
    );
  }
}
