/*
* Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

let fs = require('fs').promises;
let restaf = require('@sassoftware/restaf');
module.exports = async function setupTest () {
    let store = restaf.initStore();

    if (process.env.TOKENFILE != null) {
        let token = await fs.readFile(process.env.TOKENFILE, 'utf8');
        console.log('Using saved token');
        token = 'bearer ' + token;
        return {store,token};
    } 
    let logonPayload = {
        authType    : 'password',
        host        : process.env.VIYA_SERVER,
        user        : process.env.USER,
        password    : process.env.PASSWORD,
        clientID    : process.env.CLIENTID,
        clientSecret: (process.env.CLIENTSECRET == null) ? '' : process.env.CLIENTSECRET
    };

    await store.logon(logonPayload);
    let token = store.connection().token;
    token = 'bearer ' + token;
    return {store,token};
};