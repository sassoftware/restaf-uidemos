/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

let restaflib = require('@sassoftware/restaflib');
let setupConnection    = require('../lib/setupConnection');   
module.exports = async function compute (req,h) {
    return run(req,h) 
        .then (r => {return r;})
        .catch(err => {
            return err;/* need to add Boom support */
        });
};
async function run (req,h) {
    
    let { computeSetup, computeRun } = restaflib;
    let context = req.pre.context;
    let store = await setupConnection(context);
	let computeSession = await computeSetup(store, null, null);
    
    let computeSummary = await computeRun(
        store,
        computeSession,
        context.payload.code,
        context.payload.input,
        15,2  /* just a place holder values for checking job status */
    );
    
    let log = await restaflib.computeResults(store, computeSummary, 'log');
    await store.apiCall(computeSession.links('delete'));
    // just return log for the example
    return log;

};
