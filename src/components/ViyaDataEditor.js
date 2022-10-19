/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { Fragment } from 'react';
import DataEditor from './DataEditor';
// import TableEditor from './TableEditor';
import GridTableEditor from './GridTableEditor';
import DataForm from './DataForm';
import Paper from '@mui/material/Paper';
import uuid from 'react-uuid';


/*
* Added this to keep DataEditor component to be react framework agnostic 
*/

function ViyaDataEditor (props) {
  
  const _selectViewer = () => {
    return (props.appControl.appData.viewType === 'form') ? DataForm: GridTableEditor;
  };
  
  
  //For demo purpose
  const show = (
    <Fragment>
    <div key={uuid()}>
          <DataEditor key={uuid()}
                appControl={props.appControl}
                viyaConnection={props.viyaConnection}
                editor={_selectViewer}
                />
    </div>
    </Fragment>
  );
  
  return show;
}
export default ViyaDataEditor;
