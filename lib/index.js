"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var DataEditor = require('./components/DataEditor.js');

var DataEditorVisual = require('./components/DataEditorVisual.js');

var lib = require('./lib');

var _default = {
  DataEditor: DataEditor,
  DataEditorVisual: DataEditorVisual,
  lib: lib
};
exports.default = _default;