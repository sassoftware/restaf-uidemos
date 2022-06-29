"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _DataEditorVisual = _interopRequireDefault(require("./DataEditorVisual.js"));

var _fetchTableRows = _interopRequireDefault(require("../lib/fetchTableRows"));

var _casUpdateRow = _interopRequireDefault(require("../lib/casUpdateRow"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function DataViewer(props) {
  var appProps = props.appProps,
      tableForm = props.tableForm,
      selectEditor = props.selectEditor,
      appEnv = props.appEnv;
  var useState = _react.default.useState,
      useEffect = _react.default.useEffect,
      useRef = _react.default.useRef;

  var _useState = useState(props.from),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      from = _useState2[0],
      setFrom = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      result = _useState4[0],
      setResult = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      columns = _useState6[0],
      setColumns = _useState6[1]; // eslint-disable-next-line no-unused-vars


  var _useState7 = useState({}),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      keyList = _useState8[0],
      setKeyList = _useState8[1];

  var _useState9 = useState({}),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      pagination = _useState10[0],
      setPagination = _useState10[1]; // eslint-disable-next-line no-unused-vars


  var _useState11 = useState(null),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      errors = _useState12[0],
      setErrors = _useState12[1];

  var _useState13 = useState(true),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      modFlag = _useState14[0],
      setModFlag = _useState14[1];

  var modified = [];
  var lastTable = useRef("");
  /* same as pagination structure */

  var ftable = "".concat(appProps.table.caslib, ".").concat(appProps.table.name);
  var control = {
    table: _objectSpread({}, appProps.table),
    from: lastTable.current !== ftable ? props.from : from,
    count: appProps.count,
    where: appProps.where,
    format: appProps.format
  };

  var _handleResults = function _handleResults(r) {
    setErrors(null);
    setModFlag(0);
    setPagination(r.pagination);
    setKeyList(r.keyList);
    setColumns(r.columns);
    setResult(r.rowsObject);
    var ftable = "".concat(appProps.table.caslib, ".").concat(appProps.table.name);

    if (lastTable.current !== ftable) {
      setFrom(appProps.from);
    }

    lastTable.current = ftable;
    setErrors(null);
  };

  var _handleErrors = function _handleErrors(err) {
    setErrors(err);
    setResult({});
    /* not clear what thebest way to handle this in an informative manner */
  };

  useEffect(function () {
    //
    // Only place where the data is read from CAS
    //
    (0, _fetchTableRows.default)(control, tableForm, appEnv).then(function (r) {
      _handleResults(r);
    }).catch(function (err) {
      _handleErrors(err);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, appProps.table.caslib, appProps.table.name, appProps.editor]); // scroll based on pagination data from previous fetch

  var _onScroll = function _onScroll(direction) {
    //TBD: Add checks for modified rows */
    control = direction === "up" ? pagination.prev : pagination.next;
    setFrom(control.from);
  }; // this is driven by the Editor on a change
  // can we save result locally?


  var _onEdit = function _onEdit(rowObject, rowIndex) {
    var tResult = [].concat(result);
    tResult[rowIndex] = rowObject;
    setResult(tResult);
    var ind = modified.findIndex(function (m) {
      return m === rowIndex;
    });

    if (ind === -1) {
      modified.push(rowIndex);
    }

    setModFlag(!modFlag);
  }; // Save only modified rows
  // TBD: propagate messages to UI app


  var _onSave = function _onSave() {
    (0, _casUpdateRow.default)(appProps.table, result, tableForm.form.keys4Update, modified, appEnv).then(function (r) {
      console.log('saved');
    }).catch(function (err) {
      return console.log(err);
    });
  };

  var show = null;

  if (result != null) {
    var recordKey = appProps.table.caslib + appProps.table.name + "/" + control.from.toString();
    show = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DataEditorVisual.default, {
      table: control.table,
      data: result,
      columns: columns,
      onSave: _onSave,
      onEdit: _onEdit,
      onScroll: _onScroll,
      currentRow: control.from,
      nextRow: pagination.next.from,
      tableForm: tableForm,
      recordKey: recordKey,
      appProps: appProps,
      selectEditor: selectEditor,
      appEnv: appEnv
    }));
  }

  return show;
}

var _default = DataViewer;
exports.default = _default;