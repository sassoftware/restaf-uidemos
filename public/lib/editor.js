/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

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
  let msg = {code: 1, msg: `${name} handler executed.`};
  if (data.x1 > 10) {
      data.x1 = 10;
      msg = {code: 2, msg: "Exceeded Max. Value reset to max"};
  }

  return [data, msg];
};

//
// app control information passed to restafedit.setup
// see initialize function below
//
function getAppControl() {
    return {
        description: 'Simple Example',
        dataControl: {
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
          customRows: []
        },
        editControl: {
          handlers: {init: init, main: init, term: term, x1: x1},/*note reuse of init*/
          save    : true,  
          autoSave: true, 
      
        },
        appData: {}
        
        
     }
    }

// Initialize the application
async function initialize() {
  let appControl = getAppControl();
  let r = await restafedit.setup(LOGONPAYLOAD, appControl);
  let r2 = await restafedit.scrollTable('first', r);
  return r;

}