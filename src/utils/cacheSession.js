function cacheSession(store, source, session, servers, computeContext) {
  let state = store.getAppData('viyaFSEDIT').toJS();
  let sessions = state.sessions;
  if (source === 'cas') {
    computeContext = 'cas';
  }
  
  if (sessions[computeContext] == null) {
    sessions[computeContext] = {session: session, servers: servers, sessionID: session.items('id'), computeContext: computeContext, source: source}
    store.setAppData('viyaFSEDIT', state);
  }
  return true;
}
export default cacheSession;