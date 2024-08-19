import { t as toPropertyKey } from '../_chunks/dep-98153ab6.js';
import { h } from 'omi';
import './button.js';
import React from 'react';
import '../style/index.js';

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Button(props) {
  return /* @__PURE__ */h("y-button", _objectSpread({}, props));
}
var RYButton = function RYButton(props) {
  var res = Button(props);
  return React.createElement(res.nodeName, _objectSpread({}, res.attributes), res.children);
};

export { RYButton };
//# sourceMappingURL=RYButton.js.map
