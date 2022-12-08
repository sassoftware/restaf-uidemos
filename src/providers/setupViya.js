/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { initStore } from '@sassoftware/restaf';
async function setupViya(appEnv, logonPayload) {
	let store    = initStore({casProxy: true});
	await store.logon(logonPayload);
	let services = await store.addServices('casManagement', 'compute');
	
	let appOptions = {
		logonPayload : logonPayload,
		appEnv       : appEnv,
		store        : store,
		homeNotesText: '# Welcome'
	}
	// for default home page
	if (appEnv.homeNotes != null) {
		let p = {
			url: appEnv.homeNotes,
			withCredentials: true
		};
		let r = await store.request(p);
		appOptions.homeNotesText = r.data;
	}
	let progressb = progress.bind(null, store);
	let onCompletionb = onCompletion.bind(null, store);
	appOptions.classes = {};
	appOptions.jobStatus = { progress: progressb, onCompletion: onCompletionb };
	debugger;
	return appOptions; 
}

function progress(store, data, JobId) {
	let today = new Date();
	let time = today.toISOString();
	let jobStatus = {
		log: `Progress Status: ${JobId} ${data}`,
		timeStamp: time,
	};
	store.setAppData('_jobStatus', jobStatus);
	return false;
}
function onCompletion(store, err, status, JobId) {
	let today = new Date();
	let time = today.toISOString();
	let jobStatus = {
		log: err ? `Completion Error: ${JobId} failed. ${err}` : `Completion Status: ${JobId}:  ${status.data}`,
		timeStamp: time,
	};
	store.setAppData('_jobStatus', jobStatus);
	return false;
}

export default setupViya;
