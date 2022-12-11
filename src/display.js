import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {setupViya, AppContext} from './providers'

//import * as serviceWorker from 'serviceWorker';
function display(props, component){
  let {appEnv, logonPayload} = props;
  const root = ReactDOM.createRoot(document.getElementById(component));

  setupViya(appEnv, logonPayload)
	.then((appOptions) => {
		root.render(
    <AppContext.Provider value={appOptions}>
       <App appEnv={appOptions.appEnv} logonPayload={appOptions.logonPayload} />
    </AppContext.Provider>
    )})
	.catch((err) => console.log(JSON.stringify(err, null, 4)));
}
export default display;