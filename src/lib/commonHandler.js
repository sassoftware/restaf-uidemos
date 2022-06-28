/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function commonHandler (type, data, row, handlers, appEnv){
    if (handlers[type] == null) {
       return [data, { status: 0, msg: null}];
    }
    
    let [newDataRow, status] = handlers[type](data, row, appEnv, type);
    return [newDataRow, status];
  };
  export default commonHandler;