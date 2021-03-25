/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
let restaflib = require('@sassoftware/restaflib');
let setupConnection = require('../lib/setupConnection');
let fs = require('fs').promises;

module.exports = async function getData (req,h) {
    return run(req,h) 
     .then (r => {return r;})
        .catch(err => {
         return err; //add Boom to make the message better
     });
};
async function run (req,h) {
    let context = req.pre.context;
    let store = await setupConnection(context);
    let { session } = await restaflib.casSetup(store, null);
    
    // get the last param from the path
    let f = context.path.split('/');

    // read the file with the same name
    let fname = `./pgm/${f[2]}.casl`;
    let src = await fs.readFile(fname, 'utf8');

    // run the casl code and return whatever the casl code returns
    let result = await restaflib.caslRun(store, session, src, context.payload.input);
    await store.apiCall(session.links('delete'));
    return result;
}