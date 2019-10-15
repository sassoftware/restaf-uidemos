/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

async function slsExecute (path, store, model, inputData) {

	let data = {...model, ...inputData};

	let config = {
		url   : `${model.slsUrl}/${path}`,
		method: 'POST',
		data  : data,

		headers: {
			'Accept'      : 'application/json',
			'Content-Type': 'application/json'
		}
	};

	console.log(config);
	let r = await store.request(config);

	let casResults = r.data.casResults;
	return casResults;
}

export default slsExecute;
