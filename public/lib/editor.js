/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

//
// handlers for init, main, term and selected columns
//
async function init (data,rowIndex,appEnv,type) {
    let status = {code: 0, msg: `${type} processing completed`};
    data.total = data.x1 + data.x2 + data.x3 ;
    return [data, status];
};
async function main (data, rowIndex,appEnv, type) {
  let status = {code: 0, msg: `${type} processing completed`};
  data.total = data.x1 + data.x2 + data.x3 ;
  return [data, status];
};
async function term (data, rowIndex,appEnv, type) {
    let status = {code: 0, msg: `${type} processing completed`};
    return [data, status];
};

async function x1 (data, name, rowIndex, appEnv) {
  let msg = {code: 1, msg: `${name} handler executed.`};
  if (data.x1 > 10) {
      data.x1 = 10;
      msg = {code: 0, msg: "Exceeded Max. Value reset to max"};
  }

  return [data, msg];
};
// Initialize the application
async function initialize() {
  let appControl = getAppControl();
  // initialize a session
  let preamble = appControl.preamble;
  let r = await restafedit.setup(LOGONPAYLOAD, appControl, preamble);
  let r2 = await restafedit.scrollTable('first', r);
  return r;

}
function text2Float (value, name) {
  console.log(appEnv.state.columns);
  let f = appEnv.state.columns[name];
  let svalue = value;
  let t = f.type.toLowerCase();
  if (typeof svalue === 'string' && (t === 'decimal' || t === 'number' || t === 'double'|| t ==='float')) {
    svalue = parseFloat(value * 1.0);
    if (isNaN(value) === true) {
      value = 0;
    }
  }
  return svalue;
}

// Run proc print and get the ODS output
async function showODS() {
  let table = appEnv.appControl.table;
  let src = `
  ods html style=barrettsblue;  
  proc print data=${table.libref}.${table.name};run;
  ods html close; 
  run;
  `;
  let computeSummary = null;
  
  computeSummary = await restaflib.computeRun(
    appEnv.store,
    appEnv.session,
    src
  );  
  let ods = await restaflib.computeResults(appEnv.store, computeSummary, 'ods');
  
  return ods;
}