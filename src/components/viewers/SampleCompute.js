/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import helpers from '../helpers';
import {DataEditor} from '@sassoftware/viyaedit';

import Grid from "@material-ui/core/Grid";

// import {DataEditor} from '@sassoftware/restafedit';

function SampleCompute (props) {

  // See below - moved it to a function for code readability
  let appControl = getAppControl();
  
  /*
  * viyaConnection is of the form
  * {host:<viya url>, authType: 'code'};
  */
  
  // used as editor function
  const _editor = () => {
    return helpers['TableEditorMui']; 
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
  data.total = data.air*10;
  return [data, status];
};

async function term (data, type) {
  let status = {code: 0, msg: `${type} processing completed`};
  return [data, status];
};


// Application control for restafedit to use.

function getAppControl () {
  return {
      description: 'Editing SAS Table',

      source: 'compute',
      table : {libref: 'SASHELP', name: 'AIR'},
      access: {},
      byvars: ['date'],
      where : {},

      cachePolicy: true,

      initialFetch: {
        count : 10,
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
        handlers: {init: init, main: init, term: term}, 
        save    : true,  
        autoSave: false, 
    
      },
      appData: {
         form: {
          defaultComponent: "InputEntry",
          show            : [],
          classes         : {},
          title           : 'Editing SAS Tables',
          visuals         : {
            total: {
              props: {
              disabled: true,
              },
            },
            id: {
              props: {
                disabled: true,
              },
            }
          }
        }
      }    /* put here whatever you want to pass to your editor component */
      
   };
  }

}
export default SampleCompute;
