"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _setupConnections = _interopRequireDefault(require("../lib/setupConnections"));

var _DataViewer = _interopRequireDefault(require("./DataViewer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-throw-literal */

/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * appProps (object) - app conntrol information
 * viyaConnection (object) - info settting up connection to Viya
 * tableForm (object) - form for this table
 * selecteditor (function) - function returns React framework component
 */
function DataEditor(props) {
  var appProps = props.appProps,
      viyaConnection = props.viyaConnection,
      tableForm = props.tableForm,
      selectEditor = props.selectEditor;

  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    (0, _setupConnections.default)(viyaConnection).then(function (r) {
      setState(r);
    }).catch(function (err) {
      throw {
        Error: JSON.stringify(err)
      };
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.appProps.editor, props.appProps.table.caslib, props.appProps.table.name]);
  var show = null;

  if (state.session != null) {
    show = /*#__PURE__*/_react.default.createElement("div", {
      id: "page-wrap",
      key: Date()
    }, /*#__PURE__*/_react.default.createElement(_DataViewer.default, {
      appProps: appProps,
      selectEditor: selectEditor,
      appEnv: state,
      from: appProps.from,
      tableForm: tableForm
    }));
  }

  return show;
}

var _default = DataEditor;
exports.default = _default;