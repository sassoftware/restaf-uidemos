/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/


async function slsGetResults (path,data,store, appEnv, currentModel){
    let args = {
      path  : path,
      filter: {}
    }
    let control = appEnv[currentModel];
    args = {...args, ...control};

    if (path === 'score') {
        args.filter = data;
    }
    debugger;
    let config = {
        url    : `${appEnv.url}/${path}`,
        method : 'POST',
        data   : args,
        headers: {
          Accept        : 'application/json',
          'Content-Type': 'application/json'
        }
      };
  
    // results
    let r = await store.request(config);
    let casResults = r.data.casResults;
    return casResults;
}
export default slsGetResults;