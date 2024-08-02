import { tag, h, WeElement } from "omi";

@tag("t-button")
export default class Button extends WeElement {
  static css = [];

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
