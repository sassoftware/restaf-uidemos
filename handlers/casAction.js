/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
let restaflib = require('@sassoftware/restaflib');
let setupConnection = require('../lib/setupConnection');
module.exports = async function casAction (req,h) {
    return run(req,h) 
        .then (r => {return r;})
        .catch(err => {
            return err;/* need to add Boom support */
        });
};

async function run (req,h) {
    let context = req.pre.context;
    let store = await setupConnection(context);
    let { session } = await restaflib.casSetup(store, null);
 
    let result = await restaflib.casActionRun(store, session, context.payload);
    await store.apiCall(session.links('delete'));
    return result;
};