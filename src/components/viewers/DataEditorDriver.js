/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import helpers from '../helpers';
import customForms from '../../customForms';

import {useLocation} from 'react-router-dom';
// import DataEditor from '../viyaedit/components/DataEditor';
// import viyaedit from '@sassoftware/viyaedit';
import {DataEditor} from '@sassoftware/viyaedit';

import Grid from "@material-ui/core/Grid";

// import {DataEditor} from '@sassoftware/restafedit';

function DataEditorDriver (props) {

  //setup props for the dataEditor
  let {classes} = props;
  let appControl = useLocation().state;
  let handlerSet = appControl.editControl.handlerSet;
  let handlers = customForms[handlerSet];
  appControl.editControl.handlers = handlers;
  const _selectViewer = (appData) => {
    return helpers[appData.component];
  };

  // Do further customization
  appControl.appData.getViewer = _selectViewer;
 
  let show = (
    <div key={Date()} className={classes.content}>
      <Grid container spacing={3} direction="row">
          <Grid item>
            <DataEditor key={Date()}
                  appControl={appControl} renderViewer={(appEnv)=}
                  viyaConnection={props.appOptions.logonPayload}      
                  />
          </Grid>
        </Grid>
    </div>
    
  );
  
return show;;
}
export default DataEditorDriver;
