import { h, tag, Component } from "omi";
import { tailwind } from "./style";
import "./Button";

@tag("my-app")
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div>
        <y-button size="123123123"></y-button>
      </div>
    );
  }
}
