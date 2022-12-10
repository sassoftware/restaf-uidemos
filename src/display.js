import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import * as serviceWorker from 'serviceWorker';
function display(appOptions, component){
  const root = ReactDOM.createRoot(document.getElementById(component));
  let {logonPayload, appEnv} = appOptions;
  root.render(<App logonPayload={logonPayload} appEnv={appEnv} />);
}
export default display;