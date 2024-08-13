'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var inherits = require('../_chunks/dep-229e0586.js');
var omi = require('omi');

var _dec, _class;
function _callSuper(t, o, e) { return o = inherits._getPrototypeOf(o), inherits._possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], inherits._getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Divider = (_dec = omi.tag("t-divider"), _dec(_class = /*#__PURE__*/function (_Component) {
  function Divider() {
    inherits._classCallCheck(this, Divider);
    return _callSuper(this, Divider, arguments);
  }
  inherits._inherits(Divider, _Component);
  return inherits._createClass(Divider, [{
    key: "render",
    value: function render() {
      return /* @__PURE__ */omi.h("div", null, /* @__PURE__ */omi.h("hr", null), /* @__PURE__ */omi.h("h1", null, "\u5206\u5272\u7EBF"), /* @__PURE__ */omi.h("br", null));
    }
  }]);
}(omi.Component)) || _class);

exports["default"] = Divider;
//# sourceMappingURL=divider.js.map
