import { h, tag, Component } from "omi";
import { TButtonProps, TButtonEvent } from "./type";

export interface ButtonProps extends TButtonProps, TButtonEvent {}

@tag("y-button")
export default class YButton extends Component<ButtonProps> {
  static css = `
  button {
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
  }
  `;

  static props = {
    msg: {
      type: String,
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
    const { msg } = props;
    return (
      <button style="border: solid;" onClick={() => this.clickHandle(props)}>
        hallo,{msg},<slot></slot>
      </button>
    );
  }
}
