/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Fragment } from 'react';
import { PropTypes } from 'prop-types';

import { Grid } from '@mui/material';
import SimpleDataForm from './SimpleDataForm';
import {useAppContext} from '../../providers';
import Fab from '@mui/material/Fab';
import WarningRounded from '@mui/icons-material/WarningRounded';
import Done from '@mui/icons-material/Done';

function RunMasModel (props) { 
	let [masControl, setMasControl]= useState(null);
	let [state, setState] = useState({data: null, name: null, score: null});
	let {store, restaflib, classes} = useAppContext();

	const _setUp = async () => {
		let name = props.name;
		
		let control = await restaflib.masSetup(store, []);
		await restaflib.masAddModel(store, control, [name]);
		if (control.steps[name] == null) {
			throw {Error: 'Model not found'}
		}
		
		let desc = restaflib.masDescribe(control, [name], null);
		
		let metaData = props.viewData;
		let data;
		if (metaData !== null ) {
			data = desc.map(d => {
				let n = d.name.toLowerCase();
				if (metaData[n] != null) {
					d = {...d, ...metaData[n]}
				}
				return d;
			})
		} else {
			data = desc;
		}
		let r = {data: data, name: name, score: null};
        return {masControl: control, newState: r};
    }
    useEffect(() => {
        _setUp()
            .then((r) => {
				setMasControl(r.masControl);
                setState(r.newState)
            })
            .catch((err) => {
                alert(JSON.stringify(err, null,4));
			})
	}, [props.name]);
	
	const _userInputs = (newData) => {
        _score(newData)
            .then(r => {
				let t = {data: newData, score: r, name: state.name}
                setState(t);
            })
            .catch(err => {
                alert(JSON.stringify(err, null,4));
            })
    }

    const _score = async (newData) => {
		
		let r = await restaflib.masRun(store, masControl, state.name, newData, null, 'execute');
		
		let d = r.filter( t1 => t1.name === props.target);
        return d;
	}

	let Icon = Done;
	let fabclass = classes.fabgood;
	let svalue = '';
	let bstate = false;
	if (state.score != null) {
		svalue = state.score[0].value;
		if ( props.threshold != null) {
			if (typeof props.threshold === 'string') {
				if (svalue === props.threshold) {
					bstate = true;
				}
			} else if (svalue < props.threshold) {
				bstate = true;
			}
		}
	};
	let value = `Recommendation: ${svalue}`;

	if (bstate === true) {
		Icon  = WarningRounded;
		fabclass = classes.fabbad;
	}
	let show = 
	<Fragment>
	<Grid container justify="flex-start" alignItems="flex-start" spacing={2} direction="row">
		<Grid item xs={6}>
			{state.data !== null ? <SimpleDataForm title={'Enter Values and Submit'} data={state.data} onSubmit={_userInputs} /> : null}
		</Grid>
		<Grid item xs={4}>
			{state.score != null ? <Fab variant="extended" className={fabclass}>
				<Icon />
					{value}
			</Fab> : null}
		</Grid>
	</Grid>
</Fragment>
	return show;
}

RunMasModel.propTypes = {
	/** name of MAS model */
	name: PropTypes.string.isRequired,
	/** dictionary with additional information fro display */
	viewData: PropTypes.object.isRequired,
	/** Target column name */
	target: PropTypes.string.isRequired,
	/** threshold - threshold for success */
	threshold: PropTypes.number.isRequired,
};

export default RunMasModel;
