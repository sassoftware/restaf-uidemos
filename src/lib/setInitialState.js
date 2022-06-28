/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

/*
 *  Set initial state
 */

import commonHandler from './commonHandler';
import text2Float from './text2Float';

function setInitialState (rowObject, columns, handlers, appEnv) {
    
    let statusCodes = [0,0,0];
    let initialState = rowObject.map((row, i) => {
        let tstate = {};
        for (let colName in row) {
            tstate[colName] = text2Float(row[colName].value, columns[colName]);
        }
        // eslint-disable-next-line no-unused-vars
        let [newt, status] = commonHandler("init", tstate, i, handlers, appEnv);
        statusCodes[status.code] = statusCodes[status.code] + 1;
        return newt;
    });
    return [initialState, statusCodes];
};
export default setInitialState;