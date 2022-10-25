/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// TBD: change incoming data from array to object to avoid all the transformations

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import controls from './controls';
import Portal from '@mui/material/Portal';

import Paper from '@mui/material/Paper';
import ButtonMenuGroup from './ButtonMenuGroup';
import QuickDialog from './QuickDialog';
import WherePrompt from './controls/WherePrompt.js';
import SaveAsDialog from './SaveAsDialog.js';
import AppendDialog from './AppendDialog.js';


function DataForm (props) {
  const { onEdit, onScroll, onSave, appEnv } = props;
  const [saveAsOpen, setSaveAsOpen] = useState(false);
  const [appendOpen, setAppendOpen] = useState(false);
  const [modified, setModified] = useState(0);
  const appData = appEnv.appControl.appData;
  const form = appData.form;
  const { defaultComponent, classes, visuals } = form;
  const { columns } = appEnv.state;
  const data = { ...appEnv.state.data[0] };
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
  /* Tack on scrolling */

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

  const _onEdit = (e) => {
    data[e.target.name] = e.target.value;
    appEnv.state.data[e.rowIndex][e.target.name] = e.target.value;
    debugger;
    if (e.key !== 'Enter') {
      setModified(modified + 1);
    } else {
      debugger;
      onEdit(e.target.name, e.target.value, e.rowIndex, data, appEnv);
    }
  };

  const commonLayout = (Visual, direction, direction2) => {
    return <Grid key="cl1" container spacing={2} direction={direction}>
        <Grid key="cl2" item xs={2}>
        </Grid>
        <Grid key="cl3" container spacing={2} xs={8} direction={direction2} justifyContent="left">   
          {Visual}
        </Grid>
        <Grid key="cl4" item xs={2}>
        </Grid>
      </Grid>;
  }
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
  }

  const order = (form.show.length > 0) ? form.show : Object.keys(columns);
  let allFields = [];
  for (let i = 0; i < order.length; i++) {
    const name = order[i];

    const dt = columns[name];
    let v = defaultComponent;
    if (visuals[name] != null && visuals[name].component != null) {
      v = visuals[name].component;
    }
    console.log(v);
    const V = controls[v];
    debugger;
    
    let attr = (visuals[name] == null) ? {} : visuals[name].props;
    if (attr == null) {
      attr = {};
    }
// https://stackoverflow.com/questions/54493795/which-is-the-best-way-to-specify-justify-for-grid-item-in-material-ui
    const t =   
        <V
          key={i}
          value={data[name]}
          details={dt}
          onEnter={_onEdit}
          controlProps={attr}
          appEnv={appEnv}
          rowIndex={0}
          showLabel={true}
          classes={classes}
        />;

    allFields.push(t);
  }

  const show = (
    <Box display="flex" alignItems="center" justifyContent="center">
    <Paper elevation={12} style={{padding:8, width: "100%"}}>
      <div key="sdf">
        <h1> {form.title}</h1>
        {(status != null && status.msg != null)? <QuickDialog msg={status} closecb={_closeSnack}/> : null}
        {menus != null ? 
        <Grid key="but1" container  direction="column">
          <Grid item key="but2" xs={2}></Grid>
          <Grid item key="but3" justifyContent="center" xs={8} >
           <ButtonMenuGroup key="sdfb1" menus={menus} scrollOptions={appEnv.state.scrollOptions} onSelect={_onSelect}></ButtonMenuGroup>
          </Grid>
          <Grid item key="but4" xs={2}></Grid>
        </Grid> : null}
            <br></br>
            <br></br>
           {commonLayout(allFields, 'row', 'column')}
        
        <Portal>
            <Grid key="w1" container spacing={2} direction={"row"}>
              <Grid key="w2" item xs={2}> </Grid>
              <Grid key="w3" item xs={8}  justifyContent="left"> 
                <div key="w4">
                  <WherePrompt key="whereprompt" value={appEnv.activeWhere} onEnter={_onWhere}></WherePrompt>
                </div>
              </Grid>
              <Grid key="w5" item xs={2}> </Grid>
            </Grid>
        </Portal>
        
          {saveAsOpen === true ? <SaveAsDialog key="saveasdialog" appEnv={appEnv} cb={_closeSaveAs}></SaveAsDialog> : null}
          {appendOpen === true ? <AppendDialog key="appendDialog" appEnv={appEnv} cb={_closeAppend}></AppendDialog> : null}
      </div>
    </Paper>
    </Box>
  );

  return show;
}

export default DataForm;
