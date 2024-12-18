import { h, tag, Component } from "omi";
import { tailwind } from "./style";
import "./Button/button";

@tag("my-app")
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div style>
        <y-button size="small"></y-button>
      </div>
    );
  }
}
