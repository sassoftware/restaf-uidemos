
import {initStore} from '@sassoftware/restaf/dist/restaf.js';
async function setupViya() {
    let store = initStore();
    await store.logon(window.appOptions.logonPayload);
    /* Commonly used services */
    await store.addServices(
        'casManagement',
        'compute',
        'reports',
        'reportImages',
        'reportTransforms',
        'files',
        'folders',
        'microanalyticScore'
    );
    return { store: store, appOptions: window.appOptions };
    }
export default setupViya;

    