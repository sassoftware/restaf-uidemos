/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect} from 'react';
import { getReportUri } from '@sassoftware/restaflib';
import Sheet from '@mui/joy/Sheet';
//import Border from './Border';

function VaSDK(props) {
  let { value, label, url, auth, sharedProps, style  } = props;
  let { appEnv } = sharedProps;
  const [reportUri, setReportUri] = useState(null);

  const [errMsg, setErrMsg] = useState(null);
  let reportName = value;
  /*
  if (report != null && report.trim().length > 0) {
     reportName = report;
  };
  */

  if (reportName == null || reportName.trim().length === 0) {
    reportName = 'Retail Insights';
  }

  let sx = { height: 'inherit', width: 'inherit', borderStyle: 'solid', borderRadius: 8, borderWidth: '1px'};
  sx = { ...sx, ...style };
  
  useEffect(() => {
      appEnv.store.addServices('reports')
        .then(r => {
          getReportUri(appEnv.store, reportName)
            .then(r => {
              
              setReportUri(r[0].uri);
              setErrMsg(null);
            })
            .catch(err => {
              setErrMsg(err);
            });
        })
    }, [reportName, value, appEnv]);
    
  let show = null;
  let divStyle = sx;
  let urlt = (url == null || url.trim().length === 0) ? appEnv.logonPayload.host : url
  if (errMsg !== null) {
    show = <div style={divStyle}><p>Report {reportName} was not found</p></div>;
  } else if (reportUri === null) {
    show = <div style={divStyle}> <p> Report {reportName} was not found</p></div>
  } else {
      
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
  let shkey = label +'sheet';
  return <Sheet key={shkey} style={{height: 'inherit', width: 'inherit'}}>
    {show}
    </Sheet>
  

}
export default VaSDK;