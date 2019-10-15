import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom';
import {AppContext} from '../providers';
import "../css/styles.css";

function _TestStuff (props) {
  const appContext = useContext(AppContext);
    debugger;
    let appEnv = appContext.viya.appEnv;
    console.log(props.match);
    console.log(appEnv);
    console.log(appContext.viya);
    return (
      <div id="page-wrap">
        <pre> {JSON.stringify(appEnv, null,4)}</pre>
      </div>
    )
  }

let TestStuff = withRouter(_TestStuff);
export default TestStuff;

