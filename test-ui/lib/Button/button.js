import { _ as _getPrototypeOf, a as _possibleConstructorReturn, b as _classCallCheck, c as _inherits, d as _createClass } from '../_chunks/dep-98153ab6.js';
import { tag, h, Component } from 'omi';
import { tailwind } from '../styles/index.js';

var _dec, _class, _YButton;
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var YButton = (_dec = tag("y-button"), _dec(_class = (_YButton = /*#__PURE__*/function (_Component) {
  function YButton() {
    var _this;
    _classCallCheck(this, YButton);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, YButton, [].concat(args));
    _this.clickHandle = function (props) {
      console.log("\u8FD9\u662FOmi\u5185\u90E8\u7684\u70B9\u51FB\u4E8B\u4EF6");
      console.log(props);
    };
    return _this;
  }
  _inherits(YButton, _Component);
  return _createClass(YButton, [{
    key: "render",
    value: function render(props) {
      var _this2 = this;
      var msg = props.msg;
      return /* @__PURE__ */h("button", {
        className: "size-20 bg-red-100",
        onClick: function onClick() {
          return _this2.clickHandle(props);
        }
      }, "hallo,", msg, ",", /* @__PURE__ */h("slot", null));
    }
  }]);
}(Component), _YButton.css = [tailwind], _YButton.props = {
  msg: {
    type: String,
    changed: function changed() {
      this.update();
    }
  }
}, _YButton)) || _class);

export { YButton as default };
//# sourceMappingURL=button.js.map
