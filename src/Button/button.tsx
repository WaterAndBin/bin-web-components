import { h, tag, Component } from "omi";
import { TButtonProps, TButtonEvent } from "./type";
import { tailwind } from "../styles";

export interface ButtonProps extends TButtonProps, TButtonEvent {}

@tag("y-button")
export default class YButton extends Component<ButtonProps> {
  static css = [tailwind];

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
    const { size } = props;
    return (
      <button
        className="size-20 bg-red-100"
        onClick={() => this.clickHandle(props)}
      >
        hallo,<slot></slot>
      </button>
    );
  }
}
