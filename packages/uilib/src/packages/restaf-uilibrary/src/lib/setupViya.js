// logon and access to actions

async function setupViya (store, appEnv, logonPayload) {
    debugger;
    let actionSets = [ 'sccasl' ];
    debugger;
    let msg = await store.logon(logonPayload);
    console.log(msg);
    let services = await store.addServices('casManagement');
    let casManagement = services.casManagement;
    let servers = await store.apiCall(casManagement.links('servers'));
    let payload = { data: { name: 'astore' } };
    let serverName = servers.itemsList(0);

    let session = await store.apiCall(servers.itemsCmd(serverName, 'createSession'), payload);
    if (actionSets !== null) {
        let l = actionSets.length;
        for (let i = 0; i < l; i++) {
            let payload = {
                action: 'builtins.loadActionSet',
                data: { actionSet: actionSets[ i ] }
            };
            await store.runAction(session, payload);
        }
    }
    
    await store.setAppData('appEnv', appEnv);
    await store.setAppData('session', session);
    await store.setAppData('reportServices', { reports: services.reports, reportImages: services.reportImages, reportTransforms: services.reportTransforms });
    
    let r = {
        store   : store,
        session : session,
        services: services,
        appEnv  : appEnv
    }
   

return r;
}

export default setupViya;



