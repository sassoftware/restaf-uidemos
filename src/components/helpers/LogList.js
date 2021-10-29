/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Fragment, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import {useAppContext} from '../../providers';
import HtmlViewer from './HtmlViewer';
import log2Html from '../lib/log2Html';

/**
 * Display SPRE log or list
 * @param {} props 
 */
function LogList (props) {
	let { computeInfo, type} = props;
	
	let {store, restaflib, classes} = useAppContext();
	let {computeResults} = restaflib;
    let [ log, setLog ] = useState('');
	useEffect(() => {
		const _format = async () => {
			let tlog = await computeResults(store, computeInfo.result, (type === 'listing) ' ? 'listing' : 'log'));
			
			return log2Html(tlog, classes);
		};
		if (computeInfo.result !== null) {
			_format()
				.then((r) => setLog(r))
				.catch((err) => console.log(err));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ computeInfo ]);

	return (
		<Fragment>
			<HtmlViewer html={log}></HtmlViewer>
		</Fragment>
	);
    
}


LogList.propTypes = {
	/** Control information for this compute session */
	computeInfo: PropTypes.object.isRequired,
	/** Type is either log or listing - defaults to log if incorrect*/
	type       : PropTypes.string
};
export default LogList;


