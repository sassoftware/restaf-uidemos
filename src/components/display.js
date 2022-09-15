import React from 'react';
import ReactDOM from 'react-dom';
import ViyaDataEditor from './ViyaDataEditor';

// see the index.html in /dist directory on how this is set
function display(props, domElement, _component) {
    const createRoot = ReactDOM.createRoot;
    const container = document.getElementById(domElement);
    const root = createRoot(container);
    
    root.render(
        <ViyaDataEditor viyaConnection={props.viyaConnection} 
            appControl ={props.appControl}
            />);
}
export default display;


