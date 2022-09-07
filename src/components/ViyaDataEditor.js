/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { Fragment } from 'react';
import DataEditor from './DataEditor';
// import {DataEditor} from '@sassoftware/viyaedit';
import TableEditor from './TableEditor';
import DataForm from './DataForm';
import Grid from '@material-ui/core/Grid';

function ViyaDataEditor (props) {
  
  const _selectViewer = () => {
    return (props.appControl.appData.viewType === 'table') ? TableEditor : DataForm;
  };
  
  const show = (
    <Fragment>
    <div key={Date()}>
      <Grid container spacing={3} direction="row">
          <Grid item>
            <DataEditor key={Date()}
                  appControl={props.appControl}
                  viyaConnection={props.viyaConnection}
                  editor={_selectViewer}
                  />
          </Grid>
        </Grid>
    </div>
    </Fragment>
  );
  
  return show;
}
export default ViyaDataEditor;
