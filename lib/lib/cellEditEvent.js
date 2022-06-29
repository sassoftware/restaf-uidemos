"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _text2Float = _interopRequireDefault(require("./text2Float"));

var _commonHandler5 = _interopRequireDefault(require("./commonHandler"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function cellEditEvent(e, state, columns, handlers, appEnv) {
  /* do not modify the stae directly. caller will do a setState */
  var _e$target = e.target,
      value = _e$target.value,
      name = _e$target.name;
  var rowIndex = e.rowIndex;

  var t = _objectSpread({}, state);

  t[name] = (0, _text2Float.default)(value, columns[name]);

  if (handlers[name] != null) {
    var _handlers$name = handlers[name](t, value, name, appEnv, rowIndex),
        _handlers$name2 = (0, _slicedToArray2.default)(_handlers$name, 2),
        newDataRow = _handlers$name2[0],
        status = _handlers$name2[1];

    var _commonHandler = (0, _commonHandler5.default)("main", newDataRow, rowIndex, handlers, appEnv),
        _commonHandler2 = (0, _slicedToArray2.default)(_commonHandler, 2),
        newDataRow2 = _commonHandler2[0],
        status2 = _commonHandler2[1];

    var msg = status.msg + " \n" + (status2.msg != null ? status2.msg : "");
    status2.msg = msg;
    return {
      data: newDataRow2,
      status: status2
    };
  } else {
    var _commonHandler3 = (0, _commonHandler5.default)("main", t, rowIndex, handlers, appEnv),
        _commonHandler4 = (0, _slicedToArray2.default)(_commonHandler3, 2),
        newt = _commonHandler4[0],
        st = _commonHandler4[1];

    return {
      data: newt,
      status: st
    };
  }
}

var _default = cellEditEvent;
exports.default = _default;