/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { Fragment } from 'react';
import DataEditor from './DataEditor';
// import TableEditor from './TableEditor';
import GridTableEditor from './GridTableEditor';
import DataForm from './DataForm';


/*
* Added this to keep DataEditor component to be react framework agnostic 
*/

function ViyaDataEditor (props) {
  
  const _selectViewer = () => {
    return (props.appControl.appData.viewType === 'table') ? GridTableEditor : DataForm;
  };
  
  
  //For demo purpose
  const show = (
    <Fragment>
    <div key={Date()}>
            <DataEditor key={Date()}
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
