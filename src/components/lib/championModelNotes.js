/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

async function championModelNotes (store, result, selected) {
    let n = result.itemsList(selected);
    console.log(n);
    let rafLink = result.itemsCmd(n,'championModel');
    let r = null;
    
    if (rafLink != null) {
       let rx = await store.apiCall(rafLink);
       r = rx.items(0,'data',0,'dataMap','contents');
       r = `<h2>${n}</h2>` + r;
    }
    return r;
}

export default championModelNotes;
