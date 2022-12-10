/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

// import PropTypes from 'prop-types';
import AppRouter from './AppRouter';
import setupViya  from './providers/setupViya';
//import defaultStyles from './defaultStyles';

//
// To start at a different component change the code below
//
function App(props) {
	let { logonPayload, appEnv } = props;

	// let classes = defaultStyles()();
	
	// to keep the session active for longer than the default
	    
	if (logonPayload.keepAlive != null) {
		let interval = 120;
		let timeout = 14400;
		if (logonPayload.timers != null) {
			let opts = logonPayload.timers.split(',');
			interval = parseInt(opts[0]);
			timeout = parseInt(opts[1]);
		}
		console.log(`Keepalive is active`);
		store.keepViyaAlive(logonPayload.keepAlive, interval, timeout, () => {
			console.log('timed out at', Date());
			let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000`;
			window.open(`${logonPayload.host}/SASLogon/timedout`, 'Timed Out', params);
			return true;
		});
	}
	

	return <AppRouter></AppRouter>;
		
}
		
export default App;
