import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ViyaDataEditor from './components/ViyaDataEditor';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('===', window.appOptions);
let viyaConnection = window.appOptions.logonPayload;
debugger;
console.log(viyaConnection);
console.log(ReactDOM);
ReactDOM.render(
    <ViyaDataEditor  viyaConnection={viyaConnection} 
          appControl ={ window.appOptions.appControl }
          editType={"table"} />, document.querySelector('#root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
