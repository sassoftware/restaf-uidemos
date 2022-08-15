/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

//
// handlers for init, main, term and selected columns
//
async function init (data,rowIndex,appEnv,type) {
    let status = {code: 0, msg: `${type} processing completed`};
    data.total = data.air*100;
    return [data, status];
};

async function term (data, rowIndex,appEnv, type) {
    let status = {code: 0, msg: `${type} processing completed`};
    return [data, status];
};

//
// app control information passed to restafedit.setup
// see initialize function below
//
function getAppControl() {
    return {
        description: 'Simple Example',
        dataControl: {
          source: 'compute',
          table : {libref: 'SASHELP', name: 'AIR'},
          byvars: ['date'],

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
          }
        },
        editControl: {
          handlers: {init: init, main: init, term: term},/*note reuse of init*/
          save    : true,  
          autoSave: false
      
        },
        appData: {}
     }
    }

// Initialize the application
async function initialize() {
  let appControl = getAppControl();
  // initialize a session
  debugger;
  let preamble = `libname test '/mnt/viya-share/data/deva';run;`;

  let r = await restafedit.setup(LOGONPAYLOAD, appControl, preamble);
  let r2 = await restafedit.scrollTable('first', r);
  
  return r;

}