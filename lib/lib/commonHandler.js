"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function commonHandler(type, data, row, handlers, appEnv) {
  if (handlers[type] == null) {
    return [data, {
      status: 0,
      msg: null
    }];
  }

  var _handlers$type = handlers[type](data, row, appEnv, type),
      _handlers$type2 = (0, _slicedToArray2.default)(_handlers$type, 2),
      newDataRow = _handlers$type2[0],
      status = _handlers$type2[1];

  return [newDataRow, status];
}

;
var _default = commonHandler;
exports.default = _default;