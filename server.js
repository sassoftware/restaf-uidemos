
let appServer = require ('@sassoftware/viya-appserverjs');
appServer.icli(null, null, userOptions);

function userOptions (options, key) {
  
  let info = {
    APPENV: {
      hello: "Hello there"
    }
  };
  return info[ key ];
}
    