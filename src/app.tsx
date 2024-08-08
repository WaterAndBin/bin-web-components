import { h, tag, Component } from "omi";
import { tailwind } from "./tailwind";
import { TButton } from "./index-lib";

@tag("my-app")
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <>
        <div>
          <TButton size="small" msg="测试数据" children="ces"></TButton>
        </div>
      </>
    );
  }
}
