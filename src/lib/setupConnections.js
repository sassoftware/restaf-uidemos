
import { initStore } from '@sassoftware/restaf/dist/restaf.js';
import {lib} from '@sassoftware/restaflib/dist/restaflib.js';

async function setupConnections (logonPayload) {
    let store = initStore();
    let r = await lib.casSetup(store, logonPayload);
    let appEnv = {
        store       : store,
        session     : r.session,
        servers     : r.servers,
        logonPayload: logonPayload
    };
    return appEnv;
}
export default setupConnections;