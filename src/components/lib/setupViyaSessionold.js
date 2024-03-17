/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Setup the Viya environment
 * @param {string} source - cas or compute
 * @returns {object} - appEnv
 * @async
 */
 
import {initStore,} from '@sassoftware/restaf';
import {casSetup, computeSetup} from '@sassoftware/restaflib';

async function setupViyaSessionx(source, ilogonPayload) {

  let appEnv = {  
    host: null,
    logonPayload: null,
    store: null,
    session: null,
    servers: null,
    casServerName: null,
    source: source,
    sessionID: null
  }
  if (source === 'none'|| source == null){
    return appEnv;
  }
  // logon payload
  
  let logonPayload = {
    authType: 'server',
    host: ilogonPayload.host
  }
  if (ilogonPayload.token != null) {
    logonPayload.token = ilogonPayload.token;
    logonPayload.tokenType = 'bearer';
  }

  // logon to the server
  let store = initStore({casProxy: true});
  await store.logon(logonPayload);
  appEnv = {
    host: ilogonPayload.host,
    logonPayload: logonPayload,
    store: store,
    source: source
  }
  // create session and server objects
  if (source === 'cas') {
    let {session, servers} = await casSetup(store, null);
    appEnv.session = session;
    appEnv.servers = servers;
    appEnv.casServerName = session.links("execute", "link", "server"); 
 
  } else {
    appEnv.session = await computeSetup(store);
    appEnv.servers = null;
  }

  let ssid = await store.apiCall(appEnv.session.links("self"));
  appEnv.sessionID = ssid.items("id");
  return appEnv;
}
export default setupViyaSessionx;