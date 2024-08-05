import { tag, Component } from 'omi';

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--) if (decorator = decorators[i]) result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var Divider = class extends Component {
  render() {
    var h = arguments[0];
    return h("div", [h("hr"), h("h1", ["\u5206\u5272\u7EBF"]), h("br")]);
  }
};
Divider = __decorateClass([tag("t-divider")], Divider);

export { Divider as default };
//# sourceMappingURL=divider.js.map
