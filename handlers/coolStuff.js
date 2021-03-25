/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

let restaflib = require('@sassoftware/restaflib');
let setupConnection    = require('../lib/setupConnection');   
let fs = require('fs').promises;
module.exports = async function coolstuff (req,h) {
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
   
    // get the last param from the path
    let f = context.path.split('/');

    // read the file with the same name
    let fname = `./pgm/${f[2]}.sas`;
    let src = await fs.readFile(fname, 'utf8');

    // run the sas code 
    let computeSummary = await computeRun(
        store,
        computeSession,
        src,
        context.payload.input,
        15,2  /* just a place holder values for checking job status */
    );
  
    // get the specified result
    let result = await restaflib.computeResults(store, computeSummary, context.payload.output);
    await store.apiCall(computeSession.links('delete'));
    // just return log for the example
    return result;

};
