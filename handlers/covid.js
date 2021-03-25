/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
let restaflib = require('@sassoftware/restaflib');
let setupConnection = require('../lib/setupConnection');
module.exports = async function covid (req,h) {
    return run(req,h) 
     .then (r => {return r;})
     .catch(err => {
         console.log(JSON.stringify(err, null,4));
         return err;
     });
};
async function run (req,h) {
    let context = req.pre.context;
    let {payload} = context;

    // logon to server with token
    let store = await setupConnection(context);

    // call MAS to score and return score information
    
    let r = await restaflib.masScore(store,'deva_manuel', payload.scenario);

    // Transform results as needed.
    // Add saving input and results in some database for tracking model performance

    return r;
}