import { tag, Component } from 'omi';

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--) if (decorator = decorators[i]) result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var Button = class extends Component {
  render(props) {
    var h = arguments[0];
    console.log(props);
    var {
      children,
      msg
    } = props;
    return h("div", [h("button", ["hallo,", msg, ",", children, ",!!!"])]);
  }
};
Button = __decorateClass([tag("t-button")], Button);

export { Button as default };
//# sourceMappingURL=button.js.map
