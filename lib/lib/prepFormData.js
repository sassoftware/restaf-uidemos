"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _commonHandler3 = _interopRequireDefault(require("./commonHandler"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function prepFormData(result, tableForm, appEnv) {
  var schema = result.schema,
      rows = result.rows;
  var form = tableForm.form,
      handlers = tableForm.handlers;
  var newRows = rows.map(function (row, i) {
    var t = makeRowObject(schema, row, form);

    var _commonHandler = (0, _commonHandler3.default)('init', t, i, handlers, appEnv),
        _commonHandler2 = (0, _slicedToArray2.default)(_commonHandler, 2),
        t1 = _commonHandler2[0],
        status = _commonHandler2[1];

    if (status.code !== 0) {
      console.log(JSON.stringify(status, null, 4));
    }

    return t1;
  });
  var keyList = rows[0].map(function (r, i) {
    var s = schema[i];
    return {
      value: s.Column,
      label: s.Column,
      dataValue: r
    };
  }); //extend column and make it an object

  var eColumns = {};
  schema.forEach(function (s, i) {
    s.oldName = s.Column;
    var name = s.Column.toLowerCase();
    s.name = name;
    s.Label = s.Label == null || s.Label.length === 0 ? s.Column : s.Label;
    s.custom = false;
    eColumns[name] = s;
  }); // add computed columns to the array.

  if (form.customColumns != null) {
    for (var k in form.customColumns) {
      var c = _objectSpread({}, form.customColumns[k]);

      c.name = k;
      c.Type = c.Type == null ? "double" : c.Type;
      c.custom = true;
      eColumns[k] = c;
    }
  }

  return {
    keyList: keyList,
    columns: eColumns,
    rowsObject: newRows
  }; //

  function makeRowObject(columns, row, form) {
    var rowObj = {};
    row.forEach(function (r, i) {
      var s = columns[i];
      var name = s.Column.toLowerCase();

      if (s.Label == null) {
        s.Label = s.Column;
      }

      rowObj[name] = r;
    });

    if (form.customColumns != null) {
      for (var _k in form.customColumns) {
        var _c = form.customColumns[_k];

        var name = _c.Column.toLowerCase();

        rowObj[name] = _c.value;
      }
    }

    return rowObj;
  }
}

var _default = prepFormData;
exports.default = _default;