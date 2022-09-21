/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// TBD: change incoming data from array to object to avoid all the transformations

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import controls from './controls';
import Paper from '@mui/material/Paper';
import ButtonMenuGroup from './ButtonMenuGroup';
import QuickDialog from './QuickDialog';
import { FormControl } from '@mui/material';

function DataForm (props) {
  const { onEdit, onScroll, onSave, appEnv } = props;

  const [modified, setModified] = useState(0);
  const appData = appEnv.appControl.appData;
  const form = appData.form;
  const { defaultComponent, classes, visuals } = form;
  const { columns } = appEnv.state;
  const data = { ...appEnv.state.data[0] };

  const defaultMenus = {
    prev: { text: 'Previous', action: 'prev', disabled: false, state: false },
    next: { text: 'Next', action: 'next', disabled: false, state: false },
    save: { text: 'Save', action: 'save', disabled: false, state: false }
  };
  let menus = (appEnv.appControl.appData.menus == null) ? defaultMenus : appEnv.appControl.appData.menus;
  let status = {...props.status};
  /* Tack on scrolling */

  const _closeSnack = () => {
    status = null;
  };

  const _onEdit = (e) => {
    data[e.target.name] = e.target.value;
    appEnv.state.data[e.rowIndex][e.target.name] = e.target.value;
    if (e.key !== 'Enter') {
      setModified(modified + 1);
    } else {
      onEdit(e.target.name, e.target.value, e.rowIndex, data, appEnv);
    }
  };

  const order = (form.show.length > 0) ? form.show : Object.keys(columns);
  let allFields = [];
  for (let i = 0; i < order.length; i++) {
    const name = order[i];

    const dt = columns[name];
    let v = defaultComponent;
    if (visuals[name] != null && visuals[name].component != null) {
      v = visuals[name].component;
    }
    const V = controls[v];
    let attr = (visuals[name] == null) ? {} : visuals[name].props;
    if (attr == null) {
      attr = {};
    }

    const t = (
      <FormControl fullWidth sx ={{m:1}}>
        <V
          value={data[name]}
          details={dt}
          onEnter={_onEdit}
          controlProps={attr}
          appEnv={appEnv}
          rowIndex={0}
          showLabel={true}
          classes={classes}
        />
      </FormControl>

    );
    allFields.push(t);
  }

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

  const show = (
    <Paper>
      <div key="sdf">
        <h1> {form.title}</h1>
        {(status != null && status.msg != null)? <QuickDialog msg={status} closecb={_closeSnack}/> : null}
        {menus != null ? <ButtonMenuGroup menus={menus} onSelect={_onSelect} /> : null}
        <Box sx={{width: "50%", borderRadius: "16px"}} justifyContent="center" alignItems="center">
              {allFields}
        </Box>
      </div>
    </Paper>
  );

  return show;
}

export default DataForm;
