/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {setupViya, AppContext} from './providers'
//import * as serviceWorker from 'serviceWorker';
const root = ReactDOM.createRoot(document.getElementById('root'));
let {logonPayload, appEnv} = window.appOptions;
setupViya(appEnv, logonPayload)
	.then((appOptions) => {

		root.render(
    <AppContext.Provider value={appOptions}>
       <App appEnv={appOptions.appEnv} logonPayload={appOptions.logonPayload} />
    </AppContext.Provider>
    )})
	.catch((err) => console.log(JSON.stringify(err, null, 4)));
