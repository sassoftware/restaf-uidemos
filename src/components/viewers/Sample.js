/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import helpers from '../helpers';
import {DataEditor} from '@sassoftware/viyaedit';

import Grid from "@material-ui/core/Grid";

// import {DataEditor} from '@sassoftware/restafedit';

function Sample (props) {

  // See below - moved it to a function for code readability
  let appControl = getAppControl();
  /*
  * viyaConnection is of the form
  * {host:<viya url>, authType: 'code'};
  */
  
  // used as editor function
  const _editor = () => {
    return helpers['SampleForm']; 
  };

 // main call
  return (
    <div key={Date()}>
      <Grid container spacing={3} direction="row">
          <Grid item>
            <DataEditor key={Date()}
                  appControl={appControl} 
                  viyaConnection={props.appOptions.logonPayload}   
                  editor={_editor}  
                  />
          </Grid>
        </Grid>
    </div>
    
  );


//
// handlers for init, main, term and selected columns
//
async function init (data,row,appEnv,type) {
  let status = {code: 0, msg: `${type} processing completed`};
  data.total = data.x1 + data.x2 + data.x3 ;
  let newData = data; /* you can modify the incoming data and return it */
  return [newData, status];
};

async function term (data, type) {
  let status = {code: 0, msg: `${type} processing completed`};
  return [data, status];
};

async function x1 (data, value, name) {
let msg = {code: 0, msg: `${name} handler executed.`};
if (data.x1 > 10) {
    data.x1 = 10;
    msg = {code: 0, msg: "Exceeded Max. Value reset to max"};
}

return [data, msg];
};

// Application control for restafedit to use.

function getAppControl () {
  return {
      description: 'Simple Example',

      source: 'cas',
      table : {caslib: 'casuser', name: 'testdata'},
      access: {},
      byvars: ['id'],
      where : {},

      cachePolicy: true,

      initialFetch: {
        count : 1,
        from  : 1,
        format: false
      },

      customColumns: {
        total: {
          Column         : "Total",
          Label          : "Grand Total",
          FormattedLength: 12,
          Type           : "double"
          }
      },
      editControl: {
        handlers: {init: init, main: init, term: term, x1: x1}, 
        save    : true,  
        autoSave: true, 
    
      },
      appData: {}    /* put here whatever you want to pass to your editor component */
    
    };
}
}
export default Sample;
