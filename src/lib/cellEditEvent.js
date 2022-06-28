/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import text2Float from "./text2Float";
import commonHandler from './commonHandler';

function cellEditEvent (e, state, columns, handlers, appEnv) {
   /* do not modify the stae directly. caller will do a setState */
    let {value, name } = e.target;
    let rowIndex       = e.rowIndex;
    let t = {...state};
    t[name] = text2Float(value, columns[name]);
  
    if (handlers[name] != null) {
        let [newDataRow, status] = handlers[name](t, value, name, appEnv, rowIndex);
        let [newDataRow2, status2] = commonHandler("main", newDataRow, rowIndex, handlers, appEnv);
        let msg = status.msg + " \n" + (status2.msg != null ? status2.msg : "");
        status2.msg = msg;
        return ({data: newDataRow2, status: status2});
    } else {
        let [newt, st] = commonHandler("main", t, rowIndex, handlers, appEnv);
        return {data: newt, status: st};
    }
    
}

export default cellEditEvent;
