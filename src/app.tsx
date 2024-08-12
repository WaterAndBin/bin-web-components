import { h, tag, signal, Component } from "omi";

const count = signal(0);

@tag("my-app")
export default class extends Component {
  static css = [];

  render() {
    return <>123123</>;
  }
}
