/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { PropTypes } from 'prop-types';
import ViewResult from './ViewResult';

/**
 * Display Spre log or list
 * @param {} props
 */

function CaslResult (props) {
	let { computeInfo, ...others} = props;
    return <ViewResult result={computeInfo.result} mode="text" {...others} />
}

CaslResult.propTypes = {
    /** Control information for this casl run */
    computeInfo: PropTypes.object.isRequired,
}
export default CaslResult;
