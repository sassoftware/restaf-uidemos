/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

const setupTest = require('./setupTest');
require('dotenv').config();
async function run () {
   debugger;
   let {store, token} = await setupTest();

   let payload = {
       method : 'POST',
       url    : `${process.env.APISERVER}/casAction`,
       headers: {
          authorization: token
       },
       data: {
        action: 'builtins.echo',
        data  : {
          code: 'data casuser.score; x1=10;x2=20;x3=30; score1 = x1+x2+x3;run; '
        }
      }
   };
   console.log(payload);
   let r = await store.request(payload);
   console.log(r.data);
   return 'done';
};

run() 
.then (r => console.log(r))
.catch(err => console.log(err));