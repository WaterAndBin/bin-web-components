import { h, tag, Component } from "omi";
// import "./index";
import TButton from "./Button/RYButton";

@tag("my-app")
export default class extends Component {
  render() {
    return (
      <div>
        <TButton msg="31231">
          <div>123123</div>
          <span>hallo,world</span>
        </TButton>
      </div>
    );
  }
}
