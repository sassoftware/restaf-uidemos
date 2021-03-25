/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
const setupTest = require('./setupTest');
module.exports = async function compute () {
   let {store, token} = await setupTest();
   let payload = {
       method : 'POST',
       url    : 'http://localhost:8080/myapi/compute',
       headers: {
          authorization: token
       },
       data: {
        input: {x: 1},
        code : 'data work.score; x1=10;x2=20;x3=30; score1 = x1+x2+x3;run; '
        }
   };

   let r = await store.request(payload);
   console.log(r.data);
   return 'done';

};