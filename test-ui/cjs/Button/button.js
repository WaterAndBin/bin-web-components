'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var inherits = require('../_chunks/dep-229e0586.js');
var omi = require('omi');

var _dec, _class, _TButton;
function _callSuper(t, o, e) { return o = inherits._getPrototypeOf(o), inherits._possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], inherits._getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var TButton = (_dec = omi.tag("t-button"), _dec(_class = (_TButton = /*#__PURE__*/function (_Component) {
  function TButton() {
    var _this;
    inherits._classCallCheck(this, TButton);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TButton, [].concat(args));
    _this.updateData = function () {
      _this.update();
    };
    _this.clickHandle = function (props) {
      console.log("\u8FD9\u662FOmi\u5185\u90E8\u7684\u70B9\u51FB\u4E8B\u4EF6");
      console.log(props);
    };
    return _this;
  }
  inherits._inherits(TButton, _Component);
  return inherits._createClass(TButton, [{
    key: "render",
    value: function render(props) {
      var _this2 = this;
      var msg = props.msg;
      console.log("===render===");
      console.log(props);
      return /* @__PURE__ */omi.h("button", {
        style: "border: solid;",
        onClick: function onClick() {
          return _this2.clickHandle(props);
        }
      }, "hallo,", msg, ",", /* @__PURE__ */omi.h("slot", null));
    }
  }]);
}(omi.Component), _TButton.css = "  \n  button {  \n      background-color: #4CAF50; /* Green */  \n      border: none;  \n      color: white;  \n      padding: 15px 32px;  \n      text-align: center;  \n      text-decoration: none;  \n      display: inline-block;  \n      font-size: 16px;  \n      margin: 4px 2px;  \n      cursor: pointer;  \n  }  \n ", _TButton.props = {
  msg: {
    type: String,
    changed: function changed() {
      this.updateData();
    }
  }
}, _TButton)) || _class);

exports["default"] = TButton;
//# sourceMappingURL=button.js.map
