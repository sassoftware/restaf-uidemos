/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {Fragment} from 'react';
import RunMasModel from '../helpers/RunMasModel';
//import {useAppContext} from '../../providers';

import { useLocation } from 'react-router-dom';

// import { PropTypes } from 'prop-types';

function MasModel (props) {
	// let {appOptions} = useAppContext();
	let location = useLocation();
	let { models } = location.state;
	let model = models[0];
	
	let show = 
		<Fragment>
			<RunMasModel name={model.name} viewData={model.viewData} target={model.target.name} threshold={model.target.threshold}/>
		</Fragment>;
	return show;
}

MasModel.propTypes = {
	/** Data passed in thru state */
};

export default MasModel;