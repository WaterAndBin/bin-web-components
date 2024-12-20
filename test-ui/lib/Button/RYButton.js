import { _ as _defineProperty, n as newInstance } from '../_chunks/dep-9cf907b1.js';
import { h } from 'omi';
import '../_chunks/dep-925713d7.js';
import 'react';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Button(props) {
  return /* @__PURE__ */h("y-button", _objectSpread({}, props));
}
var YButton = function YButton(props) {
  return newInstance(Button, props);
};

export { YButton };
//# sourceMappingURL=RYButton.js.map
