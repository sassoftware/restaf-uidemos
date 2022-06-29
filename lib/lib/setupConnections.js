"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _restaf = require("@sassoftware/restaf/dist/restaf.js");

var _restaflib = require("@sassoftware/restaflib/dist/restaflib.js");

function setupConnections(_x) {
  return _setupConnections.apply(this, arguments);
}

function _setupConnections() {
  _setupConnections = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(logonPayload) {
    var store, r, appEnv;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = (0, _restaf.initStore)();
            _context.next = 3;
            return _restaflib.lib.casSetup(store, logonPayload);

          case 3:
            r = _context.sent;
            appEnv = {
              store: store,
              session: r.session,
              servers: r.servers,
              logonPayload: logonPayload
            };
            return _context.abrupt("return", appEnv);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _setupConnections.apply(this, arguments);
}

var _default = setupConnections;
exports.default = _default;