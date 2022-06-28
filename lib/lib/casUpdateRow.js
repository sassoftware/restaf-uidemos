"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _restaflib = require("@sassoftware/restaflib/dist/restaflib.js");

function casUpdateRow(_x, _x2, _x3, _x4, _x5) {
  return _casUpdateRow.apply(this, arguments);
}

function _casUpdateRow() {
  _casUpdateRow = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(table, data, where, columns, appEnv) {
    var store, session, t, k, payload, r;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = appEnv.store, session = appEnv.session;

            if (!(where === null || where.length === 0)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {
              Warning: "You must specify keys"
            });

          case 3:
            t = {};

            for (k in data) {
              if (k !== '_index_' && columns[k].custom === false) {
                t[k] = data[k];
              }
            }

            payload = {
              table: table,
              data: t,
              where: where
            };
            _context.next = 8;
            return (0, _restaflib.casUpdateData)(store, session, payload);

          case 8:
            r = _context.sent;
            return _context.abrupt("return", r);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _casUpdateRow.apply(this, arguments);
}

var _default = casUpdateRow;
exports.default = _default;