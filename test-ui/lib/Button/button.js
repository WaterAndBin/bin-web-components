import { _ as _getPrototypeOf, a as _possibleConstructorReturn, b as _classCallCheck, c as _inherits, d as _createClass } from '../_chunks/dep-98153ab6.js';
import { tag, h, Component } from 'omi';
import { tailwind } from '../style/index.js';

var css_248z = ".b-button {\r\n}\r\n\r\n.b-button-default {\r\n  background-color: skyblue;\r\n  display: block;\r\n  height: 10rem;\r\n  border-width: 2px;\r\n  border-style: solid;\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(248 113 113 / var(--tw-border-opacity));\r\n  --tw-text-opacity: 1;\r\n  color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFpRTtFQUFqRSxhQUFpRTtFQUFqRSxpQkFBaUU7RUFBakUsbUJBQWlFO0VBQWpFLHNCQUFpRTtFQUFqRSx5REFBaUU7RUFBakUsb0JBQWlFO0VBQWpFLGdEQUFpRTtBQUNuRSIsImZpbGUiOiJidXR0b24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmItYnV0dG9uIHtcclxufVxyXG5cclxuLmItYnV0dG9uLWRlZmF1bHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgQGFwcGx5IHRleHQtd2hpdGUgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1yZWQtNDAwIGJsb2NrIGgtNDA7XHJcbn1cclxuIl19 */";
var stylesheet=".b-button {\r\n}\r\n\r\n.b-button-default {\r\n  background-color: skyblue;\r\n  display: block;\r\n  height: 10rem;\r\n  border-width: 2px;\r\n  border-style: solid;\r\n  --tw-border-opacity: 1;\r\n  border-color: rgb(248 113 113 / var(--tw-border-opacity));\r\n  --tw-text-opacity: 1;\r\n  color: rgb(255 255 255 / var(--tw-text-opacity));\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFpRTtFQUFqRSxhQUFpRTtFQUFqRSxpQkFBaUU7RUFBakUsbUJBQWlFO0VBQWpFLHNCQUFpRTtFQUFqRSx5REFBaUU7RUFBakUsb0JBQWlFO0VBQWpFLGdEQUFpRTtBQUNuRSIsImZpbGUiOiJidXR0b24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmItYnV0dG9uIHtcclxufVxyXG5cclxuLmItYnV0dG9uLWRlZmF1bHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgQGFwcGx5IHRleHQtd2hpdGUgYm9yZGVyLTIgYm9yZGVyLXNvbGlkIGJvcmRlci1yZWQtNDAwIGJsb2NrIGgtNDA7XHJcbn1cclxuIl19 */";

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
      return /* @__PURE__ */h("div", {
        className: "b-button-default"
      }, /* @__PURE__ */h("button", {
        className: "",
        onClick: function onClick() {
          return _this2.clickHandle(props);
        }
      }, "hallo,", /* @__PURE__ */h("slot", null)));
    }
  }]);
}(Component), _YButton.css = [tailwind, css_248z], _YButton.props = {
  size: {
    type: String,
    "default": "default",
    changed: function changed() {
      this.update();
    }
  }
}, _YButton)) || _class);

export { YButton as default };
//# sourceMappingURL=button.js.map
