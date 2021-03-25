/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

const setupTest = require('./setupTest');
module.exports = async function casl () {
   let {store,token} = await setupTest();
   let payload = {
       method : 'POST',
       url    : 'http://localhost:8080/myapi/casl',
       headers: {
          authorization: token
       },
       data: {
        input: {x: 1},
        code : `	
            action builtins.echo r = result / 
                  data = "data casuser.text;docId='test';text='I love this app';run;";
            
            action datastep.runCode r=result/ 
                  single='YES'
                  code = "data casuser.text;docId='test';text='this is not bad stuffstuff';run;";
            
            action table.fetch r=result /
            table={caslib='casuser', name= 'text'};
        
        send_response(result); `
        }
   };

   let r = await store.request(payload);
   console.log(r.data);
   return 'done';
};
