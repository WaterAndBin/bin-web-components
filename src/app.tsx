import { h, tag, Component } from 'omi';
import { tailwind } from './style';
import './Button/button';

@tag('my-app')
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div className="p-2">
        <div>
          <y-button size="small"></y-button>
          <y-button size="default"></y-button>
          <y-button size="large"></y-button>
        </div>
        <div>
          <y-button size="small" type="outline"></y-button>
          <y-button size="default" type="outline"></y-button>
          <y-button size="large" type="outline"></y-button>
        </div>
        <div>
          <y-button size="small" disabled></y-button>
          <y-button size="default" disabled></y-button>
          <y-button size="large" disabled></y-button>
        </div>
      </div>
    );
  }
}
