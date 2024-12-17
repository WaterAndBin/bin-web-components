import { h, tag, Component } from "omi";
import { TButtonProps, TButtonEvent } from "./type";
import { tailwind } from "../style";
// @ts-ignore
import buttonStyle from "./style/button.css?inline";

export interface ButtonProps extends TButtonProps, TButtonEvent {}

@tag("y-button")
export default class YButton extends Component<ButtonProps> {
  static css = [tailwind, buttonStyle];
  static instance: YButton; // 存储组件实例的静态变量

  changeUpdate() {
    this.update();
    YButton.instance = this; // 初始化时保存当前实例
  }

  static props = {
    size: {
      type: String,
      default: "default",
      changed(newValue: string) {
        YButton.instance.update();
      },
    },
  };

  clickHandle = (props: any) => {
    console.log("这是Omi内部的点击事件");
    console.log(props);
    this.update();
  };

  render(props: ButtonProps) {
    const { size } = props;

    return (
      <div className="b-button-default">
        <button className="" onClick={() => this.clickHandle(props)}>
          hallo,{size}
          <slot></slot>
        </button>
      </div>
    );
  }
}
