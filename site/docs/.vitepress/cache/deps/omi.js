import {
  __commonJS,
  __toESM
} from "./chunk-5WRI5ZAA.js";

// ../node_modules/weakmap-polyfill/weakmap-polyfill.js
var require_weakmap_polyfill = __commonJS({
  "../node_modules/weakmap-polyfill/weakmap-polyfill.js"(exports) {
    (function(self2) {
      "use strict";
      if (self2.WeakMap) {
        return;
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var hasDefine = Object.defineProperty && function() {
        try {
          return Object.defineProperty({}, "x", { value: 1 }).x === 1;
        } catch (e2) {
        }
      }();
      var defineProperty = function(object, name, value) {
        if (hasDefine) {
          Object.defineProperty(object, name, {
            configurable: true,
            writable: true,
            value
          });
        } else {
          object[name] = value;
        }
      };
      self2.WeakMap = function() {
        function WeakMap2() {
          if (this === void 0) {
            throw new TypeError("Constructor WeakMap requires 'new'");
          }
          defineProperty(this, "_id", genId("_WeakMap"));
          if (arguments.length > 0) {
            throw new TypeError("WeakMap iterable is not supported");
          }
        }
        defineProperty(WeakMap2.prototype, "delete", function(key) {
          checkInstance(this, "delete");
          if (!isObject(key)) {
            return false;
          }
          var entry = key[this._id];
          if (entry && entry[0] === key) {
            delete key[this._id];
            return true;
          }
          return false;
        });
        defineProperty(WeakMap2.prototype, "get", function(key) {
          checkInstance(this, "get");
          if (!isObject(key)) {
            return void 0;
          }
          var entry = key[this._id];
          if (entry && entry[0] === key) {
            return entry[1];
          }
          return void 0;
        });
        defineProperty(WeakMap2.prototype, "has", function(key) {
          checkInstance(this, "has");
          if (!isObject(key)) {
            return false;
          }
          var entry = key[this._id];
          if (entry && entry[0] === key) {
            return true;
          }
          return false;
        });
        defineProperty(WeakMap2.prototype, "set", function(key, value) {
          checkInstance(this, "set");
          if (!isObject(key)) {
            throw new TypeError("Invalid value used as weak map key");
          }
          var entry = key[this._id];
          if (entry && entry[0] === key) {
            entry[1] = value;
            return this;
          }
          defineProperty(key, this._id, [key, value]);
          return this;
        });
        function checkInstance(x2, methodName) {
          if (!isObject(x2) || !hasOwnProperty.call(x2, "_id")) {
            throw new TypeError(
              methodName + " method called on incompatible receiver " + typeof x2
            );
          }
        }
        function genId(prefix) {
          return prefix + "_" + rand() + "." + rand();
        }
        function rand() {
          return Math.random().toString().substring(2);
        }
        defineProperty(WeakMap2, "_polyfill", true);
        return WeakMap2;
      }();
      function isObject(x2) {
        return Object(x2) === x2;
      }
    })(
      typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : exports
    );
  }
});

// ../node_modules/omi/dist/omi.module.js
var import_weakmap_polyfill = __toESM(require_weakmap_polyfill());

// ../node_modules/reactive-signal/dist/index.modern.js
var e = null;
var s = false;
var t = /* @__PURE__ */ new Set();
var i = null;
function n(e2, s3) {
  i = e2, i._tempActiveUpdateFnName = s3 || "queuedUpdate";
}
function c() {
  i = null;
}
function u() {
  return i;
}
var r = class {
  constructor(e2) {
    this._value = void 0, this.subscribers = /* @__PURE__ */ new Set(), this.depsComponents = /* @__PURE__ */ new Set(), this.notifying = false, this._value = e2;
  }
  get value() {
    this.notifying || e && (e.run && this.subscribe(e.run), e.addDependency(this));
    const s3 = u();
    return s3 && this.depsComponents.add(s3), this._value;
  }
  set value(e2) {
    e2 !== this._value && (this._value = e2, this.update());
  }
  peek() {
    return this._value;
  }
  update() {
    this.notify(), this.depsComponents.forEach((e2) => {
      var s3;
      return null == (s3 = e2[e2._tempActiveUpdateFnName]) ? void 0 : s3.call(e2);
    }), this.subscribers.forEach((e2) => {
      e2.computedInstance && e2.computedInstance.subscribers.forEach((e3) => {
        e3.done = false;
      }), e2.done = false;
    });
  }
  subscribe(e2) {
    this.subscribers.add(e2);
  }
  unsubscribe(e2) {
    this.subscribers.delete(e2);
  }
  notify() {
    s ? this.subscribers.forEach((e2) => t.add(e2)) : (this.notifying = true, this.subscribers.forEach((e2) => {
      "function" != typeof e2 || e2.done || (e2.done = true, e2());
    }), this.notifying = false);
  }
};
var o = class {
  constructor(e2) {
    this.computeFn = void 0, this._value = void 0, this.dependencies = /* @__PURE__ */ new Set(), this.subscribers = /* @__PURE__ */ new Set(), this.depsComponents = /* @__PURE__ */ new Set(), this.notifying = false, this.recompute = () => {
      const e3 = this.compute();
      e3 !== this._value && (this._value = e3, this.notify(), this.depsComponents.forEach((e4) => {
        var s3;
        return null == (s3 = e4[e4._tempActiveUpdateFnName]) ? void 0 : s3.call(e4);
      }));
    }, this.computeFn = e2, this._value = this.compute();
  }
  get value() {
    this.notifying || e && (this.subscribe(e.run), e.addDependency(this));
    const s3 = u();
    return s3 && this.depsComponents.add(s3), this._value;
  }
  peek() {
    return this._value;
  }
  compute() {
    const s3 = e;
    e = this;
    const t2 = this.computeFn();
    return e = s3, t2;
  }
  subscribe(e2) {
    e2 && this.subscribers.add(e2);
  }
  unsubscribe(e2) {
    this.subscribers.delete(e2);
  }
  notify() {
    s ? this.subscribers.forEach((e2) => t.add(e2)) : (this.notifying = true, this.subscribers.forEach((e2) => {
      e2.done || (e2.done = true, e2());
    }), this.notifying = false);
  }
  addDependency(e2) {
    this.dependencies.add(e2), e2.subscribe(this.recompute), this.recompute.computedInstance = this;
  }
};
var h = class {
  constructor(s3) {
    this.effectFn = void 0, this.dependencies = /* @__PURE__ */ new Set(), this.disposed = false, this.run = () => {
      if (this.disposed) return;
      const s4 = e;
      e = this, this.effectFn(), e = s4;
    }, this.effectFn = s3, this.run();
  }
  addDependency(e2) {
    this.disposed || (this.dependencies.add(e2), this.run.effectInstance = this, e2.subscribe(this.run));
  }
  cleanup() {
    this.dependencies.forEach((e2) => e2.unsubscribe(this.run)), this.dependencies.clear();
  }
  dispose() {
    this.cleanup(), this.disposed = true;
  }
};
function d(e2) {
  return new r(e2);
}
function a(e2) {
  return new o(e2);
}
function p(e2) {
  const s3 = new h(e2);
  return () => s3.dispose();
}
function b(e2) {
  s = true;
  try {
    e2();
  } finally {
    s = false, t.forEach((e3) => {
      e3.done || (e3.done = true, e3());
    }), t.forEach((e3) => {
      e3.done = false;
    }), t.clear();
  }
}
function f(e2) {
  return Object.entries(e2).reduce((e3, [s3, t2]) => (e3[s3] = d(t2), e3), {});
}

// ../node_modules/omi/dist/omi.module.js
function n2(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n3 = 0, r3 = Array(t2); n3 < t2; n3++) r3[n3] = e2[n3];
  return r3;
}
function r2(e2, t2) {
  for (var n3 = 0; n3 < t2.length; n3++) {
    var r3 = t2[n3];
    r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e2, u2(r3.key), r3);
  }
}
function o2() {
  return o2 = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n3 = arguments[t2];
      for (var r3 in n3) ({}).hasOwnProperty.call(n3, r3) && (e2[r3] = n3[r3]);
    }
    return e2;
  }, o2.apply(null, arguments);
}
function i2(e2) {
  return i2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
    return e3.__proto__ || Object.getPrototypeOf(e3);
  }, i2(e2);
}
function s2(e2, t2) {
  e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, c2(e2, t2);
}
function a2() {
  try {
    var e2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e3) {
  }
  return (a2 = function() {
    return !!e2;
  })();
}
function c2(e2, t2) {
  return c2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
    return e3.__proto__ = t3, e3;
  }, c2(e2, t2);
}
function u2(e2) {
  var t2 = function(e3) {
    if ("object" != typeof e3 || !e3) return e3;
    var t3 = e3[Symbol.toPrimitive];
    if (void 0 !== t3) {
      var n3 = t3.call(e3, "string");
      if ("object" != typeof n3) return n3;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e3);
  }(e2);
  return "symbol" == typeof t2 ? t2 : t2 + "";
}
function l(e2) {
  var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return l = function(e3) {
    if (null === e3 || !function(e4) {
      try {
        return -1 !== Function.toString.call(e4).indexOf("[native code]");
      } catch (t3) {
        return "function" == typeof e4;
      }
    }(e3)) return e3;
    if ("function" != typeof e3) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== t2) {
      if (t2.has(e3)) return t2.get(e3);
      t2.set(e3, n3);
    }
    function n3() {
      return function(e4, t3, n4) {
        if (a2()) return Reflect.construct.apply(null, arguments);
        var r3 = [null];
        r3.push.apply(r3, t3);
        var o3 = new (e4.bind.apply(e4, r3))();
        return n4 && c2(o3, n4.prototype), o3;
      }(e3, arguments, i2(this).constructor);
    }
    return n3.prototype = Object.create(e3.prototype, { constructor: { value: n3, enumerable: false, writable: true, configurable: true } }), c2(n3, e3);
  }, l(e2);
}
function f2(e2) {
  return e2.replace(/-(\w)/g, function(e3, t2) {
    return t2.toUpperCase();
  });
}
function p2(e2) {
  return e2.children;
}
function d2(e2, t2) {
  null != e2 && ("function" == typeof e2 ? e2(t2) : e2.current = t2);
}
function h2(e2) {
  return "[object Array]" === Object.prototype.toString.call(e2);
}
!function() {
  if ("undefined" != typeof document && !("adoptedStyleSheets" in document)) {
    var e2 = "ShadyCSS" in window && !ShadyCSS.nativeShadow, t2 = document.implementation.createHTMLDocument("boot"), n3 = /* @__PURE__ */ new WeakMap(), r3 = "object" == typeof DOMException ? Error : DOMException, o3 = Object.defineProperty, i3 = Array.prototype.forEach, s3 = /@import.+?;?$/gm, a3 = CSSStyleSheet.prototype;
    a3.replace = function() {
      return Promise.reject(new r3("Can't call replace on non-constructed CSSStyleSheets."));
    }, a3.replaceSync = function() {
      throw new r3("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.");
    };
    var c3 = /* @__PURE__ */ new WeakMap(), u3 = /* @__PURE__ */ new WeakMap(), l2 = /* @__PURE__ */ new WeakMap(), f3 = j2.prototype;
    f3.replace = function(e3) {
      try {
        return this.replaceSync(e3), Promise.resolve(this);
      } catch (e4) {
        return Promise.reject(e4);
      }
    }, f3.replaceSync = function(e3) {
      if (A2(this), "string" == typeof e3) {
        var t3 = this, n4 = c3.get(t3).ownerNode;
        n4.textContent = function(e4) {
          var t4 = e4.replace(s3, "");
          return t4 !== e4 && console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"), t4.trim();
        }(e3), c3.set(t3, n4.sheet), u3.get(t3).forEach(function(e4) {
          e4.isConnected() && P2(t3, O2(t3, e4));
        });
      }
    }, o3(f3, "cssRules", { configurable: true, enumerable: true, get: function() {
      return A2(this), c3.get(this).cssRules;
    } }), ["addImport", "addPageRule", "addRule", "deleteRule", "insertRule", "removeImport", "removeRule"].forEach(function(e3) {
      f3[e3] = function() {
        var t3 = this;
        A2(t3);
        var n4 = arguments, r4 = c3.get(t3), o4 = u3.get(t3), i4 = r4[e3].apply(r4, n4);
        return o4.forEach(function(r5) {
          if (r5.isConnected()) {
            var o5 = O2(t3, r5).sheet;
            o5[e3].apply(o5, n4);
          }
        }), i4;
      };
    }), o3(j2, Symbol.hasInstance, { configurable: true, value: E2 });
    var p3 = { childList: true, subtree: true }, d3 = /* @__PURE__ */ new WeakMap(), h3 = /* @__PURE__ */ new WeakMap(), v2 = /* @__PURE__ */ new WeakMap(), y2 = /* @__PURE__ */ new WeakMap(), m2 = x2.prototype;
    if (m2.isConnected = function() {
      var e3 = h3.get(this);
      return e3 instanceof Document ? "loading" !== e3.readyState : function(e4) {
        return "isConnected" in e4 ? e4.isConnected : document.contains(e4);
      }(e3.host);
    }, m2.connect = function() {
      var e3 = T2(this);
      y2.get(this).observe(e3, p3), v2.get(this).length > 0 && _2(this), R2(e3, function(e4) {
        k2(e4).connect();
      });
    }, m2.disconnect = function() {
      y2.get(this).disconnect();
    }, m2.update = function(e3) {
      var t3 = this, n4 = h3.get(t3) === document ? "Document" : "ShadowRoot";
      if (!Array.isArray(e3)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + n4 + ": Iterator getter is not callable.");
      if (!e3.every(E2)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + n4 + ": Failed to convert value to 'CSSStyleSheet'");
      if (e3.some(C2)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + n4 + ": Can't adopt non-constructed stylesheets");
      t3.sheets = e3;
      var r4, o4, i4 = v2.get(t3), s4 = (r4 = e3).filter(function(e4, t4) {
        return r4.indexOf(e4) === t4;
      });
      (o4 = s4, i4.filter(function(e4) {
        return -1 === o4.indexOf(e4);
      })).forEach(function(e4) {
        var n5;
        (n5 = O2(e4, t3)).parentNode.removeChild(n5), function(e5, t4) {
          l2.get(e5).delete(t4), u3.set(e5, u3.get(e5).filter(function(e6) {
            return e6 !== t4;
          }));
        }(e4, t3);
      }), v2.set(t3, s4), t3.isConnected() && s4.length > 0 && _2(t3);
    }, window.CSSStyleSheet = j2, N2(Document), "ShadowRoot" in window) {
      N2(ShadowRoot);
      var g2 = Element.prototype, b3 = g2.attachShadow;
      g2.attachShadow = function(e3) {
        var t3 = b3.call(this, e3);
        return "closed" === e3.mode && n3.set(this, t3), t3;
      };
    }
    var S2 = k2(document);
    S2.isConnected() ? S2.connect() : document.addEventListener("DOMContentLoaded", S2.connect.bind(S2));
  }
  function w2(e3) {
    return e3.shadowRoot || n3.get(e3);
  }
  function E2(e3) {
    return "object" == typeof e3 && (f3.isPrototypeOf(e3) || a3.isPrototypeOf(e3));
  }
  function C2(e3) {
    return "object" == typeof e3 && a3.isPrototypeOf(e3);
  }
  function O2(e3, t3) {
    return l2.get(e3).get(t3);
  }
  function P2(e3, t3) {
    requestAnimationFrame(function() {
      var n4, r4;
      !function(e4) {
        for (var t4 = 0; t4 < e4.cssRules.length; t4++) e4.deleteRule(0);
      }(t3.sheet), n4 = c3.get(e3), r4 = t3.sheet, i3.call(n4.cssRules, function(e4, t4) {
        r4.insertRule(e4.cssText, t4);
      });
    });
  }
  function A2(e3) {
    if (!c3.has(e3)) throw new TypeError("Illegal invocation");
  }
  function j2() {
    var e3 = this, n4 = document.createElement("style");
    t2.body.appendChild(n4), c3.set(e3, n4.sheet), u3.set(e3, []), l2.set(e3, /* @__PURE__ */ new WeakMap());
  }
  function k2(e3) {
    var t3 = d3.get(e3);
    return t3 || (t3 = new x2(e3), d3.set(e3, t3)), t3;
  }
  function N2(e3) {
    o3(e3.prototype, "adoptedStyleSheets", { configurable: true, enumerable: true, get: function() {
      return k2(this).sheets;
    }, set: function(e4) {
      k2(this).update(e4);
    } });
  }
  function R2(e3, t3) {
    for (var n4 = document.createNodeIterator(e3, NodeFilter.SHOW_ELEMENT, function(e4) {
      return w2(e4) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }, null, false), r4 = void 0; r4 = n4.nextNode(); ) t3(w2(r4));
  }
  function T2(e3) {
    var t3 = h3.get(e3);
    return t3 instanceof Document ? t3.body : t3;
  }
  function _2(e3) {
    var t3 = document.createDocumentFragment(), n4 = v2.get(e3), r4 = y2.get(e3), o4 = T2(e3);
    r4.disconnect(), n4.forEach(function(n5) {
      t3.appendChild(O2(n5, e3) || function(e4, t4) {
        var n6 = document.createElement("style");
        return l2.get(e4).set(t4, n6), u3.get(e4).push(t4), n6;
      }(n5, e3));
    }), o4.insertBefore(t3, null), r4.observe(o4, p3), n4.forEach(function(t4) {
      P2(t4, O2(t4, e3));
    });
  }
  function x2(t3) {
    var n4 = this;
    n4.sheets = [], h3.set(n4, t3), v2.set(n4, []), y2.set(n4, new MutationObserver(function(t4, r4) {
      document ? t4.forEach(function(t5) {
        e2 || i3.call(t5.addedNodes, function(e3) {
          e3 instanceof Element && R2(e3, function(e4) {
            k2(e4).connect();
          });
        }), i3.call(t5.removedNodes, function(t6) {
          t6 instanceof Element && (function(e3, t7) {
            return t7 instanceof HTMLStyleElement && v2.get(e3).some(function(t8) {
              return O2(t8, e3);
            });
          }(n4, t6) && _2(n4), e2 || R2(t6, function(e3) {
            k2(e3).disconnect();
          }));
        });
      }) : r4.disconnect();
    }));
  }
}(), function() {
  var e2 = "undefined" != typeof window ? window : global;
  if (void 0 !== e2.Reflect && void 0 !== e2.customElements && !e2.customElements.hasOwnProperty("polyfillWrapFlushCallback")) {
    var t2 = e2.HTMLElement;
    e2.HTMLElement = function() {
      return Reflect.construct(t2, [], this.constructor);
    }, HTMLElement.prototype = t2.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, t2);
  }
}();
var v = /\B([A-Z])/g;
function y(e2) {
  return e2.replace(v, "-$1").toLowerCase();
}
function m(e2) {
  var t2 = new CSSStyleSheet();
  return t2.replaceSync(e2), t2;
}
function g(e2, t2) {
  return e2.normalizedNodeName === t2 || e2.nodeName.toLowerCase() === t2.toLowerCase();
}
function b2() {
  return {};
}
function S(e2, t2, n3) {
  return { configurable: true, get: function() {
    var e3 = n3.value.bind(this);
    return Object.defineProperty(this, t2, { value: e3, configurable: true, writable: true }), e3;
  } };
}
function w(e2) {
  return "object" == typeof e2 && !Array.isArray(e2) && null !== e2;
}
function E(e2) {
  return !!/^class\s/.test(e2.toString()) || false;
}
function C(e2, t2, n3) {
  var r3 = Object.assign({ merge: "uniqueMerge", default: null }, n3), o3 = E(e2) ? e2 : e2.constructor, i3 = o3[t2], s3 = w(i3) ? 0 : Array.isArray(i3) ? 1 : 2;
  if ("none" === r3.merge || 2 === s3) return i3;
  for (var a3 = 0 === s3 ? Object.assign({}, r3.default) : r3.default, c3 = [i3]; o3 && (o3 = o3.__proto__)[t2]; ) c3.push(o3[t2]);
  var u3 = i3;
  return u3 = 0 === s3 ? c3.reduce(function(e3, t3) {
    return w(t3) ? Object.assign({}, a3, t3, e3) : e3;
  }, {}) : c3.reduce(function(e3, t3) {
    return Array.isArray(t3) && e3.push.apply(e3, t3), e3;
  }, []), Array.isArray(u3) && "uniqueMerge" === r3.merge && (u3 = Array.from(new Set(u3)), w(a3) && u3.forEach(function(e3, t3) {
    w(e3) && (u3[t3] = Object.assign({}, a3, e3));
  })), u3 || a3;
}
function O(e2, t2) {
  e2.hooks || (e2.hooks = {}), Object.entries(t2).forEach(function(t3) {
    var n3 = t3[0], r3 = t3[1];
    e2.hooks[n3] || (e2.hooks[n3] = []), e2.hooks[n3].push(r3);
  });
}
function P(e2, t2) {
  var n3;
  if (t2 ? t2.ignoreAttrs = true : t2 = { ignoreAttrs: true }, arguments.length > 2 ? n3 = [].slice.call(arguments, 2).flat() : null != t2.children && (n3 = t2.children, delete t2.children), e2 === p2) return n3;
  if ("function" == typeof e2) {
    if (!e2.tagName) return n3 && (t2.children = n3), e2(t2);
    e2 = e2.tagName;
  }
  return { nodeName: e2, children: n3, attributes: t2, key: t2.key };
}
function A(e2, t2) {
  var n3 = [].slice.call(arguments, 2);
  return P(e2.nodeName, o2({}, e2.attributes, t2), n3.length > 0 ? n3.flat() : e2.children);
}
Array.prototype.flat || (Array.prototype.flat = function(e2) {
  void 0 === e2 && (e2 = 1);
  var t2 = [], r3 = function(o3, i3) {
    for (var s3, a3 = function(e3) {
      var t3 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (t3) return (t3 = t3.call(e3)).next.bind(t3);
      if (Array.isArray(e3) || (t3 = function(e4, t4) {
        if (e4) {
          if ("string" == typeof e4) return n2(e4, t4);
          var r5 = {}.toString.call(e4).slice(8, -1);
          return "Object" === r5 && e4.constructor && (r5 = e4.constructor.name), "Map" === r5 || "Set" === r5 ? Array.from(e4) : "Arguments" === r5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r5) ? n2(e4, t4) : void 0;
        }
      }(e3))) {
        t3 && (e3 = t3);
        var r4 = 0;
        return function() {
          return r4 >= e3.length ? { done: true } : { done: false, value: e3[r4++] };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }(o3); !(s3 = a3()).done; ) {
      var c3 = s3.value;
      Array.isArray(c3) && i3 < e2 ? r3(c3, i3 + 1) : t2.push(c3);
    }
  };
  return r3(this, 0), t2;
}), P.f = p2;
var j = { onanimationcancel: 1, oncompositionend: 1, oncompositionstart: 1, oncompositionupdate: 1, onfocusin: 1, onfocusout: 1, onscrollend: 1, ontouchcancel: 1, ontouchend: 1, ontouchmove: 1, ontouchstart: 1 };
var k = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
var N = {};
function R(e2, t2) {
  N["o-" + e2] = t2;
}
function T(e2) {
  var t2 = e2.parentNode;
  t2 && t2.removeChild(e2);
}
function _(e2, t2, n3, r3, o3) {
  if ("className" === t2 && (t2 = "class"), "o" == t2[0] && "-" == t2[1] && Promise.resolve().then(function() {
    var n4;
    null == (n4 = N[t2]) || n4.call(N, e2, r3);
  }), "key" === t2 || "ignoreAttrs" === t2) ;
  else if ("ref" === t2) d2(n3, null), d2(r3, e2);
  else if ("class" !== t2 || o3) if ("style" === t2) if ("string" == typeof r3) e2.style.cssText = r3;
  else {
    if ("string" == typeof n3 && (e2.style.cssText = n3 = ""), n3) for (t2 in n3) r3 && t2 in r3 || M(e2.style, t2, "");
    if (r3) for (t2 in r3) n3 && r3[t2] === n3[t2] || M(e2.style, t2, r3[t2]);
  }
  else if ("unsafeHTML" === t2) r3 && (e2.innerHTML = r3.html || r3 || "");
  else if ("o" == t2[0] && "n" == t2[1]) !function(e3, t3, n4, r4) {
    var o4 = t3 !== (t3 = t3.replace(/Capture$/, "")), i4 = t3.toLowerCase();
    t3 = (j[i4] || i4 in e3 ? i4 : t3).slice(2), n4 ? r4 || e3.addEventListener(t3, x, o4) : e3.removeEventListener(t3, x, o4), (e3._listeners || (e3._listeners = {}))[t3] = n4;
  }(e2, t2, r3, n3);
  else if ("INPUT" === e2.nodeName && "value" === t2) e2.value = null == r3 ? "" : r3;
  else if ("list" !== t2 && "type" !== t2 && "css" !== t2 && !o3 && t2 in e2) {
    try {
      e2[t2] = null == r3 ? "" : r3;
    } catch (e3) {
    }
    null != r3 && false !== r3 || "spellcheck" == t2 || e2.removeAttribute(t2);
  } else {
    var i3 = o3 && t2 !== (t2 = t2.replace(/^xlink:?/, ""));
    if (null == r3 || false === r3) i3 ? e2.removeAttributeNS("http://www.w3.org/1999/xlink", t2.toLowerCase()) : e2.removeAttribute(t2);
    else if ("function" != typeof r3) if (i3) e2.setAttributeNS("http://www.w3.org/1999/xlink", t2.toLowerCase(), r3);
    else if ("Component" === e2.constructor.is) {
      var s3, a3 = null == (s3 = e2.constructor.reflectProps) ? void 0 : s3[t2];
      a3 && e2.setAttribute(t2, "function" == typeof a3 ? a3(r3) : r3);
    } else e2.setAttribute(t2, r3);
  }
  else e2.className = r3 || "";
}
function x(e2) {
  return this._listeners[e2.type](e2);
}
function M(e2, t2, n3) {
  "-" === t2[0] ? e2.setProperty(t2, null == n3 ? "" : n3.toString()) : e2[t2] = null == n3 ? "" : "number" != typeof n3 || k.test(t2) ? n3.toString() : n3 + "px";
}
var L = 0;
var F = false;
var I = false;
var D = false;
function V(e2, t2, n3, r3, o3) {
  return e2 || t2 ? (r3 && r3.constructor.isLightDOM && (r3.innerHTML = ""), L++ || (F = null != n3 && void 0 !== n3.ownerSVGElement, D = false), h2(t2) ? n3 ? (W(n3, t2, D, r3, o3), i3 = n3.childNodes) : (i3 = [], t2.forEach(function(t3, n4) {
    var s4 = H(0 === n4 ? e2 : null, t3, r3, o3);
    i3.push(s4);
  })) : (h2(e2) || e2 instanceof NodeList ? [].concat(e2).forEach(function(e3, n4) {
    0 === n4 ? i3 = H(e3, t2, r3, o3) : U(e3, false);
  }) : i3 = H(e2, t2, r3, o3), n3 && (null == (s3 = i3) ? void 0 : s3.parentNode) !== n3 && n3.appendChild(i3)), --L || (D = false), i3) : null;
  var i3, s3;
}
function H(e2, t2, n3, r3) {
  e2 && t2 && e2.props && (e2.props.children = t2.children);
  var o3, i3 = e2, s3 = F, a3 = I;
  if (null != t2 && "boolean" != typeof t2 || (t2 = ""), "string" == typeof t2 || "number" == typeof t2) return e2 && void 0 !== e2.splitText && e2.parentNode && (!e2._component || n3) ? e2.nodeValue != t2 && (e2.nodeValue = String(t2)) : (i3 = document.createTextNode(String(t2)), e2 && (e2.parentNode && (null == (o3 = e2.parentNode) || o3.replaceChild(i3, e2)), U(e2, true))), i3 && (i3.prevProps = {}), i3;
  var c3, u3, l2, p3 = t2.nodeName;
  if (I = "foreignObject" === p3, F = "svg" === p3 || !I && F, p3 = String(p3), (!e2 || !g(e2, p3)) && (u3 = p3, (l2 = I || F ? document.createElementNS("http://www.w3.org/2000/svg", u3) : document.createElement(u3)).normalizedNodeName = u3, "Component" === (null == (c3 = (i3 = l2).constructor) ? void 0 : c3.is) && Object.assign(i3.props, t2.attributes), e2)) {
    for (var d3; e2.firstChild; ) i3.appendChild(e2.firstChild);
    e2.parentNode && (null == (d3 = e2.parentNode) || d3.replaceChild(i3, e2)), U(e2, true);
  }
  var h3 = i3.firstChild, v2 = i3.prevProps, y2 = t2.children;
  if (null == v2) {
    v2 = i3.prevProps = {};
    for (var m2 = i3.attributes, b3 = m2.length; b3--; ) v2[m2[b3].name] = m2[b3].value;
  }
  return !D && y2 && 1 === y2.length && "string" == typeof y2[0] && null != h3 && void 0 !== h3.splitText && null == h3.nextSibling ? h3.nodeValue != y2[0] && (h3.nodeValue = y2[0]) : (y2 && y2.length || null != h3) && ("Component" == i3.constructor.is && i3.constructor.noSlot || W(i3, y2, D || null != v2.unsafeHTML, n3, r3)), function(e3, t3, n4, r4, o4) {
    var i4, s4, a4 = e3.update;
    for (i4 in e3.receiveProps && (s4 = Object.assign({}, n4)), n4) t3 && null != t3[i4] || null == n4[i4] || (_(e3, i4, n4[i4], n4[i4] = void 0, I || F), a4 && delete e3.props[i4]);
    for (i4 in t3) if (a4 && "object" == typeof t3[i4] && "ref" !== i4) {
      ("style" === i4 || "o" === i4[0] && "-" === i4[1]) && _(e3, i4, n4[i4], n4[i4] = t3[i4], I || F);
      var c4 = f2(i4);
      e3.props[c4] = n4[c4] = t3[i4];
    } else if ("children" !== i4 && (!(i4 in n4) || t3[i4] !== ("value" === i4 || "checked" === i4 ? e3[i4] : n4[i4]))) if (_(e3, i4, n4[i4], t3[i4], I || F), -1 !== e3.nodeName.indexOf("-")) {
      e3.props = e3.props || {};
      var u4 = f2(i4);
      e3.props[u4] = n4[u4] = t3[i4];
    } else n4[i4] = t3[i4];
    a4 && !o4 && e3.parentNode && false !== e3.receiveProps(e3.props, s4) && e3.queuedUpdate();
  }(i3, t2.attributes, v2, 0, r3), i3.props && (i3.props.children = t2.children), F = s3, I = a3, i3;
}
function W(e2, t2, n3, r3, o3) {
  var i3, s3, a3, c3, u3, l2, f3, p3 = e2.childNodes, d3 = [], h3 = {}, v2 = 0, y2 = 0, m2 = p3.length, b3 = 0, S2 = t2 ? t2.length : 0;
  if (0 !== m2) for (var w2 = 0; w2 < m2; w2++) {
    var E2, C2 = p3[w2], O2 = C2.prevProps, P2 = S2 && O2 ? O2.key : null;
    null != P2 ? (v2++, h3[P2] = C2) : (O2 || (void 0 !== C2.splitText ? !n3 || (null == (E2 = C2.nodeValue) ? void 0 : E2.trim()) : n3)) && (d3[b3++] = C2);
  }
  if (0 !== S2) for (var A2 = 0; A2 < S2; A2++) {
    if (u3 = null, c3 = t2[A2]) {
      var j2 = c3.key;
      if (null != j2) v2 && void 0 !== h3[j2] && (u3 = h3[j2], h3[j2] = void 0, v2--);
      else if (y2 < b3) {
        for (i3 = y2; i3 < b3; i3++) if (void 0 !== d3[i3] && (l2 = s3 = d3[i3], "string" == typeof (f3 = c3) || "number" == typeof f3 ? void 0 !== l2.splitText : g(l2, f3.nodeName))) {
          u3 = s3, d3[i3] = void 0, i3 === b3 - 1 && b3--, i3 === y2 && y2++;
          break;
        }
      }
    }
    u3 = H(u3, c3, r3, o3), a3 = p3[A2], u3 && u3 !== e2 && u3 !== a3 && (null == a3 ? e2.appendChild(u3) : u3 === a3.nextSibling ? T(a3) : e2.insertBefore(u3, a3));
  }
  if (v2) for (var k2 in h3) void 0 !== h3[k2] && U(h3[k2], false);
  for (; y2 <= b3; ) void 0 !== (u3 = d3[b3--]) && U(u3, false);
}
function U(e2, t2) {
  null != e2.prevProps && e2.prevProps.ref && ("function" == typeof e2.prevProps.ref ? e2.prevProps.ref(null) : e2.prevProps.ref.current && (e2.prevProps.ref.current = null)), false !== t2 && null != e2.prevProps || T(e2), function(e3) {
    var t3;
    for (e3 = null == (t3 = e3) ? void 0 : t3.lastChild; e3; ) {
      var n3 = e3.previousSibling;
      U(e3, true), e3 = n3;
    }
  }(e2);
}
var q = { mixin: {}, globalCSS: [] };
function B(e2) {
  Object.assign(q.mixin, e2);
}
function $(e2) {
  q.globalCSS.includes(e2) || q.globalCSS.push(e2);
}
var J = { define: function(e2) {
  e2.prototype.formAssociatedCallback = function(e3) {
    this._form = e3, this._form && this._form.addEventListener("formdata", this.handleFormData.bind(this));
  };
}, initial: function(e2) {
  e2.getFieldValue || (e2.getFieldValue = function() {
    var t2, n3 = {};
    return e2._inputs = null == (t2 = e2.shadowRoot) ? void 0 : t2.querySelectorAll("input"), e2._inputs.forEach(function(e3) {
      n3[e3.name] = e3.value;
    }), n3;
  }), e2.resetFieldValue || (e2.resetFieldValue = function() {
    var t2;
    e2._inputs = null == (t2 = e2.shadowRoot) ? void 0 : t2.querySelectorAll("input"), e2._inputs.forEach(function(e3) {
      e3.value = "";
    });
  }), e2.handleFormData || (e2.handleFormData = function(t2) {
    var n3 = t2.formData;
    if (n3) {
      var r3 = e2.getFieldValue();
      Object.entries(r3).forEach(function(e3) {
        n3.append(e3[0], e3[1]);
      });
    }
  }), e2._internals = e2.attachInternals();
}, connected: function(e2) {
} };
function Q(e2, t2) {
  Object.defineProperty(t2, "tagName", { value: e2, writable: false }), customElements.get(e2) ? console.warn(`Failed to execute 'define' on 'CustomElementRegistry': the tag name "` + e2 + '" has already been used with this registry') : customElements.define(e2, t2);
}
function z(e2, t2) {
  var n3 = Object.assign({ formAssociated: false }, t2).formAssociated;
  return function(t3) {
    n3 && (n3 && (O(t3, J), t3.formAssociated = true), function(e3, t4) {
      var n4 = e3._hooks ? e3._hooks : C(e3, "hooks") || {};
      if (E(e3) || (e3._hooks = n4), t4 in n4) {
        var r3 = n4[t4];
        Array.isArray(r3) && r3.forEach(function(n5) {
          try {
            n5.call(e3, e3);
          } catch (n6) {
            console.warn("Error occurred while executing hook function " + (E(e3) ? e3.constructor.name : e3.name) + "/" + t4 + ":", n6);
          }
        });
      }
    }(t3, "define")), Q(e2, t3);
  };
}
var G = z;
var Z = { initial: function(e2) {
  Object.defineProperty(e2, "ref", { get: function() {
    return e2._ref || (e2._ref = new Proxy({ current: void 0 }, { set: function(t2, n3, r3, o3) {
      return "current" === n3 && e2.fire("refAttached", { ref: r3, target: e2 }, { bubbles: true, composed: true }), Reflect.set(t2, n3, r3, o3);
    } })), e2._ref;
  } }), e2._onRefAttached = function(t2) {
    var n3 = t2.detail;
    n3.target !== e2 && e2.props.ref && (e2.props.ref.current = n3.ref);
  }, e2.addEventListener("refAttached", e2._onRefAttached);
}, disconnected: function(e2) {
  e2.removeEventListener("refAttached", e2._onRefAttached);
} };
var K = 0;
var X = /* @__PURE__ */ new WeakMap();
var Y = function(n3) {
  function o3() {
    var e2;
    return (e2 = n3.call(this) || this).elementId = void 0, e2.isInstalled = void 0, e2.inject = void 0, e2.injection = void 0, e2.renderRoot = void 0, e2.rootElement = void 0, e2._hooks = void 0, e2._ref = null, e2.state = void 0, e2.updateQueued = false, e2.handleProps(), O(e2, Z), e2.executeHooks("initial"), e2.elementId = K++, e2.isInstalled = false, e2.rootElement = null, e2;
  }
  s2(o3, n3), o3.define = function(e2) {
    Q(e2, this);
  };
  var i3, a3, c3, u3 = o3.prototype;
  return u3.executeHooks = function(e2) {
    var t2 = this;
    if (e2 in this.hooks) {
      var n4 = this.hooks[e2];
      Array.isArray(n4) && n4.forEach(function(n5) {
        try {
          n5.call(t2, t2);
        } catch (n6) {
          console.warn("Error occurred while executing hook function " + t2.constructor.name + "/" + e2 + ":", n6);
        }
      });
    }
  }, u3.handleProps = function() {
    this.constructor.defaultProps = C(this, "defaultProps", { default: {} }) || {}, this.constructor.propTypes = C(this, "propTypes", { default: {} }) || {}, this.constructor.reflectProps = C(this, "reflectProps", { default: {} }) || {};
    var e2 = C(this, "props", { default: {}, merge: "uniqueMerge" });
    if (this.constructor.props) for (var t2 in e2) {
      var n4 = e2[t2];
      this.constructor.defaultProps[t2] = n4.default, this.constructor.propTypes[t2] = n4.type, this.constructor.reflectProps[t2] = n4.reflect;
    }
    this.props = Object.assign({}, this.constructor.defaultProps, this.props);
  }, u3.attributeChangedCallback = function(e2, t2, n4) {
    var r3 = f2(e2);
    if (this.constructor.props && this.constructor.props[r3]) {
      var o4 = this.constructor.props[r3];
      if (o4.changed) {
        var i4 = this.getTypeValueOfProp(r3, n4), s3 = this.getTypeValueOfProp(r3, t2);
        o4.changed.call(this, i4, s3);
      }
    }
  }, u3.setState = function(e2, t2) {
    var n4 = this;
    if (void 0 === t2 && (t2 = false), "object" != typeof e2) throw new Error("takes an object of state variables to update");
    Object.keys(e2).forEach(function(t3) {
      return n4.state[t3] = e2[t3];
    }), t2 || this.queuedUpdate();
  }, u3.injectObject = function() {
    for (var e2 = this, t2 = this.parentNode; t2 && !this.store && !q.mixin.store; ) this.store = t2.store, t2 = t2.parentNode || t2.host;
    if (this.inject) {
      var n4;
      for (this.injection = {}, t2 = this.parentNode; t2 && !n4; ) n4 = t2.provide, t2 = t2.parentNode || t2.host;
      n4 && this.inject.forEach(function(t3) {
        e2.injection[t3] = n4[t3];
      });
    }
    var r3 = function(t3) {
      e2.hasOwnProperty(t3) || Object.defineProperty(e2, t3, { get: function() {
        return q.mixin[t3];
      } });
    };
    for (var o4 in q.mixin) r3(o4);
  }, u3.createRenderRoot = function() {
    if (this.constructor.isLightDOM) return this;
    if (this.shadowRoot) {
      for (var e2; e2 = this.shadowRoot.firstChild; ) this.shadowRoot.removeChild(e2);
      return this.shadowRoot;
    }
    return this.attachShadow({ mode: "open" });
  }, u3.applyAdoptedStyleSheets = function() {
    if (this.constructor.isLightDOM || X.has(this.constructor)) this.renderRoot.adoptedStyleSheets = X.get(this.constructor);
    else {
      var e2 = this.constructor.css;
      if (e2) {
        var t2 = [];
        t2 = "string" == typeof e2 ? [m(e2)] : h2(e2) ? e2.map(function(e3) {
          return "string" == typeof e3 ? m(e3) : e3.default && "string" == typeof e3.default ? m(e3.default) : e3;
        }) : e2.default && "string" == typeof e2.default ? [m(e2.default)] : [e2], t2 = [].concat(q.globalCSS, t2), this.renderRoot.adoptedStyleSheets = t2, X.set(this.constructor, t2);
      } else q.globalCSS.length && (this.renderRoot.adoptedStyleSheets = q.globalCSS);
    }
  }, u3.appendStyleVNode = function(e2) {
    if (this.props.css && e2) {
      var t2 = { nodeName: "style", attributes: {}, children: [this.props.css] };
      e2.push ? e2.push(t2) : e2.children.push(t2);
    }
  }, u3.connectedCallback = function() {
    var n4 = this;
    this.injectObject(), this.attrsToProps(), this.install(), this.fire("install", this), this.renderRoot = this.createRenderRoot(), this.applyAdoptedStyleSheets(), n(this), this.beforeRender(), this.fire("beforeRender", this);
    var r3, o4 = this.render(this.props, this.store);
    this.appendStyleVNode(o4), this.rendered(o4), c(), this.rootElement = V(null, o4, null, this, false), h2(this.rootElement) ? this.rootElement.forEach(function(e2) {
      var t2;
      null == (t2 = n4.renderRoot) || t2.appendChild(e2);
    }) : this.rootElement && (null == (r3 = this.renderRoot) || r3.appendChild(this.rootElement)), this.installed(), this.fire("installed", this), this.isInstalled = true, Promise.resolve().then(function() {
      n4.ready(), n4.fire("ready", n4);
    }), this.executeHooks("connected");
  }, u3.disconnectedCallback = function() {
    this.uninstall(), this.fire("uninstall", this), this.isInstalled = false, this.executeHooks("disconnected");
  }, u3.update = function(n4) {
    this.beforeUpdate(), this.fire("beforeUpdate", this), this.attrsToProps(), n(this), this.beforeRender(), this.fire("beforeRender", this);
    var r3 = this.render(this.props, this.store);
    this.appendStyleVNode(r3), this.rendered(r3), c(null), this.rootElement = V(this.rootElement, r3, this.renderRoot, this, !!n4), this.updated(), this.fire("updated", this);
  }, u3.queuedUpdate = function() {
    var e2 = this;
    this.updateQueued || (this.updateQueued = true, Promise.resolve().then(function() {
      e2.update(), e2.updateQueued = false;
    }));
  }, u3.updateProps = function(e2) {
    var t2 = this;
    Object.keys(e2).forEach(function(n4) {
      t2.props[n4] = e2[n4], t2.prevProps && (t2.prevProps[n4] = e2[n4]);
    }), this.update();
  }, u3.updateSelf = function() {
    this.update(true);
  }, u3.removeProp = function(e2) {
    this.removeAttribute(e2), this.isInstalled && this.update();
  }, u3.setProp = function(e2, t2) {
    this.setAttribute(e2, t2 && "object" == typeof t2 ? JSON.stringify(t2) : t2), this.isInstalled && this.update();
  }, u3.attrsToProps = function() {
    var e2 = this;
    if (!this.props.ignoreAttrs) {
      var t2 = this;
      t2.props.css = t2.getAttribute("css");
      var n4 = this.constructor.propTypes;
      n4 && Object.keys(n4).forEach(function(n5) {
        var r3 = t2.getAttribute(y(n5));
        t2.props[n5] = null !== r3 ? e2.getTypeValueOfProp(n5, r3) : t2.constructor.defaultProps && t2.constructor.defaultProps.hasOwnProperty(n5) ? t2.constructor.defaultProps[n5] : null;
      });
    }
  }, u3.getTypeValueOfProp = function(e2, t2) {
    for (var n4 = this.constructor.propTypes, r3 = h2(n4[e2]) ? n4[e2] : [n4[e2]], o4 = 0; o4 < r3.length; o4++) switch (r3[o4]) {
      case String:
        return t2;
      case Number:
        return Number(t2);
      case Boolean:
        return Boolean("false" !== t2 && "0" !== t2);
      case Array:
      case Object:
        try {
          return JSON.parse(t2);
        } catch (n5) {
          console.warn("The " + e2 + " object prop does not comply with the JSON specification, the incorrect string is [" + t2 + "].");
        }
    }
  }, u3.fire = function(e2, t2, n4) {
    var r3 = Object.assign({ bubbles: false, composed: false }, n4), o4 = r3.bubbles, i4 = r3.composed, s3 = this.props["on" + function(e3) {
      return e3.replace(/\-(\w)/g, function(e4, t3) {
        return t3.toUpperCase();
      }).replace(/^\S/, function(e4) {
        return e4.toUpperCase();
      });
    }(e2)];
    s3 ? s3(new CustomEvent(e2, { detail: t2, bubbles: o4, composed: i4 })) : this.dispatchEvent(new CustomEvent(e2, { detail: t2, bubbles: o4, composed: i4 }));
  }, u3.install = function() {
  }, u3.installed = function() {
  }, u3.ready = function() {
  }, u3.uninstall = function() {
  }, u3.beforeUpdate = function() {
  }, u3.updated = function() {
  }, u3.beforeRender = function() {
  }, u3.rendered = function(e2) {
  }, u3.receiveProps = function() {
  }, i3 = o3, c3 = [{ key: "observedAttributes", get: function() {
    return this.props ? Object.keys(this.props).map(y) : [];
  } }], (a3 = [{ key: "ref", get: function() {
  } }, { key: "hooks", get: function() {
    return this._hooks || (this._hooks = C(this, "hooks") || {}), this._hooks;
  } }]) && r2(i3.prototype, a3), c3 && r2(i3, c3), Object.defineProperty(i3, "prototype", { writable: false }), i3;
}(l(HTMLElement));
Y.is = "Component", Y.defaultProps = void 0, Y.reflectProps = void 0, Y.propTypes = void 0, Y.css = void 0, Y.isLightDOM = void 0, Y.noSlot = void 0, Y.hooks = void 0, Y.props = {}, Y.formAssociated = true;
var ee = function(e2) {
  function t2() {
    for (var t3, n4 = arguments.length, r3 = new Array(n4), o3 = 0; o3 < n4; o3++) r3[o3] = arguments[o3];
    return (t3 = e2.call.apply(e2, [this].concat(r3)) || this)._form = null, t3._inputs = [], t3._internals = null, t3;
  }
  s2(t2, e2);
  var n3 = t2.prototype;
  return n3.formAssociatedCallback = function(e3) {
  }, n3.handleFormData = function(e3) {
  }, n3.getFieldValue = function() {
  }, n3.handleField = function(e3) {
  }, n3.formDisabledCallback = function() {
  }, n3.formResetCallback = function() {
  }, n3.formStateRestoreCallback = function(e3, t3) {
  }, t2;
}(Y);
function te(e2, t2, n3) {
  return t2 = "string" == typeof t2 ? document.querySelector(t2) : t2, n3 && t2 && (t2.store = n3), V(null, e2, t2, null, false);
}
ee.formAssociated = false;
var ne = {}.hasOwnProperty;
function re() {
  for (var e2 = [].slice.call(arguments), t2 = [], n3 = 0; n3 < e2.length; n3++) {
    var r3 = e2[n3];
    if (r3) {
      var o3 = typeof r3;
      if ("string" === o3 || "number" === o3) t2.push(r3);
      else if (Array.isArray(r3) && r3.length) {
        var i3 = re.apply(void 0, r3);
        i3 && t2.push(i3);
      } else if ("object" === o3) for (var s3 in r3) ne.call(r3, s3) && r3[s3] && t2.push(s3);
    }
  }
  return t2.join(" ");
}
function oe(e2) {
  var t2 = [].slice.call(arguments, 1);
  if (e2.class ? (t2.unshift(e2.class), delete e2.class) : e2.className && (t2.unshift(e2.className), delete e2.className), t2.length > 0) return { class: re.apply(void 0, t2) };
}
var ie = {};
function se(e2) {
  var t2 = [].slice.call(arguments, 1), n3 = "";
  if (e2.forEach(function(e3, r4) {
    if (void 0 !== t2[r4] && "string" != typeof t2[r4] && "number" != typeof t2[r4]) throw new Error("Unsupported value in CSS: " + t2[r4]);
    n3 += e3 + (t2[r4] || "");
  }), ie[n3]) return ie[n3];
  var r3 = new CSSStyleSheet();
  return r3.replaceSync(n3), ie[n3] = r3, r3;
}
var ae = "7.7.3";
export {
  Y as Component,
  ee as FormAssociatedComponent,
  Y as WeElement,
  b as batch,
  S as bind,
  re as classNames,
  c as clearActiveComponent,
  A as cloneElement,
  a as computed,
  P as createElement,
  b2 as createRef,
  se as css,
  Q as define,
  Q as defineElement,
  p as effect,
  oe as extractClass,
  u as getActiveComponent,
  $ as globalCSS,
  P as h,
  B as mixin,
  R as registerDirective,
  te as render,
  n as setActiveComponent,
  d as signal,
  f as signalObject,
  z as tag,
  ae as version,
  G as webcomponent
};
/*! Bundled license information:

weakmap-polyfill/weakmap-polyfill.js:
  (*!
   * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
   * https://github.com/polygonplanet/weakmap-polyfill
   * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
   * @license MIT
   *)
*/
//# sourceMappingURL=omi.js.map
