/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { setupViya } from './providers';
import App from './App';
//import * as serviceWorker from 'serviceWorker';
const root = ReactDOM.createRoot(document.getElementById('root'));
setupViya(true)
	.then((r) => {
		root.render(<App {...r} />);
	})
	.catch((err) => console.log(JSON.stringify(err, null, 4)));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
