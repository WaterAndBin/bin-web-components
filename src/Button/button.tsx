import { h, tag, Component } from "omi";
import { TButtonProps, TButtonEvent } from "./type";
import { tailwind } from "../style";
// @ts-ignore
import buttonStyle from "./style/button.css?inline";

export interface ButtonProps extends TButtonProps, TButtonEvent {}

@tag("y-button")
export default class YButton extends Component<ButtonProps> {
  static css = [tailwind, buttonStyle];

  static props = {
    size: {
      type: String,
      default: "default",
      changed() {
        (this as any).update();
      },
    },
  };

  clickHandle = (props: any) => {
    console.log("这是Omi内部的点击事件");
    console.log(props);
  };

  render(props: ButtonProps) {
    return (
      <div className="b-button-default">
        <button className="" onClick={() => this.clickHandle(props)}>
          hallo,<slot></slot>
        </button>
      </div>
    );
  }
}
