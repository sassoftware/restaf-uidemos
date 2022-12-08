/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import * as serviceWorker from 'serviceWorker';
const root = ReactDOM.createRoot(document.getElementById('root'));
let {logonPayload, appEnv} = window.appOptions;
console.log(appEnv);
root.render(<App logonPayload={logonPayload} appEnv={appEnv} />);
