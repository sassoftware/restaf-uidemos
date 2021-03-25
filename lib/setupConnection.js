let restaf = require('@sassoftware/restaf');
module.exports = async function setupConnection(context) {
    let store = restaf.initStore();
    let [bearer,token] = context.token.split(' ');
    let logonPayload = {
        authType : 'server',
        token    : token,
        tokenType: bearer,
        host     : process.env.VIYA_SERVER
    };
    await store.logon(logonPayload);
    return store;
    }