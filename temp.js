"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _joy = require("@mui/joy");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function Inputarea(props) {
  var name = props.name,
    label = props.label,
    sx = props.sx,
    designMode = props.designMode,
    onChange = props.onChange,
    minRows = props.minRows,
    maxRows = props.maxRows;
  var _useState = (0, _react.useState)(function () {
      return props.value == null ? ' ' : props.value;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var disabled = props.disabled == null ? false : props.disabled;
  disabled = designMode === true ? true : disabled;
  (0, _react.useEffect)(function () {
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
    ;
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
  var isx = _objectSpread({
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
  var t = /*#__PURE__*/(0, _jsxRuntime.jsx)(_joy.Textarea, _objectSpread(_objectSpread({}, ePropsL), {}, {
    value: value,
    onChange: _onChange
  }), name);
  t = label != null && label.trim().length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_joy.FormControl, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_joy.FormLabel, {
      children: label
    }), t]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: t
  });
  return t;
}
var _default = exports["default"] = Inputarea;
