import { _ as _getPrototypeOf, a as _possibleConstructorReturn, b as _classCallCheck, c as _inherits, d as _createClass } from '../_chunks/dep-105da581.js';
import { tag, h, Component } from 'omi';

var _dec, _class;
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Divider = (_dec = tag("t-divider"), _dec(_class = /*#__PURE__*/function (_Component) {
  function Divider() {
    _classCallCheck(this, Divider);
    return _callSuper(this, Divider, arguments);
  }
  _inherits(Divider, _Component);
  return _createClass(Divider, [{
    key: "render",
    value: function render() {
      return /* @__PURE__ */h("div", null, /* @__PURE__ */h("hr", null), /* @__PURE__ */h("h1", null, "\u5206\u5272\u7EBF"), /* @__PURE__ */h("br", null));
    }
  }]);
}(Component)) || _class);

export { Divider as default };
//# sourceMappingURL=divider.js.map
