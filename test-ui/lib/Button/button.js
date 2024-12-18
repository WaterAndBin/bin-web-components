import { _ as _getPrototypeOf, a as _possibleConstructorReturn, b as _classCallCheck, c as _inherits, d as _createClass } from '../_chunks/dep-f32405c4.js';
import { tag, h, Component } from 'omi';
import { tailwind } from '../style/index.js';
import clsx from 'clsx';
import '../_chunks/dep-925713d7.js';

var css_248z = ".b-button {\r\n}\r\n\r\n.b-button-default {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImJ1dHRvbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYi1idXR0b24ge1xyXG59XHJcblxyXG4uYi1idXR0b24tZGVmYXVsdCB7XHJcbn1cclxuIl19 */";
var stylesheet=".b-button {\r\n}\r\n\r\n.b-button-default {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6ImJ1dHRvbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYi1idXR0b24ge1xyXG59XHJcblxyXG4uYi1idXR0b24tZGVmYXVsdCB7XHJcbn1cclxuIl19 */";

var _dec, _class, _YButton;
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var YButton = (_dec = tag("y-button"), _dec(_class = (_YButton = /*#__PURE__*/function (_Component) {
  function YButton() {
    _classCallCheck(this, YButton);
    return _callSuper(this, YButton, arguments);
  }
  _inherits(YButton, _Component);
  return _createClass(YButton, [{
    key: "changeUpdate",
    value:
    // 存储组件实例的静态变量
    function changeUpdate() {
      this.update();
      YButton.instance = this;
    }
  }, {
    key: "render",
    value: function render(props) {
      var size = props.size,
        style = props.style,
        className = props.className;
      return /* @__PURE__ */h("button", {
        style: style,
        className: clsx(className)
      }, "hallo,", size, /* @__PURE__ */h("slot", null));
    }
  }]);
}(Component), _YButton.css = [tailwind, css_248z], _YButton.instance = void 0, _YButton.props = {
  size: {
    type: String,
    "default": "default",
    changed: function changed() {
      if (this instanceof _YButton) {
        this.update();
      }
    }
  },
  className: {
    type: String,
    "default": ""
  },
  style: {
    type: CSSStyleDeclaration,
    "default": ""
  }
}, _YButton)) || _class);

export { YButton as default };
//# sourceMappingURL=button.js.map
