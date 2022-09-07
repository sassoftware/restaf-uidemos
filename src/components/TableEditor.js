
import React, { useState } from 'react';
// import { useAppContext } from "../../providers";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonMenuBar from './ButtonMenuBar';
// import SubmitDialog from './SubmitDialog';
import controls from './controls';

function TableEditor (props) {
  const { onEdit, onScroll, onSave, status, appEnv } = props;
  const [modified, setModified] = useState(0);
  const appData = appEnv.appControl.appData;
  const form = appData.form;
  let { defaultComponent, classes, visuals } = form;
  const { columns } = appEnv.state;
  const data = [].concat(appEnv.state.data);
  const currentData = data;/* to allow for local subsetting */
  const defaultMenus = {
    prev: { text: 'Previous', action: 'prev', disabled: false, state: false },
    next: { text: 'Next', action: 'next', disabled: false, state: false },
    save: { text: 'Save', action: 'save', disabled: false, state: false }
  };
  let menus = (appEnv.appControl.appData.menus == null) ? defaultMenus : appEnv.appControl.appData.menus;
  debugger;

  let order = (form.show.length > 0) ? form.show : Object.keys(columns);
  order = order.map(o => o.toLowerCase());
  if (classes == null) {
    classes = {};
  }

  const _onEdit = (e) => {
    data[e.rowIndex][e.target.name] = e.target.value;
    appEnv.state.data[e.rowIndex][e.target.name] = e.target.value;
    if (e.key !== 'Enter') {
      setModified(modified + 1);
    } else {
      onEdit(e.target.name, e.target.value, e.rowIndex, data[e.rowIndex]);
    }
  };

  const _onSelect = (action, flag) => {
    menus[action].state = flag;
    debugger;
    switch (action) {
      case 'next':
      case 'prev': {
        onScroll(action);
        break;
      }
      case 'save': {
        if (onSave !== null) {
          onSave();
        }
        break;
      }
      default: {
        const actionHandler = menus[action].handler;
        if (actionHandler != null) {
          actionHandler(menus[action], data, appEnv)
            .then(r => {
              setModified(modified + 1);
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    }
  };

  // create a single row for the table

  const _makeOneRow = (currentRow, rowIndex) => {
    const rowDisplay = [];

    for (let i = 0; i < order.length; i++) {
      const k = order[i];
      const type = columns[k].Type;
      const align = (type === 'double' || type === 'int') ? 'right' : 'left';
      const key = `${k}${rowIndex}`;

      let v = defaultComponent;
      if (visuals[k] != null && visuals[k].component != null) {
        v = visuals[k].component;
      }
      let attr = {};
      if (visuals[k] != null && visuals[k].props != null) {
        attr = visuals[k].props;
      }
      const V = controls[v];
      const cellObj = <V
          value={currentRow[k]}
          details={columns[k]}
          onEnter={_onEdit}
          controlProps={attr}
          appEnv={appEnv}
          rowIndex={rowIndex}
          showLabel={false}
          classes={classes}
      />;
      rowDisplay.push(<TableCell className={classes.tableCell} key={key} align={align}>{cellObj}</TableCell>);
    }
    return rowDisplay;
  };

  // create table Header
  const _makeColHeader = () => {
    const theadrow = [];
    for (let i = 0; i < order.length; i++) {
      const kh = order[i];
      const c = columns[kh];
      const align = (c.Type === 'double' || c.Type === 'int') ? 'right' : 'left';
      const key = `${kh}col`;
      theadrow.push(<TableCell align={align} key={key}>{kh}</TableCell>);
    }
    return theadrow;
  };

  const thead = <TableHead>
      <TableRow>
          {_makeColHeader()}
      </TableRow>
  </TableHead>;

  // create the main table

  const bodyRows = currentData.map((currentRow, rowIndex) => {
    const oneRow = _makeOneRow(currentRow, rowIndex);
    return <TableRow key={rowIndex}>{oneRow}</TableRow>;
  });

  // return table
  const showTable =
      <div key="sdf" className={classes.divborder}>
          <h1>{form.title}</h1>
          {status !== null ? <h3> {status.msg}</h3> : null}
          {menus != null ? <ButtonMenuBar menus={menus} onSelect={_onSelect} /> : null}
          <Grid container key="tableEditorMui" direction="column">
              <Grid container key={'tableList'} direction="column">
                  <TableContainer classes={classes.tableContainer} component={Paper}>
                      <Table size="small" aria-label="a dense table">
                          {thead}
                          <TableBody>{bodyRows}</TableBody>
                      </Table>
                  </TableContainer>;
              </Grid>
          </Grid>
      </div>;
  return showTable;
}

export default TableEditor;
