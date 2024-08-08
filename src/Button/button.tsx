import { h, tag, Component } from "omi";
import { TButtonProps } from "./type";

@tag("t-button") 
export default class TButton extends Component<TButtonProps> {
  render(props: TButtonProps) {
    console.log(props);
    const { msg, children } = props;

    return (
      <div>
        <button>
          hallo,---{msg}---,---{children}---,!!!
        </button>
      </div>
    );
  }
}
