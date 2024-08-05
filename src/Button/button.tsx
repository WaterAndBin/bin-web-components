import { h, tag, Component } from "omi";

@tag("t-button")
export default class Button extends Component {
  render(props: any) {
    console.log(props);
    const { children, msg } = props;

    return (
      <div>
        <button>
          hallo,{msg},{children},!!!
        </button>
      </div>
    );
  }
}
