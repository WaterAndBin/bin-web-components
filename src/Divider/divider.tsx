import { h, tag, Component } from "omi";

@tag("t-divider")
export default class Divider extends Component {
  render() {
    return (
      <div>
        <hr />
        <h1>分割线</h1>
        <br />
      </div>
    );
  }
}
