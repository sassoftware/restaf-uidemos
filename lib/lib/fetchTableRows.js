"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _restaflib = require("@sassoftware/restaflib/dist/restaflib.js");

var _prepFormData = _interopRequireDefault(require("./prepFormData"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function fetchTableRows(_x, _x2, _x3) {
  return _fetchTableRows.apply(this, arguments);
}

function _fetchTableRows() {
  _fetchTableRows = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(control, tableForm, appEnv) {
    var store, session, r, t;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = appEnv.store, session = appEnv.session; // eslint-disable-next-line no-useless-catch

            if (control.where == null) {
              control.where = {};
            }

            _context.next = 4;
            return (0, _restaflib.casFetchRows)(store, session, control);

          case 4:
            r = _context.sent;
            t = (0, _prepFormData.default)(r.data, tableForm, appEnv);
            t.pagination = _objectSpread({}, r.pagination);
            return _context.abrupt("return", t);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchTableRows.apply(this, arguments);
}

var _default = fetchTableRows;
exports.default = _default;