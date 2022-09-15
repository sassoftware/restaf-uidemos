/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
// import { useAppContext } from "../../providers";

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper';
import ButtonMenuBar from './ButtonMenuBar';
import QuickDialog from './QuickDialog';
// import SubmitDialog from './SubmitDialog';
import GridToolbarCustom from './GridToolBarCustom';
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport
  /*GridToolbarDensitySelector,*/
} from '@mui/x-data-grid';

import controls from './controls';

function GridTableEditor (props) {
  const { onEdit, onScroll, onSave, appEnv } = props;
  const [modified, setModified] = useState(0);
  // const [_snackMessage, setSnackMessage] = useState(props.status);
  const appData = appEnv.appControl.appData;
  const form = appData.form;
  let { classes, visuals} = form;
  const { columns } = appEnv.state;
  const data = [].concat(appEnv.state.data);
  const currentData = data;/* to allow for local subsetting */
  const defaultMenus = {
    prev: { text: 'Previous', action: 'prev', disabled: false, state: false },
    next: { text: 'Next', action: 'next', disabled: false, state: false },
    save: { text: 'Save', action: 'save', disabled: false, state: false }
  };
  let menus = (appEnv.appControl.appData.menus == null) ? defaultMenus : appEnv.appControl.appData.menus;
  let status = {...props.status};

  let order = (form.show.length > 0) ? form.show : Object.keys(columns);
  order = order.map(o => o.toLowerCase());
  if (classes == null) {
    classes = {};
  }
  debugger;
  const _closeSnack = () => {
    status = null;
  };
  
  const CustomBar = () => {
    let extender = <ButtonMenuBar menus={menus} onSelect={_onSelect} />
    return (
    <GridToolbarContainer>
       {extender}
    <GridToolbarColumnsButton />
    <GridToolbarFilterButton />
    <GridToolbarExport />
   
    </GridToolbarContainer>
    )
  };
  const _onEdit = (value, params) => {
    debugger;
    let {field, row }  = params;
    let rowIndex = row._rowIndex;
    data[rowIndex][field] = value;
    appEnv.state.data[rowIndex][field] = value;
    onEdit(field, value, row._rowIndex, data[rowIndex]);
    return data[rowIndex][field];
  };

  const _onSelect = (action, flag) => {
    menus[action].state = flag;
    
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

  // create data for grid
  let rows = currentData.map( d => {
    let r = {_rowIndex: d._rowIndex};
    for (let i = 0; i < order.length; i++) {
      const k = order[i];
      r[k] = d[k];
    }
    return r;
    
  });

  // create table Header
  let headRow = []; 
  for (let i = 0; i < order.length; i++) {
    const kh = order[i];
    const c  = columns[kh];
    const type = columns[kh].Type;
    let editable = true;
    if (visuals[kh] != null) {
      editable = (visuals[kh].props.disabled === true) ? false : true;
    }
    let t = {
      field: kh,
      headerName:c.Label, 
      editable: editable,
      sortable: true,
      type: (type === 'double' || type === 'int' || type ==='float') ? 'number' : 'string'
    };
    if (t.editable === true) {
      t.valueParser = (value, params) => _onEdit(value,params)
      }
    headRow.push(t);
  }

  let rowcount = rows.length;
  const showTable =
      <div key="sdf" className={classes.divborder}>
          <h1>{form.title}</h1>
          {(status != null && status.msg != null)? <QuickDialog msg={status} closecb={_closeSnack}/> : null}
          <Box sx={{ height: 520, width: '100%' }}>
              <DataGrid 
              components={{
                Toolbar: CustomBar
              }}
              GridToolbar
                editMode="cell"
                experimentalFeatures={{ newEditingApi: true }}
                getRowId={(row) => row._rowIndex}
                rows={rows}
                rowsPerPageOptions={[rowcount]}
                columns={headRow}
                autoPageSize={true}
                density="compact"
               />

          </Box>
      </div>;
  return showTable;
}

export default GridTableEditor;
