/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import {casFetchRows} from '@sassoftware/restaflib/dist/restaflib.js';
import prepFormData from "./prepFormData";
async function fetchTableRows (control, tableForm, appEnv) {
    let {store, session} = appEnv;
    // eslint-disable-next-line no-useless-catch
    
    if (control.where == null) {
        control.where = {};
    }
    let r =   await casFetchRows(store, session, control);
    let t = prepFormData(r.data, tableForm, appEnv);
    t.pagination = {...r.pagination};
    return  t;
        
}
export default fetchTableRows;
