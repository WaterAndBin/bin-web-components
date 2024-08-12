import { h, tag, Component } from "omi";
import { TButtonProps } from "./type";

export interface ButtonProps extends TButtonProps {}

@tag("t-button")
export default class TButton extends Component<ButtonProps> {
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
      default: "Omi",
      changed() {
        (this as any).updateData();
      },
    },
  };

  updateData = () => {
    /* 中间有比较多的逻辑。。。可以多个地方需要调用 */
    this.update();
  };

  clickHandle = (props: any) => {
    console.log("这是Omi内部的点击事件");
    console.log(props);
  };

  render(props: ButtonProps) {
    const { msg } = props;
    console.log("===render===");
    console.log(props);

    return (
      <button style="border: solid;" onClick={() => this.clickHandle(props)}>
        hallo,{msg},<slot></slot>
      </button>
    );
  }
}
