/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { initStore } from '@sassoftware/restaf';
import restaflib from '@sassoftware/restaflib';


async function setupViya () {

	let store = initStore();
	await store.logon(window.appOptions.logonPayload);
	

	let p = {
		url            : window.appOptions.appEnv.homeNotes,
		withCredentials: true
	};
	let r = await store.request(p);
	let appOptions = { ...window.appOptions };
	appOptions.README = r.data;
	let progressb = progress.bind(null, store);
	let onCompletionb = onCompletion.bind(null, store);
	appOptions.jobStatus = { progress: progressb, onCompletion: onCompletionb };
	return { store: store, restaflib: restaflib, appOptions: appOptions };
}

function progress (store, data, JobId) {
	let today = new Date();
	let time = today.toISOString();
	let jobStatus = {
		log      : `Progress Status: ${JobId} ${data}`,
		timeStamp: time,
	};
	store.setAppData('_jobStatus', jobStatus);
	return false;
}
function onCompletion (store, err, status, JobId) {
	let today = new Date();
	let time = today.toISOString();
	let jobStatus = {
		log      : err ? `Completion Error: ${JobId} failed. ${err}` : `Completion Status: ${JobId}:  ${status.data}`,
		timeStamp: time,
	};
	store.setAppData('_jobStatus', jobStatus);
	return false;
}

export default setupViya;
