/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { useState, useEffect } from 'react';
import { getReportUri } from '@sassoftware/restaflib';
import Sheet from '@mui/joy/Sheet';
//import Border from './Border';

function VaSDK(props) {
  let { value, url, auth, _appContext, style } = props;
  const [reportUri, setReportUri] = useState(null);

  const [errMsg, setErrMsg] = useState(null);
  let reportName = value;


  if (reportName == null || reportName.trim().length === 0) {
    reportName = 'Retail Insights';
  }

  let sx = { height: 'inherit', width: 'inherit', borderStyle: 'solid', borderRadius: 8, borderWidth: '1px' };
  sx = { ...sx, ...style };

  const _setup = async () => {
    if (_appContext == null) {
      return;
    }
    let appEnv = await _appContext.getViyaSession('cas');
    if (appEnv === null) {
      return;
    }
    //await store.addServices('reports');
    try {
      let r = await getReportUri(store, reportName);
      setReportUri(r[0].uri);
      setErrMsg(null);
      return;
    }
    catch (err) {
      setErrMsg(err);
      return;
    }

  }
  useEffect(() => {
    debugger;
    _setup()
      .then(r => { console.log('ready') })
      .catch(err => {
        console.log(err);
      });
  }, [reportName, value]);

  let show = null;
  let divStyle = sx;
  debugger;
  if (_appContext == null || _appContext.viyaEnv == null) {
    debugger;
    show = <div style={divStyle}><p>No connection to Viya</p></div>;
  } else if (reportUri === null) {
    debugger;
    show = <div style={divStyle}> <p> Report {reportName} was not found</p></div>
  } else {
    let urlt = (url == null || url.trim().length === 0) ? _appContext.viyaEnv.logonPayload.host : url
    show = <div style={divStyle}>
      <sas-report key={reportUri}
        hideNavigation="auto"
        url={urlt}
        reportUri={reportUri}
        authenticationType={auth == null ? 'credential' : auth}
        style={sx}
      />
    </div>

  };
  let shkey = reportName + 'sheet';
  return <Sheet key={shkey} style={{ height: 'inherit', width: 'inherit' }}>
    {show}
  </Sheet>


}
export default VaSDK;