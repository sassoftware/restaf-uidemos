"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _cellEditEvent = _interopRequireDefault(require("../lib/cellEditEvent"));

var _casUpdateRow = _interopRequireDefault(require("../lib/casUpdateRow"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// TBD: change incoming data from array to object to avoid all the transformations
function DataEditorVisual(props) {
  var table = props.table,
      columns = props.columns,
      tableForm = props.tableForm,
      appEnv = props.appEnv,
      onEdit = props.onEdit,
      onSave = props.onSave,
      onScroll = props.onScroll,
      selectEditor = props.selectEditor,
      appProps = props.appProps;
  ;
  var currentForm = tableForm.form;
  var handlers = tableForm.handlers;
  var data = [].concat(props.data);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      modFlag = _useState2[0],
      setModFlag = _useState2[1];

  var _handleSelect = function _handleSelect(e) {
    var r = (0, _cellEditEvent.default)(e, data[e.rowIndex], columns, handlers, appEnv, data);
    data[e.rowIndex] = r.data; //r.status handling

    setModFlag(!modFlag);

    if (onEdit !== null) {
      onEdit(r.data, e.rowIndex);
    }

    if (appProps.autoSave === true) {
      var w = {};
      currentForm.keys4Update.forEach(function (k) {
        w[k] = r.data[k];
      });
      (0, _casUpdateRow.default)(table, r.data, w, columns, appEnv).then(function (r) {
        setModFlag(!modFlag);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  };

  var _onSelect = function _onSelect(selection) {
    switch (selection.action) {
      case 'up':
      case 'down':
        {
          onScroll(selection.action);
          break;
        }

      case 'save':
        {
          if (onSave !== null) {
            onSave();
          }

          break;
        }

      default:
        break;
    }
  }; // Now create the body of the table
  // let V = viewType === "table" ? TableEditorMui : DataFormMulti;


  var V = selectEditor(appProps.editor);
  var show = null;

  if (data !== null) {
    show = /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(V, {
      data: data,
      columns: columns,
      tableForm: currentForm,
      onEdit: _handleSelect,
      onselect: _onSelect,
      onScroll: onScroll,
      appProps: props.appProps,
      appEnv: appEnv,
      currentRow: props.currentRow,
      nextRow: props.nextRow
    }));
  }

  return show;
}

var _default = DataEditorVisual;
exports.default = _default;