/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {useContext} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ReadMe from '../helpers/ReadMe';
import {AppContext} from '../../providers';

function Home (props) {
	let {classes, homeNotesText}  = useContext(AppContext);
	
	let show = (
		<Grid container spacing={4}>
			<Grid item>
				<Paper className={classes.paper}>
					<main className={classes.content}>
						<ReadMe
							text={homeNotesText}
						/>
					</main>
				</Paper>
			</Grid>
		</Grid>
	);

	return show;
}
export default Home;
