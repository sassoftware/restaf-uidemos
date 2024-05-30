/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import { casSetup, computeSetup } from '@sassoftware/restaflib';

// return session for current source
async function setupSession(store, source, casContext, computeContext) {
  
   if (source === 'cas') {
    let r = await casSetup(store, null, null, casContext);
    return { source: 'cas', store: store, sessionID: r.session.items('id'), session: r.session, servers: r.servers,
             computeContext: computeContext, casServerName: casContext, serverContext: casContext};
  } else {
    let sessionData = { source: 'compute', store: store, computeContext: computeContext,servers: null, casServerName: casContext,serverContext: computeContext};
    let session = await computeSetup(store, computeContext);
    let ssid = await store.apiCall( session.links( 'self' ) );
    sessionData.session = session;
    sessionData.sessionID = ssid.items('id');
    return sessionData;
  }
}
export default setupSession;