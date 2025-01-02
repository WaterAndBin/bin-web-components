import { h, tag, Component } from 'omi';
import '..';

@tag('text-button')
export default class extends Component {
  render() {
    return (
      <div className="p-2">
        <div>
          <y-button size="small"></y-button>
          <y-button size="default"></y-button>
          <y-button size="large"></y-button>
          <y-button size="small" disabled></y-button>
          <y-button size="default" disabled></y-button>
          <y-button size="large" disabled></y-button>
        </div>
        <div>
          <y-button size="small" type="outline"></y-button>
          <y-button size="default" type="outline"></y-button>
          <y-button size="large" type="outline"></y-button>
          <y-button size="small" type="outline" disabled></y-button>
          <y-button size="default" type="outline" disabled></y-button>
          <y-button size="large" type="outline" disabled></y-button>
        </div>
      </div>
    );
  }
}
