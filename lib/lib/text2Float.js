"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function text2Float(value, f) {
  var svalue = value;

  if (typeof svalue === 'string' && (f.Type === 'decimal' || f.Type === 'number' || f.Type === 'double')) {
    svalue = parseFloat(value * 1.0);
  }

  return svalue;
}

var _default = text2Float;
exports.default = _default;