/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect} from 'react';
import { getReportUri } from '@sassoftware/restaflib';
import Sheet from '@mui/joy/Sheet';
//import Border from './Border';

function VaSDK(props) {
  let { value,  url, auth, _userProps, style  } = props;
  const [reportUri, setReportUri] = useState(null);

  const [errMsg, setErrMsg] = useState(null);
  let reportName = value;
  

  if (reportName == null || reportName.trim().length === 0) {
    reportName = 'Retail Insights';
  }

  let sx = { height: 'inherit', width: 'inherit', borderStyle: 'solid', borderRadius: 8, borderWidth: '1px'};
  sx = { ...sx, ...style };
  
  useEffect(() => {
    debugger;
    if (_userProps != null &&  _userProps.viyaEnv != null) {
      _userProps.viyaEnv.store.addServices('reports')
        .then(r => {
          getReportUri(_userProps.viyaEnv.store, reportName)
            .then(r => {
              
              setReportUri(r[0].uri);
              setErrMsg(null);
            })
            .catch(err => {
              setErrMsg(err);
            });
        })
      }
    }, [reportName, value]);
    
  let show = null;
  let divStyle = sx;
  debugger;
  if (_userProps == null || _userProps.viyaEnv == null) {
    debugger;
    show = <div style={divStyle}><p>No connection to Viya</p></div>;
  } else if (reportUri === null) {
    debugger;
    show = <div style={divStyle}> <p> Report {reportName} was not found</p></div>
  } else {
      let urlt = (url == null || url.trim().length === 0) ? _userProps.viyaEnv.logonPayload.host : url
      show = <div style={divStyle}>
       <sas-report  key={reportUri}
        hideNavigation="auto"
        url= {urlt}
        reportUri={reportUri}
        authenticationType={auth == null ? 'credential' : auth}
        style={sx}
      />
      </div>
    
  };
  let shkey = reportName +'sheet';
  return <Sheet key={shkey} style={{height: 'inherit', width: 'inherit'}}>
    {show}
    </Sheet>
  

}
export default VaSDK;