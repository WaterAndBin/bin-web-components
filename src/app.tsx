import { h, tag, Component } from "omi";
import { tailwind } from "./tailwind";
import { Button as TButton } from "./index-lib";

@tag("my-app")
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <>
        <div>
          <TButton msg="测试数据">hallo,world</TButton>
        </div>
      </>
    );
  }
}
