import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// see the index.html in /dist directory on how this is set

const {logonPayload, appControl} = window.appOptions;
ReactDOM.render(
    <App  viyaConnection={logonPayload} 
          appControl ={ appControl }
         />, document.querySelector('#root'));

