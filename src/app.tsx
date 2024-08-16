import { h, tag, Component } from "omi";
import "./";
import { tailwind } from "./styles";
import "./Button";

@tag("my-app")
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div>
        <div className="size-60 bg-red-400">hallo,world</div>
        <y-button msg="13">333</y-button>
      </div>
    );
  }
}
