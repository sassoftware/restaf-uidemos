"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _commonHandler3 = _interopRequireDefault(require("./commonHandler"));

var _text2Float = _interopRequireDefault(require("./text2Float"));

/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

/*
 *  Set initial state
 */
function setInitialState(rowObject, columns, handlers, appEnv) {
  var statusCodes = [0, 0, 0];
  var initialState = rowObject.map(function (row, i) {
    var tstate = {};

    for (var colName in row) {
      tstate[colName] = (0, _text2Float.default)(row[colName].value, columns[colName]);
    } // eslint-disable-next-line no-unused-vars


    var _commonHandler = (0, _commonHandler3.default)("init", tstate, i, handlers, appEnv),
        _commonHandler2 = (0, _slicedToArray2.default)(_commonHandler, 2),
        newt = _commonHandler2[0],
        status = _commonHandler2[1];

    statusCodes[status.code] = statusCodes[status.code] + 1;
    return newt;
  });
  return [initialState, statusCodes];
}

;
var _default = setInitialState;
exports.default = _default;