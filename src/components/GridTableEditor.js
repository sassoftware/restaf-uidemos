/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid'
import Portal from '@mui/material/Portal';
import ButtonMenuBar from './ButtonMenuBar';
import QuickDialog from './QuickDialog';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport
  /*GridToolbarDensitySelector,*/
} from '@mui/x-data-grid';
// import WherePrompt from './controls/WherePrompt.js';
import WherePrompt from './controls/WherePrompt.js';
import SaveAsDialog from './SaveAsDialog.js';
import AppendDialog from './AppendDialog.js';
import uuid from 'react-uuid';
// import controls from './controls';

function GridTableEditor (props) {
  const { onEdit, onScroll, onSave, appEnv } = props;
  const [modified, setModified] = useState(0);
  const [saveAsOpen, setSaveAsOpen] = useState(false);
  const [appendOpen, setAppendOpen] = useState(false);
  const appData = appEnv.appControl.appData;
  const form = appData.form;
  let { classes, visuals} = form;
  const { columns } = appEnv.state;
  const data = [].concat(appEnv.state.data);
  const currentData = data;/* to allow for local subsetting */
  const scrollOptions = appEnv.state.scrollOptions;
 

  const _scrollCheck = (item, options) => {
    if ( options === null) return false;
    return (scrollOptions.indexOf(item) === -1) ? true : false;
  };
  const defaultMenus = {
    first  : { text: 'First', action: 'first', disabled: _scrollCheck('first', scrollOptions), state: false },
    prev  : { text: 'Previous', action: 'prev', disabled: _scrollCheck('prev', scrollOptions), state: false },
    next  : { text: 'Next', action: 'next', disabled: _scrollCheck('next', scrollOptions), state: false },
    save  : { text: 'Save', action: 'save', disabled: false, state: false },
    saveas: { text: 'Save As', action: 'saveas', disabled: false, dialog: 'SaveAs', state: false },
    append: { text: 'Append', action: 'append', disabled: false, dialog: 'Append', state: false }
  };

  let menus = (appEnv.appControl.appData.menus == null) ? defaultMenus : appEnv.appControl.appData.menus;
  let status = {...props.status};

  let order = (form.show.length > 0) ? form.show : Object.keys(columns);
  order = order.map(o => o.toLowerCase());
  if (classes == null) {
    classes = {};
  }
 
  
  const _closeSnack = () => {
    status = null;
  };
  
  const _closeAppend = () => {
    setAppendOpen (false);
  }
  const _closeSaveAs = () => {
    setSaveAsOpen(false);
  }
  
  const _onWhere = (e) => {
    onScroll('first', null, e.target.value);
    return true;
  }
  const CustomBar = () => {
    let extender = <ButtonMenuBar menus={menus} scrollOptions={appEnv.state.scrollOptions} onSelect={_onSelect} />
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
      case 'first': 
      case 'next' :
      case 'prev' : {
        onScroll(action);
        break;
      }
      case 'save': {
        if (onSave !== null) {
          onSave();
        }
        break;
      }

      case 'saveas': {
        setSaveAsOpen(true);
        break;
      }
      case 'append': {
        setAppendOpen(true);
        break;
      }
      //future...
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
  const flexInfo = {};
  let rows = currentData.map( d => {
    let r = {_rowIndex: d._rowIndex};
    for (let i = 0; i < order.length; i++) {
      const k = order[i];
      r[k] = d[k];
      if (typeof d[k] === 'string') {
        let t = (flexInfo[k] == null) ? d[k].length : Math.max(d[k].length,flexInfo[k]);
        flexInfo[k] = Math.ceil(t/12);
      } else {
        flexInfo[k] = 1;
      }
    }
    return r;
    
  });
   // create table Header
   let headRow = []; 
   for (let i = 0; i < order.length; i++) {
     const kh = order[i];
     const c  = columns[kh];
     const type = columns[kh].Type.toLowerCase();
     let editable = true;
     if (visuals[kh] != null) {
       const lprops = visuals[kh].props;
       editable = (lprops.disabled === true) ? false : true;
     }
     let t = {
       field: kh,
       headerName:c.Label, 
       editable: editable,
       sortable: true,
       headerClassName: 'super-app-theme--header',
       type: (type === 'double' || type === 'int' || type ==='float') ? 'number' : 'string',
       width: flexInfo[kh]*100
     };
     if (t.editable === true) {
       t.valueParser = (value, params) => _onEdit(value,params)
       }
     headRow.push(t);
   }
  /*
   function CustomGridCell(params) {
    return <input type="text" value={params.value} onValueChange={_onEdit}></input>
  }
  */

  let rowCount = rows.length;
  const showTable =
      <Box display="flex" alignItems="center" justifyContent="center">
      <Paper  style={{padding:8}}>
      <div>
          {(status != null && status.msg != null)? <QuickDialog msg={status} closecb={_closeSnack}/> : null}

          <Box key="mainbox" sx={{ height: 520, 
                     width: '100%',
                     '& .super-app-theme--header': {
                      backgroundColor: 'lightblue',
                    } }}>
              <DataGrid 
                components={{
                  Toolbar: CustomBar
                }}
                GridToolbar
                editMode="cell"
                experimentalFeatures={{ newEditingApi: true }}
                getRowId={(row) => row._rowIndex}
                rows={rows}
                maxColumns={4}
                columns={headRow}
                autoPageSize={true}
                density="compact"
                key="gridtoolbar"
                rowLength={rowCount}
                columnBuffer={2} columnThreshold={2}
    
               />

          </Box>
          <Portal>
            <Grid key={"w1"} container spacing={2} direction={"row"}>
              <Grid key={"w2"} item xs={2}> </Grid>
              <Grid key={"w3"} item xs={8}  justifyContent="left"> 
                <div key={"w4"}>
                  <WherePrompt key="whereprompt" value={appEnv.activeWhere} onEnter={_onWhere}></WherePrompt>
                </div>
              </Grid>
              <Grid key={"w5"} item xs={2}> </Grid>
            </Grid>
        </Portal>

          {saveAsOpen === true ? <SaveAsDialog key="saveasdialog" appEnv={appEnv} cb={_closeSaveAs}></SaveAsDialog> : null}
          {appendOpen === true ? <AppendDialog key="appendDialog" appEnv={appEnv} cb={_closeAppend}></AppendDialog> : null}
  
      </div>
      </Paper>
      </Box>
  return showTable;
}

export default GridTableEditor;

/*
<Box key="mainbox" sx={{  
                     width: 0.8,
                     '& .super-app-theme--header': {
                      backgroundColor: 'lightblue',
                    } }}>
                     rowsPerPageOptions={[rowcount]

<Box key="mainbox" sx={{ height: 520, width: "100%",
'& .super-app-theme--header': {
 backgroundColor: 'lightblue',
} }}>
*/