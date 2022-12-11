function getViyaConnection(authType, host) {

  // complete the section based on authType
  // Change the sample values as needed
  let payload = {
    implicit: {
      host    : host,
      authType: 'implicit',
      clientID: 'clientimpl',
      redirect: 'viyaapp',
      appName : 'viyaeditor'
    },
    code: {
      host    : host,
      authType: 'server',
      appName : 'viyaeditor'
    },
    token: {
      host    : host,
      authType: 'token',
      token   : 'your-token-String',
      appName : 'viyaeditor'

    },
    va: {
      host: (host == null) ?  window.location.ancestorOrigins[0] : host,
      authType: 'server',
      appName: 'viyaapp'
    }
  };
  return payload[authType];
}