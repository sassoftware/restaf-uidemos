/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import text2Float from "./text2Float";
import commonHandler from './commonHandler';
import casUpdateRow from '../lib/casUpdateRow';

async function cellEditEvent (e, state, columns, handlers, table,autoSave, keys4Update, appEnv) {
   /* do not modify the stae directly. caller will do a setState */
    let {value, name } = e.target;
    let rowIndex       = e.rowIndex;
    let newDataRow = {...state};
    newDataRow[name] = text2Float(value, columns[name]);
    let status = {status: 0, msg: ''};
  
    if (handlers[name] != null) {
        let r = await handlers[name](newDataRow, name, rowIndex, appEnv);
        newDataRow = r[0];
        status = r[1];
    } 
    let [newDataRow2, status2] = await commonHandler("main", newDataRow, rowIndex, handlers, appEnv);
    let msg = status.msg + " \n" + (status2.msg != null ? status2.msg : "");
    status2.msg = msg;

    let w = {};
    if (autoSave === true) {
        keys4Update.forEach((k) => {
            w[k] = newDataRow2[k];
        });
        await casUpdateRow(table, newDataRow2, w, columns, appEnv);
    }
    return ({data: newDataRow2, status: status2});
    
}
export default cellEditEvent;
