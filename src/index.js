import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// see the index.html in /dist directory on how this is set

const {appEnv, logonPayload, appControl} = window.appOptions;
if (appEnv.viewType != null) {
  appControl.appData.viewType = appEnv.viewType;
}

ReactDOM.render(
    <App  viyaConnection={logonPayload} 
          appControl ={ appControl }
         />, document.querySelector('#root'));

