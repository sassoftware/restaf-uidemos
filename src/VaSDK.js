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
  let { value, report, auth, _appContext, sx } = props;
  const [reportUri, setReportUri] = useState(null);
  const [urlt, setUrlt] = useState(null);

  const [errMsg, setErrMsg] = useState(null);
  let reportName = value||report;

  let isx = { height: 'inherit', width: 'inherit', borderStyle: 'solid', borderRadius: 8, borderWidth: '1px' , ...sx};

  const _setup = async () => {
    let appEnv = await _appContext.getViyaSession('cas');
    if (appEnv === null) {
      return;
    }
    //await store.addServices('reports');
    if (reportName == null || reportName.trim().length === 0) {
      return;
    }
    try {
      let r = await getReportUri(appEnv.store, reportName);
      setReportUri(r[0].uri);
      setUrlt(appEnv.host);
      setErrMsg(null);
      return;
    }
    catch (err) {
      setErrMsg(err);
      return;
    }

  }
  useEffect(() => {
 
    _setup()
      .then(r => { console.log('ready') })
      .catch(err => {
        console.log(err);
      });
  }, [report, reportName, value]);

  let show = null;
  let divStyle = isx;
  if (reportUri === null) {
    show = <div style={divStyle}> <p>No report to display </p></div>;
  } else {
    show = <div style={divStyle}>
      <sas-report key={reportUri}
        hideNavigation="auto"
        url={urlt}
        reportUri={reportUri}
        authenticationType={auth == null ? 'credential' : auth}
        style={isx}
      />
    </div>;

  };
  let shkey = reportName + 'sheet';
  return <Sheet key={shkey} style={{ height: 'inherit', width: 'inherit' }}>
    {show}
  </Sheet>


}
export default VaSDK;