/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import filterExpression from './filterExpression';
async function getItemsList(appEnv, serviceName, count, filter) {
  const { store } = appEnv;
  
  let s = await store.addServices(serviceName);
  let service = s[serviceName];

  const removeTypeDuplicates = (arr) => {
    let seen = [];
    let out = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let item = arr[i];
      if (!seen.includes(item)) {
        seen.push(item);
        out.push(item);
      }
    } 
    return out;
  }
  let filterExpString = filterExpression(filter);
  let payload = {
    qs: {
      limit: (count == null) ? 1000 : count,
      start: 0
    }
  };
  if (filterExpString != null) {
    payload.qs.filter = filterExpString;
  }
  
  try {
    let slist = await store.apiCall(service.links(serviceName), payload);
    let r = slist.itemsList().toJS();
    let ur = removeTypeDuplicates(r);
    return ur;
  }
  catch (err) {
    console.log(err)
    return [];
  }
}
export default getItemsList;