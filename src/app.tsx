import { h, tag, Component } from "omi";
import css from "./app.css?raw";
import { tailwind } from "./tailwind";
import { Button as TButton } from "./index-lib";

@tag("my-app")
export default class extends Component {
  static css = [tailwind, css];

  render() {
    return (
      <>
        <div>
          <TButton>123</TButton>
        </div>
      </>
    );
  }
}
