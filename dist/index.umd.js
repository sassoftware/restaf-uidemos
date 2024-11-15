(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react/jsx-runtime'), require('react'), require('@sassoftware/restaflib'), require('react-dom'), require('@sassoftware/restafedit')) :
  typeof define === 'function' && define.amd ? define(['react/jsx-runtime', 'react', '@sassoftware/restaflib', 'react-dom', '@sassoftware/restafedit'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.smartControls = factory(global.require$$2$1, global.React, global.restaflib, global.ReactDOM, global.restafedit));
})(this, (function (require$$2$1, React, restaflib, ReactDOM, restafedit) { 'use strict';

  function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
  var ReactDOM__namespace = /*#__PURE__*/_interopNamespaceDefault(ReactDOM);

  function _arrayLikeToArray$1(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles$1(r) {
    if (Array.isArray(r)) return r;
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _defineProperty$2(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _iterableToArrayLimit$1(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys$2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2$2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) {
        _defineProperty$2(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _objectWithoutProperties$1(e, t) {
    if (null == e) return {};
    var o,
      r,
      i = _objectWithoutPropertiesLoose$2(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose$2(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t[n] = r[n];
    }
    return t;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _slicedToArray$1(r, e) {
    return _arrayWithHoles$1(r) || _iterableToArrayLimit$1(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest$1();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _unsupportedIterableToArray$1(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
    }
  }

  function _objectWithoutPropertiesLoose$1(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t[n] = r[n];
    }
    return t;
  }

  function _extends$1() {
    return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends$1.apply(null, arguments);
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function getAugmentedNamespace(n) {
    if (n.__esModule) return n;
    var f = n.default;
  	if (typeof f == "function") {
  		var a = function a () {
  			if (this instanceof a) {
          return Reflect.construct(f, arguments, this.constructor);
  			}
  			return f.apply(this, arguments);
  		};
  		a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

  // https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
  function isPlainObject(item) {
    if (typeof item !== 'object' || item === null) {
      return false;
    }
    const prototype = Object.getPrototypeOf(item);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
  }
  function deepClone(source) {
    if (!isPlainObject(source)) {
      return source;
    }
    const output = {};
    Object.keys(source).forEach(key => {
      output[key] = deepClone(source[key]);
    });
    return output;
  }
  function deepmerge$1(target, source, options = {
    clone: true
  }) {
    const output = options.clone ? _extends$1({}, target) : target;
    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach(key => {
        if (isPlainObject(source[key]) &&
        // Avoid prototype pollution
        Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
          // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
          output[key] = deepmerge$1(target[key], source[key], options);
        } else if (options.clone) {
          output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
        } else {
          output[key] = source[key];
        }
      });
    }
    return output;
  }

  var deepmerge = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: deepmerge$1,
    isPlainObject: isPlainObject
  });

  /**
   * WARNING: Don't import this directly.
   * Use `MuiError` from `@mui/internal-babel-macros/MuiError.macro` instead.
   * @param {number} code
   */
  function formatMuiErrorMessage$1(code) {
    // Apply babel-plugin-transform-template-literals in loose mode
    // loose mode is safe if we're concatenating primitives
    // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose
    /* eslint-disable prefer-template */
    let url = 'https://mui.com/production-error/?code=' + code;
    for (let i = 1; i < arguments.length; i += 1) {
      // rest params over-transpile for this case
      // eslint-disable-next-line prefer-rest-params
      url += '&args[]=' + encodeURIComponent(arguments[i]);
    }
    return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
    /* eslint-enable prefer-template */
  }

  var formatMuiErrorMessage = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: formatMuiErrorMessage$1
  });

  var reactIs$1 = {exports: {}};

  var reactIs_production_min$1 = {};

  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_production_min$1;

  function requireReactIs_production_min$1 () {
  	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
  	hasRequiredReactIs_production_min$1 = 1;
  var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
  	function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}reactIs_production_min$1.ContextConsumer=h;reactIs_production_min$1.ContextProvider=g;reactIs_production_min$1.Element=b;reactIs_production_min$1.ForwardRef=l;reactIs_production_min$1.Fragment=d;reactIs_production_min$1.Lazy=q;reactIs_production_min$1.Memo=p;reactIs_production_min$1.Portal=c;reactIs_production_min$1.Profiler=f;reactIs_production_min$1.StrictMode=e;reactIs_production_min$1.Suspense=m;
  	reactIs_production_min$1.SuspenseList=n;reactIs_production_min$1.isAsyncMode=function(){return !1};reactIs_production_min$1.isConcurrentMode=function(){return !1};reactIs_production_min$1.isContextConsumer=function(a){return v(a)===h};reactIs_production_min$1.isContextProvider=function(a){return v(a)===g};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min$1.isForwardRef=function(a){return v(a)===l};reactIs_production_min$1.isFragment=function(a){return v(a)===d};reactIs_production_min$1.isLazy=function(a){return v(a)===q};reactIs_production_min$1.isMemo=function(a){return v(a)===p};
  	reactIs_production_min$1.isPortal=function(a){return v(a)===c};reactIs_production_min$1.isProfiler=function(a){return v(a)===f};reactIs_production_min$1.isStrictMode=function(a){return v(a)===e};reactIs_production_min$1.isSuspense=function(a){return v(a)===m};reactIs_production_min$1.isSuspenseList=function(a){return v(a)===n};
  	reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};reactIs_production_min$1.typeOf=v;
  	return reactIs_production_min$1;
  }

  var hasRequiredReactIs$1;

  function requireReactIs$1 () {
  	if (hasRequiredReactIs$1) return reactIs$1.exports;
  	hasRequiredReactIs$1 = 1;

  	{
  	  reactIs$1.exports = requireReactIs_production_min$1();
  	}
  	return reactIs$1.exports;
  }

  var reactIsExports = requireReactIs$1();

  // Simplified polyfill for IE11 support
  // https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
  const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
  function getFunctionName(fn) {
    const match = `${fn}`.match(fnNameMatchRegex);
    const name = match && match[1];
    return name || '';
  }
  function getFunctionComponentName(Component, fallback = '') {
    return Component.displayName || Component.name || getFunctionName(Component) || fallback;
  }
  function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
  }

  /**
   * cherry-pick from
   * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
   * originally forked from recompose/getDisplayName with added IE11 support
   */
  function getDisplayName$1(Component) {
    if (Component == null) {
      return undefined;
    }
    if (typeof Component === 'string') {
      return Component;
    }
    if (typeof Component === 'function') {
      return getFunctionComponentName(Component, 'Component');
    }

    // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
    if (typeof Component === 'object') {
      switch (Component.$$typeof) {
        case reactIsExports.ForwardRef:
          return getWrappedName(Component, Component.render, 'ForwardRef');
        case reactIsExports.Memo:
          return getWrappedName(Component, Component.type, 'memo');
        default:
          return undefined;
      }
    }
    return undefined;
  }

  var getDisplayName = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: getDisplayName$1,
    getFunctionName: getFunctionName
  });

  // It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
  //
  // A strict capitalization should uppercase the first letter of each word in the sentence.
  // We only handle the first word.
  function capitalize$1(string) {
    if (typeof string !== 'string') {
      throw new Error(formatMuiErrorMessage$1(7));
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var capitalize = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: capitalize$1
  });

  /**
   * Safe chained function.
   *
   * Will only create a new function if needed,
   * otherwise will pass back existing functions or null.
   */
  function createChainedFunction(...funcs) {
    return funcs.reduce((acc, func) => {
      if (func == null) {
        return acc;
      }
      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    }, () => {});
  }

  // Corresponds to 10 frames at 60 Hz.
  // A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
  function debounce$1(func, wait = 166) {
    let timeout;
    function debounced(...args) {
      const later = () => {
        // @ts-ignore
        func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }
    debounced.clear = () => {
      clearTimeout(timeout);
    };
    return debounced;
  }

  function deprecatedPropType(validator, reason) {
    {
      return () => null;
    }
  }

  function isMuiElement(element, muiNames) {
    var _muiName, _element$type;
    return /*#__PURE__*/React__namespace.isValidElement(element) && muiNames.indexOf( // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName) !== -1;
  }

  function ownerDocument(node) {
    return node && node.ownerDocument || document;
  }

  function ownerWindow(node) {
    const doc = ownerDocument(node);
    return doc.defaultView || window;
  }

  function requirePropFactory(componentNameInError, Component) {
    {
      return () => null;
    }
  }

  /**
   * TODO v5: consider making it private
   *
   * passes {value} to {ref}
   *
   * WARNING: Be sure to only call this inside a callback that is passed as a ref.
   * Otherwise, make sure to cleanup the previous {ref} if it changes. See
   * https://github.com/mui/material-ui/issues/13539
   *
   * Useful if you want to expose the ref of an inner component to the public API
   * while still using it inside the component.
   * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
   */
  function setRef(ref, value) {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }

  /**
   * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
   * This is useful for effects that are only needed for client-side rendering but not for SSR.
   *
   * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
   * and confirm it doesn't apply to your use-case.
   */
  const useEnhancedEffect = typeof window !== 'undefined' ? React__namespace.useLayoutEffect : React__namespace.useEffect;

  let globalId = 0;
  function useGlobalId(idOverride) {
    const [defaultId, setDefaultId] = React__namespace.useState(idOverride);
    const id = idOverride || defaultId;
    React__namespace.useEffect(() => {
      if (defaultId == null) {
        // Fallback to this default id when possible.
        // Use the incrementing value for client-side rendering only.
        // We can't use it server-side.
        // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
        globalId += 1;
        setDefaultId(`mui-${globalId}`);
      }
    }, [defaultId]);
    return id;
  }

  // downstream bundlers may remove unnecessary concatenation, but won't remove toString call -- Workaround for https://github.com/webpack/webpack/issues/14814
  const maybeReactUseId = React__namespace['useId'.toString()];
  /**
   *
   * @example <div id={useId()} />
   * @param idOverride
   * @returns {string}
   */
  function useId(idOverride) {
    if (maybeReactUseId !== undefined) {
      const reactId = maybeReactUseId();
      return idOverride != null ? idOverride : reactId;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
    return useGlobalId(idOverride);
  }

  function unsupportedProp(props, propName, componentName, location, propFullName) {
    {
      return null;
    }
  }

  function useControlled({
    controlled,
    default: defaultProp,
    name,
    state = 'value'
  }) {
    // isControlled is ignored in the hook dependency lists as it should never change.
    const {
      current: isControlled
    } = React__namespace.useRef(controlled !== undefined);
    const [valueState, setValue] = React__namespace.useState(defaultProp);
    const value = isControlled ? controlled : valueState;
    const setValueIfUncontrolled = React__namespace.useCallback(newValue => {
      if (!isControlled) {
        setValue(newValue);
      }
    }, []);
    return [value, setValueIfUncontrolled];
  }

  /**
   * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
   * See RFC in https://github.com/reactjs/rfcs/pull/220
   */

  function useEventCallback(fn) {
    const ref = React__namespace.useRef(fn);
    useEnhancedEffect(() => {
      ref.current = fn;
    });
    return React__namespace.useRef((...args) =>
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)).current;
  }

  function useForkRef(...refs) {
    /**
     * This will create a new function if the refs passed to this hook change and are all defined.
     * This means react will call the old forkRef with `null` and the new forkRef
     * with the ref. Cleanup naturally emerges from this behavior.
     */
    return React__namespace.useMemo(() => {
      if (refs.every(ref => ref == null)) {
        return null;
      }
      return instance => {
        refs.forEach(ref => {
          setRef(ref, instance);
        });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, refs);
  }

  class Timeout {
    constructor() {
      this.currentId = null;
      this.clear = () => {
        if (this.currentId !== null) {
          clearTimeout(this.currentId);
          this.currentId = null;
        }
      };
      this.disposeEffect = () => {
        return this.clear;
      };
    }
    static create() {
      return new Timeout();
    }
    /**
     * Executes `fn` after `delay`, clearing any previously scheduled call.
     */
    start(delay, fn) {
      this.clear();
      this.currentId = setTimeout(() => {
        this.currentId = null;
        fn();
      }, delay);
    }
  }

  let hadKeyboardEvent = true;
  let hadFocusVisibleRecently = false;
  const hadFocusVisibleRecentlyTimeout = new Timeout();
  const inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} node
   * @returns {boolean}
   */
  function focusTriggersKeyboardModality(node) {
    const {
      type,
      tagName
    } = node;
    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !node.readOnly) {
      return true;
    }
    if (node.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Keep track of our keyboard modality state with `hadKeyboardEvent`.
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * @param {KeyboardEvent} event
   */
  function handleKeyDown$1(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   */
  function handlePointerDown() {
    hadKeyboardEvent = false;
  }
  function handleVisibilityChange() {
    if (this.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
    }
  }
  function prepare(doc) {
    doc.addEventListener('keydown', handleKeyDown$1, true);
    doc.addEventListener('mousedown', handlePointerDown, true);
    doc.addEventListener('pointerdown', handlePointerDown, true);
    doc.addEventListener('touchstart', handlePointerDown, true);
    doc.addEventListener('visibilitychange', handleVisibilityChange, true);
  }
  function isFocusVisible(event) {
    const {
      target
    } = event;
    try {
      return target.matches(':focus-visible');
    } catch (error) {
      // Browsers not implementing :focus-visible will throw a SyntaxError.
      // We use our own heuristic for those browsers.
      // Rethrow might be better if it's not the expected error but do we really
      // want to crash if focus-visible malfunctioned?
    }

    // No need for validFocusTarget check. The user does that by attaching it to
    // focusable events only.
    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
  }
  function useIsFocusVisible() {
    const ref = React__namespace.useCallback(node => {
      if (node != null) {
        prepare(node.ownerDocument);
      }
    }, []);
    const isFocusVisibleRef = React__namespace.useRef(false);

    /**
     * Should be called if a blur event is fired
     */
    function handleBlurVisible() {
      // checking against potential state variable does not suffice if we focus and blur synchronously.
      // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
      // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
      // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
      // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
      if (isFocusVisibleRef.current) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        hadFocusVisibleRecentlyTimeout.start(100, () => {
          hadFocusVisibleRecently = false;
        });
        isFocusVisibleRef.current = false;
        return true;
      }
      return false;
    }

    /**
     * Should be called if a blur event is fired
     */
    function handleFocusVisible(event) {
      if (isFocusVisible(event)) {
        isFocusVisibleRef.current = true;
        return true;
      }
      return false;
    }
    return {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref
    };
  }

  const usePreviousProps = value => {
    const ref = React__namespace.useRef({});
    React__namespace.useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const visuallyHidden = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };

  /**
   * Add keys, values of `defaultProps` that does not exist in `props`
   * @param {object} defaultProps
   * @param {object} props
   * @returns {object} resolved props
   */
  function resolveProps(defaultProps, props) {
    const output = _extends$1({}, props);
    Object.keys(defaultProps).forEach(propName => {
      if (propName.toString().match(/^(components|slots)$/)) {
        output[propName] = _extends$1({}, defaultProps[propName], output[propName]);
      } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
        const defaultSlotProps = defaultProps[propName] || {};
        const slotProps = props[propName];
        output[propName] = {};
        if (!slotProps || !Object.keys(slotProps)) {
          // Reduce the iteration if the slot props is empty
          output[propName] = defaultSlotProps;
        } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
          // Reduce the iteration if the default slot props is empty
          output[propName] = slotProps;
        } else {
          output[propName] = _extends$1({}, slotProps);
          Object.keys(defaultSlotProps).forEach(slotPropName => {
            output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
          });
        }
      } else if (output[propName] === undefined) {
        output[propName] = defaultProps[propName];
      }
    });
    return output;
  }

  function composeClasses(slots, getUtilityClass, classes = undefined) {
    const output = {};
    Object.keys(slots).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    slot => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          const utilityClass = getUtilityClass(key);
          if (utilityClass !== '') {
            acc.push(utilityClass);
          }
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
        }
        return acc;
      }, []).join(' ');
    });
    return output;
  }

  const defaultGenerator = componentName => componentName;
  const createClassNameGenerator = () => {
    let generate = defaultGenerator;
    return {
      configure(generator) {
        generate = generator;
      },
      generate(componentName) {
        return generate(componentName);
      },
      reset() {
        generate = defaultGenerator;
      }
    };
  };
  const ClassNameGenerator = createClassNameGenerator();

  const globalStateClasses = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected'
  };
  function generateUtilityClass$2(componentName, slot, globalStatePrefix = 'Mui') {
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
  }

  function generateUtilityClasses$2(componentName, slots, globalStatePrefix = 'Mui') {
    const result = {};
    slots.forEach(slot => {
      result[slot] = generateUtilityClass$2(componentName, slot, globalStatePrefix);
    });
    return result;
  }

  function clamp$1(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.max(min, Math.min(val, max));
  }

  var clamp = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: clamp$1
  });

  /**
   * Determines if a given element is a DOM element name (i.e. not a React component).
   */
  function isHostComponent(element) {
    return typeof element === 'string';
  }

  /**
   * Type of the ownerState based on the type of an element it applies to.
   * This resolves to the provided OwnerState for React components and `undefined` for host components.
   * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
   */

  /**
   * Appends the ownerState object to the props, merging with the existing one if necessary.
   *
   * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
   * @param otherProps Props of the element.
   * @param ownerState
   */
  function appendOwnerState(elementType, otherProps, ownerState) {
    if (elementType === undefined || isHostComponent(elementType)) {
      return otherProps;
    }
    return _extends$1({}, otherProps, {
      ownerState: _extends$1({}, otherProps.ownerState, ownerState)
    });
  }

  function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
    return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
  }

  const defaultContextValue = {
    disableDefaultClasses: false
  };
  const ClassNameConfiguratorContext = /*#__PURE__*/React__namespace.createContext(defaultContextValue);
  /**
   * @ignore - internal hook.
   *
   * Wraps the `generateUtilityClass` function and controls how the classes are generated.
   * Currently it only affects whether the classes are applied or not.
   *
   * @returns Function to be called with the `generateUtilityClass` function specific to a component to generate the classes.
   */
  function useClassNamesOverride(generateUtilityClass) {
    const {
      disableDefaultClasses
    } = React__namespace.useContext(ClassNameConfiguratorContext);
    return slot => {
      if (disableDefaultClasses) {
        return '';
      }
      return generateUtilityClass(slot);
    };
  }

  /**
   * Extracts event handlers from a given object.
   * A prop is considered an event handler if it is a function and its name starts with `on`.
   *
   * @param object An object to extract event handlers from.
   * @param excludeKeys An array of keys to exclude from the returned object.
   */
  function extractEventHandlers(object, excludeKeys = []) {
    if (object === undefined) {
      return {};
    }
    const result = {};
    Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
      result[prop] = object[prop];
    });
    return result;
  }

  /**
   * If `componentProps` is a function, calls it with the provided `ownerState`.
   * Otherwise, just returns `componentProps`.
   */
  function resolveComponentProps(componentProps, ownerState, slotState) {
    if (typeof componentProps === 'function') {
      return componentProps(ownerState, slotState);
    }
    return componentProps;
  }

  /**
   * @ignore - do not document.
   *
   * Use this function determine the host element correctly on the server (in a SSR context, for example Next.js)
   */
  function useRootElementName(parameters) {
    const {
      rootElementName: rootElementNameProp = '',
      componentName
    } = parameters;
    const [rootElementName, setRootElementName] = React__namespace.useState(rootElementNameProp.toUpperCase());
    const updateRootElementName = React__namespace.useCallback(instance => {
      var _instance$tagName;
      setRootElementName((_instance$tagName = instance == null ? void 0 : instance.tagName) != null ? _instance$tagName : '');
    }, []);
    return [rootElementName, updateRootElementName];
  }

  /**
   * Removes event handlers from the given object.
   * A field is considered an event handler if it is a function with a name beginning with `on`.
   *
   * @param object Object to remove event handlers from.
   * @returns Object with event handlers removed.
   */
  function omitEventHandlers(object) {
    if (object === undefined) {
      return {};
    }
    const result = {};
    Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
      result[prop] = object[prop];
    });
    return result;
  }

  /**
   * Merges the slot component internal props (usually coming from a hook)
   * with the externally provided ones.
   *
   * The merge order is (the latter overrides the former):
   * 1. The internal props (specified as a getter function to work with get*Props hook result)
   * 2. Additional props (specified internally on a Base UI component)
   * 3. External props specified on the owner component. These should only be used on a root slot.
   * 4. External props specified in the `slotProps.*` prop.
   * 5. The `className` prop - combined from all the above.
   * @param parameters
   * @returns
   */
  function mergeSlotProps(parameters) {
    const {
      getSlotProps,
      additionalProps,
      externalSlotProps,
      externalForwardedProps,
      className
    } = parameters;
    if (!getSlotProps) {
      // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
      // so we can simply merge all the props without having to worry about extracting event handlers.
      const joinedClasses = clsx(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
      const mergedStyle = _extends$1({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
      const props = _extends$1({}, additionalProps, externalForwardedProps, externalSlotProps);
      if (joinedClasses.length > 0) {
        props.className = joinedClasses;
      }
      if (Object.keys(mergedStyle).length > 0) {
        props.style = mergedStyle;
      }
      return {
        props,
        internalRef: undefined
      };
    }

    // In this case, getSlotProps is responsible for calling the external event handlers.
    // We don't need to include them in the merged props because of this.

    const eventHandlers = extractEventHandlers(_extends$1({}, externalForwardedProps, externalSlotProps));
    const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
    const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
    const internalSlotProps = getSlotProps(eventHandlers);

    // The order of classes is important here.
    // Emotion (that we use in libraries consuming Base UI) depends on this order
    // to properly override style. It requires the most important classes to be last
    // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
    const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle = _extends$1({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props = _extends$1({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: internalSlotProps.ref
    };
  }

  const _excluded$T = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
  /**
   * @ignore - do not document.
   * Builds the props to be passed into the slot of an unstyled component.
   * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
   * If the slot component is not a host component, it also merges in the `ownerState`.
   *
   * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
   */
  function useSlotProps(parameters) {
    var _parameters$additiona;
    const {
        elementType,
        externalSlotProps,
        ownerState,
        skipResolvingSlotProps = false
      } = parameters,
      rest = _objectWithoutPropertiesLoose$1(parameters, _excluded$T);
    const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
    const {
      props: mergedProps,
      internalRef
    } = mergeSlotProps(_extends$1({}, rest, {
      externalSlotProps: resolvedComponentsProps
    }));
    const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
    const props = appendOwnerState(elementType, _extends$1({}, mergedProps, {
      ref
    }), ownerState);
    return props;
  }

  const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;
  function asc(a, b) {
    return a - b;
  }
  function findClosest(values, currentValue) {
    var _values$reduce;
    const {
      index: closestIndex
    } = (_values$reduce = values.reduce((acc, value, index) => {
      const distance = Math.abs(currentValue - value);
      if (acc === null || distance < acc.distance || distance === acc.distance) {
        return {
          distance,
          index
        };
      }
      return acc;
    }, null)) != null ? _values$reduce : {};
    return closestIndex;
  }
  function trackFinger(event, touchId) {
    // The event is TouchEvent
    if (touchId.current !== undefined && event.changedTouches) {
      const touchEvent = event;
      for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
        const touch = touchEvent.changedTouches[i];
        if (touch.identifier === touchId.current) {
          return {
            x: touch.clientX,
            y: touch.clientY
          };
        }
      }
      return false;
    }

    // The event is MouseEvent
    return {
      x: event.clientX,
      y: event.clientY
    };
  }
  function valueToPercent(value, min, max) {
    return (value - min) * 100 / (max - min);
  }
  function percentToValue(percent, min, max) {
    return (max - min) * percent + min;
  }
  function getDecimalPrecision(num) {
    // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
    // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
    if (Math.abs(num) < 1) {
      const parts = num.toExponential().split('e-');
      const matissaDecimalPart = parts[0].split('.')[1];
      return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
    }
    const decimalPart = num.toString().split('.')[1];
    return decimalPart ? decimalPart.length : 0;
  }
  function roundValueToStep(value, step, min) {
    const nearest = Math.round((value - min) / step) * step + min;
    return Number(nearest.toFixed(getDecimalPrecision(step)));
  }
  function setValueIndex({
    values,
    newValue,
    index
  }) {
    const output = values.slice();
    output[index] = newValue;
    return output.sort(asc);
  }
  function focusThumb({
    sliderRef,
    activeIndex,
    setActive
  }) {
    var _sliderRef$current, _doc$activeElement;
    const doc = ownerDocument(sliderRef.current);
    if (!((_sliderRef$current = sliderRef.current) != null && _sliderRef$current.contains(doc.activeElement)) || Number(doc == null || (_doc$activeElement = doc.activeElement) == null ? void 0 : _doc$activeElement.getAttribute('data-index')) !== activeIndex) {
      var _sliderRef$current2;
      (_sliderRef$current2 = sliderRef.current) == null || _sliderRef$current2.querySelector(`[type="range"][data-index="${activeIndex}"]`).focus();
    }
    if (setActive) {
      setActive(activeIndex);
    }
  }
  function areValuesEqual(newValue, oldValue) {
    if (typeof newValue === 'number' && typeof oldValue === 'number') {
      return newValue === oldValue;
    }
    if (typeof newValue === 'object' && typeof oldValue === 'object') {
      return areArraysEqual(newValue, oldValue);
    }
    return false;
  }
  const axisProps = {
    horizontal: {
      offset: percent => ({
        left: `${percent}%`
      }),
      leap: percent => ({
        width: `${percent}%`
      })
    },
    'horizontal-reverse': {
      offset: percent => ({
        right: `${percent}%`
      }),
      leap: percent => ({
        width: `${percent}%`
      })
    },
    vertical: {
      offset: percent => ({
        bottom: `${percent}%`
      }),
      leap: percent => ({
        height: `${percent}%`
      })
    }
  };
  const Identity$1 = x => x;

  // TODO: remove support for Safari < 13.
  // https://caniuse.com/#search=touch-action
  //
  // Safari, on iOS, supports touch action since v13.
  // Over 80% of the iOS phones are compatible
  // in August 2020.
  // Utilizing the CSS.supports method to check if touch-action is supported.
  // Since CSS.supports is supported on all but Edge@12 and IE and touch-action
  // is supported on both Edge@12 and IE if CSS.supports is not available that means that
  // touch-action will be supported
  let cachedSupportsTouchActionNone;
  function doesSupportTouchActionNone() {
    if (cachedSupportsTouchActionNone === undefined) {
      if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function') {
        cachedSupportsTouchActionNone = CSS.supports('touch-action', 'none');
      } else {
        cachedSupportsTouchActionNone = true;
      }
    }
    return cachedSupportsTouchActionNone;
  }
  /**
   *
   * Demos:
   *
   * - [Slider](https://mui.com/base-ui/react-slider/#hook)
   *
   * API:
   *
   * - [useSlider API](https://mui.com/base-ui/react-slider/hooks-api/#use-slider)
   */
  function useSlider(parameters) {
    const {
      'aria-labelledby': ariaLabelledby,
      defaultValue,
      disabled = false,
      disableSwap = false,
      isRtl = false,
      marks: marksProp = false,
      max = 100,
      min = 0,
      name,
      onChange,
      onChangeCommitted,
      orientation = 'horizontal',
      rootRef: ref,
      scale = Identity$1,
      step = 1,
      shiftStep = 10,
      tabIndex,
      value: valueProp
    } = parameters;
    const touchId = React__namespace.useRef();
    // We can't use the :active browser pseudo-classes.
    // - The active state isn't triggered when clicking on the rail.
    // - The active state isn't transferred when inversing a range slider.
    const [active, setActive] = React__namespace.useState(-1);
    const [open, setOpen] = React__namespace.useState(-1);
    const [dragging, setDragging] = React__namespace.useState(false);
    const moveCount = React__namespace.useRef(0);
    const [valueDerived, setValueState] = useControlled({
      controlled: valueProp,
      default: defaultValue != null ? defaultValue : min,
      name: 'Slider'
    });
    const handleChange = onChange && ((event, value, thumbIndex) => {
      // Redefine target to allow name and value to be read.
      // This allows seamless integration with the most popular form libraries.
      // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
      // Clone the event to not override `target` of the original event.
      const nativeEvent = event.nativeEvent || event;
      // @ts-ignore The nativeEvent is function, not object
      const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
      Object.defineProperty(clonedEvent, 'target', {
        writable: true,
        value: {
          value,
          name
        }
      });
      onChange(clonedEvent, value, thumbIndex);
    });
    const range = Array.isArray(valueDerived);
    let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
    values = values.map(value => value == null ? min : clamp$1(value, min, max));
    const marks = marksProp === true && step !== null ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
      value: min + step * index
    })) : marksProp || [];
    const marksValues = marks.map(mark => mark.value);
    const {
      isFocusVisibleRef,
      onBlur: handleBlurVisible,
      onFocus: handleFocusVisible,
      ref: focusVisibleRef
    } = useIsFocusVisible();
    const [focusedThumbIndex, setFocusedThumbIndex] = React__namespace.useState(-1);
    const sliderRef = React__namespace.useRef();
    const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
    const handleRef = useForkRef(ref, handleFocusRef);
    const createHandleHiddenInputFocus = otherHandlers => event => {
      var _otherHandlers$onFocu;
      const index = Number(event.currentTarget.getAttribute('data-index'));
      handleFocusVisible(event);
      if (isFocusVisibleRef.current === true) {
        setFocusedThumbIndex(index);
      }
      setOpen(index);
      otherHandlers == null || (_otherHandlers$onFocu = otherHandlers.onFocus) == null || _otherHandlers$onFocu.call(otherHandlers, event);
    };
    const createHandleHiddenInputBlur = otherHandlers => event => {
      var _otherHandlers$onBlur;
      handleBlurVisible(event);
      if (isFocusVisibleRef.current === false) {
        setFocusedThumbIndex(-1);
      }
      setOpen(-1);
      otherHandlers == null || (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
    };
    const changeValue = (event, valueInput) => {
      const index = Number(event.currentTarget.getAttribute('data-index'));
      const value = values[index];
      const marksIndex = marksValues.indexOf(value);
      let newValue = valueInput;
      if (marks && step == null) {
        const maxMarksValue = marksValues[marksValues.length - 1];
        if (newValue > maxMarksValue) {
          newValue = maxMarksValue;
        } else if (newValue < marksValues[0]) {
          newValue = marksValues[0];
        } else {
          newValue = newValue < value ? marksValues[marksIndex - 1] : marksValues[marksIndex + 1];
        }
      }
      newValue = clamp$1(newValue, min, max);
      if (range) {
        // Bound the new value to the thumb's neighbours.
        if (disableSwap) {
          newValue = clamp$1(newValue, values[index - 1] || -Infinity, values[index + 1] || Infinity);
        }
        const previousValue = newValue;
        newValue = setValueIndex({
          values,
          newValue,
          index
        });
        let activeIndex = index;

        // Potentially swap the index if needed.
        if (!disableSwap) {
          activeIndex = newValue.indexOf(previousValue);
        }
        focusThumb({
          sliderRef,
          activeIndex
        });
      }
      setValueState(newValue);
      setFocusedThumbIndex(index);
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(event, newValue, index);
      }
      if (onChangeCommitted) {
        onChangeCommitted(event, newValue);
      }
    };
    const createHandleHiddenInputKeyDown = otherHandlers => event => {
      var _otherHandlers$onKeyD;
      // The Shift + Up/Down keyboard shortcuts for moving the slider makes sense to be supported
      // only if the step is defined. If the step is null, this means tha the marks are used for specifying the valid values.
      if (step !== null) {
        const index = Number(event.currentTarget.getAttribute('data-index'));
        const value = values[index];
        let newValue = null;
        if ((event.key === 'ArrowLeft' || event.key === 'ArrowDown') && event.shiftKey || event.key === 'PageDown') {
          newValue = Math.max(value - shiftStep, min);
        } else if ((event.key === 'ArrowRight' || event.key === 'ArrowUp') && event.shiftKey || event.key === 'PageUp') {
          newValue = Math.min(value + shiftStep, max);
        }
        if (newValue !== null) {
          changeValue(event, newValue);
          event.preventDefault();
        }
      }
      otherHandlers == null || (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    };
    useEnhancedEffect(() => {
      if (disabled && sliderRef.current.contains(document.activeElement)) {
        var _document$activeEleme;
        // This is necessary because Firefox and Safari will keep focus
        // on a disabled element:
        // https://codesandbox.io/p/sandbox/mui-pr-22247-forked-h151h?file=/src/App.js
        // @ts-ignore
        (_document$activeEleme = document.activeElement) == null || _document$activeEleme.blur();
      }
    }, [disabled]);
    if (disabled && active !== -1) {
      setActive(-1);
    }
    if (disabled && focusedThumbIndex !== -1) {
      setFocusedThumbIndex(-1);
    }
    const createHandleHiddenInputChange = otherHandlers => event => {
      var _otherHandlers$onChan;
      (_otherHandlers$onChan = otherHandlers.onChange) == null || _otherHandlers$onChan.call(otherHandlers, event);
      // @ts-ignore
      changeValue(event, event.target.valueAsNumber);
    };
    const previousIndex = React__namespace.useRef();
    let axis = orientation;
    if (isRtl && orientation === 'horizontal') {
      axis += '-reverse';
    }
    const getFingerNewValue = ({
      finger,
      move = false
    }) => {
      const {
        current: slider
      } = sliderRef;
      const {
        width,
        height,
        bottom,
        left
      } = slider.getBoundingClientRect();
      let percent;
      if (axis.indexOf('vertical') === 0) {
        percent = (bottom - finger.y) / height;
      } else {
        percent = (finger.x - left) / width;
      }
      if (axis.indexOf('-reverse') !== -1) {
        percent = 1 - percent;
      }
      let newValue;
      newValue = percentToValue(percent, min, max);
      if (step) {
        newValue = roundValueToStep(newValue, step, min);
      } else {
        const closestIndex = findClosest(marksValues, newValue);
        newValue = marksValues[closestIndex];
      }
      newValue = clamp$1(newValue, min, max);
      let activeIndex = 0;
      if (range) {
        if (!move) {
          activeIndex = findClosest(values, newValue);
        } else {
          activeIndex = previousIndex.current;
        }

        // Bound the new value to the thumb's neighbours.
        if (disableSwap) {
          newValue = clamp$1(newValue, values[activeIndex - 1] || -Infinity, values[activeIndex + 1] || Infinity);
        }
        const previousValue = newValue;
        newValue = setValueIndex({
          values,
          newValue,
          index: activeIndex
        });

        // Potentially swap the index if needed.
        if (!(disableSwap && move)) {
          activeIndex = newValue.indexOf(previousValue);
          previousIndex.current = activeIndex;
        }
      }
      return {
        newValue,
        activeIndex
      };
    };
    const handleTouchMove = useEventCallback(nativeEvent => {
      const finger = trackFinger(nativeEvent, touchId);
      if (!finger) {
        return;
      }
      moveCount.current += 1;

      // Cancel move in case some other element consumed a mouseup event and it was not fired.
      // @ts-ignore buttons doesn't not exists on touch event
      if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        handleTouchEnd(nativeEvent);
        return;
      }
      const {
        newValue,
        activeIndex
      } = getFingerNewValue({
        finger,
        move: true
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive
      });
      setValueState(newValue);
      if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
        setDragging(true);
      }
      if (handleChange && !areValuesEqual(newValue, valueDerived)) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    });
    const handleTouchEnd = useEventCallback(nativeEvent => {
      const finger = trackFinger(nativeEvent, touchId);
      setDragging(false);
      if (!finger) {
        return;
      }
      const {
        newValue
      } = getFingerNewValue({
        finger,
        move: true
      });
      setActive(-1);
      if (nativeEvent.type === 'touchend') {
        setOpen(-1);
      }
      if (onChangeCommitted) {
        onChangeCommitted(nativeEvent, newValue);
      }
      touchId.current = undefined;

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      stopListening();
    });
    const handleTouchStart = useEventCallback(nativeEvent => {
      if (disabled) {
        return;
      }
      // If touch-action: none; is not supported we need to prevent the scroll manually.
      if (!doesSupportTouchActionNone()) {
        nativeEvent.preventDefault();
      }
      const touch = nativeEvent.changedTouches[0];
      if (touch != null) {
        // A number that uniquely identifies the current finger in the touch session.
        touchId.current = touch.identifier;
      }
      const finger = trackFinger(nativeEvent, touchId);
      if (finger !== false) {
        const {
          newValue,
          activeIndex
        } = getFingerNewValue({
          finger
        });
        focusThumb({
          sliderRef,
          activeIndex,
          setActive
        });
        setValueState(newValue);
        if (handleChange && !areValuesEqual(newValue, valueDerived)) {
          handleChange(nativeEvent, newValue, activeIndex);
        }
      }
      moveCount.current = 0;
      const doc = ownerDocument(sliderRef.current);
      doc.addEventListener('touchmove', handleTouchMove, {
        passive: true
      });
      doc.addEventListener('touchend', handleTouchEnd, {
        passive: true
      });
    });
    const stopListening = React__namespace.useCallback(() => {
      const doc = ownerDocument(sliderRef.current);
      doc.removeEventListener('mousemove', handleTouchMove);
      doc.removeEventListener('mouseup', handleTouchEnd);
      doc.removeEventListener('touchmove', handleTouchMove);
      doc.removeEventListener('touchend', handleTouchEnd);
    }, [handleTouchEnd, handleTouchMove]);
    React__namespace.useEffect(() => {
      const {
        current: slider
      } = sliderRef;
      slider.addEventListener('touchstart', handleTouchStart, {
        passive: doesSupportTouchActionNone()
      });
      return () => {
        slider.removeEventListener('touchstart', handleTouchStart);
        stopListening();
      };
    }, [stopListening, handleTouchStart]);
    React__namespace.useEffect(() => {
      if (disabled) {
        stopListening();
      }
    }, [disabled, stopListening]);
    const createHandleMouseDown = otherHandlers => event => {
      var _otherHandlers$onMous;
      (_otherHandlers$onMous = otherHandlers.onMouseDown) == null || _otherHandlers$onMous.call(otherHandlers, event);
      if (disabled) {
        return;
      }
      if (event.defaultPrevented) {
        return;
      }

      // Only handle left clicks
      if (event.button !== 0) {
        return;
      }

      // Avoid text selection
      event.preventDefault();
      const finger = trackFinger(event, touchId);
      if (finger !== false) {
        const {
          newValue,
          activeIndex
        } = getFingerNewValue({
          finger
        });
        focusThumb({
          sliderRef,
          activeIndex,
          setActive
        });
        setValueState(newValue);
        if (handleChange && !areValuesEqual(newValue, valueDerived)) {
          handleChange(event, newValue, activeIndex);
        }
      }
      moveCount.current = 0;
      const doc = ownerDocument(sliderRef.current);
      doc.addEventListener('mousemove', handleTouchMove, {
        passive: true
      });
      doc.addEventListener('mouseup', handleTouchEnd);
    };
    const trackOffset = valueToPercent(range ? values[0] : min, min, max);
    const trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;
    const getRootProps = (externalProps = {}) => {
      const externalHandlers = extractEventHandlers(externalProps);
      const ownEventHandlers = {
        onMouseDown: createHandleMouseDown(externalHandlers || {})
      };
      const mergedEventHandlers = _extends$1({}, externalHandlers, ownEventHandlers);
      return _extends$1({}, externalProps, {
        ref: handleRef
      }, mergedEventHandlers);
    };
    const createHandleMouseOver = otherHandlers => event => {
      var _otherHandlers$onMous2;
      (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null || _otherHandlers$onMous2.call(otherHandlers, event);
      const index = Number(event.currentTarget.getAttribute('data-index'));
      setOpen(index);
    };
    const createHandleMouseLeave = otherHandlers => event => {
      var _otherHandlers$onMous3;
      (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null || _otherHandlers$onMous3.call(otherHandlers, event);
      setOpen(-1);
    };
    const getThumbProps = (externalProps = {}) => {
      const externalHandlers = extractEventHandlers(externalProps);
      const ownEventHandlers = {
        onMouseOver: createHandleMouseOver(externalHandlers || {}),
        onMouseLeave: createHandleMouseLeave(externalHandlers || {})
      };
      return _extends$1({}, externalProps, externalHandlers, ownEventHandlers);
    };
    const getThumbStyle = index => {
      return {
        // So the non active thumb doesn't show its label on hover.
        pointerEvents: active !== -1 && active !== index ? 'none' : undefined
      };
    };
    const getHiddenInputProps = (externalProps = {}) => {
      var _parameters$step;
      const externalHandlers = extractEventHandlers(externalProps);
      const ownEventHandlers = {
        onChange: createHandleHiddenInputChange(externalHandlers || {}),
        onFocus: createHandleHiddenInputFocus(externalHandlers || {}),
        onBlur: createHandleHiddenInputBlur(externalHandlers || {}),
        onKeyDown: createHandleHiddenInputKeyDown(externalHandlers || {})
      };
      const mergedEventHandlers = _extends$1({}, externalHandlers, ownEventHandlers);
      return _extends$1({
        tabIndex,
        'aria-labelledby': ariaLabelledby,
        'aria-orientation': orientation,
        'aria-valuemax': scale(max),
        'aria-valuemin': scale(min),
        name,
        type: 'range',
        min: parameters.min,
        max: parameters.max,
        step: parameters.step === null && parameters.marks ? 'any' : (_parameters$step = parameters.step) != null ? _parameters$step : undefined,
        disabled
      }, externalProps, mergedEventHandlers, {
        style: _extends$1({}, visuallyHidden, {
          direction: isRtl ? 'rtl' : 'ltr',
          // So that VoiceOver's focus indicator matches the thumb's dimensions
          width: '100%',
          height: '100%'
        })
      });
    };
    return {
      active,
      axis: axis,
      axisProps,
      dragging,
      focusedThumbIndex,
      getHiddenInputProps,
      getRootProps,
      getThumbProps,
      marks: marks,
      open,
      range,
      rootRef: handleRef,
      trackLeap,
      trackOffset,
      values,
      getThumbStyle
    };
  }

  var THEME_ID$1 = '$$joy';

  function memoize$1(fn) {
    var cache = Object.create(null);
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  // eslint-disable-next-line no-undef
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

  var isPropValid = /* #__PURE__ */memoize$1(function (prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
    /* o */
    && prop.charCodeAt(1) === 110
    /* n */
    && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
  );

  var isDevelopment$2 = false;

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */

  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    } // this function should always return with a value
    // TS can't understand it though so we make it stop complaining here


    return undefined;
  }

  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);

    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }

    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
  }

  var StyleSheet = /*#__PURE__*/function () {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
      var _this = this;

      this._insertTag = function (tag) {
        var before;

        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }

        _this.container.insertBefore(tag, before);

        _this.tags.push(tag);
      };

      this.isSpeedy = options.speedy === undefined ? !isDevelopment$2 : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }

    var _proto = StyleSheet.prototype;

    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };

    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }

      var tag = this.tags[this.tags.length - 1];

      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);

        try {
          // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }

      this.ctr++;
    };

    _proto.flush = function flush() {
      this.tags.forEach(function (tag) {
        var _tag$parentNode;

        return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };

    return StyleSheet;
  }();

  var MS = '-ms-';
  var MOZ = '-moz-';
  var WEBKIT = '-webkit-';

  var COMMENT = 'comm';
  var RULESET = 'rule';
  var DECLARATION = 'decl';
  var IMPORT = '@import';
  var KEYFRAMES = '@keyframes';
  var LAYER = '@layer';

  /**
   * @param {number}
   * @return {number}
   */
  var abs = Math.abs;

  /**
   * @param {number}
   * @return {string}
   */
  var from = String.fromCharCode;

  /**
   * @param {object}
   * @return {object}
   */
  var assign = Object.assign;

  /**
   * @param {string} value
   * @param {number} length
   * @return {number}
   */
  function hash$2 (value, length) {
  	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
  }

  /**
   * @param {string} value
   * @return {string}
   */
  function trim (value) {
  	return value.trim()
  }

  /**
   * @param {string} value
   * @param {RegExp} pattern
   * @return {string?}
   */
  function match (value, pattern) {
  	return (value = pattern.exec(value)) ? value[0] : value
  }

  /**
   * @param {string} value
   * @param {(string|RegExp)} pattern
   * @param {string} replacement
   * @return {string}
   */
  function replace (value, pattern, replacement) {
  	return value.replace(pattern, replacement)
  }

  /**
   * @param {string} value
   * @param {string} search
   * @return {number}
   */
  function indexof (value, search) {
  	return value.indexOf(search)
  }

  /**
   * @param {string} value
   * @param {number} index
   * @return {number}
   */
  function charat (value, index) {
  	return value.charCodeAt(index) | 0
  }

  /**
   * @param {string} value
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function substr (value, begin, end) {
  	return value.slice(begin, end)
  }

  /**
   * @param {string} value
   * @return {number}
   */
  function strlen (value) {
  	return value.length
  }

  /**
   * @param {any[]} value
   * @return {number}
   */
  function sizeof (value) {
  	return value.length
  }

  /**
   * @param {any} value
   * @param {any[]} array
   * @return {any}
   */
  function append (value, array) {
  	return array.push(value), value
  }

  /**
   * @param {string[]} array
   * @param {function} callback
   * @return {string}
   */
  function combine (array, callback) {
  	return array.map(callback).join('')
  }

  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = '';

  /**
   * @param {string} value
   * @param {object | null} root
   * @param {object | null} parent
   * @param {string} type
   * @param {string[] | string} props
   * @param {object[] | string} children
   * @param {number} length
   */
  function node (value, root, parent, type, props, children, length) {
  	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
  }

  /**
   * @param {object} root
   * @param {object} props
   * @return {object}
   */
  function copy (root, props) {
  	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
  }

  /**
   * @return {number}
   */
  function char () {
  	return character
  }

  /**
   * @return {number}
   */
  function prev () {
  	character = position > 0 ? charat(characters, --position) : 0;

  	if (column--, character === 10)
  		column = 1, line--;

  	return character
  }

  /**
   * @return {number}
   */
  function next () {
  	character = position < length ? charat(characters, position++) : 0;

  	if (column++, character === 10)
  		column = 1, line++;

  	return character
  }

  /**
   * @return {number}
   */
  function peek () {
  	return charat(characters, position)
  }

  /**
   * @return {number}
   */
  function caret () {
  	return position
  }

  /**
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function slice (begin, end) {
  	return substr(characters, begin, end)
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function token (type) {
  	switch (type) {
  		// \0 \t \n \r \s whitespace token
  		case 0: case 9: case 10: case 13: case 32:
  			return 5
  		// ! + , / > @ ~ isolate token
  		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
  		// ; { } breakpoint token
  		case 59: case 123: case 125:
  			return 4
  		// : accompanied token
  		case 58:
  			return 3
  		// " ' ( [ opening delimit token
  		case 34: case 39: case 40: case 91:
  			return 2
  		// ) ] closing delimit token
  		case 41: case 93:
  			return 1
  	}

  	return 0
  }

  /**
   * @param {string} value
   * @return {any[]}
   */
  function alloc (value) {
  	return line = column = 1, length = strlen(characters = value), position = 0, []
  }

  /**
   * @param {any} value
   * @return {any}
   */
  function dealloc (value) {
  	return characters = '', value
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function delimit (type) {
  	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function whitespace (type) {
  	while (character = peek())
  		if (character < 33)
  			next();
  		else
  			break

  	return token(type) > 2 || token(character) > 3 ? '' : ' '
  }

  /**
   * @param {number} index
   * @param {number} count
   * @return {string}
   */
  function escaping (index, count) {
  	while (--count && next())
  		// not 0-9 A-F a-f
  		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
  			break

  	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function delimiter (type) {
  	while (next())
  		switch (character) {
  			// ] ) " '
  			case type:
  				return position
  			// " '
  			case 34: case 39:
  				if (type !== 34 && type !== 39)
  					delimiter(character);
  				break
  			// (
  			case 40:
  				if (type === 41)
  					delimiter(type);
  				break
  			// \
  			case 92:
  				next();
  				break
  		}

  	return position
  }

  /**
   * @param {number} type
   * @param {number} index
   * @return {number}
   */
  function commenter (type, index) {
  	while (next())
  		// //
  		if (type + character === 47 + 10)
  			break
  		// /*
  		else if (type + character === 42 + 42 && peek() === 47)
  			break

  	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
  }

  /**
   * @param {number} index
   * @return {string}
   */
  function identifier (index) {
  	while (!token(peek()))
  		next();

  	return slice(index, position)
  }

  /**
   * @param {string} value
   * @return {object[]}
   */
  function compile (value) {
  	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {string[]} rule
   * @param {string[]} rules
   * @param {string[]} rulesets
   * @param {number[]} pseudo
   * @param {number[]} points
   * @param {string[]} declarations
   * @return {object}
   */
  function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  	var index = 0;
  	var offset = 0;
  	var length = pseudo;
  	var atrule = 0;
  	var property = 0;
  	var previous = 0;
  	var variable = 1;
  	var scanning = 1;
  	var ampersand = 1;
  	var character = 0;
  	var type = '';
  	var props = rules;
  	var children = rulesets;
  	var reference = rule;
  	var characters = type;

  	while (scanning)
  		switch (previous = character, character = next()) {
  			// (
  			case 40:
  				if (previous != 108 && charat(characters, length - 1) == 58) {
  					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
  						ampersand = -1;
  					break
  				}
  			// " ' [
  			case 34: case 39: case 91:
  				characters += delimit(character);
  				break
  			// \t \n \r \s
  			case 9: case 10: case 13: case 32:
  				characters += whitespace(previous);
  				break
  			// \
  			case 92:
  				characters += escaping(caret() - 1, 7);
  				continue
  			// /
  			case 47:
  				switch (peek()) {
  					case 42: case 47:
  						append(comment(commenter(next(), caret()), root, parent), declarations);
  						break
  					default:
  						characters += '/';
  				}
  				break
  			// {
  			case 123 * variable:
  				points[index++] = strlen(characters) * ampersand;
  			// } ; \0
  			case 125 * variable: case 59: case 0:
  				switch (character) {
  					// \0 }
  					case 0: case 125: scanning = 0;
  					// ;
  					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
  						if (property > 0 && (strlen(characters) - length))
  							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
  						break
  					// @ ;
  					case 59: characters += ';';
  					// { rule/at-rule
  					default:
  						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

  						if (character === 123)
  							if (offset === 0)
  								parse(characters, root, reference, reference, props, rulesets, length, points, children);
  							else
  								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
  									// d l m s
  									case 100: case 108: case 109: case 115:
  										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
  										break
  									default:
  										parse(characters, reference, reference, reference, [''], children, 0, points, children);
  								}
  				}

  				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
  				break
  			// :
  			case 58:
  				length = 1 + strlen(characters), property = previous;
  			default:
  				if (variable < 1)
  					if (character == 123)
  						--variable;
  					else if (character == 125 && variable++ == 0 && prev() == 125)
  						continue

  				switch (characters += from(character), character * variable) {
  					// &
  					case 38:
  						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
  						break
  					// ,
  					case 44:
  						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
  						break
  					// @
  					case 64:
  						// -
  						if (peek() === 45)
  							characters += delimit(next());

  						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
  						break
  					// -
  					case 45:
  						if (previous === 45 && strlen(characters) == 2)
  							variable = 0;
  				}
  		}

  	return rulesets
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} index
   * @param {number} offset
   * @param {string[]} rules
   * @param {number[]} points
   * @param {string} type
   * @param {string[]} props
   * @param {string[]} children
   * @param {number} length
   * @return {object}
   */
  function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
  	var post = offset - 1;
  	var rule = offset === 0 ? rules : [''];
  	var size = sizeof(rule);

  	for (var i = 0, j = 0, k = 0; i < index; ++i)
  		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
  			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
  				props[k++] = z;

  	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
  }

  /**
   * @param {number} value
   * @param {object} root
   * @param {object?} parent
   * @return {object}
   */
  function comment (value, root, parent) {
  	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} length
   * @return {object}
   */
  function declaration (value, root, parent, length) {
  	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
  }

  /**
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function serialize (children, callback) {
  	var output = '';
  	var length = sizeof(children);

  	for (var i = 0; i < length; i++)
  		output += callback(children[i], i, children, callback) || '';

  	return output
  }

  /**
   * @param {object} element
   * @param {number} index
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function stringify (element, index, children, callback) {
  	switch (element.type) {
  		case LAYER: if (element.children.length) break
  		case IMPORT: case DECLARATION: return element.return = element.return || element.value
  		case COMMENT: return ''
  		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
  		case RULESET: element.value = element.props.join(',');
  	}

  	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
  }

  /**
   * @param {function[]} collection
   * @return {function}
   */
  function middleware (collection) {
  	var length = sizeof(collection);

  	return function (element, index, children, callback) {
  		var output = '';

  		for (var i = 0; i < length; i++)
  			output += collection[i](element, index, children, callback) || '';

  		return output
  	}
  }

  /**
   * @param {function} callback
   * @return {function}
   */
  function rulesheet (callback) {
  	return function (element) {
  		if (!element.root)
  			if (element = element.return)
  				callback(element);
  	}
  }

  var weakMemoize = function weakMemoize(func) {
    var cache = new WeakMap();
    return function (arg) {
      if (cache.has(arg)) {
        // Use non-null assertion because we just checked that the cache `has` it
        // This allows us to remove `undefined` from the return value
        return cache.get(arg);
      }

      var ret = func(arg);
      cache.set(arg, ret);
      return ret;
    };
  };

  var isBrowser$4 = typeof document !== 'undefined';

  var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;

    while (true) {
      previous = character;
      character = peek(); // &\f

      if (previous === 38 && character === 12) {
        points[index] = 1;
      }

      if (token(character)) {
        break;
      }

      next();
    }

    return slice(begin, position);
  };

  var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;

    do {
      switch (token(character)) {
        case 0:
          // &\f
          if (character === 38 && peek() === 12) {
            // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
          }

          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;

        case 2:
          parsed[index] += delimit(character);
          break;

        case 4:
          // comma
          if (character === 44) {
            // colon
            parsed[++index] = peek() === 58 ? '&\f' : '';
            points[index] = parsed[index].length;
            break;
          }

        // fallthrough

        default:
          parsed[index] += from(character);
      }
    } while (character = next());

    return parsed;
  };

  var getRules = function getRules(value, points) {
    return dealloc(toRules(alloc(value), points));
  }; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


  var fixedElements = /* #__PURE__ */new WeakMap();
  var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }

    var value = element.value,
        parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;

    while (parent.type !== 'rule') {
      parent = parent.parent;
      if (!parent) return;
    } // short-circuit for the simplest case


    if (element.props.length === 1 && value.charCodeAt(0) !== 58
    /* colon */
    && !fixedElements.get(parent)) {
      return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


    if (isImplicitRule) {
      return;
    }

    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;

    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
      var value = element.value;

      if ( // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98) {
        // this ignores label
        element["return"] = '';
        element.value = '';
      }
    }
  };

  /* eslint-disable no-fallthrough */

  function prefix(value, length) {
    switch (hash$2(value, length)) {
      // color-adjust
      case 5103:
        return WEBKIT + 'print-' + value + value;
      // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      // appearance, user-select, transform, hyphens, text-size-adjust

      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      // flex, flex-direction

      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      // order

      case 6165:
        return WEBKIT + value + MS + 'flex-' + value + value;
      // align-items

      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
      // align-self

      case 5443:
        return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
      // align-content

      case 4675:
        return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
      // flex-shrink

      case 5548:
        return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
      // flex-basis

      case 5292:
        return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
      // flex-grow

      case 6060:
        return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
      // transition

      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
      // cursor

      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
      // background, background-image

      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
      // justify-content

      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
      // (margin|padding)-inline-(start|end)

      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
      // (min|max)?(width|height|inline-size|block-size)

      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        // stretch, max-content, min-content, fill-available
        if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            // -
            if (charat(value, length + 4) !== 45) break;
          // (f)ill-available, (f)it-content

          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
          // (s)tretch

          case 115:
            return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
        }
        break;
      // position: sticky

      case 4949:
        // (s)ticky?
        if (charat(value, length + 1) !== 115) break;
      // display: (flex|inline-flex)

      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
          // stic(k)y
          case 107:
            return replace(value, ':', ':' + WEBKIT) + value;
          // (inline-)?fl(e)x

          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
        }

        break;
      // writing-mode

      case 5936:
        switch (charat(value, length + 11)) {
          // vertical-l(r)
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
          // vertical-r(l)

          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
          // horizontal(-)tb

          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
        }

        return WEBKIT + value + MS + value + value;
    }

    return value;
  }

  var prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;

      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, '@', '@' + WEBKIT)
        })], callback);

      case RULESET:
        if (element.length) return combine(element.props, function (value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ':read-only':
            case ':read-write':
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
              })], callback);
            // :placeholder

            case '::placeholder':
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
              })], callback);
          }

          return '';
        });
    }
  };

  /* import type { StylisPlugin } from './types' */

  /*
  export type Options = {
    nonce?: string,
    stylisPlugins?: StylisPlugin[],
    key: string,
    container?: HTMLElement,
    speedy?: boolean,
    prepend?: boolean,
    insertionPoint?: HTMLElement
  }
  */

  var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize(function () {
    return memoize$1(function () {
      var cache = {};
      return function (name) {
        return cache[name];
      };
    });
  });
  var defaultStylisPlugins = [prefixer];

  var createCache = function
    /*: EmotionCache */
  createCache(options
  /*: Options */
  ) {
    var key = options.key;

    if (isBrowser$4 && key === 'css') {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
      // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
      // note this very very intentionally targets all style elements regardless of the key to ensure
      // that creating a cache works inside of render of a React component

      Array.prototype.forEach.call(ssrStyles, function (node
      /*: HTMLStyleElement */
      ) {
        // we want to only move elements which have a space in the data-emotion attribute value
        // because that indicates that it is an Emotion 11 server-side rendered style elements
        // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
        // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
        // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
        // will not result in the Emotion 10 styles being destroyed
        var dataEmotionAttribute = node.getAttribute('data-emotion');

        if (dataEmotionAttribute.indexOf(' ') === -1) {
          return;
        }

        document.head.appendChild(node);
        node.setAttribute('data-s', '');
      });
    }

    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

    var inserted = {};
    var container;
    /* : Node */

    var nodesToHydrate = [];

    if (isBrowser$4) {
      container = options.container || document.head;
      Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node
      /*: HTMLStyleElement */
      ) {
        var attrib = node.getAttribute("data-emotion").split(' ');

        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }

        nodesToHydrate.push(node);
      });
    }

    var _insert;
    /*: (
    selector: string,
    serialized: SerializedStyles,
    sheet: StyleSheet,
    shouldCache: boolean
    ) => string | void */


    var omnipresentPlugins = [compat, removeLabel];

    if (isBrowser$4) {
      var currentSheet;
      var finalizingPlugins = [stringify, rulesheet(function (rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

      var stylis = function stylis(styles) {
        return serialize(compile(styles), serializer);
      };

      _insert = function
        /*: void */
      insert(selector
      /*: string */
      , serialized
      /*: SerializedStyles */
      , sheet
      /*: StyleSheet */
      , shouldCache
      /*: boolean */
      ) {
        currentSheet = sheet;

        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    } else {
      var _finalizingPlugins = [stringify];

      var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

      var _stylis = function _stylis(styles) {
        return serialize(compile(styles), _serializer);
      };

      var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

      var getRules = function
        /*: string */
      getRules(selector
      /*: string */
      , serialized
      /*: SerializedStyles */
      ) {
        var name = serialized.name;

        if (serverStylisCache[name] === undefined) {
          serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        }

        return serverStylisCache[name];
      };

      _insert = function
        /*: string | void */
      _insert(selector
      /*: string */
      , serialized
      /*: SerializedStyles */
      , sheet
      /*: StyleSheet */
      , shouldCache
      /*: boolean */
      ) {
        var name = serialized.name;
        var rules = getRules(selector, serialized);

        if (cache.compat === undefined) {
          // in regular mode, we don't set the styles on the inserted cache
          // since we don't need to and that would be wasting memory
          // we return them so that they are rendered in a style tag
          if (shouldCache) {
            cache.inserted[name] = true;
          }

          return rules;
        } else {
          // in compat mode, we put the styles on the inserted cache so
          // that emotion-server can pull out the styles
          // except when we don't want to cache it which was in Global but now
          // is nowhere but we don't want to do a major right now
          // and just in case we're going to leave the case here
          // it's also not affecting client side bundle size
          // so it's really not a big deal
          if (shouldCache) {
            cache.inserted[name] = rules;
          } else {
            return rules;
          }
        }
      };
    }

    var cache
    /*: EmotionCache */
    = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  var reactIs = {exports: {}};

  var reactIs_production_min = {};

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_production_min;

  function requireReactIs_production_min () {
  	if (hasRequiredReactIs_production_min) return reactIs_production_min;
  	hasRequiredReactIs_production_min = 1;
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
  	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
  	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
  	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
  	return reactIs_production_min;
  }

  var hasRequiredReactIs;

  function requireReactIs () {
  	if (hasRequiredReactIs) return reactIs.exports;
  	hasRequiredReactIs = 1;

  	{
  	  reactIs.exports = requireReactIs_production_min();
  	}
  	return reactIs.exports;
  }

  var hoistNonReactStatics_cjs;
  var hasRequiredHoistNonReactStatics_cjs;

  function requireHoistNonReactStatics_cjs () {
  	if (hasRequiredHoistNonReactStatics_cjs) return hoistNonReactStatics_cjs;
  	hasRequiredHoistNonReactStatics_cjs = 1;

  	var reactIs = requireReactIs();

  	/**
  	 * Copyright 2015, Yahoo! Inc.
  	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
  	 */
  	var REACT_STATICS = {
  	  childContextTypes: true,
  	  contextType: true,
  	  contextTypes: true,
  	  defaultProps: true,
  	  displayName: true,
  	  getDefaultProps: true,
  	  getDerivedStateFromError: true,
  	  getDerivedStateFromProps: true,
  	  mixins: true,
  	  propTypes: true,
  	  type: true
  	};
  	var KNOWN_STATICS = {
  	  name: true,
  	  length: true,
  	  prototype: true,
  	  caller: true,
  	  callee: true,
  	  arguments: true,
  	  arity: true
  	};
  	var FORWARD_REF_STATICS = {
  	  '$$typeof': true,
  	  render: true,
  	  defaultProps: true,
  	  displayName: true,
  	  propTypes: true
  	};
  	var MEMO_STATICS = {
  	  '$$typeof': true,
  	  compare: true,
  	  defaultProps: true,
  	  displayName: true,
  	  propTypes: true,
  	  type: true
  	};
  	var TYPE_STATICS = {};
  	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  	function getStatics(component) {
  	  // React v16.11 and below
  	  if (reactIs.isMemo(component)) {
  	    return MEMO_STATICS;
  	  } // React v16.12 and above


  	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
  	}

  	var defineProperty = Object.defineProperty;
  	var getOwnPropertyNames = Object.getOwnPropertyNames;
  	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  	var getPrototypeOf = Object.getPrototypeOf;
  	var objectPrototype = Object.prototype;
  	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  	  if (typeof sourceComponent !== 'string') {
  	    // don't hoist over string (html) components
  	    if (objectPrototype) {
  	      var inheritedComponent = getPrototypeOf(sourceComponent);

  	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
  	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
  	      }
  	    }

  	    var keys = getOwnPropertyNames(sourceComponent);

  	    if (getOwnPropertySymbols) {
  	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
  	    }

  	    var targetStatics = getStatics(targetComponent);
  	    var sourceStatics = getStatics(sourceComponent);

  	    for (var i = 0; i < keys.length; ++i) {
  	      var key = keys[i];

  	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
  	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

  	        try {
  	          // Avoid failures from read-only properties
  	          defineProperty(targetComponent, key, descriptor);
  	        } catch (e) {}
  	      }
  	    }
  	  }

  	  return targetComponent;
  	}

  	hoistNonReactStatics_cjs = hoistNonReactStatics;
  	return hoistNonReactStatics_cjs;
  }

  requireHoistNonReactStatics_cjs();

  var isBrowser$3 = typeof document !== 'undefined';

  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className] + ";");
      } else if (className) {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;

    if ( // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;

    if (cache.inserted[serialized.name] === undefined) {
      var stylesForSSR = '';
      var current = serialized;

      do {
        var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

        if (!isBrowser$3 && maybeStyles !== undefined) {
          stylesForSSR += maybeStyles;
        }

        current = current.next;
      } while (current !== undefined);

      if (!isBrowser$3 && stylesForSSR.length !== 0) {
        return stylesForSSR;
      }
    }
  };

  /* eslint-disable */
  // Inspired by https://github.com/garycourt/murmurhash-js
  // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
  function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash

    var k,
        i = 0,
        len = str.length;

    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
      k ^=
      /* k >>> r: */
      k >>> 24;
      h =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array


    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.


    h ^= h >>> 13;
    h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var isDevelopment$1 = false;

  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

  var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
  };

  var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
  };

  var processStyleName = /* #__PURE__ */memoize$1(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });

  var processStyleValue = function processStyleValue(key, value) {
    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }

    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
      return value + 'px';
    }

    return value;
  };

  var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return '';
    }

    var componentSelector = interpolation;

    if (componentSelector.__emotion_styles !== undefined) {

      return componentSelector;
    }

    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }

      case 'object':
        {
          var keyframes = interpolation;

          if (keyframes.anim === 1) {
            cursor = {
              name: keyframes.name,
              styles: keyframes.styles,
              next: cursor
            };
            return keyframes.name;
          }

          var serializedStyles = interpolation;

          if (serializedStyles.styles !== undefined) {
            var next = serializedStyles.next;

            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }

            var styles = serializedStyles.styles + ";";

            return styles;
          }

          return createStringFromObject(mergedProps, registered, interpolation);
        }

      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result);
          }

          break;
        }
    } // finalize string values (regular strings and functions interpolated into css calls)


    var asString = interpolation;

    if (registered == null) {
      return asString;
    }

    var cached = registered[asString];
    return cached !== undefined ? cached : asString;
  }

  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';

    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var key in obj) {
        var value = obj[key];

        if (typeof value !== 'object') {
          var asString = value;

          if (registered != null && registered[asString] !== undefined) {
            string += key + "{" + registered[asString] + "}";
          } else if (isProcessableValue(asString)) {
            string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment$1) {
            throw new Error(noComponentSelectorMessage);
          }

          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);

            switch (key) {
              case 'animation':
              case 'animationName':
                {
                  string += processStyleName(key) + ":" + interpolated + ";";
                  break;
                }

              default:
                {

                  string += key + "{" + interpolated + "}";
                }
            }
          }
        }
      }
    }

    return string;
  }

  var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
  // keyframes are stored on the SerializedStyles object as a linked list


  var cursor;
  function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }

    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      var asTemplateStringsArr = strings;

      styles += asTemplateStringsArr[0];
    } // we start at 1 since we've already handled the first arg


    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);

      if (stringMode) {
        var templateStringsArr = strings;

        styles += templateStringsArr[i];
      }
    }


    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' + match[1];
    }

    var name = murmur2(styles) + identifierName;

    return {
      name: name,
      styles: styles,
      next: cursor
    };
  }

  var isBrowser$2 = typeof document !== 'undefined';

  var syncFallback = function syncFallback(create) {
    return create();
  };

  var useInsertionEffect = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : false;
  var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$2 ? syncFallback : useInsertionEffect || syncFallback;
  var useInsertionEffectWithLayoutFallback = useInsertionEffect || React__namespace.useLayoutEffect;

  var isBrowser$1 = typeof document !== 'undefined';

  /* import { type EmotionCache } from '@emotion/utils' */
  var EmotionCacheContext
  /*: React.Context<EmotionCache | null> */
  = /* #__PURE__ */React__namespace.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
    key: 'css'
  }) : null);

  var CacheProvider = EmotionCacheContext.Provider;

  var withEmotionCache = function withEmotionCache
  /* <Props, Ref: React.Ref<*>> */
  (func
  /*: (props: Props, cache: EmotionCache, ref: Ref) => React.Node */
  )
  /*: React.AbstractComponent<Props> */
  {
    return /*#__PURE__*/React.forwardRef(function (props
    /*: Props */
    , ref
    /*: Ref */
    ) {
      // the cache will never be null in the browser
      var cache = React.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };

  if (!isBrowser$1) {
    withEmotionCache = function withEmotionCache
    /* <Props> */
    (func
    /*: (props: Props, cache: EmotionCache) => React.Node */
    )
    /*: React.StatelessFunctionalComponent<Props> */
    {
      return function (props
      /*: Props */
      ) {
        var cache = React.useContext(EmotionCacheContext);

        if (cache === null) {
          // yes, we're potentially creating this on every render
          // it doesn't actually matter though since it's only on the server
          // so there will only every be a single render
          // that could change in the future because of suspense and etc. but for now,
          // this works and i don't want to optimise for a future thing that we aren't sure about
          cache = createCache({
            key: 'css'
          });
          return /*#__PURE__*/React__namespace.createElement(EmotionCacheContext.Provider, {
            value: cache
          }, func(props, cache));
        } else {
          return func(props, cache);
        }
      };
    };
  }

  var ThemeContext = /* #__PURE__ */React__namespace.createContext({});

  // initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
  // initial client-side render from SSR, use place of hydrating tag

  var Global
  /*: React.AbstractComponent<
  GlobalProps
  > */
  = /* #__PURE__ */withEmotionCache(function (props
  /*: GlobalProps */
  , cache) {

    var styles = props.styles;
    var serialized = serializeStyles([styles], undefined, React__namespace.useContext(ThemeContext));

    if (!isBrowser$1) {
      var _ref;

      var serializedNames = serialized.name;
      var serializedStyles = serialized.styles;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        serializedStyles += next.styles;
        next = next.next;
      }

      var shouldCache = cache.compat === true;
      var rules = cache.insert("", {
        name: serializedNames,
        styles: serializedStyles
      }, cache.sheet, shouldCache);

      if (shouldCache) {
        return null;
      }

      return /*#__PURE__*/React__namespace.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = cache.sheet.nonce, _ref));
    } // yes, i know these hooks are used conditionally
    // but it is based on a constant that will never change at runtime
    // it's effectively like having two implementations and switching them out
    // so it's not actually breaking anything


    var sheetRef = React__namespace.useRef();
    useInsertionEffectWithLayoutFallback(function () {
      var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

      var sheet = new cache.sheet.constructor({
        key: key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: cache.sheet.isSpeedy
      });
      var rehydrating = false;
      var node
      /*: HTMLStyleElement | null*/
      = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

      if (cache.sheet.tags.length) {
        sheet.before = cache.sheet.tags[0];
      }

      if (node !== null) {
        rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

        node.setAttribute('data-emotion', key);
        sheet.hydrate([node]);
      }

      sheetRef.current = [sheet, rehydrating];
      return function () {
        sheet.flush();
      };
    }, [cache]);
    useInsertionEffectWithLayoutFallback(function () {
      var sheetRefCurrent = sheetRef.current;
      var sheet = sheetRefCurrent[0],
          rehydrating = sheetRefCurrent[1];

      if (rehydrating) {
        sheetRefCurrent[1] = false;
        return;
      }

      if (serialized.next !== undefined) {
        // insert keyframes
        insertStyles(cache, serialized.next, true);
      }

      if (sheet.tags.length) {
        // if this doesn't exist then it will be null so the style element will be appended
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }

      cache.insert("", serialized, sheet, false);
    }, [cache, serialized.name]);
    return null;
  });

  /* import type { Interpolation, SerializedStyles } from '@emotion/utils' */

  function css()
  /*: SerializedStyles */
  {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return serializeStyles(args);
  }

  /*
  type Keyframes = {|
    name: string,
    styles: string,
    anim: 1,
    toString: () => string
  |} & string
  */

  var keyframes = function
    /*: Keyframes */
  keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
      name: name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };

  /* import type {
    ElementType,
    StatelessFunctionalComponent,
    AbstractComponent
  } from 'react' */
  /*
  export type Interpolations = Array<any>

  export type StyledElementType<Props> =
    | string
    | AbstractComponent<{ ...Props, className: string }, mixed>

  export type StyledOptions = {
    label?: string,
    shouldForwardProp?: string => boolean,
    target?: string
  }

  export type StyledComponent<Props> = StatelessFunctionalComponent<Props> & {
    defaultProps: any,
    toString: () => string,
    withComponent: (
      nextTag: StyledElementType<Props>,
      nextOptions?: StyledOptions
    ) => StyledComponent<Props>
  }

  export type PrivateStyledComponent<Props> = StyledComponent<Props> & {
    __emotion_real: StyledComponent<Props>,
    __emotion_base: any,
    __emotion_styles: any,
    __emotion_forwardProp: any
  }
  */

  var testOmitPropsOnStringTag = isPropValid;

  var testOmitPropsOnComponent = function testOmitPropsOnComponent(key
  /*: string */
  ) {
    return key !== 'theme';
  };

  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag
  /*: ElementType */
  ) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  var composeShouldForwardProps = function composeShouldForwardProps(tag
  /*: PrivateStyledComponent<any> */
  , options
  /*: StyledOptions | void */
  , isReal
  /*: boolean */
  ) {
    var shouldForwardProp;

    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName
      /*: string */
      ) {
        return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
      } : optionsShouldForwardProp;
    }

    if (typeof shouldForwardProp !== 'function' && isReal) {
      shouldForwardProp = tag.__emotion_forwardProp;
    }

    return shouldForwardProp;
  };
  /*
  export type CreateStyledComponent = <Props>(
    ...args: Interpolations
  ) => StyledComponent<Props>

  export type CreateStyled = {
    <Props>(
      tag: StyledElementType<Props>,
      options?: StyledOptions
    ): (...args: Interpolations) => StyledComponent<Props>,
    [key: string]: CreateStyledComponent,
    bind: () => CreateStyled
  }
  */

  var isDevelopment = false;

  var isBrowser = typeof document !== 'undefined';

  var Insertion = function Insertion(_ref) {
    var cache = _ref.cache,
        serialized = _ref.serialized,
        isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
      return insertStyles(cache, serialized, isStringTag);
    });

    if (!isBrowser && rules !== undefined) {
      var _ref2;

      var serializedNames = serialized.name;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        next = next.next;
      }

      return /*#__PURE__*/React__namespace.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref2.nonce = cache.sheet.nonce, _ref2));
    }

    return null;
  };

  var createStyled$3
  /*: CreateStyled */
  = function createStyled
  /*: CreateStyled */
  (tag
  /*: any */
  , options
  /* ?: StyledOptions */
  ) {

    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;

    if (options !== undefined) {
      identifierName = options.label;
      targetClassName = options.target;
    }

    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp('as');
    /* return function<Props>(): PrivateStyledComponent<Props> { */

    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }

      if (args[0] == null || args[0].raw === undefined) {
        styles.push.apply(styles, args);
      } else {

        styles.push(args[0][0]);
        var len = args.length;
        var i = 1;

        for (; i < len; i++) {

          styles.push(args[i], args[0][i]);
        }
      }

      var Styled
      /*: PrivateStyledComponent<Props> */
      = withEmotionCache(function (props, cache, ref) {
        var FinalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = React__namespace.useContext(ThemeContext);
        }

        if (typeof props.className === 'string') {
          className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
        className += cache.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if (finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;

        if (ref) {
          newProps.ref = ref;
        }

        return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Insertion, {
          cache: cache,
          serialized: serialized,
          isStringTag: typeof FinalTag === 'string'
        }), /*#__PURE__*/React__namespace.createElement(FinalTag, newProps));
      });
      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        value: function value() {
          if (targetClassName === undefined && isDevelopment) {
            return 'NO_COMPONENT_SELECTOR';
          }

          return "." + targetClassName;
        }
      });

      Styled.withComponent = function (nextTag
      /*: StyledElementType<Props> */
      , nextOptions
      /* ?: StyledOptions */
      ) {
        return createStyled(nextTag, _extends$1({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
        })).apply(void 0, styles);
      };

      return Styled;
    };
  };

  var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
  'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

  var newStyled = createStyled$3.bind();
  tags.forEach(function (tagName) {
    newStyled[tagName] = newStyled(tagName);
  });

  let cache;
  if (typeof document === 'object') {
    cache = createCache({
      key: 'css',
      prepend: true
    });
  }
  function StyledEngineProvider(props) {
    const {
      injectFirst,
      children
    } = props;
    return injectFirst && cache ? /*#__PURE__*/require$$2$1.jsx(CacheProvider, {
      value: cache,
      children: children
    }) : children;
  }

  function isEmpty$3(obj) {
    return obj === undefined || obj === null || Object.keys(obj).length === 0;
  }
  function GlobalStyles(props) {
    const {
      styles,
      defaultTheme = {}
    } = props;
    const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty$3(themeInput) ? defaultTheme : themeInput) : styles;
    return /*#__PURE__*/require$$2$1.jsx(Global, {
      styles: globalStyles
    });
  }

  /**
   * @mui/styled-engine v5.16.6
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  function styled$2(tag, options) {
    const stylesFactory = newStyled(tag, options);
    return stylesFactory;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const internal_processStyles = (tag, processor) => {
    // Emotion attaches all the styles as `__emotion_styles`.
    // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
    if (Array.isArray(tag.__emotion_styles)) {
      tag.__emotion_styles = processor(tag.__emotion_styles);
    }
  };

  var styledEngine = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GlobalStyles: GlobalStyles,
    StyledEngineProvider: StyledEngineProvider,
    ThemeContext: ThemeContext,
    css: css,
    default: styled$2,
    internal_processStyles: internal_processStyles,
    keyframes: keyframes
  });

  const _excluded$S = ["values", "unit", "step"];
  const sortBreakpointsValues = values => {
    const breakpointsAsArray = Object.keys(values).map(key => ({
      key,
      val: values[key]
    })) || [];
    // Sort in ascending order
    breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
    return breakpointsAsArray.reduce((acc, obj) => {
      return _extends$1({}, acc, {
        [obj.key]: obj.val
      });
    }, {});
  };

  // Keep in mind that @media is inclusive by the CSS specification.
  function createBreakpoints(breakpoints) {
    const {
        // The breakpoint **start** at this value.
        // For instance with the first breakpoint xs: [xs, sm).
        values = {
          xs: 0,
          // phone
          sm: 600,
          // tablet
          md: 900,
          // small laptop
          lg: 1200,
          // desktop
          xl: 1536 // large screen
        },
        unit = 'px',
        step = 5
      } = breakpoints,
      other = _objectWithoutPropertiesLoose$1(breakpoints, _excluded$S);
    const sortedValues = sortBreakpointsValues(values);
    const keys = Object.keys(sortedValues);
    function up(key) {
      const value = typeof values[key] === 'number' ? values[key] : key;
      return `@media (min-width:${value}${unit})`;
    }
    function down(key) {
      const value = typeof values[key] === 'number' ? values[key] : key;
      return `@media (max-width:${value - step / 100}${unit})`;
    }
    function between(start, end) {
      const endIndex = keys.indexOf(end);
      return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
    }
    function only(key) {
      if (keys.indexOf(key) + 1 < keys.length) {
        return between(key, keys[keys.indexOf(key) + 1]);
      }
      return up(key);
    }
    function not(key) {
      // handle first and last key separately, for better readability
      const keyIndex = keys.indexOf(key);
      if (keyIndex === 0) {
        return up(keys[1]);
      }
      if (keyIndex === keys.length - 1) {
        return down(keys[keyIndex]);
      }
      return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
    }
    return _extends$1({
      keys,
      values: sortedValues,
      up,
      down,
      between,
      only,
      not,
      unit
    }, other);
  }

  const shape = {
    borderRadius: 4
  };

  function merge$1(acc, item) {
    if (!item) {
      return acc;
    }
    return deepmerge$1(acc, item, {
      clone: false // No need to clone deep, it's way faster.
    });
  }

  // The breakpoint **start** at this value.
  // For instance with the first breakpoint xs: [xs, sm[.
  const values = {
    xs: 0,
    // phone
    sm: 600,
    // tablet
    md: 900,
    // small laptop
    lg: 1200,
    // desktop
    xl: 1536 // large screen
  };
  const defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${values[key]}px)`
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {
    const theme = props.theme || {};
    if (Array.isArray(propValue)) {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return propValue.reduce((acc, item, index) => {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }
    if (typeof propValue === 'object') {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return Object.keys(propValue).reduce((acc, breakpoint) => {
        // key is breakpoint
        if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
          const mediaKey = themeBreakpoints.up(breakpoint);
          acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        } else {
          const cssKey = breakpoint;
          acc[cssKey] = propValue[cssKey];
        }
        return acc;
      }, {});
    }
    const output = styleFromPropValue(propValue);
    return output;
  }
  function createEmptyBreakpointObject(breakpointsInput = {}) {
    var _breakpointsInput$key;
    const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
      const breakpointStyleKey = breakpointsInput.up(key);
      acc[breakpointStyleKey] = {};
      return acc;
    }, {});
    return breakpointsInOrder || {};
  }
  function removeUnusedBreakpoints(breakpointKeys, style) {
    return breakpointKeys.reduce((acc, key) => {
      const breakpointOutput = acc[key];
      const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
      if (isBreakpointUnused) {
        delete acc[key];
      }
      return acc;
    }, style);
  }

  function getPath(obj, path, checkVars = true) {
    if (!path || typeof path !== 'string') {
      return null;
    }

    // Check if CSS variables are used
    if (obj && obj.vars && checkVars) {
      const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
      if (val != null) {
        return val;
      }
    }
    return path.split('.').reduce((acc, item) => {
      if (acc && acc[item] != null) {
        return acc[item];
      }
      return null;
    }, obj);
  }
  function getStyleValue$1(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
    let value;
    if (typeof themeMapping === 'function') {
      value = themeMapping(propValueFinal);
    } else if (Array.isArray(themeMapping)) {
      value = themeMapping[propValueFinal] || userValue;
    } else {
      value = getPath(themeMapping, propValueFinal) || userValue;
    }
    if (transform) {
      value = transform(value, userValue, themeMapping);
    }
    return value;
  }
  function style$2(options) {
    const {
      prop,
      cssProperty = options.prop,
      themeKey,
      transform
    } = options;

    // false positive
    // eslint-disable-next-line react/function-component-definition
    const fn = props => {
      if (props[prop] == null) {
        return null;
      }
      const propValue = props[prop];
      const theme = props.theme;
      const themeMapping = getPath(theme, themeKey) || {};
      const styleFromPropValue = propValueFinal => {
        let value = getStyleValue$1(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === 'string') {
          // Haven't found value
          value = getStyleValue$1(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize$1(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, propValue, styleFromPropValue);
    };
    fn.propTypes = {};
    fn.filterProps = [prop];
    return fn;
  }

  function memoize(fn) {
    const cache = {};
    return arg => {
      if (cache[arg] === undefined) {
        cache[arg] = fn(arg);
      }
      return cache[arg];
    };
  }

  const properties = {
    m: 'margin',
    p: 'padding'
  };
  const directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  };
  const aliases = {
    marginX: 'mx',
    marginY: 'my',
    paddingX: 'px',
    paddingY: 'py'
  };

  // memoize() impact:
  // From 300,000 ops/sec
  // To 350,000 ops/sec
  const getCssProperties = memoize(prop => {
    // It's not a shorthand notation.
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }
    const [a, b] = prop.split('');
    const property = properties[a];
    const direction = directions[b] || '';
    return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
  });
  const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
  const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
  [...marginKeys, ...paddingKeys];
  function createUnaryUnit(theme, themeKey, defaultValue, propName) {
    var _getPath;
    const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
    if (typeof themeSpacing === 'number') {
      return abs => {
        if (typeof abs === 'string') {
          return abs;
        }
        return themeSpacing * abs;
      };
    }
    if (Array.isArray(themeSpacing)) {
      return abs => {
        if (typeof abs === 'string') {
          return abs;
        }
        return themeSpacing[abs];
      };
    }
    if (typeof themeSpacing === 'function') {
      return themeSpacing;
    }
    return () => undefined;
  }
  function createUnarySpacing(theme) {
    return createUnaryUnit(theme, 'spacing', 8);
  }
  function getValue(transformer, propValue) {
    if (typeof propValue === 'string' || propValue == null) {
      return propValue;
    }
    const abs = Math.abs(propValue);
    const transformed = transformer(abs);
    if (propValue >= 0) {
      return transformed;
    }
    if (typeof transformed === 'number') {
      return -transformed;
    }
    return `-${transformed}`;
  }
  function getStyleFromPropValue(cssProperties, transformer) {
    return propValue => cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  }
  function resolveCssProperty(props, keys, prop, transformer) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (keys.indexOf(prop) === -1) {
      return null;
    }
    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }
  function style$1(props, keys) {
    const transformer = createUnarySpacing(props.theme);
    return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge$1, {});
  }
  function margin(props) {
    return style$1(props, marginKeys);
  }
  margin.propTypes = {};
  margin.filterProps = marginKeys;
  function padding(props) {
    return style$1(props, paddingKeys);
  }
  padding.propTypes = {};
  padding.filterProps = paddingKeys;

  // The different signatures imply different meaning for their arguments that can't be expressed structurally.
  // We express the difference with variable names.

  function createSpacing(spacingInput = 8) {
    // Already transformed.
    if (spacingInput.mui) {
      return spacingInput;
    }

    // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
    // Smaller components, such as icons, can align to a 4dp grid.
    // https://m2.material.io/design/layout/understanding-layout.html
    const transform = createUnarySpacing({
      spacing: spacingInput
    });
    const spacing = (...argsInput) => {
      const args = argsInput.length === 0 ? [1] : argsInput;
      return args.map(argument => {
        const output = transform(argument);
        return typeof output === 'number' ? `${output}px` : output;
      }).join(' ');
    };
    spacing.mui = true;
    return spacing;
  }

  function compose$2(...styles) {
    const handlers = styles.reduce((acc, style) => {
      style.filterProps.forEach(prop => {
        acc[prop] = style;
      });
      return acc;
    }, {});

    // false positive
    // eslint-disable-next-line react/function-component-definition
    const fn = props => {
      return Object.keys(props).reduce((acc, prop) => {
        if (handlers[prop]) {
          return merge$1(acc, handlers[prop](props));
        }
        return acc;
      }, {});
    };
    fn.propTypes = {};
    fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
    return fn;
  }

  function borderTransform(value) {
    if (typeof value !== 'number') {
      return value;
    }
    return `${value}px solid`;
  }
  function createBorderStyle(prop, transform) {
    return style$2({
      prop,
      themeKey: 'borders',
      transform
    });
  }
  const border = createBorderStyle('border', borderTransform);
  const borderTop = createBorderStyle('borderTop', borderTransform);
  const borderRight = createBorderStyle('borderRight', borderTransform);
  const borderBottom = createBorderStyle('borderBottom', borderTransform);
  const borderLeft = createBorderStyle('borderLeft', borderTransform);
  const borderColor = createBorderStyle('borderColor');
  const borderTopColor = createBorderStyle('borderTopColor');
  const borderRightColor = createBorderStyle('borderRightColor');
  const borderBottomColor = createBorderStyle('borderBottomColor');
  const borderLeftColor = createBorderStyle('borderLeftColor');
  const outline = createBorderStyle('outline', borderTransform);
  const outlineColor = createBorderStyle('outlineColor');

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const borderRadius = props => {
    if (props.borderRadius !== undefined && props.borderRadius !== null) {
      const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);
      const styleFromPropValue = propValue => ({
        borderRadius: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
    }
    return null;
  };
  borderRadius.propTypes = {};
  borderRadius.filterProps = ['borderRadius'];
  compose$2(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const gap = props => {
    if (props.gap !== undefined && props.gap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8);
      const styleFromPropValue = propValue => ({
        gap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.gap, styleFromPropValue);
    }
    return null;
  };
  gap.propTypes = {};
  gap.filterProps = ['gap'];

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const columnGap = props => {
    if (props.columnGap !== undefined && props.columnGap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8);
      const styleFromPropValue = propValue => ({
        columnGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.columnGap, styleFromPropValue);
    }
    return null;
  };
  columnGap.propTypes = {};
  columnGap.filterProps = ['columnGap'];

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const rowGap = props => {
    if (props.rowGap !== undefined && props.rowGap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8);
      const styleFromPropValue = propValue => ({
        rowGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.rowGap, styleFromPropValue);
    }
    return null;
  };
  rowGap.propTypes = {};
  rowGap.filterProps = ['rowGap'];
  const gridColumn = style$2({
    prop: 'gridColumn'
  });
  const gridRow = style$2({
    prop: 'gridRow'
  });
  const gridAutoFlow = style$2({
    prop: 'gridAutoFlow'
  });
  const gridAutoColumns = style$2({
    prop: 'gridAutoColumns'
  });
  const gridAutoRows = style$2({
    prop: 'gridAutoRows'
  });
  const gridTemplateColumns = style$2({
    prop: 'gridTemplateColumns'
  });
  const gridTemplateRows = style$2({
    prop: 'gridTemplateRows'
  });
  const gridTemplateAreas = style$2({
    prop: 'gridTemplateAreas'
  });
  const gridArea = style$2({
    prop: 'gridArea'
  });
  compose$2(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

  function paletteTransform(value, userValue) {
    if (userValue === 'grey') {
      return userValue;
    }
    return value;
  }
  const color = style$2({
    prop: 'color',
    themeKey: 'palette',
    transform: paletteTransform
  });
  const bgcolor = style$2({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: paletteTransform
  });
  const backgroundColor = style$2({
    prop: 'backgroundColor',
    themeKey: 'palette',
    transform: paletteTransform
  });
  compose$2(color, bgcolor, backgroundColor);

  function sizingTransform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  const width = style$2({
    prop: 'width',
    transform: sizingTransform
  });
  const maxWidth = props => {
    if (props.maxWidth !== undefined && props.maxWidth !== null) {
      const styleFromPropValue = propValue => {
        var _props$theme, _props$theme2;
        const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
        if (!breakpoint) {
          return {
            maxWidth: sizingTransform(propValue)
          };
        }
        if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== 'px') {
          return {
            maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
          };
        }
        return {
          maxWidth: breakpoint
        };
      };
      return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
    }
    return null;
  };
  maxWidth.filterProps = ['maxWidth'];
  const minWidth = style$2({
    prop: 'minWidth',
    transform: sizingTransform
  });
  const height = style$2({
    prop: 'height',
    transform: sizingTransform
  });
  const maxHeight = style$2({
    prop: 'maxHeight',
    transform: sizingTransform
  });
  const minHeight = style$2({
    prop: 'minHeight',
    transform: sizingTransform
  });
  style$2({
    prop: 'size',
    cssProperty: 'width',
    transform: sizingTransform
  });
  style$2({
    prop: 'size',
    cssProperty: 'height',
    transform: sizingTransform
  });
  const boxSizing = style$2({
    prop: 'boxSizing'
  });
  compose$2(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

  const defaultSxConfig = {
    // borders
    border: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderTop: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderRight: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderBottom: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderLeft: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderColor: {
      themeKey: 'palette'
    },
    borderTopColor: {
      themeKey: 'palette'
    },
    borderRightColor: {
      themeKey: 'palette'
    },
    borderBottomColor: {
      themeKey: 'palette'
    },
    borderLeftColor: {
      themeKey: 'palette'
    },
    outline: {
      themeKey: 'borders',
      transform: borderTransform
    },
    outlineColor: {
      themeKey: 'palette'
    },
    borderRadius: {
      themeKey: 'shape.borderRadius',
      style: borderRadius
    },
    // palette
    color: {
      themeKey: 'palette',
      transform: paletteTransform
    },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: paletteTransform
    },
    backgroundColor: {
      themeKey: 'palette',
      transform: paletteTransform
    },
    // spacing
    p: {
      style: padding
    },
    pt: {
      style: padding
    },
    pr: {
      style: padding
    },
    pb: {
      style: padding
    },
    pl: {
      style: padding
    },
    px: {
      style: padding
    },
    py: {
      style: padding
    },
    padding: {
      style: padding
    },
    paddingTop: {
      style: padding
    },
    paddingRight: {
      style: padding
    },
    paddingBottom: {
      style: padding
    },
    paddingLeft: {
      style: padding
    },
    paddingX: {
      style: padding
    },
    paddingY: {
      style: padding
    },
    paddingInline: {
      style: padding
    },
    paddingInlineStart: {
      style: padding
    },
    paddingInlineEnd: {
      style: padding
    },
    paddingBlock: {
      style: padding
    },
    paddingBlockStart: {
      style: padding
    },
    paddingBlockEnd: {
      style: padding
    },
    m: {
      style: margin
    },
    mt: {
      style: margin
    },
    mr: {
      style: margin
    },
    mb: {
      style: margin
    },
    ml: {
      style: margin
    },
    mx: {
      style: margin
    },
    my: {
      style: margin
    },
    margin: {
      style: margin
    },
    marginTop: {
      style: margin
    },
    marginRight: {
      style: margin
    },
    marginBottom: {
      style: margin
    },
    marginLeft: {
      style: margin
    },
    marginX: {
      style: margin
    },
    marginY: {
      style: margin
    },
    marginInline: {
      style: margin
    },
    marginInlineStart: {
      style: margin
    },
    marginInlineEnd: {
      style: margin
    },
    marginBlock: {
      style: margin
    },
    marginBlockStart: {
      style: margin
    },
    marginBlockEnd: {
      style: margin
    },
    // display
    displayPrint: {
      cssProperty: false,
      transform: value => ({
        '@media print': {
          display: value
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    // flexbox
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    // grid
    gap: {
      style: gap
    },
    rowGap: {
      style: rowGap
    },
    columnGap: {
      style: columnGap
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    // positions
    position: {},
    zIndex: {
      themeKey: 'zIndex'
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    // shadows
    boxShadow: {
      themeKey: 'shadows'
    },
    // sizing
    width: {
      transform: sizingTransform
    },
    maxWidth: {
      style: maxWidth
    },
    minWidth: {
      transform: sizingTransform
    },
    height: {
      transform: sizingTransform
    },
    maxHeight: {
      transform: sizingTransform
    },
    minHeight: {
      transform: sizingTransform
    },
    boxSizing: {},
    // typography
    fontFamily: {
      themeKey: 'typography'
    },
    fontSize: {
      themeKey: 'typography'
    },
    fontStyle: {
      themeKey: 'typography'
    },
    fontWeight: {
      themeKey: 'typography'
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: 'typography'
    }
  };

  function objectsHaveSameKeys(...objects) {
    const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every(object => union.size === Object.keys(object).length);
  }
  function callIfFn(maybeFn, arg) {
    return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  function unstable_createStyleFunctionSx() {
    function getThemeValue(prop, val, theme, config) {
      const props = {
        [prop]: val,
        theme
      };
      const options = config[prop];
      if (!options) {
        return {
          [prop]: val
        };
      }
      const {
        cssProperty = prop,
        themeKey,
        transform,
        style
      } = options;
      if (val == null) {
        return null;
      }

      // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
      if (themeKey === 'typography' && val === 'inherit') {
        return {
          [prop]: val
        };
      }
      const themeMapping = getPath(theme, themeKey) || {};
      if (style) {
        return style(props);
      }
      const styleFromPropValue = propValueFinal => {
        let value = getStyleValue$1(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === 'string') {
          // Haven't found value
          value = getStyleValue$1(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize$1(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, val, styleFromPropValue);
    }
    function styleFunctionSx(props) {
      var _theme$unstable_sxCon;
      const {
        sx,
        theme = {}
      } = props || {};
      if (!sx) {
        return null; // Emotion & styled-components will neglect null
      }
      const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig;

      /*
       * Receive `sxInput` as object or callback
       * and then recursively check keys & values to create media query object styles.
       * (the result will be used in `styled`)
       */
      function traverse(sxInput) {
        let sxObject = sxInput;
        if (typeof sxInput === 'function') {
          sxObject = sxInput(theme);
        } else if (typeof sxInput !== 'object') {
          // value
          return sxInput;
        }
        if (!sxObject) {
          return null;
        }
        const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
        const breakpointsKeys = Object.keys(emptyBreakpoints);
        let css = emptyBreakpoints;
        Object.keys(sxObject).forEach(styleKey => {
          const value = callIfFn(sxObject[styleKey], theme);
          if (value !== null && value !== undefined) {
            if (typeof value === 'object') {
              if (config[styleKey]) {
                css = merge$1(css, getThemeValue(styleKey, value, theme, config));
              } else {
                const breakpointsValues = handleBreakpoints({
                  theme
                }, value, x => ({
                  [styleKey]: x
                }));
                if (objectsHaveSameKeys(breakpointsValues, value)) {
                  css[styleKey] = styleFunctionSx({
                    sx: value,
                    theme
                  });
                } else {
                  css = merge$1(css, breakpointsValues);
                }
              }
            } else {
              css = merge$1(css, getThemeValue(styleKey, value, theme, config));
            }
          }
        });
        return removeUnusedBreakpoints(breakpointsKeys, css);
      }
      return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
    }
    return styleFunctionSx;
  }
  const styleFunctionSx$1 = unstable_createStyleFunctionSx();
  styleFunctionSx$1.filterProps = ['sx'];

  /**
   * A universal utility to style components with multiple color modes. Always use it from the theme object.
   * It works with:
   *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
   *  - [CSS theme variables](https://mui.com/material-ui/experimental-api/css-theme-variables/overview/)
   *  - Zero-runtime engine
   *
   * Tips: Use an array over object spread and place `theme.applyStyles()` last.
   *
   * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
   *
   * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
   *
   * @example
   * 1. using with `styled`:
   * ```jsx
   *   const Component = styled('div')(({ theme }) => [
   *     { background: '#e5e5e5' },
   *     theme.applyStyles('dark', {
   *       background: '#1c1c1c',
   *       color: '#fff',
   *     }),
   *   ]);
   * ```
   *
   * @example
   * 2. using with `sx` prop:
   * ```jsx
   *   <Box sx={theme => [
   *     { background: '#e5e5e5' },
   *     theme.applyStyles('dark', {
   *        background: '#1c1c1c',
   *        color: '#fff',
   *      }),
   *     ]}
   *   />
   * ```
   *
   * @example
   * 3. theming a component:
   * ```jsx
   *   extendTheme({
   *     components: {
   *       MuiButton: {
   *         styleOverrides: {
   *           root: ({ theme }) => [
   *             { background: '#e5e5e5' },
   *             theme.applyStyles('dark', {
   *               background: '#1c1c1c',
   *               color: '#fff',
   *             }),
   *           ],
   *         },
   *       }
   *     }
   *   })
   *```
   */
  function applyStyles$2(key, styles) {
    // @ts-expect-error this is 'any' type
    const theme = this;
    if (theme.vars && typeof theme.getColorSchemeSelector === 'function') {
      // If CssVarsProvider is used as a provider,
      // returns '* :where([data-mui-color-scheme="light|dark"]) &'
      const selector = theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, '*:where($1)');
      return {
        [selector]: styles
      };
    }
    if (theme.palette.mode === key) {
      return styles;
    }
    return {};
  }

  const _excluded$R = ["breakpoints", "palette", "spacing", "shape"];
  function createTheme$2(options = {}, ...args) {
    const {
        breakpoints: breakpointsInput = {},
        palette: paletteInput = {},
        spacing: spacingInput,
        shape: shapeInput = {}
      } = options,
      other = _objectWithoutPropertiesLoose$1(options, _excluded$R);
    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput);
    let muiTheme = deepmerge$1({
      breakpoints,
      direction: 'ltr',
      components: {},
      // Inject component definitions.
      palette: _extends$1({
        mode: 'light'
      }, paletteInput),
      spacing,
      shape: _extends$1({}, shape, shapeInput)
    }, other);
    muiTheme.applyStyles = applyStyles$2;
    muiTheme = args.reduce((acc, argument) => deepmerge$1(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx$1({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }

  var createTheme$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: createTheme$2,
    private_createBreakpoints: createBreakpoints,
    unstable_applyStyles: applyStyles$2
  });

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function useTheme$1(defaultTheme = null) {
    const contextTheme = React__namespace.useContext(ThemeContext);
    return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
  }

  const systemDefaultTheme$1 = createTheme$2();
  function useTheme(defaultTheme = systemDefaultTheme$1) {
    return useTheme$1(defaultTheme);
  }

  const _excluded$Q = ["sx"];
  const splitProps = props => {
    var _props$theme$unstable, _props$theme;
    const result = {
      systemProps: {},
      otherProps: {}
    };
    const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig;
    Object.keys(props).forEach(prop => {
      if (config[prop]) {
        result.systemProps[prop] = props[prop];
      } else {
        result.otherProps[prop] = props[prop];
      }
    });
    return result;
  };
  function extendSxProp(props) {
    const {
        sx: inSx
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$Q);
    const {
      systemProps,
      otherProps
    } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
      finalSx = [systemProps, ...inSx];
    } else if (typeof inSx === 'function') {
      finalSx = (...args) => {
        const result = inSx(...args);
        if (!isPlainObject(result)) {
          return systemProps;
        }
        return _extends$1({}, systemProps, result);
      };
    } else {
      finalSx = _extends$1({}, systemProps, inSx);
    }
    return _extends$1({}, otherProps, {
      sx: finalSx
    });
  }

  var styleFunctionSx = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: styleFunctionSx$1,
    extendSxProp: extendSxProp,
    unstable_createStyleFunctionSx: unstable_createStyleFunctionSx,
    unstable_defaultSxConfig: defaultSxConfig
  });

  const _excluded$P = ["className", "component"];
  function createBox(options = {}) {
    const {
      themeId,
      defaultTheme,
      defaultClassName = 'MuiBox-root',
      generateClassName
    } = options;
    const BoxRoot = styled$2('div', {
      shouldForwardProp: prop => prop !== 'theme' && prop !== 'sx' && prop !== 'as'
    })(styleFunctionSx$1);
    const Box = /*#__PURE__*/React__namespace.forwardRef(function Box(inProps, ref) {
      const theme = useTheme(defaultTheme);
      const _extendSxProp = extendSxProp(inProps),
        {
          className,
          component = 'div'
        } = _extendSxProp,
        other = _objectWithoutPropertiesLoose$1(_extendSxProp, _excluded$P);
      return /*#__PURE__*/require$$2$1.jsx(BoxRoot, _extends$1({
        as: component,
        ref: ref,
        className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
        theme: themeId ? theme[themeId] || theme : theme
      }, other));
    });
    return Box;
  }

  const _excluded$O = ["ownerState"],
    _excluded2$7 = ["variants"],
    _excluded3$2 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function isEmpty$2(obj) {
    return Object.keys(obj).length === 0;
  }

  // https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
  function isStringTag(tag) {
    return typeof tag === 'string' &&
    // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
  }

  // Update /system/styled/#api in case if this changes
  function shouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
  }
  const systemDefaultTheme = createTheme$2();
  const lowercaseFirstLetter = string => {
    if (!string) {
      return string;
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
  };
  function resolveTheme({
    defaultTheme,
    theme,
    themeId
  }) {
    return isEmpty$2(theme) ? defaultTheme : theme[themeId] || theme;
  }
  function defaultOverridesResolver(slot) {
    if (!slot) {
      return null;
    }
    return (props, styles) => styles[slot];
  }
  function processStyleArg(callableStyle, _ref) {
    let {
        ownerState
      } = _ref,
      props = _objectWithoutPropertiesLoose$1(_ref, _excluded$O);
    const resolvedStylesArg = typeof callableStyle === 'function' ? callableStyle(_extends$1({
      ownerState
    }, props)) : callableStyle;
    if (Array.isArray(resolvedStylesArg)) {
      return resolvedStylesArg.flatMap(resolvedStyle => processStyleArg(resolvedStyle, _extends$1({
        ownerState
      }, props)));
    }
    if (!!resolvedStylesArg && typeof resolvedStylesArg === 'object' && Array.isArray(resolvedStylesArg.variants)) {
      const {
          variants = []
        } = resolvedStylesArg,
        otherStyles = _objectWithoutPropertiesLoose$1(resolvedStylesArg, _excluded2$7);
      let result = otherStyles;
      variants.forEach(variant => {
        let isMatch = true;
        if (typeof variant.props === 'function') {
          isMatch = variant.props(_extends$1({
            ownerState
          }, props, ownerState));
        } else {
          Object.keys(variant.props).forEach(key => {
            if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
              isMatch = false;
            }
          });
        }
        if (isMatch) {
          if (!Array.isArray(result)) {
            result = [result];
          }
          result.push(typeof variant.style === 'function' ? variant.style(_extends$1({
            ownerState
          }, props, ownerState)) : variant.style);
        }
      });
      return result;
    }
    return resolvedStylesArg;
  }
  function createStyled$2(input = {}) {
    const {
      themeId,
      defaultTheme = systemDefaultTheme,
      rootShouldForwardProp = shouldForwardProp,
      slotShouldForwardProp = shouldForwardProp
    } = input;
    const systemSx = props => {
      return styleFunctionSx$1(_extends$1({}, props, {
        theme: resolveTheme(_extends$1({}, props, {
          defaultTheme,
          themeId
        }))
      }));
    };
    systemSx.__mui_systemSx = true;
    return (tag, inputOptions = {}) => {
      // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
      internal_processStyles(tag, styles => styles.filter(style => !(style != null && style.__mui_systemSx)));
      const {
          name: componentName,
          slot: componentSlot,
          skipVariantsResolver: inputSkipVariantsResolver,
          skipSx: inputSkipSx,
          // TODO v6: remove `lowercaseFirstLetter()` in the next major release
          // For more details: https://github.com/mui/material-ui/pull/37908
          overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
        } = inputOptions,
        options = _objectWithoutPropertiesLoose$1(inputOptions, _excluded3$2);

      // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
      const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
      const skipSx = inputSkipSx || false;
      let label;
      let shouldForwardPropOption = shouldForwardProp;

      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      if (componentSlot === 'Root' || componentSlot === 'root') {
        shouldForwardPropOption = rootShouldForwardProp;
      } else if (componentSlot) {
        // any other slot specified
        shouldForwardPropOption = slotShouldForwardProp;
      } else if (isStringTag(tag)) {
        // for string (html) tag, preserve the behavior in emotion & styled-components.
        shouldForwardPropOption = undefined;
      }
      const defaultStyledResolver = styled$2(tag, _extends$1({
        shouldForwardProp: shouldForwardPropOption,
        label
      }, options));
      const transformStyleArg = stylesArg => {
        // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        if (typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg || isPlainObject(stylesArg)) {
          return props => processStyleArg(stylesArg, _extends$1({}, props, {
            theme: resolveTheme({
              theme: props.theme,
              defaultTheme,
              themeId
            })
          }));
        }
        return stylesArg;
      };
      const muiStyledResolver = (styleArg, ...expressions) => {
        let transformedStyleArg = transformStyleArg(styleArg);
        const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
        if (componentName && overridesResolver) {
          expressionsWithDefaultTheme.push(props => {
            const theme = resolveTheme(_extends$1({}, props, {
              defaultTheme,
              themeId
            }));
            if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
              return null;
            }
            const styleOverrides = theme.components[componentName].styleOverrides;
            const resolvedStyleOverrides = {};
            // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, _extends$1({}, props, {
                theme
              }));
            });
            return overridesResolver(props, resolvedStyleOverrides);
          });
        }
        if (componentName && !skipVariantsResolver) {
          expressionsWithDefaultTheme.push(props => {
            var _theme$components;
            const theme = resolveTheme(_extends$1({}, props, {
              defaultTheme,
              themeId
            }));
            const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
            return processStyleArg({
              variants: themeVariants
            }, _extends$1({}, props, {
              theme
            }));
          });
        }
        if (!skipSx) {
          expressionsWithDefaultTheme.push(systemSx);
        }
        const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
        if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
          const placeholders = new Array(numOfCustomFnsApplied).fill('');
          // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
          transformedStyleArg = [...styleArg, ...placeholders];
          transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
        }
        const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
        if (tag.muiName) {
          Component.muiName = tag.muiName;
        }
        return Component;
      };
      if (defaultStyledResolver.withConfig) {
        muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
      }
      return muiStyledResolver;
    };
  }

  function getThemeProps$1(params) {
    const {
      theme,
      name,
      props
    } = params;
    if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
      return props;
    }
    return resolveProps(theme.components[name].defaultProps, props);
  }

  function useThemeProps$1({
    props,
    name,
    defaultTheme,
    themeId
  }) {
    let theme = useTheme(defaultTheme);
    if (themeId) {
      theme = theme[themeId] || theme;
    }
    const mergedProps = getThemeProps$1({
      theme,
      name,
      props
    });
    return mergedProps;
  }

  /**
   * Converts a color from CSS hex format to CSS rgb format.
   * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   * @returns {string} A CSS rgb color string
   */
  function hexToRgb(color) {
    color = color.slice(1);
    const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
    let colors = color.match(re);
    if (colors && colors[0].length === 1) {
      colors = colors.map(n => n + n);
    }
    return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
  }

  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @returns {object} - A MUI color object: {type: string, values: number[]}
   */
  function decomposeColor(color) {
    // Idempotent
    if (color.type) {
      return color;
    }
    if (color.charAt(0) === '#') {
      return decomposeColor(hexToRgb(color));
    }
    const marker = color.indexOf('(');
    const type = color.substring(0, marker);
    if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
      throw new Error(formatMuiErrorMessage$1(9, color));
    }
    let values = color.substring(marker + 1, color.length - 1);
    let colorSpace;
    if (type === 'color') {
      values = values.split(' ');
      colorSpace = values.shift();
      if (values.length === 4 && values[3].charAt(0) === '/') {
        values[3] = values[3].slice(1);
      }
      if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
        throw new Error(formatMuiErrorMessage$1(10, colorSpace));
      }
    } else {
      values = values.split(',');
    }
    values = values.map(value => parseFloat(value));
    return {
      type,
      values,
      colorSpace
    };
  }

  /**
   * Returns a channel created from the input color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
   */
  const colorChannel = color => {
    const decomposedColor = decomposeColor(color);
    return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf('hsl') !== -1 && idx !== 0 ? `${val}%` : val).join(' ');
  };

  const PropsContext = /*#__PURE__*/React__namespace.createContext(undefined);
  function getThemeProps(params) {
    const {
      theme,
      name,
      props
    } = params;
    if (!theme || !theme.components || !theme.components[name]) {
      return props;
    }
    const config = theme.components[name];
    if (config.defaultProps) {
      // compatible with v5 signature
      return resolveProps(config.defaultProps, props);
    }
    if (!config.styleOverrides && !config.variants) {
      // v6 signature, no property 'defaultProps'
      return resolveProps(config, props);
    }
    return props;
  }
  function useDefaultProps$1({
    props,
    name
  }) {
    const ctx = React__namespace.useContext(PropsContext);
    return getThemeProps({
      props,
      name,
      theme: {
        components: ctx
      }
    });
  }

  /**
   * The benefit of this function is to help developers get CSS var from theme without specifying the whole variable
   * and they does not need to remember the prefix (defined once).
   */
  function createGetCssVar$1(prefix = '') {
    function appendVar(...vars) {
      if (!vars.length) {
        return '';
      }
      const value = vars[0];
      if (typeof value === 'string' && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
        return `, var(--${prefix ? `${prefix}-` : ''}${value}${appendVar(...vars.slice(1))})`;
      }
      return `, ${value}`;
    }

    // AdditionalVars makes `getCssVar` less strict, so it can be use like this `getCssVar('non-mui-variable')` without type error.
    const getCssVar = (field, ...fallbacks) => {
      return `var(--${prefix ? `${prefix}-` : ''}${field}${appendVar(...fallbacks)})`;
    };
    return getCssVar;
  }

  /**
   * This function create an object from keys, value and then assign to target
   *
   * @param {Object} obj : the target object to be assigned
   * @param {string[]} keys
   * @param {string | number} value
   *
   * @example
   * const source = {}
   * assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
   * console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
   *
   * @example
   * const source = { palette: { primary: 'var(--palette-primary)' } }
   * assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
   * console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
   */
  const assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
    let temp = obj;
    keys.forEach((k, index) => {
      if (index === keys.length - 1) {
        if (Array.isArray(temp)) {
          temp[Number(k)] = value;
        } else if (temp && typeof temp === 'object') {
          temp[k] = value;
        }
      } else if (temp && typeof temp === 'object') {
        if (!temp[k]) {
          temp[k] = arrayKeys.includes(k) ? [] : {};
        }
        temp = temp[k];
      }
    });
  };

  /**
   *
   * @param {Object} obj : source object
   * @param {Function} callback : a function that will be called when
   *                   - the deepest key in source object is reached
   *                   - the value of the deepest key is NOT `undefined` | `null`
   *
   * @example
   * walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
   * // ['palette', 'primary', 'main'] '#000000'
   */
  const walkObjectDeep = (obj, callback, shouldSkipPaths) => {
    function recurse(object, parentKeys = [], arrayKeys = []) {
      Object.entries(object).forEach(([key, value]) => {
        if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
          if (value !== undefined && value !== null) {
            if (typeof value === 'object' && Object.keys(value).length > 0) {
              recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
            } else {
              callback([...parentKeys, key], value, arrayKeys);
            }
          }
        }
      });
    }
    recurse(obj);
  };
  const getCssValue = (keys, value) => {
    if (typeof value === 'number') {
      if (['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some(prop => keys.includes(prop))) {
        // CSS property that are unitless
        return value;
      }
      const lastKey = keys[keys.length - 1];
      if (lastKey.toLowerCase().indexOf('opacity') >= 0) {
        // opacity values are unitless
        return value;
      }
      return `${value}px`;
    }
    return value;
  };

  /**
   * a function that parse theme and return { css, vars }
   *
   * @param {Object} theme
   * @param {{
   *  prefix?: string,
   *  shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean
   * }} options.
   *  `prefix`: The prefix of the generated CSS variables. This function does not change the value.
   *
   * @returns {{ css: Object, vars: Object }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme).
   *
   * @example
   * const { css, vars } = parser({
   *   fontSize: 12,
   *   lineHeight: 1.2,
   *   palette: { primary: { 500: 'var(--color)' } }
   * }, { prefix: 'foo' })
   *
   * console.log(css) // { '--foo-fontSize': '12px', '--foo-lineHeight': 1.2, '--foo-palette-primary-500': 'var(--color)' }
   * console.log(vars) // { fontSize: 'var(--foo-fontSize)', lineHeight: 'var(--foo-lineHeight)', palette: { primary: { 500: 'var(--foo-palette-primary-500)' } } }
   */
  function cssVarsParser(theme, options) {
    const {
      prefix,
      shouldSkipGeneratingVar
    } = options || {};
    const css = {};
    const vars = {};
    const varsWithDefaults = {};
    walkObjectDeep(theme, (keys, value, arrayKeys) => {
      if (typeof value === 'string' || typeof value === 'number') {
        if (!shouldSkipGeneratingVar || !shouldSkipGeneratingVar(keys, value)) {
          // only create css & var if `shouldSkipGeneratingVar` return false
          const cssVar = `--${prefix ? `${prefix}-` : ''}${keys.join('-')}`;
          Object.assign(css, {
            [cssVar]: getCssValue(keys, value)
          });
          assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
          assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${value})`, arrayKeys);
        }
      }
    }, keys => keys[0] === 'vars' // skip 'vars/*' paths
    );
    return {
      css,
      vars,
      varsWithDefaults
    };
  }

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }

  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }

  const _excluded$N = ["colorSchemes", "components", "defaultColorScheme"];
  function prepareCssVars(theme, parserConfig) {
    // @ts-ignore - ignore components do not exist
    const {
        colorSchemes = {},
        defaultColorScheme = 'light'
      } = theme,
      otherTheme = _objectWithoutPropertiesLoose$1(theme, _excluded$N);
    const {
      vars: rootVars,
      css: rootCss,
      varsWithDefaults: rootVarsWithDefaults
    } = cssVarsParser(otherTheme, parserConfig);
    let themeVars = rootVarsWithDefaults;
    const colorSchemesMap = {};
    const {
        [defaultColorScheme]: light
      } = colorSchemes,
      otherColorSchemes = _objectWithoutPropertiesLoose$1(colorSchemes, [defaultColorScheme].map(toPropertyKey));
    Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
      const {
        vars,
        css,
        varsWithDefaults
      } = cssVarsParser(scheme, parserConfig);
      themeVars = deepmerge$1(themeVars, varsWithDefaults);
      colorSchemesMap[key] = {
        css,
        vars
      };
    });
    if (light) {
      // default color scheme vars should be merged last to set as default
      const {
        css,
        vars,
        varsWithDefaults
      } = cssVarsParser(light, parserConfig);
      themeVars = deepmerge$1(themeVars, varsWithDefaults);
      colorSchemesMap[defaultColorScheme] = {
        css,
        vars
      };
    }
    const generateCssVars = colorScheme => {
      var _parserConfig$getSele2;
      if (!colorScheme) {
        var _parserConfig$getSele;
        const css = _extends$1({}, rootCss);
        return {
          css,
          vars: rootVars,
          selector: (parserConfig == null || (_parserConfig$getSele = parserConfig.getSelector) == null ? void 0 : _parserConfig$getSele.call(parserConfig, colorScheme, css)) || ':root'
        };
      }
      const css = _extends$1({}, colorSchemesMap[colorScheme].css);
      return {
        css,
        vars: colorSchemesMap[colorScheme].vars,
        selector: (parserConfig == null || (_parserConfig$getSele2 = parserConfig.getSelector) == null ? void 0 : _parserConfig$getSele2.call(parserConfig, colorScheme, css)) || ':root'
      };
    };
    return {
      vars: themeVars,
      generateCssVars
    };
  }

  const filterBreakpointKeys = (breakpointsKeys, responsiveKeys) => breakpointsKeys.filter(key => responsiveKeys.includes(key));
  const traverseBreakpoints = (breakpoints, responsive, iterator) => {
    const smallestBreakpoint = breakpoints.keys[0]; // the keys is sorted from smallest to largest by `createBreakpoints`.

    if (Array.isArray(responsive)) {
      responsive.forEach((breakpointValue, index) => {
        iterator((responsiveStyles, style) => {
          if (index <= breakpoints.keys.length - 1) {
            if (index === 0) {
              Object.assign(responsiveStyles, style);
            } else {
              responsiveStyles[breakpoints.up(breakpoints.keys[index])] = style;
            }
          }
        }, breakpointValue);
      });
    } else if (responsive && typeof responsive === 'object') {
      // prevent null
      // responsive could be a very big object, pick the smallest responsive values

      const keys = Object.keys(responsive).length > breakpoints.keys.length ? breakpoints.keys : filterBreakpointKeys(breakpoints.keys, Object.keys(responsive));
      keys.forEach(key => {
        if (breakpoints.keys.indexOf(key) !== -1) {
          // @ts-ignore already checked that responsive is an object
          const breakpointValue = responsive[key];
          if (breakpointValue !== undefined) {
            iterator((responsiveStyles, style) => {
              if (smallestBreakpoint === key) {
                Object.assign(responsiveStyles, style);
              } else {
                responsiveStyles[breakpoints.up(key)] = style;
              }
            }, breakpointValue);
          }
        }
      });
    } else if (typeof responsive === 'number' || typeof responsive === 'string') {
      iterator((responsiveStyles, style) => {
        Object.assign(responsiveStyles, style);
      }, responsive);
    }
  };

  const sxConfig = _extends$1({}, defaultSxConfig, {
    // The default system themeKey is shape
    borderRadius: {
      themeKey: 'radius'
    },
    // The default system themeKey is shadows
    boxShadow: {
      themeKey: 'shadow'
    },
    // The default system themeKey is typography
    fontFamily: {
      themeKey: 'fontFamily'
    },
    // The default system themeKey is typography
    fontSize: {
      themeKey: 'fontSize'
    },
    // The default system themeKey is typography
    fontWeight: {
      themeKey: 'fontWeight'
    },
    // The default system themeKey is typography
    letterSpacing: {
      themeKey: 'letterSpacing'
    },
    // The default system themeKey is typography
    lineHeight: {
      themeKey: 'lineHeight'
    }
  });

  const colors = {
    grey: {
      50: '#FBFCFE',
      100: '#F0F4F8',
      200: '#DDE7EE',
      300: '#CDD7E1',
      400: '#9FA6AD',
      500: '#636B74',
      600: '#555E68',
      700: '#32383E',
      800: '#171A1C',
      900: '#0B0D0E'
    },
    blue: {
      50: '#EDF5FD',
      100: '#E3EFFB',
      200: '#C7DFF7',
      300: '#97C3F0',
      400: '#4393E4',
      500: '#0B6BCB',
      600: '#185EA5',
      700: '#12467B',
      800: '#0A2744',
      900: '#051423'
    },
    yellow: {
      50: '#FEFAF6',
      100: '#FDF0E1',
      200: '#FCE1C2',
      300: '#F3C896',
      400: '#EA9A3E',
      500: '#9A5B13',
      600: '#72430D',
      700: '#492B08',
      800: '#2E1B05',
      900: '#1D1002'
    },
    red: {
      50: '#FEF6F6',
      100: '#FCE4E4',
      200: '#F7C5C5',
      300: '#F09898',
      400: '#E47474',
      500: '#C41C1C',
      600: '#A51818',
      700: '#7D1212',
      800: '#430A0A',
      900: '#240505'
    },
    green: {
      50: '#F6FEF6',
      100: '#E3FBE3',
      200: '#C7F7C7',
      300: '#A1E8A1',
      400: '#51BC51',
      500: '#1F7A1F',
      600: '#136C13',
      700: '#0A470A',
      800: '#042F04',
      900: '#021D02'
    }
  };

  function shouldSkipGeneratingVar(keys) {
    var _keys$;
    return !!keys[0].match(/^(typography|variants|breakpoints)$/) || !!keys[0].match(/sxConfig$/) ||
    // ends with sxConfig
    keys[0] === 'palette' && !!((_keys$ = keys[1]) != null && _keys$.match(/^(mode)$/)) || keys[0] === 'focus' && keys[1] !== 'thickness';
  }

  const generateUtilityClass$1 = (componentName, slot) => generateUtilityClass$2(componentName, slot, 'Mui');
  const generateUtilityClasses$1 = (componentName, slots) => generateUtilityClasses$2(componentName, slots, 'Mui');

  const isVariantPalette = colorPalette => colorPalette && typeof colorPalette === 'object' && Object.keys(colorPalette).some(value => {
    var _value$match;
    return (_value$match = value.match) == null ? void 0 : _value$match.call(value, /^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/);
  });
  const assignCss = (target, variantVar, value) => {
    if (variantVar.includes('Color')) {
      target.color = value;
    }
    if (variantVar.includes('Bg')) {
      target.backgroundColor = value;
    }
    if (variantVar.includes('Border')) {
      target.borderColor = value;
    }
  };

  /**
   *
   * @param name variant name
   * @example 'plain'
   *
   * @param palette object that contains palette tokens
   * @example { primary: { plainColor: '', plainHoverColor: '', ...tokens }, ...other palette }
   *
   * @param getCssVar a function that receive variant token and return a CSS variable
   *
   * result will be the stylesheet based on the palette tokens
   * @example {
   *   color: '--token',
   *   backgroundColor: '--token',
   *   '--variant-borderWidth': '0px',
   * }
   * @example {
   *   cursor: 'pointer',
   *   color: '--token',
   *   backgroundColor: '--token',
   *   '--variant-borderWidth': '1px',
   * }
   * @example {
   *   pointerEvents: 'none',
   *   cursor: 'default',
   *   color: '--token',
   *   backgroundColor: '--token',
   *   '--variant-borderWidth': '0px',
   * }
   */
  const createVariantStyle = (name, palette, getCssVar) => {
    const result = {};
    Object.entries(palette || {}).forEach(([variantVar, value]) => {
      if (variantVar.match(new RegExp(`${name}(color|bg|border)`, 'i')) && !!value) {
        const cssVar = getCssVar ? getCssVar(variantVar) : value;
        if (variantVar.includes('Disabled')) {
          result.pointerEvents = 'none';
          result.cursor = 'default';
          result['--Icon-color'] = 'currentColor';
        }
        if (variantVar.match(/(Hover|Active|Disabled)/)) {
          assignCss(result, variantVar, cssVar);
        } else {
          // initial state
          if (!result['--variant-borderWidth']) {
            // important to prevent inheritance, otherwise the children will have the wrong styles e.g.
            //   <Card variant="outlined">
            //     <Typography variant="soft">
            result['--variant-borderWidth'] = '0px';
          }
          if (variantVar.includes('Border')) {
            result['--variant-borderWidth'] = '1px';
            result.border = 'var(--variant-borderWidth) solid';
          }
          // border color should come later
          assignCss(result, variantVar, cssVar);
        }
      }
    });
    return result;
  };
  // It's used only in extendTheme, so it's safe to always include default values
  const createVariant = (variant, theme) => {
    let result = {};
    if (theme) {
      const {
        getCssVar,
        palette
      } = theme;
      Object.entries(palette).forEach(entry => {
        const [color, colorPalette] = entry;
        if (isVariantPalette(colorPalette) && typeof colorPalette === 'object') {
          result = _extends$1({}, result, {
            [color]: createVariantStyle(variant, colorPalette, variantVar => `var(--variant-${variantVar}, ${getCssVar(`palette-${color}-${variantVar}`, palette[color][variantVar])})`)
          });
        }
      });
    }
    result.context = createVariantStyle(variant, {
      plainColor: 'var(--variant-plainColor)',
      plainHoverColor: `var(--variant-plainHoverColor)`,
      plainHoverBg: 'var(--variant-plainHoverBg)',
      plainActiveBg: 'var(--variant-plainActiveBg)',
      plainDisabledColor: 'var(--variant-plainDisabledColor)',
      outlinedColor: 'var(--variant-outlinedColor)',
      outlinedBorder: 'var(--variant-outlinedBorder)',
      outlinedHoverColor: `var(--variant-outlinedHoverColor)`,
      outlinedHoverBorder: `var(--variant-outlinedHoverBorder)`,
      outlinedHoverBg: `var(--variant-outlinedHoverBg)`,
      outlinedActiveBg: `var(--variant-outlinedActiveBg)`,
      outlinedDisabledColor: `var(--variant-outlinedDisabledColor)`,
      outlinedDisabledBorder: `var(--variant-outlinedDisabledBorder)`,
      softColor: 'var(--variant-softColor)',
      softBg: 'var(--variant-softBg)',
      softHoverColor: 'var(--variant-softHoverColor)',
      softHoverBg: 'var(--variant-softHoverBg)',
      softActiveBg: 'var(--variant-softActiveBg)',
      softDisabledColor: 'var(--variant-softDisabledColor)',
      softDisabledBg: 'var(--variant-softDisabledBg)',
      solidColor: 'var(--variant-solidColor)',
      solidBg: 'var(--variant-solidBg)',
      solidHoverBg: 'var(--variant-solidHoverBg)',
      solidActiveBg: 'var(--variant-solidActiveBg)',
      solidDisabledColor: 'var(--variant-solidDisabledColor)',
      solidDisabledBg: 'var(--variant-solidDisabledBg)'
    });
    return result;
  };

  const _excluded$M = ["cssVarPrefix", "breakpoints", "spacing", "components", "variants", "shouldSkipGeneratingVar"],
    _excluded2$6 = ["colorSchemes"];

  // Use Partial2Level instead of PartialDeep because nested value type is CSSObject which does not work with PartialDeep.

  const createGetCssVar = (cssVarPrefix = 'joy') => createGetCssVar$1(cssVarPrefix);
  function extendTheme(themeOptions) {
    var _scalesInput$colorSch, _scalesInput$colorSch2, _scalesInput$colorSch3, _scalesInput$colorSch4, _scalesInput$colorSch5, _scalesInput$colorSch6, _scalesInput$focus$th, _scalesInput$focus, _scalesInput$focus$th2, _scalesInput$focus2;
    const _ref = {},
      {
        cssVarPrefix = 'joy',
        breakpoints,
        spacing,
        components: componentsInput,
        variants: variantsInput,
        shouldSkipGeneratingVar: shouldSkipGeneratingVar$1 = shouldSkipGeneratingVar
      } = _ref,
      scalesInput = _objectWithoutPropertiesLoose$1(_ref, _excluded$M);
    const getCssVar = createGetCssVar(cssVarPrefix);
    const defaultColors = {
      primary: colors.blue,
      neutral: colors.grey,
      danger: colors.red,
      success: colors.green,
      warning: colors.yellow,
      common: {
        white: '#FFF',
        black: '#000'
      }
    };
    const getCssVarColor = cssVar => {
      var _defaultColors$color;
      const tokens = cssVar.split('-');
      const color = tokens[1];
      const index = tokens[2];

      // @ts-ignore
      return getCssVar(cssVar, (_defaultColors$color = defaultColors[color]) == null ? void 0 : _defaultColors$color[index]);
    };
    const createLightModeVariantVariables = color => ({
      plainColor: getCssVarColor(`palette-${color}-500`),
      plainHoverBg: getCssVarColor(`palette-${color}-100`),
      plainActiveBg: getCssVarColor(`palette-${color}-200`),
      plainDisabledColor: getCssVarColor(`palette-neutral-400`),
      outlinedColor: getCssVarColor(`palette-${color}-500`),
      outlinedBorder: getCssVarColor(`palette-${color}-300`),
      outlinedHoverBg: getCssVarColor(`palette-${color}-100`),
      outlinedActiveBg: getCssVarColor(`palette-${color}-200`),
      outlinedDisabledColor: getCssVarColor(`palette-neutral-400`),
      outlinedDisabledBorder: getCssVarColor(`palette-neutral-200`),
      softColor: getCssVarColor(`palette-${color}-700`),
      softBg: getCssVarColor(`palette-${color}-100`),
      softHoverBg: getCssVarColor(`palette-${color}-200`),
      softActiveColor: getCssVarColor(`palette-${color}-800`),
      softActiveBg: getCssVarColor(`palette-${color}-300`),
      softDisabledColor: getCssVarColor(`palette-neutral-400`),
      softDisabledBg: getCssVarColor(`palette-neutral-50`),
      solidColor: getCssVarColor(`palette-common-white`),
      solidBg: getCssVarColor(`palette-${color}-500`),
      solidHoverBg: getCssVarColor(`palette-${color}-600`),
      solidActiveBg: getCssVarColor(`palette-${color}-700`),
      solidDisabledColor: getCssVarColor(`palette-neutral-400`),
      solidDisabledBg: getCssVarColor(`palette-neutral-100`)
    });
    const createDarkModeVariantVariables = color => ({
      plainColor: getCssVarColor(`palette-${color}-300`),
      plainHoverBg: getCssVarColor(`palette-${color}-800`),
      plainActiveBg: getCssVarColor(`palette-${color}-700`),
      plainDisabledColor: getCssVarColor(`palette-neutral-500`),
      outlinedColor: getCssVarColor(`palette-${color}-200`),
      outlinedBorder: getCssVarColor(`palette-${color}-700`),
      outlinedHoverBg: getCssVarColor(`palette-${color}-800`),
      outlinedActiveBg: getCssVarColor(`palette-${color}-700`),
      outlinedDisabledColor: getCssVarColor(`palette-neutral-500`),
      outlinedDisabledBorder: getCssVarColor(`palette-neutral-800`),
      softColor: getCssVarColor(`palette-${color}-200`),
      softBg: getCssVarColor(`palette-${color}-800`),
      softHoverBg: getCssVarColor(`palette-${color}-700`),
      softActiveColor: getCssVarColor(`palette-${color}-100`),
      softActiveBg: getCssVarColor(`palette-${color}-600`),
      softDisabledColor: getCssVarColor(`palette-neutral-500`),
      softDisabledBg: getCssVarColor(`palette-neutral-800`),
      solidColor: getCssVarColor(`palette-common-white`),
      solidBg: getCssVarColor(`palette-${color}-500`),
      solidHoverBg: getCssVarColor(`palette-${color}-600`),
      solidActiveBg: getCssVarColor(`palette-${color}-700`),
      solidDisabledColor: getCssVarColor(`palette-neutral-500`),
      solidDisabledBg: getCssVarColor(`palette-neutral-800`)
    });
    const lightColorSystem = {
      palette: {
        mode: 'light',
        primary: _extends$1({}, defaultColors.primary, createLightModeVariantVariables('primary')),
        neutral: _extends$1({}, defaultColors.neutral, createLightModeVariantVariables('neutral'), {
          plainColor: getCssVarColor('palette-neutral-700'),
          plainHoverColor: getCssVarColor(`palette-neutral-900`),
          outlinedColor: getCssVarColor('palette-neutral-700')
        }),
        danger: _extends$1({}, defaultColors.danger, createLightModeVariantVariables('danger')),
        success: _extends$1({}, defaultColors.success, createLightModeVariantVariables('success')),
        warning: _extends$1({}, defaultColors.warning, createLightModeVariantVariables('warning')),
        common: {
          white: '#FFF',
          black: '#000'
        },
        text: {
          primary: getCssVarColor('palette-neutral-800'),
          secondary: getCssVarColor('palette-neutral-700'),
          tertiary: getCssVarColor('palette-neutral-600'),
          icon: getCssVarColor('palette-neutral-500')
        },
        background: {
          body: getCssVarColor('palette-common-white'),
          surface: getCssVarColor('palette-neutral-50'),
          popup: getCssVarColor('palette-common-white'),
          level1: getCssVarColor('palette-neutral-100'),
          level2: getCssVarColor('palette-neutral-200'),
          level3: getCssVarColor('palette-neutral-300'),
          tooltip: getCssVarColor('palette-neutral-500'),
          backdrop: `rgba(${getCssVar('palette-neutral-darkChannel', colorChannel(defaultColors.neutral[900]) // should be the same index as in `attachColorChannels`
        )} / 0.25)`
        },
        divider: `rgba(${getCssVar('palette-neutral-mainChannel', colorChannel(defaultColors.neutral[500]) // should be the same index as in `attachColorChannels`
      )} / 0.2)`,
        focusVisible: getCssVarColor('palette-primary-500')
      },
      shadowRing: '0 0 #000',
      shadowChannel: '21 21 21',
      shadowOpacity: '0.08'
    };
    const darkColorSystem = {
      palette: {
        mode: 'dark',
        primary: _extends$1({}, defaultColors.primary, createDarkModeVariantVariables('primary')),
        neutral: _extends$1({}, defaultColors.neutral, createDarkModeVariantVariables('neutral'), {
          plainColor: getCssVarColor('palette-neutral-300'),
          plainHoverColor: getCssVarColor(`palette-neutral-300`)
        }),
        danger: _extends$1({}, defaultColors.danger, createDarkModeVariantVariables('danger')),
        success: _extends$1({}, defaultColors.success, createDarkModeVariantVariables('success')),
        warning: _extends$1({}, defaultColors.warning, createDarkModeVariantVariables('warning')),
        common: {
          white: '#FFF',
          black: '#000'
        },
        text: {
          primary: getCssVarColor('palette-neutral-100'),
          secondary: getCssVarColor('palette-neutral-300'),
          tertiary: getCssVarColor('palette-neutral-400'),
          icon: getCssVarColor('palette-neutral-400')
        },
        background: {
          body: getCssVarColor('palette-common-black'),
          surface: getCssVarColor('palette-neutral-900'),
          popup: getCssVarColor('palette-common-black'),
          level1: getCssVarColor('palette-neutral-800'),
          level2: getCssVarColor('palette-neutral-700'),
          level3: getCssVarColor('palette-neutral-600'),
          tooltip: getCssVarColor('palette-neutral-600'),
          backdrop: `rgba(${getCssVar('palette-neutral-darkChannel', colorChannel(defaultColors.neutral[50]) // should be the same index as in `attachColorChannels`
        )} / 0.25)`
        },
        divider: `rgba(${getCssVar('palette-neutral-mainChannel', colorChannel(defaultColors.neutral[500]) // should be the same index as in `attachColorChannels`
      )} / 0.16)`,
        focusVisible: getCssVarColor('palette-primary-500')
      },
      shadowRing: '0 0 #000',
      shadowChannel: '0 0 0',
      shadowOpacity: '0.6'
    };
    const fontFamilyFallback = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    const fontFamily = _extends$1({
      body: `"Inter", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
      display: `"Inter", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
      code: 'Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
      fallback: fontFamilyFallback
    }, scalesInput.fontFamily);
    const fontWeight = _extends$1({
      sm: 300,
      // regular
      md: 500,
      // medium
      lg: 600,
      // semi-bold
      xl: 700
    }, scalesInput.fontWeight);
    const fontSize = _extends$1({
      xs: '0.75rem',
      // 12px
      sm: '0.875rem',
      // 14px
      md: '1rem',
      // 16px
      lg: '1.125rem',
      // 18px
      xl: '1.25rem',
      // 20px
      xl2: '1.5rem',
      // 24px
      xl3: '1.875rem',
      // 30px
      xl4: '2.25rem'
    }, scalesInput.fontSize);
    const lineHeight = _extends$1({
      xs: '1.33334',
      // largest font sizes: h1, h2
      sm: '1.42858',
      // normal font sizes
      md: '1.5',
      // normal font sizes
      lg: '1.55556',
      // large font sizes for components
      xl: '1.66667'
    }, scalesInput.lineHeight);
    const defaultShadowRing = (_scalesInput$colorSch = (_scalesInput$colorSch2 = scalesInput.colorSchemes) == null || (_scalesInput$colorSch2 = _scalesInput$colorSch2.light) == null ? void 0 : _scalesInput$colorSch2.shadowRing) != null ? _scalesInput$colorSch : lightColorSystem.shadowRing;
    const defaultShadowChannel = (_scalesInput$colorSch3 = (_scalesInput$colorSch4 = scalesInput.colorSchemes) == null || (_scalesInput$colorSch4 = _scalesInput$colorSch4.light) == null ? void 0 : _scalesInput$colorSch4.shadowChannel) != null ? _scalesInput$colorSch3 : lightColorSystem.shadowChannel;
    const defaultShadowOpacity = (_scalesInput$colorSch5 = (_scalesInput$colorSch6 = scalesInput.colorSchemes) == null || (_scalesInput$colorSch6 = _scalesInput$colorSch6.light) == null ? void 0 : _scalesInput$colorSch6.shadowOpacity) != null ? _scalesInput$colorSch5 : lightColorSystem.shadowOpacity;
    const defaultScales = {
      colorSchemes: {
        light: lightColorSystem,
        dark: darkColorSystem
      },
      fontSize,
      fontFamily,
      fontWeight,
      focus: {
        thickness: '2px',
        selector: `&.${generateUtilityClass$1('', 'focusVisible')}, &:focus-visible`,
        default: {
          outlineOffset: `var(--focus-outline-offset, ${getCssVar('focus-thickness', (_scalesInput$focus$th = (_scalesInput$focus = scalesInput.focus) == null ? void 0 : _scalesInput$focus.thickness) != null ? _scalesInput$focus$th : '2px')})`,
          outline: `${getCssVar('focus-thickness', (_scalesInput$focus$th2 = (_scalesInput$focus2 = scalesInput.focus) == null ? void 0 : _scalesInput$focus2.thickness) != null ? _scalesInput$focus$th2 : '2px')} solid ${getCssVar('palette-focusVisible', defaultColors.primary[500])}`
        }
      },
      lineHeight,
      radius: {
        xs: '2px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px'
      },
      shadow: {
        xs: `${getCssVar('shadowRing', defaultShadowRing)}, 0px 1px 2px 0px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)})`,
        sm: `${getCssVar('shadowRing', defaultShadowRing)}, 0px 1px 2px 0px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)}), 0px 2px 4px 0px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)})`,
        md: `${getCssVar('shadowRing', defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)}), 0px 6px 12px -2px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)})`,
        lg: `${getCssVar('shadowRing', defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)}), 0px 12px 16px -4px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)})`,
        xl: `${getCssVar('shadowRing', defaultShadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)}), 0px 20px 24px -4px rgba(${getCssVar('shadowChannel', defaultShadowChannel)} / ${getCssVar('shadowOpacity', defaultShadowOpacity)})`
      },
      zIndex: {
        badge: 1,
        table: 10,
        popup: 1000,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
      },
      typography: {
        h1: {
          fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
          fontWeight: getCssVar(`fontWeight-xl, ${fontWeight.xl}`),
          fontSize: getCssVar(`fontSize-xl4, ${fontSize.xl4}`),
          lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
          letterSpacing: '-0.025em',
          color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
        },
        h2: {
          fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
          fontWeight: getCssVar(`fontWeight-xl, ${fontWeight.xl}`),
          fontSize: getCssVar(`fontSize-xl3, ${fontSize.xl3}`),
          lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
          letterSpacing: '-0.025em',
          color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
        },
        h3: {
          fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
          fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
          fontSize: getCssVar(`fontSize-xl2, ${fontSize.xl2}`),
          lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
          letterSpacing: '-0.025em',
          color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
        },
        h4: {
          fontFamily: getCssVar(`fontFamily-display, ${fontFamily.display}`),
          fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
          fontSize: getCssVar(`fontSize-xl, ${fontSize.xl}`),
          lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
          letterSpacing: '-0.025em',
          color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
        },
        'title-lg': {
          fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
          fontWeight: getCssVar(`fontWeight-lg, ${fontWeight.lg}`),
          fontSize: getCssVar(`fontSize-lg, ${fontSize.lg}`),
          lineHeight: getCssVar(`lineHeight-xs, ${lineHeight.xs}`),
          color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
        },
        'title-md': {
          fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
          fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
          fontSize: getCssVar(`fontSize-md, ${fontSize.md}`),
          lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
          color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
        },
        'title-sm': {
          fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
          fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
          fontSize: getCssVar(`fontSize-sm, ${fontSize.sm}`),
          lineHeight: getCssVar(`lineHeight-sm, ${lineHeight.sm}`),
          color: getCssVar(`palette-text-primary, ${lightColorSystem.palette.text.primary}`)
        },
        'body-lg': {
          fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
          fontSize: getCssVar(`fontSize-lg, ${fontSize.lg}`),
          lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
          color: getCssVar(`palette-text-secondary, ${lightColorSystem.palette.text.secondary}`)
        },
        'body-md': {
          fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
          fontSize: getCssVar(`fontSize-md, ${fontSize.md}`),
          lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
          color: getCssVar(`palette-text-secondary, ${lightColorSystem.palette.text.secondary}`)
        },
        'body-sm': {
          fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
          fontSize: getCssVar(`fontSize-sm, ${fontSize.sm}`),
          lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
          color: getCssVar(`palette-text-tertiary, ${lightColorSystem.palette.text.tertiary}`)
        },
        'body-xs': {
          fontFamily: getCssVar(`fontFamily-body, ${fontFamily.body}`),
          fontWeight: getCssVar(`fontWeight-md, ${fontWeight.md}`),
          fontSize: getCssVar(`fontSize-xs, ${fontSize.xs}`),
          lineHeight: getCssVar(`lineHeight-md, ${lineHeight.md}`),
          color: getCssVar(`palette-text-tertiary, ${lightColorSystem.palette.text.tertiary}`)
        }
      }
    };
    const _ref2 = scalesInput ? deepmerge$1(defaultScales, scalesInput) : defaultScales,
      {
        colorSchemes
      } = _ref2,
      mergedScales = _objectWithoutPropertiesLoose$1(_ref2, _excluded2$6);
    const theme = _extends$1({
      colorSchemes
    }, mergedScales, {
      breakpoints: createBreakpoints(breakpoints != null ? breakpoints : {}),
      components: deepmerge$1({
        // TODO: find a way to abstract SvgIcon out of @mui/material
        MuiSvgIcon: {
          defaultProps: {
            fontSize: 'xl2'
          },
          styleOverrides: {
            root: ({
              ownerState,
              theme: themeProp
            }) => {
              var _themeProp$vars$palet;
              const instanceFontSize = ownerState.instanceFontSize;
              return _extends$1({
                margin: 'var(--Icon-margin)'
              }, ownerState.fontSize && ownerState.fontSize !== 'inherit' && {
                fontSize: `var(--Icon-fontSize, ${themeProp.vars.fontSize[ownerState.fontSize]})`
              }, !ownerState.htmlColor && _extends$1({
                color: `var(--Icon-color, ${theme.vars.palette.text.icon})`
              }, ownerState.color && ownerState.color !== 'inherit' && themeProp.vars.palette[ownerState.color] && {
                color: `rgba(${(_themeProp$vars$palet = themeProp.vars.palette[ownerState.color]) == null ? void 0 : _themeProp$vars$palet.mainChannel} / 1)`
              }), instanceFontSize && instanceFontSize !== 'inherit' && {
                '--Icon-fontSize': themeProp.vars.fontSize[instanceFontSize]
              });
            }
          }
        }
      }, componentsInput),
      cssVarPrefix,
      getCssVar,
      spacing: createSpacing(spacing)
    }); // Need type casting due to module augmentation inside the repo

    /**
     Color channels generation
    */
    function attachColorChannels(supportedColorScheme, palette) {
      Object.keys(palette).forEach(key => {
        const channelMapping = {
          main: '500',
          light: '200',
          dark: '700'
        };
        if (supportedColorScheme === 'dark') {
          // @ts-ignore internal
          channelMapping.main = 400;
        }
        if (!palette[key].mainChannel && palette[key][channelMapping.main]) {
          palette[key].mainChannel = colorChannel(palette[key][channelMapping.main]);
        }
        if (!palette[key].lightChannel && palette[key][channelMapping.light]) {
          palette[key].lightChannel = colorChannel(palette[key][channelMapping.light]);
        }
        if (!palette[key].darkChannel && palette[key][channelMapping.dark]) {
          palette[key].darkChannel = colorChannel(palette[key][channelMapping.dark]);
        }
      });
    }
    // Set the channels
    Object.entries(theme.colorSchemes).forEach(([supportedColorScheme, colorSystem]) => {
      attachColorChannels(supportedColorScheme, colorSystem.palette);
    });

    // ===============================================================
    // Create `theme.vars` that contain `var(--*)` as values
    // ===============================================================
    const parserConfig = {
      prefix: cssVarPrefix,
      shouldSkipGeneratingVar: shouldSkipGeneratingVar$1
    };
    const {
      vars: themeVars,
      generateCssVars
    } = prepareCssVars( // @ts-ignore property truDark is missing from colorSchemes
    _extends$1({
      colorSchemes
    }, mergedScales), parserConfig);
    theme.vars = themeVars;
    theme.generateCssVars = generateCssVars;
    theme.unstable_sxConfig = _extends$1({}, sxConfig, void 0 );
    theme.unstable_sx = function sx(props) {
      return styleFunctionSx$1({
        sx: props,
        theme: this
      });
    };
    theme.getColorSchemeSelector = colorScheme => colorScheme === 'light' ? '&' : `&[data-joy-color-scheme="${colorScheme}"], [data-joy-color-scheme="${colorScheme}"] &`;
    const createVariantInput = {
      getCssVar,
      palette: theme.colorSchemes.light.palette
    };
    theme.variants = deepmerge$1({
      plain: createVariant('plain', createVariantInput),
      plainHover: createVariant('plainHover', createVariantInput),
      plainActive: createVariant('plainActive', createVariantInput),
      plainDisabled: createVariant('plainDisabled', createVariantInput),
      outlined: createVariant('outlined', createVariantInput),
      outlinedHover: createVariant('outlinedHover', createVariantInput),
      outlinedActive: createVariant('outlinedActive', createVariantInput),
      outlinedDisabled: createVariant('outlinedDisabled', createVariantInput),
      soft: createVariant('soft', createVariantInput),
      softHover: createVariant('softHover', createVariantInput),
      softActive: createVariant('softActive', createVariantInput),
      softDisabled: createVariant('softDisabled', createVariantInput),
      solid: createVariant('solid', createVariantInput),
      solidHover: createVariant('solidHover', createVariantInput),
      solidActive: createVariant('solidActive', createVariantInput),
      solidDisabled: createVariant('solidDisabled', createVariantInput)
    }, variantsInput);
    theme.palette = _extends$1({}, theme.colorSchemes.light.palette, {
      colorScheme: 'light'
    });
    theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar$1;
    theme.applyStyles = applyStyles$2;
    return theme;
  }

  const defaultTheme$2 = extendTheme();

  const styled$1 = createStyled$2({
    defaultTheme: defaultTheme$2,
    themeId: THEME_ID$1
  });

  function useThemeProps({
    props,
    name
  }) {
    return useThemeProps$1({
      props,
      name,
      defaultTheme: _extends$1({}, defaultTheme$2, {
        components: {}
      }),
      themeId: THEME_ID$1
    });
  }

  const _excluded$L = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"],
    _excluded2$5 = ["component", "slots", "slotProps"],
    _excluded3$1 = ["component"];
  /**
   * An internal function to create a Joy UI slot.
   *
   * This is an advanced version of Base UI `useSlotProps` because Joy UI allows leaf component to be customized via `component` prop
   * while Base UI does not need to support leaf component customization.
   *
   * @param {string} name: name of the slot
   * @param {object} parameters
   * @returns {[Slot, slotProps]} The slot's React component and the slot's props
   *
   * Note: the returned slot's props
   * - will never contain `component` prop.
   * - might contain `as` prop.
   */
  function useSlot(
  /**
   * The slot's name. All Joy UI components should have `root` slot.
   *
   * If the name is `root`, the logic behaves differently from other slots,
   * e.g. the `externalForwardedProps` are spread to `root` slot but not other slots.
   */
  name, parameters) {
    const {
        className,
        elementType: initialElementType,
        ownerState,
        externalForwardedProps,
        getSlotOwnerState,
        internalForwardedProps
      } = parameters,
      useSlotPropsParams = _objectWithoutPropertiesLoose$1(parameters, _excluded$L);
    const {
        component: rootComponent,
        slots = {
          [name]: undefined
        },
        slotProps = {
          [name]: undefined
        }
      } = externalForwardedProps,
      other = _objectWithoutPropertiesLoose$1(externalForwardedProps, _excluded2$5);
    const elementType = slots[name] || initialElementType;

    // `slotProps[name]` can be a callback that receives the component's ownerState.
    // `resolvedComponentsProps` is always a plain object.
    const resolvedComponentsProps = resolveComponentProps(slotProps[name], ownerState);
    const _mergeSlotProps = mergeSlotProps(_extends$1({
        className
      }, useSlotPropsParams, {
        externalForwardedProps: name === 'root' ? other : undefined,
        externalSlotProps: resolvedComponentsProps
      })),
      {
        props: {
          component: slotComponent
        },
        internalRef
      } = _mergeSlotProps,
      mergedProps = _objectWithoutPropertiesLoose$1(_mergeSlotProps.props, _excluded3$1);
    const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, parameters.ref);
    const slotOwnerState = getSlotOwnerState ? getSlotOwnerState(mergedProps) : {};
    const finalOwnerState = _extends$1({}, ownerState, slotOwnerState);
    const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
    const props = appendOwnerState(elementType, _extends$1({}, name === 'root' && !rootComponent && !slots[name] && internalForwardedProps, name !== 'root' && !slots[name] && internalForwardedProps, mergedProps, LeafComponent && {
      as: LeafComponent
    }, {
      ref
    }), finalOwnerState);
    Object.keys(slotOwnerState).forEach(propName => {
      delete props[propName];
    });
    return [elementType, props];
  }

  function getSliderUtilityClass(slot) {
    return generateUtilityClass$1('MuiSlider', slot);
  }
  const sliderClasses = generateUtilityClasses$1('MuiSlider', ['root', 'disabled', 'dragging', 'focusVisible', 'marked', 'vertical', 'trackInverted', 'trackFalse', 'rail', 'track', 'mark', 'markActive', 'markLabel', 'thumb', 'thumbStart', 'thumbEnd', 'valueLabel', 'valueLabelOpen', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid', 'disabled', 'sizeSm', 'sizeMd', 'sizeLg', 'input']);

  const _excluded$K = ["aria-label", "aria-valuetext", "className", "classes", "disableSwap", "disabled", "defaultValue", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "shiftStep", "scale", "step", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "color", "size", "variant", "component", "slots", "slotProps"];
  // @ts-ignore
  function Identity(x) {
    return x;
  }
  const useUtilityClasses$s = ownerState => {
    const {
      disabled,
      dragging,
      marked,
      orientation,
      track,
      variant,
      color,
      size
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', dragging && 'dragging', marked && 'marked', orientation === 'vertical' && 'vertical', track === 'inverted' && 'trackInverted', track === false && 'trackFalse', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`],
      rail: ['rail'],
      track: ['track'],
      thumb: ['thumb', disabled && 'disabled'],
      input: ['input'],
      mark: ['mark'],
      markActive: ['markActive'],
      markLabel: ['markLabel'],
      markLabelActive: ['markLabelActive'],
      valueLabel: ['valueLabel'],
      valueLabelOpen: ['valueLabelOpen'],
      active: ['active'],
      focusVisible: ['focusVisible']
    };
    return composeClasses(slots, getSliderUtilityClass, {});
  };
  const sliderColorVariables = ({
    theme,
    ownerState
  }) => (data = {}) => {
    var _theme$variants, _styles$VariantBor;
    const styles = ((_theme$variants = theme.variants[`${ownerState.variant}${data.state || ''}`]) == null ? void 0 : _theme$variants[ownerState.color]) || {};
    return _extends$1({}, !data.state && {
      '--variant-borderWidth': (_styles$VariantBor = styles['--variant-borderWidth']) != null ? _styles$VariantBor : '0px'
    }, {
      '--Slider-trackColor': styles.color,
      '--Slider-thumbBackground': styles.color,
      '--Slider-thumbColor': styles.backgroundColor || theme.vars.palette.background.surface,
      '--Slider-trackBackground': styles.backgroundColor || theme.vars.palette.background.surface,
      '--Slider-trackBorderColor': styles.borderColor,
      '--Slider-railBackground': theme.vars.palette.background.level2
    });
  };
  const SliderRoot = styled$1('span', {
    name: 'JoySlider',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme,
    ownerState
  }) => {
    const getColorVariables = sliderColorVariables({
      theme,
      ownerState
    });
    return [_extends$1({
      '--Slider-size': 'max(42px, max(var(--Slider-thumbSize), var(--Slider-trackSize)))',
      // Reach 42px touch target, about ~8mm on screen.
      '--Slider-trackRadius': 'var(--Slider-size)',
      '--Slider-markBackground': theme.vars.palette.text.tertiary,
      [`& .${sliderClasses.markActive}`]: {
        '--Slider-markBackground': 'var(--Slider-trackColor)'
      }
    }, ownerState.size === 'sm' && {
      '--Slider-markSize': '2px',
      '--Slider-trackSize': '4px',
      '--Slider-thumbSize': '14px',
      '--Slider-valueLabelArrowSize': '6px'
    }, ownerState.size === 'md' && {
      '--Slider-markSize': '2px',
      '--Slider-trackSize': '6px',
      '--Slider-thumbSize': '18px',
      '--Slider-valueLabelArrowSize': '8px'
    }, ownerState.size === 'lg' && {
      '--Slider-markSize': '3px',
      '--Slider-trackSize': '8px',
      '--Slider-thumbSize': '24px',
      '--Slider-valueLabelArrowSize': '10px'
    }, {
      '--Slider-thumbRadius': 'calc(var(--Slider-thumbSize) / 2)',
      '--Slider-thumbWidth': 'var(--Slider-thumbSize)'
    }, getColorVariables(), {
      '&:hover': {
        '@media (hover: hover)': _extends$1({}, getColorVariables({
          state: 'Hover'
        }))
      },
      '&:active': _extends$1({}, getColorVariables({
        state: 'Active'
      })),
      [`&.${sliderClasses.disabled}`]: _extends$1({
        pointerEvents: 'none',
        color: theme.vars.palette.text.tertiary
      }, getColorVariables({
        state: 'Disabled'
      })),
      boxSizing: 'border-box',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      touchAction: 'none',
      WebkitTapHighlightColor: 'transparent'
    }, ownerState.orientation === 'horizontal' && {
      padding: 'calc(var(--Slider-size) / 2) 0',
      width: '100%'
    }, ownerState.orientation === 'vertical' && {
      padding: '0 calc(var(--Slider-size) / 2)',
      height: '100%'
    }, {
      '@media print': {
        colorAdjust: 'exact'
      }
    })];
  });
  const SliderRail = styled$1('span', {
    name: 'JoySlider',
    slot: 'Rail',
    overridesResolver: (props, styles) => styles.rail
  })(({
    ownerState
  }) => [_extends$1({
    display: 'block',
    position: 'absolute',
    backgroundColor: ownerState.track === 'inverted' ? 'var(--Slider-trackBackground)' : 'var(--Slider-railBackground)',
    border: ownerState.track === 'inverted' ? 'var(--variant-borderWidth, 0px) solid var(--Slider-trackBorderColor)' : 'initial',
    borderRadius: 'var(--Slider-trackRadius)'
  }, ownerState.orientation === 'horizontal' && {
    height: 'var(--Slider-trackSize)',
    top: '50%',
    left: 0,
    right: 0,
    transform: 'translateY(-50%)'
  }, ownerState.orientation === 'vertical' && {
    width: 'var(--Slider-trackSize)',
    top: 0,
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)'
  }, ownerState.track === 'inverted' && {
    opacity: 1
  })]);
  const SliderTrack = styled$1('span', {
    name: 'JoySlider',
    slot: 'Track',
    overridesResolver: (props, styles) => styles.track
  })(({
    ownerState
  }) => {
    return [_extends$1({
      display: 'block',
      position: 'absolute',
      color: 'var(--Slider-trackColor)',
      border: ownerState.track === 'inverted' ? 'initial' : 'var(--variant-borderWidth, 0px) solid var(--Slider-trackBorderColor)',
      backgroundColor: ownerState.track === 'inverted' ? 'var(--Slider-railBackground)' : 'var(--Slider-trackBackground)'
    }, ownerState.orientation === 'horizontal' && {
      height: 'var(--Slider-trackSize)',
      top: '50%',
      transform: 'translateY(-50%)',
      borderRadius: 'var(--Slider-trackRadius) 0 0 var(--Slider-trackRadius)'
    }, ownerState.orientation === 'vertical' && {
      width: 'var(--Slider-trackSize)',
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '0 0 var(--Slider-trackRadius) var(--Slider-trackRadius)'
    }, ownerState.track === false && {
      display: 'none'
    })];
  });
  const SliderThumb = styled$1('span', {
    name: 'JoySlider',
    slot: 'Thumb',
    overridesResolver: (props, styles) => styles.thumb
  })(({
    ownerState,
    theme
  }) => {
    var _theme$vars$palette;
    return _extends$1({
      position: 'absolute',
      boxSizing: 'border-box',
      outline: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'var(--Slider-thumbWidth)',
      height: 'var(--Slider-thumbSize)',
      border: 'var(--variant-borderWidth, 0px) solid var(--Slider-trackBorderColor)',
      borderRadius: 'var(--Slider-thumbRadius)',
      boxShadow: 'var(--Slider-thumbShadow)',
      color: 'var(--Slider-thumbColor)',
      backgroundColor: 'var(--Slider-thumbBackground)',
      [theme.focus.selector]: _extends$1({}, theme.focus.default, {
        outlineOffset: 0,
        outlineWidth: 'max(4px, var(--Slider-thumbSize) / 3.6)',
        outlineColor: `rgba(${(_theme$vars$palette = theme.vars.palette) == null || (_theme$vars$palette = _theme$vars$palette[ownerState.color]) == null ? void 0 : _theme$vars$palette.mainChannel} / 0.32)`
      })
    }, ownerState.orientation === 'horizontal' && {
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }, ownerState.orientation === 'vertical' && {
      left: '50%',
      transform: 'translate(-50%, 50%)'
    }, {
      '&::before': {
        // use pseudo element to create thumb's ring
        boxSizing: 'border-box',
        content: '""',
        display: 'block',
        position: 'absolute',
        background: 'transparent',
        // to not block the thumb's child
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: '2px solid',
        borderColor: 'var(--Slider-thumbColor)',
        borderRadius: 'inherit'
      }
    });
  });
  const SliderMark = styled$1('span', {
    name: 'JoySlider',
    slot: 'Mark',
    overridesResolver: (props, styles) => styles.mark
  })(({
    ownerState
  }) => {
    return _extends$1({
      position: 'absolute',
      width: 'var(--Slider-markSize)',
      height: 'var(--Slider-markSize)',
      borderRadius: 'var(--Slider-markSize)',
      backgroundColor: 'var(--Slider-markBackground)'
    }, ownerState.orientation === 'horizontal' && _extends$1({
      top: '50%',
      transform: `translate(calc(var(--Slider-markSize) / -2), -50%)`
    }, ownerState.percent === 0 && {
      transform: `translate(min(var(--Slider-markSize), 3px), -50%)`
    }, ownerState.percent === 100 && {
      transform: `translate(calc(var(--Slider-markSize) * -1 - min(var(--Slider-markSize), 3px)), -50%)`
    }), ownerState.orientation === 'vertical' && _extends$1({
      left: '50%',
      transform: 'translate(-50%, calc(var(--Slider-markSize) / 2))'
    }, ownerState.percent === 0 && {
      transform: `translate(-50%, calc(min(var(--Slider-markSize), 3px) * -1))`
    }, ownerState.percent === 100 && {
      transform: `translate(-50%, calc(var(--Slider-markSize) * 1 + min(var(--Slider-markSize), 3px)))`
    }));
  });
  const SliderValueLabel = styled$1('span', {
    name: 'JoySlider',
    slot: 'ValueLabel',
    overridesResolver: (props, styles) => styles.valueLabel
  })(({
    theme,
    ownerState
  }) => _extends$1({}, ownerState.size === 'sm' && {
    fontSize: theme.fontSize.xs,
    lineHeight: theme.lineHeight.md,
    paddingInline: '0.25rem',
    minWidth: '20px'
  }, ownerState.size === 'md' && {
    fontSize: theme.fontSize.sm,
    lineHeight: theme.lineHeight.md,
    paddingInline: '0.375rem',
    minWidth: '24px'
  }, ownerState.size === 'lg' && {
    fontSize: theme.fontSize.md,
    lineHeight: theme.lineHeight.md,
    paddingInline: '0.5rem',
    minWidth: '28px'
  }, {
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    fontFamily: theme.vars.fontFamily.body,
    fontWeight: theme.vars.fontWeight.md,
    bottom: 0,
    transformOrigin: 'bottom center',
    transform: 'translateY(calc((var(--Slider-thumbSize) + var(--Slider-valueLabelArrowSize)) * -1)) scale(0)',
    position: 'absolute',
    backgroundColor: theme.vars.palette.background.tooltip,
    boxShadow: theme.shadow.sm,
    borderRadius: theme.vars.radius.xs,
    color: '#fff',
    '&::before': {
      display: 'var(--Slider-valueLabelArrowDisplay)',
      position: 'absolute',
      content: '""',
      color: theme.vars.palette.background.tooltip,
      bottom: 0,
      border: 'calc(var(--Slider-valueLabelArrowSize) / 2) solid',
      borderColor: 'currentColor',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      left: '50%',
      transform: 'translate(-50%, 100%)',
      backgroundColor: 'transparent'
    },
    [`&.${sliderClasses.valueLabelOpen}`]: {
      transform: 'translateY(calc((var(--Slider-thumbSize) + var(--Slider-valueLabelArrowSize)) * -1)) scale(1)'
    }
  }));
  const SliderMarkLabel = styled$1('span', {
    name: 'JoySlider',
    slot: 'MarkLabel',
    overridesResolver: (props, styles) => styles.markLabel
  })(({
    theme,
    ownerState
  }) => _extends$1({
    fontFamily: theme.vars.fontFamily.body
  }, ownerState.size === 'sm' && {
    fontSize: theme.vars.fontSize.xs
  }, ownerState.size === 'md' && {
    fontSize: theme.vars.fontSize.sm
  }, ownerState.size === 'lg' && {
    fontSize: theme.vars.fontSize.md
  }, {
    color: theme.palette.text.tertiary,
    position: 'absolute',
    whiteSpace: 'nowrap'
  }, ownerState.orientation === 'horizontal' && {
    top: 'calc(50% + 4px + (max(var(--Slider-trackSize), var(--Slider-thumbSize)) / 2))',
    transform: 'translateX(-50%)'
  }, ownerState.orientation === 'vertical' && {
    left: 'calc(50% + 8px + (max(var(--Slider-trackSize), var(--Slider-thumbSize)) / 2))',
    transform: 'translateY(50%)'
  }));
  const SliderInput = styled$1('input', {
    name: 'JoySlider',
    slot: 'Input',
    overridesResolver: (props, styles) => styles.input
  })({});
  /**
   *
   * Demos:
   *
   * - [Slider](https://mui.com/joy-ui/react-slider/)
   *
   * API:
   *
   * - [Slider API](https://mui.com/joy-ui/api/slider/)
   */
  const Slider$1 = /*#__PURE__*/React__namespace.forwardRef(function Slider(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoySlider'
    });
    const {
        'aria-label': ariaLabel,
        'aria-valuetext': ariaValuetext,
        className,
        classes: classesProp,
        disableSwap = false,
        disabled = false,
        defaultValue,
        getAriaLabel,
        getAriaValueText,
        marks: marksProp = false,
        max = 100,
        min = 0,
        orientation = 'horizontal',
        shiftStep = 10,
        scale = Identity,
        step = 1,
        track = 'normal',
        valueLabelDisplay = 'off',
        valueLabelFormat = Identity,
        isRtl = false,
        color = 'primary',
        size = 'md',
        variant = 'solid',
        component,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$K);
    const ownerState = _extends$1({}, props, {
      marks: marksProp,
      classes: classesProp,
      disabled,
      defaultValue,
      disableSwap,
      isRtl,
      max,
      min,
      orientation,
      shiftStep,
      scale,
      step,
      track,
      valueLabelDisplay,
      valueLabelFormat,
      color,
      size,
      variant
    });
    const {
      axisProps,
      getRootProps,
      getHiddenInputProps,
      getThumbProps,
      open,
      active,
      axis,
      focusedThumbIndex,
      range,
      dragging,
      marks,
      values,
      trackOffset,
      trackLeap,
      getThumbStyle
    } = useSlider(_extends$1({}, ownerState, {
      rootRef: ref
    }));
    ownerState.marked = marks.length > 0 && marks.some(mark => mark.label);
    ownerState.dragging = dragging;
    const trackStyle = _extends$1({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap));
    const classes = useUtilityClasses$s(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: SliderRoot,
      externalForwardedProps,
      getSlotProps: getRootProps,
      ownerState
    });
    const [SlotRail, railProps] = useSlot('rail', {
      className: classes.rail,
      elementType: SliderRail,
      externalForwardedProps,
      ownerState
    });
    const [SlotTrack, trackProps] = useSlot('track', {
      additionalProps: {
        style: trackStyle
      },
      className: classes.track,
      elementType: SliderTrack,
      externalForwardedProps,
      ownerState
    });
    const [SlotMark, markProps] = useSlot('mark', {
      className: classes.mark,
      elementType: SliderMark,
      externalForwardedProps,
      ownerState
    });
    const [SlotMarkLabel, markLabelProps] = useSlot('markLabel', {
      className: classes.markLabel,
      elementType: SliderMarkLabel,
      externalForwardedProps,
      ownerState,
      additionalProps: {
        'aria-hidden': true
      }
    });
    const [SlotThumb, thumbProps] = useSlot('thumb', {
      className: classes.thumb,
      elementType: SliderThumb,
      externalForwardedProps,
      getSlotProps: getThumbProps,
      ownerState
    });
    const [SlotInput, inputProps] = useSlot('input', {
      className: classes.input,
      elementType: SliderInput,
      externalForwardedProps,
      getSlotProps: getHiddenInputProps,
      ownerState
    });
    const [SlotValueLabel, valueLabelProps] = useSlot('valueLabel', {
      className: classes.valueLabel,
      elementType: SliderValueLabel,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
      children: [/*#__PURE__*/require$$2$1.jsx(SlotRail, _extends$1({}, railProps)), /*#__PURE__*/require$$2$1.jsx(SlotTrack, _extends$1({}, trackProps)), marks.filter(mark => mark.value >= min && mark.value <= max).map((mark, index) => {
        const percent = valueToPercent(mark.value, min, max);
        const style = axisProps[axis].offset(percent);
        let markActive;
        if (track === false) {
          markActive = values.indexOf(mark.value) !== -1;
        } else {
          markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
        }
        return /*#__PURE__*/require$$2$1.jsxs(React__namespace.Fragment, {
          children: [/*#__PURE__*/require$$2$1.jsx(SlotMark, _extends$1({
            "data-index": index
          }, markProps, !isHostComponent(SlotMark) && {
            ownerState: _extends$1({}, markProps.ownerState, {
              percent
            })
          }, {
            style: _extends$1({}, style, markProps.style),
            className: clsx(markProps.className, markActive && classes.markActive)
          })), mark.label != null ? /*#__PURE__*/require$$2$1.jsx(SlotMarkLabel, _extends$1({
            "data-index": index
          }, markLabelProps, {
            style: _extends$1({}, style, markLabelProps.style),
            className: clsx(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
            children: mark.label
          })) : null]
        }, mark.value);
      }), values.map((value, index) => {
        const percent = valueToPercent(value, min, max);
        const style = axisProps[axis].offset(percent);
        return /*#__PURE__*/require$$2$1.jsxs(SlotThumb, _extends$1({
          "data-index": index
        }, thumbProps, {
          className: clsx(thumbProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
          style: _extends$1({}, style, getThumbStyle(index), thumbProps.style),
          children: [/*#__PURE__*/require$$2$1.jsx(SlotInput, _extends$1({
            "data-index": index,
            "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
            "aria-valuenow": scale(value),
            "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
            value: values[index]
          }, inputProps)), valueLabelDisplay !== 'off' ? /*#__PURE__*/require$$2$1.jsx(SlotValueLabel, _extends$1({}, valueLabelProps, {
            className: clsx(valueLabelProps.className, (open === index || active === index || valueLabelDisplay === 'on') && classes.valueLabelOpen),
            children: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat
          })) : null]
        }), index);
      })]
    }));
  });

  var _excluded$J = ["name", "value", "designMode", "onChange", "sx", "_userProps"];
  function Slider(props) {
    var name = props.name,
      value = props.value;
      props.designMode;
      var onChange = props.onChange,
      sx = props.sx;
      props._userProps;
      var eProps = _objectWithoutProperties$1(props, _excluded$J);
    var _useState = React.useState(value),
      _useState2 = _slicedToArray$1(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];
    var _onChange = function _onChange(_e, value) {
      setVal(val);
    };
    var _onCommit = function _onCommit(_e, value) {
      setVal(value);
      onChange(value);
    };
    var wh = {
      width: 'inherit',
      height: 'inherit'
    };
    var istyle = sx != null ? _objectSpread2$2(_objectSpread2$2({}, sx), wh) : wh;
    var ePropsL = _objectSpread2$2({
      size: 'md',
      color: 'primary',
      variant: 'solid',
      marks: false,
      track: 'normal',
      disabled: false,
      orientation: 'horizontal',
      valueLabelDisplay: 'on'
    }, eProps);
    if (ePropsL['aria-label'] == null) {
      ePropsL['aria-label'] = name;
    }
    return /*#__PURE__*/require$$2$1.jsx(Slider$1, _objectSpread2$2(_objectSpread2$2({
      sx: istyle,
      value: val
    }, ePropsL), {}, {
      onChange: function onChange(event, value) {
        return _onChange();
      },
      onChangeCommitted: function onChangeCommitted(event, value) {
        return _onCommit(event, value);
      }
    }));
  }

  function getInputUtilityClass(slot) {
    return generateUtilityClass$1('MuiInput', slot);
  }
  const inputClasses = generateUtilityClasses$1('MuiInput', ['root', 'input', 'formControl', 'focused', 'disabled', 'error', 'adornedStart', 'adornedEnd', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'sizeSm', 'sizeMd', 'sizeLg', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid', 'fullWidth', 'startDecorator', 'endDecorator']);

  /**
   * @ignore - internal component.
   */
  const FormControlContext$1 = /*#__PURE__*/React__namespace.createContext(undefined);

  const GLOBAL_CLASS_PREFIX = 'base';
  function buildStateClass(state) {
    return `${GLOBAL_CLASS_PREFIX}--${state}`;
  }
  function buildSlotClass(componentName, slot) {
    return `${GLOBAL_CLASS_PREFIX}-${componentName}-${slot}`;
  }
  function generateUtilityClass(componentName, slot) {
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? buildStateClass(globalStateClass) : buildSlotClass(componentName, slot);
  }

  function generateUtilityClasses(componentName, slots) {
    const result = {};
    slots.forEach(slot => {
      result[slot] = generateUtilityClass(componentName, slot);
    });
    return result;
  }

  /**
   *
   * Demos:
   *
   * - [Form Control](https://mui.com/base-ui/react-form-control/#hook)
   *
   * API:
   *
   * - [useFormControlContext API](https://mui.com/base-ui/react-form-control/hooks-api/#use-form-control-context)
   */
  function useFormControlContext() {
    return React__namespace.useContext(FormControlContext$1);
  }

  /**
   *
   * Demos:
   *
   * - [Input](https://mui.com/base-ui/react-input/#hook)
   *
   * API:
   *
   * - [useInput API](https://mui.com/base-ui/react-input/hooks-api/#use-input)
   */
  function useInput(parameters = {}) {
    const {
      defaultValue: defaultValueProp,
      disabled: disabledProp = false,
      error: errorProp = false,
      onBlur,
      onChange,
      onFocus,
      required: requiredProp = false,
      value: valueProp,
      inputRef: inputRefProp
    } = parameters;
    const formControlContext = useFormControlContext();
    let defaultValue;
    let disabled;
    let error;
    let required;
    let value;
    if (formControlContext) {
      var _formControlContext$d, _formControlContext$e, _formControlContext$r;
      defaultValue = undefined;
      disabled = (_formControlContext$d = formControlContext.disabled) != null ? _formControlContext$d : false;
      error = (_formControlContext$e = formControlContext.error) != null ? _formControlContext$e : false;
      required = (_formControlContext$r = formControlContext.required) != null ? _formControlContext$r : false;
      value = formControlContext.value;
    } else {
      defaultValue = defaultValueProp;
      disabled = disabledProp;
      error = errorProp;
      required = requiredProp;
      value = valueProp;
    }
    const {
      current: isControlled
    } = React__namespace.useRef(value != null);
    const handleInputRefWarning = React__namespace.useCallback(instance => {
    }, []);
    const inputRef = React__namespace.useRef(null);
    const handleInputRef = useForkRef(inputRef, inputRefProp, handleInputRefWarning);
    const [focused, setFocused] = React__namespace.useState(false);

    // The blur won't fire when the disabled state is set on a focused input.
    // We need to book keep the focused state manually.
    React__namespace.useEffect(() => {
      if (!formControlContext && disabled && focused) {
        setFocused(false);

        // @ts-ignore
        onBlur == null || onBlur();
      }
    }, [formControlContext, disabled, focused, onBlur]);
    const handleFocus = otherHandlers => event => {
      var _otherHandlers$onFocu;
      // Fix a bug with IE11 where the focus/blur events are triggered
      // while the component is disabled.
      if (formControlContext != null && formControlContext.disabled) {
        event.stopPropagation();
        return;
      }
      (_otherHandlers$onFocu = otherHandlers.onFocus) == null || _otherHandlers$onFocu.call(otherHandlers, event);
      if (formControlContext && formControlContext.onFocus) {
        var _formControlContext$o;
        formControlContext == null || (_formControlContext$o = formControlContext.onFocus) == null || _formControlContext$o.call(formControlContext);
      } else {
        setFocused(true);
      }
    };
    const handleBlur = otherHandlers => event => {
      var _otherHandlers$onBlur;
      (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
      if (formControlContext && formControlContext.onBlur) {
        formControlContext.onBlur();
      } else {
        setFocused(false);
      }
    };
    const handleChange = otherHandlers => (event, ...args) => {
      var _formControlContext$o2, _otherHandlers$onChan;
      if (!isControlled) {
        const element = event.target || inputRef.current;
        if (element == null) {
          throw new Error(formatMuiErrorMessage$1(17));
        }
      }
      formControlContext == null || (_formControlContext$o2 = formControlContext.onChange) == null || _formControlContext$o2.call(formControlContext, event);

      // @ts-ignore
      (_otherHandlers$onChan = otherHandlers.onChange) == null || _otherHandlers$onChan.call(otherHandlers, event, ...args);
    };
    const handleClick = otherHandlers => event => {
      var _otherHandlers$onClic;
      if (inputRef.current && event.currentTarget === event.target) {
        inputRef.current.focus();
      }
      (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    };
    const getRootProps = (externalProps = {}) => {
      // onBlur, onChange and onFocus are forwarded to the input slot.
      const propsEventHandlers = extractEventHandlers(parameters, ['onBlur', 'onChange', 'onFocus']);
      const externalEventHandlers = _extends$1({}, propsEventHandlers, extractEventHandlers(externalProps));
      return _extends$1({}, externalProps, externalEventHandlers, {
        onClick: handleClick(externalEventHandlers)
      });
    };
    const getInputProps = (externalProps = {}) => {
      const propsEventHandlers = {
        onBlur,
        onChange,
        onFocus
      };
      const externalEventHandlers = _extends$1({}, propsEventHandlers, extractEventHandlers(externalProps));
      const mergedEventHandlers = _extends$1({}, externalEventHandlers, {
        onBlur: handleBlur(externalEventHandlers),
        onChange: handleChange(externalEventHandlers),
        onFocus: handleFocus(externalEventHandlers)
      });
      return _extends$1({}, mergedEventHandlers, {
        'aria-invalid': error || undefined,
        defaultValue: defaultValue,
        value: value,
        required,
        disabled
      }, externalProps, {
        ref: handleInputRef
      }, mergedEventHandlers);
    };
    return {
      disabled,
      error,
      focused,
      formControlContext,
      getInputProps,
      getRootProps,
      inputRef: handleInputRef,
      required,
      value
    };
  }

  /**
   * @internal
   */

  const FormControlContext = /*#__PURE__*/React__namespace.createContext(undefined);

  const _excluded$I = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "defaultValue", "disabled", "disabledInProp", "error", "id", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "type", "value"];
  function useForwardedInput(props, classes) {
    var _ref;
    const formControl = React__namespace.useContext(FormControlContext);
    const {
        'aria-describedby': ariaDescribedby,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        autoComplete,
        autoFocus,
        className,
        defaultValue,
        disabled: disabledProp,
        disabledInProp,
        error: errorProp,
        id,
        name,
        onClick,
        onChange,
        onKeyDown,
        onKeyUp,
        onFocus,
        onBlur,
        placeholder,
        readOnly,
        required,
        type,
        value
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$I);
    const {
      getRootProps,
      getInputProps,
      focused,
      error,
      disabled
    } = useInput({
      disabled: (_ref = disabledInProp != null ? disabledInProp : formControl == null ? void 0 : formControl.disabled) != null ? _ref : disabledProp,
      defaultValue,
      error: errorProp,
      onBlur,
      onClick,
      onChange,
      onFocus,
      required: required != null ? required : formControl == null ? void 0 : formControl.required,
      value
    });
    const rootStateClasses = {
      [classes.disabled]: disabled,
      [classes.error]: error,
      [classes.focused]: focused,
      [classes.formControl]: Boolean(formControl),
      [className]: className
    };
    const inputStateClasses = {
      [classes.disabled]: disabled
    };
    const propsToForward = {
      'aria-describedby': ariaDescribedby,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      autoComplete,
      autoFocus,
      disabled,
      id,
      onKeyDown,
      onKeyUp,
      name,
      placeholder,
      readOnly,
      type
    };
    return _extends$1({
      formControl,
      propsToForward,
      rootStateClasses,
      inputStateClasses,
      getRootProps,
      getInputProps,
      focused,
      error,
      disabled
    }, other);
  }

  const createPrefixVar = cssVarPrefix => {
    return cssVar => `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}${cssVar.replace(/^--/, '')}`;
  };
  const INVERTED_COLORS_ATTR = 'data-skip-inverted-colors';
  const INVERTED_COLORS_SELECTOR = `& :not([${INVERTED_COLORS_ATTR}], [${INVERTED_COLORS_ATTR}] *)`;

  // Apply cyclic variables to the component to use fallback values.
  // Color inversion variables from the parent will be neglected.
  const skipInvertedColors = theme => {
    var _theme$colorSchemes$l, _theme$colorSchemes$l2, _theme$colorSchemes$l3, _theme$colorSchemes$l4, _theme$colorSchemes$l5, _theme$colorSchemes$l6, _theme$colorSchemes$l7, _theme$colorSchemes$l8, _theme$colorSchemes$l9, _theme$colorSchemes$l10, _theme$colorSchemes$l11, _theme$colorSchemes$d, _theme$colorSchemes$d2, _theme$colorSchemes$d3, _theme$colorSchemes$d4, _theme$colorSchemes$d5, _theme$colorSchemes$d6, _theme$colorSchemes$d7, _theme$colorSchemes$d8, _theme$colorSchemes$d9, _theme$colorSchemes$d10, _theme$colorSchemes$d11;
    const prefixVar = createPrefixVar(theme.cssVarPrefix);
    return {
      '--variant-plainColor': 'var(--variant-plainColor) !important',
      '--variant-plainHoverColor': 'var(--variant-plainHoverColor) !important',
      '--variant-plainHoverBg': 'var(--variant-plainHoverBg) !important',
      '--variant-plainActiveBg': 'var(--variant-plainActiveBg) !important',
      '--variant-plainDisabledColor': 'var(--variant-plainDisabledColor) !important',
      '--variant-outlinedColor': 'var(--variant-outlinedColor) !important',
      '--variant-outlinedBorder': 'var(--variant-outlinedBorder) !important',
      '--variant-outlinedHoverColor': 'var(--variant-outlinedHoverColor) !important',
      '--variant-outlinedHoverBorder': 'var(--variant-outlinedHoverBorder) !important',
      '--variant-outlinedHoverBg': 'var(--variant-outlinedHoverBg) !important',
      '--variant-outlinedActiveBg': 'var(--variant-outlinedActiveBg) !important',
      '--variant-outlinedDisabledColor': 'var(--variant-outlinedDisabledColor) !important',
      '--variant-outlinedDisabledBorder': 'var(--variant-outlinedDisabledBorder) !important',
      '--variant-softColor': 'var(--variant-softColor) !important',
      '--variant-softHoverColor': 'var(--variant-softHoverColor) !important',
      '--variant-softBg': 'var(--variant-softBg) !important',
      '--variant-softHoverBg': 'var(--variant-softHoverBg) !important',
      '--variant-softActiveBg': 'var(--variant-softActiveBg) !important',
      '--variant-softActiveColor': 'var(--variant-softActiveColor) !important',
      '--variant-softDisabledColor': 'var(--variant-softDisabledColor) !important',
      '--variant-softDisabledBg': 'var(--variant-softDisabledBg) !important',
      '--variant-solidColor': 'var(--variant-solidColor) !important',
      '--variant-solidBg': 'var(--variant-solidBg) !important',
      '--variant-solidHoverBg': 'var(--variant-solidHoverBg) !important',
      '--variant-solidActiveBg': 'var(--variant-solidActiveBg) !important',
      '--variant-solidDisabledColor': 'var(--variant-solidDisabledColor) !important',
      '--variant-solidDisabledBg': 'var(--variant-solidDisabledBg) !important',
      '--Badge-ringColor': 'var(--Badge-ringColor) !important',
      colorScheme: 'unset',
      [theme.getColorSchemeSelector('light')]: {
        [prefixVar('--palette-focusVisible')]: `${(_theme$colorSchemes$l = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l.palette.focusVisible} !important`,
        [prefixVar('--palette-background-body')]: `${(_theme$colorSchemes$l2 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l2.palette.background.body} !important`,
        [prefixVar('--palette-background-surface')]: `${(_theme$colorSchemes$l3 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l3.palette.background.surface} !important`,
        [prefixVar('--palette-background-popup')]: `${(_theme$colorSchemes$l4 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l4.palette.background.popup} !important`,
        [prefixVar('--palette-background-level1')]: `${(_theme$colorSchemes$l5 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l5.palette.background.level1} !important`,
        [prefixVar('--palette-background-level2')]: `${(_theme$colorSchemes$l6 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l6.palette.background.level2} !important`,
        [prefixVar('--palette-background-level3')]: `${(_theme$colorSchemes$l7 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l7.palette.background.level3} !important`,
        [prefixVar('--palette-text-primary')]: `${(_theme$colorSchemes$l8 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l8.palette.text.primary} !important`,
        [prefixVar('--palette-text-secondary')]: `${(_theme$colorSchemes$l9 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l9.palette.text.secondary} !important`,
        [prefixVar('--palette-text-tertiary')]: `${(_theme$colorSchemes$l10 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l10.palette.text.tertiary} !important`,
        [prefixVar('--palette-divider')]: `${(_theme$colorSchemes$l11 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l11.palette.divider} !important`
      },
      [theme.getColorSchemeSelector('dark')]: {
        [prefixVar('--palette-focusVisible')]: `${(_theme$colorSchemes$d = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d.palette.focusVisible} !important`,
        [prefixVar('--palette-background-body')]: `${(_theme$colorSchemes$d2 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d2.palette.background.body} !important`,
        [prefixVar('--palette-background-surface')]: `${(_theme$colorSchemes$d3 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d3.palette.background.surface} !important`,
        [prefixVar('--palette-background-popup')]: `${(_theme$colorSchemes$d4 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d4.palette.background.popup} !important`,
        [prefixVar('--palette-background-level1')]: `${(_theme$colorSchemes$d5 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d5.palette.background.level1} !important`,
        [prefixVar('--palette-background-level2')]: `${(_theme$colorSchemes$d6 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d6.palette.background.level2} !important`,
        [prefixVar('--palette-background-level3')]: `${(_theme$colorSchemes$d7 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d7.palette.background.level3} !important`,
        [prefixVar('--palette-text-primary')]: `${(_theme$colorSchemes$d8 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d8.palette.text.primary} !important`,
        [prefixVar('--palette-text-secondary')]: `${(_theme$colorSchemes$d9 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d9.palette.text.secondary} !important`,
        [prefixVar('--palette-text-tertiary')]: `${(_theme$colorSchemes$d10 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d10.palette.text.tertiary} !important`,
        [prefixVar('--palette-divider')]: `${(_theme$colorSchemes$d11 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d11.palette.divider} !important`
      }
    };
  };

  // @internal
  // to support the same usage between `sx` prop and `styled` function, need to resolve the `theme`.
  //  sx: (theme) => ...
  //  styled: ({ theme }) => ...
  function isStyledThemeProp(props) {
    return props.theme !== undefined;
  }

  /**
   *
   * @param color a supported theme color palette
   * @returns (theme: ThemeFragment) => Record<DefaultColorPalette, CSSObject>
   */
  const applySolidInversion = color => themeProp => {
    const theme = isStyledThemeProp(themeProp) ? themeProp.theme : themeProp;
    const getCssVarDefault = createGetCssVar$1(theme.cssVarPrefix);
    const prefixVar = createPrefixVar(theme.cssVarPrefix);
    const getCssVar = cssVar => {
      const tokens = cssVar.split('-');
      return getCssVarDefault(cssVar, theme.palette[tokens[1]][tokens[2]]);
    };
    return {
      [INVERTED_COLORS_SELECTOR]: {
        '--Badge-ringColor': getCssVar(`palette-${color}-solidBg`),
        '--Icon-color': 'currentColor',
        [`${theme.getColorSchemeSelector('light')}, ${theme.getColorSchemeSelector('dark')}`]: {
          colorScheme: 'dark',
          [prefixVar('--palette-focusVisible')]: getCssVar(`palette-${color}-200`),
          [prefixVar('--palette-background-body')]: 'rgba(0 0 0 / 0.1)',
          [prefixVar('--palette-background-surface')]: 'rgba(0 0 0 / 0.06)',
          [prefixVar('--palette-background-popup')]: getCssVar(`palette-${color}-700`),
          [prefixVar('--palette-background-level1')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.2)`,
          [prefixVar('--palette-background-level2')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.36)`,
          [prefixVar('--palette-background-level3')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.6)`,
          [prefixVar('--palette-text-primary')]: getCssVar(`palette-common-white`),
          [prefixVar('--palette-text-secondary')]: getCssVar(`palette-${color}-200`),
          [prefixVar('--palette-text-tertiary')]: getCssVar(`palette-${color}-300`),
          [prefixVar('--palette-text-icon')]: getCssVar(`palette-${color}-200`),
          [prefixVar('--palette-divider')]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
          '--variant-plainColor': getCssVar(`palette-${color}-50`),
          '--variant-plainHoverColor': `#fff`,
          '--variant-plainHoverBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
          '--variant-plainActiveBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
          '--variant-plainDisabledColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          '--variant-outlinedColor': getCssVar(`palette-${color}-50`),
          '--variant-outlinedBorder': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.5)`,
          '--variant-outlinedHoverColor': `#fff`,
          '--variant-outlinedHoverBorder': getCssVar(`palette-${color}-300`),
          '--variant-outlinedHoverBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
          '--variant-outlinedActiveBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
          '--variant-outlinedDisabledColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          '--variant-outlinedDisabledBorder': `rgba(255 255 255 / 0.2)`,
          '--variant-softColor': getCssVar(`palette-common-white`),
          '--variant-softHoverColor': getCssVar(`palette-common-white`),
          '--variant-softBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.24)`,
          '--variant-softHoverBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.36)`,
          '--variant-softActiveBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.16)`,
          '--variant-softActiveColor': `#fff`,
          '--variant-softDisabledColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          '--variant-softDisabledBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`,
          '--variant-solidColor': getCssVar(`palette-${color}-${color === 'neutral' ? '600' : '500'}`),
          '--variant-solidBg': getCssVar(`palette-common-white`),
          '--variant-solidHoverBg': getCssVar(`palette-common-white`),
          '--variant-solidActiveBg': getCssVar(`palette-${color}-100`),
          '--variant-solidDisabledColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          '--variant-solidDisabledBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`
        }
      },
      [`&, & [${INVERTED_COLORS_ATTR}]`]: skipInvertedColors(theme)
    };
  };

  /**
   *
   * @param color a supported theme color palette
   * @returns (theme: ThemeFragment) => Record<DefaultColorPalette, CSSObject>
   */
  const applySoftInversion = color => themeProp => {
    const {
      theme = themeProp
    } = themeProp;
    const getCssVarDefault = createGetCssVar$1(theme.cssVarPrefix);
    const prefixVar = createPrefixVar(theme.cssVarPrefix);
    const getCssVar = cssVar => {
      const tokens = cssVar.split('-');
      return getCssVarDefault(cssVar, theme.palette[tokens[1]][tokens[2]]);
    };
    return {
      [INVERTED_COLORS_SELECTOR]: {
        '--Badge-ringColor': getCssVar(`palette-${color}-softBg`),
        '--Icon-color': 'currentColor',
        [theme.getColorSchemeSelector('dark')]: {
          [prefixVar('--palette-focusVisible')]: getCssVar(`palette-${color}-300`),
          [prefixVar('--palette-background-body')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
          [prefixVar('--palette-background-surface')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
          [prefixVar('--palette-background-level1')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          [prefixVar('--palette-background-level2')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
          [prefixVar('--palette-background-level3')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          [prefixVar('--palette-text-primary')]: getCssVar(`palette-${color}-100`),
          [prefixVar('--palette-text-secondary')]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
          [prefixVar('--palette-text-tertiary')]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.6)`,
          [prefixVar('--palette-text-icon')]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.6)`,
          [prefixVar('--palette-divider')]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.2)`,
          '--variant-plainColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
          '--variant-plainHoverColor': getCssVar(`palette-${color}-50`),
          '--variant-plainHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
          '--variant-plainActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          '--variant-plainDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-outlinedColor': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
          '--variant-outlinedHoverColor': getCssVar(`palette-${color}-50`),
          '--variant-outlinedBg': 'initial',
          '--variant-outlinedBorder': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
          '--variant-outlinedHoverBorder': getCssVar(`palette-${color}-600`),
          '--variant-outlinedHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
          '--variant-outlinedActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          '--variant-outlinedDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-outlinedDisabledBorder': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          '--variant-softColor': getCssVar(`palette-${color}-200`),
          '--variant-softBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
          '--variant-softHoverColor': '#fff',
          '--variant-softHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          '--variant-softActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
          '--variant-softDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-softDisabledBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          '--variant-solidColor': '#fff',
          '--variant-solidBg': getCssVar(`palette-${color}-500`),
          '--variant-solidHoverColor': '#fff',
          '--variant-solidHoverBg': getCssVar(`palette-${color}-600`),
          '--variant-solidActiveBg': getCssVar(`palette-${color}-600`),
          '--variant-solidDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
          '--variant-solidDisabledBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`
        },
        // `light` (default color scheme) should come last in case that `theme.getColorSchemeSelector()` return the same value
        [theme.getColorSchemeSelector('light')]: {
          [prefixVar('--palette-focusVisible')]: getCssVar(`palette-${color}-500`),
          [prefixVar('--palette-background-body')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
          [prefixVar('--palette-background-surface')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
          [prefixVar('--palette-background-level1')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
          [prefixVar('--palette-background-level2')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          [prefixVar('--palette-background-level3')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
          [prefixVar('--palette-text-primary')]: getCssVar(`palette-${color}-700`),
          [prefixVar('--palette-text-secondary')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
          [prefixVar('--palette-text-tertiary')]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.68)`,
          [prefixVar('--palette-text-icon')]: getCssVar(`palette-${color}-500`),
          [prefixVar('--palette-divider')]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
          '--variant-plainColor': `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
          '--variant-plainHoverColor': `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 1)`,
          '--variant-plainHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          '--variant-plainActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
          '--variant-plainDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          '--variant-outlinedColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 1)`,
          '--variant-outlinedBorder': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
          '--variant-outlinedHoverColor': getCssVar(`palette-${color}-600`),
          '--variant-outlinedHoverBorder': getCssVar(`palette-${color}-300`),
          '--variant-outlinedHoverBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          '--variant-outlinedActiveBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
          '--variant-outlinedDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          '--variant-outlinedDisabledBorder': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
          '--variant-softColor': getCssVar(`palette-${color}-600`),
          '--variant-softBg': `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.8)`,
          '--variant-softHoverColor': getCssVar(`palette-${color}-700`),
          '--variant-softHoverBg': getCssVar(`palette-${color}-200`),
          '--variant-softActiveBg': getCssVar(`palette-${color}-300`),
          '--variant-softDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          '--variant-softDisabledBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
          '--variant-solidColor': getCssVar('palette-common-white'),
          '--variant-solidBg': getCssVar(`palette-${color}-${color === 'neutral' ? '700' : '500'}`),
          '--variant-solidHoverColor': getCssVar('palette-common-white'),
          '--variant-solidHoverBg': getCssVar(`palette-${color}-${color === 'neutral' ? '600' : '600'}`),
          '--variant-solidActiveBg': getCssVar(`palette-${color}-${color === 'neutral' ? '600' : '600'}`),
          '--variant-solidDisabledColor': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
          '--variant-solidDisabledBg': `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`
        }
      },
      [`&, & [${INVERTED_COLORS_ATTR}]`]: skipInvertedColors(theme)
    };
  };

  const _excluded$H = ["propsToForward", "rootStateClasses", "inputStateClasses", "getRootProps", "getInputProps", "formControl", "focused", "error", "disabled", "fullWidth", "size", "color", "variant", "startDecorator", "endDecorator", "component", "slots", "slotProps"];
  const useUtilityClasses$r = ownerState => {
    const {
      disabled,
      fullWidth,
      variant,
      color,
      size
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', fullWidth && 'fullWidth', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`],
      input: ['input'],
      startDecorator: ['startDecorator'],
      endDecorator: ['endDecorator']
    };
    return composeClasses(slots, getInputUtilityClass, {});
  };
  const StyledInputRoot = styled$1('div')(({
    theme,
    ownerState
  }) => {
    var _theme$variants, _theme$vars$palette, _theme$vars$palette2, _variantStyle$backgro, _theme$variants2, _theme$variants3;
    const variantStyle = (_theme$variants = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants[ownerState.color];
    return [_extends$1({
      '--Input-radius': theme.vars.radius.sm,
      '--Input-gap': '0.5rem',
      '--Input-placeholderColor': 'inherit',
      '--Input-placeholderOpacity': 0.64,
      '--Input-decoratorColor': theme.vars.palette.text.icon,
      '--Input-focused': '0',
      '--Input-focusedThickness': theme.vars.focus.thickness,
      '--Input-focusedHighlight': (_theme$vars$palette = theme.vars.palette[ownerState.color === 'neutral' ? 'primary' : ownerState.color]) == null ? void 0 : _theme$vars$palette[500],
      [`&:not([${INVERTED_COLORS_ATTR}])`]: _extends$1({}, ownerState.instanceColor && {
        '--_Input-focusedHighlight': (_theme$vars$palette2 = theme.vars.palette[ownerState.instanceColor === 'neutral' ? 'primary' : ownerState.instanceColor]) == null ? void 0 : _theme$vars$palette2[500]
      }, {
        '--Input-focusedHighlight': `var(--_Input-focusedHighlight, ${theme.vars.palette.focusVisible})`
      })
    }, ownerState.size === 'sm' && {
      '--Input-minHeight': '2rem',
      '--Input-paddingInline': '0.5rem',
      '--Input-decoratorChildHeight': 'min(1.5rem, var(--Input-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl
    }, ownerState.size === 'md' && {
      '--Input-minHeight': '2.25rem',
      '--Input-paddingInline': '0.75rem',
      '--Input-decoratorChildHeight': 'min(1.75rem, var(--Input-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl2
    }, ownerState.size === 'lg' && {
      '--Input-minHeight': '2.75rem',
      '--Input-paddingInline': '1rem',
      '--Input-gap': '0.75rem',
      '--Input-decoratorChildHeight': 'min(2.25rem, var(--Input-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl2
    }, {
      // variables for controlling child components
      '--Input-decoratorChildOffset': 'min(calc(var(--Input-paddingInline) - (var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2), var(--Input-paddingInline))',
      '--_Input-paddingBlock': 'max((var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2, 0px)',
      '--Input-decoratorChildRadius': 'max(var(--Input-radius) - var(--variant-borderWidth, 0px) - var(--_Input-paddingBlock), min(var(--_Input-paddingBlock) + var(--variant-borderWidth, 0px), var(--Input-radius) / 2))',
      '--Button-minHeight': 'var(--Input-decoratorChildHeight)',
      '--Button-paddingBlock': '0px',
      // to ensure that the height of the button is equal to --Button-minHeight
      '--IconButton-size': 'var(--Input-decoratorChildHeight)',
      '--Button-radius': 'var(--Input-decoratorChildRadius)',
      '--IconButton-radius': 'var(--Input-decoratorChildRadius)',
      boxSizing: 'border-box'
    }, ownerState.variant !== 'plain' && {
      boxShadow: theme.shadow.xs
    }, {
      minWidth: 0,
      minHeight: 'var(--Input-minHeight)'
    }, ownerState.fullWidth && {
      width: '100%'
    }, {
      cursor: 'text',
      position: 'relative',
      display: 'flex',
      paddingInline: `var(--Input-paddingInline)`,
      borderRadius: 'var(--Input-radius)'
    }, theme.typography[`body-${ownerState.size}`], variantStyle, {
      backgroundColor: (_variantStyle$backgro = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro : theme.vars.palette.background.surface,
      '&::before': {
        boxSizing: 'border-box',
        content: '""',
        display: 'block',
        position: 'absolute',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        borderRadius: 'inherit',
        margin: 'calc(var(--variant-borderWidth, 0px) * -1)',
        // for outlined variant
        boxShadow: `var(--Input-focusedInset, inset) 0 0 0 calc(var(--Input-focused) * var(--Input-focusedThickness)) var(--Input-focusedHighlight)`
      }
    }), {
      '&:hover': _extends$1({}, (_theme$variants2 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants2[ownerState.color], {
        backgroundColor: null // it is not common to change background on hover for Input
      }),
      [`&.${inputClasses.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color],
      '&:focus-within::before': {
        '--Input-focused': '1'
      }
    }];
  });
  const StyledInputHtml = styled$1('input')(({
    ownerState
  }) => ({
    border: 'none',
    // remove the native input width
    minWidth: 0,
    // remove the native input width
    outline: 0,
    // remove the native input outline
    padding: 0,
    // remove the native input padding
    flex: 1,
    color: 'inherit',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    textOverflow: 'ellipsis',
    '&:-webkit-autofill': _extends$1({
      paddingInline: 'var(--Input-paddingInline)'
    }, !ownerState.startDecorator && {
      marginInlineStart: 'calc(-1 * var(--Input-paddingInline))',
      paddingInlineStart: 'var(--Input-paddingInline)',
      borderTopLeftRadius: 'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
      borderBottomLeftRadius: 'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))'
    }, !ownerState.endDecorator && {
      marginInlineEnd: 'calc(-1 * var(--Input-paddingInline))',
      paddingInlineEnd: 'var(--Input-paddingInline)',
      borderTopRightRadius: 'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
      borderBottomRightRadius: 'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))'
    }),
    '&::-webkit-input-placeholder': {
      color: 'var(--Input-placeholderColor)',
      opacity: 'var(--Input-placeholderOpacity)'
    },
    '&::-moz-placeholder': {
      // Firefox 19+
      color: 'var(--Input-placeholderColor)',
      opacity: 'var(--Input-placeholderOpacity)'
    },
    '&:-ms-input-placeholder': {
      // IE11
      color: 'var(--Input-placeholderColor)',
      opacity: 'var(--Input-placeholderOpacity)'
    },
    '&::-ms-input-placeholder': {
      // Edge
      color: 'var(--Input-placeholderColor)',
      opacity: 'var(--Input-placeholderOpacity)'
    }
  }));
  const StyledInputStartDecorator = styled$1('div')({
    '--Button-margin': '0 0 0 calc(var(--Input-decoratorChildOffset) * -1)',
    '--IconButton-margin': '0 0 0 calc(var(--Input-decoratorChildOffset) * -1)',
    '--Icon-margin': '0 0 0 calc(var(--Input-paddingInline) / -4)',
    display: 'inherit',
    alignItems: 'center',
    paddingBlock: 'var(--unstable_InputPaddingBlock)',
    // for wrapping Autocomplete's tags
    flexWrap: 'wrap',
    // for wrapping Autocomplete's tags
    marginInlineEnd: 'var(--Input-gap)',
    color: 'var(--Input-decoratorColor)',
    cursor: 'initial'
  });
  const StyledInputEndDecorator = styled$1('div')({
    '--Button-margin': '0 calc(var(--Input-decoratorChildOffset) * -1) 0 0',
    '--IconButton-margin': '0 calc(var(--Input-decoratorChildOffset) * -1) 0 0',
    '--Icon-margin': '0 calc(var(--Input-paddingInline) / -4) 0 0',
    display: 'inherit',
    alignItems: 'center',
    marginInlineStart: 'var(--Input-gap)',
    color: 'var(--Input-decoratorColor)',
    cursor: 'initial'
  });
  const InputRoot = styled$1(StyledInputRoot, {
    name: 'JoyInput',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({});
  const InputInput = styled$1(StyledInputHtml, {
    name: 'JoyInput',
    slot: 'Input',
    overridesResolver: (props, styles) => styles.input
  })({});
  const InputStartDecorator = styled$1(StyledInputStartDecorator, {
    name: 'JoyInput',
    slot: 'StartDecorator',
    overridesResolver: (props, styles) => styles.startDecorator
  })({});
  const InputEndDecorator = styled$1(StyledInputEndDecorator, {
    name: 'JoyInput',
    slot: 'EndDecorator',
    overridesResolver: (props, styles) => styles.endDecorator
  })({});
  /**
   *
   * Demos:
   *
   * - [Input](https://mui.com/joy-ui/react-input/)
   *
   * API:
   *
   * - [Input API](https://mui.com/joy-ui/api/input/)
   */
  const Input$1 = /*#__PURE__*/React__namespace.forwardRef(function Input(inProps, ref) {
    var _ref, _inProps$error, _ref2, _inProps$size, _inProps$color, _formControl$color;
    const props = useThemeProps({
      props: inProps,
      name: 'JoyInput'
    });
    const _useForwardedInput = useForwardedInput(_extends$1({}, props, {
        disabledInProp: inProps.disabled
      }), inputClasses),
      {
        propsToForward,
        rootStateClasses,
        inputStateClasses,
        getRootProps,
        getInputProps,
        formControl,
        focused,
        error: errorProp = false,
        disabled,
        fullWidth = false,
        size: sizeProp = 'md',
        color: colorProp = 'neutral',
        variant = 'outlined',
        startDecorator,
        endDecorator,
        component,
        slots = {},
        slotProps = {}
      } = _useForwardedInput,
      other = _objectWithoutPropertiesLoose$1(_useForwardedInput, _excluded$H);
    const error = (_ref = (_inProps$error = inProps.error) != null ? _inProps$error : formControl == null ? void 0 : formControl.error) != null ? _ref : errorProp;
    const size = (_ref2 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref2 : sizeProp;
    const color = (_inProps$color = inProps.color) != null ? _inProps$color : error ? 'danger' : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp;
    const ownerState = _extends$1({
      instanceColor: error ? 'danger' : inProps.color
    }, props, {
      fullWidth,
      color,
      disabled,
      error,
      focused,
      size,
      variant
    });
    const classes = useUtilityClasses$r(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: [classes.root, rootStateClasses],
      elementType: InputRoot,
      getSlotProps: getRootProps,
      externalForwardedProps,
      ownerState
    });
    const [SlotInput, inputProps] = useSlot('input', _extends$1({}, formControl && {
      additionalProps: {
        id: formControl.htmlFor,
        'aria-describedby': formControl['aria-describedby']
      }
    }, {
      className: [classes.input, inputStateClasses],
      elementType: InputInput,
      getSlotProps: getInputProps,
      internalForwardedProps: propsToForward,
      externalForwardedProps,
      ownerState
    }));
    const [SlotStartDecorator, startDecoratorProps] = useSlot('startDecorator', {
      className: classes.startDecorator,
      elementType: InputStartDecorator,
      externalForwardedProps,
      ownerState
    });
    const [SlotEndDecorator, endDecoratorProps] = useSlot('endDecorator', {
      className: classes.endDecorator,
      elementType: InputEndDecorator,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
      children: [startDecorator && /*#__PURE__*/require$$2$1.jsx(SlotStartDecorator, _extends$1({}, startDecoratorProps, {
        children: startDecorator
      })), /*#__PURE__*/require$$2$1.jsx(SlotInput, _extends$1({}, inputProps)), endDecorator && /*#__PURE__*/require$$2$1.jsx(SlotEndDecorator, _extends$1({}, endDecoratorProps, {
        children: endDecorator
      }))]
    }));
  });

  /**
   *
   * Demos:
   *
   * - [Button](https://mui.com/base-ui/react-button/#hook)
   *
   * API:
   *
   * - [useButton API](https://mui.com/base-ui/react-button/hooks-api/#use-button)
   */
  function useButton(parameters = {}) {
    const {
      disabled = false,
      focusableWhenDisabled,
      href,
      rootRef: externalRef,
      tabIndex,
      to,
      type,
      rootElementName: rootElementNameProp
    } = parameters;
    const buttonRef = React__namespace.useRef();
    const [active, setActive] = React__namespace.useState(false);
    const {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref: focusVisibleRef
    } = useIsFocusVisible();
    const [focusVisible, setFocusVisible] = React__namespace.useState(false);
    if (disabled && !focusableWhenDisabled && focusVisible) {
      setFocusVisible(false);
    }
    React__namespace.useEffect(() => {
      isFocusVisibleRef.current = focusVisible;
    }, [focusVisible, isFocusVisibleRef]);
    const [rootElementName, updateRootElementName] = useRootElementName({
      rootElementName: rootElementNameProp != null ? rootElementNameProp : href || to ? 'a' : undefined,
      componentName: 'Button'
    });
    const createHandleMouseLeave = otherHandlers => event => {
      var _otherHandlers$onMous;
      if (focusVisible) {
        event.preventDefault();
      }
      (_otherHandlers$onMous = otherHandlers.onMouseLeave) == null || _otherHandlers$onMous.call(otherHandlers, event);
    };
    const createHandleBlur = otherHandlers => event => {
      var _otherHandlers$onBlur;
      handleBlurVisible(event);
      if (isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }
      (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
    };
    const createHandleFocus = otherHandlers => event => {
      var _otherHandlers$onFocu2;
      // Fix for https://github.com/facebook/react/issues/7769
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }
      handleFocusVisible(event);
      if (isFocusVisibleRef.current === true) {
        var _otherHandlers$onFocu;
        setFocusVisible(true);
        (_otherHandlers$onFocu = otherHandlers.onFocusVisible) == null || _otherHandlers$onFocu.call(otherHandlers, event);
      }
      (_otherHandlers$onFocu2 = otherHandlers.onFocus) == null || _otherHandlers$onFocu2.call(otherHandlers, event);
    };
    const isNativeButton = () => {
      const button = buttonRef.current;
      return rootElementName === 'BUTTON' || rootElementName === 'INPUT' && ['button', 'submit', 'reset'].includes(button == null ? void 0 : button.type) || rootElementName === 'A' && (button == null ? void 0 : button.href);
    };
    const createHandleClick = otherHandlers => event => {
      if (!disabled) {
        var _otherHandlers$onClic;
        (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
      }
    };
    const createHandleMouseDown = otherHandlers => event => {
      var _otherHandlers$onMous2;
      if (!disabled) {
        setActive(true);
        document.addEventListener('mouseup', () => {
          setActive(false);
        }, {
          once: true
        });
      }
      (_otherHandlers$onMous2 = otherHandlers.onMouseDown) == null || _otherHandlers$onMous2.call(otherHandlers, event);
    };
    const createHandleKeyDown = otherHandlers => event => {
      var _otherHandlers$onKeyD;
      (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
      if (event.defaultMuiPrevented) {
        return;
      }
      if (event.target === event.currentTarget && !isNativeButton() && event.key === ' ') {
        event.preventDefault();
      }
      if (event.target === event.currentTarget && event.key === ' ' && !disabled) {
        setActive(true);
      }

      // Keyboard accessibility for non interactive elements
      if (event.target === event.currentTarget && !isNativeButton() && event.key === 'Enter' && !disabled) {
        var _otherHandlers$onClic2;
        (_otherHandlers$onClic2 = otherHandlers.onClick) == null || _otherHandlers$onClic2.call(otherHandlers, event);
        event.preventDefault();
      }
    };
    const createHandleKeyUp = otherHandlers => event => {
      var _otherHandlers$onKeyU;
      // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
      // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0

      if (event.target === event.currentTarget) {
        setActive(false);
      }
      (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null || _otherHandlers$onKeyU.call(otherHandlers, event);

      // Keyboard accessibility for non interactive elements
      if (event.target === event.currentTarget && !isNativeButton() && !disabled && event.key === ' ' && !event.defaultMuiPrevented) {
        var _otherHandlers$onClic3;
        (_otherHandlers$onClic3 = otherHandlers.onClick) == null || _otherHandlers$onClic3.call(otherHandlers, event);
      }
    };
    const handleRef = useForkRef(updateRootElementName, externalRef, focusVisibleRef, buttonRef);
    const buttonProps = {};
    if (tabIndex !== undefined) {
      buttonProps.tabIndex = tabIndex;
    }
    if (rootElementName === 'BUTTON') {
      buttonProps.type = type != null ? type : 'button';
      if (focusableWhenDisabled) {
        buttonProps['aria-disabled'] = disabled;
      } else {
        buttonProps.disabled = disabled;
      }
    } else if (rootElementName === 'INPUT') {
      if (type && ['button', 'submit', 'reset'].includes(type)) {
        if (focusableWhenDisabled) {
          buttonProps['aria-disabled'] = disabled;
        } else {
          buttonProps.disabled = disabled;
        }
      }
    } else if (rootElementName !== '') {
      if (!href && !to) {
        buttonProps.role = 'button';
        buttonProps.tabIndex = tabIndex != null ? tabIndex : 0;
      }
      if (disabled) {
        buttonProps['aria-disabled'] = disabled;
        buttonProps.tabIndex = focusableWhenDisabled ? tabIndex != null ? tabIndex : 0 : -1;
      }
    }
    const getRootProps = (externalProps = {}) => {
      const externalEventHandlers = _extends$1({}, extractEventHandlers(parameters), extractEventHandlers(externalProps));
      const props = _extends$1({
        type
      }, externalEventHandlers, buttonProps, externalProps, {
        onBlur: createHandleBlur(externalEventHandlers),
        onClick: createHandleClick(externalEventHandlers),
        onFocus: createHandleFocus(externalEventHandlers),
        onKeyDown: createHandleKeyDown(externalEventHandlers),
        onKeyUp: createHandleKeyUp(externalEventHandlers),
        onMouseDown: createHandleMouseDown(externalEventHandlers),
        onMouseLeave: createHandleMouseLeave(externalEventHandlers),
        ref: handleRef
      });

      // onFocusVisible can be present on the props or parameters,
      // but it's not a valid React event handler so it must not be forwarded to the inner component.
      // If present, it will be handled by the focus handler.
      delete props.onFocusVisible;
      return props;
    };
    return {
      getRootProps,
      focusVisible,
      setFocusVisible,
      active,
      rootRef: handleRef
    };
  }

  const DropdownContext = /*#__PURE__*/React__namespace.createContext(null);

  function areEqual(a, b) {
    return a === b;
  }
  const EMPTY_OBJECT$1 = {};
  const NOOP$1 = () => {};

  /**
   * Gets the current state augmented with controlled values from the outside.
   * If a state item has a corresponding controlled value, it will be used instead of the internal state.
   */
  function getControlledState(internalState, controlledProps) {
    const augmentedState = _extends$1({}, internalState);
    Object.keys(controlledProps).forEach(key => {
      if (controlledProps[key] !== undefined) {
        augmentedState[key] = controlledProps[key];
      }
    });
    return augmentedState;
  }
  /**
   * Defines an effect that compares the next state with the previous state and calls
   * the `onStateChange` callback if the state has changed.
   * The comparison is done based on the `stateComparers` parameter.
   */
  function useStateChangeDetection(parameters) {
    const {
      nextState,
      initialState,
      stateComparers,
      onStateChange,
      controlledProps,
      lastActionRef
    } = parameters;
    const internalPreviousStateRef = React__namespace.useRef(initialState);
    React__namespace.useEffect(() => {
      if (lastActionRef.current === null) {
        // Detect changes only if an action has been dispatched.
        return;
      }
      const previousState = getControlledState(internalPreviousStateRef.current, controlledProps);
      Object.keys(nextState).forEach(key => {
        var _stateComparers$key;
        // go through all state keys and compare them with the previous state
        const stateComparer = (_stateComparers$key = stateComparers[key]) != null ? _stateComparers$key : areEqual;
        const nextStateItem = nextState[key];
        const previousStateItem = previousState[key];
        if (previousStateItem == null && nextStateItem != null || previousStateItem != null && nextStateItem == null || previousStateItem != null && nextStateItem != null && !stateComparer(nextStateItem, previousStateItem)) {
          var _event, _type;
          onStateChange == null || onStateChange((_event = lastActionRef.current.event) != null ? _event : null, key, nextStateItem, (_type = lastActionRef.current.type) != null ? _type : '', nextState);
        }
      });
      internalPreviousStateRef.current = nextState;
      lastActionRef.current = null;
    }, [internalPreviousStateRef, nextState, lastActionRef, onStateChange, stateComparers, controlledProps]);
  }

  /**
   * The alternative to `React.useReducer` that lets you control the state from the outside.
   *
   * It can be used in an uncontrolled mode, similar to `React.useReducer`, or in a controlled mode, when the state is controlled by the props.
   * It also supports partially controlled state, when some state items are controlled and some are not.
   *
   * The controlled state items are provided via the `controlledProps` parameter.
   * When a reducer action is dispatched, the internal state is updated with the new values.
   * A change event (`onStateChange`) is then triggered (for each changed state item) if the new state is different from the previous state.
   * This event can be used to update the controlled values.
   *
   * The comparison of the previous and next states is done using the `stateComparers` parameter.
   * If a state item has a corresponding comparer, it will be used to determine if the state has changed.
   * This is useful when the state item is an object and you want to compare only a subset of its properties or if it's an array and you want to compare its contents.
   *
   * An additional feature is the `actionContext` parameter. It allows you to add additional properties to every action object,
   * similarly to how React context is implicitly available to every component.
   *
   * @template State - The type of the state calculated by the reducer.
   * @template Action - The type of the actions that can be dispatched.
   * @template ActionContext - The type of the additional properties that will be added to every action object.
   *
   * @ignore - internal hook.
   */
  function useControllableReducer(parameters) {
    const lastActionRef = React__namespace.useRef(null);
    const {
      reducer,
      initialState,
      controlledProps = EMPTY_OBJECT$1,
      stateComparers = EMPTY_OBJECT$1,
      onStateChange = NOOP$1,
      actionContext,
      componentName = ''
    } = parameters;
    React__namespace.useRef(controlledProps);

    // The reducer that is passed to React.useReducer is wrapped with a function that augments the state with controlled values.
    const reducerWithControlledState = React__namespace.useCallback((state, action) => {
      lastActionRef.current = action;
      const controlledState = getControlledState(state, controlledProps);
      const newState = reducer(controlledState, action);
      return newState;
    }, [controlledProps, reducer]);
    const [nextState, dispatch] = React__namespace.useReducer(reducerWithControlledState, initialState);

    // The action that is passed to dispatch is augmented with the actionContext.
    const dispatchWithContext = React__namespace.useCallback(action => {
      dispatch(_extends$1({}, action, {
        context: actionContext
      }));
    }, [actionContext]);
    useStateChangeDetection({
      nextState,
      initialState,
      stateComparers: stateComparers != null ? stateComparers : EMPTY_OBJECT$1,
      onStateChange: onStateChange != null ? onStateChange : NOOP$1,
      controlledProps,
      lastActionRef
    });
    return [getControlledState(nextState, controlledProps), dispatchWithContext];
  }

  const DropdownActionTypes = {
    blur: 'dropdown:blur',
    escapeKeyDown: 'dropdown:escapeKeyDown',
    toggle: 'dropdown:toggle',
    open: 'dropdown:open',
    close: 'dropdown:close'
  };

  function dropdownReducer(state, action) {
    switch (action.type) {
      case DropdownActionTypes.blur:
        return {
          open: false,
          changeReason: action.event
        };
      case DropdownActionTypes.escapeKeyDown:
        return {
          open: false,
          changeReason: action.event
        };
      case DropdownActionTypes.toggle:
        return {
          open: !state.open,
          changeReason: action.event
        };
      case DropdownActionTypes.open:
        return {
          open: true,
          changeReason: action.event
        };
      case DropdownActionTypes.close:
        return {
          open: false,
          changeReason: action.event
        };
      default:
        throw new Error(`Unhandled action`);
    }
  }

  /**
   *
   * Demos:
   *
   * - [Menu](https://mui.com/base-ui/react-menu/#hooks)
   *
   * API:
   *
   * - [useDropdown API](https://mui.com/base-ui/react-menu/hooks-api/#use-dropdown)
   */
  function useDropdown(parameters = {}) {
    const {
      defaultOpen,
      onOpenChange,
      open: openProp,
      componentName = 'useDropdown'
    } = parameters;
    const [popupId, setPopupId] = React__namespace.useState('');
    const [triggerElement, setTriggerElement] = React__namespace.useState(null);
    const lastActionType = React__namespace.useRef(null);
    const handleStateChange = React__namespace.useCallback((event, field, value, reason) => {
      if (field === 'open') {
        onOpenChange == null || onOpenChange(event, value);
      }
      lastActionType.current = reason;
    }, [onOpenChange]);
    const controlledProps = React__namespace.useMemo(() => openProp !== undefined ? {
      open: openProp
    } : {}, [openProp]);
    const [state, dispatch] = useControllableReducer({
      controlledProps,
      initialState: defaultOpen ? {
        open: true,
        changeReason: null
      } : {
        open: false,
        changeReason: null
      },
      onStateChange: handleStateChange,
      reducer: dropdownReducer,
      componentName
    });
    React__namespace.useEffect(() => {
      if (!state.open && lastActionType.current !== null && lastActionType.current !== DropdownActionTypes.blur) {
        triggerElement == null || triggerElement.focus();
      }
    }, [state.open, triggerElement]);
    const contextValue = {
      state,
      dispatch,
      popupId,
      registerPopup: setPopupId,
      registerTrigger: setTriggerElement,
      triggerElement
    };
    return {
      contextValue,
      open: state.open
    };
  }

  function Dropdown$1(props) {
    const {
      children,
      open,
      defaultOpen,
      onOpenChange
    } = props;
    const {
      contextValue
    } = useDropdown({
      defaultOpen,
      onOpenChange,
      open
    });
    return /*#__PURE__*/require$$2$1.jsx(DropdownContext.Provider, {
      value: contextValue,
      children: children
    });
  }

  const ListActionTypes = {
    blur: 'list:blur',
    focus: 'list:focus',
    itemClick: 'list:itemClick',
    itemHover: 'list:itemHover',
    itemsChange: 'list:itemsChange',
    keyDown: 'list:keyDown',
    resetHighlight: 'list:resetHighlight',
    highlightLast: 'list:highlightLast',
    textNavigation: 'list:textNavigation',
    clearSelection: 'list:clearSelection'
  };

  /**
   * A union of all standard actions that can be dispatched to the list reducer.
   */

  /**
   * Looks up the next valid item to highlight within the list.
   *
   * @param currentIndex The index of the start of the search.
   * @param lookupDirection Whether to look for the next or previous item.
   * @param items The array of items to search.
   * @param includeDisabledItems Whether to include disabled items in the search.
   * @param isItemDisabled A function that determines whether an item is disabled.
   * @param wrapAround Whether to wrap around the list when searching.
   * @returns The index of the next valid item to highlight or -1 if no valid item is found.
   */
  function findValidItemToHighlight(currentIndex, lookupDirection, items, includeDisabledItems, isItemDisabled, wrapAround) {
    if (items.length === 0 || !includeDisabledItems && items.every((item, itemIndex) => isItemDisabled(item, itemIndex))) {
      return -1;
    }
    let nextFocus = currentIndex;
    for (;;) {
      // No valid items found
      if (!wrapAround && lookupDirection === 'next' && nextFocus === items.length || !wrapAround && lookupDirection === 'previous' && nextFocus === -1) {
        return -1;
      }
      const nextFocusDisabled = includeDisabledItems ? false : isItemDisabled(items[nextFocus], nextFocus);
      if (nextFocusDisabled) {
        nextFocus += lookupDirection === 'next' ? 1 : -1;
        if (wrapAround) {
          nextFocus = (nextFocus + items.length) % items.length;
        }
      } else {
        return nextFocus;
      }
    }
  }

  /**
   * Gets the next item to highlight based on the current highlighted item and the search direction.
   *
   * @param previouslyHighlightedValue The item from which to start the search for the next candidate.
   * @param offset The offset from the previously highlighted item to search for the next candidate or a special named value ('reset', 'start', 'end').
   * @param context The list action context.
   *
   * @returns The next item to highlight or null if no item is valid.
   */
  function moveHighlight(previouslyHighlightedValue, offset, context) {
    var _items$nextIndex;
    const {
      items,
      isItemDisabled,
      disableListWrap,
      disabledItemsFocusable,
      itemComparer,
      focusManagement
    } = context;

    // TODO: make this configurable
    // The always should be an item highlighted when focus is managed by the DOM
    // so that it's accessible by the `tab` key.
    const defaultHighlightedIndex = focusManagement === 'DOM' ? 0 : -1;
    const maxIndex = items.length - 1;
    const previouslyHighlightedIndex = previouslyHighlightedValue == null ? -1 : items.findIndex(item => itemComparer(item, previouslyHighlightedValue));
    let nextIndexCandidate;
    let lookupDirection;
    let wrapAround = !disableListWrap;
    switch (offset) {
      case 'reset':
        if (defaultHighlightedIndex === -1) {
          return null;
        }
        nextIndexCandidate = 0;
        lookupDirection = 'next';
        wrapAround = false;
        break;
      case 'start':
        nextIndexCandidate = 0;
        lookupDirection = 'next';
        wrapAround = false;
        break;
      case 'end':
        nextIndexCandidate = maxIndex;
        lookupDirection = 'previous';
        wrapAround = false;
        break;
      default:
        {
          const newIndex = previouslyHighlightedIndex + offset;
          if (newIndex < 0) {
            if (!wrapAround && previouslyHighlightedIndex !== -1 || Math.abs(offset) > 1) {
              nextIndexCandidate = 0;
              lookupDirection = 'next';
            } else {
              nextIndexCandidate = maxIndex;
              lookupDirection = 'previous';
            }
          } else if (newIndex > maxIndex) {
            if (!wrapAround || Math.abs(offset) > 1) {
              nextIndexCandidate = maxIndex;
              lookupDirection = 'previous';
            } else {
              nextIndexCandidate = 0;
              lookupDirection = 'next';
            }
          } else {
            nextIndexCandidate = newIndex;
            lookupDirection = offset >= 0 ? 'next' : 'previous';
          }
        }
    }
    const nextIndex = findValidItemToHighlight(nextIndexCandidate, lookupDirection, items, disabledItemsFocusable, isItemDisabled, wrapAround);

    // If there are no valid items to highlight, return the previously highlighted item (if it's still valid).
    if (nextIndex === -1 && previouslyHighlightedValue !== null && !isItemDisabled(previouslyHighlightedValue, previouslyHighlightedIndex)) {
      return previouslyHighlightedValue;
    }
    return (_items$nextIndex = items[nextIndex]) != null ? _items$nextIndex : null;
  }

  /**
   * Toggles the selection of an item.
   *
   * @param item Item to toggle.
   * @param selectedValues Already selected items.
   * @param selectionMode The number of items that can be simultanously selected.
   * @param itemComparer A custom item comparer function.
   *
   * @returns The new array of selected items.
   */
  function toggleSelection(item, selectedValues, selectionMode, itemComparer) {
    if (selectionMode === 'none') {
      return [];
    }
    if (selectionMode === 'single') {
      // if the item to select has already been selected, return the original array
      if (itemComparer(selectedValues[0], item)) {
        return selectedValues;
      }
      return [item];
    }

    // The toggled item is selected; remove it from the selection.
    if (selectedValues.some(sv => itemComparer(sv, item))) {
      return selectedValues.filter(sv => !itemComparer(sv, item));
    }

    // The toggled item is not selected - add it to the selection.
    return [...selectedValues, item];
  }

  /**
   * Handles item selection in a list.
   *
   * @param item - The item to be selected.
   * @param state - The current state of the list.
   * @param context - The context of the list action.
   * @returns The new state of the list after the item has been selected, or the original state if the item is disabled.
   */
  function handleItemSelection(item, state, context) {
    const {
      itemComparer,
      isItemDisabled,
      selectionMode,
      items
    } = context;
    const {
      selectedValues
    } = state;
    const itemIndex = items.findIndex(i => itemComparer(item, i));
    if (isItemDisabled(item, itemIndex)) {
      return state;
    }

    // if the item is already selected, remove it from the selection, otherwise add it
    const newSelectedValues = toggleSelection(item, selectedValues, selectionMode, itemComparer);
    return _extends$1({}, state, {
      selectedValues: newSelectedValues,
      highlightedValue: item
    });
  }
  function handleKeyDown(key, state, context) {
    const previouslySelectedValue = state.highlightedValue;
    const {
      orientation,
      pageSize
    } = context;
    switch (key) {
      case 'Home':
        return _extends$1({}, state, {
          highlightedValue: moveHighlight(previouslySelectedValue, 'start', context)
        });
      case 'End':
        return _extends$1({}, state, {
          highlightedValue: moveHighlight(previouslySelectedValue, 'end', context)
        });
      case 'PageUp':
        return _extends$1({}, state, {
          highlightedValue: moveHighlight(previouslySelectedValue, -pageSize, context)
        });
      case 'PageDown':
        return _extends$1({}, state, {
          highlightedValue: moveHighlight(previouslySelectedValue, pageSize, context)
        });
      case 'ArrowUp':
        if (orientation !== 'vertical') {
          break;
        }
        return _extends$1({}, state, {
          highlightedValue: moveHighlight(previouslySelectedValue, -1, context)
        });
      case 'ArrowDown':
        if (orientation !== 'vertical') {
          break;
        }
        return _extends$1({}, state, {
          highlightedValue: moveHighlight(previouslySelectedValue, 1, context)
        });
      case 'ArrowLeft':
        {
          if (orientation === 'vertical') {
            break;
          }
          const offset = orientation === 'horizontal-ltr' ? -1 : 1;
          return _extends$1({}, state, {
            highlightedValue: moveHighlight(previouslySelectedValue, offset, context)
          });
        }
      case 'ArrowRight':
        {
          if (orientation === 'vertical') {
            break;
          }
          const offset = orientation === 'horizontal-ltr' ? 1 : -1;
          return _extends$1({}, state, {
            highlightedValue: moveHighlight(previouslySelectedValue, offset, context)
          });
        }
      case 'Enter':
      case ' ':
        if (state.highlightedValue === null) {
          return state;
        }
        return handleItemSelection(state.highlightedValue, state, context);
    }
    return state;
  }
  function handleBlur(state, context) {
    if (context.focusManagement === 'DOM') {
      return state;
    }
    return _extends$1({}, state, {
      highlightedValue: null
    });
  }
  function textCriteriaMatches(nextFocus, searchString, stringifyItem) {
    var _stringifyItem;
    const text = (_stringifyItem = stringifyItem(nextFocus)) == null ? void 0 : _stringifyItem.trim().toLowerCase();
    if (!text || text.length === 0) {
      // Make item not navigable if stringification fails or results in empty string.
      return false;
    }
    return text.indexOf(searchString) === 0;
  }
  function handleTextNavigation(state, searchString, context) {
    const {
      items,
      isItemDisabled,
      disabledItemsFocusable,
      getItemAsString
    } = context;
    const startWithCurrentItem = searchString.length > 1;
    let nextItem = startWithCurrentItem ? state.highlightedValue : moveHighlight(state.highlightedValue, 1, context);
    for (let index = 0; index < items.length; index += 1) {
      // Return un-mutated state if looped back to the currently highlighted value
      if (!nextItem || !startWithCurrentItem && state.highlightedValue === nextItem) {
        return state;
      }
      if (textCriteriaMatches(nextItem, searchString, getItemAsString) && (!isItemDisabled(nextItem, items.indexOf(nextItem)) || disabledItemsFocusable)) {
        // The nextItem is the element to be highlighted
        return _extends$1({}, state, {
          highlightedValue: nextItem
        });
      }
      // Move to the next element.
      nextItem = moveHighlight(nextItem, 1, context);
    }

    // No item matches the text search criteria
    return state;
  }
  function handleItemsChange(items, previousItems, state, context) {
    var _state$selectedValues;
    const {
      itemComparer,
      focusManagement
    } = context;
    let newHighlightedValue = null;
    if (state.highlightedValue != null) {
      var _items$find;
      newHighlightedValue = (_items$find = items.find(item => itemComparer(item, state.highlightedValue))) != null ? _items$find : null;
    } else if (focusManagement === 'DOM' && previousItems.length === 0) {
      newHighlightedValue = moveHighlight(null, 'reset', context);
    }

    // exclude selected values that are no longer in the items list
    const selectedValues = (_state$selectedValues = state.selectedValues) != null ? _state$selectedValues : [];
    const newSelectedValues = selectedValues.filter(selectedValue => items.some(item => itemComparer(item, selectedValue)));
    return _extends$1({}, state, {
      highlightedValue: newHighlightedValue,
      selectedValues: newSelectedValues
    });
  }
  function handleResetHighlight(state, context) {
    return _extends$1({}, state, {
      highlightedValue: moveHighlight(null, 'reset', context)
    });
  }
  function handleHighlightLast(state, context) {
    return _extends$1({}, state, {
      highlightedValue: moveHighlight(null, 'end', context)
    });
  }
  function handleClearSelection(state, context) {
    return _extends$1({}, state, {
      selectedValues: [],
      highlightedValue: moveHighlight(null, 'reset', context)
    });
  }
  function listReducer(state, action) {
    const {
      type,
      context
    } = action;
    switch (type) {
      case ListActionTypes.keyDown:
        return handleKeyDown(action.key, state, context);
      case ListActionTypes.itemClick:
        return handleItemSelection(action.item, state, context);
      case ListActionTypes.blur:
        return handleBlur(state, context);
      case ListActionTypes.textNavigation:
        return handleTextNavigation(state, action.searchString, context);
      case ListActionTypes.itemsChange:
        return handleItemsChange(action.items, action.previousItems, state, context);
      case ListActionTypes.resetHighlight:
        return handleResetHighlight(state, context);
      case ListActionTypes.highlightLast:
        return handleHighlightLast(state, context);
      case ListActionTypes.clearSelection:
        return handleClearSelection(state, context);
      default:
        return state;
    }
  }

  const TEXT_NAVIGATION_RESET_TIMEOUT = 500; // milliseconds

  /**
   * @ignore - internal hook.
   *
   * Provides a handler for text navigation.
   * It's used to navigate a list by typing the first letters of the options.
   *
   * @param callback A function to be called when the navigation should be performed.
   * @returns A function to be used in a keydown event handler.
   */
  function useTextNavigation(callback) {
    const textCriteriaRef = React__namespace.useRef({
      searchString: '',
      lastTime: null
    });
    return React__namespace.useCallback(event => {
      if (event.key.length === 1 && event.key !== ' ') {
        const textCriteria = textCriteriaRef.current;
        const lowerKey = event.key.toLowerCase();
        const currentTime = performance.now();
        if (textCriteria.searchString.length > 0 && textCriteria.lastTime && currentTime - textCriteria.lastTime > TEXT_NAVIGATION_RESET_TIMEOUT) {
          textCriteria.searchString = lowerKey;
        } else if (textCriteria.searchString.length !== 1 || lowerKey !== textCriteria.searchString) {
          // If there is just one character in the buffer and the key is the same, do not append
          textCriteria.searchString += lowerKey;
        }
        textCriteria.lastTime = currentTime;
        callback(textCriteria.searchString, event);
      }
    }, [callback]);
  }

  const EMPTY_OBJECT = {};
  const NOOP = () => {};
  const defaultItemComparer = (optionA, optionB) => optionA === optionB;
  const defaultIsItemDisabled = () => false;
  const defaultItemStringifier = item => typeof item === 'string' ? item : String(item);
  const defaultGetInitialState = () => ({
    highlightedValue: null,
    selectedValues: []
  });

  /**
   * The useList is a lower-level utility that is used to build list-like components.
   * It's used to manage the state of the list and its items.
   *
   * Supports highlighting a single item and selecting an arbitrary number of items.
   *
   * The state of the list is managed by a controllable reducer - that is a reducer that can have its state
   * controlled from outside.
   *
   * By default, the state consists of `selectedValues` and `highlightedValue` but can be extended by the caller of the hook.
   * Also the actions that can be dispatched and the reducer function can be defined externally.
   *
   * @template ItemValue The type of the item values.
   * @template State The type of the list state. This should be a subtype of `ListState<ItemValue>`.
   * @template CustomAction The type of the actions that can be dispatched (besides the standard ListAction).
   * @template CustomActionContext The shape of additional properties that will be added to actions when dispatched.
   *
   * @ignore - internal hook.
   */
  function useList(params) {
    const {
      controlledProps = EMPTY_OBJECT,
      disabledItemsFocusable = false,
      disableListWrap = false,
      focusManagement = 'activeDescendant',
      getInitialState = defaultGetInitialState,
      getItemDomElement,
      getItemId,
      isItemDisabled = defaultIsItemDisabled,
      rootRef: externalListRef,
      onStateChange = NOOP,
      items,
      itemComparer = defaultItemComparer,
      getItemAsString = defaultItemStringifier,
      onChange,
      onHighlightChange,
      onItemsChange,
      orientation = 'vertical',
      pageSize = 5,
      reducerActionContext = EMPTY_OBJECT,
      selectionMode = 'single',
      stateReducer: externalReducer,
      componentName = 'useList'
    } = params;
    const listRef = React__namespace.useRef(null);
    const handleRef = useForkRef(externalListRef, listRef);
    const handleHighlightChange = React__namespace.useCallback((event, value, reason) => {
      onHighlightChange == null || onHighlightChange(event, value, reason);
      if (focusManagement === 'DOM' && value != null && (reason === ListActionTypes.itemClick || reason === ListActionTypes.keyDown || reason === ListActionTypes.textNavigation)) {
        var _getItemDomElement;
        getItemDomElement == null || (_getItemDomElement = getItemDomElement(value)) == null || _getItemDomElement.focus();
      }
    }, [getItemDomElement, onHighlightChange, focusManagement]);
    const stateComparers = React__namespace.useMemo(() => ({
      highlightedValue: itemComparer,
      selectedValues: (valuesArray1, valuesArray2) => areArraysEqual(valuesArray1, valuesArray2, itemComparer)
    }), [itemComparer]);

    // This gets called whenever a reducer changes the state.
    const handleStateChange = React__namespace.useCallback((event, field, value, reason, state) => {
      onStateChange == null || onStateChange(event, field, value, reason, state);
      switch (field) {
        case 'highlightedValue':
          handleHighlightChange(event, value, reason);
          break;
        case 'selectedValues':
          onChange == null || onChange(event, value, reason);
          break;
      }
    }, [handleHighlightChange, onChange, onStateChange]);

    // The following object is added to each action when it's dispatched.
    // It's accessible in the reducer via the `action.context` field.
    const listActionContext = React__namespace.useMemo(() => {
      return {
        disabledItemsFocusable,
        disableListWrap,
        focusManagement,
        isItemDisabled,
        itemComparer,
        items,
        getItemAsString,
        onHighlightChange: handleHighlightChange,
        orientation,
        pageSize,
        selectionMode,
        stateComparers
      };
    }, [disabledItemsFocusable, disableListWrap, focusManagement, isItemDisabled, itemComparer, items, getItemAsString, handleHighlightChange, orientation, pageSize, selectionMode, stateComparers]);
    const initialState = getInitialState();
    const reducer = externalReducer != null ? externalReducer : listReducer;
    const actionContext = React__namespace.useMemo(() => _extends$1({}, reducerActionContext, listActionContext), [reducerActionContext, listActionContext]);
    const [state, dispatch] = useControllableReducer({
      reducer,
      actionContext,
      initialState: initialState,
      controlledProps,
      stateComparers,
      onStateChange: handleStateChange,
      componentName
    });
    const {
      highlightedValue,
      selectedValues
    } = state;
    const handleTextNavigation = useTextNavigation((searchString, event) => dispatch({
      type: ListActionTypes.textNavigation,
      event,
      searchString
    }));
    const previousItems = React__namespace.useRef([]);
    React__namespace.useEffect(() => {
      // Whenever the `items` object changes, we need to determine if the actual items changed.
      // If they did, we need to dispatch an `itemsChange` action, so the selected/highlighted state is updated.
      if (areArraysEqual(previousItems.current, items, itemComparer)) {
        return;
      }
      dispatch({
        type: ListActionTypes.itemsChange,
        event: null,
        items,
        previousItems: previousItems.current
      });
      previousItems.current = items;
      onItemsChange == null || onItemsChange(items);
    }, [items, itemComparer, dispatch, onItemsChange]);
    const createHandleKeyDown = externalHandlers => event => {
      var _externalHandlers$onK;
      (_externalHandlers$onK = externalHandlers.onKeyDown) == null || _externalHandlers$onK.call(externalHandlers, event);
      if (event.defaultMuiPrevented) {
        return;
      }
      const keysToPreventDefault = ['Home', 'End', 'PageUp', 'PageDown'];
      if (orientation === 'vertical') {
        keysToPreventDefault.push('ArrowUp', 'ArrowDown');
      } else {
        keysToPreventDefault.push('ArrowLeft', 'ArrowRight');
      }
      if (focusManagement === 'activeDescendant') {
        // When the child element is focused using the activeDescendant attribute,
        // the list handles keyboard events on its behalf.
        // We have to `preventDefault()` is this case to prevent the browser from
        // scrolling the view when space is pressed or submitting forms when enter is pressed.
        keysToPreventDefault.push(' ', 'Enter');
      }
      if (keysToPreventDefault.includes(event.key)) {
        event.preventDefault();
      }
      dispatch({
        type: ListActionTypes.keyDown,
        key: event.key,
        event
      });
      handleTextNavigation(event);
    };
    const createHandleBlur = externalHandlers => event => {
      var _externalHandlers$onB, _listRef$current;
      (_externalHandlers$onB = externalHandlers.onBlur) == null || _externalHandlers$onB.call(externalHandlers, event);
      if (event.defaultMuiPrevented) {
        return;
      }
      if ((_listRef$current = listRef.current) != null && _listRef$current.contains(event.relatedTarget)) {
        // focus remains within the list
        return;
      }
      dispatch({
        type: ListActionTypes.blur,
        event
      });
    };
    const getRootProps = (externalProps = {}) => {
      const externalEventHandlers = extractEventHandlers(externalProps);
      return _extends$1({}, externalProps, {
        'aria-activedescendant': focusManagement === 'activeDescendant' && highlightedValue != null ? getItemId(highlightedValue) : undefined,
        tabIndex: focusManagement === 'DOM' ? -1 : 0,
        ref: handleRef
      }, externalEventHandlers, {
        onBlur: createHandleBlur(externalEventHandlers),
        onKeyDown: createHandleKeyDown(externalEventHandlers)
      });
    };
    const getItemState = React__namespace.useCallback(item => {
      const selected = (selectedValues != null ? selectedValues : []).some(value => value != null && itemComparer(item, value));
      const highlighted = highlightedValue != null && itemComparer(item, highlightedValue);
      const focusable = focusManagement === 'DOM';
      return {
        focusable,
        highlighted,
        selected
      };
    }, [itemComparer, selectedValues, highlightedValue, focusManagement]);
    const contextValue = React__namespace.useMemo(() => ({
      dispatch,
      getItemState
    }), [dispatch, getItemState]);
    React__namespace.useDebugValue({
      state
    });
    return {
      contextValue,
      dispatch,
      getRootProps,
      rootRef: handleRef,
      state
    };
  }

  const ListContext = /*#__PURE__*/React__namespace.createContext(null);

  /**
   * Contains the logic for an item of a list-like component (for example Select, Menu, etc.).
   * It handles the item's mouse events and tab index.
   *
   * @template ItemValue The type of the item's value. This should be consistent with the type of useList's `items` parameter.
   * @ignore - internal hook.
   */
  function useListItem(parameters) {
    const {
      handlePointerOverEvents = false,
      item
    } = parameters;
    const listContext = React__namespace.useContext(ListContext);
    if (!listContext) {
      throw new Error('useListItem must be used within a ListProvider');
    }
    const {
      dispatch,
      getItemState
    } = listContext;
    const {
      highlighted,
      selected,
      focusable
    } = getItemState(item);
    const createHandleClick = React__namespace.useCallback(externalHandlers => event => {
      var _externalHandlers$onC;
      (_externalHandlers$onC = externalHandlers.onClick) == null || _externalHandlers$onC.call(externalHandlers, event);
      if (event.defaultPrevented) {
        return;
      }
      dispatch({
        type: ListActionTypes.itemClick,
        item: item,
        event
      });
    }, [dispatch, item]);
    const createHandlePointerOver = React__namespace.useCallback(externalHandlers => event => {
      var _externalHandlers$onM;
      (_externalHandlers$onM = externalHandlers.onMouseOver) == null || _externalHandlers$onM.call(externalHandlers, event);
      if (event.defaultPrevented) {
        return;
      }
      dispatch({
        type: ListActionTypes.itemHover,
        item: item,
        event
      });
    }, [dispatch, item]);
    let tabIndex;
    if (focusable) {
      tabIndex = highlighted ? 0 : -1;
    }
    const getRootProps = (externalProps = {}) => {
      const externalEventHandlers = extractEventHandlers(externalProps);
      return _extends$1({}, externalProps, {
        onClick: createHandleClick(externalEventHandlers),
        onPointerOver: handlePointerOverEvents ? createHandlePointerOver(externalEventHandlers) : undefined,
        tabIndex
      });
    };
    return {
      getRootProps,
      highlighted,
      selected
    };
  }

  function menuReducer(state, action) {
    if (action.type === ListActionTypes.itemHover) {
      return _extends$1({}, state, {
        highlightedValue: action.item
      });
    }
    const newState = listReducer(state, action);

    // make sure an item is always highlighted
    if (newState.highlightedValue === null && action.context.items.length > 0) {
      return _extends$1({}, newState, {
        highlightedValue: action.context.items[0]
      });
    }
    if (action.type === ListActionTypes.keyDown) {
      if (action.event.key === 'Escape') {
        return _extends$1({}, newState, {
          open: false
        });
      }
    }
    if (action.type === ListActionTypes.blur) {
      var _action$context$listb;
      if (!((_action$context$listb = action.context.listboxRef.current) != null && _action$context$listb.contains(action.event.relatedTarget))) {
        var _action$context$listb2, _action$event$related;
        // To prevent the menu from closing when the focus leaves the menu to the button.
        // For more details, see https://github.com/mui/material-ui/pull/36917#issuecomment-1566992698
        const listboxId = (_action$context$listb2 = action.context.listboxRef.current) == null ? void 0 : _action$context$listb2.getAttribute('id');
        const controlledBy = (_action$event$related = action.event.relatedTarget) == null ? void 0 : _action$event$related.getAttribute('aria-controls');
        if (listboxId && controlledBy && listboxId === controlledBy) {
          return newState;
        }
        return _extends$1({}, newState, {
          open: false,
          highlightedValue: action.context.items[0]
        });
      }
    }
    return newState;
  }

  const CompoundComponentContext = /*#__PURE__*/React__namespace.createContext(null);
  /**
   * Sorts the subitems by their position in the DOM.
   */
  function sortSubitems(subitems) {
    const subitemsArray = Array.from(subitems.keys()).map(key => {
      const subitem = subitems.get(key);
      return {
        key,
        subitem
      };
    });
    subitemsArray.sort((a, b) => {
      const aNode = a.subitem.ref.current;
      const bNode = b.subitem.ref.current;
      if (aNode === null || bNode === null || aNode === bNode) {
        return 0;
      }

      // eslint-disable-next-line no-bitwise
      return aNode.compareDocumentPosition(bNode) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
    });
    return new Map(subitemsArray.map(item => [item.key, item.subitem]));
  }

  /**
   * Provides a way for a component to know about its children.
   *
   * Child components register themselves with the `useCompoundItem` hook, passing in arbitrary metadata to the parent.
   *
   * This is a more powerful altervantive to `children` traversal, as child components don't have to be placed
   * directly inside the parent component. They can be anywhere in the tree (and even rendered by other components).
   *
   * The downside is that this doesn't work with SSR as it relies on the useEffect hook.
   *
   * @ignore - internal hook.
   */
  function useCompoundParent() {
    const [subitems, setSubitems] = React__namespace.useState(new Map());
    const subitemKeys = React__namespace.useRef(new Set());
    const deregisterItem = React__namespace.useCallback(function deregisterItem(id) {
      subitemKeys.current.delete(id);
      setSubitems(previousState => {
        const newState = new Map(previousState);
        newState.delete(id);
        return newState;
      });
    }, []);
    const registerItem = React__namespace.useCallback(function registerItem(id, item) {
      let providedOrGeneratedId;
      if (typeof id === 'function') {
        providedOrGeneratedId = id(subitemKeys.current);
      } else {
        providedOrGeneratedId = id;
      }
      subitemKeys.current.add(providedOrGeneratedId);
      setSubitems(previousState => {
        const newState = new Map(previousState);
        newState.set(providedOrGeneratedId, item);
        return newState;
      });
      return {
        id: providedOrGeneratedId,
        deregister: () => deregisterItem(providedOrGeneratedId)
      };
    }, [deregisterItem]);
    const sortedSubitems = React__namespace.useMemo(() => sortSubitems(subitems), [subitems]);
    const getItemIndex = React__namespace.useCallback(function getItemIndex(id) {
      return Array.from(sortedSubitems.keys()).indexOf(id);
    }, [sortedSubitems]);
    const contextValue = React__namespace.useMemo(() => ({
      getItemIndex,
      registerItem,
      totalSubitemCount: subitems.size
    }), [getItemIndex, registerItem, subitems.size]);
    return {
      contextValue,
      subitems: sortedSubitems
    };
  }

  /**
   * Registers a child component with the parent component.
   *
   * @param id A unique key for the child component. If the `id` is `undefined`, the registration logic will not run (this can sometimes be the case during SSR).
   *   This can be either a value, or a function that generates a value based on already registered siblings' ids.
   *   If a function, it's called with the set of the ids of all the items that have already been registered.
   *   Return `existingKeys.size` if you want to use the index of the new item as the id.
   * @param itemMetadata Arbitrary metadata to pass to the parent component. This should be a stable reference (for example a memoized object), to avoid unnecessary re-registrations.
   *
   * @ignore - internal hook.
   */
  function useCompoundItem(id, itemMetadata) {
    const context = React__namespace.useContext(CompoundComponentContext);
    if (context === null) {
      throw new Error('useCompoundItem must be used within a useCompoundParent');
    }
    const {
      registerItem
    } = context;
    const [registeredId, setRegisteredId] = React__namespace.useState(typeof id === 'function' ? undefined : id);
    useEnhancedEffect(() => {
      const {
        id: returnedId,
        deregister
      } = registerItem(id, itemMetadata);
      setRegisteredId(returnedId);
      return deregister;
    }, [registerItem, itemMetadata, id]);
    return {
      id: registeredId,
      index: registeredId !== undefined ? context.getItemIndex(registeredId) : -1,
      totalItemCount: context.totalSubitemCount
    };
  }

  /**
   * Combines the two get*Props functions from Base UI hooks into one.
   * Useful when a hook uses two other hooks behind the scenes
   * (such as useSelect that depends on useList and useButton for its root slot).
   *
   * The resulting function will return the combined props.
   * They are merged from left to right, similarly to how Object.assign works.
   *
   * The getSecondProps function will receive the result of the getFirstProps function as its argument,
   * so its event handlers can call the previous handlers and act depending on its result.
   *
   * @param getFirstProps - A getter function that returns the props for the first slot. It receives the external event handlers as its argument.
   * @param getSecondProps - A getter function that returns the props for the second slot. It receives the result of the getFirstProps function as its argument.
   */
  function combineHooksSlotProps(getFirstProps, getSecondProps) {
    return function getCombinedProps(external = {}) {
      const firstResult = _extends$1({}, external, getFirstProps(external));
      const result = _extends$1({}, firstResult, getSecondProps(firstResult));
      return result;
    };
  }

  const FALLBACK_MENU_CONTEXT$1 = {
    dispatch: () => {},
    popupId: '',
    registerPopup: () => {},
    registerTrigger: () => {},
    state: {
      open: true,
      changeReason: null
    },
    triggerElement: null
  };

  /**
   *
   * Demos:
   *
   * - [Menu](https://mui.com/base-ui/react-menu/#hooks)
   *
   * API:
   *
   * - [useMenu API](https://mui.com/base-ui/react-menu/hooks-api/#use-menu)
   */
  function useMenu(parameters = {}) {
    var _useId, _React$useContext;
    const {
      listboxRef: listboxRefProp,
      onItemsChange,
      id: idParam,
      disabledItemsFocusable = true,
      disableListWrap = false,
      autoFocus = true,
      componentName = 'useMenu'
    } = parameters;
    const rootRef = React__namespace.useRef(null);
    const handleRef = useForkRef(rootRef, listboxRefProp);
    const listboxId = (_useId = useId(idParam)) != null ? _useId : '';
    const {
      state: {
        open,
        changeReason
      },
      dispatch: menuDispatch,
      triggerElement,
      registerPopup
    } = (_React$useContext = React__namespace.useContext(DropdownContext)) != null ? _React$useContext : FALLBACK_MENU_CONTEXT$1;

    // store the initial open state to prevent focus stealing
    // (the first menu items gets focued only when the menu is opened by the user)
    const isInitiallyOpen = React__namespace.useRef(open);
    const {
      subitems,
      contextValue: compoundComponentContextValue
    } = useCompoundParent();
    const subitemKeys = React__namespace.useMemo(() => Array.from(subitems.keys()), [subitems]);
    const getItemDomElement = React__namespace.useCallback(itemId => {
      var _subitems$get$ref$cur, _subitems$get;
      if (itemId == null) {
        return null;
      }
      return (_subitems$get$ref$cur = (_subitems$get = subitems.get(itemId)) == null ? void 0 : _subitems$get.ref.current) != null ? _subitems$get$ref$cur : null;
    }, [subitems]);
    const isItemDisabled = React__namespace.useCallback(id => {
      var _subitems$get2;
      return (subitems == null || (_subitems$get2 = subitems.get(id)) == null ? void 0 : _subitems$get2.disabled) || false;
    }, [subitems]);
    const getItemAsString = React__namespace.useCallback(id => {
      var _subitems$get3, _subitems$get4;
      return ((_subitems$get3 = subitems.get(id)) == null ? void 0 : _subitems$get3.label) || ((_subitems$get4 = subitems.get(id)) == null || (_subitems$get4 = _subitems$get4.ref.current) == null ? void 0 : _subitems$get4.innerText);
    }, [subitems]);
    const reducerActionContext = React__namespace.useMemo(() => ({
      listboxRef: rootRef
    }), [rootRef]);
    const {
      dispatch: listDispatch,
      getRootProps: getListRootProps,
      contextValue: listContextValue,
      state: {
        highlightedValue
      },
      rootRef: mergedListRef
    } = useList({
      disabledItemsFocusable,
      disableListWrap,
      focusManagement: 'DOM',
      getItemDomElement,
      getInitialState: () => ({
        selectedValues: [],
        highlightedValue: null
      }),
      isItemDisabled,
      items: subitemKeys,
      getItemAsString,
      rootRef: handleRef,
      onItemsChange,
      reducerActionContext,
      selectionMode: 'none',
      stateReducer: menuReducer,
      componentName
    });
    useEnhancedEffect(() => {
      registerPopup(listboxId);
    }, [listboxId, registerPopup]);
    useEnhancedEffect(() => {
      if (open && (changeReason == null ? void 0 : changeReason.type) === 'keydown' && changeReason.key === 'ArrowUp') {
        listDispatch({
          type: ListActionTypes.highlightLast,
          event: changeReason
        });
      }
    }, [open, changeReason, listDispatch]);
    React__namespace.useEffect(() => {
      if (open && autoFocus && highlightedValue && !isInitiallyOpen.current) {
        var _subitems$get5;
        (_subitems$get5 = subitems.get(highlightedValue)) == null || (_subitems$get5 = _subitems$get5.ref) == null || (_subitems$get5 = _subitems$get5.current) == null || _subitems$get5.focus();
      }
    }, [open, autoFocus, highlightedValue, subitems, subitemKeys]);
    React__namespace.useEffect(() => {
      var _rootRef$current;
      // set focus to the highlighted item (but prevent stealing focus from other elements on the page)
      if ((_rootRef$current = rootRef.current) != null && _rootRef$current.contains(document.activeElement) && highlightedValue !== null) {
        var _subitems$get6;
        subitems == null || (_subitems$get6 = subitems.get(highlightedValue)) == null || (_subitems$get6 = _subitems$get6.ref.current) == null || _subitems$get6.focus();
      }
    }, [highlightedValue, subitems]);
    const createHandleBlur = otherHandlers => event => {
      var _otherHandlers$onBlur, _rootRef$current2;
      (_otherHandlers$onBlur = otherHandlers.onBlur) == null || _otherHandlers$onBlur.call(otherHandlers, event);
      if (event.defaultMuiPrevented) {
        return;
      }
      if ((_rootRef$current2 = rootRef.current) != null && _rootRef$current2.contains(event.relatedTarget) || event.relatedTarget === triggerElement) {
        return;
      }
      menuDispatch({
        type: DropdownActionTypes.blur,
        event
      });
    };
    const createHandleKeyDown = otherHandlers => event => {
      var _otherHandlers$onKeyD;
      (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
      if (event.defaultMuiPrevented) {
        return;
      }
      if (event.key === 'Escape') {
        menuDispatch({
          type: DropdownActionTypes.escapeKeyDown,
          event
        });
      }
    };
    const getOwnListboxHandlers = (otherHandlers = {}) => ({
      onBlur: createHandleBlur(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers)
    });
    const getListboxProps = (externalProps = {}) => {
      const getCombinedRootProps = combineHooksSlotProps(getOwnListboxHandlers, getListRootProps);
      const externalEventHandlers = extractEventHandlers(externalProps);
      return _extends$1({}, externalProps, externalEventHandlers, getCombinedRootProps(externalEventHandlers), {
        id: listboxId,
        role: 'menu'
      });
    };
    React__namespace.useDebugValue({
      subitems,
      highlightedValue
    });
    return {
      contextValue: _extends$1({}, compoundComponentContextValue, listContextValue),
      dispatch: listDispatch,
      getListboxProps,
      highlightedValue,
      listboxRef: mergedListRef,
      menuItems: subitems,
      open,
      triggerElement
    };
  }

  /**
   * Sets up the contexts for the underlying MenuItem components.
   *
   * @ignore - do not document.
   */
  function MenuProvider(props) {
    const {
      value,
      children
    } = props;
    const {
      dispatch,
      getItemIndex,
      getItemState,
      registerItem,
      totalSubitemCount
    } = value;
    const listContextValue = React__namespace.useMemo(() => ({
      dispatch,
      getItemState,
      getItemIndex
    }), [dispatch, getItemIndex, getItemState]);
    const compoundComponentContextValue = React__namespace.useMemo(() => ({
      getItemIndex,
      registerItem,
      totalSubitemCount
    }), [registerItem, getItemIndex, totalSubitemCount]);
    return /*#__PURE__*/require$$2$1.jsx(CompoundComponentContext.Provider, {
      value: compoundComponentContextValue,
      children: /*#__PURE__*/require$$2$1.jsx(ListContext.Provider, {
        value: listContextValue,
        children: children
      })
    });
  }

  function getContainer(container) {
    return typeof container === 'function' ? container() : container;
  }

  /**
   * Portals provide a first-class way to render children into a DOM node
   * that exists outside the DOM hierarchy of the parent component.
   *
   * Demos:
   *
   * - [Portal](https://mui.com/base-ui/react-portal/)
   *
   * API:
   *
   * - [Portal API](https://mui.com/base-ui/react-portal/components-api/#portal)
   */
  const Portal = /*#__PURE__*/React__namespace.forwardRef(function Portal(props, forwardedRef) {
    const {
      children,
      container,
      disablePortal = false
    } = props;
    const [mountNode, setMountNode] = React__namespace.useState(null);
    // @ts-expect-error TODO upstream fix
    const handleRef = useForkRef( /*#__PURE__*/React__namespace.isValidElement(children) ? children.ref : null, forwardedRef);
    useEnhancedEffect(() => {
      if (!disablePortal) {
        setMountNode(getContainer(container) || document.body);
      }
    }, [container, disablePortal]);
    useEnhancedEffect(() => {
      if (mountNode && !disablePortal) {
        setRef(forwardedRef, mountNode);
        return () => {
          setRef(forwardedRef, null);
        };
      }
      return undefined;
    }, [forwardedRef, mountNode, disablePortal]);
    if (disablePortal) {
      if ( /*#__PURE__*/React__namespace.isValidElement(children)) {
        const newProps = {
          ref: handleRef
        };
        return /*#__PURE__*/React__namespace.cloneElement(children, newProps);
      }
      return /*#__PURE__*/require$$2$1.jsx(React__namespace.Fragment, {
        children: children
      });
    }
    return /*#__PURE__*/require$$2$1.jsx(React__namespace.Fragment, {
      children: mountNode ? /*#__PURE__*/ReactDOM__namespace.createPortal(children, mountNode) : mountNode
    });
  });

  /**
   *
   * Demos:
   *
   * - [Menu](https://mui.com/base-ui/react-menu/#hooks)
   *
   * API:
   *
   * - [useMenuButton API](https://mui.com/base-ui/react-menu/hooks-api/#use-menu-button)
   */
  function useMenuButton(parameters = {}) {
    const {
      disabled = false,
      focusableWhenDisabled,
      rootRef: externalRef
    } = parameters;
    const menuContext = React__namespace.useContext(DropdownContext);
    if (menuContext === null) {
      throw new Error('useMenuButton: no menu context available.');
    }
    const {
      state,
      dispatch,
      registerTrigger,
      popupId
    } = menuContext;
    const {
      getRootProps: getButtonRootProps,
      rootRef: buttonRootRef,
      active
    } = useButton({
      disabled,
      focusableWhenDisabled,
      rootRef: externalRef
    });
    const handleRef = useForkRef(buttonRootRef, registerTrigger);
    const createHandleClick = otherHandlers => event => {
      var _otherHandlers$onClic;
      (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
      if (event.defaultMuiPrevented) {
        return;
      }
      dispatch({
        type: DropdownActionTypes.toggle,
        event
      });
    };
    const createHandleKeyDown = otherHandlers => event => {
      var _otherHandlers$onKeyD;
      (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
      if (event.defaultMuiPrevented) {
        return;
      }
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        dispatch({
          type: DropdownActionTypes.open,
          event
        });
      }
    };
    const getOwnRootProps = (otherHandlers = {}) => ({
      onClick: createHandleClick(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers)
    });
    const getRootProps = (externalProps = {}) => {
      const externalEventHandlers = extractEventHandlers(externalProps);
      const getCombinedProps = combineHooksSlotProps(getOwnRootProps, getButtonRootProps);
      return _extends$1({
        'aria-haspopup': 'menu',
        'aria-expanded': state.open,
        'aria-controls': popupId
      }, externalProps, externalEventHandlers, getCombinedProps(externalEventHandlers), {
        tabIndex: 0,
        // this is needed to make the button focused after click in Safari
        ref: handleRef
      });
    };
    return {
      active,
      getRootProps,
      open: state.open,
      rootRef: handleRef
    };
  }

  function idGenerator(existingKeys) {
    return `menu-item-${existingKeys.size}`;
  }
  const FALLBACK_MENU_CONTEXT = {
    dispatch: () => {},
    popupId: '',
    registerPopup: () => {},
    registerTrigger: () => {},
    state: {
      open: true,
      changeReason: null
    },
    triggerElement: null
  };

  /**
   *
   * Demos:
   *
   * - [Menu](https://mui.com/base-ui/react-menu/#hooks)
   *
   * API:
   *
   * - [useMenuItem API](https://mui.com/base-ui/react-menu/hooks-api/#use-menu-item)
   */
  function useMenuItem(params) {
    var _React$useContext;
    const {
      disabled = false,
      id: idParam,
      rootRef: externalRef,
      label,
      disableFocusOnHover = false
    } = params;
    const id = useId(idParam);
    const itemRef = React__namespace.useRef(null);
    const itemMetadata = React__namespace.useMemo(() => ({
      disabled,
      id: id != null ? id : '',
      label,
      ref: itemRef
    }), [disabled, id, label]);
    const {
      dispatch
    } = (_React$useContext = React__namespace.useContext(DropdownContext)) != null ? _React$useContext : FALLBACK_MENU_CONTEXT;
    const {
      getRootProps: getListRootProps,
      highlighted
    } = useListItem({
      item: id,
      handlePointerOverEvents: !disableFocusOnHover
    });
    const {
      index,
      totalItemCount
    } = useCompoundItem(id != null ? id : idGenerator, itemMetadata);
    const {
      getRootProps: getButtonProps,
      focusVisible,
      rootRef: buttonRefHandler
    } = useButton({
      disabled,
      focusableWhenDisabled: true
    });
    const handleRef = useForkRef(buttonRefHandler, externalRef, itemRef);
    React__namespace.useDebugValue({
      id,
      highlighted,
      disabled,
      label
    });
    const createHandleClick = otherHandlers => event => {
      var _otherHandlers$onClic;
      (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
      if (event.defaultMuiPrevented) {
        return;
      }
      dispatch({
        type: DropdownActionTypes.close,
        event
      });
    };
    const getOwnHandlers = (otherHandlers = {}) => _extends$1({}, otherHandlers, {
      onClick: createHandleClick(otherHandlers)
    });
    function getRootProps(externalProps = {}) {
      const externalEventHandlers = extractEventHandlers(externalProps);
      const getCombinedRootProps = combineHooksSlotProps(getOwnHandlers, combineHooksSlotProps(getButtonProps, getListRootProps));
      return _extends$1({}, externalProps, externalEventHandlers, getCombinedRootProps(externalEventHandlers), {
        id,
        ref: handleRef,
        role: 'menuitem'
      });
    }

    // If `id` is undefined (during SSR in React < 18), we fall back to rendering a simplified menu item
    // which does not have access to infortmation about its position or highlighted state.
    if (id === undefined) {
      return {
        getRootProps,
        disabled: false,
        focusVisible,
        highlighted: false,
        index: -1,
        totalItemCount: 0,
        rootRef: handleRef
      };
    }
    return {
      getRootProps,
      disabled,
      focusVisible,
      highlighted,
      index,
      totalItemCount,
      rootRef: handleRef
    };
  }

  /**
   * Stabilizes the ListContext value for the MenuItem component, so it doesn't change when sibling items update.
   *
   * @param id The id of the MenuItem. If undefined, it will be generated with useId.
   * @returns The stable ListContext value and the id of the MenuItem.
   *
   * Demos:
   *
   * - [Menu](https://mui.com/base-ui/react-menu/#hooks)
   *
   * API:
   *
   * - [useMenuItemContextStabilizer API](https://mui.com/base-ui/react-menu/hooks-api/#use-menu-item-context-stabilizer)
   */
  function useMenuItemContextStabilizer(id) {
    const listContext = React__namespace.useContext(ListContext);
    if (!listContext) {
      throw new Error('MenuItem: ListContext was not found.');
    }
    const itemId = useId(id);
    const {
      getItemState,
      dispatch
    } = listContext;
    let itemState;
    if (itemId != null) {
      itemState = getItemState(itemId);
    } else {
      itemState = {
        focusable: true,
        highlighted: false,
        selected: false
      };
    }
    const {
      highlighted,
      selected,
      focusable
    } = itemState;

    // The local version of getItemState can be only called with the current Option's value.
    // It doesn't make much sense to render an Option depending on other Options' state anyway.
    const localGetItemState = React__namespace.useCallback(itemValue => {
      if (itemValue !== itemId) {
        throw new Error(['Base UI MenuItem: Tried to access the state of another MenuItem.', `itemValue: ${itemValue} | id: ${itemId}`, 'This is unsupported when the MenuItem uses the MenuItemContextStabilizer as a performance optimization.'].join('/n'));
      }
      return {
        highlighted,
        selected,
        focusable
      };
    }, [highlighted, selected, focusable, itemId]);

    // Create a local (per MenuItem) instance of the ListContext that changes only when
    // the getItemState's return value changes.
    // This makes MenuItems re-render only when their state actually change, not when any MenuItem's state changes.
    const localContextValue = React__namespace.useMemo(() => ({
      dispatch,
      getItemState: localGetItemState
    }), [dispatch, localGetItemState]);
    return {
      contextValue: localContextValue,
      id: itemId
    };
  }

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement$1(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement$1(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement$1(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$2,
    requires: ['computeStyles']
  };

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  var max = Math.max;
  var min = Math.min;
  var round$1 = Math.round;

  function getUAString() {
    var uaData = navigator.userAgentData;

    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function (item) {
        return item.brand + "/" + item.version;
      }).join(' ');
    }

    return navigator.userAgent;
  }

  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }

    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }

    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;

    if (includeScale && isHTMLElement$1(element)) {
      scaleX = element.offsetWidth > 0 ? round$1(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round$1(clientRect.height) / element.offsetHeight || 1 : 1;
    }

    var _ref = isElement(element) ? getWindow(element) : window,
        visualViewport = _ref.visualViewport;

    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width: width,
      height: height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x: x,
      y: y
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement$1(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());

    if (isIE && isHTMLElement$1(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }

    while (isHTMLElement$1(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$1(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$1,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x,
        y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round$1(x * dpr) / dpr || 0,
      y: round$1(y * dpr) / dpr || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        variation = _ref2.variation,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets,
        isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x,
        x = _offsets$x === void 0 ? 0 : _offsets$x,
        _offsets$y = offsets.y,
        y = _offsets$y === void 0 ? 0 : _offsets$y;

    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
      x: x,
      y: y
    }) : {
      x: x,
      y: y
    };

    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
        offsetParent[heightProp];
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
        offsetParent[widthProp];
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x,
      y: y
    }, getWindow(popper)) : {
      x: x,
      y: y
    };

    x = _ref4.x;
    y = _ref4.y;

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref5) {
    var state = _ref5.state,
        options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration,
      isFixed: state.options.strategy === 'fixed'
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();

      if (layoutViewport || !layoutViewport && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement$1(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === 'fixed');
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement$1(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$strategy = _options.strategy,
        strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis) {
      var _offsetModifierState$;

      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = offset + overflow[mainSide];
      var max$1 = offset - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _offsetModifierState$2;

      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _len = altAxis === 'y' ? 'height' : 'width';

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement$1(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round$1(rect.width) / element.offsetWidth || 1;
    var scaleY = round$1(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var isOffsetParentAnElement = isHTMLElement$1(offsetParent);
    var offsetParentIsScaled = isHTMLElement$1(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement$1(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref) {
          var name = _ref.name,
              _ref$options = _ref.options,
              options = _ref$options === void 0 ? {} : _ref$options,
              effect = _ref.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  const COMPONENT_NAME = 'Popper';
  function getPopperUtilityClass(slot) {
    return generateUtilityClass(COMPONENT_NAME, slot);
  }
  generateUtilityClasses(COMPONENT_NAME, ['root']);

  const _excluded$G = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"],
    _excluded2$4 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
  function flipPlacement(placement, direction) {
    if (direction === 'ltr') {
      return placement;
    }
    switch (placement) {
      case 'bottom-end':
        return 'bottom-start';
      case 'bottom-start':
        return 'bottom-end';
      case 'top-end':
        return 'top-start';
      case 'top-start':
        return 'top-end';
      default:
        return placement;
    }
  }
  function resolveAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
  }
  function isHTMLElement(element) {
    return element.nodeType !== undefined;
  }
  const useUtilityClasses$q = () => {
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, useClassNamesOverride(getPopperUtilityClass));
  };
  const defaultPopperOptions = {};
  const PopperTooltip = /*#__PURE__*/React__namespace.forwardRef(function PopperTooltip(props, forwardedRef) {
    var _slots$root;
    const {
        anchorEl,
        children,
        direction,
        disablePortal,
        modifiers,
        open,
        placement: initialPlacement,
        popperOptions,
        popperRef: popperRefProp,
        slotProps = {},
        slots = {},
        TransitionProps
        // @ts-ignore internal logic
        // prevent from spreading to DOM, it can come from the parent component e.g. Select.
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$G);
    const tooltipRef = React__namespace.useRef(null);
    const ownRef = useForkRef(tooltipRef, forwardedRef);
    const popperRef = React__namespace.useRef(null);
    const handlePopperRef = useForkRef(popperRef, popperRefProp);
    const handlePopperRefRef = React__namespace.useRef(handlePopperRef);
    useEnhancedEffect(() => {
      handlePopperRefRef.current = handlePopperRef;
    }, [handlePopperRef]);
    React__namespace.useImperativeHandle(popperRefProp, () => popperRef.current, []);
    const rtlPlacement = flipPlacement(initialPlacement, direction);
    /**
     * placement initialized from prop but can change during lifetime if modifiers.flip.
     * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
     */
    const [placement, setPlacement] = React__namespace.useState(rtlPlacement);
    const [resolvedAnchorElement, setResolvedAnchorElement] = React__namespace.useState(resolveAnchorEl(anchorEl));
    React__namespace.useEffect(() => {
      if (popperRef.current) {
        popperRef.current.forceUpdate();
      }
    });
    React__namespace.useEffect(() => {
      if (anchorEl) {
        setResolvedAnchorElement(resolveAnchorEl(anchorEl));
      }
    }, [anchorEl]);
    useEnhancedEffect(() => {
      if (!resolvedAnchorElement || !open) {
        return undefined;
      }
      const handlePopperUpdate = data => {
        setPlacement(data.placement);
      };
      let popperModifiers = [{
        name: 'preventOverflow',
        options: {
          altBoundary: disablePortal
        }
      }, {
        name: 'flip',
        options: {
          altBoundary: disablePortal
        }
      }, {
        name: 'onUpdate',
        enabled: true,
        phase: 'afterWrite',
        fn: ({
          state
        }) => {
          handlePopperUpdate(state);
        }
      }];
      if (modifiers != null) {
        popperModifiers = popperModifiers.concat(modifiers);
      }
      if (popperOptions && popperOptions.modifiers != null) {
        popperModifiers = popperModifiers.concat(popperOptions.modifiers);
      }
      const popper = createPopper(resolvedAnchorElement, tooltipRef.current, _extends$1({
        placement: rtlPlacement
      }, popperOptions, {
        modifiers: popperModifiers
      }));
      handlePopperRefRef.current(popper);
      return () => {
        popper.destroy();
        handlePopperRefRef.current(null);
      };
    }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
    const childProps = {
      placement: placement
    };
    if (TransitionProps !== null) {
      childProps.TransitionProps = TransitionProps;
    }
    const classes = useUtilityClasses$q();
    const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
    const rootProps = useSlotProps({
      elementType: Root,
      externalSlotProps: slotProps.root,
      externalForwardedProps: other,
      additionalProps: {
        role: 'tooltip',
        ref: ownRef
      },
      ownerState: props,
      className: classes.root
    });
    return /*#__PURE__*/require$$2$1.jsx(Root, _extends$1({}, rootProps, {
      children: typeof children === 'function' ? children(childProps) : children
    }));
  });

  /**
   * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v2/) for positioning.
   *
   * Demos:
   *
   * - [Popper](https://mui.com/base-ui/react-popper/)
   *
   * API:
   *
   * - [Popper API](https://mui.com/base-ui/react-popper/components-api/#popper)
   */
  const Popper = /*#__PURE__*/React__namespace.forwardRef(function Popper(props, forwardedRef) {
    const {
        anchorEl,
        children,
        container: containerProp,
        direction = 'ltr',
        disablePortal = false,
        keepMounted = false,
        modifiers,
        open,
        placement = 'bottom',
        popperOptions = defaultPopperOptions,
        popperRef,
        style,
        transition = false,
        slotProps = {},
        slots = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded2$4);
    const [exited, setExited] = React__namespace.useState(true);
    const handleEnter = () => {
      setExited(false);
    };
    const handleExited = () => {
      setExited(true);
    };
    if (!keepMounted && !open && (!transition || exited)) {
      return null;
    }

    // If the container prop is provided, use that
    // If the anchorEl prop is provided, use its parent body element as the container
    // If neither are provided let the Modal take care of choosing the container
    let container;
    if (containerProp) {
      container = containerProp;
    } else if (anchorEl) {
      const resolvedAnchorEl = resolveAnchorEl(anchorEl);
      container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
    }
    const display = !open && keepMounted && (!transition || exited) ? 'none' : undefined;
    const transitionProps = transition ? {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    } : undefined;
    return /*#__PURE__*/require$$2$1.jsx(Portal, {
      disablePortal: disablePortal,
      container: container,
      children: /*#__PURE__*/require$$2$1.jsx(PopperTooltip, _extends$1({
        anchorEl: anchorEl,
        direction: direction,
        disablePortal: disablePortal,
        modifiers: modifiers,
        ref: forwardedRef,
        open: transition ? !exited : open,
        placement: placement,
        popperOptions: popperOptions,
        popperRef: popperRef,
        slotProps: slotProps,
        slots: slots
      }, other, {
        style: _extends$1({
          // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
          position: 'fixed',
          // Fix Popper.js display issue
          top: 0,
          left: 0,
          display
        }, style),
        TransitionProps: transitionProps,
        children: children
      }))
    });
  });

  /**
   * The basic building block for creating custom switches.
   *
   * Demos:
   *
   * - [Switch](https://mui.com/base-ui/react-switch/#hook)
   *
   * API:
   *
   * - [useSwitch API](https://mui.com/base-ui/react-switch/hooks-api/#use-switch)
   */
  function useSwitch(props) {
    const {
      checked: checkedProp,
      defaultChecked,
      disabled,
      onBlur,
      onChange,
      onFocus,
      onFocusVisible,
      readOnly,
      required
    } = props;
    const [checked, setCheckedState] = useControlled({
      controlled: checkedProp,
      default: Boolean(defaultChecked),
      name: 'Switch',
      state: 'checked'
    });
    const createHandleInputChange = otherProps => event => {
      var _otherProps$onChange;
      // Workaround for https://github.com/facebook/react/issues/9023
      if (event.nativeEvent.defaultPrevented) {
        return;
      }
      setCheckedState(event.target.checked);
      onChange == null || onChange(event);
      (_otherProps$onChange = otherProps.onChange) == null || _otherProps$onChange.call(otherProps, event);
    };
    const {
      isFocusVisibleRef,
      onBlur: handleBlurVisible,
      onFocus: handleFocusVisible,
      ref: focusVisibleRef
    } = useIsFocusVisible();
    const [focusVisible, setFocusVisible] = React__namespace.useState(false);
    if (disabled && focusVisible) {
      setFocusVisible(false);
    }
    React__namespace.useEffect(() => {
      isFocusVisibleRef.current = focusVisible;
    }, [focusVisible, isFocusVisibleRef]);
    const inputRef = React__namespace.useRef(null);
    const createHandleFocus = otherProps => event => {
      var _otherProps$onFocus;
      // Fix for https://github.com/facebook/react/issues/7769
      if (!inputRef.current) {
        inputRef.current = event.currentTarget;
      }
      handleFocusVisible(event);
      if (isFocusVisibleRef.current === true) {
        setFocusVisible(true);
        onFocusVisible == null || onFocusVisible(event);
      }
      onFocus == null || onFocus(event);
      (_otherProps$onFocus = otherProps.onFocus) == null || _otherProps$onFocus.call(otherProps, event);
    };
    const createHandleBlur = otherProps => event => {
      var _otherProps$onBlur;
      handleBlurVisible(event);
      if (isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }
      onBlur == null || onBlur(event);
      (_otherProps$onBlur = otherProps.onBlur) == null || _otherProps$onBlur.call(otherProps, event);
    };
    const handleInputRef = useForkRef(focusVisibleRef, inputRef);
    const getInputProps = (otherProps = {}) => _extends$1({
      checked: checkedProp,
      defaultChecked,
      disabled,
      readOnly,
      ref: handleInputRef,
      required,
      type: 'checkbox',
      role: 'switch',
      'aria-checked': checkedProp
    }, otherProps, {
      onChange: createHandleInputChange(otherProps),
      onFocus: createHandleFocus(otherProps),
      onBlur: createHandleBlur(otherProps)
    });
    return {
      checked,
      disabled: Boolean(disabled),
      focusVisible,
      getInputProps,
      inputRef: handleInputRef,
      readOnly: Boolean(readOnly)
    };
  }

  const _excluded$F = ["onChange", "maxRows", "minRows", "style", "value"];
  function getStyleValue(value) {
    return parseInt(value, 10) || 0;
  }
  const styles = {
    shadow: {
      // Visibility needed to hide the extra text area on iPads
      visibility: 'hidden',
      // Remove from the content flow
      position: 'absolute',
      // Ignore the scrollbar width
      overflow: 'hidden',
      height: 0,
      top: 0,
      left: 0,
      // Create a new layer, increase the isolation of the computed values
      transform: 'translateZ(0)'
    }
  };
  function isEmpty$1(obj) {
    return obj === undefined || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflowing;
  }

  /**
   *
   * Demos:
   *
   * - [Textarea Autosize](https://mui.com/base-ui/react-textarea-autosize/)
   * - [Textarea Autosize](https://mui.com/material-ui/react-textarea-autosize/)
   *
   * API:
   *
   * - [TextareaAutosize API](https://mui.com/base-ui/react-textarea-autosize/components-api/#textarea-autosize)
   */
  const TextareaAutosize = /*#__PURE__*/React__namespace.forwardRef(function TextareaAutosize(props, forwardedRef) {
    const {
        onChange,
        maxRows,
        minRows = 1,
        style,
        value
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$F);
    const {
      current: isControlled
    } = React__namespace.useRef(value != null);
    const inputRef = React__namespace.useRef(null);
    const handleRef = useForkRef(forwardedRef, inputRef);
    const shadowRef = React__namespace.useRef(null);
    const calculateTextareaStyles = React__namespace.useCallback(() => {
      const input = inputRef.current;
      const containerWindow = ownerWindow(input);
      const computedStyle = containerWindow.getComputedStyle(input);

      // If input's width is shrunk and it's not visible, don't sync height.
      if (computedStyle.width === '0px') {
        return {
          outerHeightStyle: 0,
          overflowing: false
        };
      }
      const inputShallow = shadowRef.current;
      inputShallow.style.width = computedStyle.width;
      inputShallow.value = input.value || props.placeholder || 'x';
      if (inputShallow.value.slice(-1) === '\n') {
        // Certain fonts which overflow the line height will cause the textarea
        // to report a different scrollHeight depending on whether the last line
        // is empty. Make it non-empty to avoid this issue.
        inputShallow.value += ' ';
      }
      const boxSizing = computedStyle.boxSizing;
      const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
      const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);

      // The height of the inner content
      const innerHeight = inputShallow.scrollHeight;

      // Measure height of a textarea with a single row
      inputShallow.value = 'x';
      const singleRowHeight = inputShallow.scrollHeight;

      // The height of the outer content
      let outerHeight = innerHeight;
      if (minRows) {
        outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
      }
      if (maxRows) {
        outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
      }
      outerHeight = Math.max(outerHeight, singleRowHeight);

      // Take the box sizing into account for applying this value as a style.
      const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
      const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
      return {
        outerHeightStyle,
        overflowing
      };
    }, [maxRows, minRows, props.placeholder]);
    const syncHeight = React__namespace.useCallback(() => {
      const textareaStyles = calculateTextareaStyles();
      if (isEmpty$1(textareaStyles)) {
        return;
      }
      const input = inputRef.current;
      input.style.height = `${textareaStyles.outerHeightStyle}px`;
      input.style.overflow = textareaStyles.overflowing ? 'hidden' : '';
    }, [calculateTextareaStyles]);
    useEnhancedEffect(() => {
      const handleResize = () => {
        syncHeight();
      };
      // Workaround a "ResizeObserver loop completed with undelivered notifications" error
      // in test.
      // Note that we might need to use this logic in production per https://github.com/WICG/resize-observer/issues/38
      // Also see https://github.com/mui/mui-x/issues/8733
      let rAF;
      const debounceHandleResize = debounce$1(handleResize);
      const input = inputRef.current;
      const containerWindow = ownerWindow(input);
      containerWindow.addEventListener('resize', debounceHandleResize);
      let resizeObserver;
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(input);
      }
      return () => {
        debounceHandleResize.clear();
        cancelAnimationFrame(rAF);
        containerWindow.removeEventListener('resize', debounceHandleResize);
        if (resizeObserver) {
          resizeObserver.disconnect();
        }
      };
    }, [calculateTextareaStyles, syncHeight]);
    useEnhancedEffect(() => {
      syncHeight();
    });
    const handleChange = event => {
      if (!isControlled) {
        syncHeight();
      }
      if (onChange) {
        onChange(event);
      }
    };
    return /*#__PURE__*/require$$2$1.jsxs(React__namespace.Fragment, {
      children: [/*#__PURE__*/require$$2$1.jsx("textarea", _extends$1({
        value: value,
        onChange: handleChange,
        ref: handleRef
        // Apply the rows prop to get a "correct" first SSR paint
        ,
        rows: minRows,
        style: style
      }, other)), /*#__PURE__*/require$$2$1.jsx("textarea", {
        "aria-hidden": true,
        className: props.className,
        readOnly: true,
        ref: shadowRef,
        tabIndex: -1,
        style: _extends$1({}, styles.shadow, style, {
          paddingTop: 0,
          paddingBottom: 0
        })
      })]
    });
  });

  // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
  // Give up on IE11 support for this feature
  function stripDiacritics(string) {
    return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
  }
  function createFilterOptions(config = {}) {
    const {
      ignoreAccents = true,
      ignoreCase = true,
      limit,
      matchFrom = 'any',
      stringify,
      trim = false
    } = config;
    return (options, {
      inputValue,
      getOptionLabel
    }) => {
      let input = trim ? inputValue.trim() : inputValue;
      if (ignoreCase) {
        input = input.toLowerCase();
      }
      if (ignoreAccents) {
        input = stripDiacritics(input);
      }
      const filteredOptions = !input ? options : options.filter(option => {
        let candidate = (stringify || getOptionLabel)(option);
        if (ignoreCase) {
          candidate = candidate.toLowerCase();
        }
        if (ignoreAccents) {
          candidate = stripDiacritics(candidate);
        }
        return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
      });
      return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
    };
  }

  // To replace with .findIndex() once we stop IE11 support.
  function findIndex(array, comp) {
    for (let i = 0; i < array.length; i += 1) {
      if (comp(array[i])) {
        return i;
      }
    }
    return -1;
  }
  const defaultFilterOptions = createFilterOptions();

  // Number of options to jump in list box when `Page Up` and `Page Down` keys are used.
  const pageSize = 5;
  const defaultIsActiveElementInListbox$1 = listboxRef => {
    var _listboxRef$current$p;
    return listboxRef.current !== null && ((_listboxRef$current$p = listboxRef.current.parentElement) == null ? void 0 : _listboxRef$current$p.contains(document.activeElement));
  };
  function useAutocomplete(props) {
    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      unstable_isActiveElementInListbox = defaultIsActiveElementInListbox$1,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      unstable_classNamePrefix = 'Mui',
      autoComplete = false,
      autoHighlight = false,
      autoSelect = false,
      blurOnSelect = false,
      clearOnBlur = !props.freeSolo,
      clearOnEscape = false,
      componentName = 'useAutocomplete',
      defaultValue = props.multiple ? [] : null,
      disableClearable = false,
      disableCloseOnSelect = false,
      disabled: disabledProp,
      disabledItemsFocusable = false,
      disableListWrap = false,
      filterOptions = defaultFilterOptions,
      filterSelectedOptions = false,
      freeSolo = false,
      getOptionDisabled,
      getOptionKey,
      getOptionLabel: getOptionLabelProp = option => {
        var _option$label;
        return (_option$label = option.label) != null ? _option$label : option;
      },
      groupBy,
      handleHomeEndKeys = !props.freeSolo,
      id: idProp,
      includeInputInList = false,
      inputValue: inputValueProp,
      isOptionEqualToValue = (option, value) => option === value,
      multiple = false,
      onChange,
      onClose,
      onHighlightChange,
      onInputChange,
      onOpen,
      open: openProp,
      openOnFocus = false,
      options,
      readOnly = false,
      selectOnFocus = !props.freeSolo,
      value: valueProp
    } = props;
    const id = useId(idProp);
    let getOptionLabel = getOptionLabelProp;
    getOptionLabel = option => {
      const optionLabel = getOptionLabelProp(option);
      if (typeof optionLabel !== 'string') {
        return String(optionLabel);
      }
      return optionLabel;
    };
    const ignoreFocus = React__namespace.useRef(false);
    const firstFocus = React__namespace.useRef(true);
    const inputRef = React__namespace.useRef(null);
    const listboxRef = React__namespace.useRef(null);
    const [anchorEl, setAnchorEl] = React__namespace.useState(null);
    const [focusedTag, setFocusedTag] = React__namespace.useState(-1);
    const defaultHighlighted = autoHighlight ? 0 : -1;
    const highlightedIndexRef = React__namespace.useRef(defaultHighlighted);
    const [value, setValueState] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: componentName
    });
    const [inputValue, setInputValueState] = useControlled({
      controlled: inputValueProp,
      default: '',
      name: componentName,
      state: 'inputValue'
    });
    const [focused, setFocused] = React__namespace.useState(false);
    const resetInputValue = React__namespace.useCallback((event, newValue) => {
      // retain current `inputValue` if new option isn't selected and `clearOnBlur` is false
      // When `multiple` is enabled, `newValue` is an array of all selected items including the newly selected item
      const isOptionSelected = multiple ? value.length < newValue.length : newValue !== null;
      if (!isOptionSelected && !clearOnBlur) {
        return;
      }
      let newInputValue;
      if (multiple) {
        newInputValue = '';
      } else if (newValue == null) {
        newInputValue = '';
      } else {
        const optionLabel = getOptionLabel(newValue);
        newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
      }
      if (inputValue === newInputValue) {
        return;
      }
      setInputValueState(newInputValue);
      if (onInputChange) {
        onInputChange(event, newInputValue, 'reset');
      }
    }, [getOptionLabel, inputValue, multiple, onInputChange, setInputValueState, clearOnBlur, value]);
    const [open, setOpenState] = useControlled({
      controlled: openProp,
      default: false,
      name: componentName,
      state: 'open'
    });
    const [inputPristine, setInputPristine] = React__namespace.useState(true);
    const inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
    const popupOpen = open && !readOnly;
    const filteredOptions = popupOpen ? filterOptions(options.filter(option => {
      if (filterSelectedOptions && (multiple ? value : [value]).some(value2 => value2 !== null && isOptionEqualToValue(option, value2))) {
        return false;
      }
      return true;
    }),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: inputValueIsSelectedValue && inputPristine ? '' : inputValue,
      getOptionLabel
    }) : [];
    const previousProps = usePreviousProps({
      filteredOptions,
      value,
      inputValue
    });
    React__namespace.useEffect(() => {
      const valueChange = value !== previousProps.value;
      if (focused && !valueChange) {
        return;
      }

      // Only reset the input's value when freeSolo if the component's value changes.
      if (freeSolo && !valueChange) {
        return;
      }
      resetInputValue(null, value);
    }, [value, resetInputValue, focused, previousProps.value, freeSolo]);
    const listboxAvailable = open && filteredOptions.length > 0 && !readOnly;
    const focusTag = useEventCallback(tagToFocus => {
      if (tagToFocus === -1) {
        inputRef.current.focus();
      } else {
        anchorEl.querySelector(`[data-tag-index="${tagToFocus}"]`).focus();
      }
    });

    // Ensure the focusedTag is never inconsistent
    React__namespace.useEffect(() => {
      if (multiple && focusedTag > value.length - 1) {
        setFocusedTag(-1);
        focusTag(-1);
      }
    }, [value, multiple, focusedTag, focusTag]);
    function validOptionIndex(index, direction) {
      if (!listboxRef.current || index < 0 || index >= filteredOptions.length) {
        return -1;
      }
      let nextFocus = index;
      while (true) {
        const option = listboxRef.current.querySelector(`[data-option-index="${nextFocus}"]`);

        // Same logic as MenuList.js
        const nextFocusDisabled = disabledItemsFocusable ? false : !option || option.disabled || option.getAttribute('aria-disabled') === 'true';
        if (option && option.hasAttribute('tabindex') && !nextFocusDisabled) {
          // The next option is available
          return nextFocus;
        }

        // The next option is disabled, move to the next element.
        // with looped index
        if (direction === 'next') {
          nextFocus = (nextFocus + 1) % filteredOptions.length;
        } else {
          nextFocus = (nextFocus - 1 + filteredOptions.length) % filteredOptions.length;
        }

        // We end up with initial index, that means we don't have available options.
        // All of them are disabled
        if (nextFocus === index) {
          return -1;
        }
      }
    }
    const setHighlightedIndex = useEventCallback(({
      event,
      index,
      reason = 'auto'
    }) => {
      highlightedIndexRef.current = index;

      // does the index exist?
      if (index === -1) {
        inputRef.current.removeAttribute('aria-activedescendant');
      } else {
        inputRef.current.setAttribute('aria-activedescendant', `${id}-option-${index}`);
      }
      if (onHighlightChange) {
        onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
      }
      if (!listboxRef.current) {
        return;
      }
      const prev = listboxRef.current.querySelector(`[role="option"].${unstable_classNamePrefix}-focused`);
      if (prev) {
        prev.classList.remove(`${unstable_classNamePrefix}-focused`);
        prev.classList.remove(`${unstable_classNamePrefix}-focusVisible`);
      }
      let listboxNode = listboxRef.current;
      if (listboxRef.current.getAttribute('role') !== 'listbox') {
        listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]');
      }

      // "No results"
      if (!listboxNode) {
        return;
      }
      if (index === -1) {
        listboxNode.scrollTop = 0;
        return;
      }
      const option = listboxRef.current.querySelector(`[data-option-index="${index}"]`);
      if (!option) {
        return;
      }
      option.classList.add(`${unstable_classNamePrefix}-focused`);
      if (reason === 'keyboard') {
        option.classList.add(`${unstable_classNamePrefix}-focusVisible`);
      }

      // Scroll active descendant into view.
      // Logic copied from https://www.w3.org/WAI/content-assets/wai-aria-practices/patterns/combobox/examples/js/select-only.js
      // In case of mouse clicks and touch (in mobile devices) we avoid scrolling the element and keep both behaviors same.
      // Consider this API instead once it has a better browser support:
      // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });
      if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse' && reason !== 'touch') {
        const element = option;
        const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
        const elementBottom = element.offsetTop + element.offsetHeight;
        if (elementBottom > scrollBottom) {
          listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
        } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
          listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
        }
      }
    });
    const changeHighlightedIndex = useEventCallback(({
      event,
      diff,
      direction = 'next',
      reason = 'auto'
    }) => {
      if (!popupOpen) {
        return;
      }
      const getNextIndex = () => {
        const maxIndex = filteredOptions.length - 1;
        if (diff === 'reset') {
          return defaultHighlighted;
        }
        if (diff === 'start') {
          return 0;
        }
        if (diff === 'end') {
          return maxIndex;
        }
        const newIndex = highlightedIndexRef.current + diff;
        if (newIndex < 0) {
          if (newIndex === -1 && includeInputInList) {
            return -1;
          }
          if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
            return 0;
          }
          return maxIndex;
        }
        if (newIndex > maxIndex) {
          if (newIndex === maxIndex + 1 && includeInputInList) {
            return -1;
          }
          if (disableListWrap || Math.abs(diff) > 1) {
            return maxIndex;
          }
          return 0;
        }
        return newIndex;
      };
      const nextIndex = validOptionIndex(getNextIndex(), direction);
      setHighlightedIndex({
        index: nextIndex,
        reason,
        event
      });

      // Sync the content of the input with the highlighted option.
      if (autoComplete && diff !== 'reset') {
        if (nextIndex === -1) {
          inputRef.current.value = inputValue;
        } else {
          const option = getOptionLabel(filteredOptions[nextIndex]);
          inputRef.current.value = option;

          // The portion of the selected suggestion that has not been typed by the user,
          // a completion string, appears inline after the input cursor in the textbox.
          const index = option.toLowerCase().indexOf(inputValue.toLowerCase());
          if (index === 0 && inputValue.length > 0) {
            inputRef.current.setSelectionRange(inputValue.length, option.length);
          }
        }
      }
    });
    const getPreviousHighlightedOptionIndex = () => {
      const isSameValue = (value1, value2) => {
        const label1 = value1 ? getOptionLabel(value1) : '';
        const label2 = value2 ? getOptionLabel(value2) : '';
        return label1 === label2;
      };
      if (highlightedIndexRef.current !== -1 && previousProps.filteredOptions && previousProps.filteredOptions.length !== filteredOptions.length && previousProps.inputValue === inputValue && (multiple ? value.length === previousProps.value.length && previousProps.value.every((val, i) => getOptionLabel(value[i]) === getOptionLabel(val)) : isSameValue(previousProps.value, value))) {
        const previousHighlightedOption = previousProps.filteredOptions[highlightedIndexRef.current];
        if (previousHighlightedOption) {
          return findIndex(filteredOptions, option => {
            return getOptionLabel(option) === getOptionLabel(previousHighlightedOption);
          });
        }
      }
      return -1;
    };
    const syncHighlightedIndex = React__namespace.useCallback(() => {
      if (!popupOpen) {
        return;
      }

      // Check if the previously highlighted option still exists in the updated filtered options list and if the value and inputValue haven't changed
      // If it exists and the value and the inputValue haven't changed, just update its index, otherwise continue execution
      const previousHighlightedOptionIndex = getPreviousHighlightedOptionIndex();
      if (previousHighlightedOptionIndex !== -1) {
        highlightedIndexRef.current = previousHighlightedOptionIndex;
        return;
      }
      const valueItem = multiple ? value[0] : value;

      // The popup is empty, reset
      if (filteredOptions.length === 0 || valueItem == null) {
        changeHighlightedIndex({
          diff: 'reset'
        });
        return;
      }
      if (!listboxRef.current) {
        return;
      }

      // Synchronize the value with the highlighted index
      if (valueItem != null) {
        const currentOption = filteredOptions[highlightedIndexRef.current];

        // Keep the current highlighted index if possible
        if (multiple && currentOption && findIndex(value, val => isOptionEqualToValue(currentOption, val)) !== -1) {
          return;
        }
        const itemIndex = findIndex(filteredOptions, optionItem => isOptionEqualToValue(optionItem, valueItem));
        if (itemIndex === -1) {
          changeHighlightedIndex({
            diff: 'reset'
          });
        } else {
          setHighlightedIndex({
            index: itemIndex
          });
        }
        return;
      }

      // Prevent the highlighted index to leak outside the boundaries.
      if (highlightedIndexRef.current >= filteredOptions.length - 1) {
        setHighlightedIndex({
          index: filteredOptions.length - 1
        });
        return;
      }

      // Restore the focus to the previous index.
      setHighlightedIndex({
        index: highlightedIndexRef.current
      });
      // Ignore filteredOptions (and options, isOptionEqualToValue, getOptionLabel) not to break the scroll position
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
    // Only sync the highlighted index when the option switch between empty and not
    filteredOptions.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    multiple ? false : value, filterSelectedOptions, changeHighlightedIndex, setHighlightedIndex, popupOpen, inputValue, multiple]);
    const handleListboxRef = useEventCallback(node => {
      setRef(listboxRef, node);
      if (!node) {
        return;
      }
      syncHighlightedIndex();
    });
    React__namespace.useEffect(() => {
      syncHighlightedIndex();
    }, [syncHighlightedIndex]);
    const handleOpen = event => {
      if (open) {
        return;
      }
      setOpenState(true);
      setInputPristine(true);
      if (onOpen) {
        onOpen(event);
      }
    };
    const handleClose = (event, reason) => {
      if (!open) {
        return;
      }
      setOpenState(false);
      if (onClose) {
        onClose(event, reason);
      }
    };
    const handleValue = (event, newValue, reason, details) => {
      if (multiple) {
        if (value.length === newValue.length && value.every((val, i) => val === newValue[i])) {
          return;
        }
      } else if (value === newValue) {
        return;
      }
      if (onChange) {
        onChange(event, newValue, reason, details);
      }
      setValueState(newValue);
    };
    const isTouch = React__namespace.useRef(false);
    const selectNewValue = (event, option, reasonProp = 'selectOption', origin = 'options') => {
      let reason = reasonProp;
      let newValue = option;
      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        const itemIndex = findIndex(newValue, valueItem => isOptionEqualToValue(option, valueItem));
        if (itemIndex === -1) {
          newValue.push(option);
        } else if (origin !== 'freeSolo') {
          newValue.splice(itemIndex, 1);
          reason = 'removeOption';
        }
      }
      resetInputValue(event, newValue);
      handleValue(event, newValue, reason, {
        option
      });
      if (!disableCloseOnSelect && (!event || !event.ctrlKey && !event.metaKey)) {
        handleClose(event, reason);
      }
      if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
        inputRef.current.blur();
      }
    };
    function validTagIndex(index, direction) {
      if (index === -1) {
        return -1;
      }
      let nextFocus = index;
      while (true) {
        // Out of range
        if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
          return -1;
        }
        const option = anchorEl.querySelector(`[data-tag-index="${nextFocus}"]`);

        // Same logic as MenuList.js
        if (!option || !option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true') {
          nextFocus += direction === 'next' ? 1 : -1;
        } else {
          return nextFocus;
        }
      }
    }
    const handleFocusTag = (event, direction) => {
      if (!multiple) {
        return;
      }
      if (inputValue === '') {
        handleClose(event, 'toggleInput');
      }
      let nextTag = focusedTag;
      if (focusedTag === -1) {
        if (inputValue === '' && direction === 'previous') {
          nextTag = value.length - 1;
        }
      } else {
        nextTag += direction === 'next' ? 1 : -1;
        if (nextTag < 0) {
          nextTag = 0;
        }
        if (nextTag === value.length) {
          nextTag = -1;
        }
      }
      nextTag = validTagIndex(nextTag, direction);
      setFocusedTag(nextTag);
      focusTag(nextTag);
    };
    const handleClear = event => {
      ignoreFocus.current = true;
      setInputValueState('');
      if (onInputChange) {
        onInputChange(event, '', 'clear');
      }
      handleValue(event, multiple ? [] : null, 'clear');
    };
    const handleKeyDown = other => event => {
      if (other.onKeyDown) {
        other.onKeyDown(event);
      }
      if (event.defaultMuiPrevented) {
        return;
      }
      if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
        setFocusedTag(-1);
        focusTag(-1);
      }

      // Wait until IME is settled.
      if (event.which !== 229) {
        switch (event.key) {
          case 'Home':
            if (popupOpen && handleHomeEndKeys) {
              // Prevent scroll of the page
              event.preventDefault();
              changeHighlightedIndex({
                diff: 'start',
                direction: 'next',
                reason: 'keyboard',
                event
              });
            }
            break;
          case 'End':
            if (popupOpen && handleHomeEndKeys) {
              // Prevent scroll of the page
              event.preventDefault();
              changeHighlightedIndex({
                diff: 'end',
                direction: 'previous',
                reason: 'keyboard',
                event
              });
            }
            break;
          case 'PageUp':
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: -pageSize,
              direction: 'previous',
              reason: 'keyboard',
              event
            });
            handleOpen(event);
            break;
          case 'PageDown':
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: pageSize,
              direction: 'next',
              reason: 'keyboard',
              event
            });
            handleOpen(event);
            break;
          case 'ArrowDown':
            // Prevent cursor move
            event.preventDefault();
            changeHighlightedIndex({
              diff: 1,
              direction: 'next',
              reason: 'keyboard',
              event
            });
            handleOpen(event);
            break;
          case 'ArrowUp':
            // Prevent cursor move
            event.preventDefault();
            changeHighlightedIndex({
              diff: -1,
              direction: 'previous',
              reason: 'keyboard',
              event
            });
            handleOpen(event);
            break;
          case 'ArrowLeft':
            handleFocusTag(event, 'previous');
            break;
          case 'ArrowRight':
            handleFocusTag(event, 'next');
            break;
          case 'Enter':
            if (highlightedIndexRef.current !== -1 && popupOpen) {
              const option = filteredOptions[highlightedIndexRef.current];
              const disabled = getOptionDisabled ? getOptionDisabled(option) : false;

              // Avoid early form validation, let the end-users continue filling the form.
              event.preventDefault();
              if (disabled) {
                return;
              }
              selectNewValue(event, option, 'selectOption');

              // Move the selection to the end.
              if (autoComplete) {
                inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
              }
            } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
              if (multiple) {
                // Allow people to add new values before they submit the form.
                event.preventDefault();
              }
              selectNewValue(event, inputValue, 'createOption', 'freeSolo');
            }
            break;
          case 'Escape':
            if (popupOpen) {
              // Avoid Opera to exit fullscreen mode.
              event.preventDefault();
              // Avoid the Modal to handle the event.
              event.stopPropagation();
              handleClose(event, 'escape');
            } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
              // Avoid Opera to exit fullscreen mode.
              event.preventDefault();
              // Avoid the Modal to handle the event.
              event.stopPropagation();
              handleClear(event);
            }
            break;
          case 'Backspace':
            // Remove the value on the left of the "cursor"
            if (multiple && !readOnly && inputValue === '' && value.length > 0) {
              const index = focusedTag === -1 ? value.length - 1 : focusedTag;
              const newValue = value.slice();
              newValue.splice(index, 1);
              handleValue(event, newValue, 'removeOption', {
                option: value[index]
              });
            }
            break;
          case 'Delete':
            // Remove the value on the right of the "cursor"
            if (multiple && !readOnly && inputValue === '' && value.length > 0 && focusedTag !== -1) {
              const index = focusedTag;
              const newValue = value.slice();
              newValue.splice(index, 1);
              handleValue(event, newValue, 'removeOption', {
                option: value[index]
              });
            }
            break;
        }
      }
    };
    const handleFocus = event => {
      setFocused(true);
      if (openOnFocus && !ignoreFocus.current) {
        handleOpen(event);
      }
    };
    const handleBlur = event => {
      // Ignore the event when using the scrollbar with IE11
      if (unstable_isActiveElementInListbox(listboxRef)) {
        inputRef.current.focus();
        return;
      }
      setFocused(false);
      firstFocus.current = true;
      ignoreFocus.current = false;
      if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
        selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
      } else if (autoSelect && freeSolo && inputValue !== '') {
        selectNewValue(event, inputValue, 'blur', 'freeSolo');
      } else if (clearOnBlur) {
        resetInputValue(event, value);
      }
      handleClose(event, 'blur');
    };
    const handleInputChange = event => {
      const newValue = event.target.value;
      if (inputValue !== newValue) {
        setInputValueState(newValue);
        setInputPristine(false);
        if (onInputChange) {
          onInputChange(event, newValue, 'input');
        }
      }
      if (newValue === '') {
        if (!disableClearable && !multiple) {
          handleValue(event, null, 'clear');
        }
      } else {
        handleOpen(event);
      }
    };
    const handleOptionMouseMove = event => {
      const index = Number(event.currentTarget.getAttribute('data-option-index'));
      if (highlightedIndexRef.current !== index) {
        setHighlightedIndex({
          event,
          index,
          reason: 'mouse'
        });
      }
    };
    const handleOptionTouchStart = event => {
      setHighlightedIndex({
        event,
        index: Number(event.currentTarget.getAttribute('data-option-index')),
        reason: 'touch'
      });
      isTouch.current = true;
    };
    const handleOptionClick = event => {
      const index = Number(event.currentTarget.getAttribute('data-option-index'));
      selectNewValue(event, filteredOptions[index], 'selectOption');
      isTouch.current = false;
    };
    const handleTagDelete = index => event => {
      const newValue = value.slice();
      newValue.splice(index, 1);
      handleValue(event, newValue, 'removeOption', {
        option: value[index]
      });
    };
    const handlePopupIndicator = event => {
      if (open) {
        handleClose(event, 'toggleInput');
      } else {
        handleOpen(event);
      }
    };

    // Prevent input blur when interacting with the combobox
    const handleMouseDown = event => {
      // Prevent focusing the input if click is anywhere outside the Autocomplete
      if (!event.currentTarget.contains(event.target)) {
        return;
      }
      if (event.target.getAttribute('id') !== id) {
        event.preventDefault();
      }
    };

    // Focus the input when interacting with the combobox
    const handleClick = event => {
      // Prevent focusing the input if click is anywhere outside the Autocomplete
      if (!event.currentTarget.contains(event.target)) {
        return;
      }
      inputRef.current.focus();
      if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
        inputRef.current.select();
      }
      firstFocus.current = false;
    };
    const handleInputMouseDown = event => {
      if (!disabledProp && (inputValue === '' || !open)) {
        handlePopupIndicator(event);
      }
    };
    let dirty = freeSolo && inputValue.length > 0;
    dirty = dirty || (multiple ? value.length > 0 : value !== null);
    let groupedOptions = filteredOptions;
    if (groupBy) {
      groupedOptions = filteredOptions.reduce((acc, option, index) => {
        const group = groupBy(option);
        if (acc.length > 0 && acc[acc.length - 1].group === group) {
          acc[acc.length - 1].options.push(option);
        } else {
          acc.push({
            key: index,
            index,
            group,
            options: [option]
          });
        }
        return acc;
      }, []);
    }
    if (disabledProp && focused) {
      handleBlur();
    }
    return {
      getRootProps: (other = {}) => _extends$1({
        'aria-owns': listboxAvailable ? `${id}-listbox` : null
      }, other, {
        onKeyDown: handleKeyDown(other),
        onMouseDown: handleMouseDown,
        onClick: handleClick
      }),
      getInputLabelProps: () => ({
        id: `${id}-label`,
        htmlFor: id
      }),
      getInputProps: () => ({
        id,
        value: inputValue,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onChange: handleInputChange,
        onMouseDown: handleInputMouseDown,
        // if open then this is handled imperatively so don't let react override
        // only have an opinion about this when closed
        'aria-activedescendant': popupOpen ? '' : null,
        'aria-autocomplete': autoComplete ? 'both' : 'list',
        'aria-controls': listboxAvailable ? `${id}-listbox` : undefined,
        'aria-expanded': listboxAvailable,
        // Disable browser's suggestion that might overlap with the popup.
        // Handle autocomplete but not autofill.
        autoComplete: 'off',
        ref: inputRef,
        autoCapitalize: 'none',
        spellCheck: 'false',
        role: 'combobox',
        disabled: disabledProp
      }),
      getClearProps: () => ({
        tabIndex: -1,
        type: 'button',
        onClick: handleClear
      }),
      getPopupIndicatorProps: () => ({
        tabIndex: -1,
        type: 'button',
        onClick: handlePopupIndicator
      }),
      getTagProps: ({
        index
      }) => _extends$1({
        key: index,
        'data-tag-index': index,
        tabIndex: -1
      }, !readOnly && {
        onDelete: handleTagDelete(index)
      }),
      getListboxProps: () => ({
        role: 'listbox',
        id: `${id}-listbox`,
        'aria-labelledby': `${id}-label`,
        ref: handleListboxRef,
        onMouseDown: event => {
          // Prevent blur
          event.preventDefault();
        }
      }),
      getOptionProps: ({
        index,
        option
      }) => {
        var _getOptionKey;
        const selected = (multiple ? value : [value]).some(value2 => value2 != null && isOptionEqualToValue(option, value2));
        const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
        return {
          key: (_getOptionKey = getOptionKey == null ? void 0 : getOptionKey(option)) != null ? _getOptionKey : getOptionLabel(option),
          tabIndex: -1,
          role: 'option',
          id: `${id}-option-${index}`,
          onMouseMove: handleOptionMouseMove,
          onClick: handleOptionClick,
          onTouchStart: handleOptionTouchStart,
          'data-option-index': index,
          'aria-disabled': disabled,
          'aria-selected': selected
        };
      },
      id,
      inputValue,
      value,
      dirty,
      expanded: popupOpen && anchorEl,
      popupOpen,
      focused: focused || focusedTag !== -1,
      anchorEl,
      setAnchorEl,
      focusedTag,
      groupedOptions
    };
  }

  function getListItemUtilityClass(slot) {
    return generateUtilityClass$1('MuiListItem', slot);
  }
  const listItemClasses = generateUtilityClasses$1('MuiListItem', ['root', 'startAction', 'endAction', 'nested', 'nesting', 'sticky', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantSoft', 'variantOutlined', 'variantSolid']);

  const NestedListContext = /*#__PURE__*/React__namespace.createContext(false);

  const RowListContext = /*#__PURE__*/React__namespace.createContext(false);

  const WrapListContext = /*#__PURE__*/React__namespace.createContext(false);

  const ComponentListContext = /*#__PURE__*/React__namespace.createContext(undefined);

  const ListSubheaderContext = /*#__PURE__*/React__namespace.createContext(undefined);

  const GroupListContext = /*#__PURE__*/React__namespace.createContext(undefined);

  const _excluded$E = ["component", "className", "children", "nested", "sticky", "variant", "color", "startAction", "endAction", "role", "slots", "slotProps"];
  const useUtilityClasses$p = ownerState => {
    const {
      sticky,
      nested,
      nesting,
      variant,
      color
    } = ownerState;
    const slots = {
      root: ['root', nested && 'nested', nesting && 'nesting', sticky && 'sticky', color && `color${capitalize$1(color)}`, variant && `variant${capitalize$1(variant)}`],
      startAction: ['startAction'],
      endAction: ['endAction']
    };
    return composeClasses(slots, getListItemUtilityClass, {});
  };
  const StyledListItem = styled$1('li')(({
    theme,
    ownerState
  }) => {
    var _theme$variants;
    return [!ownerState.nested && {
      // add negative margin to ListItemButton equal to this ListItem padding
      '--ListItemButton-marginInline': `calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))`,
      '--ListItemButton-marginBlock': 'calc(-1 * var(--ListItem-paddingY))',
      alignItems: 'center',
      gap: 'var(--ListItem-gap)',
      marginInline: 'var(--ListItem-marginInline)'
    }, ownerState.nested && {
      // add negative margin to NestedList equal to this ListItem padding
      '--NestedList-marginRight': 'calc(-1 * var(--ListItem-paddingRight))',
      '--NestedList-marginLeft': 'calc(-1 * var(--ListItem-paddingLeft))',
      '--NestedListItem-paddingLeft': `calc(var(--ListItem-paddingLeft) + var(--List-nestedInsetStart))`,
      // add negative margin to ListItem, ListItemButton to make them start from the edge.
      '--ListItemButton-marginBlock': '0px',
      '--ListItemButton-marginInline': 'calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))',
      '--ListItem-marginInline': 'calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))',
      flexDirection: 'column'
    }, // Base styles
    _extends$1({
      // Integration with control elements, for example Checkbox, Radio.
      '--unstable_actionRadius': 'calc(var(--ListItem-radius) - var(--variant-borderWidth, 0px))'
    }, ownerState.startAction && {
      '--unstable_startActionWidth': '2rem' // to add sufficient padding-left on ListItemButton
    }, ownerState.endAction && {
      '--unstable_endActionWidth': '2.5rem' // to add sufficient padding-right on ListItemButton
    }, {
      boxSizing: 'border-box',
      borderRadius: 'var(--ListItem-radius)',
      display: 'var(--_ListItem-display)',
      '&:not([hidden])': {
        '--_ListItem-display': 'var(--_List-markerDisplay, flex)'
      },
      flex: 'none',
      // prevent children from shrinking when the List's height is limited.
      listStyleType: 'var(--_List-markerType, disc)',
      position: 'relative',
      paddingBlockStart: ownerState.nested ? 0 : 'var(--ListItem-paddingY)',
      paddingBlockEnd: ownerState.nested ? 0 : 'var(--ListItem-paddingY)',
      paddingInlineStart: 'var(--ListItem-paddingLeft)',
      paddingInlineEnd: 'var(--ListItem-paddingRight)'
    }, ownerState['data-first-child'] === undefined && _extends$1({}, ownerState.row ? {
      marginInlineStart: 'var(--List-gap)'
    } : {
      marginBlockStart: 'var(--List-gap)'
    }), ownerState.row && ownerState.wrap && {
      marginInlineStart: 'var(--List-gap)',
      marginBlockStart: 'var(--List-gap)'
    }, {
      minBlockSize: 'var(--ListItem-minHeight)'
    }, ownerState.sticky && {
      // sticky in list item can be found in grouped options
      position: 'sticky',
      top: 'var(--ListItem-stickyTop, 0px)',
      // integration with Menu and Select.
      zIndex: 1,
      background: `var(--ListItem-stickyBackground, ${theme.vars.palette.background.body})`
    }, {
      [`.${listItemClasses.nested} > &`]: {
        '--_ListItem-display': 'flex'
      }
    }), (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]];
  });
  const ListItemRoot = styled$1(StyledListItem, {
    name: 'JoyListItem',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({});
  const ListItemStartAction = styled$1('div', {
    name: 'JoyListItem',
    slot: 'StartAction',
    overridesResolver: (props, styles) => styles.startAction
  })(({
    ownerState
  }) => ({
    display: 'inherit',
    position: 'absolute',
    top: ownerState.nested ? 'calc(var(--ListItem-minHeight) / 2)' : '50%',
    left: 0,
    transform: 'translate(var(--ListItem-startActionTranslateX), -50%)',
    zIndex: 1 // to stay on top of ListItemButton (default `position: relative`).
  }));
  const ListItemEndAction = styled$1('div', {
    name: 'JoyListItem',
    slot: 'StartAction',
    overridesResolver: (props, styles) => styles.startAction
  })(({
    ownerState
  }) => ({
    display: 'inherit',
    position: 'absolute',
    top: ownerState.nested ? 'calc(var(--ListItem-minHeight) / 2)' : '50%',
    right: 0,
    transform: 'translate(var(--ListItem-endActionTranslateX), -50%)'
  }));
  /**
   *
   * Demos:
   *
   * - [Lists](https://mui.com/joy-ui/react-list/)
   *
   * API:
   *
   * - [ListItem API](https://mui.com/joy-ui/api/list-item/)
   */
  const ListItem = /*#__PURE__*/React__namespace.forwardRef(function ListItem(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoyListItem'
    });
    const group = React__namespace.useContext(GroupListContext);
    const listComponent = React__namespace.useContext(ComponentListContext);
    const row = React__namespace.useContext(RowListContext);
    const wrap = React__namespace.useContext(WrapListContext);
    const nesting = React__namespace.useContext(NestedListContext);
    const {
        component: componentProp,
        className,
        children,
        nested = false,
        sticky = false,
        variant = 'plain',
        color = 'neutral',
        startAction,
        endAction,
        role: roleProp,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$E);
    const [subheaderId, setSubheaderId] = React__namespace.useState('');
    const [listElement, listRole] = (listComponent == null ? void 0 : listComponent.split(':')) || ['', ''];
    const component = componentProp || (listElement && !listElement.match(/^(ul|ol|menu)$/) ? 'div' : undefined);
    let role = group === 'menu' ? 'none' : undefined;
    if (listComponent) {
      // ListItem can be used inside Menu to create nested menus, so it should have role="none"
      // https://www.w3.org/WAI/ARIA/apg/patterns/menubar/examples/menubar-navigation/
      role = {
        menu: 'none',
        menubar: 'none',
        group: 'presentation'
      }[listRole];
    }
    if (roleProp) {
      role = roleProp;
    }
    const ownerState = _extends$1({}, props, {
      sticky,
      startAction,
      endAction,
      row,
      wrap,
      variant,
      color,
      nesting,
      nested,
      component,
      role
    });
    const classes = useUtilityClasses$p(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      additionalProps: {
        role
      },
      ref,
      className: clsx(classes.root, className),
      elementType: ListItemRoot,
      externalForwardedProps,
      ownerState
    });
    const [SlotStartAction, startActionProps] = useSlot('startAction', {
      className: classes.startAction,
      elementType: ListItemStartAction,
      externalForwardedProps,
      ownerState
    });
    const [SlotEndAction, endActionProps] = useSlot('endAction', {
      className: classes.endAction,
      elementType: ListItemEndAction,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsx(ListSubheaderContext.Provider, {
      value: setSubheaderId,
      children: /*#__PURE__*/require$$2$1.jsx(NestedListContext.Provider, {
        value: nested ? subheaderId || true : false,
        children: /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
          children: [startAction && /*#__PURE__*/require$$2$1.jsx(SlotStartAction, _extends$1({}, startActionProps, {
            children: startAction
          })), React__namespace.Children.map(children, (child, index) => /*#__PURE__*/React__namespace.isValidElement(child) ? /*#__PURE__*/React__namespace.cloneElement(child, _extends$1({}, index === 0 && {
            'data-first-child': ''
          }, isMuiElement(child, ['ListItem']) && {
            // The ListItem of ListItem should not be 'li'
            component: child.props.component || 'div'
          })) : child), endAction && /*#__PURE__*/require$$2$1.jsx(SlotEndAction, _extends$1({}, endActionProps, {
            children: endAction
          }))]
        }))
      })
    });
  });

  // @ts-ignore internal logic to prevent <li> in <li>
  ListItem.muiName = 'ListItem';

  const scopedVariables = {
    '--NestedList-marginRight': '0px',
    '--NestedList-marginLeft': '0px',
    '--NestedListItem-paddingLeft': 'var(--ListItem-paddingX)',
    // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
    '--ListItemButton-marginBlock': '0px',
    '--ListItemButton-marginInline': '0px',
    '--ListItem-marginBlock': '0px',
    '--ListItem-marginInline': '0px'
  };
  /**
   * @ignore - internal component.
   */
  function ListProvider(props) {
    const {
      children,
      nested,
      row = false,
      wrap = false
    } = props;
    const baseProviders = /*#__PURE__*/require$$2$1.jsx(RowListContext.Provider, {
      value: row,
      children: /*#__PURE__*/require$$2$1.jsx(WrapListContext.Provider, {
        value: wrap,
        children: React__namespace.Children.map(children, (child, index) => /*#__PURE__*/React__namespace.isValidElement(child) ? /*#__PURE__*/React__namespace.cloneElement(child, _extends$1({}, index === 0 && {
          'data-first-child': ''
        }, index === React__namespace.Children.count(children) - 1 && {
          'data-last-child': ''
        })) : child)
      })
    });
    if (nested === undefined) {
      return baseProviders;
    }
    return /*#__PURE__*/require$$2$1.jsx(NestedListContext.Provider, {
      value: nested,
      children: baseProviders
    });
  }

  /**
   * internal utility
   *
   * Why? to read `sx` values and attach component's CSS variables
   *      e.g. <Card sx={{ borderRadius: 0 }} /> should attach
   *          `--Card-radius: 0px` so that developers don't have to remember
   *
   * Why not reuse `styleFunctionSx`?
   *     `styleFunctionSx` is more expensive as it iterates over all the keys
   */
  // eslint-disable-next-line import/prefer-default-export
  const resolveSxValue = ({
    theme,
    ownerState
  }, keys) => {
    let sxObject = {};
    function resolveSx(sxProp) {
      if (typeof sxProp === 'function') {
        const result = sxProp(theme);
        resolveSx(result);
      } else if (Array.isArray(sxProp)) {
        sxProp.forEach(sxItem => {
          if (typeof sxItem !== 'boolean') {
            resolveSx(sxItem);
          }
        });
      } else if (typeof sxProp === 'object') {
        sxObject = _extends$1({}, sxObject, sxProp);
      }
    }
    if (ownerState.sx) {
      resolveSx(ownerState.sx);
      keys.forEach(key => {
        const value = sxObject[key];
        if (typeof value === 'string' || typeof value === 'number') {
          if (key === 'borderRadius') {
            if (typeof value === 'number') {
              sxObject[key] = `${value}px`;
            } else {
              var _theme$vars;
              sxObject[key] = ((_theme$vars = theme.vars) == null ? void 0 : _theme$vars.radius[value]) || value;
            }
          } else if (['p', 'padding', 'm', 'margin'].indexOf(key) !== -1 && typeof value === 'number') {
            sxObject[key] = theme.spacing(value);
          } else {
            sxObject[key] = value;
          }
        } else if (typeof value === 'function') {
          sxObject[key] = value(theme);
        } else {
          sxObject[key] = undefined;
        }
      });
    }
    return sxObject;
  };

  function getListUtilityClass(slot) {
    return generateUtilityClass$1('MuiList', slot);
  }
  const listClasses = generateUtilityClasses$1('MuiList', ['root', 'nesting', 'scoped', 'sizeSm', 'sizeMd', 'sizeLg', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid', 'horizontal', 'vertical']);

  const RadioGroupContext = /*#__PURE__*/React__namespace.createContext(undefined);

  const _excluded$D = ["component", "className", "children", "size", "orientation", "wrap", "variant", "color", "role", "slots", "slotProps"];
  const useUtilityClasses$o = ownerState => {
    const {
      variant,
      color,
      size,
      nesting,
      orientation,
      instanceSize
    } = ownerState;
    const slots = {
      root: ['root', orientation, variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, !instanceSize && !nesting && size && `size${capitalize$1(size)}`, instanceSize && `size${capitalize$1(instanceSize)}`, nesting && 'nesting']
    };
    return composeClasses(slots, getListUtilityClass, {});
  };
  const StyledList = styled$1('ul')(({
    theme,
    ownerState
  }) => {
    var _theme$variants;
    const {
      p,
      padding,
      borderRadius
    } = resolveSxValue({
      theme,
      ownerState
    }, ['p', 'padding', 'borderRadius']);
    function applySizeVars(size) {
      if (size === 'sm') {
        return {
          '--ListDivider-gap': '0.25rem',
          '--ListItem-minHeight': '2rem',
          '--ListItem-paddingY': '3px',
          '--ListItem-paddingX': ownerState.marker ? '3px' : '0.5rem',
          '--ListItem-gap': '0.5rem',
          '--ListItemDecorator-size': ownerState.orientation === 'horizontal' ? '1.5rem' : '2rem',
          '--Icon-fontSize': theme.vars.fontSize.lg
        };
      }
      if (size === 'md') {
        return {
          '--ListDivider-gap': '0.375rem',
          '--ListItem-minHeight': '2.25rem',
          '--ListItem-paddingY': '0.25rem',
          '--ListItem-paddingX': ownerState.marker ? '0.25rem' : '0.75rem',
          '--ListItem-gap': '0.625rem',
          '--ListItemDecorator-size': ownerState.orientation === 'horizontal' ? '1.75rem' : '2.5rem',
          '--Icon-fontSize': theme.vars.fontSize.xl
        };
      }
      if (size === 'lg') {
        return {
          '--ListDivider-gap': '0.5rem',
          '--ListItem-minHeight': '2.75rem',
          '--ListItem-paddingY': '0.375rem',
          '--ListItem-paddingX': ownerState.marker ? '0.5rem' : '1rem',
          '--ListItem-gap': '0.75rem',
          '--ListItemDecorator-size': ownerState.orientation === 'horizontal' ? '2.25rem' : '3rem',
          '--Icon-fontSize': theme.vars.fontSize.xl2
        };
      }
      return {};
    }
    return [ownerState.nesting && _extends$1({}, applySizeVars(ownerState.instanceSize), {
      '--ListItem-paddingRight': 'var(--ListItem-paddingX)',
      '--ListItem-paddingLeft': 'var(--NestedListItem-paddingLeft)',
      // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
      '--ListItemButton-marginBlock': '0px',
      '--ListItemButton-marginInline': '0px',
      '--ListItem-marginBlock': '0px',
      '--ListItem-marginInline': '0px',
      padding: 0
    }, ownerState.marker && {
      paddingInlineStart: 'calc(3ch - var(--_List-markerDeduct, 0px))' // the width of the marker
    }, {
      marginInlineStart: 'var(--NestedList-marginLeft)',
      marginInlineEnd: 'var(--NestedList-marginRight)',
      marginBlockStart: 'var(--List-gap)',
      marginBlockEnd: 'initial' // reset user agent stylesheet.
    }), !ownerState.nesting && _extends$1({}, applySizeVars(ownerState.size), {
      '--List-gap': '0px',
      '--List-nestedInsetStart': '0px',
      '--ListItem-paddingLeft': 'var(--ListItem-paddingX)',
      '--ListItem-paddingRight': 'var(--ListItem-paddingX)'
    }, ownerState.marker && {
      '--_List-markerDeduct': '1ch'
    }, {
      // Automatic radius adjustment kicks in only if '--List-padding' and '--List-radius' are provided.
      '--unstable_List-childRadius': 'calc(max(var(--List-radius) - var(--List-padding), min(var(--List-padding) / 2, var(--List-radius) / 2)) - var(--variant-borderWidth, 0px))',
      '--ListItem-radius': 'var(--unstable_List-childRadius)',
      // by default, The ListItem & ListItemButton use automatic radius adjustment based on the parent List.
      '--ListItem-startActionTranslateX': 'calc(0.5 * var(--ListItem-paddingLeft))',
      '--ListItem-endActionTranslateX': 'calc(-0.5 * var(--ListItem-paddingRight))',
      margin: 'initial'
    }, theme.typography[`body-${ownerState.size}`], ownerState.orientation === 'horizontal' ? _extends$1({}, ownerState.wrap ? {
      padding: 'var(--List-padding)',
      // Fallback is not needed for row-wrap List
      marginInlineStart: 'calc(-1 * var(--List-gap))',
      marginBlockStart: 'calc(-1 * var(--List-gap))'
    } : {
      paddingInline: 'var(--List-padding, var(--ListDivider-gap))',
      paddingBlock: 'var(--List-padding)'
    }) : {
      paddingBlock: 'var(--List-padding, var(--ListDivider-gap))',
      paddingInline: 'var(--List-padding)'
    }, ownerState.marker && {
      paddingInlineStart: '3ch' // the width of the marker
    }), _extends$1({
      boxSizing: 'border-box',
      borderRadius: 'var(--List-radius)',
      listStyle: 'none',
      display: 'flex',
      flexDirection: ownerState.orientation === 'horizontal' ? 'row' : 'column'
    }, ownerState.wrap && {
      flexWrap: 'wrap'
    }, ownerState.marker && {
      '--_List-markerDisplay': 'list-item',
      '--_List-markerType': ownerState.marker,
      lineHeight: 'calc(var(--ListItem-minHeight) - 2 * var(--ListItem-paddingY))'
    }, {
      flexGrow: 1,
      position: 'relative'
    }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
      '--unstable_List-borderWidth': 'var(--variant-borderWidth, 0px)'
    }, borderRadius !== undefined && {
      '--List-radius': borderRadius
    }, p !== undefined && {
      '--List-padding': p
    }, padding !== undefined && {
      '--List-padding': padding
    })];
  });
  const ListRoot = styled$1(StyledList, {
    name: 'JoyList',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({});
  /**
   *
   * Demos:
   *
   * - [Lists](https://mui.com/joy-ui/react-list/)
   *
   * API:
   *
   * - [List API](https://mui.com/joy-ui/api/list/)
   */
  const List = /*#__PURE__*/React__namespace.forwardRef(function List(inProps, ref) {
    var _inProps$size;
    const nesting = React__namespace.useContext(NestedListContext);
    const group = React__namespace.useContext(GroupListContext);
    const radioGroupContext = React__namespace.useContext(RadioGroupContext);
    const props = useThemeProps({
      props: inProps,
      name: 'JoyList'
    });
    const {
        component,
        className,
        children,
        size: sizeProp,
        orientation = 'vertical',
        wrap = false,
        variant = 'plain',
        color = 'neutral',
        role: roleProp,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$D);
    const size = sizeProp || ((_inProps$size = inProps.size) != null ? _inProps$size : 'md');
    let role;
    if (group) {
      role = 'group';
    }
    if (radioGroupContext) {
      role = 'presentation';
    }
    if (roleProp) {
      role = roleProp;
    }
    const ownerState = _extends$1({}, props, {
      instanceSize: inProps.size,
      size,
      nesting,
      orientation,
      wrap,
      variant,
      color,
      role
    });
    const classes = useUtilityClasses$o(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: ListRoot,
      externalForwardedProps,
      ownerState,
      additionalProps: {
        as: component,
        role,
        'aria-labelledby': typeof nesting === 'string' ? nesting : undefined
      }
    });
    return /*#__PURE__*/require$$2$1.jsx(SlotRoot, _extends$1({}, rootProps, {
      children: /*#__PURE__*/require$$2$1.jsx(ComponentListContext.Provider, {
        value: `${typeof component === 'string' ? component : ''}:${role || ''}`,
        children: /*#__PURE__*/require$$2$1.jsx(ListProvider, {
          row: orientation === 'horizontal',
          wrap: wrap,
          children: children
        })
      })
    }));
  });

  function getListItemButtonUtilityClass(slot) {
    return generateUtilityClass$1('MuiListItemButton', slot);
  }
  const listItemButtonClasses = generateUtilityClasses$1('MuiListItemButton', ['root', 'horizontal', 'vertical', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'focusVisible', 'disabled', 'selected', 'variantPlain', 'variantSoft', 'variantOutlined', 'variantSolid']);

  const ListItemButtonOrientationContext = /*#__PURE__*/React__namespace.createContext('horizontal');

  const _excluded$C = ["children", "className", "action", "component", "orientation", "role", "selected", "color", "variant", "slots", "slotProps"];
  const useUtilityClasses$n = ownerState => {
    const {
      color,
      disabled,
      focusVisible,
      focusVisibleClassName,
      selected,
      variant
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', color && `color${capitalize$1(color)}`, selected && 'selected', variant && `variant${capitalize$1(variant)}`]
    };
    const composedClasses = composeClasses(slots, getListItemButtonUtilityClass, {});
    if (focusVisible && focusVisibleClassName) {
      composedClasses.root += ` ${focusVisibleClassName}`;
    }
    return composedClasses;
  };
  const StyledListItemButton = styled$1('div')(({
    theme,
    ownerState
  }) => {
    var _theme$variants, _theme$variants2, _theme$variants3, _theme$variants4, _theme$variants5, _theme$variants6;
    return _extends$1({
      '--Icon-margin': 'initial',
      // reset the icon's margin.
      '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon,
      WebkitTapHighlightColor: 'transparent',
      boxSizing: 'border-box',
      position: 'relative',
      font: 'inherit',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      // always stretch itself to fill the parent (List|ListItem)
      gap: 'var(--ListItem-gap)'
    }, ownerState.orientation === 'vertical' && {
      flexDirection: 'column',
      justifyContent: 'center'
    }, {
      textAlign: 'initial',
      textDecoration: 'initial',
      // reset native anchor tag
      backgroundColor: 'initial',
      // reset button background
      cursor: 'pointer',
      // In some cases, ListItemButton is a child of ListItem so the margin needs to be controlled by the ListItem. The value is negative to account for the ListItem's padding
      marginInline: 'var(--ListItemButton-marginInline)',
      marginBlock: 'var(--ListItemButton-marginBlock)'
    }, ownerState['data-first-child'] === undefined && {
      marginInlineStart: ownerState.row ? 'var(--List-gap)' : undefined,
      marginBlockStart: ownerState.row ? undefined : 'var(--List-gap)'
    }, {
      // account for the border width, so that all of the ListItemButtons content aligned horizontally
      paddingBlock: 'calc(var(--ListItem-paddingY) - var(--variant-borderWidth, 0px))',
      // account for the border width, so that all of the ListItemButtons content aligned vertically
      paddingInlineStart: 'calc(var(--ListItem-paddingLeft) + var(--ListItem-startActionWidth, var(--unstable_startActionWidth, 0px)))',
      // --internal variable makes it possible to customize the actionWidth from the top List
      paddingInlineEnd: 'calc(var(--ListItem-paddingRight) + var(--ListItem-endActionWidth, var(--unstable_endActionWidth, 0px)))',
      // --internal variable makes it possible to customize the actionWidth from the top List
      minBlockSize: 'var(--ListItem-minHeight)',
      border: '1px solid transparent',
      // use `transparent` as a placeholder to prevent the button from jumping when switching to `outlined` variant
      borderRadius: 'var(--ListItem-radius)',
      flex: 'var(--unstable_ListItem-flex, none)',
      // prevent children from shrinking when the List's height is limited.
      fontSize: 'inherit',
      // prevent user agent style when component="button"
      lineHeight: 'inherit',
      // prevent user agent style when component="button"
      minInlineSize: 0,
      [theme.focus.selector]: _extends$1({}, theme.focus.default, {
        zIndex: 1 // to be above of the next element. For example, the first Tab item should be above the second so that the outline is above the second Tab.
      })
    }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
      '&:active': (_theme$variants2 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants2[ownerState.color],
      [`.${listItemClasses.root} > &`]: {
        '--unstable_ListItem-flex': '1 0 0%' // grow to fill the available space of ListItem
      },
      [`&.${listItemButtonClasses.selected}`]: _extends$1({}, (_theme$variants3 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants3[ownerState.color], {
        '--Icon-color': 'currentColor'
      }),
      [`&:not(.${listItemButtonClasses.selected}, [aria-selected="true"])`]: {
        '&:hover': (_theme$variants4 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants4[ownerState.color],
        '&:active': (_theme$variants5 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants5[ownerState.color]
      },
      [`&.${listItemButtonClasses.disabled}`]: _extends$1({}, (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants6[ownerState.color])
    });
  });
  const ListItemButtonRoot = styled$1(StyledListItemButton, {
    name: 'JoyListItemButton',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    ownerState,
    theme
  }) => _extends$1({}, !ownerState.row && {
    [`&.${listItemButtonClasses.selected}`]: {
      fontWeight: theme.vars.fontWeight.md
    }
  }));
  /**
   *
   * Demos:
   *
   * - [Lists](https://mui.com/joy-ui/react-list/)
   *
   * API:
   *
   * - [ListItemButton API](https://mui.com/joy-ui/api/list-item-button/)
   */
  const ListItemButton = /*#__PURE__*/React__namespace.forwardRef(function ListItemButton(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoyListItemButton'
    });
    const row = React__namespace.useContext(RowListContext);
    const {
        children,
        className,
        action,
        component = 'div',
        orientation = 'horizontal',
        role,
        selected = false,
        color = 'neutral',
        variant = 'plain',
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$C);
    const buttonRef = React__namespace.useRef(null);
    const handleRef = useForkRef(buttonRef, ref);
    const {
      focusVisible,
      setFocusVisible,
      getRootProps
    } = useButton(_extends$1({}, props, {
      rootRef: handleRef
    }));
    React__namespace.useImperativeHandle(action, () => ({
      focusVisible: () => {
        var _buttonRef$current;
        setFocusVisible(true);
        (_buttonRef$current = buttonRef.current) == null || _buttonRef$current.focus();
      }
    }), [setFocusVisible]);
    const ownerState = _extends$1({}, props, {
      component,
      color,
      focusVisible,
      orientation,
      row,
      selected,
      variant
    });
    const classes = useUtilityClasses$n(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: ListItemButtonRoot,
      externalForwardedProps,
      ownerState,
      getSlotProps: getRootProps
    });
    return /*#__PURE__*/require$$2$1.jsx(ListItemButtonOrientationContext.Provider, {
      value: orientation,
      children: /*#__PURE__*/require$$2$1.jsx(SlotRoot, _extends$1({}, rootProps, {
        role: role != null ? role : rootProps.role,
        children: children
      }))
    });
  });

  function getSvgIconUtilityClass$1(slot) {
    return generateUtilityClass$1('MuiSvgIcon', slot);
  }
  generateUtilityClasses$1('MuiSvgIcon', ['root', 'colorInherit', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'fontSizeInherit', 'fontSizeXs', 'fontSizeSm', 'fontSizeMd', 'fontSizeLg', 'fontSizeXl', 'fontSizeXl2', 'fontSizeXl3', 'fontSizeXl4', 'sizeSm', 'sizeMd', 'sizeLg']);

  const _excluded$B = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox", "size", "slots", "slotProps"];
  const useUtilityClasses$m = ownerState => {
    const {
      color,
      size,
      fontSize
    } = ownerState;
    const slots = {
      root: ['root', color && color !== 'inherit' && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`, fontSize && `fontSize${capitalize$1(fontSize)}`]
    };
    return composeClasses(slots, getSvgIconUtilityClass$1, {});
  };
  const sizeMap = {
    sm: 'xl',
    md: 'xl2',
    lg: 'xl3'
  };
  const SvgIconRoot$1 = styled$1('svg', {
    name: 'JoySvgIcon',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme,
    ownerState
  }) => {
    var _theme$vars$palette;
    return _extends$1({}, ownerState.instanceSize && {
      '--Icon-fontSize': theme.vars.fontSize[sizeMap[ownerState.instanceSize]]
    }, ownerState.instanceFontSize && ownerState.instanceFontSize !== 'inherit' && {
      '--Icon-fontSize': theme.vars.fontSize[ownerState.instanceFontSize]
    }, {
      userSelect: 'none',
      margin: 'var(--Icon-margin)',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      // the <svg> will define the property that has `currentColor`
      // for example heroicons uses fill="none" and stroke="currentColor"
      fill: ownerState.hasSvgAsChild ? undefined : 'currentColor',
      flexShrink: 0,
      fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize[sizeMap[ownerState.size]] || 'unset'})`
    }, ownerState.fontSize && ownerState.fontSize !== 'inherit' && {
      fontSize: `var(--Icon-fontSize, ${theme.fontSize[ownerState.fontSize]})`
    }, !ownerState.htmlColor && _extends$1({
      color: `var(--Icon-color, ${theme.vars.palette.text.icon})`
    }, ownerState.color === 'inherit' && {
      color: 'inherit'
    }, ownerState.color !== 'inherit' && theme.vars.palette[ownerState.color] && {
      color: `rgba(${(_theme$vars$palette = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette.mainChannel} / 1)`
    }));
  });
  /**
   *
   * Demos:
   *
   * - [Avatar](https://mui.com/joy-ui/react-avatar/)
   *
   * API:
   *
   * - [SvgIcon API](https://mui.com/joy-ui/api/svg-icon/)
   */
  const SvgIcon$1 = /*#__PURE__*/React__namespace.forwardRef(function SvgIcon(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoySvgIcon'
    });
    const {
        children,
        className,
        color,
        component = 'svg',
        fontSize,
        htmlColor,
        inheritViewBox = false,
        titleAccess,
        viewBox = '0 0 24 24',
        size = 'md',
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$B);
    const hasSvgAsChild = /*#__PURE__*/React__namespace.isValidElement(children) && children.type === 'svg';
    const ownerState = _extends$1({}, props, {
      color,
      component,
      size,
      instanceSize: inProps.size,
      fontSize,
      instanceFontSize: inProps.fontSize,
      inheritViewBox,
      viewBox,
      hasSvgAsChild
    });
    const classes = useUtilityClasses$m(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: SvgIconRoot$1,
      externalForwardedProps,
      ownerState,
      additionalProps: _extends$1({
        color: htmlColor,
        focusable: false
      }, titleAccess && {
        role: 'img'
      }, !titleAccess && {
        'aria-hidden': true
      }, !inheritViewBox && {
        viewBox
      }, hasSvgAsChild && children.props)
    });
    return /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
      children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/require$$2$1.jsx("title", {
        children: titleAccess
      }) : null]
    }));
  });

  function createSvgIcon$2(path, displayName) {
    // @ts-ignore internal component
    function Component(props, ref) {
      return /*#__PURE__*/require$$2$1.jsx(SvgIcon$1, _extends$1({
        "data-testid": `${displayName}Icon`,
        ref: ref
      }, props, {
        children: path
      }));
    }

    // @ts-ignore internal component
    Component.muiName = SvgIcon$1.muiName;

    // @ts-ignore internal component
    return /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(Component));
  }

  var CloseIcon = createSvgIcon$2( /*#__PURE__*/require$$2$1.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), 'Close');

  var ArrowDropDownIcon = createSvgIcon$2( /*#__PURE__*/require$$2$1.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), 'ArrowDropDown');

  const VariantColorContext = /*#__PURE__*/React__namespace.createContext(undefined);

  /**
   * @internal For internal usage only.
   *
   * Use this function in a slot to get the matched default variant and color when the parent's variant and/or color changes.
   */
  function getChildVariantAndColor(parentVariant, parentColor) {
    let childColor = parentColor;
    let childVariant = parentVariant;
    if (parentVariant === 'outlined') {
      childColor = 'neutral';
      childVariant = 'plain';
    }
    if (parentVariant === 'plain') {
      childColor = 'neutral';
    }
    return {
      variant: childVariant,
      color: childColor
    };
  }

  /**
   * @internal For internal usage only.
   *
   * This hook should be used in a children that are connected with its parent
   * to get the matched default variant and color when the parent's variant and/or color changes.
   *
   * For example, the `Option` component in `Select` component is using this function.
   */
  function useVariantColor(instanceVariant, instanceColor, alwaysInheritColor = false) {
    const value = React__namespace.useContext(VariantColorContext);
    const [variant, color] = typeof value === 'string' ? value.split(':') : [];
    const result = getChildVariantAndColor(variant || undefined, color || undefined);
    result.variant = instanceVariant || result.variant;
    result.color = instanceColor || (alwaysInheritColor ? color : result.color);
    return result;
  }

  /**
   * @internal For internal usage only.
   */
  function VariantColorProvider({
    children,
    color,
    variant
  }) {
    return /*#__PURE__*/require$$2$1.jsx(VariantColorContext.Provider, {
      value: `${variant || ''}:${color || ''}`,
      children: children
    });
  }

  function getIconButtonUtilityClass(slot) {
    return generateUtilityClass$1('MuiIconButton', slot);
  }
  const iconButtonClasses = generateUtilityClasses$1('MuiIconButton', ['root', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid', 'focusVisible', 'disabled', 'sizeSm', 'sizeMd', 'sizeLg', 'loading', 'loadingIndicator']);

  /**
   * @ignore - internal component.
   */
  const ButtonGroupContext = /*#__PURE__*/React__namespace.createContext({});

  /**
   * @ignore - internal component.
   */
  const ToggleButtonGroupContext = /*#__PURE__*/React__namespace.createContext(undefined);

  function getCircularProgressUtilityClass(slot) {
    return generateUtilityClass$1('MuiCircularProgress', slot);
  }
  generateUtilityClasses$1('MuiCircularProgress', ['root', 'determinate', 'svg', 'track', 'progress', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'sizeSm', 'sizeMd', 'sizeLg', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid']);

  let _$1 = t => t,
    _t;
  const _excluded$A = ["color", "backgroundColor"],
    _excluded2$3 = ["children", "className", "color", "size", "variant", "thickness", "determinate", "value", "component", "slots", "slotProps"];
  const circulate = keyframes({
    '0%': {
      // let the progress start at the top of the ring
      transform: 'rotate(-90deg)'
    },
    '100%': {
      transform: 'rotate(270deg)'
    }
  });
  const useUtilityClasses$l = ownerState => {
    const {
      determinate,
      color,
      variant,
      size
    } = ownerState;
    const slots = {
      root: ['root', determinate && 'determinate', color && `color${capitalize$1(color)}`, variant && `variant${capitalize$1(variant)}`, size && `size${capitalize$1(size)}`],
      svg: ['svg'],
      track: ['track'],
      progress: ['progress']
    };
    return composeClasses(slots, getCircularProgressUtilityClass, {});
  };
  function getThickness(slot, defaultValue) {
    return `var(--CircularProgress-${slot}Thickness, var(--CircularProgress-thickness, ${defaultValue}))`;
  }
  const CircularProgressRoot = styled$1('span', {
    name: 'JoyCircularProgress',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    ownerState,
    theme
  }) => {
    var _theme$variants, _theme$variants$solid, _theme$variants$softH, _theme$variants$solid2;
    const _ref = ((_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]) || {},
      {
        color,
        backgroundColor
      } = _ref,
      rest = _objectWithoutPropertiesLoose$1(_ref, _excluded$A);
    return _extends$1({
      // integration with icon
      '--Icon-fontSize': 'calc(0.4 * var(--_root-size))',
      // public variables
      '--CircularProgress-trackColor': backgroundColor,
      '--CircularProgress-progressColor': color,
      '--CircularProgress-percent': ownerState.value,
      // 0 - 100
      '--CircularProgress-linecap': 'round'
    }, ownerState.size === 'sm' && {
      '--_root-size': 'var(--CircularProgress-size, 24px)',
      // use --_root-size to let other components overrides via --CircularProgress-size
      '--_track-thickness': getThickness('track', '3px'),
      '--_progress-thickness': getThickness('progress', '3px')
    }, ownerState.instanceSize === 'sm' && {
      '--CircularProgress-size': '24px'
    }, ownerState.size === 'md' && {
      '--_track-thickness': getThickness('track', '6px'),
      '--_progress-thickness': getThickness('progress', '6px'),
      '--_root-size': 'var(--CircularProgress-size, 40px)'
    }, ownerState.instanceSize === 'md' && {
      '--CircularProgress-size': '40px'
    }, ownerState.size === 'lg' && {
      '--_track-thickness': getThickness('track', '8px'),
      '--_progress-thickness': getThickness('progress', '8px'),
      '--_root-size': 'var(--CircularProgress-size, 64px)'
    }, ownerState.instanceSize === 'lg' && {
      '--CircularProgress-size': '64px'
    }, ownerState.thickness && {
      '--_track-thickness': `${ownerState.thickness}px`,
      '--_progress-thickness': `${ownerState.thickness}px`
    }, {
      // internal variables
      '--_thickness-diff': 'calc(var(--_track-thickness) - var(--_progress-thickness))',
      '--_inner-size': 'calc(var(--_root-size) - 2 * var(--variant-borderWidth, 0px))',
      '--_outlined-inset': 'max(var(--_track-thickness), var(--_progress-thickness))',
      width: 'var(--_root-size)',
      height: 'var(--_root-size)',
      borderRadius: 'var(--_root-size)',
      margin: 'var(--CircularProgress-margin)',
      boxSizing: 'border-box',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
      // prevent from shrinking when CircularProgress is in a flex container.
      position: 'relative',
      color
    }, ownerState.children && {
      // only add font related properties when there is a child.
      // so that when there is no child, the size can be controlled by the parent font-size e.g. Link
      fontFamily: theme.vars.fontFamily.body,
      fontWeight: theme.vars.fontWeight.md,
      fontSize: 'calc(0.2 * var(--_root-size))'
    }, rest, ownerState.variant === 'outlined' && {
      '&::before': _extends$1({
        content: '""',
        display: 'block',
        position: 'absolute',
        borderRadius: 'inherit',
        top: 'var(--_outlined-inset)',
        left: 'var(--_outlined-inset)',
        right: 'var(--_outlined-inset)',
        bottom: 'var(--_outlined-inset)'
      }, rest)
    }, ownerState.variant === 'soft' && {
      '--CircularProgress-trackColor': theme.variants.soft.neutral.backgroundColor,
      '--CircularProgress-progressColor': (_theme$variants$solid = theme.variants.solid) == null ? void 0 : _theme$variants$solid[ownerState.color].backgroundColor
    }, ownerState.variant === 'solid' && {
      '--CircularProgress-trackColor': (_theme$variants$softH = theme.variants.softHover) == null ? void 0 : _theme$variants$softH[ownerState.color].backgroundColor,
      '--CircularProgress-progressColor': (_theme$variants$solid2 = theme.variants.solid) == null ? void 0 : _theme$variants$solid2[ownerState.color].backgroundColor
    });
  });
  const CircularProgressSvg = styled$1('svg', {
    name: 'JoyCircularProgress',
    slot: 'Svg',
    overridesResolver: (props, styles) => styles.svg
  })({
    width: 'inherit',
    height: 'inherit',
    display: 'inherit',
    boxSizing: 'inherit',
    position: 'absolute',
    top: 'calc(-1 * var(--variant-borderWidth, 0px))',
    // centered align
    left: 'calc(-1 * var(--variant-borderWidth, 0px))' // centered align
  });
  const CircularProgressTrack = styled$1('circle', {
    name: 'JoyCircularProgress',
    slot: 'track',
    overridesResolver: (props, styles) => styles.track
  })({
    cx: '50%',
    cy: '50%',
    r: 'calc(var(--_inner-size) / 2 - var(--_track-thickness) / 2 + min(0px, var(--_thickness-diff) / 2))',
    fill: 'transparent',
    strokeWidth: 'var(--_track-thickness)',
    stroke: 'var(--CircularProgress-trackColor)'
  });
  const CircularProgressProgress = styled$1('circle', {
    name: 'JoyCircularProgress',
    slot: 'progress',
    overridesResolver: (props, styles) => styles.progress
  })({
    '--_progress-radius': 'calc(var(--_inner-size) / 2 - var(--_progress-thickness) / 2 - max(0px, var(--_thickness-diff) / 2))',
    '--_progress-length': 'calc(2 * 3.1415926535 * var(--_progress-radius))',
    // the circumference around the progress
    cx: '50%',
    cy: '50%',
    r: 'var(--_progress-radius)',
    fill: 'transparent',
    strokeWidth: 'var(--_progress-thickness)',
    stroke: 'var(--CircularProgress-progressColor)',
    strokeLinecap: 'var(--CircularProgress-linecap, round)',
    // can't use CSS variable directly, need to cast type.
    strokeDasharray: 'var(--_progress-length)',
    strokeDashoffset: 'calc(var(--_progress-length) - var(--CircularProgress-percent) * var(--_progress-length) / 100)',
    transformOrigin: 'center',
    transform: 'rotate(-90deg)' // to initially appear at the top-center of the circle.
  }, ({
    ownerState
  }) => !ownerState.determinate && css(_t || (_t = _$1`
      animation: var(--CircularProgress-circulation, 0.8s linear 0s infinite normal none running)
        ${0};
    `), circulate));

  /**
   * ## ARIA
   *
   * If the progress bar is describing the loading progress of a particular region of a page,
   * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
   * attribute to `true` on that region until it has finished loading.
   *
   * Demos:
   *
   * - [Circular Progress](https://mui.com/joy-ui/react-circular-progress/)
   *
   * API:
   *
   * - [CircularProgress API](https://mui.com/joy-ui/api/circular-progress/)
   */
  const CircularProgress = /*#__PURE__*/React__namespace.forwardRef(function CircularProgress(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoyCircularProgress'
    });
    const {
        children,
        className,
        color = 'primary',
        size = 'md',
        variant = 'soft',
        thickness,
        determinate = false,
        value = determinate ? 0 : 25,
        // `25` is the 1/4 of the circle.
        component,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded2$3);
    const ownerState = _extends$1({}, props, {
      color,
      size,
      variant,
      thickness,
      value,
      determinate,
      instanceSize: inProps.size
    });
    const classes = useUtilityClasses$l(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: CircularProgressRoot,
      externalForwardedProps,
      ownerState,
      additionalProps: _extends$1({
        role: 'progressbar',
        style: {
          // Setting this CSS variable via inline-style
          // prevents the generation of new CSS every time
          // `value` prop updates
          '--CircularProgress-percent': value
        }
      }, value && determinate && {
        'aria-valuenow': typeof value === 'number' ? Math.round(value) : Math.round(Number(value || 0))
      })
    });
    const [SlotSvg, svgProps] = useSlot('svg', {
      className: classes.svg,
      elementType: CircularProgressSvg,
      externalForwardedProps,
      ownerState
    });
    const [SlotTrack, trackProps] = useSlot('track', {
      className: classes.track,
      elementType: CircularProgressTrack,
      externalForwardedProps,
      ownerState
    });
    const [SlotProgress, progressProps] = useSlot('progress', {
      className: classes.progress,
      elementType: CircularProgressProgress,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
      children: [/*#__PURE__*/require$$2$1.jsxs(SlotSvg, _extends$1({}, svgProps, {
        children: [/*#__PURE__*/require$$2$1.jsx(SlotTrack, _extends$1({}, trackProps)), /*#__PURE__*/require$$2$1.jsx(SlotProgress, _extends$1({}, progressProps))]
      })), children]
    }));
  });

  const _excluded$z = ["children", "action", "component", "color", "disabled", "variant", "loading", "loadingIndicator", "size", "slots", "slotProps"];
  const useUtilityClasses$k = ownerState => {
    const {
      color,
      disabled,
      focusVisible,
      focusVisibleClassName,
      size,
      variant,
      loading
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`, loading && 'loading'],
      loadingIndicator: ['loadingIndicator']
    };
    const composedClasses = composeClasses(slots, getIconButtonUtilityClass, {});
    if (focusVisible && focusVisibleClassName) {
      composedClasses.root += ` ${focusVisibleClassName}`;
    }
    return composedClasses;
  };
  const StyledIconButton = styled$1('button')(({
    theme,
    ownerState
  }) => {
    var _theme$variants, _theme$variants2, _theme$variants3, _theme$variants4;
    return [_extends$1({
      '--Icon-margin': 'initial',
      // reset the icon's margin.
      '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon
    }, ownerState.instanceSize && {
      '--IconButton-size': {
        sm: '2rem',
        md: '2.25rem',
        lg: '2.75rem'
      }[ownerState.instanceSize]
    }, ownerState.size === 'sm' && {
      '--Icon-fontSize': 'calc(var(--IconButton-size, 2rem) / 1.6)',
      // 1.25rem by default
      '--CircularProgress-size': '20px',
      '--CircularProgress-thickness': '2px',
      minWidth: 'var(--IconButton-size, 2rem)',
      // use min-width instead of height to make the button resilient to its content
      minHeight: 'var(--IconButton-size, 2rem)',
      // use min-height instead of height to make the button resilient to its content
      fontSize: theme.vars.fontSize.sm,
      paddingInline: '2px' // add a gap, in case the content is long, for example multiple icons
    }, ownerState.size === 'md' && {
      '--Icon-fontSize': 'calc(var(--IconButton-size, 2.25rem) / 1.5)',
      // 1.5rem by default
      '--CircularProgress-size': '20px',
      '--CircularProgress-thickness': '2px',
      minWidth: 'var(--IconButton-size, 2.25rem)',
      minHeight: 'var(--IconButton-size, 2.25rem)',
      fontSize: theme.vars.fontSize.md,
      paddingInline: '0.25rem'
    }, ownerState.size === 'lg' && {
      '--Icon-fontSize': 'calc(var(--IconButton-size, 2.75rem) / 1.571)',
      // 1.75rem by default
      '--CircularProgress-size': '28px',
      '--CircularProgress-thickness': '4px',
      minWidth: 'var(--IconButton-size, 2.75rem)',
      minHeight: 'var(--IconButton-size, 2.75rem)',
      fontSize: theme.vars.fontSize.lg,
      paddingInline: '0.375rem'
    }, {
      WebkitTapHighlightColor: 'transparent',
      paddingBlock: 0,
      fontFamily: theme.vars.fontFamily.body,
      fontWeight: theme.vars.fontWeight.md,
      margin: `var(--IconButton-margin)`,
      // to be controlled by other components, for example Input
      borderRadius: `var(--IconButton-radius, ${theme.vars.radius.sm})`,
      // to be controlled by other components, for example Input
      border: 'none',
      boxSizing: 'border-box',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      [theme.focus.selector]: _extends$1({
        '--Icon-color': 'currentColor'
      }, theme.focus.default)
    }), _extends$1({}, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
      '&:hover': {
        '@media (hover: hover)': _extends$1({
          '--Icon-color': 'currentColor'
        }, (_theme$variants2 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants2[ownerState.color])
      },
      '&:active, &[aria-pressed="true"]': _extends$1({
        '--Icon-color': 'currentColor'
      }, (_theme$variants3 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants3[ownerState.color]),
      '&:disabled': (_theme$variants4 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants4[ownerState.color]
    })];
  });
  const IconButtonRoot = styled$1(StyledIconButton, {
    name: 'JoyIconButton',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({});
  const ButtonLoading = styled$1('span', {
    name: 'JoyIconButton',
    slot: 'LoadingIndicator',
    overridesResolver: (props, styles) => styles.loadingIndicator
  })(({
    theme,
    ownerState
  }) => {
    var _theme$variants5, _theme$variants6;
    return _extends$1({
      display: 'inherit',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      color: (_theme$variants5 = theme.variants[ownerState.variant]) == null || (_theme$variants5 = _theme$variants5[ownerState.color]) == null ? void 0 : _theme$variants5.color
    }, ownerState.disabled && {
      color: (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants6 = _theme$variants6[ownerState.color]) == null ? void 0 : _theme$variants6.color
    });
  });

  /**
   *
   * Demos:
   *
   * - [Button](https://mui.com/joy-ui/react-button/)
   * - [Button Group](https://mui.com/joy-ui/react-button-group/)
   * - [Toggle Button Group](https://mui.com/joy-ui/react-toggle-button-group/)
   *
   * API:
   *
   * - [IconButton API](https://mui.com/joy-ui/api/icon-button/)
   */
  const IconButton = /*#__PURE__*/React__namespace.forwardRef(function IconButton(inProps, ref) {
    var _ref;
    const props = useThemeProps({
      props: inProps,
      name: 'JoyIconButton'
    });
    const {
        children,
        action,
        component = 'button',
        color: colorProp = 'neutral',
        disabled: disabledProp,
        variant: variantProp = 'plain',
        loading = false,
        loadingIndicator: loadingIndicatorProp,
        size: sizeProp = 'md',
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$z);
    const buttonGroup = React__namespace.useContext(ButtonGroupContext);
    const toggleButtonGroup = React__namespace.useContext(ToggleButtonGroupContext);
    const variant = inProps.variant || buttonGroup.variant || variantProp;
    const size = inProps.size || buttonGroup.size || sizeProp;
    const color = inProps.color || buttonGroup.color || colorProp;
    const disabled = (_ref = inProps.loading || inProps.disabled) != null ? _ref : buttonGroup.disabled || loading || disabledProp;
    const buttonRef = React__namespace.useRef(null);
    const handleRef = useForkRef(buttonRef, ref);
    const {
      focusVisible,
      setFocusVisible,
      getRootProps
    } = useButton(_extends$1({}, props, {
      disabled,
      rootRef: handleRef
    }));
    const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : /*#__PURE__*/require$$2$1.jsx(CircularProgress, {
      color: color,
      thickness: {
        sm: 2,
        md: 3,
        lg: 4
      }[size] || 3
    });
    React__namespace.useImperativeHandle(action, () => ({
      focusVisible: () => {
        var _buttonRef$current;
        setFocusVisible(true);
        (_buttonRef$current = buttonRef.current) == null || _buttonRef$current.focus();
      }
    }), [setFocusVisible]);
    const ownerState = _extends$1({}, props, {
      component,
      color,
      disabled,
      variant,
      loading,
      size,
      focusVisible,
      instanceSize: inProps.size
    });
    const classes = useUtilityClasses$k(ownerState);
    const handleClick = event => {
      var _onClick;
      let onClick = props.onClick;
      if (typeof slotProps.root === 'function') {
        onClick = slotProps.root(ownerState).onClick;
      } else if (slotProps.root) {
        onClick = slotProps.root.onClick;
      }
      (_onClick = onClick) == null || _onClick(event);
      if (toggleButtonGroup) {
        var _toggleButtonGroup$on;
        (_toggleButtonGroup$on = toggleButtonGroup.onClick) == null || _toggleButtonGroup$on.call(toggleButtonGroup, event, props.value);
      }
    };
    let ariaPressed = props['aria-pressed'];
    if (typeof slotProps.root === 'function') {
      ariaPressed = slotProps.root(ownerState)['aria-pressed'];
    } else if (slotProps.root) {
      ariaPressed = slotProps.root['aria-pressed'];
    }
    if (toggleButtonGroup != null && toggleButtonGroup.value) {
      if (Array.isArray(toggleButtonGroup.value)) {
        ariaPressed = toggleButtonGroup.value.indexOf(props.value) !== -1;
      } else {
        ariaPressed = toggleButtonGroup.value === props.value;
      }
    }
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: classes.root,
      elementType: IconButtonRoot,
      getSlotProps: getRootProps,
      externalForwardedProps,
      ownerState,
      additionalProps: {
        onClick: handleClick,
        'aria-pressed': ariaPressed
      }
    });
    const [SlotLoadingIndicator, loadingIndicatorProps] = useSlot('loadingIndicator', {
      className: classes.loadingIndicator,
      elementType: ButtonLoading,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsx(SlotRoot, _extends$1({}, rootProps, {
      children: loading ? /*#__PURE__*/require$$2$1.jsx(SlotLoadingIndicator, _extends$1({}, loadingIndicatorProps, {
        children: loadingIndicator
      })) : children
    }));
  });

  // @ts-ignore internal logic for ToggleButtonGroup
  IconButton.muiName = 'IconButton';

  function getChipUtilityClass(slot) {
    return generateUtilityClass$1('MuiChip', slot);
  }
  const chipClasses = generateUtilityClasses$1('MuiChip', ['root', 'clickable', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'disabled', 'endDecorator', 'focusVisible', 'label', 'labelSm', 'labelMd', 'labelLg', 'sizeSm', 'sizeMd', 'sizeLg', 'startDecorator', 'variantPlain', 'variantSolid', 'variantSoft', 'variantOutlined']);

  const ChipColorContext = /*#__PURE__*/React__namespace.createContext({
    disabled: undefined,
    variant: undefined,
    color: undefined
  });

  const _excluded$y = ["children", "className", "color", "onClick", "disabled", "size", "variant", "startDecorator", "endDecorator", "component", "slots", "slotProps"];
  const useUtilityClasses$j = ownerState => {
    const {
      disabled,
      size,
      color,
      clickable,
      variant,
      focusVisible
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`, variant && `variant${capitalize$1(variant)}`, clickable && 'clickable'],
      action: ['action', disabled && 'disabled', focusVisible && 'focusVisible'],
      label: ['label', size && `label${capitalize$1(size)}`],
      startDecorator: ['startDecorator'],
      endDecorator: ['endDecorator']
    };
    return composeClasses(slots, getChipUtilityClass, {});
  };
  const ChipRoot = styled$1('div', {
    name: 'JoyChip',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme,
    ownerState
  }) => {
    var _theme$variants, _theme$variants2, _theme$variants3;
    const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
    const {
      borderRadius
    } = resolveSxValue({
      theme,
      ownerState
    }, ['borderRadius']);
    return [_extends$1({
      // for controlling chip delete margin offset
      '--Chip-decoratorChildOffset': 'min(calc(var(--Chip-paddingInline) - (var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2), var(--Chip-paddingInline))',
      '--Chip-decoratorChildRadius': 'max(var(--_Chip-radius) - var(--variant-borderWidth, 0px) - var(--_Chip-paddingBlock), min(var(--_Chip-paddingBlock) + var(--variant-borderWidth, 0px), var(--_Chip-radius) / 2))',
      '--Chip-deleteRadius': 'var(--Chip-decoratorChildRadius)',
      '--Chip-deleteSize': 'var(--Chip-decoratorChildHeight)',
      '--Avatar-radius': 'var(--Chip-decoratorChildRadius)',
      '--Avatar-size': 'var(--Chip-decoratorChildHeight)',
      '--Icon-margin': 'initial',
      // reset the icon's margin.
      '--Icon-color': 'currentColor',
      '--unstable_actionRadius': 'var(--_Chip-radius)'
    }, ownerState.size === 'sm' && {
      '--Chip-paddingInline': '0.375rem',
      '--Chip-decoratorChildHeight': 'calc(var(--_Chip-minHeight) - 2 * var(--variant-borderWidth))',
      '--Icon-fontSize': theme.vars.fontSize.sm,
      '--_Chip-minHeight': 'var(--Chip-minHeight, 1.25rem)',
      // 20px
      gap: '3px'
    }, ownerState.size === 'md' && {
      '--Chip-paddingInline': '0.5rem',
      '--Chip-decoratorChildHeight': 'calc(var(--_Chip-minHeight) - 0.25rem - 2 * var(--variant-borderWidth))',
      '--Icon-fontSize': theme.vars.fontSize.md,
      '--_Chip-minHeight': 'var(--Chip-minHeight, 1.5rem)',
      // 26px
      gap: '0.25rem'
    }, ownerState.size === 'lg' && {
      '--Chip-paddingInline': '0.75rem',
      '--Chip-decoratorChildHeight': 'calc(var(--_Chip-minHeight) - 0.375rem - 2 * var(--variant-borderWidth))',
      '--Icon-fontSize': theme.vars.fontSize.lg,
      '--_Chip-minHeight': 'var(--Chip-minHeight, 1.75rem)',
      // 28px
      gap: '0.375rem'
    }, {
      '--_Chip-radius': 'var(--Chip-radius, 1.5rem)',
      '--_Chip-paddingBlock': 'max((var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2, 0px)',
      minHeight: 'var(--_Chip-minHeight)',
      maxWidth: 'max-content',
      // to prevent Chip from stretching to full width when used with flexbox
      paddingInline: 'var(--Chip-paddingInline)',
      borderRadius: 'var(--_Chip-radius)',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      verticalAlign: 'middle',
      boxSizing: 'border-box'
    }, theme.typography[`body-${{
    sm: 'xs',
    md: 'sm',
    lg: 'md'
  }[ownerState.size]}`], {
      fontWeight: theme.vars.fontWeight.md,
      [`&.${chipClasses.disabled}`]: {
        color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
      }
    }), ...(!ownerState.clickable ? [_extends$1({
      backgroundColor: theme.vars.palette.background.surface
    }, variantStyle, {
      [`&.${chipClasses.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color]
    })] : [{
      '--variant-borderWidth': '0px',
      color: variantStyle == null ? void 0 : variantStyle.color
    }]), borderRadius !== undefined && {
      '--_Chip-radius': borderRadius
    }];
  });
  const ChipLabel = styled$1('span', {
    name: 'JoyChip',
    slot: 'Label',
    overridesResolver: (props, styles) => styles.label
  })(({
    ownerState
  }) => _extends$1({
    display: 'inline-block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    order: 1,
    minInlineSize: 0,
    flexGrow: 1
  }, ownerState.clickable && {
    zIndex: 1,
    pointerEvents: 'none'
  }));
  const ChipAction = styled$1('button', {
    name: 'JoyChip',
    slot: 'Action',
    overridesResolver: (props, styles) => styles.action
  })(({
    theme,
    ownerState
  }) => {
    var _theme$variants4, _theme$variants5, _theme$variants6, _theme$variants7;
    return [{
      '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon,
      position: 'absolute',
      zIndex: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      // To fix Firefox issue (https://github.com/mui/material-ui/issues/36877)
      border: 'none',
      cursor: 'pointer',
      padding: 'initial',
      margin: 'initial',
      backgroundColor: 'initial',
      textDecoration: 'none',
      borderRadius: 'inherit',
      [theme.focus.selector]: theme.focus.default
    }, _extends$1({
      backgroundColor: theme.vars.palette.background.surface
    }, (_theme$variants4 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants4[ownerState.color]), {
      '&:hover': {
        '@media (hover: hover)': (_theme$variants5 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants5[ownerState.color]
      }
    }, {
      '&:active': (_theme$variants6 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants6[ownerState.color]
    }, {
      [`&.${chipClasses.disabled}`]: (_theme$variants7 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants7[ownerState.color]
    }];
  });
  const ChipStartDecorator = styled$1('span', {
    name: 'JoyChip',
    slot: 'StartDecorator',
    overridesResolver: (props, styles) => styles.startDecorator
  })({
    '--Avatar-marginInlineStart': 'calc(var(--Chip-decoratorChildOffset) * -1)',
    '--IconButton-margin': '0 calc(-1 * var(--Chip-paddingInline) / 3) 0 calc(var(--Chip-decoratorChildOffset) * -1)',
    '--Icon-margin': '0 0 0 calc(var(--Chip-paddingInline) / -4)',
    display: 'inherit',
    // set zIndex to 1 with order to stay on top of other controls, for example Checkbox, Radio
    order: 0,
    zIndex: 1,
    pointerEvents: 'none'
  });
  const ChipEndDecorator = styled$1('span', {
    name: 'JoyChip',
    slot: 'EndDecorator',
    overridesResolver: (props, styles) => styles.endDecorator
  })({
    '--IconButton-margin': '0 calc(var(--Chip-decoratorChildOffset) * -1) 0 calc(-1 * var(--Chip-paddingInline) / 3)',
    '--Icon-margin': '0 calc(var(--Chip-paddingInline) / -4) 0 0',
    display: 'inherit',
    // set zIndex to 1 with order to stay on top of other controls, for example Checkbox, Radio
    order: 2,
    zIndex: 1,
    pointerEvents: 'none'
  });

  /**
   * Chips represent complex entities in small blocks, such as a contact.
   *
   * Demos:
   *
   * - [Chip](https://mui.com/joy-ui/react-chip/)
   *
   * API:
   *
   * - [Chip API](https://mui.com/joy-ui/api/chip/)
   */
  const Chip = /*#__PURE__*/React__namespace.forwardRef(function Chip(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoyChip'
    });
    const {
        children,
        className,
        color = 'neutral',
        onClick,
        disabled = false,
        size = 'md',
        variant = 'soft',
        startDecorator,
        endDecorator,
        component,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$y);
    const clickable = !!onClick || !!slotProps.action;
    const ownerState = _extends$1({}, props, {
      disabled,
      size,
      color,
      variant,
      clickable,
      focusVisible: false
    });
    const resolvedActionProps = typeof slotProps.action === 'function' ? slotProps.action(ownerState) : slotProps.action;
    const actionRef = React__namespace.useRef(null);
    const {
      focusVisible,
      getRootProps
    } = useButton(_extends$1({}, resolvedActionProps, {
      disabled,
      rootRef: actionRef
    }));
    ownerState.focusVisible = focusVisible;
    const classes = useUtilityClasses$j(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: ChipRoot,
      externalForwardedProps,
      ownerState
    });
    const [SlotLabel, labelProps] = useSlot('label', {
      className: classes.label,
      elementType: ChipLabel,
      externalForwardedProps,
      ownerState
    });

    // @ts-ignore internal logic.
    const id = useId(labelProps.id);
    const [SlotAction, actionProps] = useSlot('action', {
      className: classes.action,
      elementType: ChipAction,
      externalForwardedProps,
      ownerState,
      getSlotProps: getRootProps,
      additionalProps: {
        'aria-labelledby': id,
        as: resolvedActionProps == null ? void 0 : resolvedActionProps.component,
        onClick
      }
    });
    const [SlotStartDecorator, startDecoratorProps] = useSlot('startDecorator', {
      className: classes.startDecorator,
      elementType: ChipStartDecorator,
      externalForwardedProps,
      ownerState
    });
    const [SlotEndDecorator, endDecoratorProps] = useSlot('endDecorator', {
      className: classes.endDecorator,
      elementType: ChipEndDecorator,
      externalForwardedProps,
      ownerState
    });
    const chipContextValue = React__namespace.useMemo(() => ({
      disabled
    }), [disabled]);
    return /*#__PURE__*/require$$2$1.jsx(ChipColorContext.Provider, {
      value: chipContextValue,
      children: /*#__PURE__*/require$$2$1.jsx(VariantColorProvider, {
        variant: variant,
        color: color,
        children: /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
          children: [clickable && /*#__PURE__*/require$$2$1.jsx(SlotAction, _extends$1({}, actionProps)), /*#__PURE__*/require$$2$1.jsx(SlotLabel, _extends$1({}, labelProps, {
            id: id,
            children: children
          })), startDecorator && /*#__PURE__*/require$$2$1.jsx(SlotStartDecorator, _extends$1({}, startDecoratorProps, {
            children: startDecorator
          })), endDecorator && /*#__PURE__*/require$$2$1.jsx(SlotEndDecorator, _extends$1({}, endDecoratorProps, {
            children: endDecorator
          }))]
        }))
      })
    });
  });

  var Cancel = createSvgIcon$2( /*#__PURE__*/require$$2$1.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), 'Cancel');

  function getChipDeleteUtilityClass(slot) {
    return generateUtilityClass$1('MuiChipDelete', slot);
  }
  generateUtilityClasses$1('MuiChipDelete', ['root', 'disabled', 'focusVisible', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantSolid', 'variantSoft', 'variantOutlined']);

  var _Cancel;
  const _excluded$x = ["children", "variant", "color", "disabled", "onKeyDown", "onDelete", "onClick", "component", "slots", "slotProps"],
    _excluded2$2 = ["onDelete"];
  const useUtilityClasses$i = ownerState => {
    const {
      focusVisible,
      variant,
      color,
      disabled
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`]
    };
    return composeClasses(slots, getChipDeleteUtilityClass, {});
  };
  const ChipDeleteRoot = styled$1(StyledIconButton, {
    name: 'JoyChipDelete',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme
  }) => ({
    '--IconButton-size': 'var(--Chip-deleteSize, 2rem)',
    '--Icon-fontSize': 'calc(var(--IconButton-size, 2rem) / 1.3)',
    minWidth: 'var(--IconButton-size, 2rem)',
    // use min-width instead of height to make the button resilient to its content
    minHeight: 'var(--IconButton-size, 2rem)',
    // use min-height instead of height to make the button resilient to its content
    fontSize: theme.vars.fontSize.sm,
    paddingInline: '2px',
    // add a gap, in case the content is long, for example multiple icons
    pointerEvents: 'visible',
    // force the ChipDelete to be hoverable because the decorator can have pointerEvents 'none'
    borderRadius: 'var(--Chip-deleteRadius, 50%)',
    zIndex: 1,
    // overflow above sibling button or anchor
    padding: 0 // reset user agent stylesheet
  }));

  /**
   *
   * Demos:
   *
   * - [Chip](https://mui.com/joy-ui/react-chip/)
   *
   * API:
   *
   * - [ChipDelete API](https://mui.com/joy-ui/api/chip-delete/)
   */
  const ChipDelete = /*#__PURE__*/React__namespace.forwardRef(function ChipDelete(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoyChipDelete'
    });
    const {
        children,
        variant: variantProp = 'plain',
        color: colorProp = 'neutral',
        disabled: disabledProp,
        onKeyDown,
        onDelete,
        onClick,
        component,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$x);
    const chipContext = React__namespace.useContext(ChipColorContext);
    const {
      variant = variantProp,
      color: inheritedColor = colorProp
    } = useVariantColor(inProps.variant, inProps.color, true);
    const color = inProps.color || inheritedColor;
    const disabled = disabledProp != null ? disabledProp : chipContext.disabled;
    const buttonRef = React__namespace.useRef(null);
    const handleRef = useForkRef(buttonRef, ref);
    const {
      focusVisible,
      getRootProps
    } = useButton(_extends$1({}, props, {
      disabled,
      rootRef: handleRef
    }));
    const ownerState = _extends$1({}, props, {
      disabled,
      variant,
      color,
      focusVisible
    });
    const classes = useUtilityClasses$i(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const handleClickDelete = event => {
      if (!disabled && onDelete) {
        onDelete(event);
      }
      if (onClick) {
        onClick(event);
      }
    };
    const handleKeyDelete = event => {
      if (['Backspace', 'Enter', 'Delete'].includes(event.key)) {
        event.preventDefault();
        if (!disabled && onDelete) {
          onDelete(event);
        }
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
    };
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      elementType: ChipDeleteRoot,
      getSlotProps: getRootProps,
      externalForwardedProps,
      ownerState,
      additionalProps: {
        as: component,
        onKeyDown: handleKeyDelete,
        onClick: handleClickDelete
      },
      className: classes.root
    });
    const restOfRootProps = _objectWithoutPropertiesLoose$1(rootProps, _excluded2$2);
    return /*#__PURE__*/require$$2$1.jsx(SlotRoot, _extends$1({}, restOfRootProps, {
      children: children != null ? children : _Cancel || (_Cancel = /*#__PURE__*/require$$2$1.jsx(Cancel, {}))
    }));
  });

  function getListSubheaderUtilityClass$1(slot) {
    return generateUtilityClass$1('MuiListSubheader', slot);
  }
  generateUtilityClasses$1('MuiListSubheader', ['root', 'sticky', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantSoft', 'variantOutlined', 'variantSolid']);

  const _excluded$w = ["component", "className", "children", "id", "sticky", "variant", "color", "slots", "slotProps"];
  const useUtilityClasses$h = ownerState => {
    const {
      variant,
      color,
      sticky
    } = ownerState;
    const slots = {
      root: ['root', sticky && 'sticky', color && `color${capitalize$1(color)}`, variant && `variant${capitalize$1(variant)}`]
    };
    return composeClasses(slots, getListSubheaderUtilityClass$1, {});
  };
  const ListSubheaderRoot$1 = styled$1('div', {
    name: 'JoyListSubheader',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme,
    ownerState
  }) => {
    var _theme$vars$palette, _theme$variants;
    return _extends$1({
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      marginInline: 'var(--ListItem-marginInline)',
      paddingBlock: 'var(--ListItem-paddingY)',
      paddingInlineStart: 'var(--ListItem-paddingLeft)',
      paddingInlineEnd: 'var(--ListItem-paddingRight)',
      minBlockSize: 'var(--ListItem-minHeight)'
    }, theme.typography['body-xs'], {
      fontSize: 'max(0.75em, 0.625rem)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }, ownerState.sticky && {
      position: 'sticky',
      top: 'var(--ListItem-stickyTop, 0px)',
      // integration with Menu and Select.
      zIndex: 1,
      background: 'var(--ListItem-stickyBackground)'
    }, {
      color: ownerState.color ? `var(--_Link-color, rgba(${(_theme$vars$palette = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette.mainChannel} / 1))` : theme.vars.palette.text.tertiary
    }, ownerState.instanceColor && {
      [`&:not([${INVERTED_COLORS_ATTR}])`]: {
        '--_Link-color': theme.vars.palette.text.secondary
      }
    }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
  });
  /**
   *
   * Demos:
   *
   * - [Lists](https://mui.com/joy-ui/react-list/)
   *
   * API:
   *
   * - [ListSubheader API](https://mui.com/joy-ui/api/list-subheader/)
   */
  const ListSubheader$1 = /*#__PURE__*/React__namespace.forwardRef(function ListSubheader(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoyListSubheader'
    });
    const {
        component,
        className,
        children,
        id: idOverride,
        sticky = false,
        variant,
        color,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$w);
    const id = useId(idOverride);
    const setSubheaderId = React__namespace.useContext(ListSubheaderContext);
    React__namespace.useEffect(() => {
      if (setSubheaderId) {
        setSubheaderId(id || '');
      }
    }, [setSubheaderId, id]);
    const ownerState = _extends$1({
      instanceColor: inProps.color
    }, props, {
      id,
      sticky,
      variant,
      color: variant ? color != null ? color : 'neutral' : color
    });
    const classes = useUtilityClasses$h(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: ListSubheaderRoot$1,
      externalForwardedProps,
      ownerState,
      additionalProps: {
        as: component,
        id
      }
    });
    return /*#__PURE__*/require$$2$1.jsx(SlotRoot, _extends$1({}, rootProps, {
      children: children
    }));
  });

  function getAutocompleteUtilityClass(slot) {
    return generateUtilityClass$1('MuiAutocomplete', slot);
  }
  const autocompleteClasses = generateUtilityClasses$1('MuiAutocomplete', ['root', 'wrapper', 'input', 'startDecorator', 'endDecorator', 'formControl', 'focused', 'disabled', 'error', 'multiple', 'limitTag', 'hasPopupIcon', 'hasClearIcon', 'clearIndicator', 'popupIndicator', 'popupIndicatorOpen', 'listbox', 'option', 'loading', 'noOptions', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'sizeSm', 'sizeMd', 'sizeLg', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid']);

  const StyledAutocompleteListbox = styled$1(StyledList)(({
    theme,
    ownerState
  }) => {
    var _theme$variants;
    const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
    return _extends$1({
      '--focus-outline-offset': `calc(${theme.vars.focus.thickness} * -1)`,
      // to prevent the focus outline from being cut by overflow
      '--ListItem-stickyBackground': (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.popup,
      '--ListItem-stickyTop': 'calc(var(--List-padding, var(--ListDivider-gap)) * -1)'
    }, scopedVariables, {
      boxShadow: theme.shadow.md,
      borderRadius: `var(--List-radius, ${theme.vars.radius.sm})`
    }, !(variantStyle != null && variantStyle.backgroundColor) && {
      backgroundColor: theme.vars.palette.background.popup
    }, {
      zIndex: theme.vars.zIndex.popup,
      overflow: 'auto',
      maxHeight: '40vh',
      position: 'relative',
      // to make sure that the listbox is positioned for grouped options to work.
      '&:empty': {
        visibility: 'hidden'
      },
      [`& .${listItemClasses.nested}, & .${listItemClasses.nested} .${listClasses.root}`]: {
        // For grouped options autocomplete:
        // Force the position to make the scroll into view logic works because the `element.offsetTop` should reference to the listbox, not the grouped list.
        // See the implementation of the `useAutocomplete` line:370
        //
        // Resource: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
        position: 'initial'
      }
    });
  });
  styled$1(StyledAutocompleteListbox, {
    name: 'JoyAutocompleteListbox',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({});

  const StyledAutocompleteOption = styled$1(StyledListItemButton)(({
    theme,
    ownerState
  }) => {
    var _theme$variants, _theme$variants2;
    return {
      '&[aria-disabled="true"]': (_theme$variants = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants[ownerState.color],
      '&[aria-selected="true"]': _extends$1({}, (_theme$variants2 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants2[ownerState.color], {
        fontWeight: theme.vars.fontWeight.md
      })
    };
  });
  styled$1(StyledAutocompleteOption, {
    name: 'JoyAutocompleteOption',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({});

  var _ClearIcon, _ArrowDropDownIcon;
  const _excluded$v = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoHighlight", "autoSelect", "autoFocus", "blurOnSelect", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "defaultValue", "disableCloseOnSelect", "disabledItemsFocusable", "disableListWrap", "disableClearable", "disabled", "endDecorator", "error", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "getLimitTagsText", "getOptionDisabled", "getOptionKey", "getOptionLabel", "handleHomeEndKeys", "includeInputInList", "isOptionEqualToValue", "groupBy", "id", "inputValue", "limitTags", "loading", "loadingText", "multiple", "name", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "placeholder", "popupIcon", "readOnly", "renderGroup", "renderOption", "renderTags", "required", "type", "startDecorator", "size", "color", "variant", "value", "component", "selectOnFocus", "slots", "slotProps"],
    _excluded2$1 = ["onDelete"],
    _excluded3 = ["key"],
    _excluded4 = ["onBlur", "onFocus", "onMouseDown"],
    _excluded5 = ["key"];
  const defaultIsActiveElementInListbox = listboxRef => listboxRef.current !== null && listboxRef.current.contains(document.activeElement);
  // @ts-ignore
  const defaultGetOptionLabel = option => {
    var _option$label;
    return (_option$label = option.label) != null ? _option$label : option;
  };
  const defaultLimitTagsText = more => `+${more}`;
  const defaultRenderGroup = params => /*#__PURE__*/require$$2$1.jsxs(ListItem, {
    nested: true,
    children: [/*#__PURE__*/require$$2$1.jsx(ListSubheader$1, {
      sticky: true,
      children: params.group
    }), /*#__PURE__*/require$$2$1.jsx(List, {
      children: params.children
    })]
  }, params.key);
  const useUtilityClasses$g = ownerState => {
    const {
      disabled,
      focused,
      hasClearIcon,
      hasPopupIcon,
      popupOpen,
      variant,
      color,
      size,
      multiple
    } = ownerState;
    const slots = {
      root: ['root', focused && 'focused', hasClearIcon && 'hasClearIcon', hasPopupIcon && 'hasPopupIcon', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`],
      wrapper: ['wrapper', multiple && 'multiple'],
      input: ['input'],
      startDecorator: ['startDecorator'],
      endDecorator: ['endDecorator'],
      clearIndicator: ['clearIndicator'],
      popupIndicator: ['popupIndicator', popupOpen && 'popupIndicatorOpen', disabled && 'disabled'],
      listbox: ['listbox'],
      option: ['option'],
      loading: ['loading'],
      noOptions: ['noOptions'],
      limitTag: ['limitTag']
    };
    return composeClasses(slots, getAutocompleteUtilityClass, {});
  };
  const AutocompleteRoot = styled$1(StyledInputRoot, {
    name: 'JoyAutocomplete',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    ownerState
  }) => _extends$1({}, ownerState.size === 'sm' && {
    '--Autocomplete-wrapperGap': '3px'
  }, ownerState.size === 'md' && {
    '--Autocomplete-wrapperGap': '3px'
  }, ownerState.size === 'lg' && {
    '--Autocomplete-wrapperGap': '4px'
  }, {
    /* Avoid double tap issue on iOS */
    '@media (pointer: fine)': {
      [`&:hover .${autocompleteClasses.clearIndicator}`]: {
        visibility: 'visible'
      }
    }
  }, ownerState.multiple && !ownerState.startDecorator && {
    paddingInlineStart: 0
  }));

  /**
   * Wrapper groups the chips (multi selection) and the input
   * so that start/end decorators can stay in the normal flow.
   */
  const AutocompleteWrapper = styled$1('div', {
    name: 'JoyAutocomplete',
    slot: 'Wrapper',
    overridesResolver: (props, styles) => styles.wrapper
  })(({
    ownerState
  }) => ({
    flex: 1,
    // stretch to fill the root slot
    minWidth: 0,
    // won't push end decorator out of the autocomplete
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--Autocomplete-wrapperGap)',
    [`&.${autocompleteClasses.multiple}`]: _extends$1({
      paddingBlock: 'var(--Autocomplete-wrapperGap)'
    }, !ownerState.startDecorator && {
      paddingInlineStart: 'var(--Autocomplete-wrapperGap)'
    }, !ownerState.endDecorator && {
      paddingInlineEnd: 'var(--Autocomplete-wrapperGap)'
    })
  }));
  const AutocompleteInput = styled$1(StyledInputHtml, {
    name: 'JoyAutocomplete',
    slot: 'Input',
    overridesResolver: (props, styles) => styles.input
  })(({
    ownerState
  }) => _extends$1({
    minWidth: 30,
    minHeight: 'var(--Chip-minHeight)'
  }, ownerState.multiple && {
    marginInlineStart: 'calc(var(--Autocomplete-wrapperGap) * 2.5)'
  }));
  const AutocompleteStartDecorator = styled$1(StyledInputStartDecorator, {
    name: 'JoyAutocomplete',
    slot: 'StartDecorator',
    overridesResolver: (props, styles) => styles.startDecorator
  })({});
  const AutocompleteEndDecorator = styled$1(StyledInputEndDecorator, {
    name: 'JoyAutocomplete',
    slot: 'EndDecorator',
    overridesResolver: (props, styles) => styles.endDecorator
  })(({
    ownerState
  }) => _extends$1({}, (ownerState.hasClearIcon || ownerState.hasPopupIcon) && {
    '--Button-margin': '0px',
    '--IconButton-margin': '0px',
    '--Icon-margin': '0px'
  }));
  const AutocompleteClearIndicator = styled$1(StyledIconButton, {
    name: 'JoyAutocomplete',
    slot: 'ClearIndicator',
    overridesResolver: (props, styles) => styles.clearIndicator
  })(({
    ownerState
  }) => _extends$1({
    alignSelf: 'center'
  }, !ownerState.hasPopupIcon && {
    marginInlineEnd: 'calc(var(--Input-decoratorChildOffset) * -1)'
  }, {
    marginInlineStart: 'calc(var(--_Input-paddingBlock) / 2)',
    visibility: ownerState.focused ? 'visible' : 'hidden'
  }));
  const AutocompletePopupIndicator = styled$1(StyledIconButton, {
    name: 'JoyAutocomplete',
    slot: 'PopupIndicator',
    overridesResolver: (props, styles) => styles.popupIndicator
  })({
    alignSelf: 'center',
    marginInlineStart: 'calc(var(--_Input-paddingBlock) / 2)',
    marginInlineEnd: 'calc(var(--Input-decoratorChildOffset) * -1)',
    [`&.${autocompleteClasses.popupIndicatorOpen}`]: {
      transform: 'rotate(180deg)',
      '--Icon-color': 'currentColor'
    }
  });
  const AutocompleteListbox = styled$1(StyledAutocompleteListbox, {
    name: 'JoyAutocomplete',
    slot: 'Listbox',
    overridesResolver: (props, styles) => styles.listbox
  })(({
    theme
  }) => ({
    // `unstable_popup-zIndex` is a private variable that lets other component, for example Modal, to override the z-index so that the listbox can be displayed above the Modal.
    zIndex: `var(--unstable_popup-zIndex, ${theme.vars.zIndex.popup})`
  }));
  const AutocompleteOption = styled$1(StyledAutocompleteOption, {
    name: 'JoyAutocomplete',
    slot: 'Option',
    overridesResolver: (props, styles) => styles.option
  })({});
  const AutocompleteLoading = styled$1(ListItem, {
    name: 'JoyAutocomplete',
    slot: 'Loading',
    overridesResolver: (props, styles) => styles.loading
  })(({
    theme
  }) => ({
    color: (theme.vars || theme).palette.text.secondary
  }));
  const AutocompleteNoOptions = styled$1(ListItem, {
    name: 'JoyAutocomplete',
    slot: 'NoOptions',
    overridesResolver: (props, styles) => styles.noOptions
  })(({
    theme
  }) => ({
    color: (theme.vars || theme).palette.text.secondary
  }));
  const AutocompleteLimitTag = styled$1('div', {
    name: 'JoyAutocomplete',
    slot: 'NoOptions',
    overridesResolver: (props, styles) => styles.noOptions
  })({
    marginInlineStart: 'calc(var(--Input-paddingInline) / 2)',
    marginBlockStart: 'var(--_Input-paddingBlock)'
  });
  /**
   *
   * Demos:
   *
   * - [Autocomplete](https://mui.com/joy-ui/react-autocomplete/)
   *
   * API:
   *
   * - [Autocomplete API](https://mui.com/joy-ui/api/autocomplete/)
   */
  const Autocomplete = /*#__PURE__*/React__namespace.forwardRef(function Autocomplete(inProps, ref) {
    var _ref, _inProps$error, _ref2, _inProps$size, _inProps$color, _formControl$color, _ref3;
    const props = useThemeProps({
      props: inProps,
      name: 'JoyAutocomplete'
    });
    const {
        'aria-describedby': ariaDescribedby,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        autoFocus,
        clearIcon = _ClearIcon || (_ClearIcon = /*#__PURE__*/require$$2$1.jsx(CloseIcon, {
          fontSize: "md"
        })),
        clearText = 'Clear',
        closeText = 'Close',
        disableClearable = false,
        disabled: disabledProp,
        endDecorator,
        error: errorProp = false,
        forcePopupIcon = 'auto',
        freeSolo = false,
        getLimitTagsText = defaultLimitTagsText,
        getOptionLabel = defaultGetOptionLabel,
        groupBy,
        id,
        limitTags = -1,
        loading = false,
        loadingText = 'Loading…',
        multiple = false,
        name,
        noOptionsText = 'No options',
        openText = 'Open',
        placeholder,
        popupIcon = _ArrowDropDownIcon || (_ArrowDropDownIcon = /*#__PURE__*/require$$2$1.jsx(ArrowDropDownIcon, {})),
        readOnly = false,
        renderGroup = defaultRenderGroup,
        renderOption: renderOptionProp,
        renderTags,
        required,
        type,
        startDecorator,
        size: sizeProp = 'md',
        color: colorProp = 'neutral',
        variant = 'outlined',
        component,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$v);
    const formControl = React__namespace.useContext(FormControlContext);
    const error = (_ref = (_inProps$error = inProps.error) != null ? _inProps$error : formControl == null ? void 0 : formControl.error) != null ? _ref : errorProp;
    const size = (_ref2 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref2 : sizeProp;
    const color = (_inProps$color = inProps.color) != null ? _inProps$color : error ? 'danger' : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp;
    const disabled = (_ref3 = disabledProp != null ? disabledProp : formControl == null ? void 0 : formControl.disabled) != null ? _ref3 : false;
    const {
      getRootProps,
      getInputProps,
      getPopupIndicatorProps,
      getClearProps,
      getTagProps,
      getListboxProps,
      getOptionProps,
      value,
      dirty,
      popupOpen,
      focused,
      focusedTag,
      anchorEl,
      setAnchorEl,
      inputValue,
      groupedOptions
    } = useAutocomplete(_extends$1({}, props, {
      id: id != null ? id : formControl == null ? void 0 : formControl.htmlFor,
      componentName: 'Autocomplete',
      unstable_classNamePrefix: 'Mui',
      unstable_isActiveElementInListbox: defaultIsActiveElementInListbox
    }));
    const {
      onMouseDown: handleInputMouseDown
    } = getInputProps();
    const {
      onClick: handleRootOnClick
    } = getRootProps();
    const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;
    const hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;

    // If you modify this, make sure to keep the `AutocompleteOwnerState` type in sync.
    const ownerState = _extends$1({
      instanceColor: inProps.color
    }, props, {
      value,
      disabled,
      focused,
      getOptionLabel,
      hasOptions: !!groupedOptions.length,
      hasClearIcon,
      hasPopupIcon,
      inputFocused: focusedTag === -1,
      popupOpen,
      size,
      color,
      variant
    });
    const classes = useUtilityClasses$g(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    let selectedOptions;
    if (multiple && value.length > 0) {
      const getCustomizedTagProps = params => {
        const _getTagProps = getTagProps(params),
          {
            onDelete
          } = _getTagProps,
          tagProps = _objectWithoutPropertiesLoose$1(_getTagProps, _excluded2$1);
        return _extends$1({
          disabled,
          size,
          onClick: onDelete
        }, tagProps);
      };
      if (renderTags) {
        selectedOptions = renderTags(value, getCustomizedTagProps, ownerState);
      } else {
        selectedOptions = value.map((option, index) => {
          const _getCustomizedTagProp = getCustomizedTagProps({
              index
            }),
            {
              key: endDecoratorKey
            } = _getCustomizedTagProp,
            endDecoratorProps = _objectWithoutPropertiesLoose$1(_getCustomizedTagProp, _excluded3);
          return /*#__PURE__*/require$$2$1.jsx(Chip, {
            size: size,
            variant: "soft",
            color: "neutral",
            endDecorator: /*#__PURE__*/require$$2$1.jsx(ChipDelete, _extends$1({}, endDecoratorProps), endDecoratorKey),
            sx: {
              minWidth: 0
            },
            children: getOptionLabel(option)
          }, index);
        });
      }
    }
    const rootRef = useForkRef(ref, setAnchorEl);
    const rootStateClasses = {
      [autocompleteClasses.disabled]: disabled,
      [autocompleteClasses.error]: error,
      [autocompleteClasses.focused]: focused,
      [autocompleteClasses.formControl]: Boolean(formControl)
    };
    const [SlotRoot, rootProps] = useSlot('root', {
      ref: rootRef,
      className: [classes.root, rootStateClasses],
      elementType: AutocompleteRoot,
      externalForwardedProps,
      ownerState,
      getSlotProps: getRootProps,
      additionalProps: {
        onClick: event => {
          if (handleRootOnClick) {
            handleRootOnClick(event);
          }
          if (event.currentTarget === event.target && handleInputMouseDown) {
            handleInputMouseDown(event);
          }
        }
      }
    });
    const [SlotWrapper, wrapperProps] = useSlot('wrapper', {
      className: classes.wrapper,
      elementType: AutocompleteWrapper,
      externalForwardedProps,
      ownerState
    });
    const inputStateClasses = {
      [autocompleteClasses.disabled]: disabled
    };
    const [SlotInput, inputProps] = useSlot('input', {
      className: [classes.input, inputStateClasses],
      elementType: AutocompleteInput,
      getSlotProps: handlers => {
        const _getInputProps = getInputProps(),
          {
            onBlur,
            onFocus,
            onMouseDown
          } = _getInputProps,
          inputSlotProps = _objectWithoutPropertiesLoose$1(_getInputProps, _excluded4);
        return _extends$1({}, inputSlotProps, {
          onBlur: event => {
            var _handlers$onBlur;
            onBlur == null || onBlur(event);
            (_handlers$onBlur = handlers.onBlur) == null || _handlers$onBlur.call(handlers, event);
          },
          onFocus: event => {
            var _handlers$onFocus;
            onFocus == null || onFocus(event);
            (_handlers$onFocus = handlers.onFocus) == null || _handlers$onFocus.call(handlers, event);
          },
          onMouseDown: event => {
            var _handlers$onMouseDown;
            onMouseDown == null || onMouseDown(event);
            (_handlers$onMouseDown = handlers.onMouseDown) == null || _handlers$onMouseDown.call(handlers, event);
          }
        });
      },
      externalForwardedProps,
      ownerState,
      additionalProps: {
        autoFocus,
        placeholder,
        name,
        readOnly,
        disabled,
        required: required != null ? required : formControl == null ? void 0 : formControl.required,
        type,
        'aria-invalid': error || undefined,
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledby,
        'aria-describedby': ariaDescribedby != null ? ariaDescribedby : formControl == null ? void 0 : formControl['aria-describedby']
      }
    });
    const [SlotStartDecorator, startDecoratorProps] = useSlot('startDecorator', {
      className: classes.startDecorator,
      elementType: AutocompleteStartDecorator,
      externalForwardedProps,
      ownerState
    });
    const [SlotEndDecorator, endDecoratorProps] = useSlot('endDecorator', {
      className: classes.endDecorator,
      elementType: AutocompleteEndDecorator,
      externalForwardedProps,
      ownerState
    });
    const [SlotClearIndicator, clearIndicatorProps] = useSlot('clearIndicator', {
      className: classes.clearIndicator,
      elementType: AutocompleteClearIndicator,
      getSlotProps: getClearProps,
      externalForwardedProps,
      ownerState,
      getSlotOwnerState: mergedProps => ({
        size: mergedProps.size || size,
        variant: mergedProps.variant || getChildVariantAndColor(variant, color).variant || 'plain',
        color: mergedProps.color || getChildVariantAndColor(variant, color).color || 'neutral',
        disableColorInversion: !!inProps.color
      }),
      additionalProps: {
        'aria-label': clearText,
        title: clearText
      }
    });
    const [SlotPopupIndicator, popupIndicatorProps] = useSlot('popupIndicator', {
      className: classes.popupIndicator,
      elementType: AutocompletePopupIndicator,
      getSlotProps: getPopupIndicatorProps,
      externalForwardedProps,
      ownerState,
      getSlotOwnerState: mergedProps => ({
        size: mergedProps.size || size,
        variant: mergedProps.variant || getChildVariantAndColor(variant, color).variant || 'plain',
        color: mergedProps.color || getChildVariantAndColor(variant, color).color || 'neutral',
        disableColorInversion: !!inProps.color
      }),
      additionalProps: {
        disabled,
        'aria-label': popupOpen ? closeText : openText,
        title: popupOpen ? closeText : openText,
        type: 'button'
      }
    });
    const [SlotListbox, listboxProps] = useSlot('listbox', {
      className: classes.listbox,
      elementType: AutocompleteListbox,
      getSlotProps: getListboxProps,
      externalForwardedProps,
      ownerState,
      getSlotOwnerState: mergedProps => ({
        size: mergedProps.size || size,
        variant: mergedProps.variant || variant,
        color: mergedProps.color || color,
        disableColorInversion: !mergedProps.disablePortal
      }),
      additionalProps: {
        anchorEl,
        open: popupOpen,
        style: anchorEl ? {
          width: anchorEl.clientWidth
        } : {}
      }
    });
    const [SlotLoading, loadingProps] = useSlot('loading', {
      className: classes.loading,
      elementType: AutocompleteLoading,
      externalForwardedProps,
      ownerState
    });
    const [SlotNoOptions, noOptionsProps] = useSlot('noOptions', {
      className: classes.noOptions,
      elementType: AutocompleteNoOptions,
      externalForwardedProps,
      ownerState,
      additionalProps: {
        role: 'presentation',
        onMouseDown: event => {
          // Prevent input blur when interacting with the "no options" content
          event.preventDefault();
        }
      }
    });
    const [SlotLimitTag, limitTagProps] = useSlot('limitTag', {
      className: classes.limitTag,
      elementType: AutocompleteLimitTag,
      externalForwardedProps,
      ownerState
    });
    if (limitTags > -1 && Array.isArray(selectedOptions)) {
      const more = selectedOptions.length - limitTags;
      if (!focused && more > 0) {
        selectedOptions = selectedOptions.splice(0, limitTags);
        selectedOptions.push( /*#__PURE__*/require$$2$1.jsx(SlotLimitTag, _extends$1({}, limitTagProps, {
          children: getLimitTagsText(more)
        }), selectedOptions.length));
      }
    }
    const [SlotOption, baseOptionProps] = useSlot('option', {
      className: classes.option,
      elementType: AutocompleteOption,
      externalForwardedProps,
      ownerState,
      getSlotOwnerState: mergedProps => ({
        variant: mergedProps.variant || getChildVariantAndColor(variant, color).variant || 'plain',
        color: mergedProps.color || getChildVariantAndColor(variant, color).color || 'neutral',
        disableColorInversion: !listboxProps.disablePortal
      }),
      additionalProps: {
        as: 'li'
      }
    });
    const defaultRenderOption = (optionProps, option) => {
      const {
          key
        } = optionProps,
        rest = _objectWithoutPropertiesLoose$1(optionProps, _excluded5);
      return /*#__PURE__*/require$$2$1.jsx(SlotOption, _extends$1({}, rest, {
        children: getOptionLabel(option)
      }), key);
    };
    const renderOption = renderOptionProp || defaultRenderOption;
    const renderListOption = (option, index) => {
      const optionProps = getOptionProps({
        option,
        index
      });
      return renderOption(_extends$1({}, baseOptionProps, optionProps), option, {
        // `aria-selected` prop will always by boolean, see useAutocomplete hook.
        selected: !!optionProps['aria-selected'],
        inputValue,
        ownerState
      });
    };

    // Wait for `listboxProps` because `slotProps.listbox` could be a function.
    const modifiers = React__namespace.useMemo(() => [{
      name: 'offset',
      options: {
        offset: [0, 4]
      }
    }, ...(listboxProps.modifiers || [])], [listboxProps.modifiers]);
    let popup = null;
    if (anchorEl) {
      var _props$slots;
      popup = /*#__PURE__*/require$$2$1.jsx(VariantColorProvider, {
        variant: variant,
        color: color,
        children: /*#__PURE__*/require$$2$1.jsx(ListProvider, {
          nested: true,
          children: /*#__PURE__*/require$$2$1.jsxs(SlotListbox, _extends$1({}, listboxProps, {
            className: clsx(listboxProps.className)
            // @ts-ignore internal logic (too complex to typed PopperOwnProps to SlotListbox but this should be removed when we have `usePopper`)
            ,
            modifiers: modifiers
          }, !((_props$slots = props.slots) != null && _props$slots.listbox) && {
            as: Popper,
            slots: {
              root: listboxProps.as || 'ul'
            }
          }, {
            children: [groupedOptions.map((option, index) => {
              if (groupBy) {
                const typedOption = option;
                return renderGroup({
                  key: String(typedOption.key),
                  group: typedOption.group,
                  children: typedOption.options.map((option2, index2) => renderListOption(option2, typedOption.index + index2))
                });
              }
              return renderListOption(option, index);
            }), loading && groupedOptions.length === 0 ? /*#__PURE__*/require$$2$1.jsx(SlotLoading, _extends$1({}, loadingProps, {
              children: loadingText
            })) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /*#__PURE__*/require$$2$1.jsx(SlotNoOptions, _extends$1({}, noOptionsProps, {
              children: noOptionsText
            })) : null]
          }))
        })
      });
    }
    return /*#__PURE__*/require$$2$1.jsxs(React__namespace.Fragment, {
      children: [/*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
        children: [startDecorator && /*#__PURE__*/require$$2$1.jsx(SlotStartDecorator, _extends$1({}, startDecoratorProps, {
          children: startDecorator
        })), /*#__PURE__*/require$$2$1.jsxs(SlotWrapper, _extends$1({}, wrapperProps, {
          children: [selectedOptions, /*#__PURE__*/require$$2$1.jsx(SlotInput, _extends$1({}, inputProps))]
        })), endDecorator && /*#__PURE__*/require$$2$1.jsx(SlotEndDecorator, _extends$1({}, endDecoratorProps, {
          children: endDecorator
        })), hasClearIcon ? /*#__PURE__*/require$$2$1.jsx(SlotClearIndicator, _extends$1({}, clearIndicatorProps, {
          children: clearIcon
        })) : null, hasPopupIcon ? /*#__PURE__*/require$$2$1.jsx(SlotPopupIndicator, _extends$1({}, popupIndicatorProps, {
          children: popupIcon
        })) : null]
      })), popup]
    });
  });

  const boxClasses$1 = generateUtilityClasses$2('MuiBox', ['root']);

  /**
   *
   * Demos:
   *
   * - [Box](https://mui.com/joy-ui/react-box/)
   *
   * API:
   *
   * - [Box API](https://mui.com/joy-ui/api/box/)
   */
  const Box$1 = createBox({
    themeId: THEME_ID$1,
    defaultTheme: defaultTheme$2,
    defaultClassName: boxClasses$1.root,
    generateClassName: ClassNameGenerator.generate
  });

  function getTypographyUtilityClass(slot) {
    return generateUtilityClass$1('MuiTypography', slot);
  }
  generateUtilityClasses$1('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'title-lg', 'title-md', 'title-sm', 'body-lg', 'body-md', 'body-sm', 'body-xs', 'noWrap', 'gutterBottom', 'startDecorator', 'endDecorator', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid']);

  const _excluded$u = ["color", "textColor"],
    _excluded2 = ["component", "gutterBottom", "noWrap", "level", "levelMapping", "children", "endDecorator", "startDecorator", "variant", "slots", "slotProps"];
  /**
   * @internal
   * For creating nested Typography to have inherit level (unless an explicit `level` prop is provided)
   * and change the HTML tag to `span` (unless an explicit `component` prop is provided).
   */
  const TypographyNestedContext = /*#__PURE__*/React__namespace.createContext(false);

  /**
   * @internal
   * Typography's level will be inherit within this context unless an explicit `level` prop is provided.
   *
   * This is used in components, for example Table, to inherit the parent's size by default.
   */
  const TypographyInheritContext = /*#__PURE__*/React__namespace.createContext(false);
  const useUtilityClasses$f = ownerState => {
    const {
      gutterBottom,
      noWrap,
      level,
      color,
      variant
    } = ownerState;
    const slots = {
      root: ['root', level, gutterBottom && 'gutterBottom', noWrap && 'noWrap', color && `color${capitalize$1(color)}`, variant && `variant${capitalize$1(variant)}`],
      startDecorator: ['startDecorator'],
      endDecorator: ['endDecorator']
    };
    return composeClasses(slots, getTypographyUtilityClass, {});
  };
  const StartDecorator = styled$1('span', {
    name: 'JoyTypography',
    slot: 'StartDecorator',
    overridesResolver: (props, styles) => styles.startDecorator
  })({
    display: 'inline-flex',
    marginInlineEnd: 'clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)'
  });
  const EndDecorator = styled$1('span', {
    name: 'JoyTypography',
    slot: 'endDecorator',
    overridesResolver: (props, styles) => styles.endDecorator
  })({
    display: 'inline-flex',
    marginInlineStart: 'clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)'
  });
  const TypographyRoot = styled$1('span', {
    name: 'JoyTypography',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme,
    ownerState
  }) => {
    var _theme$typography, _theme$typography$own, _theme$typography$own2, _theme$vars$palette$o, _theme$variants$owner;
    const lineHeight = ownerState.level !== 'inherit' ? (_theme$typography = theme.typography[ownerState.level]) == null ? void 0 : _theme$typography.lineHeight : '1';
    return _extends$1({
      '--Icon-fontSize': `calc(1em * ${lineHeight})`
    }, ownerState.color && {
      '--Icon-color': 'currentColor'
    }, {
      margin: 'var(--Typography-margin, 0px)'
    }, ownerState.nesting ? {
      display: 'inline' // looks better than `inline-block` when using with `variant` prop.
    } : _extends$1({
      display: 'block'
    }, ownerState.unstable_hasSkeleton && {
      position: 'relative'
    }), (ownerState.startDecorator || ownerState.endDecorator) && _extends$1({
      display: 'flex',
      alignItems: 'center'
    }, ownerState.nesting && _extends$1({
      display: 'inline-flex'
    }, ownerState.startDecorator && {
      verticalAlign: 'bottom' // to make the text align with the parent's content
    })), ownerState.level && ownerState.level !== 'inherit' && theme.typography[ownerState.level], {
      fontSize: `var(--Typography-fontSize, ${ownerState.level && ownerState.level !== 'inherit' ? (_theme$typography$own = (_theme$typography$own2 = theme.typography[ownerState.level]) == null ? void 0 : _theme$typography$own2.fontSize) != null ? _theme$typography$own : 'inherit' : 'inherit'})`
    }, ownerState.noWrap && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }, ownerState.gutterBottom && {
      marginBottom: '0.35em'
    }, ownerState.color && {
      color: `var(--variant-plainColor, rgba(${(_theme$vars$palette$o = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette$o.mainChannel} / 1))`
    }, ownerState.variant && _extends$1({
      borderRadius: theme.vars.radius.xs,
      paddingBlock: 'min(0.1em, 4px)',
      paddingInline: '0.25em'
    }, !ownerState.nesting && {
      marginInline: '-0.25em'
    }, (_theme$variants$owner = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants$owner[ownerState.color]));
  });
  const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    'title-lg': 'p',
    'title-md': 'p',
    'title-sm': 'p',
    'body-lg': 'p',
    'body-md': 'p',
    'body-sm': 'p',
    'body-xs': 'span',
    inherit: 'p'
  };
  /**
   *
   * Demos:
   *
   * - [Skeleton](https://mui.com/joy-ui/react-skeleton/)
   * - [Typography](https://mui.com/joy-ui/react-typography/)
   *
   * API:
   *
   * - [Typography API](https://mui.com/joy-ui/api/typography/)
   */
  const Typography$1 = /*#__PURE__*/React__namespace.forwardRef(function Typography(inProps, ref) {
    var _inProps$color;
    const _useThemeProps = useThemeProps({
        props: inProps,
        name: 'JoyTypography'
      }),
      {
        color: colorProp,
        textColor
      } = _useThemeProps,
      themeProps = _objectWithoutPropertiesLoose$1(_useThemeProps, _excluded$u);
    const nesting = React__namespace.useContext(TypographyNestedContext);
    const inheriting = React__namespace.useContext(TypographyInheritContext);
    const props = extendSxProp(_extends$1({}, themeProps, {
      color: textColor
    }));
    const {
        component: componentProp,
        gutterBottom = false,
        noWrap = false,
        level: levelProp = 'body-md',
        levelMapping = defaultVariantMapping,
        children,
        endDecorator,
        startDecorator,
        variant,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded2);
    const color = (_inProps$color = inProps.color) != null ? _inProps$color : variant ? colorProp != null ? colorProp : 'neutral' : colorProp;
    const level = nesting || inheriting ? inProps.level || 'inherit' : levelProp;
    const hasSkeleton = isMuiElement(children, ['Skeleton']);
    const component = componentProp || (nesting ? 'span' : levelMapping[level] || defaultVariantMapping[level] || 'span');
    const ownerState = _extends$1({}, props, {
      level,
      component,
      color,
      gutterBottom,
      noWrap,
      nesting,
      variant,
      unstable_hasSkeleton: hasSkeleton
    });
    const classes = useUtilityClasses$f(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: classes.root,
      elementType: TypographyRoot,
      externalForwardedProps,
      ownerState
    });
    const [SlotStartDecorator, startDecoratorProps] = useSlot('startDecorator', {
      className: classes.startDecorator,
      elementType: StartDecorator,
      externalForwardedProps,
      ownerState
    });
    const [SlotEndDecorator, endDecoratorProps] = useSlot('endDecorator', {
      className: classes.endDecorator,
      elementType: EndDecorator,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsx(TypographyNestedContext.Provider, {
      value: true,
      children: /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
        children: [startDecorator && /*#__PURE__*/require$$2$1.jsx(SlotStartDecorator, _extends$1({}, startDecoratorProps, {
          children: startDecorator
        })), hasSkeleton ? /*#__PURE__*/React__namespace.cloneElement(children, {
          variant: children.props.variant || 'inline'
        }) : children, endDecorator && /*#__PURE__*/require$$2$1.jsx(SlotEndDecorator, _extends$1({}, endDecoratorProps, {
          children: endDecorator
        }))]
      }))
    });
  });

  // @ts-ignore internal logic to let communicate with Breadcrumbs
  Typography$1.muiName = 'Typography';

  function getButtonUtilityClass(slot) {
    return generateUtilityClass$1('MuiButton', slot);
  }
  const buttonClasses = generateUtilityClasses$1('MuiButton', ['root', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid', 'focusVisible', 'disabled', 'sizeSm', 'sizeMd', 'sizeLg', 'fullWidth', 'startDecorator', 'endDecorator', 'loading', 'loadingIndicatorCenter']);

  const _excluded$t = ["children", "action", "color", "variant", "size", "fullWidth", "startDecorator", "endDecorator", "loading", "loadingPosition", "loadingIndicator", "disabled", "component", "slots", "slotProps"];
  const useUtilityClasses$e = ownerState => {
    const {
      color,
      disabled,
      focusVisible,
      focusVisibleClassName,
      fullWidth,
      size,
      variant,
      loading
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', focusVisible && 'focusVisible', fullWidth && 'fullWidth', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`, loading && 'loading'],
      startDecorator: ['startDecorator'],
      endDecorator: ['endDecorator'],
      loadingIndicatorCenter: ['loadingIndicatorCenter']
    };
    const composedClasses = composeClasses(slots, getButtonUtilityClass, {});
    if (focusVisible && focusVisibleClassName) {
      composedClasses.root += ` ${focusVisibleClassName}`;
    }
    return composedClasses;
  };
  const ButtonStartDecorator = styled$1('span', {
    name: 'JoyButton',
    slot: 'StartDecorator',
    overridesResolver: (props, styles) => styles.startDecorator
  })({
    '--Icon-margin': '0 0 0 calc(var(--Button-gap) / -2)',
    '--CircularProgress-margin': '0 0 0 calc(var(--Button-gap) / -2)',
    display: 'inherit',
    marginRight: 'var(--Button-gap)'
  });
  const ButtonEndDecorator = styled$1('span', {
    name: 'JoyButton',
    slot: 'EndDecorator',
    overridesResolver: (props, styles) => styles.endDecorator
  })({
    '--Icon-margin': '0 calc(var(--Button-gap) / -2) 0 0',
    '--CircularProgress-margin': '0 calc(var(--Button-gap) / -2) 0 0',
    display: 'inherit',
    marginLeft: 'var(--Button-gap)'
  });
  const ButtonLoadingCenter = styled$1('span', {
    name: 'JoyButton',
    slot: 'LoadingCenter',
    overridesResolver: (props, styles) => styles.loadingIndicatorCenter
  })(({
    theme,
    ownerState
  }) => {
    var _theme$variants, _theme$variants2;
    return _extends$1({
      display: 'inherit',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      color: (_theme$variants = theme.variants[ownerState.variant]) == null || (_theme$variants = _theme$variants[ownerState.color]) == null ? void 0 : _theme$variants.color
    }, ownerState.disabled && {
      color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
    });
  });
  const getButtonStyles = ({
    theme,
    ownerState
  }) => {
    var _theme$variants3, _theme$variants4, _theme$variants5, _theme$variants6;
    return [_extends$1({
      '--Icon-margin': 'initial',
      // reset the icon's margin.
      '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon
    }, ownerState.size === 'sm' && {
      '--Icon-fontSize': theme.vars.fontSize.lg,
      '--CircularProgress-size': '20px',
      // must be `px` unit, otherwise the CircularProgress is broken in Safari
      '--CircularProgress-thickness': '2px',
      '--Button-gap': '0.375rem',
      minHeight: 'var(--Button-minHeight, 2rem)',
      fontSize: theme.vars.fontSize.sm,
      paddingBlock: 'var(--Button-paddingBlock, 0.25rem)',
      paddingInline: '0.75rem'
    }, ownerState.size === 'md' && {
      '--Icon-fontSize': theme.vars.fontSize.xl,
      '--CircularProgress-size': '20px',
      // must be `px` unit, otherwise the CircularProgress is broken in Safari
      '--CircularProgress-thickness': '2px',
      '--Button-gap': '0.5rem',
      minHeight: 'var(--Button-minHeight, 2.25rem)',
      // use min-height instead of height to make the button resilient to its content
      fontSize: theme.vars.fontSize.sm,
      // internal --Button-paddingBlock is used to control the padding-block of the button from the outside, for example as a decorator of an Input
      paddingBlock: 'var(--Button-paddingBlock, 0.375rem)',
      // the padding-block act as a minimum spacing between content and root element
      paddingInline: '1rem'
    }, ownerState.size === 'lg' && {
      '--Icon-fontSize': theme.vars.fontSize.xl2,
      '--CircularProgress-size': '28px',
      // must be `px` unit, otherwise the CircularProgress is broken in Safari
      '--CircularProgress-thickness': '4px',
      '--Button-gap': '0.75rem',
      minHeight: 'var(--Button-minHeight, 2.75rem)',
      fontSize: theme.vars.fontSize.md,
      paddingBlock: 'var(--Button-paddingBlock, 0.5rem)',
      paddingInline: '1.5rem'
    }, {
      WebkitTapHighlightColor: 'transparent',
      boxSizing: 'border-box',
      borderRadius: `var(--Button-radius, ${theme.vars.radius.sm})`,
      // to be controlled by other components, for example Input
      margin: `var(--Button-margin)`,
      // to be controlled by other components, for example Input
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      userSelect: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      textDecoration: 'none',
      // prevent user agent underline when used as anchor
      fontFamily: theme.vars.fontFamily.body,
      fontWeight: theme.vars.fontWeight.lg,
      lineHeight: theme.vars.lineHeight.md
    }, ownerState.fullWidth && {
      width: '100%'
    }, {
      [theme.focus.selector]: theme.focus.default
    }), _extends$1({}, (_theme$variants3 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants3[ownerState.color], {
      '&:hover': {
        '@media (hover: hover)': (_theme$variants4 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants4[ownerState.color]
      },
      '&:active, &[aria-pressed="true"]': (_theme$variants5 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants5[ownerState.color],
      [`&.${buttonClasses.disabled}`]: (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants6[ownerState.color]
    }, ownerState.loadingPosition === 'center' && {
      // this has to come after the variant styles to take effect.
      [`&.${buttonClasses.loading}`]: {
        color: 'transparent'
      }
    })];
  };
  const ButtonRoot = styled$1('button', {
    name: 'JoyButton',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(getButtonStyles);
  /**
   *
   * Demos:
   *
   * - [Button](https://mui.com/joy-ui/react-button/)
   * - [Button Group](https://mui.com/joy-ui/react-button-group/)
   * - [Toggle Button Group](https://mui.com/joy-ui/react-toggle-button-group/)
   *
   * API:
   *
   * - [Button API](https://mui.com/joy-ui/api/button/)
   */
  const Button$1 = /*#__PURE__*/React__namespace.forwardRef(function Button(inProps, ref) {
    var _ref;
    const props = useThemeProps({
      props: inProps,
      name: 'JoyButton'
    });
    const {
        children,
        action,
        color: colorProp = 'primary',
        variant: variantProp = 'solid',
        size: sizeProp = 'md',
        fullWidth = false,
        startDecorator,
        endDecorator,
        loading = false,
        loadingPosition = 'center',
        loadingIndicator: loadingIndicatorProp,
        disabled: disabledProp,
        component,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$t);
    const buttonGroup = React__namespace.useContext(ButtonGroupContext);
    const toggleButtonGroup = React__namespace.useContext(ToggleButtonGroupContext);
    const variant = inProps.variant || buttonGroup.variant || variantProp;
    const size = inProps.size || buttonGroup.size || sizeProp;
    const color = inProps.color || buttonGroup.color || colorProp;
    const disabled = (_ref = inProps.loading || inProps.disabled) != null ? _ref : buttonGroup.disabled || loading || disabledProp;
    const buttonRef = React__namespace.useRef(null);
    const handleRef = useForkRef(buttonRef, ref);
    const {
      focusVisible,
      setFocusVisible,
      getRootProps
    } = useButton(_extends$1({}, props, {
      disabled,
      rootRef: handleRef
    }));
    const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : /*#__PURE__*/require$$2$1.jsx(CircularProgress, {
      color: color,
      thickness: {
        sm: 2,
        md: 3,
        lg: 4
      }[size] || 3
    });
    React__namespace.useImperativeHandle(action, () => ({
      focusVisible: () => {
        var _buttonRef$current;
        setFocusVisible(true);
        (_buttonRef$current = buttonRef.current) == null || _buttonRef$current.focus();
      }
    }), [setFocusVisible]);
    const ownerState = _extends$1({}, props, {
      color,
      fullWidth,
      variant,
      size,
      focusVisible,
      loading,
      loadingPosition,
      disabled
    });
    const classes = useUtilityClasses$e(ownerState);
    const handleClick = event => {
      var _onClick;
      let onClick = props.onClick;
      if (typeof slotProps.root === 'function') {
        onClick = slotProps.root(ownerState).onClick;
      } else if (slotProps.root) {
        onClick = slotProps.root.onClick;
      }
      (_onClick = onClick) == null || _onClick(event);
      if (toggleButtonGroup) {
        var _toggleButtonGroup$on;
        (_toggleButtonGroup$on = toggleButtonGroup.onClick) == null || _toggleButtonGroup$on.call(toggleButtonGroup, event, props.value);
      }
    };
    let ariaPressed = props['aria-pressed'];
    if (typeof slotProps.root === 'function') {
      ariaPressed = slotProps.root(ownerState)['aria-pressed'];
    } else if (slotProps.root) {
      ariaPressed = slotProps.root['aria-pressed'];
    }
    if (toggleButtonGroup != null && toggleButtonGroup.value) {
      if (Array.isArray(toggleButtonGroup.value)) {
        ariaPressed = toggleButtonGroup.value.indexOf(props.value) !== -1;
      } else {
        ariaPressed = toggleButtonGroup.value === props.value;
      }
    }
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: classes.root,
      elementType: ButtonRoot,
      externalForwardedProps,
      getSlotProps: getRootProps,
      ownerState,
      additionalProps: {
        onClick: handleClick,
        'aria-pressed': ariaPressed
      }
    });
    const [SlotStartDecorator, startDecoratorProps] = useSlot('startDecorator', {
      className: classes.startDecorator,
      elementType: ButtonStartDecorator,
      externalForwardedProps,
      ownerState
    });
    const [SlotEndDecorator, endDecoratorProps] = useSlot('endDecorator', {
      className: classes.endDecorator,
      elementType: ButtonEndDecorator,
      externalForwardedProps,
      ownerState
    });
    const [SlotLoadingIndicatorCenter, loadingIndicatorCenterProps] = useSlot('loadingIndicatorCenter', {
      className: classes.loadingIndicatorCenter,
      elementType: ButtonLoadingCenter,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
      children: [(startDecorator || loading && loadingPosition === 'start') && /*#__PURE__*/require$$2$1.jsx(SlotStartDecorator, _extends$1({}, startDecoratorProps, {
        children: loading && loadingPosition === 'start' ? loadingIndicator : startDecorator
      })), children, loading && loadingPosition === 'center' && /*#__PURE__*/require$$2$1.jsx(SlotLoadingIndicatorCenter, _extends$1({}, loadingIndicatorCenterProps, {
        children: loadingIndicator
      })), (endDecorator || loading && loadingPosition === 'end') && /*#__PURE__*/require$$2$1.jsx(SlotEndDecorator, _extends$1({}, endDecoratorProps, {
        children: loading && loadingPosition === 'end' ? loadingIndicator : endDecorator
      }))]
    }));
  });

  // @ts-ignore internal logic for ToggleButtonGroup
  Button$1.muiName = 'Button';

  function getButtonGroupUtilityClass(slot) {
    return generateUtilityClass$1('MuiButtonGroup', slot);
  }
  generateUtilityClasses$1('MuiButtonGroup', ['root', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid', 'sizeSm', 'sizeMd', 'sizeLg', 'horizontal', 'vertical']);

  const _excluded$s = ["buttonFlex", "className", "component", "disabled", "size", "color", "variant", "children", "orientation", "slots", "slotProps", "spacing"];
  const useUtilityClasses$d = ownerState => {
    const {
      size,
      variant,
      color,
      orientation
    } = ownerState;
    const slots = {
      root: ['root', orientation, variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`]
    };
    return composeClasses(slots, getButtonGroupUtilityClass, {});
  };
  const StyledButtonGroup = styled$1('div')(({
    theme,
    ownerState
  }) => {
    var _theme$variants$outli, _theme$variants$outli2, _theme$variants$outli3;
    const {
      borderRadius: radius
    } = resolveSxValue({
      theme,
      ownerState
    }, ['borderRadius']);
    const firstChildRadius = ownerState.orientation === 'vertical' ? 'var(--ButtonGroup-radius) var(--ButtonGroup-radius) var(--unstable_childRadius) var(--unstable_childRadius)' : 'var(--ButtonGroup-radius) var(--unstable_childRadius) var(--unstable_childRadius) var(--ButtonGroup-radius)';
    const lastChildRadius = ownerState.orientation === 'vertical' ? 'var(--unstable_childRadius) var(--unstable_childRadius) var(--ButtonGroup-radius) var(--ButtonGroup-radius)' : 'var(--unstable_childRadius) var(--ButtonGroup-radius) var(--ButtonGroup-radius) var(--unstable_childRadius)';
    const margin = ownerState.orientation === 'vertical' ? 'calc(var(--ButtonGroup-separatorSize) * -1) 0 0 0' : '0 0 0 calc(var(--ButtonGroup-separatorSize) * -1)';
    const styles = {};
    traverseBreakpoints(theme.breakpoints, ownerState.spacing, (appendStyle, value) => {
      if (value !== null) {
        var _theme$spacing;
        appendStyle(styles, {
          // the buttons should be connected if the value is more than 0
          '--ButtonGroup-connected': value.toString().match(/^0(?!\.)/) ? '1' : '0',
          gap: typeof value === 'string' ? value : (_theme$spacing = theme.spacing) == null ? void 0 : _theme$spacing.call(theme, value)
        });
      }
    });
    const outlinedStyle = (_theme$variants$outli = theme.variants.outlined) == null ? void 0 : _theme$variants$outli[ownerState.color];
    const outlinedDisabledStyle = (_theme$variants$outli2 = theme.variants.outlinedDisabled) == null ? void 0 : _theme$variants$outli2[ownerState.color];
    const outlinedHoverStyle = (_theme$variants$outli3 = theme.variants.outlinedHover) == null ? void 0 : _theme$variants$outli3[ownerState.color];
    return [_extends$1({
      '--ButtonGroup-separatorSize': ownerState.variant === 'outlined' ? '1px' : 'calc(var(--ButtonGroup-connected) * 1px)',
      '--ButtonGroup-separatorColor': outlinedStyle == null ? void 0 : outlinedStyle.borderColor,
      '--ButtonGroup-radius': theme.vars.radius.sm,
      '--Divider-inset': '0.5rem',
      '--unstable_childRadius': 'calc((1 - var(--ButtonGroup-connected)) * var(--ButtonGroup-radius) - var(--variant-borderWidth, 0px))'
    }, styles, {
      display: 'flex',
      borderRadius: 'var(--ButtonGroup-radius)',
      flexDirection: ownerState.orientation === 'vertical' ? 'column' : 'row',
      // first Button or IconButton
      [`& > [data-first-child]`]: _extends$1({
        '--Button-radius': firstChildRadius,
        '--IconButton-radius': firstChildRadius
      }, ownerState.orientation === 'horizontal' && {
        borderRight: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      }, ownerState.orientation === 'vertical' && {
        borderBottom: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      }),
      // middle Buttons or IconButtons
      [`& > :not([data-first-child]):not([data-last-child]):not(:only-child)`]: _extends$1({
        '--Button-radius': 'var(--unstable_childRadius)',
        '--IconButton-radius': 'var(--unstable_childRadius)',
        borderRadius: 'var(--unstable_childRadius)'
      }, ownerState.orientation === 'horizontal' && {
        borderLeft: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)',
        borderRight: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      }, ownerState.orientation === 'vertical' && {
        borderTop: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)',
        borderBottom: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      }),
      // last Button or IconButton
      [`& > [data-last-child]`]: _extends$1({
        '--Button-radius': lastChildRadius,
        '--IconButton-radius': lastChildRadius
      }, ownerState.orientation === 'horizontal' && {
        borderLeft: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      }, ownerState.orientation === 'vertical' && {
        borderTop: 'var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)'
      }),
      // single Button or IconButton
      [`& > :only-child`]: {
        '--Button-radius': 'var(--ButtonGroup-radius)',
        '--IconButton-radius': 'var(--ButtonGroup-radius)'
      },
      [`& > :not([data-first-child]):not(:only-child)`]: {
        '--Button-margin': margin,
        '--IconButton-margin': margin
      },
      [`& .${buttonClasses.root}, & .${iconButtonClasses.root}`]: _extends$1({
        '&:not(:disabled)': {
          zIndex: 1 // to make borders appear above disabled buttons.
        },
        '&:disabled': {
          '--ButtonGroup-separatorColor': outlinedDisabledStyle == null ? void 0 : outlinedDisabledStyle.borderColor
        }
      }, ownerState.variant === 'outlined' && {
        '&:hover': {
          '--ButtonGroup-separatorColor': outlinedHoverStyle == null ? void 0 : outlinedHoverStyle.borderColor
        }
      }, {
        [`&:hover, ${theme.focus.selector}`]: {
          zIndex: 2 // to make borders appear above sibling.
        }
      })
    }, ownerState.buttonFlex && {
      [`& > *:not(.${iconButtonClasses.root})`]: {
        flex: ownerState.buttonFlex
      },
      [`& > :not(button) > .${buttonClasses.root}`]: {
        width: '100%' // for button to fill its wrapper.
      }
    }), radius !== undefined && {
      '--ButtonGroup-radius': radius
    }];
  });
  const ButtonGroupRoot = styled$1(StyledButtonGroup, {
    name: 'JoyButtonGroup',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({});

  /**
   *
   * Demos:
   *
   * - [Button Group](https://mui.com/joy-ui/react-button-group/)
   *
   * API:
   *
   * - [ButtonGroup API](https://mui.com/joy-ui/api/button-group/)
   */
  const ButtonGroup = /*#__PURE__*/React__namespace.forwardRef(function ButtonGroup(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoyButtonGroup'
    });
    const {
        buttonFlex,
        className,
        component = 'div',
        disabled = false,
        size = 'md',
        color = 'neutral',
        variant = 'outlined',
        children,
        orientation = 'horizontal',
        slots = {},
        slotProps = {},
        spacing = 0
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$s);
    const ownerState = _extends$1({}, props, {
      buttonFlex,
      color,
      component,
      orientation,
      spacing,
      size,
      variant
    });
    const classes = useUtilityClasses$d(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: ButtonGroupRoot,
      externalForwardedProps,
      additionalProps: {
        role: 'group'
      },
      ownerState
    });
    const buttonGroupContext = React__namespace.useMemo(() => ({
      variant,
      color,
      size,
      disabled
    }), [variant, color, size, disabled]);
    return /*#__PURE__*/require$$2$1.jsx(SlotRoot, _extends$1({}, rootProps, {
      children: /*#__PURE__*/require$$2$1.jsx(ButtonGroupContext.Provider, {
        value: buttonGroupContext,
        children: React__namespace.Children.map(children, (child, index) => {
          if (! /*#__PURE__*/React__namespace.isValidElement(child)) {
            return child;
          }
          const extraProps = {};
          if (isMuiElement(child, ['Divider'])) {
            extraProps.inset = 'inset' in child.props ? child.props.inset : 'context';
            const dividerOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
            extraProps.orientation = 'orientation' in child.props ? child.props.orientation : dividerOrientation;
            extraProps.role = 'presentation';
            extraProps.component = 'span';
          }
          if (React__namespace.Children.count(children) > 1) {
            if (index === 0) {
              extraProps['data-first-child'] = '';
            }
            if (index === React__namespace.Children.count(children) - 1) {
              extraProps['data-last-child'] = '';
            }
          }
          return /*#__PURE__*/React__namespace.cloneElement(child, extraProps);
        })
      })
    }));
  });

  function getDividerUtilityClass(slot) {
    return generateUtilityClass$1('MuiDivider', slot);
  }
  generateUtilityClasses$1('MuiDivider', ['root', 'horizontal', 'vertical', 'insetContext', 'insetNone']);

  function getCheckboxUtilityClass(slot) {
    return generateUtilityClass$1('MuiCheckbox', slot);
  }
  const checkboxClasses = generateUtilityClasses$1('MuiCheckbox', ['root', 'checkbox', 'action', 'input', 'label', 'checked', 'disabled', 'focusVisible', 'indeterminate', 'colorPrimary', 'colorDanger', 'colorNeutral', 'colorSuccess', 'colorWarning', 'colorContext', 'sizeSm', 'sizeMd', 'sizeLg', 'variantOutlined', 'variantSoft', 'variantSolid']);

  var CheckIcon = createSvgIcon$2( /*#__PURE__*/require$$2$1.jsx("path", {
    d: "M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"
  }), 'Check');

  var IndeterminateIcon = createSvgIcon$2( /*#__PURE__*/require$$2$1.jsx("path", {
    d: "M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z"
  }), 'HorizontalRule');

  const _excluded$r = ["checked", "uncheckedIcon", "checkedIcon", "label", "defaultChecked", "disabled", "disableIcon", "overlay", "id", "indeterminate", "indeterminateIcon", "name", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "value", "color", "variant", "size", "component", "slots", "slotProps"];
  const useUtilityClasses$c = ownerState => {
    const {
      checked,
      disabled,
      disableIcon,
      focusVisible,
      color,
      variant,
      size,
      indeterminate
    } = ownerState;
    const slots = {
      root: ['root', checked && 'checked', disabled && 'disabled', focusVisible && 'focusVisible', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`],
      checkbox: ['checkbox', checked && 'checked', indeterminate && 'indeterminate', disabled && 'disabled' // disabled class is necessary for displaying global variant
      ],
      action: ['action', checked && 'checked', disableIcon && disabled && 'disabled',
      // add disabled class to action element for displaying global variant
      focusVisible && 'focusVisible'],
      input: ['input'],
      label: ['label']
    };
    return composeClasses(slots, getCheckboxUtilityClass, {});
  };
  const CheckboxRoot = styled$1('span', {
    name: 'JoyCheckbox',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    ownerState,
    theme
  }) => {
    var _theme$variants$plain, _theme$variants, _theme$variants2;
    return _extends$1({
      '--Icon-fontSize': 'var(--Checkbox-size)'
    }, ownerState.size === 'sm' && {
      '--Checkbox-size': '1rem',
      '& ~ *': {
        '--FormHelperText-margin': '0 0 0 1.5rem'
      },
      fontSize: theme.vars.fontSize.sm,
      gap: 'var(--Checkbox-gap, 0.5rem)'
    }, ownerState.size === 'md' && {
      '--Checkbox-size': '1.25rem',
      '& ~ *': {
        '--FormHelperText-margin': '0.25rem 0 0 1.875rem'
      },
      fontSize: theme.vars.fontSize.md,
      gap: 'var(--Checkbox-gap, 0.625rem)'
    }, ownerState.size === 'lg' && {
      '--Checkbox-size': '1.5rem',
      '& ~ *': {
        '--FormHelperText-margin': '0.375rem 0 0 2.25rem'
      },
      fontSize: theme.vars.fontSize.lg,
      gap: 'var(--Checkbox-gap, 0.75rem)'
    }, {
      position: ownerState.overlay ? 'initial' : 'relative',
      display: 'inline-flex',
      fontFamily: theme.vars.fontFamily.body,
      lineHeight: 'var(--Checkbox-size)',
      color: theme.vars.palette.text.primary,
      [`&.${checkboxClasses.disabled}`]: {
        color: (_theme$variants$plain = theme.variants.plainDisabled) == null || (_theme$variants$plain = _theme$variants$plain[ownerState.color]) == null ? void 0 : _theme$variants$plain.color
      }
    }, ownerState.disableIcon && {
      color: (_theme$variants = theme.variants[ownerState.variant]) == null || (_theme$variants = _theme$variants[ownerState.color]) == null ? void 0 : _theme$variants.color,
      [`&.${checkboxClasses.disabled}`]: {
        color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
      }
    });
  });
  const CheckboxCheckbox = styled$1('span', {
    name: 'JoyCheckbox',
    slot: 'Checkbox',
    overridesResolver: (props, styles) => styles.checkbox
  })(({
    theme,
    ownerState
  }) => {
    var _theme$variants3, _variantStyle$backgro, _theme$variants4, _theme$variants5, _theme$variants6;
    const variantStyle = (_theme$variants3 = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants3[ownerState.color];
    return [_extends$1({
      '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon,
      boxSizing: 'border-box',
      borderRadius: `min(${theme.vars.radius.sm}, 0.25rem)`,
      width: 'var(--Checkbox-size)',
      height: 'var(--Checkbox-size)',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0
    }, ownerState.disableIcon && {
      display: 'contents'
    }, {
      [`&.${checkboxClasses.checked}, &.${checkboxClasses.indeterminate}`]: {
        '--Icon-color': 'currentColor'
      }
    }), ...(!ownerState.disableIcon ? [_extends$1({}, variantStyle, {
      backgroundColor: (_variantStyle$backgro = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro : theme.vars.palette.background.surface
    }), {
      '&:hover': {
        '@media (hover: hover)': (_theme$variants4 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants4[ownerState.color]
      }
    }, {
      '&:active': (_theme$variants5 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants5[ownerState.color]
    }, {
      [`&.${checkboxClasses.disabled}`]: (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants6[ownerState.color]
    }] : [])];
  });
  const CheckboxAction = styled$1('span', {
    name: 'JoyCheckbox',
    slot: 'Action',
    overridesResolver: (props, styles) => styles.action
  })(({
    theme,
    ownerState
  }) => {
    var _theme$variants7, _theme$variants8, _theme$variants9, _theme$variants10;
    return [{
      borderRadius: `var(--Checkbox-actionRadius, ${ownerState.overlay ? 'var(--unstable_actionRadius, inherit)' : 'inherit'})`,
      textAlign: 'left',
      // prevent text-align inheritance
      position: 'absolute',
      top: 'calc(-1 * var(--variant-borderWidth, 0px))',
      // clickable on the border and focus outline does not move when checked/unchecked
      left: 'calc(-1 * var(--variant-borderWidth, 0px))',
      bottom: 'calc(-1 * var(--variant-borderWidth, 0px))',
      right: 'calc(-1 * var(--variant-borderWidth, 0px))',
      zIndex: 1,
      // The action element usually cover the area of nearest positioned parent
      [theme.focus.selector]: theme.focus.default
    }, ...(ownerState.disableIcon ? [(_theme$variants7 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants7[ownerState.color], {
      '&:hover': (_theme$variants8 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants8[ownerState.color]
    }, {
      '&:active': (_theme$variants9 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants9[ownerState.color]
    }, {
      [`&.${checkboxClasses.disabled}`]: (_theme$variants10 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants10[ownerState.color]
    }] : [])];
  });
  const CheckboxInput = styled$1('input', {
    name: 'JoyCheckbox',
    slot: 'Input',
    overridesResolver: (props, styles) => styles.input
  })(() => ({
    margin: 0,
    opacity: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    cursor: 'pointer'
  }));
  const CheckboxLabel = styled$1('label', {
    name: 'JoyCheckbox',
    slot: 'Label',
    overridesResolver: (props, styles) => styles.label
  })(({
    ownerState
  }) => _extends$1({
    flex: 1,
    minWidth: 0
  }, ownerState.disableIcon && {
    zIndex: 1,
    // label should stay on top of the action.
    pointerEvents: 'none' // makes hover ineffect.
  }));
  const defaultCheckedIcon = /*#__PURE__*/require$$2$1.jsx(CheckIcon, {});
  const defaultIndeterminateIcon = /*#__PURE__*/require$$2$1.jsx(IndeterminateIcon, {});
  /**
   *
   * Demos:
   *
   * - [Checkbox](https://mui.com/joy-ui/react-checkbox/)
   *
   * API:
   *
   * - [Checkbox API](https://mui.com/joy-ui/api/checkbox/)
   */
  const Checkbox$1 = /*#__PURE__*/React__namespace.forwardRef(function Checkbox(inProps, ref) {
    var _ref, _inProps$disabled, _ref2, _inProps$size, _formControl$color;
    const props = useThemeProps({
      props: inProps,
      name: 'JoyCheckbox'
    });
    const {
        checked: checkedProp,
        uncheckedIcon,
        checkedIcon = defaultCheckedIcon,
        label,
        defaultChecked,
        disabled: disabledExternalProp,
        disableIcon = false,
        overlay,
        id: idOverride,
        indeterminate = false,
        indeterminateIcon = defaultIndeterminateIcon,
        name,
        onBlur,
        onChange,
        onFocus,
        onFocusVisible,
        readOnly,
        required,
        value,
        color: colorProp,
        variant: variantProp,
        size: sizeProp = 'md',
        component,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$r);
    const formControl = React__namespace.useContext(FormControlContext);
    const disabledProp = (_ref = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : formControl == null ? void 0 : formControl.disabled) != null ? _ref : disabledExternalProp;
    const size = (_ref2 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref2 : sizeProp;
    const id = useId(idOverride != null ? idOverride : formControl == null ? void 0 : formControl.htmlFor);
    const useCheckboxProps = {
      checked: checkedProp,
      defaultChecked,
      disabled: disabledProp,
      onBlur,
      onChange,
      onFocus,
      onFocusVisible
    };
    const {
      getInputProps,
      checked,
      disabled,
      focusVisible
    } = useSwitch(useCheckboxProps);
    const isCheckboxActive = checked || indeterminate;
    const activeVariant = variantProp || 'solid';
    const inactiveVariant = variantProp || 'outlined';
    const variant = isCheckboxActive ? activeVariant : inactiveVariant;
    const color = inProps.color || (formControl != null && formControl.error ? 'danger' : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp);
    const activeColor = color || 'primary';
    const inactiveColor = color || 'neutral';
    const ownerState = _extends$1({}, props, {
      checked,
      disabled,
      disableIcon,
      overlay,
      focusVisible,
      color: isCheckboxActive ? activeColor : inactiveColor,
      variant,
      size
    });
    const classes = useUtilityClasses$c(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: classes.root,
      elementType: CheckboxRoot,
      externalForwardedProps,
      ownerState
    });
    const [SlotCheckbox, checkboxProps] = useSlot('checkbox', {
      className: classes.checkbox,
      elementType: CheckboxCheckbox,
      externalForwardedProps,
      ownerState
    });
    const [SlotAction, actionProps] = useSlot('action', {
      className: classes.action,
      elementType: CheckboxAction,
      externalForwardedProps,
      ownerState
    });
    const [SlotInput, inputProps] = useSlot('input', {
      additionalProps: _extends$1({
        id,
        name,
        value,
        readOnly,
        role: undefined,
        required: required != null ? required : formControl == null ? void 0 : formControl.required,
        'aria-describedby': formControl == null ? void 0 : formControl['aria-describedby']
      }, indeterminate && {
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked#values
        'aria-checked': 'mixed'
      }),
      className: classes.input,
      elementType: CheckboxInput,
      externalForwardedProps,
      getSlotProps: getInputProps,
      ownerState
    });
    const [SlotLabel, labelProps] = useSlot('label', {
      additionalProps: {
        htmlFor: id
      },
      className: classes.label,
      elementType: CheckboxLabel,
      externalForwardedProps,
      ownerState
    });
    let icon = uncheckedIcon;
    if (disableIcon) {
      icon = null;
    } else if (indeterminate) {
      icon = indeterminateIcon;
    } else if (checked) {
      icon = checkedIcon;
    }
    return /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
      children: [/*#__PURE__*/require$$2$1.jsxs(SlotCheckbox, _extends$1({}, checkboxProps, {
        children: [/*#__PURE__*/require$$2$1.jsx(SlotAction, _extends$1({}, actionProps, {
          children: /*#__PURE__*/require$$2$1.jsx(SlotInput, _extends$1({}, inputProps))
        })), icon]
      })), label && /*#__PURE__*/require$$2$1.jsx(TypographyNestedContext.Provider, {
        value: true,
        children: /*#__PURE__*/require$$2$1.jsx(SlotLabel, _extends$1({}, labelProps, {
          children: label
        }))
      })]
    }));
  });

  const _excluded$q = ["className", "children", "component", "inset", "orientation", "role", "slots", "slotProps"];
  const useUtilityClasses$b = ownerState => {
    const {
      orientation,
      inset
    } = ownerState;
    const slots = {
      root: ['root', orientation, inset && `inset${capitalize$1(inset)}`]
    };
    return composeClasses(slots, getDividerUtilityClass, {});
  };
  const DividerRoot = styled$1('hr', {
    name: 'JoyDivider',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme,
    ownerState
  }) => _extends$1({
    '--Divider-thickness': '1px',
    '--Divider-lineColor': theme.vars.palette.divider
  }, ownerState.inset === 'none' && {
    '--_Divider-inset': '0px'
  }, ownerState.inset === 'context' && {
    '--_Divider-inset': 'var(--Divider-inset, 0px)'
  }, {
    margin: 'initial',
    // reset margin for `hr` tag
    marginInline: ownerState.orientation === 'vertical' ? 'initial' : 'var(--_Divider-inset)',
    marginBlock: ownerState.orientation === 'vertical' ? 'var(--_Divider-inset)' : 'initial',
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0
  }, ownerState.children ? _extends$1({
    '--Divider-gap': theme.spacing(1),
    '--Divider-childPosition': '50%',
    display: 'flex',
    flexDirection: ownerState.orientation === 'vertical' ? 'column' : 'row',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    border: 0
  }, theme.typography['body-sm'], {
    '&::before, &::after': {
      position: 'relative',
      inlineSize: ownerState.orientation === 'vertical' ? 'var(--Divider-thickness)' : 'initial',
      blockSize: ownerState.orientation === 'vertical' ? 'initial' : 'var(--Divider-thickness)',
      backgroundColor: 'var(--Divider-lineColor)',
      // use logical size + background is better than border because they work with gradient.
      content: '""'
    },
    '&::before': {
      marginInlineEnd: ownerState.orientation === 'vertical' ? 'initial' : 'min(var(--Divider-childPosition) * 999, var(--Divider-gap))',
      marginBlockEnd: ownerState.orientation === 'vertical' ? 'min(var(--Divider-childPosition) * 999, var(--Divider-gap))' : 'initial',
      flexBasis: 'var(--Divider-childPosition)'
    },
    '&::after': {
      marginInlineStart: ownerState.orientation === 'vertical' ? 'initial' : 'min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))',
      marginBlockStart: ownerState.orientation === 'vertical' ? 'min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))' : 'initial',
      flexBasis: 'calc(100% - var(--Divider-childPosition))'
    }
  }) : {
    border: 'none',
    // reset the border for `hr` tag
    listStyle: 'none',
    backgroundColor: 'var(--Divider-lineColor)',
    // use logical size + background is better than border because they work with gradient.
    inlineSize: ownerState.orientation === 'vertical' ? 'var(--Divider-thickness)' : 'initial',
    blockSize: ownerState.orientation === 'vertical' ? 'initial' : 'var(--Divider-thickness)'
  }));
  /**
   *
   * Demos:
   *
   * - [Divider](https://mui.com/joy-ui/react-divider/)
   *
   * API:
   *
   * - [Divider API](https://mui.com/joy-ui/api/divider/)
   */
  const Divider$1 = /*#__PURE__*/React__namespace.forwardRef(function Divider(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoyDivider'
    });
    const {
        className,
        children,
        component = children !== undefined && children !== null ? 'div' : 'hr',
        inset,
        orientation = 'horizontal',
        role = component !== 'hr' ? 'separator' : undefined,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$q);
    const ownerState = _extends$1({}, props, {
      inset,
      role,
      orientation,
      component
    });
    const classes = useUtilityClasses$b(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: DividerRoot,
      externalForwardedProps,
      ownerState,
      additionalProps: _extends$1({
        as: component,
        role
      }, role === 'separator' && orientation === 'vertical' && {
        // The implicit aria-orientation of separator is 'horizontal'
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role
        'aria-orientation': 'vertical'
      })
    });
    return /*#__PURE__*/require$$2$1.jsx(SlotRoot, _extends$1({}, rootProps, {
      children: children
    }));
  });

  // @ts-ignore internal logic
  Divider$1.muiName = 'Divider';

  function getFormControlUtilityClass(slot) {
    return generateUtilityClass$1('MuiFormControl', slot);
  }
  const formControlClasses = generateUtilityClasses$1('MuiFormControl', ['root', 'error', 'disabled', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'sizeSm', 'sizeMd', 'sizeLg', 'horizontal', 'vertical']);

  const switchClasses = generateUtilityClasses$1('MuiSwitch', ['root', 'checked', 'disabled', 'action', 'input', 'thumb', 'track', 'focusVisible', 'readOnly', 'colorPrimary', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'sizeSm', 'sizeMd', 'sizeLg', 'variantOutlined', 'variantSoft', 'variantSolid', 'startDecorator', 'endDecorator']);

  const _excluded$p = ["id", "className", "component", "disabled", "required", "error", "color", "size", "orientation", "slots", "slotProps"];
  const useUtilityClasses$a = ownerState => {
    const {
      disabled,
      error,
      size,
      color,
      orientation
    } = ownerState;
    const slots = {
      root: ['root', orientation, disabled && 'disabled', error && 'error', color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`]
    };
    return composeClasses(slots, getFormControlUtilityClass, {});
  };
  const FormControlRoot = styled$1('div', {
    name: 'JoyFormControl',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme,
    ownerState
  }) => {
    var _theme$vars$palette$o, _theme$variants$plain, _theme$variants$plain2;
    return _extends$1({
      '--unstable_RadioGroup-margin': '0.5rem 0',
      '--FormLabel-alignSelf': ownerState.orientation === 'horizontal' ? 'align-items' : 'flex-start',
      '--FormLabel-asteriskColor': theme.vars.palette.danger[500]
    }, ownerState.size === 'sm' && {
      '--FormLabel-fontSize': theme.vars.fontSize.xs,
      '--FormLabel-lineHeight': theme.vars.lineHeight.xl,
      '--FormLabel-margin': ownerState.orientation === 'horizontal' ? '0 0.5rem 0 0' : '0 0 0.25rem 0',
      '--FormHelperText-fontSize': theme.vars.fontSize.xs,
      '--FormHelperText-lineHeight': theme.vars.lineHeight.xl
    }, ownerState.size === 'md' && {
      '--FormLabel-fontSize': theme.vars.fontSize.sm,
      '--FormLabel-lineHeight': theme.vars.lineHeight.sm,
      '--FormLabel-margin': ownerState.orientation === 'horizontal' ? '0 0.75rem 0 0' : '0 0 0.375rem 0',
      '--FormHelperText-fontSize': theme.vars.fontSize.sm,
      '--FormHelperText-lineHeight': theme.vars.lineHeight.sm
    }, ownerState.size === 'lg' && {
      '--FormLabel-fontSize': theme.vars.fontSize.md,
      '--FormLabel-lineHeight': theme.vars.lineHeight.md,
      '--FormLabel-margin': ownerState.orientation === 'horizontal' ? '0 1rem 0 0' : '0 0 0.5rem 0',
      '--FormHelperText-fontSize': theme.vars.fontSize.sm,
      '--FormHelperText-lineHeight': theme.vars.lineHeight.sm
    }, ownerState.color && {
      '--FormHelperText-color': (_theme$vars$palette$o = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette$o[500]
    }, {
      '--FormHelperText-margin': '0.375rem 0 0 0',
      [`&.${formControlClasses.error}`]: {
        '--FormHelperText-color': theme.vars.palette.danger[500]
      },
      [`&.${formControlClasses.disabled}`]: {
        '--FormLabel-color': (_theme$variants$plain = theme.variants.plainDisabled) == null || (_theme$variants$plain = _theme$variants$plain[ownerState.color || 'neutral']) == null ? void 0 : _theme$variants$plain.color,
        '--FormHelperText-color': (_theme$variants$plain2 = theme.variants.plainDisabled) == null || (_theme$variants$plain2 = _theme$variants$plain2[ownerState.color || 'neutral']) == null ? void 0 : _theme$variants$plain2.color
      },
      display: 'flex',
      position: 'relative',
      // for keeping the control action area, for example Switch
      flexDirection: ownerState.orientation === 'horizontal' ? 'row' : 'column'
    }, ownerState.orientation === 'horizontal' && {
      [`& > label ~ .${switchClasses.root}`]: {
        '--unstable_Switch-margin': '0 0 0 auto'
      }
    });
  });
  /**
   *
   * Demos:
   *
   * - [Input](https://mui.com/joy-ui/react-input/)
   *
   * API:
   *
   * - [FormControl API](https://mui.com/joy-ui/api/form-control/)
   */
  const FormControl = /*#__PURE__*/React__namespace.forwardRef(function FormControl(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoyFormControl'
    });
    const {
        id: idOverride,
        className,
        component = 'div',
        disabled = false,
        required = false,
        error = false,
        color,
        size = 'md',
        orientation = 'vertical',
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$p);
    const id = useId(idOverride);
    const [helperText, setHelperText] = React__namespace.useState(null);
    const ownerState = _extends$1({}, props, {
      id,
      component,
      color,
      disabled,
      error,
      required,
      size,
      orientation
    });
    let registerEffect;
    const classes = useUtilityClasses$a(ownerState);
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: FormControlRoot,
      externalForwardedProps: _extends$1({}, other, {
        component,
        slots,
        slotProps
      }),
      ownerState
    });
    const formControlContextValue = React__namespace.useMemo(() => ({
      disabled,
      required,
      error,
      color,
      size,
      htmlFor: id,
      labelId: `${id}-label`,
      'aria-describedby': helperText ? `${id}-helper-text` : undefined,
      setHelperText,
      registerEffect: registerEffect
    }), [color, disabled, error, helperText, id, registerEffect, required, size]);
    return /*#__PURE__*/require$$2$1.jsx(FormControlContext.Provider, {
      value: formControlContextValue,
      children: /*#__PURE__*/require$$2$1.jsx(SlotRoot, _extends$1({}, rootProps))
    });
  });

  function getFormLabelUtilityClass(slot) {
    return generateUtilityClass$1('MuiFormLabel', slot);
  }
  generateUtilityClasses$1('MuiFormLabel', ['root', 'asterisk']);

  const _excluded$o = ["children", "component", "htmlFor", "id", "slots", "slotProps"];
  const useUtilityClasses$9 = () => {
    const slots = {
      root: ['root'],
      asterisk: ['asterisk']
    };
    return composeClasses(slots, getFormLabelUtilityClass, {});
  };
  const FormLabelRoot = styled$1('label', {
    name: 'JoyFormLabel',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme
  }) => ({
    '--Icon-fontSize': 'calc(var(--FormLabel-lineHeight) * 1em)',
    WebkitTapHighlightColor: 'transparent',
    alignSelf: 'var(--FormLabel-alignSelf)',
    // to not fill the block space. It seems like a bug when clicking on empty space (within the label area), even though it is not.
    display: 'flex',
    gap: '2px',
    alignItems: 'center',
    flexWrap: 'wrap',
    userSelect: 'none',
    fontFamily: theme.vars.fontFamily.body,
    fontSize: `var(--FormLabel-fontSize, ${theme.vars.fontSize.sm})`,
    fontWeight: theme.vars.fontWeight.md,
    lineHeight: `var(--FormLabel-lineHeight, ${theme.vars.lineHeight.sm})`,
    color: `var(--FormLabel-color, ${theme.vars.palette.text.primary})`,
    margin: 'var(--FormLabel-margin, 0px)'
  }));
  const AsteriskComponent = styled$1('span', {
    name: 'JoyFormLabel',
    slot: 'Asterisk',
    overridesResolver: (props, styles) => styles.asterisk
  })({
    color: 'var(--FormLabel-asteriskColor)'
  });
  /**
   *
   * Demos:
   *
   * - [Input](https://mui.com/joy-ui/react-input/)
   *
   * API:
   *
   * - [FormLabel API](https://mui.com/joy-ui/api/form-label/)
   */
  const FormLabel = /*#__PURE__*/React__namespace.forwardRef(function FormLabel(inProps, ref) {
    var _ref, _inProps$required;
    const props = useThemeProps({
      props: inProps,
      name: 'JoyFormLabel'
    });
    const {
        children,
        component = 'label',
        htmlFor,
        id,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$o);
    const formControl = React__namespace.useContext(FormControlContext);
    const required = (_ref = (_inProps$required = inProps.required) != null ? _inProps$required : formControl == null ? void 0 : formControl.required) != null ? _ref : false;
    const ownerState = _extends$1({}, props, {
      required
    });
    const classes = useUtilityClasses$9();
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      additionalProps: {
        htmlFor: htmlFor != null ? htmlFor : formControl == null ? void 0 : formControl.htmlFor,
        id: id != null ? id : formControl == null ? void 0 : formControl.labelId
      },
      ref,
      className: classes.root,
      elementType: FormLabelRoot,
      externalForwardedProps,
      ownerState
    });
    const [SlotAsterisk, asteriskProps] = useSlot('asterisk', {
      additionalProps: {
        'aria-hidden': true
      },
      className: classes.asterisk,
      elementType: AsteriskComponent,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
      children: [children, required && /*#__PURE__*/require$$2$1.jsxs(SlotAsterisk, _extends$1({}, asteriskProps, {
        children: ["\u2009", '*']
      }))]
    }));
  });

  function getMenuUtilityClass(slot) {
    return generateUtilityClass$1('MuiMenu', slot);
  }
  generateUtilityClasses$1('MuiMenu', ['root', 'listbox', 'expanded', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid', 'sizeSm', 'sizeMd', 'sizeLg']);

  const _excluded$n = ["actions", "children", "color", "component", "disablePortal", "keepMounted", "id", "invertedColors", "onItemsChange", "modifiers", "variant", "size", "slots", "slotProps"];
  const useUtilityClasses$8 = ownerState => {
    const {
      open,
      variant,
      color,
      size
    } = ownerState;
    const slots = {
      root: ['root', open && 'expanded', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`],
      listbox: ['listbox']
    };
    return composeClasses(slots, getMenuUtilityClass, {});
  };
  const MenuRoot = styled$1(StyledList, {
    name: 'JoyMenu',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme,
    ownerState
  }) => {
    var _theme$variants, _theme$variants2;
    const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
    return [_extends$1({
      '--focus-outline-offset': `calc(${theme.vars.focus.thickness} * -1)`,
      // to prevent the focus outline from being cut by overflow
      '--ListItem-stickyBackground': (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.popup,
      '--ListItem-stickyTop': 'calc(var(--List-padding, var(--ListDivider-gap)) * -1)'
    }, scopedVariables, {
      borderRadius: `var(--List-radius, ${theme.vars.radius.sm})`,
      boxShadow: theme.shadow.md,
      overflow: 'auto',
      // `unstable_popup-zIndex` is a private variable that lets other component, for example Modal, to override the z-index so that the listbox can be displayed above the Modal.
      zIndex: `var(--unstable_popup-zIndex, ${theme.vars.zIndex.popup})`
    }, !(variantStyle != null && variantStyle.backgroundColor) && {
      backgroundColor: theme.vars.palette.background.popup
    }, ownerState.variant === 'solid' && ownerState.color && ownerState.invertedColors && applySolidInversion(ownerState.color)(theme), ownerState.variant === 'soft' && ownerState.color && ownerState.invertedColors && applySoftInversion(ownerState.color)(theme), (_theme$variants2 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants2[ownerState.color])];
  });

  /**
   *
   * Demos:
   *
   * - [Menu](https://mui.com/joy-ui/react-menu/)
   *
   * API:
   *
   * - [Menu API](https://mui.com/joy-ui/api/menu/)
   * - inherits [Popper API](https://mui.com/base-ui/react-popper/components-api/#popper)
   */
  const Menu = /*#__PURE__*/React__namespace.forwardRef(function Menu(inProps, ref) {
    var _props$slots;
    const props = useThemeProps({
      props: inProps,
      name: 'JoyMenu'
    });
    const {
        actions,
        children,
        color = 'neutral',
        component,
        disablePortal = false,
        keepMounted = false,
        id,
        invertedColors = false,
        onItemsChange,
        modifiers: modifiersProp,
        variant = 'outlined',
        size = 'md',
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$n);
    const {
      contextValue,
      getListboxProps,
      dispatch,
      open,
      triggerElement
    } = useMenu({
      onItemsChange,
      id,
      listboxRef: ref
    });
    React__namespace.useImperativeHandle(actions, () => ({
      dispatch,
      resetHighlight: () => dispatch({
        type: ListActionTypes.resetHighlight,
        event: null
      })
    }), [dispatch]);
    const ownerState = _extends$1({}, props, {
      disablePortal,
      invertedColors,
      color,
      variant,
      size,
      open,
      nesting: false,
      row: false
    });
    const classes = useUtilityClasses$8(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const modifiers = React__namespace.useMemo(() => [{
      name: 'offset',
      options: {
        offset: [0, 4]
      }
    }, ...(modifiersProp || [])], [modifiersProp]);
    const rootProps = useSlotProps({
      elementType: MenuRoot,
      getSlotProps: getListboxProps,
      externalForwardedProps,
      externalSlotProps: {},
      ownerState: ownerState,
      additionalProps: {
        anchorEl: triggerElement,
        open: open && triggerElement !== null,
        disablePortal,
        keepMounted,
        modifiers
      },
      className: classes.root
    });
    return /*#__PURE__*/require$$2$1.jsx(MenuRoot, _extends$1({}, rootProps, !((_props$slots = props.slots) != null && _props$slots.root) && {
      as: Popper,
      slots: {
        root: component || 'ul'
      }
    }, {
      children: /*#__PURE__*/require$$2$1.jsx(MenuProvider, {
        value: contextValue,
        children: /*#__PURE__*/require$$2$1.jsx(VariantColorProvider, {
          variant: invertedColors ? undefined : variant,
          color: color,
          children: /*#__PURE__*/require$$2$1.jsx(GroupListContext.Provider, {
            value: "menu",
            children: /*#__PURE__*/require$$2$1.jsx(ListProvider, {
              nested: true,
              children: children
            })
          })
        })
      })
    }));
  });

  function getMenuButtonUtilityClass(slot) {
    return generateUtilityClass$1('MuiMenuButton', slot);
  }
  generateUtilityClasses$1('MuiMenuButton', ['root', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorInfo', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid', 'disabled', 'sizeSm', 'sizeMd', 'sizeLg', 'fullWidth', 'startDecorator', 'endDecorator', 'loading', 'loadingIndicatorCenter']);

  const _excluded$m = ["children", "color", "component", "disabled", "endDecorator", "loading", "loadingPosition", "loadingIndicator", "size", "slotProps", "slots", "startDecorator", "variant"];
  const useUtilityClasses$7 = ownerState => {
    const {
      color,
      disabled,
      fullWidth,
      size,
      variant,
      loading
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', fullWidth && 'fullWidth', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`, loading && 'loading'],
      startDecorator: ['startDecorator'],
      endDecorator: ['endDecorator'],
      loadingIndicatorCenter: ['loadingIndicatorCenter']
    };
    return composeClasses(slots, getMenuButtonUtilityClass, {});
  };
  const MenuButtonRoot = styled$1('button', {
    name: 'JoyMenuButton',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(getButtonStyles);
  const MenuButtonStartDecorator = styled$1('span', {
    name: 'JoyMenuButton',
    slot: 'StartDecorator',
    overridesResolver: (props, styles) => styles.startDecorator
  })({
    '--Icon-margin': '0 0 0 calc(var(--Button-gap) / -2)',
    '--CircularProgress-margin': '0 0 0 calc(var(--Button-gap) / -2)',
    display: 'inherit',
    marginRight: 'var(--Button-gap)'
  });
  const MenuButtonEndDecorator = styled$1('span', {
    name: 'JoyMenuButton',
    slot: 'EndDecorator',
    overridesResolver: (props, styles) => styles.endDecorator
  })({
    '--Icon-margin': '0 calc(var(--Button-gap) / -2) 0 0',
    '--CircularProgress-margin': '0 calc(var(--Button-gap) / -2) 0 0',
    display: 'inherit',
    marginLeft: 'var(--Button-gap)'
  });
  const MenuButtonLoadingCenter = styled$1('span', {
    name: 'JoyMenuButton',
    slot: 'LoadingCenter',
    overridesResolver: (props, styles) => styles.loadingIndicatorCenter
  })(({
    theme,
    ownerState
  }) => {
    var _theme$variants, _theme$variants2;
    return _extends$1({
      display: 'inherit',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      color: (_theme$variants = theme.variants[ownerState.variant]) == null || (_theme$variants = _theme$variants[ownerState.color]) == null ? void 0 : _theme$variants.color
    }, ownerState.disabled && {
      color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
    });
  });

  /**
   *
   * Demos:
   *
   * - [Menu](https://mui.com/joy-ui/react-menu/)
   *
   * API:
   *
   * - [MenuButton API](https://mui.com/joy-ui/api/menu-button/)
   */
  const MenuButton = /*#__PURE__*/React__namespace.forwardRef(function MenuButton(inProps, forwardedRef) {
    var _inProps$disabled;
    const props = useThemeProps({
      props: inProps,
      name: 'JoyMenuButton'
    });
    const {
        children,
        color = 'neutral',
        component,
        disabled: disabledProp = false,
        endDecorator,
        loading = false,
        loadingPosition = 'center',
        loadingIndicator: loadingIndicatorProp,
        size: sizeProp = 'md',
        slotProps = {},
        slots = {},
        startDecorator,
        variant: variantProp = 'outlined'
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$m);
    const buttonGroup = React__namespace.useContext(ButtonGroupContext);
    const variant = inProps.variant || buttonGroup.variant || variantProp;
    const size = inProps.size || buttonGroup.size || sizeProp;
    const disabled = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : buttonGroup.disabled || disabledProp || loading;
    const {
      getRootProps,
      open,
      active
    } = useMenuButton({
      rootRef: forwardedRef,
      disabled
    });
    const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : /*#__PURE__*/require$$2$1.jsx(CircularProgress, {
      color: color,
      thickness: {
        sm: 2,
        md: 3,
        lg: 4
      }[size] || 3
    });
    const ownerState = _extends$1({}, props, {
      active,
      color,
      disabled,
      open,
      size,
      variant
    });
    const classes = useUtilityClasses$7(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      elementType: MenuButtonRoot,
      getSlotProps: getRootProps,
      externalForwardedProps,
      ref: forwardedRef,
      ownerState,
      className: classes.root
    });
    const [SlotStartDecorator, startDecoratorProps] = useSlot('startDecorator', {
      className: classes.startDecorator,
      elementType: MenuButtonStartDecorator,
      externalForwardedProps,
      ownerState
    });
    const [SlotEndDecorator, endDecoratorProps] = useSlot('endDecorator', {
      className: classes.endDecorator,
      elementType: MenuButtonEndDecorator,
      externalForwardedProps,
      ownerState
    });
    const [SlotLoadingIndicatorCenter, loadingIndicatorCenterProps] = useSlot('loadingIndicatorCenter', {
      className: classes.loadingIndicatorCenter,
      elementType: MenuButtonLoadingCenter,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
      children: [(startDecorator || loading && loadingPosition === 'start') && /*#__PURE__*/require$$2$1.jsx(SlotStartDecorator, _extends$1({}, startDecoratorProps, {
        children: loading && loadingPosition === 'start' ? loadingIndicator : startDecorator
      })), children, loading && loadingPosition === 'center' && /*#__PURE__*/require$$2$1.jsx(SlotLoadingIndicatorCenter, _extends$1({}, loadingIndicatorCenterProps, {
        children: loadingIndicator
      })), (endDecorator || loading && loadingPosition === 'end') && /*#__PURE__*/require$$2$1.jsx(SlotEndDecorator, _extends$1({}, endDecoratorProps, {
        children: loading && loadingPosition === 'end' ? loadingIndicator : endDecorator
      }))]
    }));
  });

  function getMenuItemUtilityClass(slot) {
    return generateUtilityClass$1('MuiMenuItem', slot);
  }
  generateUtilityClasses$1('MuiMenuItem', ['root', 'focusVisible', 'disabled', 'selected', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantSoft', 'variantOutlined', 'variantSolid']);

  const _excluded$l = ["children", "disabled", "component", "selected", "color", "orientation", "variant", "slots", "slotProps", "id"];
  const useUtilityClasses$6 = ownerState => {
    const {
      focusVisible,
      disabled,
      selected,
      color,
      variant
    } = ownerState;
    const slots = {
      root: ['root', focusVisible && 'focusVisible', disabled && 'disabled', selected && 'selected', color && `color${capitalize$1(color)}`, variant && `variant${capitalize$1(variant)}`]
    };
    const composedClasses = composeClasses(slots, getMenuItemUtilityClass, {});
    return composedClasses;
  };
  const MenuItemRoot = styled$1(StyledListItemButton, {
    name: 'JoyMenuItem',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({});
  const MenuItem = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function MenuItem(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoyMenuItem'
    });
    const row = React__namespace.useContext(RowListContext);
    const {
        children,
        disabled: disabledProp = false,
        component = 'li',
        selected = false,
        color: colorProp = 'neutral',
        orientation = 'horizontal',
        variant: variantProp = 'plain',
        slots = {},
        slotProps = {},
        id
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$l);
    const {
      variant = variantProp,
      color = colorProp
    } = useVariantColor(inProps.variant, inProps.color);
    const {
      getRootProps,
      disabled,
      focusVisible
    } = useMenuItem({
      id,
      disabled: disabledProp,
      rootRef: ref
    });
    const ownerState = _extends$1({}, props, {
      component,
      color,
      disabled,
      focusVisible,
      orientation,
      selected,
      row,
      variant
    });
    const classes = useUtilityClasses$6(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      elementType: MenuItemRoot,
      getSlotProps: getRootProps,
      externalForwardedProps,
      className: classes.root,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsx(ListItemButtonOrientationContext.Provider, {
      value: orientation,
      children: /*#__PURE__*/require$$2$1.jsx(SlotRoot, _extends$1({}, rootProps, {
        children: children
      }))
    });
  }));

  /**
   *
   * Demos:
   *
   * - [Menu](https://mui.com/joy-ui/react-menu/)
   *
   * API:
   *
   * - [MenuItem API](https://mui.com/joy-ui/api/menu-item/)
   * - inherits [ListItemButton API](https://mui.com/joy-ui/api/list-item-button/)
   */
  const StableMenuItem = /*#__PURE__*/React__namespace.forwardRef(function StableMenuItem(props, ref) {
    // This wrapper component is used as a performance optimization.
    // `useMenuItemContextStabilizer` ensures that the context value
    // is stable across renders, so that the actual MenuItem re-renders
    // only when it needs to.
    const {
      contextValue,
      id
    } = useMenuItemContextStabilizer(props.id);
    return /*#__PURE__*/require$$2$1.jsx(ListContext.Provider, {
      value: contextValue,
      children: /*#__PURE__*/require$$2$1.jsx(MenuItem, _extends$1({}, props, {
        id: id,
        ref: ref
      }))
    });
  });

  function getRadioUtilityClass(slot) {
    return generateUtilityClass$1('MuiRadio', slot);
  }
  const radioClasses = generateUtilityClasses$1('MuiRadio', ['root', 'radio', 'icon', 'action', 'input', 'label', 'checked', 'disabled', 'focusVisible', 'colorPrimary', 'colorDanger', 'colorNeutral', 'colorSuccess', 'colorWarning', 'colorContext', 'sizeSm', 'sizeMd', 'sizeLg', 'variantOutlined', 'variantSoft', 'variantSolid']);

  const _excluded$k = ["checked", "checkedIcon", "defaultChecked", "disabled", "disableIcon", "overlay", "label", "id", "name", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "color", "variant", "size", "uncheckedIcon", "value", "component", "slots", "slotProps"];
  const useUtilityClasses$5 = ownerState => {
    const {
      checked,
      disabled,
      disableIcon,
      focusVisible,
      color,
      variant,
      size
    } = ownerState;
    const slots = {
      root: ['root', checked && 'checked', disabled && 'disabled', focusVisible && 'focusVisible', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`],
      radio: ['radio', checked && 'checked', disabled && 'disabled'],
      // disabled class is necessary for displaying global variant
      icon: ['icon'],
      action: ['action', checked && 'checked', disableIcon && disabled && 'disabled',
      // add disabled class to action element for displaying global variant
      focusVisible && 'focusVisible'],
      input: ['input'],
      label: ['label']
    };
    return composeClasses(slots, getRadioUtilityClass, {});
  };
  function areEqualValues(a, b) {
    if (typeof b === 'object' && b !== null) {
      return a === b;
    }

    // The value could be a number, the DOM will stringify it anyway.
    return String(a) === String(b);
  }
  const RadioRoot = styled$1('span', {
    name: 'JoyRadio',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    ownerState,
    theme
  }) => {
    var _theme$variants$plain, _theme$variants, _theme$variants2;
    return [_extends$1({
      '--Icon-fontSize': 'var(--Radio-size)',
      '--Icon-color': 'currentColor'
    }, ownerState.size === 'sm' && {
      '--Radio-size': '1rem',
      // --FormHelperText-margin is equal to --Radio-size + --Radio-gap but we can't use calc() with CSS variables because the FormHelperText is a sibling element
      '& ~ *': {
        '--FormHelperText-margin': '0 0 0 1.5rem'
      },
      fontSize: theme.vars.fontSize.sm,
      gap: 'var(--Radio-gap, 0.5rem)'
    }, ownerState.size === 'md' && {
      '--Radio-size': '1.25rem',
      '& ~ *': {
        '--FormHelperText-margin': '0.25rem 0 0 1.875rem'
      },
      fontSize: theme.vars.fontSize.md,
      gap: 'var(--Radio-gap, 0.625rem)'
    }, ownerState.size === 'lg' && {
      '--Radio-size': '1.5rem',
      '& ~ *': {
        '--FormHelperText-margin': '0.375rem 0 0 2.25rem'
      },
      fontSize: theme.vars.fontSize.lg,
      gap: 'var(--Radio-gap, 0.75rem)'
    }, {
      position: ownerState.overlay ? 'initial' : 'relative',
      display: 'inline-flex',
      boxSizing: 'border-box',
      minWidth: 0,
      fontFamily: theme.vars.fontFamily.body,
      lineHeight: 'var(--Radio-size)',
      // prevent label from having larger height than the checkbox
      color: theme.vars.palette.text.primary,
      [`&.${radioClasses.disabled}`]: {
        color: (_theme$variants$plain = theme.variants.plainDisabled) == null || (_theme$variants$plain = _theme$variants$plain[ownerState.color]) == null ? void 0 : _theme$variants$plain.color
      }
    }, ownerState.disableIcon && {
      color: (_theme$variants = theme.variants[ownerState.variant]) == null || (_theme$variants = _theme$variants[ownerState.color]) == null ? void 0 : _theme$variants.color,
      [`&.${radioClasses.disabled}`]: {
        color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
      }
    }, ownerState['data-parent'] === 'RadioGroup' && ownerState['data-first-child'] === undefined && {
      marginInlineStart: ownerState.orientation === 'horizontal' ? 'var(--RadioGroup-gap)' : undefined,
      marginBlockStart: ownerState.orientation === 'horizontal' ? undefined : 'var(--RadioGroup-gap)'
    })];
  });
  const RadioRadio = styled$1('span', {
    name: 'JoyRadio',
    slot: 'Radio',
    overridesResolver: (props, styles) => styles.radio
  })(({
    ownerState,
    theme
  }) => {
    var _theme$variants3, _variantStyle$backgro, _theme$variants4, _theme$variants5, _theme$variants6;
    const variantStyle = (_theme$variants3 = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants3[ownerState.color];
    return [_extends$1({
      '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon,
      margin: 0,
      boxSizing: 'border-box',
      width: 'var(--Radio-size)',
      height: 'var(--Radio-size)',
      borderRadius: 'var(--Radio-size)',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0
    }, ownerState.disableIcon && {
      display: 'contents'
    }, {
      [`&.${radioClasses.checked}`]: {
        '--Icon-color': 'currentColor'
      }
    }), ...(!ownerState.disableIcon ? [_extends$1({}, variantStyle, {
      backgroundColor: (_variantStyle$backgro = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro : theme.vars.palette.background.surface
    }), {
      '&:hover': {
        '@media (hover: hover)': (_theme$variants4 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants4[ownerState.color]
      }
    }, {
      '&:active': (_theme$variants5 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants5[ownerState.color]
    }, {
      [`&.${radioClasses.disabled}`]: (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants6[ownerState.color]
    }] : [])];
  });
  const RadioAction = styled$1('span', {
    name: 'JoyRadio',
    slot: 'Action',
    overridesResolver: (props, styles) => styles.action
  })(({
    theme,
    ownerState
  }) => {
    var _theme$variants7, _theme$variants8, _theme$variants9, _theme$variants10;
    return [{
      position: 'absolute',
      textAlign: 'left',
      // prevent text-align inheritance
      borderRadius: `var(--Radio-actionRadius, ${
    // Automatic radius adjustment when composing with ListItem or Sheet
    ownerState.overlay ? 'var(--unstable_actionRadius, inherit)' : 'inherit'})`,
      top: 'calc(-1 * var(--variant-borderWidth, 0px))',
      // clickable on the border and focus outline does not move when checked/unchecked
      left: 'calc(-1 * var(--variant-borderWidth, 0px))',
      bottom: 'calc(-1 * var(--variant-borderWidth, 0px))',
      right: 'calc(-1 * var(--variant-borderWidth, 0px))',
      zIndex: 1,
      // The action element usually cover the area of nearest positioned parent
      [theme.focus.selector]: theme.focus.default
    }, ...(ownerState.disableIcon ? [(_theme$variants7 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants7[ownerState.color], {
      '&:hover': {
        '@media (hover: hover)': (_theme$variants8 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants8[ownerState.color]
      }
    }, {
      '&:active': (_theme$variants9 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants9[ownerState.color]
    }, {
      [`&.${radioClasses.disabled}`]: (_theme$variants10 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants10[ownerState.color]
    }] : [])];
  });
  const RadioInput = styled$1('input', {
    name: 'JoyRadio',
    slot: 'Input',
    overridesResolver: (props, styles) => styles.input
  })(() => ({
    margin: 0,
    opacity: 0,
    position: 'absolute',
    height: '100%',
    width: '100%',
    cursor: 'pointer'
  }));
  const RadioLabel = styled$1('label', {
    name: 'JoyRadio',
    slot: 'Label',
    overridesResolver: (props, styles) => styles.label
  })(({
    ownerState
  }) => _extends$1({
    flex: 1,
    minWidth: 0
  }, ownerState.disableIcon && {
    zIndex: 1,
    // label should stay on top of the action.
    pointerEvents: 'none' // makes hover ineffect.
  }));

  /**
   * internal component
   */
  const RadioIcon = styled$1('span', {
    name: 'JoyRadio',
    slot: 'Icon',
    overridesResolver: (props, styles) => styles.icon
  })(({
    ownerState
  }) => ({
    width: 'calc(var(--Radio-size) / 2)',
    height: 'calc(var(--Radio-size) / 2)',
    borderRadius: 'inherit',
    color: 'inherit',
    backgroundColor: 'currentColor',
    transform: ownerState.checked ? 'scale(1)' : 'scale(0)'
  }));
  /**
   *
   * Demos:
   *
   * - [Radio](https://mui.com/joy-ui/react-radio-button/)
   *
   * API:
   *
   * - [Radio API](https://mui.com/joy-ui/api/radio/)
   */
  const Radio = /*#__PURE__*/React__namespace.forwardRef(function Radio(inProps, ref) {
    var _ref, _ref2, _inProps$color, _ref3, _ref4, _inProps$color2, _inProps$color3;
    const props = useThemeProps({
      props: inProps,
      name: 'JoyRadio'
    });
    const {
        checked: checkedProp,
        checkedIcon,
        defaultChecked,
        disabled: disabledProp,
        disableIcon: disableIconProp = false,
        overlay: overlayProp = false,
        label,
        id: idOverride,
        name: nameProp,
        onBlur,
        onChange,
        onFocus,
        onFocusVisible,
        readOnly,
        required,
        color: colorProp,
        variant = 'outlined',
        size: sizeProp = 'md',
        uncheckedIcon,
        value,
        component,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$k);
    const formControl = React__namespace.useContext(FormControlContext);
    const id = useId(idOverride != null ? idOverride : formControl == null ? void 0 : formControl.htmlFor);
    const radioGroup = React__namespace.useContext(RadioGroupContext);
    const activeColor = formControl != null && formControl.error ? 'danger' : (_ref = (_ref2 = (_inProps$color = inProps.color) != null ? _inProps$color : formControl == null ? void 0 : formControl.color) != null ? _ref2 : colorProp) != null ? _ref : 'primary';
    const inactiveColor = formControl != null && formControl.error ? 'danger' : (_ref3 = (_ref4 = (_inProps$color2 = inProps.color) != null ? _inProps$color2 : formControl == null ? void 0 : formControl.color) != null ? _ref4 : colorProp) != null ? _ref3 : 'neutral';
    const size = inProps.size || (formControl == null ? void 0 : formControl.size) || (radioGroup == null ? void 0 : radioGroup.size) || sizeProp;
    const name = inProps.name || (radioGroup == null ? void 0 : radioGroup.name) || nameProp;
    const disableIcon = inProps.disableIcon || (radioGroup == null ? void 0 : radioGroup.disableIcon) || disableIconProp;
    const overlay = inProps.overlay || (radioGroup == null ? void 0 : radioGroup.overlay) || overlayProp;
    const radioChecked = typeof checkedProp === 'undefined' && value != null ? areEqualValues(radioGroup == null ? void 0 : radioGroup.value, value) : checkedProp;
    const useRadioProps = {
      checked: radioChecked,
      defaultChecked,
      disabled: inProps.disabled || (formControl == null ? void 0 : formControl.disabled) || disabledProp,
      onBlur,
      onChange,
      onFocus,
      onFocusVisible
    };
    const {
      getInputProps,
      checked,
      disabled,
      focusVisible
    } = useSwitch(useRadioProps);
    const color = (_inProps$color3 = inProps.color) != null ? _inProps$color3 : checked ? activeColor : inactiveColor;
    const ownerState = _extends$1({}, props, {
      checked,
      disabled,
      focusVisible,
      color,
      variant,
      size,
      disableIcon,
      overlay,
      orientation: radioGroup == null ? void 0 : radioGroup.orientation
    });
    const classes = useUtilityClasses$5(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: classes.root,
      elementType: RadioRoot,
      externalForwardedProps,
      ownerState
    });
    const [SlotRadio, radioProps] = useSlot('radio', {
      className: classes.radio,
      elementType: RadioRadio,
      externalForwardedProps,
      ownerState
    });
    const [SlotIcon, iconProps] = useSlot('icon', {
      className: classes.icon,
      elementType: RadioIcon,
      externalForwardedProps,
      ownerState
    });
    const [SlotAction, actionProps] = useSlot('action', {
      className: classes.action,
      elementType: RadioAction,
      externalForwardedProps,
      ownerState
    });
    const [SlotInput, inputProps] = useSlot('input', {
      additionalProps: {
        type: 'radio',
        role: undefined,
        id,
        name,
        readOnly,
        required: required != null ? required : formControl == null ? void 0 : formControl.required,
        value: String(value),
        'aria-describedby': formControl == null ? void 0 : formControl['aria-describedby']
      },
      className: classes.input,
      elementType: RadioInput,
      externalForwardedProps,
      getSlotProps: () => getInputProps({
        onChange: radioGroup == null ? void 0 : radioGroup.onChange
      }),
      ownerState
    });
    const [SlotLabel, labelProps] = useSlot('label', {
      additionalProps: {
        htmlFor: id
      },
      className: classes.label,
      elementType: RadioLabel,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
      children: [/*#__PURE__*/require$$2$1.jsxs(SlotRadio, _extends$1({}, radioProps, {
        children: [checked && !disableIcon && checkedIcon, !checked && !disableIcon && uncheckedIcon, !checkedIcon && !uncheckedIcon && !disableIcon && /*#__PURE__*/require$$2$1.jsx(SlotIcon, _extends$1({}, iconProps)), /*#__PURE__*/require$$2$1.jsx(SlotAction, _extends$1({}, actionProps, {
          children: /*#__PURE__*/require$$2$1.jsx(SlotInput, _extends$1({}, inputProps))
        }))]
      })), label && /*#__PURE__*/require$$2$1.jsx(SlotLabel, _extends$1({}, labelProps, {
        children: /*#__PURE__*/require$$2$1.jsx(TypographyNestedContext.Provider, {
          value: true,
          children: label
        })
      }))]
    }));
  });

  function getRadioGroupUtilityClass(slot) {
    return generateUtilityClass$1('MuiRadioGroup', slot);
  }
  generateUtilityClasses$1('MuiRadioGroup', ['root', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid', 'sizeSm', 'sizeMd', 'sizeLg', 'horizontal', 'vertical']);

  const _excluded$j = ["className", "component", "children", "name", "defaultValue", "disableIcon", "overlay", "value", "onChange", "color", "variant", "size", "orientation", "role", "slots", "slotProps"];
  const useUtilityClasses$4 = ownerState => {
    const {
      orientation,
      size,
      variant,
      color
    } = ownerState;
    const slots = {
      root: ['root', orientation, variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`]
    };
    return composeClasses(slots, getRadioGroupUtilityClass, {});
  };
  const RadioGroupRoot = styled$1('div', {
    name: 'JoyRadioGroup',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    ownerState,
    theme
  }) => {
    var _theme$variants;
    return _extends$1({}, ownerState.size === 'sm' && {
      '--RadioGroup-gap': '0.625rem'
    }, ownerState.size === 'md' && {
      '--RadioGroup-gap': '0.875rem'
    }, ownerState.size === 'lg' && {
      '--RadioGroup-gap': '1.25rem'
    }, {
      display: 'flex',
      margin: 'var(--unstable_RadioGroup-margin)',
      flexDirection: ownerState.orientation === 'horizontal' ? 'row' : 'column',
      borderRadius: theme.vars.radius.sm
    }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
  });
  /**
   *
   * Demos:
   *
   * - [Radio](https://mui.com/joy-ui/react-radio-button/)
   *
   * API:
   *
   * - [RadioGroup API](https://mui.com/joy-ui/api/radio-group/)
   */
  const RadioGroup$1 = /*#__PURE__*/React__namespace.forwardRef(function RadioGroup(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoyRadioGroup'
    });
    const {
        className,
        component,
        children,
        name: nameProp,
        defaultValue,
        disableIcon = false,
        overlay,
        value: valueProp,
        onChange,
        color = 'neutral',
        variant = 'plain',
        size: sizeProp = 'md',
        orientation = 'vertical',
        role = 'radiogroup',
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$j);
    const [value, setValueState] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: 'RadioGroup'
    });
    const formControl = React__namespace.useContext(FormControlContext);
    const size = inProps.size || (formControl == null ? void 0 : formControl.size) || sizeProp;
    const ownerState = _extends$1({
      orientation,
      size,
      variant,
      color,
      role
    }, props);
    const classes = useUtilityClasses$4(ownerState);
    const name = useId(nameProp);
    const contextValue = React__namespace.useMemo(() => ({
      disableIcon,
      overlay,
      orientation,
      size,
      name,
      value,
      onChange: event => {
        setValueState(event.target.value);
        if (onChange) {
          onChange(event);
        }
      }
    }), [disableIcon, name, onChange, overlay, orientation, setValueState, size, value]);
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: RadioGroupRoot,
      externalForwardedProps: _extends$1({}, other, {
        component,
        slots,
        slotProps
      }),
      ownerState,
      additionalProps: {
        as: component,
        role,
        // The `id` is just for the completeness, it does not have any effect because RadioGroup (div) is non-labelable element
        // MDN: "If it is not a labelable element, then the for attribute has no effect"
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for
        id: formControl == null ? void 0 : formControl.htmlFor,
        'aria-labelledby': formControl == null ? void 0 : formControl.labelId,
        'aria-describedby': formControl == null ? void 0 : formControl['aria-describedby']
      }
    });
    return /*#__PURE__*/require$$2$1.jsx(RadioGroupContext.Provider, {
      value: contextValue,
      children: /*#__PURE__*/require$$2$1.jsx(SlotRoot, _extends$1({}, rootProps, {
        children: /*#__PURE__*/require$$2$1.jsx(FormControlContext.Provider, {
          value: undefined,
          children: React__namespace.Children.map(children, (child, index) => /*#__PURE__*/React__namespace.isValidElement(child) ? /*#__PURE__*/React__namespace.cloneElement(child, _extends$1({}, index === 0 && {
            'data-first-child': ''
          }, index === React__namespace.Children.count(children) - 1 && {
            'data-last-child': ''
          }, {
            'data-parent': 'RadioGroup'
          })) : child)
        })
      }))
    });
  });

  function getSheetUtilityClass(slot) {
    return generateUtilityClass$1('MuiSheet', slot);
  }
  generateUtilityClasses$1('MuiSheet', ['root', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'variantPlain', 'variantOutlined', 'variantSoft', 'variantSolid']);

  const _excluded$i = ["className", "color", "component", "variant", "invertedColors", "slots", "slotProps"];
  const useUtilityClasses$3 = ownerState => {
    const {
      variant,
      color
    } = ownerState;
    const slots = {
      root: ['root', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`]
    };
    return composeClasses(slots, getSheetUtilityClass, {});
  };
  const SheetRoot = styled$1('div', {
    name: 'JoySheet',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme,
    ownerState
  }) => {
    var _theme$variants, _theme$variants2;
    const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
    const {
      borderRadius: childRadius,
      bgcolor,
      backgroundColor,
      background
    } = resolveSxValue({
      theme,
      ownerState
    }, ['borderRadius', 'bgcolor', 'backgroundColor', 'background']);
    const resolvedBg = getPath(theme, `palette.${bgcolor}`) || bgcolor || getPath(theme, `palette.${backgroundColor}`) || backgroundColor || background || (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.surface;
    return [_extends$1({
      '--Icon-color': ownerState.color !== 'neutral' || ownerState.variant === 'solid' ? 'currentColor' : theme.vars.palette.text.icon,
      '--ListItem-stickyBackground': resolvedBg === 'transparent' ? 'initial' : resolvedBg,
      // for sticky List
      '--Sheet-background': resolvedBg === 'transparent' ? 'initial' : resolvedBg
    }, childRadius !== undefined && {
      '--List-radius': `calc(${childRadius} - var(--variant-borderWidth, 0px))`,
      '--unstable_actionRadius': `calc(${childRadius} - var(--variant-borderWidth, 0px))`
    }, {
      backgroundColor: theme.vars.palette.background.surface,
      position: 'relative'
    }), _extends$1({}, theme.typography['body-md'], ownerState.variant === 'solid' && ownerState.color && ownerState.invertedColors && applySolidInversion(ownerState.color)(theme), ownerState.variant === 'soft' && ownerState.color && ownerState.invertedColors && applySoftInversion(ownerState.color)(theme), (_theme$variants2 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants2[ownerState.color], variantStyle)];
  });
  /**
   *
   * Demos:
   *
   * - [Sheet](https://mui.com/joy-ui/react-sheet/)
   *
   * API:
   *
   * - [Sheet API](https://mui.com/joy-ui/api/sheet/)
   */
  const Sheet = /*#__PURE__*/React__namespace.forwardRef(function Sheet(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'JoySheet'
    });
    const {
        className,
        color = 'neutral',
        component = 'div',
        variant = 'plain',
        invertedColors = false,
        slots = {},
        slotProps = {}
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$i);
    const ownerState = _extends$1({}, props, {
      color,
      component,
      invertedColors,
      variant
    });
    const classes = useUtilityClasses$3(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: clsx(classes.root, className),
      elementType: SheetRoot,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsx(SlotRoot, _extends$1({}, rootProps));
  });

  function getTextareaUtilityClass(slot) {
    return generateUtilityClass$1('MuiTextarea', slot);
  }
  const textareaClasses = generateUtilityClasses$1('MuiTextarea', ['root', 'textarea', 'startDecorator', 'endDecorator', 'formControl', 'disabled', 'error', 'focused', 'colorPrimary', 'colorNeutral', 'colorDanger', 'colorSuccess', 'colorWarning', 'colorContext', 'sizeSm', 'sizeMd', 'sizeLg', 'variantPlain', 'variantOutlined', 'variantSoft']);

  const _excluded$h = ["propsToForward", "rootStateClasses", "inputStateClasses", "getRootProps", "getInputProps", "formControl", "focused", "error", "disabled", "size", "color", "variant", "startDecorator", "endDecorator", "minRows", "maxRows", "component", "slots", "slotProps"];
  const useUtilityClasses$2 = ownerState => {
    const {
      disabled,
      variant,
      color,
      size
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', variant && `variant${capitalize$1(variant)}`, color && `color${capitalize$1(color)}`, size && `size${capitalize$1(size)}`],
      textarea: ['textarea'],
      startDecorator: ['startDecorator'],
      endDecorator: ['endDecorator']
    };
    return composeClasses(slots, getTextareaUtilityClass, {});
  };
  const TextareaRoot = styled$1('div', {
    name: 'JoyTextarea',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(({
    theme,
    ownerState
  }) => {
    var _theme$variants, _theme$vars$palette, _theme$vars$palette2, _variantStyle$backgro, _theme$variants2, _theme$variants3;
    const variantStyle = (_theme$variants = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants[ownerState.color];
    return [_extends$1({
      '--Textarea-radius': theme.vars.radius.sm,
      '--Textarea-gap': '0.5rem',
      '--Textarea-placeholderColor': 'inherit',
      '--Textarea-placeholderOpacity': 0.64,
      '--Textarea-decoratorColor': theme.vars.palette.text.icon,
      '--Textarea-focused': '0',
      '--Textarea-focusedThickness': theme.vars.focus.thickness,
      '--Textarea-focusedHighlight': (_theme$vars$palette = theme.vars.palette[ownerState.color === 'neutral' ? 'primary' : ownerState.color]) == null ? void 0 : _theme$vars$palette[500],
      '&:not([data-inverted-colors="false"])': _extends$1({}, ownerState.instanceColor && {
        '--_Textarea-focusedHighlight': (_theme$vars$palette2 = theme.vars.palette[ownerState.instanceColor === 'neutral' ? 'primary' : ownerState.instanceColor]) == null ? void 0 : _theme$vars$palette2[500]
      }, {
        '--Textarea-focusedHighlight': `var(--_Textarea-focusedHighlight, ${theme.vars.palette.focusVisible})`
      })
    }, ownerState.size === 'sm' && {
      '--Textarea-minHeight': '2rem',
      '--Textarea-paddingBlock': 'calc(0.375rem - 0.5px - var(--variant-borderWidth, 0px))',
      // to match Input because <textarea> does not center the text at the middle like <input>
      '--Textarea-paddingInline': '0.5rem',
      '--Textarea-decoratorChildHeight': 'min(1.5rem, var(--Textarea-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl
    }, ownerState.size === 'md' && {
      '--Textarea-minHeight': '2.25rem',
      '--Textarea-paddingBlock': 'calc(0.375rem - var(--variant-borderWidth, 0px))',
      '--Textarea-paddingInline': '0.75rem',
      '--Textarea-decoratorChildHeight': 'min(1.75rem, var(--Textarea-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl2
    }, ownerState.size === 'lg' && {
      '--Textarea-minHeight': '3rem',
      '--Textarea-paddingBlock': 'calc(0.75rem - var(--variant-borderWidth, 0px))',
      '--Textarea-paddingInline': '1rem',
      '--Textarea-gap': '0.75rem',
      '--Textarea-decoratorChildHeight': 'min(2.375rem, var(--Textarea-minHeight))',
      '--Icon-fontSize': theme.vars.fontSize.xl2
    }, {
      // variables for controlling child components
      '--_Textarea-paddingBlock': 'max((var(--Textarea-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Textarea-decoratorChildHeight)) / 2, 0px)',
      '--Textarea-decoratorChildRadius': 'max(var(--Textarea-radius) - var(--variant-borderWidth, 0px) - var(--_Textarea-paddingBlock), min(var(--_Textarea-paddingBlock) + var(--variant-borderWidth, 0px), var(--Textarea-radius) / 2))',
      '--Button-minHeight': 'var(--Textarea-decoratorChildHeight)',
      '--Button-paddingBlock': '0px',
      // to ensure that the height of the button is equal to --Button-minHeight
      '--IconButton-size': 'var(--Textarea-decoratorChildHeight)',
      '--Button-radius': 'var(--Textarea-decoratorChildRadius)',
      '--IconButton-radius': 'var(--Textarea-decoratorChildRadius)',
      boxSizing: 'border-box'
    }, ownerState.variant !== 'plain' && {
      boxShadow: theme.shadow.xs
    }, {
      minWidth: 0,
      minHeight: 'var(--Textarea-minHeight)',
      cursor: 'text',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      paddingInlineStart: `var(--Textarea-paddingInline)`,
      // the paddingInlineEnd is added to the textarea. It looks better when the scrollbar appears.
      paddingBlock: 'var(--Textarea-paddingBlock)',
      borderRadius: 'var(--Textarea-radius)'
    }, theme.typography[`body-${ownerState.size}`], variantStyle, {
      backgroundColor: (_variantStyle$backgro = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro : theme.vars.palette.background.surface,
      '&::before': {
        boxSizing: 'border-box',
        content: '""',
        display: 'block',
        position: 'absolute',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        borderRadius: 'inherit',
        margin: 'calc(var(--variant-borderWidth, 0px) * -1)',
        // for outlined variant
        boxShadow: `var(--Textarea-focusedInset, inset) 0 0 0 calc(var(--Textarea-focused) * var(--Textarea-focusedThickness)) var(--Textarea-focusedHighlight)`
      }
    }), {
      '&:hover': _extends$1({}, (_theme$variants2 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants2[ownerState.color], {
        backgroundColor: null,
        // it is not common to change background on hover for Textarea
        cursor: 'text'
      }),
      [`&.${textareaClasses.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color],
      '&:focus-within::before': {
        '--Textarea-focused': '1'
      }
    }];
  });
  const TextareaInput = styled$1(TextareaAutosize, {
    name: 'JoyTextarea',
    slot: 'Textarea',
    overridesResolver: (props, styles) => styles.textarea
  })({
    resize: 'none',
    border: 'none',
    // remove the native textarea width
    minWidth: 0,
    // remove the native textarea width
    outline: 0,
    // remove the native textarea outline
    padding: 0,
    // remove the native textarea padding
    paddingInlineEnd: `var(--Textarea-paddingInline)`,
    flex: 'auto',
    alignSelf: 'stretch',
    color: 'inherit',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    '&::-webkit-input-placeholder': {
      color: 'var(--Textarea-placeholderColor)',
      opacity: 'var(--Textarea-placeholderOpacity)'
    },
    '&::-moz-placeholder': {
      // Firefox 19+
      color: 'var(--Textarea-placeholderColor)',
      opacity: 'var(--Textarea-placeholderOpacity)'
    },
    '&:-ms-input-placeholder': {
      // IE11
      color: 'var(--Textarea-placeholderColor)',
      opacity: 'var(--Textarea-placeholderOpacity)'
    },
    '&::-ms-input-placeholder': {
      // Edge
      color: 'var(--Textarea-placeholderColor)',
      opacity: 'var(--Textarea-placeholderOpacity)'
    }
  });
  const TextareaStartDecorator = styled$1('div', {
    name: 'JoyTextarea',
    slot: 'StartDecorator',
    overridesResolver: (props, styles) => styles.startDecorator
  })({
    display: 'flex',
    marginInlineStart: 'calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))',
    marginInlineEnd: 'var(--Textarea-paddingBlock)',
    marginBlockEnd: 'var(--Textarea-gap)',
    color: 'var(--Textarea-decoratorColor)',
    cursor: 'initial'
  });
  const TextareaEndDecorator = styled$1('div', {
    name: 'JoyTextarea',
    slot: 'EndDecorator',
    overridesResolver: (props, styles) => styles.endDecorator
  })({
    display: 'flex',
    marginInlineStart: 'calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))',
    marginInlineEnd: 'var(--Textarea-paddingBlock)',
    marginBlockStart: 'var(--Textarea-gap)',
    color: 'var(--Textarea-decoratorColor)',
    cursor: 'initial'
  });
  /**
   *
   * Demos:
   *
   * - [Textarea](https://mui.com/joy-ui/react-textarea/)
   *
   * API:
   *
   * - [Textarea API](https://mui.com/joy-ui/api/textarea/)
   */
  const Textarea = /*#__PURE__*/React__namespace.forwardRef(function Textarea(inProps, ref) {
    var _ref, _inProps$disabled, _ref2, _inProps$error, _ref3, _inProps$size, _inProps$color, _formControl$color;
    const props = useThemeProps({
      props: inProps,
      name: 'JoyTextarea'
    });
    const _useForwardedInput = useForwardedInput(props, textareaClasses),
      {
        propsToForward,
        rootStateClasses,
        inputStateClasses,
        getRootProps,
        getInputProps,
        formControl,
        focused,
        error: errorProp = false,
        disabled: disabledProp = false,
        size: sizeProp = 'md',
        color: colorProp = 'neutral',
        variant = 'outlined',
        startDecorator,
        endDecorator,
        minRows,
        maxRows,
        component,
        slots = {},
        slotProps = {}
      } = _useForwardedInput,
      other = _objectWithoutPropertiesLoose$1(_useForwardedInput, _excluded$h);
    const disabled = (_ref = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : formControl == null ? void 0 : formControl.disabled) != null ? _ref : disabledProp;
    const error = (_ref2 = (_inProps$error = inProps.error) != null ? _inProps$error : formControl == null ? void 0 : formControl.error) != null ? _ref2 : errorProp;
    const size = (_ref3 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref3 : sizeProp;
    const color = (_inProps$color = inProps.color) != null ? _inProps$color : error ? 'danger' : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp;
    const ownerState = _extends$1({
      instanceColor: error ? 'danger' : inProps.color
    }, props, {
      color,
      disabled,
      error,
      focused,
      size,
      variant
    });
    const classes = useUtilityClasses$2(ownerState);
    const externalForwardedProps = _extends$1({}, other, {
      component,
      slots,
      slotProps
    });
    const [SlotRoot, rootProps] = useSlot('root', {
      ref,
      className: [classes.root, rootStateClasses],
      elementType: TextareaRoot,
      externalForwardedProps,
      getSlotProps: getRootProps,
      ownerState
    });
    const [SlotTextarea, textareaProps] = useSlot('textarea', {
      additionalProps: {
        id: formControl == null ? void 0 : formControl.htmlFor,
        'aria-describedby': formControl == null ? void 0 : formControl['aria-describedby']
      },
      className: [classes.textarea, inputStateClasses],
      elementType: TextareaInput,
      internalForwardedProps: _extends$1({}, propsToForward, {
        minRows,
        maxRows
      }),
      externalForwardedProps,
      getSlotProps: getInputProps,
      ownerState
    });
    const [SlotStartDecorator, startDecoratorProps] = useSlot('startDecorator', {
      className: classes.startDecorator,
      elementType: TextareaStartDecorator,
      externalForwardedProps,
      ownerState
    });
    const [SlotEndDecorator, endDecoratorProps] = useSlot('endDecorator', {
      className: classes.endDecorator,
      elementType: TextareaEndDecorator,
      externalForwardedProps,
      ownerState
    });
    return /*#__PURE__*/require$$2$1.jsxs(SlotRoot, _extends$1({}, rootProps, {
      children: [startDecorator && /*#__PURE__*/require$$2$1.jsx(SlotStartDecorator, _extends$1({}, startDecoratorProps, {
        children: startDecorator
      })), /*#__PURE__*/require$$2$1.jsx(SlotTextarea, _extends$1({}, textareaProps)), endDecorator && /*#__PURE__*/require$$2$1.jsx(SlotEndDecorator, _extends$1({}, endDecoratorProps, {
        children: endDecorator
      }))]
    }));
  });

  var _excluded$g = ["name", "label", "type", "sx", "designMode", "onChange", "_userProps"];
  function Input(props) {
    var name = props.name,
      label = props.label;
      props.type;
      var sx = props.sx,
      designMode = props.designMode,
      onChange = props.onChange;
      props._userProps;
      var eProps = _objectWithoutProperties$1(props, _excluded$g);
    var _useState = React.useState(function () {
        return props.value == null ? ' ' : props.value;
      }),
      _useState2 = _slicedToArray$1(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
    var disabled = eProps.disabled == null ? false : eProps.disabled;
    disabled = designMode === true ? true : disabled;
    var extendedProps = eProps == null ? {} : eProps;
    React.useEffect(function () {
      setValue(props.value);
    }, [props.value]);
    var handleChange = function handleChange(synthE) {
      setValue(synthE.target.value);
      if (synthE.key === 'Enter') {
        onChange(synthE.target.value, synthE);
      }
    };
    var _onChange = function _onChange(e) {
      var synthE = {
        key: e.key,
        target: {
          value: e.target.value,
          name: name
        }
      };
      handleChange(synthE);
    };
    var _onKeyPress = function _onKeyPress(e) {
      if (e.key === 'Enter') {
        var synthE = {
          key: 'Enter',
          target: {
            value: e.target.value,
            name: name
          }
        };
        handleChange(synthE);
      }
      return true;
    };
    var istyle = _objectSpread2$2({}, sx);
    istyle.textAlign = props.align == null ? 'right' : props.align;
    var _onBlur = function _onBlur(e) {
      var synthE = {
        key: 'Enter',
        target: {
          value: e.target.value,
          name: name
        }
      };
      handleChange(synthE);
      setValue(e.target.value);
      return true;
    };
    var _onFocus = function _onFocus(e) {
      var synthE = {
        key: 'onFocus',
        target: {
          value: e.target.value,
          name: name
        }
      };
      handleChange(synthE);
      setValue(e.target.value);
      return true;
    };
    var inputProps = {
      inputMode: 'text',
      step: 'any',
      style: istyle,
      onKeyPress: _onKeyPress,
      onBlur: _onBlur,
      onFocus: _onFocus
    };
    var isx = _objectSpread2$2({
      width: 'inherit',
      height: 'inherit'
    }, istyle);
    isx = _objectSpread2$2({
      width: 'inherit',
      height: 'inherit',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: 8
    }, istyle);
    var ePropsL = _objectSpread2$2({
      //key: name,
      name: name,
      size: 'sm',
      readOnly: disabled,
      'aria-label': label,
      variant: "outlined",
      color: 'neutral',
      sx: {
        isx: isx
      },
      slotProps: {
        input: inputProps
      }
    }, extendedProps);
    delete ePropsL.disabled;
    var t = /*#__PURE__*/require$$2$1.jsxs(React.Fragment, {
      children: [/*#__PURE__*/require$$2$1.jsx(FormLabel, {
        children: label
      }, name), /*#__PURE__*/require$$2$1.jsx(Input$1, _objectSpread2$2(_objectSpread2$2({}, ePropsL), {}, {
        value: value,
        onChange: _onChange
      }))]
    });
    return t;
  }

  var _excluded$f = ["name", "label", "sx", "designMode", "onChange", "_userProps"];
  function InputText(props) {
    var name = props.name,
      label = props.label,
      sx = props.sx,
      designMode = props.designMode,
      onChange = props.onChange;
      props._userProps;
      var eProps = _objectWithoutProperties$1(props, _excluded$f);
    var _useState = React.useState(function () {
        return props.value == null ? ' ' : props.value;
      }),
      _useState2 = _slicedToArray$1(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
    var disabled = eProps.disabled == null ? false : eProps.disabled;
    disabled = designMode === true ? true : disabled;
    var extendedProps = eProps == null ? {} : eProps;
    React.useEffect(function () {
      setValue(props.value);
    }, [props.value]);
    var handleChange = function handleChange(synthE) {
      setValue(synthE.target.value);
      if (synthE.key === 'Enter') {
        onChange(synthE.target.value, synthE);
      }
    };
    var _onChange = function _onChange(e) {
      var synthE = {
        key: e.key,
        target: {
          value: e.target.value,
          name: name
        }
      };
      handleChange(synthE);
    };
    var _onKeyPress = function _onKeyPress(e) {
      if (e.key === 'Enter') {
        var synthE = {
          key: 'Enter',
          target: {
            value: e.target.value,
            name: name
          }
        };
        handleChange(synthE);
      }
      return true;
    };
    var istyle = _objectSpread2$2({}, sx);
    istyle.textAlign = props.align == null ? 'left' : props.align;
    var _onBlur = function _onBlur(e) {
      var synthE = {
        key: 'Enter',
        target: {
          value: e.target.value,
          name: name
        }
      };
      handleChange(synthE);
      setValue(e.target.value);
      return true;
    };
    var _onFocus = function _onFocus(e) {
      var synthE = {
        key: 'onFocus',
        target: {
          value: e.target.value,
          name: name
        }
      };
      handleChange(synthE);
      setValue(e.target.value);
      return true;
    };
    var inputProps = {
      inputMode: 'text',
      // step: 'any',
      style: istyle,
      onKeyPress: _onKeyPress,
      onBlur: _onBlur,
      onFocus: _onFocus
    };
    var isx = _objectSpread2$2({
      width: 'inherit',
      height: 'inherit'
    }, istyle);
    isx = _objectSpread2$2({
      width: 'inherit',
      height: 'inherit',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: 8
    }, istyle);
    var ePropsL = _objectSpread2$2({
      //key: name,
      name: name,
      size: 'sm',
      readOnly: disabled,
      'aria-label': label,
      variant: "outlined",
      color: 'neutral',
      sx: {
        isx: isx
      },
      slotProps: {
        input: inputProps
      }
    }, extendedProps);
    delete ePropsL.disabled;
    var t = /*#__PURE__*/require$$2$1.jsxs(React.Fragment, {
      children: [/*#__PURE__*/require$$2$1.jsx(FormLabel, {
        children: label
      }, name), /*#__PURE__*/require$$2$1.jsx(Input$1, _objectSpread2$2(_objectSpread2$2({}, ePropsL), {}, {
        value: value,
        onChange: _onChange
      }))]
    });
    return t;
  }

  var _excluded$e = ["value", "designMode", "name", "sx", "_userProps"];
  function Typography(props) {
    var value = props.value;
      props.designMode;
      props.name;
      var sx = props.sx;
      props._userProps;
      var eProps = _objectWithoutProperties$1(props, _excluded$e);
    var isx = _objectSpread2$2({
      width: 'inherit',
      height: 'inherit',
      border: '1px',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 8
    }, sx);
    var show = /*#__PURE__*/require$$2$1.jsx(React.Fragment, {
      children: /*#__PURE__*/require$$2$1.jsx(Typography$1, _objectSpread2$2(_objectSpread2$2({
        sx: isx
      }, eProps), {}, {
        children: value
      }))
    });
    return show;
  }

  function VaSDK(props) {
    var value = props.value,
      url = props.url,
      auth = props.auth,
      _userProps = props._userProps,
      style = props.style;
    var _useState = React.useState(null),
      _useState2 = _slicedToArray$1(_useState, 2),
      reportUri = _useState2[0],
      setReportUri = _useState2[1];
    var _useState3 = React.useState(null),
      _useState4 = _slicedToArray$1(_useState3, 2);
      _useState4[0];
      var setErrMsg = _useState4[1];
    var reportName = value;
    if (reportName == null || reportName.trim().length === 0) {
      reportName = 'Retail Insights';
    }
    var sx = {
      height: 'inherit',
      width: 'inherit',
      borderStyle: 'solid',
      borderRadius: 8,
      borderWidth: '1px'
    };
    sx = _objectSpread2$2(_objectSpread2$2({}, sx), style);
    React.useEffect(function () {
      debugger;
      if (_userProps != null && _userProps.viyaEnv != null) {
        _userProps.viyaEnv.store.addServices('reports').then(function (r) {
          restaflib.getReportUri(_userProps.viyaEnv.store, reportName).then(function (r) {
            setReportUri(r[0].uri);
            setErrMsg(null);
          })["catch"](function (err) {
            setErrMsg(err);
          });
        });
      }
    }, [reportName, value]);
    var show = null;
    var divStyle = sx;
    debugger;
    if (_userProps == null || _userProps.viyaEnv == null) {
      debugger;
      show = /*#__PURE__*/require$$2$1.jsx("div", {
        style: divStyle,
        children: /*#__PURE__*/require$$2$1.jsx("p", {
          children: "No connection to Viya"
        })
      });
    } else if (reportUri === null) {
      debugger;
      show = /*#__PURE__*/require$$2$1.jsxs("div", {
        style: divStyle,
        children: [" ", /*#__PURE__*/require$$2$1.jsxs("p", {
          children: [" Report ", reportName, " was not found"]
        })]
      });
    } else {
      var urlt = url == null || url.trim().length === 0 ? _userProps.viyaEnv.logonPayload.host : url;
      show = /*#__PURE__*/require$$2$1.jsx("div", {
        style: divStyle,
        children: /*#__PURE__*/require$$2$1.jsx("sas-report", {
          hideNavigation: "auto",
          url: urlt,
          reportUri: reportUri,
          authenticationType: auth == null ? 'credential' : auth,
          style: sx
        }, reportUri)
      });
    }
    var shkey = reportName + 'sheet';
    return /*#__PURE__*/require$$2$1.jsx(Sheet, {
      style: {
        height: 'inherit',
        width: 'inherit'
      },
      children: show
    }, shkey);
  }

  function HtmlText(props) {
    var value = props.value,
      name = props.name,
      sx = props.sx,
      refresh = props.refresh;
    var htmlContent = {
      __html: value
    };
    var isx = {
      height: 'inherit',
      width: 'inherit',
      overflowY: 'scroll',
      textAlign: 'left',
      borderStyle: 'solid',
      borderWidth: '1px'
    };
    if (sx !== null) {
      isx = _objectSpread2$2(_objectSpread2$2({}, isx), sx);
    }
    var shkey = name + '_sheet';
    if (refresh != null) {
      shkey = shkey + Date();
    }
    return /*#__PURE__*/require$$2$1.jsx(Sheet, {
      style: isx,
      children: /*#__PURE__*/require$$2$1.jsx("div", {
        style: isx,
        dangerouslySetInnerHTML: htmlContent
      }, name)
    }, shkey);
  }
  //  <div style={sx} dangerouslySetInnerHTML={html}></div>

  function WebContent(props) {
    var sx = props.sx,
      name = props.name,
      value = props.value,
      refresh = props.refresh;
    var _useState = React.useState(''),
      _useState2 = _slicedToArray$1(_useState, 2),
      htmlContent = _useState2[0],
      setHtmlContent = _useState2[1];
    React.useEffect(function () {
      if (value == null || value.trim().length === 0) {
        setHtmlContent('<h2> No link specified </h2>');
      } else {
        fetch(props.value).then(function (response) {
          return response.text();
        }).then(function (data) {
          setHtmlContent(data);
        })["catch"](function (error) {
          console.log(error);
          setHtmlContent("<h1> ".concat(props.value, " was not found</h1>"));
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, value]);
    return /*#__PURE__*/require$$2$1.jsx(HtmlText, {
      sx: sx,
      name: name,
      refresh: refresh,
      value: htmlContent
    });
  }

  /*
   * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
   * SPDX-License-Identifier: Apache-2.0
   */
  function filterExpression(filter) {
    var filterExp = [];
    var filterExpString = null;
    if (filter != null && Object.keys(filter).length > 0) {
      for (var k in filter) {
        filterExp.push("eq(".concat(k, ",\"").concat(filter[k], "\")"));
      }
      filterExpString = filterExp.join(',');
      filterExpString = "and(".concat(filterExpString, ")");
    }
    return filterExpString;
  }

  function getItemsList(_x, _x2, _x3, _x4) {
    return _getItemsList.apply(this, arguments);
  }
  function _getItemsList() {
    _getItemsList = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(appEnv, serviceName, count, filter) {
      var store, s, service, removeTypeDuplicates, filterExpString, payload, slist, r, ur;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            store = appEnv.store;
            _context.next = 3;
            return store.addServices(serviceName);
          case 3:
            s = _context.sent;
            service = s[serviceName];
            removeTypeDuplicates = function removeTypeDuplicates(arr) {
              var seen = [];
              var out = [];
              var len = arr.length;
              for (var i = 0; i < len; i++) {
                var item = arr[i];
                if (!seen.includes(item)) {
                  seen.push(item);
                  out.push(item);
                }
              }
              return out;
            };
            filterExpString = filterExpression(filter);
            payload = {
              qs: {
                limit: count == null ? 1000 : count,
                start: 0
              }
            };
            if (filterExpString != null) {
              payload.qs.filter = filterExpString;
            }
            _context.prev = 9;
            _context.next = 12;
            return store.apiCall(service.links(serviceName), payload);
          case 12:
            slist = _context.sent;
            r = slist.itemsList().toJS();
            ur = removeTypeDuplicates(r);
            return _context.abrupt("return", ur);
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](9);
            console.log(_context.t0);
            return _context.abrupt("return", []);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[9, 18]]);
    }));
    return _getItemsList.apply(this, arguments);
  }

  function BaseSelector(props) {
    var value = props.value,
      items = props.items,
      onChange = props.onChange,
      designMode = props.designMode,
      label = props.label,
      sx = props.sx;
    var _handleChange = function _handleChange(e, val) {
      if (e == null) {
        onChange(null);
      }
      var v = items != null && items.length > 0 && val != null && val.trim().length > 0 ? val.trim() : null;
      onChange(v);
      return;
    };
    var isx = _objectSpread2$2({
      height: 'inherit',
      width: 'inherit'
    }, sx);
    var currentSelection = null;
    var options = items == null ? [] : Array.isArray(items) ? items : typeof items === 'string' ? items.split(',') : [];
    value = value != null ? value.trim() : null;
    if (options.length === 0) {
      currentSelection = 'No items to display';
    } else {
      currentSelection = options.includes(value) ? value : null;
    }
    var ePropsL = {
      autoComplete: true,
      value: currentSelection,
      label: label == null ? ' ' : label,
      size: "sm",
      variant: 'outlined',
      selectOnFocus: true,
      readOnly: designMode === true ? true : false,
      sx: isx
    };
    //for debugging purposes

    var check = function check(option, value) {
      if (option === value) {
        return true;
      } else return false;
    };
    var show = /*#__PURE__*/require$$2$1.jsxs(FormControl, {
      children: [label != null ? /*#__PURE__*/require$$2$1.jsx(FormLabel, {
        children: label
      }) : null, /*#__PURE__*/require$$2$1.jsx(Autocomplete, _objectSpread2$2(_objectSpread2$2({}, ePropsL), {}, {
        options: options != null ? options : [],
        isOptionEqualToValue: check,
        onChange: _handleChange
      }))]
    });
    return show;
  }
  // isOptionEqualToValue={(option, value) => (value.trim().length === 0 || option === value) ? true : false}

  function SASItemsDropDown(props) {
    var name = props.name,
      service = props.service,
      value = props.value,
      count = props.count,
      label = props.label,
      filter = props.filter,
      onChange = props.onChange,
      style = props.style,
      designMode = props.designMode,
      _userProps = props._userProps;
    var _useState = React.useState([]),
      _useState2 = _slicedToArray$1(_useState, 2),
      menuList = _useState2[0],
      setMenuList = _useState2[1];
    var _useState3 = React.useState(''),
      _useState4 = _slicedToArray$1(_useState3, 2),
      sel = _useState4[0],
      setSel = _useState4[1];
    React.useEffect(function () {
      if (_userProps != null && _userProps.viyaEnv != null) {
        getItemsList(_userProps.viyaEnv, service.trim(), count, filter).then(function (r) {
          setMenuList(r);
          if (value !== undefined && value !== null && value !== '' && r.includes(value)) {
            setSel(value);
          } else {
            setSel(null);
          }
        })["catch"](function (err) {
          console.log(err);
          setSel('');
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, name, service, filter]);
    var _handleChange = function _handleChange(val) {
      setSel(val);
      onChange(val);
    };
    return /*#__PURE__*/require$$2$1.jsx(BaseSelector, {
      name: name,
      label: label,
      value: sel,
      onChange: _handleChange,
      items: menuList,
      designMode: designMode,
      style: style
    });
  }

  function BaseSelectorMultiple(props) {
    var value = props.value,
      items = props.items,
      separator = props.separator,
      onChange = props.onChange,
      designMode = props.designMode,
      label = props.label,
      sx = props.sx;
    var _handleChange = function _handleChange(e, val) {
      if (e == null) {
        return;
      }
      if (items != null && items.length > 0) {
        onChange(val);
      }
    };
    var sep = separator == null ? ' ' : separator;
    var isx = _objectSpread2$2({
      height: 'inherit',
      width: '100%'
    }, sx);
    if (typeof value === 'string') {
      value = value == null || value.trim().length === 0 ? [] : value.split(sep);
    }
    var ePropsL = {
      id: label,
      value: value,
      label: label,
      size: "sm",
      variant: 'outlined',
      selectOnFocus: true,
      multiple: true,
      readOnly: designMode,
      sx: isx
    };

    // isOptionEqualToValue={check}
    var show = /*#__PURE__*/require$$2$1.jsxs(FormControl, {
      children: [label !== null ? /*#__PURE__*/require$$2$1.jsx(FormLabel, {
        children: label
      }) : null, /*#__PURE__*/require$$2$1.jsx(Autocomplete, _objectSpread2$2(_objectSpread2$2({}, ePropsL), {}, {
        options: items != null ? items : [],
        onChange: _handleChange
      }))]
    });
    return show;
  }
  // isOptionEqualToValue={(option, value) => (value.trim().length === 0 || option === value) ? true : false}

  var _excluded$d = ["_userProps"];
  function Dropdown(props) {
    props._userProps;
      var eProps = _objectWithoutProperties$1(props, _excluded$d);
    return props.multiple === true ? /*#__PURE__*/require$$2$1.jsx(BaseSelectorMultiple, _objectSpread2$2({}, eProps)) : /*#__PURE__*/require$$2$1.jsx(BaseSelector, _objectSpread2$2({}, eProps));
  }

  var THEME_ID = '$$material';

  function createMixins(breakpoints, mixins) {
    return _extends$1({
      toolbar: {
        minHeight: 56,
        [breakpoints.up('xs')]: {
          '@media (orientation: landscape)': {
            minHeight: 48
          }
        },
        [breakpoints.up('sm')]: {
          minHeight: 64
        }
      }
    }, mixins);
  }

  var colorManipulator = {};

  var interopRequireDefault = {exports: {}};

  var hasRequiredInteropRequireDefault;

  function requireInteropRequireDefault () {
  	if (hasRequiredInteropRequireDefault) return interopRequireDefault.exports;
  	hasRequiredInteropRequireDefault = 1;
  	(function (module) {
  		function _interopRequireDefault(e) {
  		  return e && e.__esModule ? e : {
  		    "default": e
  		  };
  		}
  		module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  	} (interopRequireDefault));
  	return interopRequireDefault.exports;
  }

  var require$$1 = /*@__PURE__*/getAugmentedNamespace(formatMuiErrorMessage);

  var require$$2 = /*@__PURE__*/getAugmentedNamespace(clamp);

  var hasRequiredColorManipulator;

  function requireColorManipulator () {
  	if (hasRequiredColorManipulator) return colorManipulator;
  	hasRequiredColorManipulator = 1;

  	var _interopRequireDefault = requireInteropRequireDefault();
  	Object.defineProperty(colorManipulator, "__esModule", {
  	  value: true
  	});
  	colorManipulator.alpha = alpha;
  	colorManipulator.blend = blend;
  	colorManipulator.colorChannel = void 0;
  	colorManipulator.darken = darken;
  	colorManipulator.decomposeColor = decomposeColor;
  	colorManipulator.emphasize = emphasize;
  	colorManipulator.getContrastRatio = getContrastRatio;
  	colorManipulator.getLuminance = getLuminance;
  	colorManipulator.hexToRgb = hexToRgb;
  	colorManipulator.hslToRgb = hslToRgb;
  	colorManipulator.lighten = lighten;
  	colorManipulator.private_safeAlpha = private_safeAlpha;
  	colorManipulator.private_safeColorChannel = void 0;
  	colorManipulator.private_safeDarken = private_safeDarken;
  	colorManipulator.private_safeEmphasize = private_safeEmphasize;
  	colorManipulator.private_safeLighten = private_safeLighten;
  	colorManipulator.recomposeColor = recomposeColor;
  	colorManipulator.rgbToHex = rgbToHex;
  	var _formatMuiErrorMessage2 = _interopRequireDefault(require$$1);
  	var _clamp = _interopRequireDefault(require$$2);
  	/* eslint-disable @typescript-eslint/naming-convention */

  	/**
  	 * Returns a number whose value is limited to the given range.
  	 * @param {number} value The value to be clamped
  	 * @param {number} min The lower boundary of the output range
  	 * @param {number} max The upper boundary of the output range
  	 * @returns {number} A number in the range [min, max]
  	 */
  	function clampWrapper(value, min = 0, max = 1) {
  	  return (0, _clamp.default)(value, min, max);
  	}

  	/**
  	 * Converts a color from CSS hex format to CSS rgb format.
  	 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
  	 * @returns {string} A CSS rgb color string
  	 */
  	function hexToRgb(color) {
  	  color = color.slice(1);
  	  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  	  let colors = color.match(re);
  	  if (colors && colors[0].length === 1) {
  	    colors = colors.map(n => n + n);
  	  }
  	  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
	    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
	  }).join(', ')})` : '';
  	}
  	function intToHex(int) {
  	  const hex = int.toString(16);
  	  return hex.length === 1 ? `0${hex}` : hex;
  	}

  	/**
  	 * Returns an object with the type and values of a color.
  	 *
  	 * Note: Does not support rgb % values.
  	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
  	 * @returns {object} - A MUI color object: {type: string, values: number[]}
  	 */
  	function decomposeColor(color) {
  	  // Idempotent
  	  if (color.type) {
  	    return color;
  	  }
  	  if (color.charAt(0) === '#') {
  	    return decomposeColor(hexToRgb(color));
  	  }
  	  const marker = color.indexOf('(');
  	  const type = color.substring(0, marker);
  	  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
  	    throw new Error((0, _formatMuiErrorMessage2.default)(9, color));
  	  }
  	  let values = color.substring(marker + 1, color.length - 1);
  	  let colorSpace;
  	  if (type === 'color') {
  	    values = values.split(' ');
  	    colorSpace = values.shift();
  	    if (values.length === 4 && values[3].charAt(0) === '/') {
  	      values[3] = values[3].slice(1);
  	    }
  	    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
  	      throw new Error((0, _formatMuiErrorMessage2.default)(10, colorSpace));
  	    }
  	  } else {
  	    values = values.split(',');
  	  }
  	  values = values.map(value => parseFloat(value));
  	  return {
  	    type,
  	    values,
  	    colorSpace
  	  };
  	}

  	/**
  	 * Returns a channel created from the input color.
  	 *
  	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
  	 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
  	 */
  	const colorChannel = color => {
  	  const decomposedColor = decomposeColor(color);
  	  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf('hsl') !== -1 && idx !== 0 ? `${val}%` : val).join(' ');
  	};
  	colorManipulator.colorChannel = colorChannel;
  	const private_safeColorChannel = (color, warning) => {
  	  try {
  	    return colorChannel(color);
  	  } catch (error) {
  	    if (warning && "production" !== 'production') {
  	      console.warn(warning);
  	    }
  	    return color;
  	  }
  	};

  	/**
  	 * Converts a color object with type and values to a string.
  	 * @param {object} color - Decomposed color
  	 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
  	 * @param {array} color.values - [n,n,n] or [n,n,n,n]
  	 * @returns {string} A CSS color string
  	 */
  	colorManipulator.private_safeColorChannel = private_safeColorChannel;
  	function recomposeColor(color) {
  	  const {
  	    type,
  	    colorSpace
  	  } = color;
  	  let {
  	    values
  	  } = color;
  	  if (type.indexOf('rgb') !== -1) {
  	    // Only convert the first 3 values to int (i.e. not alpha)
  	    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  	  } else if (type.indexOf('hsl') !== -1) {
  	    values[1] = `${values[1]}%`;
  	    values[2] = `${values[2]}%`;
  	  }
  	  if (type.indexOf('color') !== -1) {
  	    values = `${colorSpace} ${values.join(' ')}`;
  	  } else {
  	    values = `${values.join(', ')}`;
  	  }
  	  return `${type}(${values})`;
  	}

  	/**
  	 * Converts a color from CSS rgb format to CSS hex format.
  	 * @param {string} color - RGB color, i.e. rgb(n, n, n)
  	 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
  	 */
  	function rgbToHex(color) {
  	  // Idempotent
  	  if (color.indexOf('#') === 0) {
  	    return color;
  	  }
  	  const {
  	    values
  	  } = decomposeColor(color);
  	  return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join('')}`;
  	}

  	/**
  	 * Converts a color from hsl format to rgb format.
  	 * @param {string} color - HSL color values
  	 * @returns {string} rgb color values
  	 */
  	function hslToRgb(color) {
  	  color = decomposeColor(color);
  	  const {
  	    values
  	  } = color;
  	  const h = values[0];
  	  const s = values[1] / 100;
  	  const l = values[2] / 100;
  	  const a = s * Math.min(l, 1 - l);
  	  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  	  let type = 'rgb';
  	  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  	  if (color.type === 'hsla') {
  	    type += 'a';
  	    rgb.push(values[3]);
  	  }
  	  return recomposeColor({
  	    type,
  	    values: rgb
  	  });
  	}
  	/**
  	 * The relative brightness of any point in a color space,
  	 * normalized to 0 for darkest black and 1 for lightest white.
  	 *
  	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
  	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
  	 * @returns {number} The relative brightness of the color in the range 0 - 1
  	 */
  	function getLuminance(color) {
  	  color = decomposeColor(color);
  	  let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
  	  rgb = rgb.map(val => {
  	    if (color.type !== 'color') {
  	      val /= 255; // normalized
  	    }
  	    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  	  });

  	  // Truncate at 3 digits
  	  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  	}

  	/**
  	 * Calculates the contrast ratio between two colors.
  	 *
  	 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
  	 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
  	 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
  	 * @returns {number} A contrast ratio value in the range 0 - 21.
  	 */
  	function getContrastRatio(foreground, background) {
  	  const lumA = getLuminance(foreground);
  	  const lumB = getLuminance(background);
  	  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  	}

  	/**
  	 * Sets the absolute transparency of a color.
  	 * Any existing alpha values are overwritten.
  	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
  	 * @param {number} value - value to set the alpha channel to in the range 0 - 1
  	 * @returns {string} A CSS color string. Hex input values are returned as rgb
  	 */
  	function alpha(color, value) {
  	  color = decomposeColor(color);
  	  value = clampWrapper(value);
  	  if (color.type === 'rgb' || color.type === 'hsl') {
  	    color.type += 'a';
  	  }
  	  if (color.type === 'color') {
  	    color.values[3] = `/${value}`;
  	  } else {
  	    color.values[3] = value;
  	  }
  	  return recomposeColor(color);
  	}
  	function private_safeAlpha(color, value, warning) {
  	  try {
  	    return alpha(color, value);
  	  } catch (error) {
  	    if (warning && "production" !== 'production') {
  	      console.warn(warning);
  	    }
  	    return color;
  	  }
  	}

  	/**
  	 * Darkens a color.
  	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
  	 * @param {number} coefficient - multiplier in the range 0 - 1
  	 * @returns {string} A CSS color string. Hex input values are returned as rgb
  	 */
  	function darken(color, coefficient) {
  	  color = decomposeColor(color);
  	  coefficient = clampWrapper(coefficient);
  	  if (color.type.indexOf('hsl') !== -1) {
  	    color.values[2] *= 1 - coefficient;
  	  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
  	    for (let i = 0; i < 3; i += 1) {
  	      color.values[i] *= 1 - coefficient;
  	    }
  	  }
  	  return recomposeColor(color);
  	}
  	function private_safeDarken(color, coefficient, warning) {
  	  try {
  	    return darken(color, coefficient);
  	  } catch (error) {
  	    if (warning && "production" !== 'production') {
  	      console.warn(warning);
  	    }
  	    return color;
  	  }
  	}

  	/**
  	 * Lightens a color.
  	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
  	 * @param {number} coefficient - multiplier in the range 0 - 1
  	 * @returns {string} A CSS color string. Hex input values are returned as rgb
  	 */
  	function lighten(color, coefficient) {
  	  color = decomposeColor(color);
  	  coefficient = clampWrapper(coefficient);
  	  if (color.type.indexOf('hsl') !== -1) {
  	    color.values[2] += (100 - color.values[2]) * coefficient;
  	  } else if (color.type.indexOf('rgb') !== -1) {
  	    for (let i = 0; i < 3; i += 1) {
  	      color.values[i] += (255 - color.values[i]) * coefficient;
  	    }
  	  } else if (color.type.indexOf('color') !== -1) {
  	    for (let i = 0; i < 3; i += 1) {
  	      color.values[i] += (1 - color.values[i]) * coefficient;
  	    }
  	  }
  	  return recomposeColor(color);
  	}
  	function private_safeLighten(color, coefficient, warning) {
  	  try {
  	    return lighten(color, coefficient);
  	  } catch (error) {
  	    if (warning && "production" !== 'production') {
  	      console.warn(warning);
  	    }
  	    return color;
  	  }
  	}

  	/**
  	 * Darken or lighten a color, depending on its luminance.
  	 * Light colors are darkened, dark colors are lightened.
  	 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
  	 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
  	 * @returns {string} A CSS color string. Hex input values are returned as rgb
  	 */
  	function emphasize(color, coefficient = 0.15) {
  	  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
  	}
  	function private_safeEmphasize(color, coefficient, warning) {
  	  try {
  	    return emphasize(color, coefficient);
  	  } catch (error) {
  	    if (warning && "production" !== 'production') {
  	      console.warn(warning);
  	    }
  	    return color;
  	  }
  	}

  	/**
  	 * Blend a transparent overlay color with a background color, resulting in a single
  	 * RGB color.
  	 * @param {string} background - CSS color
  	 * @param {string} overlay - CSS color
  	 * @param {number} opacity - Opacity multiplier in the range 0 - 1
  	 * @param {number} [gamma=1.0] - Gamma correction factor. For gamma-correct blending, 2.2 is usual.
  	 */
  	function blend(background, overlay, opacity, gamma = 1.0) {
  	  const blendChannel = (b, o) => Math.round((b ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
  	  const backgroundColor = decomposeColor(background);
  	  const overlayColor = decomposeColor(overlay);
  	  const rgb = [blendChannel(backgroundColor.values[0], overlayColor.values[0]), blendChannel(backgroundColor.values[1], overlayColor.values[1]), blendChannel(backgroundColor.values[2], overlayColor.values[2])];
  	  return recomposeColor({
  	    type: 'rgb',
  	    values: rgb
  	  });
  	}
  	return colorManipulator;
  }

  var colorManipulatorExports = /*@__PURE__*/ requireColorManipulator();

  const common = {
    black: '#000',
    white: '#fff'
  };

  const grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
  };

  const purple = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
  };

  const red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  };

  const orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
  };

  const blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  };

  const lightBlue = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
  };

  const green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  };

  const _excluded$c = ["mode", "contrastThreshold", "tonalOffset"];
  const light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.6)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: common.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
  const dark = {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#121212',
      default: '#121212'
    },
    action: {
      active: common.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = colorManipulatorExports.lighten(intent.main, tonalOffsetLight);
      } else if (direction === 'dark') {
        intent.dark = colorManipulatorExports.darken(intent.main, tonalOffsetDark);
      }
    }
  }
  function getDefaultPrimary(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: blue[200],
        light: blue[50],
        dark: blue[400]
      };
    }
    return {
      main: blue[700],
      light: blue[400],
      dark: blue[800]
    };
  }
  function getDefaultSecondary(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: purple[200],
        light: purple[50],
        dark: purple[400]
      };
    }
    return {
      main: purple[500],
      light: purple[300],
      dark: purple[700]
    };
  }
  function getDefaultError(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: red[500],
        light: red[300],
        dark: red[700]
      };
    }
    return {
      main: red[700],
      light: red[400],
      dark: red[800]
    };
  }
  function getDefaultInfo(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: lightBlue[400],
        light: lightBlue[300],
        dark: lightBlue[700]
      };
    }
    return {
      main: lightBlue[700],
      light: lightBlue[500],
      dark: lightBlue[900]
    };
  }
  function getDefaultSuccess(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: green[400],
        light: green[300],
        dark: green[700]
      };
    }
    return {
      main: green[800],
      light: green[500],
      dark: green[900]
    };
  }
  function getDefaultWarning(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: orange[400],
        light: orange[300],
        dark: orange[700]
      };
    }
    return {
      main: '#ed6c02',
      // closest to orange[800] that pass 3:1.
      light: orange[500],
      dark: orange[900]
    };
  }
  function createPalette(palette) {
    const {
        mode = 'light',
        contrastThreshold = 3,
        tonalOffset = 0.2
      } = palette,
      other = _objectWithoutPropertiesLoose$1(palette, _excluded$c);
    const primary = palette.primary || getDefaultPrimary(mode);
    const secondary = palette.secondary || getDefaultSecondary(mode);
    const error = palette.error || getDefaultError(mode);
    const info = palette.info || getDefaultInfo(mode);
    const success = palette.success || getDefaultSuccess(mode);
    const warning = palette.warning || getDefaultWarning(mode);

    // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
    function getContrastText(background) {
      const contrastText = colorManipulatorExports.getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
      return contrastText;
    }
    const augmentColor = ({
      color,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700
    }) => {
      color = _extends$1({}, color);
      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }
      if (!color.hasOwnProperty('main')) {
        throw new Error(formatMuiErrorMessage$1(11, name ? ` (${name})` : '', mainShade));
      }
      if (typeof color.main !== 'string') {
        throw new Error(formatMuiErrorMessage$1(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
      }
      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);
      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }
      return color;
    };
    const modes = {
      dark,
      light
    };
    const paletteOutput = deepmerge$1(_extends$1({
      // A collection of common colors.
      common: _extends$1({}, common),
      // prevent mutable object.
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor({
        color: primary,
        name: 'primary'
      }),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor({
        color: secondary,
        name: 'secondary',
        mainShade: 'A400',
        lightShade: 'A200',
        darkShade: 'A700'
      }),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor({
        color: error,
        name: 'error'
      }),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor({
        color: warning,
        name: 'warning'
      }),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor({
        color: info,
        name: 'info'
      }),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor({
        color: success,
        name: 'success'
      }),
      // The grey colors.
      grey,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText,
      // Generate a rich color object.
      augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset
    }, modes[mode]), other);
    return paletteOutput;
  }

  const _excluded$b = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }
  const caseAllCaps = {
    textTransform: 'uppercase'
  };
  const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

  /**
   * @see @link{https://m2.material.io/design/typography/the-type-system.html}
   * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
   */
  function createTypography(palette, typography) {
    const _ref = typeof typography === 'function' ? typography(palette) : typography,
      {
        fontFamily = defaultFontFamily,
        // The default font size of the Material Specification.
        fontSize = 14,
        // px
        fontWeightLight = 300,
        fontWeightRegular = 400,
        fontWeightMedium = 500,
        fontWeightBold = 700,
        // Tell MUI what's the font-size on the html element.
        // 16px is the default font-size used by browsers.
        htmlFontSize = 16,
        // Apply the CSS properties to all the variants.
        allVariants,
        pxToRem: pxToRem2
      } = _ref,
      other = _objectWithoutPropertiesLoose$1(_ref, _excluded$b);
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends$1({
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing / size)}em`
    } : {}, casing, allVariants);
    const variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
      // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit'
      }
    };
    return deepmerge$1(_extends$1({
      htmlFontSize,
      pxToRem,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold
    }, variants), other, {
      clone: false // No need to clone deep
    });
  }

  const shadowKeyUmbraOpacity = 0.2;
  const shadowKeyPenumbraOpacity = 0.14;
  const shadowAmbientShadowOpacity = 0.12;
  function createShadow(...px) {
    return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
  }

  // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
  const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

  const _excluded$a = ["duration", "easing", "delay"];
  // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
  // to learn the context in which each easing should be used.
  const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  };

  // Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing
  const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };
  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }
  function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }
    const constant = height / 36;

    // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }
  function createTransitions(inputTransitions) {
    const mergedEasing = _extends$1({}, easing, inputTransitions.easing);
    const mergedDuration = _extends$1({}, duration, inputTransitions.duration);
    const create = (props = ['all'], options = {}) => {
      const {
          duration: durationOption = mergedDuration.standard,
          easing: easingOption = mergedEasing.easeInOut,
          delay = 0
        } = options;
        _objectWithoutPropertiesLoose$1(options, _excluded$a);
      return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
    };
    return _extends$1({
      getAutoHeightDuration,
      create
    }, inputTransitions, {
      easing: mergedEasing,
      duration: mergedDuration
    });
  }

  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  const zIndex = {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };

  const _excluded$9 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
  function createTheme(options = {}, ...args) {
    const {
        mixins: mixinsInput = {},
        palette: paletteInput = {},
        transitions: transitionsInput = {},
        typography: typographyInput = {}
      } = options,
      other = _objectWithoutPropertiesLoose$1(options, _excluded$9);
    if (options.vars) {
      throw new Error(formatMuiErrorMessage$1(18));
    }
    const palette = createPalette(paletteInput);
    const systemTheme = createTheme$2(options);
    let muiTheme = deepmerge$1(systemTheme, {
      mixins: createMixins(systemTheme.breakpoints, mixinsInput),
      palette,
      // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
      shadows: shadows.slice(),
      typography: createTypography(palette, typographyInput),
      transitions: createTransitions(transitionsInput),
      zIndex: _extends$1({}, zIndex)
    });
    muiTheme = deepmerge$1(muiTheme, other);
    muiTheme = args.reduce((acc, argument) => deepmerge$1(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx$1({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }

  const defaultTheme$1 = createTheme();

  var createStyled$1 = {};

  var _extends = {exports: {}};

  var hasRequired_extends;

  function require_extends () {
  	if (hasRequired_extends) return _extends.exports;
  	hasRequired_extends = 1;
  	(function (module) {
  		function _extends() {
  		  return module.exports = _extends = Object.assign ? Object.assign.bind() : function (n) {
  		    for (var e = 1; e < arguments.length; e++) {
  		      var t = arguments[e];
  		      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
  		    }
  		    return n;
  		  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
  		}
  		module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  	} (_extends));
  	return _extends.exports;
  }

  var objectWithoutPropertiesLoose = {exports: {}};

  var hasRequiredObjectWithoutPropertiesLoose;

  function requireObjectWithoutPropertiesLoose () {
  	if (hasRequiredObjectWithoutPropertiesLoose) return objectWithoutPropertiesLoose.exports;
  	hasRequiredObjectWithoutPropertiesLoose = 1;
  	(function (module) {
  		function _objectWithoutPropertiesLoose(r, e) {
  		  if (null == r) return {};
  		  var t = {};
  		  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
  		    if (e.includes(n)) continue;
  		    t[n] = r[n];
  		  }
  		  return t;
  		}
  		module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports; 
  	} (objectWithoutPropertiesLoose));
  	return objectWithoutPropertiesLoose.exports;
  }

  var require$$3 = /*@__PURE__*/getAugmentedNamespace(styledEngine);

  var require$$4 = /*@__PURE__*/getAugmentedNamespace(deepmerge);

  var require$$5 = /*@__PURE__*/getAugmentedNamespace(capitalize);

  var require$$6 = /*@__PURE__*/getAugmentedNamespace(getDisplayName);

  var require$$7 = /*@__PURE__*/getAugmentedNamespace(createTheme$1);

  var require$$8 = /*@__PURE__*/getAugmentedNamespace(styleFunctionSx);

  var hasRequiredCreateStyled;

  function requireCreateStyled () {
  	if (hasRequiredCreateStyled) return createStyled$1;
  	hasRequiredCreateStyled = 1;

  	var _interopRequireDefault = requireInteropRequireDefault();
  	Object.defineProperty(createStyled$1, "__esModule", {
  	  value: true
  	});
  	createStyled$1.default = createStyled;
  	createStyled$1.shouldForwardProp = shouldForwardProp;
  	createStyled$1.systemDefaultTheme = void 0;
  	var _extends2 = _interopRequireDefault(require_extends());
  	var _objectWithoutPropertiesLoose2 = _interopRequireDefault(requireObjectWithoutPropertiesLoose());
  	var _styledEngine = _interopRequireWildcard(require$$3);
  	var _deepmerge = require$$4;
  	_interopRequireDefault(require$$5);
  	_interopRequireDefault(require$$6);
  	var _createTheme = _interopRequireDefault(require$$7);
  	var _styleFunctionSx = _interopRequireDefault(require$$8);
  	const _excluded = ["ownerState"],
  	  _excluded2 = ["variants"],
  	  _excluded3 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  	/* eslint-disable no-underscore-dangle */
  	function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
  	function _interopRequireWildcard(e, r) { if (e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
  	function isEmpty(obj) {
  	  return Object.keys(obj).length === 0;
  	}

  	// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
  	function isStringTag(tag) {
  	  return typeof tag === 'string' &&
  	  // 96 is one less than the char code
  	  // for "a" so this is checking that
  	  // it's a lowercase character
  	  tag.charCodeAt(0) > 96;
  	}

  	// Update /system/styled/#api in case if this changes
  	function shouldForwardProp(prop) {
  	  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
  	}
  	const systemDefaultTheme = createStyled$1.systemDefaultTheme = (0, _createTheme.default)();
  	const lowercaseFirstLetter = string => {
  	  if (!string) {
  	    return string;
  	  }
  	  return string.charAt(0).toLowerCase() + string.slice(1);
  	};
  	function resolveTheme({
  	  defaultTheme,
  	  theme,
  	  themeId
  	}) {
  	  return isEmpty(theme) ? defaultTheme : theme[themeId] || theme;
  	}
  	function defaultOverridesResolver(slot) {
  	  if (!slot) {
  	    return null;
  	  }
  	  return (props, styles) => styles[slot];
  	}
  	function processStyleArg(callableStyle, _ref) {
  	  let {
  	      ownerState
  	    } = _ref,
  	    props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  	  const resolvedStylesArg = typeof callableStyle === 'function' ? callableStyle((0, _extends2.default)({
  	    ownerState
  	  }, props)) : callableStyle;
  	  if (Array.isArray(resolvedStylesArg)) {
  	    return resolvedStylesArg.flatMap(resolvedStyle => processStyleArg(resolvedStyle, (0, _extends2.default)({
  	      ownerState
  	    }, props)));
  	  }
  	  if (!!resolvedStylesArg && typeof resolvedStylesArg === 'object' && Array.isArray(resolvedStylesArg.variants)) {
  	    const {
  	        variants = []
  	      } = resolvedStylesArg,
  	      otherStyles = (0, _objectWithoutPropertiesLoose2.default)(resolvedStylesArg, _excluded2);
  	    let result = otherStyles;
  	    variants.forEach(variant => {
  	      let isMatch = true;
  	      if (typeof variant.props === 'function') {
  	        isMatch = variant.props((0, _extends2.default)({
  	          ownerState
  	        }, props, ownerState));
  	      } else {
  	        Object.keys(variant.props).forEach(key => {
  	          if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
  	            isMatch = false;
  	          }
  	        });
  	      }
  	      if (isMatch) {
  	        if (!Array.isArray(result)) {
  	          result = [result];
  	        }
  	        result.push(typeof variant.style === 'function' ? variant.style((0, _extends2.default)({
  	          ownerState
  	        }, props, ownerState)) : variant.style);
  	      }
  	    });
  	    return result;
  	  }
  	  return resolvedStylesArg;
  	}
  	function createStyled(input = {}) {
  	  const {
  	    themeId,
  	    defaultTheme = systemDefaultTheme,
  	    rootShouldForwardProp = shouldForwardProp,
  	    slotShouldForwardProp = shouldForwardProp
  	  } = input;
  	  const systemSx = props => {
  	    return (0, _styleFunctionSx.default)((0, _extends2.default)({}, props, {
  	      theme: resolveTheme((0, _extends2.default)({}, props, {
  	        defaultTheme,
  	        themeId
  	      }))
  	    }));
  	  };
  	  systemSx.__mui_systemSx = true;
  	  return (tag, inputOptions = {}) => {
  	    // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
  	    (0, _styledEngine.internal_processStyles)(tag, styles => styles.filter(style => !(style != null && style.__mui_systemSx)));
  	    const {
  	        name: componentName,
  	        slot: componentSlot,
  	        skipVariantsResolver: inputSkipVariantsResolver,
  	        skipSx: inputSkipSx,
  	        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
  	        // For more details: https://github.com/mui/material-ui/pull/37908
  	        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
  	      } = inputOptions,
  	      options = (0, _objectWithoutPropertiesLoose2.default)(inputOptions, _excluded3);

  	    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
  	    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
  	    // TODO v6: remove `Root` in the next major release
  	    // For more details: https://github.com/mui/material-ui/pull/37908
  	    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
  	    const skipSx = inputSkipSx || false;
  	    let label;
  	    let shouldForwardPropOption = shouldForwardProp;

  	    // TODO v6: remove `Root` in the next major release
  	    // For more details: https://github.com/mui/material-ui/pull/37908
  	    if (componentSlot === 'Root' || componentSlot === 'root') {
  	      shouldForwardPropOption = rootShouldForwardProp;
  	    } else if (componentSlot) {
  	      // any other slot specified
  	      shouldForwardPropOption = slotShouldForwardProp;
  	    } else if (isStringTag(tag)) {
  	      // for string (html) tag, preserve the behavior in emotion & styled-components.
  	      shouldForwardPropOption = undefined;
  	    }
  	    const defaultStyledResolver = (0, _styledEngine.default)(tag, (0, _extends2.default)({
  	      shouldForwardProp: shouldForwardPropOption,
  	      label
  	    }, options));
  	    const transformStyleArg = stylesArg => {
  	      // On the server Emotion doesn't use React.forwardRef for creating components, so the created
  	      // component stays as a function. This condition makes sure that we do not interpolate functions
  	      // which are basically components used as a selectors.
  	      if (typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg || (0, _deepmerge.isPlainObject)(stylesArg)) {
  	        return props => processStyleArg(stylesArg, (0, _extends2.default)({}, props, {
  	          theme: resolveTheme({
  	            theme: props.theme,
  	            defaultTheme,
  	            themeId
  	          })
  	        }));
  	      }
  	      return stylesArg;
  	    };
  	    const muiStyledResolver = (styleArg, ...expressions) => {
  	      let transformedStyleArg = transformStyleArg(styleArg);
  	      const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
  	      if (componentName && overridesResolver) {
  	        expressionsWithDefaultTheme.push(props => {
  	          const theme = resolveTheme((0, _extends2.default)({}, props, {
  	            defaultTheme,
  	            themeId
  	          }));
  	          if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
  	            return null;
  	          }
  	          const styleOverrides = theme.components[componentName].styleOverrides;
  	          const resolvedStyleOverrides = {};
  	          // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
  	          Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
  	            resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, (0, _extends2.default)({}, props, {
  	              theme
  	            }));
  	          });
  	          return overridesResolver(props, resolvedStyleOverrides);
  	        });
  	      }
  	      if (componentName && !skipVariantsResolver) {
  	        expressionsWithDefaultTheme.push(props => {
  	          var _theme$components;
  	          const theme = resolveTheme((0, _extends2.default)({}, props, {
  	            defaultTheme,
  	            themeId
  	          }));
  	          const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
  	          return processStyleArg({
  	            variants: themeVariants
  	          }, (0, _extends2.default)({}, props, {
  	            theme
  	          }));
  	        });
  	      }
  	      if (!skipSx) {
  	        expressionsWithDefaultTheme.push(systemSx);
  	      }
  	      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
  	      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
  	        const placeholders = new Array(numOfCustomFnsApplied).fill('');
  	        // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
  	        transformedStyleArg = [...styleArg, ...placeholders];
  	        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
  	      }
  	      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
  	      if (tag.muiName) {
  	        Component.muiName = tag.muiName;
  	      }
  	      return Component;
  	    };
  	    if (defaultStyledResolver.withConfig) {
  	      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
  	    }
  	    return muiStyledResolver;
  	  };
  	}
  	return createStyled$1;
  }

  var createStyledExports = /*@__PURE__*/ requireCreateStyled();
  var createStyled = /*@__PURE__*/getDefaultExportFromCjs(createStyledExports);

  // copied from @mui/system/createStyled
  function slotShouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
  }

  const rootShouldForwardProp = prop => slotShouldForwardProp(prop) && prop !== 'classes';

  const styled = createStyled({
    themeId: THEME_ID,
    defaultTheme: defaultTheme$1,
    rootShouldForwardProp
  });

  const boxClasses = generateUtilityClasses$2('MuiBox', ['root']);

  const defaultTheme = createTheme();
  const Box = createBox({
    themeId: THEME_ID,
    defaultTheme,
    defaultClassName: boxClasses.root,
    generateClassName: ClassNameGenerator.generate
  });

  function Border(props) {
    var sx = props.sx;

    // let isx = {height: 'inherit', width: 'inherit', zindex: 1, boxShadow: 2, backgroundColor:  '#f5f5f5',border: 1, borderRadius: 4, ...sx};
    var isx = _objectSpread2$2({
      height: 'inherit',
      width: 'inherit',
      zindex: 1,
      boxShadow: 2
    }, sx);
    return /*#__PURE__*/require$$2$1.jsx(Box, {
      sx: isx
    }, "paper");
  }

  var _excluded$8 = ["column", "value", "label", "lib", "table", "where", "style", "onChange", "designMode", "_userProps"];
  function DistinctValues(props) {
    var column = props.column,
      value = props.value,
      label = props.label,
      lib = props.lib,
      table = props.table,
      where = props.where,
      style = props.style,
      onChange = props.onChange,
      designMode = props.designMode,
      _userProps = props._userProps,
      eProps = _objectWithoutProperties$1(props, _excluded$8);
    var _useState = React.useState([]),
      _useState2 = _slicedToArray$1(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];
    var _useState3 = React.useState(value),
      _useState4 = _slicedToArray$1(_useState3, 2),
      sel = _useState4[0],
      setSel = _useState4[1];
    var _handleChange = function _handleChange(selx) {
      setSel(selx);
      onChange(selx);
    };
    React.useEffect(function () {
      if (_userProps == null || _userProps.viyaEnv == null) {
        setList([]);
      } else {
        var appEnv = _userProps.viyaEnv;
        if (column == null || column.trim().length === 0) {
          setList([]);
        } else {
          var w = where == null ? '' : where;
          var t = {
            name: table
          };
          if (appEnv.source === 'cas') {
            t.caslib = lib;
          } else {
            t.libref = lib;
          }
          restafedit.distinctValues(column, appEnv, t, w).then(function (r) {
            setList(r[column]);
          })["catch"](function (err) {
            console.log(err);
            setList([]);
            setSel('');
          });
        }
      }
    }, [label, column, lib, table, where, _userProps]);
    var pr = {
      name: 'distinct',
      value: sel,
      items: list,
      label: label,
      onChange: _handleChange,
      designMode: designMode,
      style: style,
      eProps: eProps
    };
    return /*#__PURE__*/require$$2$1.jsx(BaseSelector, _objectSpread2$2({}, pr));
  }

  var _excluded$7 = ["value", "sx", "label", "designMode", "onChange", "_userProps"];
  function Button(props) {
    var value = props.value,
      sx = props.sx,
      label = props.label,
      designMode = props.designMode,
      onChange = props.onChange;
      props._userProps;
      var eProps = _objectWithoutProperties$1(props, _excluded$7);
    var _handleClick = function _handleClick() {
      onChange(value);
    };
    var ePropsL = _objectSpread2$2({
      variant: 'outlined',
      disabled: designMode,
      color: 'primary',
      size: "md"
    }, eProps);

    // using value - to allow for changing the text of the button programmatically
    var isx = _objectSpread2$2({
      textTransform: 'capitalize',
      backgroundColor: 'lightblue',
      height: 'inherit',
      width: 'inherit'
    }, sx);
    debugger;
    console.log(Button$1);
    return /*#__PURE__*/require$$2$1.jsx(Button$1, _objectSpread2$2(_objectSpread2$2({
      sx: isx
    }, ePropsL), {}, {
      onClick: _handleClick,
      children: label
    }));
  }

  var _excluded$6 = ["label", "value", "onChange", "sx", "_userProps"];
  function Checkbox(props) {
    var label = props.label,
      value = props.value,
      onChange = props.onChange,
      sx = props.sx;
      props._userProps;
      var eProps = _objectWithoutProperties$1(props, _excluded$6);
    var _onChange = function _onChange(e) {
      onChange(e.target.checked);
    };
    var isx = _objectSpread2$2({
      height: 'inherit',
      width: 'inherit'
    }, sx);
    var ePropsL = _objectSpread2$2({
      label: label,
      variant: "outlined"
    }, eProps);
    var V = /*#__PURE__*/require$$2$1.jsx(Checkbox$1, _objectSpread2$2(_objectSpread2$2({
      sx: isx,
      label: label
    }, ePropsL), {}, {
      checked: value,
      onChange: _onChange
    }));
    return V;
  }

  function SelectTable(props) {
    var name = props.name,
      value = props.value,
      lib = props.lib,
      label = props.label,
      refresh = props.refresh,
      designMode = props.designMode,
      style = props.style,
      eProps = props.eProps,
      _userProps = props._userProps,
      onChange = props.onChange;
    var _useState = React.useState([]),
      _useState2 = _slicedToArray$1(_useState, 2),
      tableList = _useState2[0],
      setTableList = _useState2[1];
    var _useState3 = React.useState(value),
      _useState4 = _slicedToArray$1(_useState3, 2),
      sel = _useState4[0],
      setSel = _useState4[1];
    var lastlib = React.useRef(null);
    var _handleChange = function _handleChange(selx) {
      setSel(selx);
      onChange(selx);
    };
    React.useEffect(function () {
      var _setupList = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(lib) {
          var tabList;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(lib == null || _userProps == null || _userProps.viyaEnv == null)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt("return", []);
              case 2:
                _context.next = 4;
                return restafedit.getTableList(lib, _userProps.viyaEnv);
              case 4:
                tabList = _context.sent;
                return _context.abrupt("return", tabList);
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function _setupList(_x) {
          return _ref.apply(this, arguments);
        };
      }();
      if (lib == null) {
        setTableList([]);
        setSel('');
      } else if (refresh !== false || lastlib.current !== lib) {
        _setupList(lib).then(function (r) {
          setTableList(r);
          if (lastlib.current !== lib) {
            setSel('');
          }
          lastlib.current = lib;
        })["catch"](function (r) {
          setTableList([]);
          setSel('');
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, lib, value, refresh, _userProps]);
    return /*#__PURE__*/require$$2$1.jsx(BaseSelector, {
      name: name,
      value: sel,
      items: tableList,
      onChange: _handleChange,
      designMode: designMode,
      style: style,
      eProps: eProps,
      label: label
    });
  }

  function SelectLibrary(props) {
    var name = props.name,
      value = props.value,
      style = props.style,
      label = props.label,
      onChange = props.onChange;
      props.eProps;
      var designMode = props.designMode,
      _userProps = props._userProps;
    var _useState = React.useState([]),
      _useState2 = _slicedToArray$1(_useState, 2),
      liblist = _useState2[0],
      setLiblist = _useState2[1];
    var _useState3 = React.useState(value),
      _useState4 = _slicedToArray$1(_useState3, 2),
      sel = _useState4[0],
      setSel = _useState4[1];
    var _handleChange = function _handleChange(selx) {
      setSel(selx);
      onChange(selx);
    };
    React.useEffect(function () {
      if (_userProps != null && _userProps.viyaEnv != null) {
        var _userProps$viyaEnv = _userProps.viyaEnv,
          source = _userProps$viyaEnv.source,
          session = _userProps$viyaEnv.session;
        debugger;
        if (session === null) {
          setLiblist([]);
        } else {
          restafedit.getLibraryList(_userProps.viyaEnv).then(function (r) {
            setLiblist(r);
            if (source === 'cas' && value != null && value.toUpperCase() === 'CASUSER') {
              var index = r.findIndex(function (e) {
                return e.indexOf('CASUSER') >= 0;
              });
              if (index >= 0) {
                setSel(r[index]);
              }
            }
          })["catch"](function (err) {
            console.log(err);
            setSel('');
            setLiblist([]);
          });
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);
    return /*#__PURE__*/require$$2$1.jsx(BaseSelector, {
      name: name,
      value: sel,
      items: liblist,
      onChange: _handleChange,
      designMode: designMode,
      style: style,
      label: label
    });
  }

  /**
   * @description get the columns for a table
   * @async
   * @module getTableColumns
   * @category restafedit/utility
   * @param {string} source   - cas or compute
   * @param {object} table    - table object
   * @param {appEnv} appEnv   - app Environment from setup
   *
   * @returns {promise}       - returns an array of table names(cas or SAS)
   * @example
   *  let list = await getTableSummary(appEnv);
   *  returns summary information object. The function also sets the results in appEnv.state.tableSummary
   *  For consistency between cas and compute, rowCount and columnCount are
   *  set for both cases.
   * { 
   *  rowCount: number,
   *  columnCount: number
   *  ...rest...
   *  }
   */
  function getTableColumns(_x, _x2, _x3, _x4, _x5) {
    return _getTableColumns.apply(this, arguments);
  }
  function _getTableColumns() {
    _getTableColumns = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(store, session, source, lib, table) {
      var handler, r;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            handler = source === 'cas' ? casTableColumns : computeTableColumns;
            _context.next = 3;
            return handler(store, session, lib, table);
          case 3:
            r = _context.sent;
            return _context.abrupt("return", r);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _getTableColumns.apply(this, arguments);
  }
  function casTableColumns(_x6, _x7, _x8, _x9) {
    return _casTableColumns.apply(this, arguments);
  }
  function _casTableColumns() {
    _casTableColumns = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(store, session, caslib, table) {
      var src, args, r, columns;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            src = "\n  rc = checkAndLoadTable(_args_.table.caslib, _args_.table.name);\n  if (rc ne true) then do;\n    text = 'Unable to access ' ||_args_.table.caslib||'.'||_args_.table.name;   \n    rx = {severity=2,reason=6, status='error',statusCode=2, formatted=text};\n    exit(rx);  \n  end; \n  action table.columnInfo r=result/\n    table = {caslib= _args_.table.caslib,  name=_args_.table.name};\n    run;\n  summary = result; \n  send_response({casResults=summary});\n  ";
            args = {
              table: {
                caslib: caslib,
                name: table
              }
            };
            _context2.next = 4;
            return restaflib.caslRun(store, session, src, args, true);
          case 4:
            r = _context2.sent;
            columns = r.results.casResults.ColumnInfo.rows.map(function (r) {
              return r[0].toLowerCase();
            });
            return _context2.abrupt("return", columns);
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _casTableColumns.apply(this, arguments);
  }
  function computeTableColumns(_x10, _x11, _x12, _x13) {
    return _computeTableColumns.apply(this, arguments);
  }
  function _computeTableColumns() {
    _computeTableColumns = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(store, session, libref, table) {
      var p, mylib, selflib, tables, tablesSelf, tableDetails, columnraf, columns;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            libref = libref.toUpperCase();
            table = table.toUpperCase();
            p = {
              qs: {
                filter: "eq(name,'".concat(libref, "')")
              }
            };
            _context3.next = 5;
            return store.apiCall(session.links('librefs'), p);
          case 5:
            mylib = _context3.sent;
            _context3.next = 8;
            return store.apiCall(mylib.itemsCmd(libref, 'self'));
          case 8:
            selflib = _context3.sent;
            p = {
              qs: {
                filter: "eq(name,'".concat(table, "')")
              }
            };
            _context3.next = 12;
            return store.apiCall(selflib.links('tables'), p);
          case 12:
            tables = _context3.sent;
            if (!(tables.itemsList().size === 0)) {
              _context3.next = 16;
              break;
            }
            console.log("Table ".concat(table, " not found in ").concat(libref));
            return _context3.abrupt("return", []);
          case 16:
            _context3.next = 18;
            return store.apiCall(tables.links('self'));
          case 18:
            tablesSelf = _context3.sent;
            _context3.next = 21;
            return store.apiCall(tablesSelf.itemsCmd(table, 'self'));
          case 21:
            tableDetails = _context3.sent;
            _context3.next = 24;
            return store.apiCall(tableDetails.links('columns'));
          case 24:
            columnraf = _context3.sent;
            columns = columnraf.itemsList().toJS();
            return _context3.abrupt("return", columns);
          case 27:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _computeTableColumns.apply(this, arguments);
  }

  function SelectColumns(props) {
    var name = props.name,
      value = props.value,
      separator = props.separator,
      style = props.style,
      label = props.label,
      lib = props.lib,
      table = props.table,
      asArray = props.asArray,
      onChange = props.onChange,
      designMode = props.designMode,
      _userProps = props._userProps;
    var _useState = React.useState([]),
      _useState2 = _slicedToArray$1(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];
    var sep = separator == null ? ' ' : separator;
    var _useState3 = React.useState(function () {
        if (value == null) {
          return [];
        } else if (typeof value === 'string') {
          return value.length > 0 ? value.split(sep) : [];
        } else if (Array.isArray(value) === true) {
          return value;
        }
      }),
      _useState4 = _slicedToArray$1(_useState3, 2),
      sel = _useState4[0],
      setSel = _useState4[1];
    var _handleChange = function _handleChange(selx) {
      setSel(selx);
      onChange(asArray === true ? selx : selx.join(sep));
    };
    React.useEffect(function () {
      if (_userProps == null || _userProps.viyaEnv == null) {
        setList([]);
        setSel([]);
      } else if (table == null || table.trim().length === 0 || lib == null || lib.trim().length === 0) {
        setList([]);
        setSel([]);
      } else {
        getTableColumns(_userProps.viyaEnv.store, _userProps.viyaEnv.session, _userProps.viyaEnv.source, lib, table).then(function (r) {
          setList(r);
          setSel([]);
        })["catch"](function (err) {
          console.log(err);
          setSel([]);
          setList([]);
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, lib, table]);
    return /*#__PURE__*/require$$2$1.jsx(BaseSelectorMultiple, {
      name: name,
      value: sel,
      items: list,
      onChange: _handleChange,
      designMode: designMode,
      style: style,
      label: label
    });
  }

  function SelectReport(props) {
    return /*#__PURE__*/require$$2$1.jsx(SASItemsDropDown, _objectSpread2$2(_objectSpread2$2({}, props), {}, {
      service: "reports"
    }));
  }

  /*
   * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
   * SPDX-License-Identifier: Apache-2.0
   */
  // TBD: delete repeated code and use this.
  // add additional filters before doing that(like documenttype)
  function getFolderUri(_x, _x2) {
    return _getFolderUri.apply(this, arguments);
  }
  function _getFolderUri() {
    _getFolderUri = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(store, path) {
      var _yield$store$addServi, folders, payload, userFolder, parentFolder;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(path == null)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", null);
          case 2:
            _context.next = 4;
            return store.addServices("folders");
          case 4:
            _yield$store$addServi = _context.sent;
            folders = _yield$store$addServi.folders;
            // Get folder info
            payload = {
              qs: {
                filter: "eq(name,\"".concat(path, "\")")
              }
            };
            _context.next = 9;
            return store.apiCall(folders.links("folders"), payload);
          case 9:
            userFolder = _context.sent;
            if (!(userFolder.itemsList().size === 0)) {
              _context.next = 12;
              break;
            }
            throw new Error("Unable to find folder ".concat(path));
          case 12:
            parentFolder = '/folders/folders/' + userFolder.items(path, 'data', 'id');
            return _context.abrupt("return", parentFolder);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _getFolderUri.apply(this, arguments);
  }

  function SelectFiles(props) {
    var name = props.name,
      value = props.value,
      label = props.label,
      eProps = props.eProps,
      style = props.style,
      folder = props.folder,
      filter = props.filter,
      onChange = props.onChange,
      designMode = props.designMode,
      _userProps = props._userProps;
    var _useState = React.useState([]),
      _useState2 = _slicedToArray$1(_useState, 2),
      list = _useState2[0],
      setList = _useState2[1];
    var _useState3 = React.useState(''),
      _useState4 = _slicedToArray$1(_useState3, 2),
      sel = _useState4[0],
      setSel = _useState4[1];
    // let value = (refresh  === true) ? null : value;

    var _handleChange = function _handleChange(selx) {
      setSel(selx);
      onChange(selx);
    };
    React.useEffect(function () {
      var setupCall = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var folderUri, tfilter, r;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getFolderUri(_userProps.viyaEnv.store, folder);
              case 2:
                folderUri = _context.sent;
                tfilter = filter == null ? {} : _objectSpread2$2({}, filter);
                tfilter.documentType = 'fseditconfig';
                if (folderUri != null) {
                  tfilter.parentUri = folderUri;
                }
                _context.next = 8;
                return getItemsList(appEnv, 'files', 1000, tfilter);
              case 8:
                r = _context.sent;
                return _context.abrupt("return", r);
              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function setupCall() {
          return _ref.apply(this, arguments);
        };
      }();
      if (_userProps != null && _userProps.viyaEnv != null) {
        setupCall().then(function (r) {
          setList(r);
          setSel(r.length === 0 || value == null || value.trim().length === 0 ? null : value);
        })["catch"](function (err) {
          console.log(err);
          setSel(null);
          setList([]);
        });
      }
    }, [appEnv, value, folder, filter]);
    return /*#__PURE__*/require$$2$1.jsx(BaseSelector, {
      name: name,
      value: sel,
      items: list,
      onChange: _handleChange,
      designMode: designMode,
      style: style,
      eProps: eProps,
      label: label
    });
  }

  function SelectFolder(props) {
    return /*#__PURE__*/require$$2$1.jsx(SASItemsDropDown, _objectSpread2$2(_objectSpread2$2({}, props), {}, {
      service: "folders"
    }), props.name);
  }

  function Inputarea(props) {
    var name = props.name,
      label = props.label,
      sx = props.sx,
      designMode = props.designMode,
      onChange = props.onChange,
      minRows = props.minRows,
      maxRows = props.maxRows;
    var _useState = React.useState(function () {
        return props.value == null ? ' ' : props.value;
      }),
      _useState2 = _slicedToArray$1(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
    var disabled = props.disabled == null ? false : props.disabled;
    disabled = designMode === true ? true : disabled;
    React.useEffect(function () {
      setValue(props.value == null ? ' ' : props.value);
    }, [props.value]);
    var handleChange = function handleChange(synthE) {
      setValue(synthE.target.value);
      if (synthE.key === 'Enter') {
        onChange(synthE.target.value, synthE);
      }
    };
    var _onChange = function _onChange(e) {
      var synthE = {
        key: e.key,
        target: {
          value: e.target.value,
          name: name
        }
      };
      handleChange(synthE);
    };
    var _onKeyPress = function _onKeyPress(e) {
      if (e.key === 'Enter') {
        var synthE = {
          key: 'Enter',
          target: {
            value: e.target.value,
            name: name
          }
        };
        handleChange(synthE);
      }
      return true;
    };
    var _onFocus = function _onFocus(e) {
      var synthE = {
        key: 'onFocus',
        target: {
          value: e.target.value,
          name: name
        }
      };
      handleChange(synthE);
      setValue(e.target.value);
      return true;
    };
    var istyle = {
      sx: sx
    };
    istyle.textAlign = 'left';
    var _onBlur = function _onBlur(e) {
      var synthE = {
        key: 'Enter',
        target: {
          value: e.target.value,
          name: name
        }
      };
      handleChange(synthE);
      return true;
    };
    var inputProps = {
      inputMode: 'text',
      label: label,
      step: 'any',
      style: istyle,
      onKeyPress: _onKeyPress,
      onBlur: _onBlur,
      onFocus: _onFocus
    };
    var isx = _objectSpread2$2({
      width: 'inherit',
      height: 'inherit'
    }, istyle);
    var ePropsL = {
      name: name,
      size: 'md',
      readOnly: disabled,
      variant: "outlined",
      minRows: minRows == null ? 2 : minRows,
      maxRows: maxRows == null ? 5 : maxRows,
      onKeyPress: _onKeyPress,
      onBlur: _onBlur,
      sx: isx,
      slotProps: {
        input: inputProps
      }
    };
    delete ePropsL.disabled;
    var t = /*#__PURE__*/require$$2$1.jsx(Textarea, _objectSpread2$2(_objectSpread2$2({}, ePropsL), {}, {
      value: value,
      onChange: _onChange
    }), name);
    t = label != null && label.trim().length > 0 ? /*#__PURE__*/require$$2$1.jsxs(FormControl, {
      children: [/*#__PURE__*/require$$2$1.jsx(FormLabel, {
        children: label
      }), t]
    }) : /*#__PURE__*/require$$2$1.jsx("div", {
      children: t
    });
    return t;
  }

  var _excluded$5 = ["label", "value", "sx", "_userProps"];
  function Divider(props) {
    var label = props.label,
      value = props.value,
      sx = props.sx;
      props._userProps;
      var eProps = _objectWithoutProperties$1(props, _excluded$5);
    var ePropL = _objectSpread2$2({
      //label: label,
      id: label,
      // disabled: designMode,
      sx: sx,
      orientation: "horizontal"
    }, eProps);
    var show = /*#__PURE__*/require$$2$1.jsxs(Divider$1, _objectSpread2$2(_objectSpread2$2({}, ePropL), {}, {
      children: [" ", value]
    }));
    return show;
  }

  var btoa$1 = {exports: {}};

  var hasRequiredBtoa;

  function requireBtoa () {
  	if (hasRequiredBtoa) return btoa$1.exports;
  	hasRequiredBtoa = 1;
  	(function () {

  	  function btoa(str) {
  	    var buffer;

  	    if (str instanceof Buffer) {
  	      buffer = str;
  	    } else {
  	      buffer = Buffer.from(str.toString(), 'binary');
  	    }

  	    return buffer.toString('base64');
  	  }

  	  btoa$1.exports = btoa;
  	}());
  	return btoa$1.exports;
  }

  var btoaExports = requireBtoa();
  var btoa = /*@__PURE__*/getDefaultExportFromCjs(btoaExports);

  function Image(props) {
    var value = props.value,
      label = props.label,
      sx = props.sx,
      srcType = props.srcType,
      refresh = props.refresh;

    // let ePropsL = {variant: 'outlined', disabled: designMode, color: 'primary', size:"md", ...eProps};

    // using value - to allow for changing the text of the button programmatically

    var isx = _objectSpread2$2({
      height: 'inherit',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: 8,
      width: 'inherit'
    }, sx);
    var sx2 = {
      height: 'inherit',
      width: 'inherit'
    };
    var src = value;
    if (srcType != null) {
      src = dataUrl(value, srcType);
    }
    var show = /*#__PURE__*/require$$2$1.jsxs("div", {
      style: isx,
      children: [/*#__PURE__*/require$$2$1.jsx("img", {
        src: src,
        crossOrigin: "",
        alt: label,
        style: sx2
      }, refresh + 1), " "]
    }, refresh);
    return show;
    function svgToDataURL(svgString) {
      return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
    }
    function pngToDataURL(pngBuffer) {
      return 'data:image/png;base64,' + pngBuffer.toString('base64');
    }
    function dataUrl(value, srcType) {
      var data = srcType === 'svg' ? svgToDataURL(value) : pngToDataURL(value);
      return data;
    }
  }

  var MoreVert$1 = {};

  var createSvgIcon$1 = {};

  function useDefaultProps(params) {
    return useDefaultProps$1(params);
  }

  function getSvgIconUtilityClass(slot) {
    return generateUtilityClass$2('MuiSvgIcon', slot);
  }
  generateUtilityClasses$2('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

  const _excluded$4 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
  const useUtilityClasses$1 = ownerState => {
    const {
      color,
      fontSize,
      classes
    } = ownerState;
    const slots = {
      root: ['root', color !== 'inherit' && `color${capitalize$1(color)}`, `fontSize${capitalize$1(fontSize)}`]
    };
    return composeClasses(slots, getSvgIconUtilityClass, classes);
  };
  const SvgIconRoot = styled('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.color !== 'inherit' && styles[`color${capitalize$1(ownerState.color)}`], styles[`fontSize${capitalize$1(ownerState.fontSize)}`]];
    }
  })(({
    theme,
    ownerState
  }) => {
    var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
    return {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      // the <svg> will define the property that has `currentColor`
      // for example heroicons uses fill="none" and stroke="currentColor"
      fill: ownerState.hasSvgAsChild ? undefined : 'currentColor',
      flexShrink: 0,
      transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, 'fill', {
        duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
      }),
      fontSize: {
        inherit: 'inherit',
        small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || '1.25rem',
        medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || '1.5rem',
        large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || '2.1875rem'
      }[ownerState.fontSize],
      // TODO v5 deprecate, v6 remove for sx
      color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
        action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
        disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
        inherit: undefined
      }[ownerState.color]
    };
  });
  const SvgIcon = /*#__PURE__*/React__namespace.forwardRef(function SvgIcon(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: 'MuiSvgIcon'
    });
    const {
        children,
        className,
        color = 'inherit',
        component = 'svg',
        fontSize = 'medium',
        htmlColor,
        inheritViewBox = false,
        titleAccess,
        viewBox = '0 0 24 24'
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$4);
    const hasSvgAsChild = /*#__PURE__*/React__namespace.isValidElement(children) && children.type === 'svg';
    const ownerState = _extends$1({}, props, {
      color,
      component,
      fontSize,
      instanceFontSize: inProps.fontSize,
      inheritViewBox,
      viewBox,
      hasSvgAsChild
    });
    const more = {};
    if (!inheritViewBox) {
      more.viewBox = viewBox;
    }
    const classes = useUtilityClasses$1(ownerState);
    return /*#__PURE__*/require$$2$1.jsxs(SvgIconRoot, _extends$1({
      as: component,
      className: clsx(classes.root, className),
      focusable: "false",
      color: htmlColor,
      "aria-hidden": titleAccess ? undefined : true,
      role: titleAccess ? 'img' : undefined,
      ref: ref
    }, more, other, hasSvgAsChild && children.props, {
      ownerState: ownerState,
      children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/require$$2$1.jsx("title", {
        children: titleAccess
      }) : null]
    }));
  });
  SvgIcon.muiName = 'SvgIcon';

  function createSvgIcon(path, displayName) {
    function Component(props, ref) {
      return /*#__PURE__*/require$$2$1.jsx(SvgIcon, _extends$1({
        "data-testid": `${displayName}Icon`,
        ref: ref
      }, props, {
        children: path
      }));
    }
    Component.muiName = SvgIcon.muiName;
    return /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(Component));
  }

  // TODO: remove this export once ClassNameGenerator is stable
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const unstable_ClassNameGenerator = {
    configure: generator => {
      ClassNameGenerator.configure(generator);
    }
  };

  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    capitalize: capitalize$1,
    createChainedFunction: createChainedFunction,
    createSvgIcon: createSvgIcon,
    debounce: debounce$1,
    deprecatedPropType: deprecatedPropType,
    isMuiElement: isMuiElement,
    ownerDocument: ownerDocument,
    ownerWindow: ownerWindow,
    requirePropFactory: requirePropFactory,
    setRef: setRef,
    unstable_ClassNameGenerator: unstable_ClassNameGenerator,
    unstable_useEnhancedEffect: useEnhancedEffect,
    unstable_useId: useId,
    unsupportedProp: unsupportedProp,
    useControlled: useControlled,
    useEventCallback: useEventCallback,
    useForkRef: useForkRef,
    useIsFocusVisible: useIsFocusVisible
  });

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(utils);

  var hasRequiredCreateSvgIcon;

  function requireCreateSvgIcon () {
  	if (hasRequiredCreateSvgIcon) return createSvgIcon$1;
  	hasRequiredCreateSvgIcon = 1;
  	(function (exports) {
  		'use client';

  		Object.defineProperty(exports, "__esModule", {
  		  value: true
  		});
  		Object.defineProperty(exports, "default", {
  		  enumerable: true,
  		  get: function () {
  		    return _utils.createSvgIcon;
  		  }
  		});
  		var _utils = require$$0; 
  	} (createSvgIcon$1));
  	return createSvgIcon$1;
  }

  var hasRequiredMoreVert;

  function requireMoreVert () {
  	if (hasRequiredMoreVert) return MoreVert$1;
  	hasRequiredMoreVert = 1;

  	var _interopRequireDefault = requireInteropRequireDefault();
  	Object.defineProperty(MoreVert$1, "__esModule", {
  	  value: true
  	});
  	MoreVert$1.default = void 0;
  	var _createSvgIcon = _interopRequireDefault(/*@__PURE__*/ requireCreateSvgIcon());
  	var _jsxRuntime = require$$2$1;
  	MoreVert$1.default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  	  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  	}), 'MoreVert');
  	return MoreVert$1;
  }

  var MoreVertExports = /*@__PURE__*/ requireMoreVert();
  var MoreVert = /*@__PURE__*/getDefaultExportFromCjs(MoreVertExports);

  var _excluded$3 = ["items", "sx", "valueType", "label", "_userProps"];
  function DropDownMenu(props) {
    var items = props.items,
      sx = props.sx,
      valueType = props.valueType,
      label = props.label;
      props._userProps;
      var eProps = _objectWithoutProperties$1(props, _excluded$3);
    var onSelect = function onSelect(m, i) {
      props.onChange(valueType === 'index' ? i.toString() : m);
    };
    var menuList = [];
    var sxb = {
      textTransform: 'capitalize',
      justifyContent: 'flex-start'
    };
    if (items != null) {
      items.forEach(function (m, i) {
        menuList.push(/*#__PURE__*/require$$2$1.jsx(StableMenuItem, {
          sx: sxb,
          onClick: function onClick() {
            return onSelect(m, i);
          },
          children: m
        }, m));
      });
    }
    var isx = _objectSpread2$2({
      height: 'inherit',
      justifyContent: 'left'
    }, sx);
    var ePropsL = _objectSpread2$2({
      placement: 'bottom-start'
    }, eProps);
    return /*#__PURE__*/require$$2$1.jsxs(Dropdown$1, {
      children: [/*#__PURE__*/require$$2$1.jsxs(MenuButton, _objectSpread2$2(_objectSpread2$2({
        sx: isx
      }, ePropsL), {}, {
        children: [/*#__PURE__*/require$$2$1.jsx(MoreVert, {}), label]
      })), /*#__PURE__*/require$$2$1.jsx(Menu, _objectSpread2$2(_objectSpread2$2({}, ePropsL), {}, {
        children: menuList
      }))]
    });
  }

  var FirstPage$1 = {};

  var hasRequiredFirstPage;

  function requireFirstPage () {
  	if (hasRequiredFirstPage) return FirstPage$1;
  	hasRequiredFirstPage = 1;

  	var _interopRequireDefault = requireInteropRequireDefault();
  	Object.defineProperty(FirstPage$1, "__esModule", {
  	  value: true
  	});
  	FirstPage$1.default = void 0;
  	var _createSvgIcon = _interopRequireDefault(/*@__PURE__*/ requireCreateSvgIcon());
  	var _jsxRuntime = require$$2$1;
  	FirstPage$1.default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  	  d: "M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  	}), 'FirstPage');
  	return FirstPage$1;
  }

  var FirstPageExports = /*@__PURE__*/ requireFirstPage();
  var FirstPage = /*@__PURE__*/getDefaultExportFromCjs(FirstPageExports);

  var ChevronRight$1 = {};

  var hasRequiredChevronRight;

  function requireChevronRight () {
  	if (hasRequiredChevronRight) return ChevronRight$1;
  	hasRequiredChevronRight = 1;

  	var _interopRequireDefault = requireInteropRequireDefault();
  	Object.defineProperty(ChevronRight$1, "__esModule", {
  	  value: true
  	});
  	ChevronRight$1.default = void 0;
  	var _createSvgIcon = _interopRequireDefault(/*@__PURE__*/ requireCreateSvgIcon());
  	var _jsxRuntime = require$$2$1;
  	ChevronRight$1.default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  	  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  	}), 'ChevronRight');
  	return ChevronRight$1;
  }

  var ChevronRightExports = /*@__PURE__*/ requireChevronRight();
  var ChevronRight = /*@__PURE__*/getDefaultExportFromCjs(ChevronRightExports);

  var ChevronLeft$1 = {};

  var hasRequiredChevronLeft;

  function requireChevronLeft () {
  	if (hasRequiredChevronLeft) return ChevronLeft$1;
  	hasRequiredChevronLeft = 1;

  	var _interopRequireDefault = requireInteropRequireDefault();
  	Object.defineProperty(ChevronLeft$1, "__esModule", {
  	  value: true
  	});
  	ChevronLeft$1.default = void 0;
  	var _createSvgIcon = _interopRequireDefault(/*@__PURE__*/ requireCreateSvgIcon());
  	var _jsxRuntime = require$$2$1;
  	ChevronLeft$1.default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  	  d: "M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
  	}), 'ChevronLeft');
  	return ChevronLeft$1;
  }

  var ChevronLeftExports = /*@__PURE__*/ requireChevronLeft();
  var ChevronLeft = /*@__PURE__*/getDefaultExportFromCjs(ChevronLeftExports);

  var LastPage$1 = {};

  var hasRequiredLastPage;

  function requireLastPage () {
  	if (hasRequiredLastPage) return LastPage$1;
  	hasRequiredLastPage = 1;

  	var _interopRequireDefault = requireInteropRequireDefault();
  	Object.defineProperty(LastPage$1, "__esModule", {
  	  value: true
  	});
  	LastPage$1.default = void 0;
  	var _createSvgIcon = _interopRequireDefault(/*@__PURE__*/ requireCreateSvgIcon());
  	var _jsxRuntime = require$$2$1;
  	LastPage$1.default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  	  d: "M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  	}), 'LastPage');
  	return LastPage$1;
  }

  var LastPageExports = /*@__PURE__*/ requireLastPage();
  var LastPage = /*@__PURE__*/getDefaultExportFromCjs(LastPageExports);

  function WherePrompt(props) {
    var value = props.value,
      _onChange = props.onChange;
    //Hconst [where, setWhere] = useState(value);

    var pr = {
      name: 'where',
      label: 'where',
      value: value,
      type: 'text',
      style: {
        width: '80ch'
      },
      designMode: false,
      eProps: {
        variant: 'outlined',
        size: 'small'
      },
      appEnv: {},
      onChange: function onChange(v) {
        return _onChange(v);
      }
    };
    return /*#__PURE__*/require$$2$1.jsx(Input, _objectSpread2$2({}, pr));
  }

  function ScrollMenu(props) {
    var menus = props.menus,
      onSelect = props.onSelect,
      where = props.where,
      groups = props.groups;
    var iconList = {
      first: /*#__PURE__*/require$$2$1.jsx(FirstPage, {
        size: "small"
      }),
      last: /*#__PURE__*/require$$2$1.jsx(LastPage, {
        size: "small"
      }),
      next: /*#__PURE__*/require$$2$1.jsx(ChevronRight, {
        size: "small"
      }),
      prev: /*#__PURE__*/require$$2$1.jsx(ChevronLeft, {
        size: "small"
      }),
      more: /*#__PURE__*/require$$2$1.jsx(MoreVert, {
        size: "small"
      })
    };
    var _select = function _select(m) {
      var flag = !menus[m].state;
      onSelect(m, flag);
    };
    var showGroups = groups === null ? {} : groups;
    var _dropDown = function _dropDown(m) {
      onSelect(m, true);
    };
    var _where = function _where(m) {
      onSelect('where', m);
    };
    var menu = [];
    // let direction =(orientation == null) ? "horizontal" : orientation;
    var sxb = {
      textTransform: 'capitalize',
      justifyContent: 'flex-start'
    };
    var rest = {};
    var scroll = {};
    for (var m in menus) {
      var c = menus[m];
      if (m === 'first' || m === 'last' || m === 'next' || m === 'prev') {
        scroll[m] = c;
      } else {
        rest[m] = c;
      }
    }
    var p = {
      items: Object.keys(rest),
      style: {
        width: 'auto'
      },
      valueType: 'key',
      label: ''
    };
    if (showGroups.includes('dropdown') === true) {
      menu.push(/*#__PURE__*/require$$2$1.jsx(DropDownMenu, _objectSpread2$2(_objectSpread2$2({}, p), {}, {
        onChange: _dropDown
      }), "more"));
    }
    if (showGroups.includes('scroll') === true) {
      var _loop = function _loop(_m) {
        var c = menus[_m];
        var t = /*#__PURE__*/require$$2$1.jsx(IconButton, {
          onClick: function onClick() {
            return _select(_m);
          },
          disabled: c.disabled,
          sx: sxb,
          size: "small",
          variant: "outlined",
          children: iconList[_m]
        }, _m);
        menu.push(t);
      };
      for (var _m in scroll) {
        _loop(_m);
      }
    }

    // let show = <ButtonGroup  key="buttongrid" sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}> {menu} </ButtonGroup>;
    var show = /*#__PURE__*/require$$2$1.jsxs(Box$1, {
      display: "flex",
      alignItems: "start",
      justifyContent: "left",
      children: [/*#__PURE__*/require$$2$1.jsxs(ButtonGroup, {
        children: [" ", menu, " "]
      }, "buttongrid"), showGroups.includes('where') === true ? /*#__PURE__*/require$$2$1.jsx(WherePrompt, {
        value: where,
        onChange: _where
      }, "where") : null]
    });
    return show;
  }

  var _excluded$2 = ["value", "items", "onChange", "label", "sx", "valueType", "_userProps"];
  function RadioGroup(props) {
    var value = props.value,
      items = props.items,
      onChange = props.onChange,
      label = props.label,
      sx = props.sx,
      valueType = props.valueType;
      props._userProps;
      var eProps = _objectWithoutProperties$1(props, _excluded$2);
    var _handleChange = function _handleChange(e) {
      if (valueType === 'index' && index != null) {
        var r = items.indexOf(e.target.value);
        onChange(r);
      } else {
        onChange(e.target.value);
      }
    };
    var isx = _objectSpread2$2({
      height: 'inherit',
      width: 'inherit',
      margin: '2px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '8px'
    }, sx);
    var currentSelection = null;
    var options = items == null ? [] : items;

    /*
    if (valueType === 'index' && value != null) {
      let ival = parseInt(value);
      if (!isNaN(ival) && ival >= 0 && ival < options.length) {
        currentSelection = options[ival];
      }
    }
      */

    if (options.length === 0) {
      currentSelection = 'No items to display';
    } else {
      currentSelection = options.includes(value) ? value : null;
    }
    var ePropsL = _objectSpread2$2({
      value: currentSelection,
      label: label,
      size: "sm",
      variant: 'outlined',
      // selectOnFocus: true,
      readOnly: false
    }, eProps);
    var buttons = options.map(function (m, i) {
      return /*#__PURE__*/require$$2$1.jsx(Radio, {
        value: m,
        label: m
      }, i);
    });
    var show = /*#__PURE__*/require$$2$1.jsx(require$$2$1.Fragment, {
      children: /*#__PURE__*/require$$2$1.jsxs(FormControl, {
        children: [/*#__PURE__*/require$$2$1.jsx(FormLabel, {
          children: label
        }), /*#__PURE__*/require$$2$1.jsx(RadioGroup$1, _objectSpread2$2(_objectSpread2$2({
          defaultValue: currentSelection
        }, ePropsL), {}, {
          sx: isx,
          onChange: _handleChange,
          children: buttons
        }))]
      })
    });
    return show;
  }

  /*
   * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
   * SPDX-License-Identifier: Apache-2.0
   */
  function getLocalFile(_x, _x2, _x3, _x4) {
    return _getLocalFile.apply(this, arguments);
  }
  function _getLocalFile() {
    _getLocalFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(valueType, options, mode, accept) {
      var pickerOpts, result, handle, _yield$window$showOpe, _yield$window$showOpe2, fileHandle, file, content;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pickerOpts = {
              types: [{
                description: 'js',
                accept: {
                  "text/*": accept
                }
              }],
              excludeAcceptAllOption: true,
              multiple: false,
              mode: 'readwrite'
            };
            if (options !== null && options.name != null) {
              // pickerOpts.startIn = options.folder;
              pickerOpts.suggestedName = options.name;
            }
            result = null;
            if (!(mode === 'write')) {
              _context.next = 10;
              break;
            }
            _context.next = 6;
            return window.showSaveFilePicker(pickerOpts);
          case 6:
            handle = _context.sent;
            result = {
              name: handle.name,
              handle: handle,
              content: null
            };
            _context.next = 27;
            break;
          case 10:
            _context.next = 12;
            return window.showOpenFilePicker(pickerOpts);
          case 12:
            _yield$window$showOpe = _context.sent;
            _yield$window$showOpe2 = _slicedToArray$1(_yield$window$showOpe, 1);
            fileHandle = _yield$window$showOpe2[0];
            _context.next = 17;
            return fileHandle.getFile();
          case 17:
            file = _context.sent;
            if (!(valueType === 'content')) {
              _context.next = 24;
              break;
            }
            _context.next = 21;
            return file.text();
          case 21:
            _context.t0 = _context.sent;
            _context.next = 25;
            break;
          case 24:
            _context.t0 = null;
          case 25:
            content = _context.t0;
            result = {
              name: file.name,
              handle: file,
              content: content
            };
          case 27:
            return _context.abrupt("return", result);
          case 28:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _getLocalFile.apply(this, arguments);
  }

  function SelectLocalFile(props) {
    var value = props.value,
      type = props.type;
      props.label;
      props.sx;
      var onChange = props.onChange;
    var _useState = React.useState(value == null ? "" : value),
      _useState2 = _slicedToArray$1(_useState, 2),
      newFile = _useState2[0],
      setNewFile = _useState2[1];
    var setNewName = function setNewName(v) {
      setNewFile(v);
      dataProps.name = v;
    };
    var _onImport = function _onImport() {
      var accept = type == null ? '.txt' : type;
      getLocalFile(dataProps.valueType, dataProps, mode, accept).then(function (r) {
        setNewFile(r.name);
        onChange(dataProps.valueType === "handle" ? r.handle : dataProps.valueType === "name" ? r.name : r.content);
      })["catch"](function (e) {
        console.log(e);
        onChange(null);
      });
    };
    var msg = buttonLabel != null ? buttonLabel : mode === 'write' ? 'Select Folder' : 'Select Form';
    var show = /*#__PURE__*/require$$2$1.jsx("div", {
      style: style,
      children: /*#__PURE__*/require$$2$1.jsx(Input$1, {
        value: newFile,
        label: buttonLabel == null ? 'Open' : buttonLabel,
        onChange: function onChange(e) {
          return setNewName(e.target.value);
        },
        endDecorator: /*#__PURE__*/require$$2$1.jsx(Button$1, {
          size: "sm",
          variant: "outlined",
          onClick: function onClick() {
            return _onImport();
          },
          children: msg
        }, "openButtonform")
      })
    });
    return show;
  }

  /*
   * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
   * SPDX-License-Identifier: Apache-2.0
   */
  function getLocalFolder(_x) {
    return _getLocalFolder.apply(this, arguments);
  }
  function _getLocalFolder() {
    _getLocalFolder = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(folder) {
      var pickerOpts, dirHandle, r;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            pickerOpts = {
              multiple: false,
              mode: 'readwrite'
            };
            if (folder !== null) {
              pickerOpts.startIn = folder;
            }
            _context.next = 4;
            return window.showDirectoryPicker(pickerOpts);
          case 4:
            dirHandle = _context.sent;
            r = {
              name: dirHandle.name,
              handle: dirHandle,
              content: null
            };
            return _context.abrupt("return", r);
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _getLocalFolder.apply(this, arguments);
  }

  function SelectLocalFolder(props) {
    var value = props.value,
      label = props.label,
      style = props.style,
      dataProps = props.dataProps,
      onChange = props.onChange;
    var _useState = React.useState(value != null && value.name != null ? value.name : ''),
      _useState2 = _slicedToArray$1(_useState, 2),
      newFolder = _useState2[0],
      setNewFolder = _useState2[1];
    var _onImport = function _onImport() {
      getLocalFolder(value).then(function (r) {
        var handle = r.handle,
          name = r.name;
        setNewFolder(name);
        onChange(dataProps.valueType === 'handle' ? handle : name);
      })["catch"](function (e) {
        console.log(e);
      });
    };
    var show = /*#__PURE__*/require$$2$1.jsx("div", {
      style: style,
      children: /*#__PURE__*/require$$2$1.jsx(Input$1, {
        value: newFolder,
        label: label,
        endDecorator: /*#__PURE__*/require$$2$1.jsx(Button$1, {
          size: "sm",
          variant: "outlined",
          onClick: function onClick() {
            return _onImport();
          },
          children: "Select Folder"
        }, "openButtonform")
      })
    });
    return show;
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function (key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function compose$1() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (x) {
      return fns.reduceRight(function (y, f) {
        return f(y);
      }, x);
    };
  }

  function curry$1(fn) {
    return function curried() {
      var _this = this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return args.length >= fn.length ? fn.apply(this, args) : function () {
        for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          nextArgs[_key3] = arguments[_key3];
        }

        return curried.apply(_this, [].concat(args, nextArgs));
      };
    };
  }

  function isObject$1(value) {
    return {}.toString.call(value).includes('Object');
  }

  function isEmpty(obj) {
    return !Object.keys(obj).length;
  }

  function isFunction(value) {
    return typeof value === 'function';
  }

  function hasOwnProperty(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }

  function validateChanges(initial, changes) {
    if (!isObject$1(changes)) errorHandler$1('changeType');
    if (Object.keys(changes).some(function (field) {
      return !hasOwnProperty(initial, field);
    })) errorHandler$1('changeField');
    return changes;
  }

  function validateSelector(selector) {
    if (!isFunction(selector)) errorHandler$1('selectorType');
  }

  function validateHandler(handler) {
    if (!(isFunction(handler) || isObject$1(handler))) errorHandler$1('handlerType');
    if (isObject$1(handler) && Object.values(handler).some(function (_handler) {
      return !isFunction(_handler);
    })) errorHandler$1('handlersType');
  }

  function validateInitial(initial) {
    if (!initial) errorHandler$1('initialIsRequired');
    if (!isObject$1(initial)) errorHandler$1('initialType');
    if (isEmpty(initial)) errorHandler$1('initialContent');
  }

  function throwError$1(errorMessages, type) {
    throw new Error(errorMessages[type] || errorMessages["default"]);
  }

  var errorMessages$1 = {
    initialIsRequired: 'initial state is required',
    initialType: 'initial state should be an object',
    initialContent: 'initial state shouldn\'t be an empty object',
    handlerType: 'handler should be an object or a function',
    handlersType: 'all handlers should be a functions',
    selectorType: 'selector should be a function',
    changeType: 'provided value of changes should be an object',
    changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
    "default": 'an unknown error accured in `state-local` package'
  };
  var errorHandler$1 = curry$1(throwError$1)(errorMessages$1);
  var validators$1 = {
    changes: validateChanges,
    selector: validateSelector,
    handler: validateHandler,
    initial: validateInitial
  };

  function create(initial) {
    var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    validators$1.initial(initial);
    validators$1.handler(handler);
    var state = {
      current: initial
    };
    var didUpdate = curry$1(didStateUpdate)(state, handler);
    var update = curry$1(updateState)(state);
    var validate = curry$1(validators$1.changes)(initial);
    var getChanges = curry$1(extractChanges)(state);

    function getState() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
        return state;
      };
      validators$1.selector(selector);
      return selector(state.current);
    }

    function setState(causedChanges) {
      compose$1(didUpdate, update, validate, getChanges)(causedChanges);
    }

    return [getState, setState];
  }

  function extractChanges(state, causedChanges) {
    return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
  }

  function updateState(state, changes) {
    state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
    return changes;
  }

  function didStateUpdate(state, handler, changes) {
    isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
      var _handler$field;

      return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
    });
    return changes;
  }

  var index$2 = {
    create: create
  };

  var config$1 = {
    paths: {
      vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs'
    }
  };

  function curry(fn) {
    return function curried() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return args.length >= fn.length ? fn.apply(this, args) : function () {
        for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          nextArgs[_key2] = arguments[_key2];
        }

        return curried.apply(_this, [].concat(args, nextArgs));
      };
    };
  }

  function isObject(value) {
    return {}.toString.call(value).includes('Object');
  }

  /**
   * validates the configuration object and informs about deprecation
   * @param {Object} config - the configuration object 
   * @return {Object} config - the validated configuration object
   */

  function validateConfig(config) {
    if (!config) errorHandler('configIsRequired');
    if (!isObject(config)) errorHandler('configType');

    if (config.urls) {
      informAboutDeprecation();
      return {
        paths: {
          vs: config.urls.monacoBase
        }
      };
    }

    return config;
  }
  /**
   * logs deprecation message
   */


  function informAboutDeprecation() {
    console.warn(errorMessages.deprecation);
  }

  function throwError(errorMessages, type) {
    throw new Error(errorMessages[type] || errorMessages["default"]);
  }

  var errorMessages = {
    configIsRequired: 'the configuration object is required',
    configType: 'the configuration object should be an object',
    "default": 'an unknown error accured in `@monaco-editor/loader` package',
    deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
  };
  var errorHandler = curry(throwError)(errorMessages);
  var validators = {
    config: validateConfig
  };

  var compose = function compose() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (x) {
      return fns.reduceRight(function (y, f) {
        return f(y);
      }, x);
    };
  };

  function merge(target, source) {
    Object.keys(source).forEach(function (key) {
      if (source[key] instanceof Object) {
        if (target[key]) {
          Object.assign(source[key], merge(target[key], source[key]));
        }
      }
    });
    return _objectSpread2$1(_objectSpread2$1({}, target), source);
  }

  // The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
  var CANCELATION_MESSAGE = {
    type: 'cancelation',
    msg: 'operation is manually canceled'
  };

  function makeCancelable(promise) {
    var hasCanceled_ = false;
    var wrappedPromise = new Promise(function (resolve, reject) {
      promise.then(function (val) {
        return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
      });
      promise["catch"](reject);
    });
    return wrappedPromise.cancel = function () {
      return hasCanceled_ = true;
    }, wrappedPromise;
  }

  /** the local state of the module */

  var _state$create = index$2.create({
    config: config$1,
    isInitialized: false,
    resolve: null,
    reject: null,
    monaco: null
  }),
      _state$create2 = _slicedToArray(_state$create, 2),
      getState = _state$create2[0],
      setState = _state$create2[1];
  /**
   * set the loader configuration
   * @param {Object} config - the configuration object
   */


  function config(globalConfig) {
    var _validators$config = validators.config(globalConfig),
        monaco = _validators$config.monaco,
        config = _objectWithoutProperties(_validators$config, ["monaco"]);

    setState(function (state) {
      return {
        config: merge(state.config, config),
        monaco: monaco
      };
    });
  }
  /**
   * handles the initialization of the monaco-editor
   * @return {Promise} - returns an instance of monaco (with a cancelable promise)
   */


  function init() {
    var state = getState(function (_ref) {
      var monaco = _ref.monaco,
          isInitialized = _ref.isInitialized,
          resolve = _ref.resolve;
      return {
        monaco: monaco,
        isInitialized: isInitialized,
        resolve: resolve
      };
    });

    if (!state.isInitialized) {
      setState({
        isInitialized: true
      });

      if (state.monaco) {
        state.resolve(state.monaco);
        return makeCancelable(wrapperPromise);
      }

      if (window.monaco && window.monaco.editor) {
        storeMonacoInstance(window.monaco);
        state.resolve(window.monaco);
        return makeCancelable(wrapperPromise);
      }

      compose(injectScripts, getMonacoLoaderScript)(configureLoader);
    }

    return makeCancelable(wrapperPromise);
  }
  /**
   * injects provided scripts into the document.body
   * @param {Object} script - an HTML script element
   * @return {Object} - the injected HTML script element
   */


  function injectScripts(script) {
    return document.body.appendChild(script);
  }
  /**
   * creates an HTML script element with/without provided src
   * @param {string} [src] - the source path of the script
   * @return {Object} - the created HTML script element
   */


  function createScript(src) {
    var script = document.createElement('script');
    return src && (script.src = src), script;
  }
  /**
   * creates an HTML script element with the monaco loader src
   * @return {Object} - the created HTML script element
   */


  function getMonacoLoaderScript(configureLoader) {
    var state = getState(function (_ref2) {
      var config = _ref2.config,
          reject = _ref2.reject;
      return {
        config: config,
        reject: reject
      };
    });
    var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

    loaderScript.onload = function () {
      return configureLoader();
    };

    loaderScript.onerror = state.reject;
    return loaderScript;
  }
  /**
   * configures the monaco loader
   */


  function configureLoader() {
    var state = getState(function (_ref3) {
      var config = _ref3.config,
          resolve = _ref3.resolve,
          reject = _ref3.reject;
      return {
        config: config,
        resolve: resolve,
        reject: reject
      };
    });
    var require = window.require;

    require.config(state.config);

    require(['vs/editor/editor.main'], function (monaco) {
      storeMonacoInstance(monaco);
      state.resolve(monaco);
    }, function (error) {
      state.reject(error);
    });
  }
  /**
   * store monaco instance in local state
   */


  function storeMonacoInstance(monaco) {
    if (!getState().monaco) {
      setState({
        monaco: monaco
      });
    }
  }
  /**
   * internal helper function
   * extracts stored monaco instance
   * @return {Object|null} - the monaco instance
   */


  function __getMonacoInstance() {
    return getState(function (_ref4) {
      var monaco = _ref4.monaco;
      return monaco;
    });
  }

  var wrapperPromise = new Promise(function (resolve, reject) {
    return setState({
      resolve: resolve,
      reject: reject
    });
  });
  var loader = {
    config: config,
    init: init,
    __getMonacoInstance: __getMonacoInstance
  };

  var le={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},v=le;var ae={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Y=ae;function Me({children:e}){return React.createElement("div",{style:Y.container},e)}var Z=Me;var $=Z;function Ee({width:e,height:r,isEditorReady:n,loading:t,_ref:a,className:m,wrapperProps:E}){return React.createElement("section",{style:{...v.wrapper,width:e,height:r},...E},!n&&React.createElement($,null,t),React.createElement("div",{ref:a,style:{...v.fullWidth,...!n&&v.hide},className:m}))}var ee=Ee;var H=React.memo(ee);function Ce(e){React.useEffect(e,[]);}var k=Ce;function he(e,r,n=!0){let t=React.useRef(!0);React.useEffect(t.current||!n?()=>{t.current=!1;}:e,r);}var l=he;function D(){}function h(e,r,n,t){return De(e,t)||be(e,r,n,t)}function De(e,r){return e.editor.getModel(te(e,r))}function be(e,r,n,t){return e.editor.createModel(r,n,t?te(e,t):void 0)}function te(e,r){return e.Uri.parse(r)}function Oe({original:e,modified:r,language:n,originalLanguage:t,modifiedLanguage:a,originalModelPath:m,modifiedModelPath:E,keepCurrentOriginalModel:g=!1,keepCurrentModifiedModel:N=!1,theme:x="light",loading:P="Loading...",options:y={},height:V="100%",width:z="100%",className:F,wrapperProps:j={},beforeMount:A=D,onMount:q=D}){let[M,O]=React.useState(!1),[T,s]=React.useState(!0),u=React.useRef(null),c=React.useRef(null),w=React.useRef(null),d=React.useRef(q),o=React.useRef(A),b=React.useRef(!1);k(()=>{let i=loader.init();return i.then(f=>(c.current=f)&&s(!1)).catch(f=>f?.type!=="cancelation"&&console.error("Monaco initialization: error:",f)),()=>u.current?I():i.cancel()}),l(()=>{if(u.current&&c.current){let i=u.current.getOriginalEditor(),f=h(c.current,e||"",t||n||"text",m||"");f!==i.getModel()&&i.setModel(f);}},[m],M),l(()=>{if(u.current&&c.current){let i=u.current.getModifiedEditor(),f=h(c.current,r||"",a||n||"text",E||"");f!==i.getModel()&&i.setModel(f);}},[E],M),l(()=>{let i=u.current.getModifiedEditor();i.getOption(c.current.editor.EditorOption.readOnly)?i.setValue(r||""):r!==i.getValue()&&(i.executeEdits("",[{range:i.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),i.pushUndoStop());},[r],M),l(()=>{u.current?.getModel()?.original.setValue(e||"");},[e],M),l(()=>{let{original:i,modified:f}=u.current.getModel();c.current.editor.setModelLanguage(i,t||n||"text"),c.current.editor.setModelLanguage(f,a||n||"text");},[n,t,a],M),l(()=>{c.current?.editor.setTheme(x);},[x],M),l(()=>{u.current?.updateOptions(y);},[y],M);let L=React.useCallback(()=>{if(!c.current)return;o.current(c.current);let i=h(c.current,e||"",t||n||"text",m||""),f=h(c.current,r||"",a||n||"text",E||"");u.current?.setModel({original:i,modified:f});},[n,r,a,e,t,m,E]),U=React.useCallback(()=>{!b.current&&w.current&&(u.current=c.current.editor.createDiffEditor(w.current,{automaticLayout:!0,...y}),L(),c.current?.editor.setTheme(x),O(!0),b.current=!0);},[y,x,L]);React.useEffect(()=>{M&&d.current(u.current,c.current);},[M]),React.useEffect(()=>{!T&&!M&&U();},[T,M,U]);function I(){let i=u.current?.getModel();g||i?.original?.dispose(),N||i?.modified?.dispose(),u.current?.dispose();}return React.createElement(H,{width:z,height:V,isEditorReady:M,loading:P,_ref:w,className:F,wrapperProps:j})}var ie=Oe;React.memo(ie);function He(e){let r=React.useRef();return React.useEffect(()=>{r.current=e;},[e]),r.current}var se=He;var _=new Map;function Ve({defaultValue:e,defaultLanguage:r,defaultPath:n,value:t,language:a,path:m,theme:E="light",line:g,loading:N="Loading...",options:x={},overrideServices:P={},saveViewState:y=!0,keepCurrentModel:V=!1,width:z="100%",height:F="100%",className:j,wrapperProps:A={},beforeMount:q=D,onMount:M=D,onChange:O,onValidate:T=D}){let[s,u]=React.useState(!1),[c,w]=React.useState(!0),d=React.useRef(null),o=React.useRef(null),b=React.useRef(null),L=React.useRef(M),U=React.useRef(q),I=React.useRef(),i=React.useRef(t),f=se(m),Q=React.useRef(!1),B=React.useRef(!1);k(()=>{let p=loader.init();return p.then(R=>(d.current=R)&&w(!1)).catch(R=>R?.type!=="cancelation"&&console.error("Monaco initialization: error:",R)),()=>o.current?pe():p.cancel()}),l(()=>{let p=h(d.current,e||t||"",r||a||"",m||n||"");p!==o.current?.getModel()&&(y&&_.set(f,o.current?.saveViewState()),o.current?.setModel(p),y&&o.current?.restoreViewState(_.get(m)));},[m],s),l(()=>{o.current?.updateOptions(x);},[x],s),l(()=>{!o.current||t===void 0||(o.current.getOption(d.current.editor.EditorOption.readOnly)?o.current.setValue(t):t!==o.current.getValue()&&(B.current=!0,o.current.executeEdits("",[{range:o.current.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),o.current.pushUndoStop(),B.current=!1));},[t],s),l(()=>{let p=o.current?.getModel();p&&a&&d.current?.editor.setModelLanguage(p,a);},[a],s),l(()=>{g!==void 0&&o.current?.revealLine(g);},[g],s),l(()=>{d.current?.editor.setTheme(E);},[E],s);let X=React.useCallback(()=>{if(!(!b.current||!d.current)&&!Q.current){U.current(d.current);let p=m||n,R=h(d.current,t||e||"",r||a||"",p||"");o.current=d.current?.editor.create(b.current,{model:R,automaticLayout:!0,...x},P),y&&o.current.restoreViewState(_.get(p)),d.current.editor.setTheme(E),g!==void 0&&o.current.revealLine(g),u(!0),Q.current=!0;}},[e,r,n,t,a,m,x,P,y,E,g]);React.useEffect(()=>{s&&L.current(o.current,d.current);},[s]),React.useEffect(()=>{!c&&!s&&X();},[c,s,X]),i.current=t,React.useEffect(()=>{s&&O&&(I.current?.dispose(),I.current=o.current?.onDidChangeModelContent(p=>{B.current||O(o.current.getValue(),p);}));},[s,O]),React.useEffect(()=>{if(s){let p=d.current.editor.onDidChangeMarkers(R=>{let G=o.current.getModel()?.uri;if(G&&R.find(J=>J.path===G.path)){let J=d.current.editor.getModelMarkers({resource:G});T?.(J);}});return ()=>{p?.dispose();}}return ()=>{}},[s,T]);function pe(){I.current?.dispose(),V?y&&_.set(m,o.current.saveViewState()):o.current.getModel()?.dispose(),o.current.dispose();}return React.createElement(H,{width:z,height:F,isEditorReady:s,loading:N,_ref:b,className:j,wrapperProps:A})}var fe=Ve;var de=React.memo(fe);var Ft=de;

  function VScode(props) {
    var value = props.value,
      name = props.name,
      sx = props.sx,
      onChange = props.onChange,
      language = props.language;
    // const [code, setCode] = useState(value);
    var divref = React.useRef(null);
    // const [width, height] = useSize(divref);

    var _setCode = function _setCode(v) {
      return onChange(v);
    };
    var editor = /*#__PURE__*/require$$2$1.jsx(Ft, {
      height: "inherit",
      width: "Inherit",
      value: value,
      defaultLanguage: language,
      defaultValue: value,
      options: editorOptions(),
      onChange: _setCode,
      codeLens: false
    });
    var isx = _objectSpread2$2({
      height: 'inherit',
      width: 'inherit',
      margin: '2px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '8px'
    }, sx);
    return /*#__PURE__*/require$$2$1.jsx("div", {
      name: name,
      style: isx,
      ref: divref,
      children: editor
    });
  }
  function editorOptions() {
    return {
      "acceptSuggestionOnCommitCharacter": true,
      "acceptSuggestionOnEnter": "on",
      "accessibilitySupport": "auto",
      "autoIndent": false,
      "automaticLayout": true,
      "codeLens": true,
      "colorDecorators": true,
      "contextmenu": true,
      "cursorBlinking": "blink",
      "cursorSmoothCaretAnimation": false,
      "cursorStyle": "line",
      "disableLayerHinting": false,
      "disableMonospaceOptimizations": false,
      "dragAndDrop": false,
      "fixedOverflowWidgets": false,
      "folding": true,
      "foldingStrategy": "auto",
      "fontLigatures": false,
      "formatOnPaste": false,
      "formatOnType": false,
      "hideCursorInOverviewRuler": false,
      "highlightActiveIndentGuide": true,
      "links": true,
      "minimap": {
        "enabled": true,
        "maxColumn": 120,
        "renderCharacters": true,
        "showSlider": "mouseover",
        "side": "right"
      },
      "mouseWheelZoom": false,
      "multiCursorMergeOverlapping": true,
      "multiCursorModifier": "alt",
      "overviewRulerBorder": true,
      "overviewRulerLanes": 2,
      "quickSuggestions": true,
      "quickSuggestionsDelay": 100,
      "readOnly": false,
      "renderControlCharacters": false,
      "renderFinalNewline": true,
      "renderIndentGuides": true,
      "renderLineHighlight": "all",
      "renderWhitespace": "none",
      "revealHorizontalRightPadding": 30,
      "roundedSelection": true,
      "rulers": [],
      "scrollBeyondLastColumn": 5,
      "scrollBeyondLastLine": true,
      "selectOnLineNumbers": true,
      "selectionClipboard": true,
      "selectionHighlight": true,
      "showFoldingControls": "mouseover",
      "smoothScrolling": false,
      "suggestOnTriggerCharacters": true,
      "wordBasedSuggestions": true,
      "wordSeparators": "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
      "wordWrap": "off",
      "wordWrapBreakAfterCharacters": "\t})]?|&,;",
      "wordWrapBreakBeforeCharacters": "{([+",
      "wordWrapBreakObtrusiveCharacters": ".",
      "wordWrapColumn": 80,
      "wordWrapMinified": true,
      "wrappingIndent": "none"
    };
  }

  function getListSubheaderUtilityClass(slot) {
    return generateUtilityClass$2('MuiListSubheader', slot);
  }
  generateUtilityClasses$2('MuiListSubheader', ['root', 'colorPrimary', 'colorInherit', 'gutters', 'inset', 'sticky']);

  const _excluded$1 = ["className", "color", "component", "disableGutters", "disableSticky", "inset"];
  const useUtilityClasses = ownerState => {
    const {
      classes,
      color,
      disableGutters,
      inset,
      disableSticky
    } = ownerState;
    const slots = {
      root: ['root', color !== 'default' && `color${capitalize$1(color)}`, !disableGutters && 'gutters', inset && 'inset', !disableSticky && 'sticky']
    };
    return composeClasses(slots, getListSubheaderUtilityClass, classes);
  };
  const ListSubheaderRoot = styled('li', {
    name: 'MuiListSubheader',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.color !== 'default' && styles[`color${capitalize$1(ownerState.color)}`], !ownerState.disableGutters && styles.gutters, ownerState.inset && styles.inset, !ownerState.disableSticky && styles.sticky];
    }
  })(({
    theme,
    ownerState
  }) => _extends$1({
    boxSizing: 'border-box',
    lineHeight: '48px',
    listStyle: 'none',
    color: (theme.vars || theme).palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14)
  }, ownerState.color === 'primary' && {
    color: (theme.vars || theme).palette.primary.main
  }, ownerState.color === 'inherit' && {
    color: 'inherit'
  }, !ownerState.disableGutters && {
    paddingLeft: 16,
    paddingRight: 16
  }, ownerState.inset && {
    paddingLeft: 72
  }, !ownerState.disableSticky && {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: (theme.vars || theme).palette.background.paper
  }));
  const ListSubheader = /*#__PURE__*/React__namespace.forwardRef(function ListSubheader(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: 'MuiListSubheader'
    });
    const {
        className,
        color = 'default',
        component = 'li',
        disableGutters = false,
        disableSticky = false,
        inset = false
      } = props,
      other = _objectWithoutPropertiesLoose$1(props, _excluded$1);
    const ownerState = _extends$1({}, props, {
      color,
      component,
      disableGutters,
      disableSticky,
      inset
    });
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/require$$2$1.jsx(ListSubheaderRoot, _extends$1({
      as: component,
      className: clsx(classes.root, className),
      ref: ref,
      ownerState: ownerState
    }, other));
  });
  ListSubheader.muiSkipListHighlight = true;

  var _excluded = ["name", "value", "label", "items", "variant", "color", "onChange", "sx", "labelProp", "valueType", "_userProps"];
  function Listbox(props) {
    props.name;
      var value = props.value,
      label = props.label,
      items = props.items,
      variant = props.variant,
      color = props.color,
      onChange = props.onChange,
      sx = props.sx,
      labelProp = props.labelProp,
      valueType = props.valueType;
      props._userProps;
      _objectWithoutProperties$1(props, _excluded);
    var _handleChange = function _handleChange(v, i) {
      if (v == null) {
        onChange(null);
      }
      var r = valueType == 'index' ? i.toString() : v;
      onChange(r);
      return;
    };
    var options = items == null ? [] : Array.isArray(items) ? items : typeof items === 'string' ? items.split(',') : [];
    var newMenu = options.map(function (m, i) {
      var ivariant = 'plain';
      var selected = false;
      var icolor = color == null ? 'primary' : color;
      if (m === value) {
        ivariant = variant == null ? 'solid' : variant;
        selected = true;
      }
      return /*#__PURE__*/require$$2$1.jsx(ListItemButton, {
        selected: selected,
        color: icolor,
        variant: ivariant,
        onClick: function onClick(e) {
          return _handleChange(m, i);
        },
        children: m
      }, m);
    });
    var isx = {
      border: '1px',
      overflow: 'auto',
      borderRadius: '8px'
    };
    if (sx != null) {
      isx = _objectSpread2$2(_objectSpread2$2({}, isx), sx);
    }
    var title = label != null && label.trim().length > 0 ? label : null;
    var lprop = labelProp != null ? _objectSpread2$2({
      level: 'h4',
      sticky: true
    }, labelProp) : {
      level: 'h4'
    };
    var show = /*#__PURE__*/require$$2$1.jsx(Sheet, {
      variant: "outlined",
      sx: isx,
      children: /*#__PURE__*/require$$2$1.jsxs(ListItem, {
        nested: true,
        children: [/*#__PURE__*/require$$2$1.jsx(ListSubheader, _objectSpread2$2(_objectSpread2$2({}, lprop), {}, {
          children: title
        })), /*#__PURE__*/require$$2$1.jsx(List, {
          children: newMenu
        })]
      })
    });
    return show;
  }

  /*
   * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
   * SPDX-License-Identifier: Apache-2.0
   */

  //import Markdown from './Markdown';

  // import TableViewer from './TableViewer';
  // eslint-disable-next-line import/no-anonymous-default-export
  var frameControl = {
    Button: Button,
    Checkbox: Checkbox,
    Dropdown: Dropdown,
    WebContent: WebContent,
    HtmlText: HtmlText,
    Input: Input,
    InputText: InputText,
    Inputarea: Inputarea,
    Border: Border,
    SASItemsDropDown: SASItemsDropDown,
    DistinctValues: DistinctValues,
    SelectDataValues: DistinctValues,
    SelectLibrary: SelectLibrary,
    SelectTable: SelectTable,
    SelectColumns: SelectColumns,
    SelectReport: SelectReport,
    SelectFiles: SelectFiles,
    SelectFolder: SelectFolder,
    Slider: Slider,
    //TableViewer,
    Typography: Typography,
    VaSDK: VaSDK,
    Divider: Divider,
    Image: Image,
    DropdownMenu: DropDownMenu,
    Listbox: Listbox,
    ScrollMenu: ScrollMenu,
    //FormViewer,
    RadioGroup: RadioGroup,
    SelectLocalFile: SelectLocalFile,
    SelectLocalFolder: SelectLocalFolder,
    VScode: VScode
  };

  function _visualTemplate(component, label, type, value, initialSize, props, resize, zIndex) {
    /**
     * component: React component
     * label: label for the component property sheet
     * type: type of the component(number or char)
     * value: default value 
     * initialSize: initial size of the component{width: 200, height: 30}
     * props: props for the component ( a javascript object with calculations)
     * resize: allowed resize direction in designer (h, v, n = horizonatal, vertical, both)
     * zIndex: z-index for the component ( the default is 2. used primarily for the border component)
     */
    var r = {
      component: component,
      label: label,
      type: type,
      grow: resize,
      zIndex: zIndex == null ? 2 : zIndex,
      value: value,
      width: initialSize.width,
      height: initialSize.height,
      props: _objectSpread2$2({
        name: " ",
        label: " "
      }, props)
    };
    return r;
  }

  debugger;
  console.log('jsx', require$$2$1);
  var small = {
    height: 30,
    width: 200
  };
  var medium = {
    height: 120,
    width: 400
  };

  var basicControls = {
    Input: _visualTemplate(frameControl.Input, "Input", "number", 0, small, {
      align: "right",
      label: ""
    }, "h"),
    InputText: _visualTemplate(frameControl.InputText, "InputText", "string", " ", small, {
      align: "left"
    }, "h"),
    Inputarea: _visualTemplate(frameControl.Inputarea, "InputArea", "string", " ", medium, {
      minRows: 2,
      maxRows: 5
    }, "h"),
    Button: _visualTemplate(frameControl.Button, "Button", "string", "button", small, {
      label: " "
    }, "b"),
    Checkbox: _visualTemplate(frameControl.Checkbox, "Checkbox", "boolean", true, small, {
      sx: {
        border: "1px",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 6
      },
      variant: "outlined",
      size: "sm",
      label: " "
    }, "h"),
    RadioGroup: _visualTemplate(frameControl.RadioGroup, "RadioGroup", "string", "item1", small, {
      items: ["item1", "Item2"],
      valueType: "label",
      label: " "
    }, "h"),
    Dropdown: _visualTemplate(frameControl.Dropdown, "Dropdown", "string", " ", small, {
      items: ["item 1", "Item 2"],
      label: " ",
      multiple: false
    }, "h"),
    DropdownMenu: _visualTemplate(frameControl.DropdownMenu, "DropdownMenu", "string", "item1", small, {
      items: ["item1", "Item2"],
      valueType: "label"
    }, "n"),
    //Listbox: _visualTemplate(frameControl.Listbox,'Listbox','char',' ',small,
    //   {sx: {borderStyle: 'solid', borderWidth: '1px', borderColor: 'black'},items: ['item 1', 'Item 2'], valueType: 'label', labelProp: {sx: {backgroundColor: 'lightgrey'},level: 'h4'}},'b'),
    Slider: _visualTemplate(frameControl.Slider, "Slider", "number", 0.5, small, {
      min: 0,
      max: 1,
      step: 0.1,
      marks: true,
      color: "primary",
      variant: "solid",
      track: "normal",
      size: "sm",
      label: " "
    }, "h"),
    Typography: _visualTemplate(frameControl.Typography, "Typography", "string", "Text", medium, {
      sx: {
        border: "1px",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 8
      },
      color: "neutral",
      level: "h2"
    }, "h"),
    HtmlText: _visualTemplate(frameControl.HtmlText, "HtmlText", "string", "<h1>Some html</h1>", medium, {
      label: " "
    }, "b"),
    WebContent: _visualTemplate(frameControl.WebContent, "WebContent", "string", "<h1>Some html</h1>", medium, {
      label: " "
    }, "b"),
    //Image: _visualTemplate(frameControl.Image,'Image','char',' ',small,{},'b'),
    VScode: _visualTemplate(frameControl.VScode, "VSCode", "string", " ", medium, {
      language: "text",
      label: " "
    }, "b"),
    /* misc */
    Divider: _visualTemplate(frameControl.Divider, "Divider", "string", "Divider", small, {
      orientation: "horizontal",
      label: " "
    }, "h"),
    Border: _visualTemplate(frameControl.Border, "Border", "string", " ", medium, {
      label: " ",
      sx: {
        backgroundColor: "#f5f5f5",
        borderRadius: 4,
        boxShadow: 4
      }
    }, "b", 1)
    /*
    Image: _visualTemplate(
      frameControl.Image,
      "Image",
      "string",
      " ",
      small,
      {label: ' '},
      "b"
    ),
    */
    //SelectLocalFiles: _visualTemplate(frameControl.SelectLocalFile,'SelectLocalFile','char',' ',small,{valueType: 'content'},'h'),
  };
  /* local files */

  var sasControls = _objectSpread2$2(_objectSpread2$2({}, basicControls), {}, {
    SelectLibrary: _visualTemplate(frameControl.SelectLibrary, "SelectLibrary", "string", " ", small, {
      name: " ",
      source: " "
    }, "h"),
    SelectTable: _visualTemplate(frameControl.SelectTable, "SelectTable", "string", " ", small, {
      name: " ",
      lib: " ",
      refresh: false
    }, "h"),
    SelectColumns: _visualTemplate(frameControl.SelectColumns, "SelectColumns", "string", " ", small, {
      name: " ",
      lib: " ",
      table: " ",
      separator: " ",
      refresh: false
    }, "h"),
    DistinctValues: _visualTemplate(frameControl.DistinctValues, "DistinctValues", "string", " ", small, {
      name: " ",
      lib: " ",
      table: " ",
      column: " ",
      where: " "
    }, "h")
  });
  var controls = _objectSpread2$2(_objectSpread2$2({}, sasControls), {}, {
    SelectReport: _visualTemplate(frameControl.SelectReport, "SelectReport", "string", " ", small, {
      folder: " ",
      filter: {}
    }, "h"),
    VaSDK: _visualTemplate(frameControl.VaSDK, "View VA Report", "string", "Retail Insights", medium, {
      name: " ",
      url: " ",
      auth: "credentials"
    }, "b")
  });
  var index$1 = {
    controls: controls,
    basicControls: basicControls,
    sasControls: sasControls
  };

  return index$1;

}));
