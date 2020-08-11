import React, { useState, useContext, useEffect, useRef, Fragment } from 'react';

import { AppContext } from '../../providers';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TableFooter from '@material-ui/core/TableFooter';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import Paper from '@material-ui/core/Paper';

function PublishedModelsInCas (props) {
	// common setup
	let appContext = useContext(AppContext); /* get app control information */
	let { store } = appContext; /* dereference restaf store - your gateway to Viya */
	debugger;

	// component setup
	// let [ display, setDisplay ] = useState(false);
	let [ folder, setFolder ] = useState(null);
	let [ error, setError ] = useState(null);
	let { classes } = props;

	// load the initial set of items

	let lastService = useRef(null);

	const doCommand = (f, rel) => {
		store
			.apiCall(f.scrollCmds(rel))
			.then((fnew) => {
				setFolder(fnew);
				setError(null);
			})
			.catch((err) => {
				setError(JSON.stringify(err, null, 4));
				setFolder(null);

			});
	};
	// Setup browsing 
	useEffect(() => {
		async function getService (service) {
			let s = await store.addServices(service);
			let rel = (service === 'modelRepository') ? 'models'
			        	: (service === 'microanalyticScore') ? 'modules'
				    	: (service === 'modelPublish') ? 'destinations'
						: service;
			
			let f = await store.apiCall(s[service].links(rel));
			return f;
		}
		/*if (lastService.cuprops.newView === true) {*/
			debugger;
			getService(props.name)
				.then((f) => {
					setFolder(f);
					setError(null);
					lastService.current = props.name;
				})
				.catch((err) => {
					setError(JSON.stringify(err, null, 4));
					setFolder(null);
				});
		/*}*/

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props]);

	const makeMenu = (f) => {
		debugger;
		let cmds = f.scrollCmds().keySeq().toJS();
		console.log(cmds);
		let menu = [];
		let relInfo = [
			{ rel: 'first', icon: <FirstPageIcon/>,      disabled: true },
			{ rel: 'prev',  icon: <KeyboardArrowLeft/>,  disabled: true },
			{ rel: 'next',  icon: <KeyboardArrowRight/>, disabled: true },
			{ rel: 'last',  icon: <LastPageIcon/>,       disabled: true },
		];
		
		for (let i = 0; i < relInfo.length; i++){
			if (cmds.includes(relInfo[i].rel) === true) {
				relInfo[ i ].disabled = false;
			}
		};

		menu = relInfo.map((irel, i) => {
			return (
				<IconButton key={irel.rel} onClick={() => doCommand(f, irel.rel)} disabled={irel.disabled}>
					{irel.icon}
				</IconButton>
			);
		});
	
		
		return menu;
	};

	const makeDataRows = (f) => {
		let items = f.itemsList().toJS();
		let tableRows;
		if (items.length > 0) {
			tableRows = f.itemsList().toJS().map((m, i) => {
				let item = f.items(m, 'data').toJS();
				console.log(item);
				let r = (
					<TableRow>
						<TableCell component="th" scope="row">
							{item.name.trim()}
						</TableCell>
					</TableRow>
				);
				return r;
			});
		} else {
			tableRows = [
				<TableRow>
					<TableCell component="th" scope="row">
						No models in the repository
					</TableCell>
				</TableRow>,
			];
		}
		return tableRows;
	};

	const makeFinalTable = (folder) => {
		if (folder === null) return null;
		let scrollMenu = makeMenu(folder);
		debugger;
		let show = (
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="a dense table">
					<TableHead>
						<TableRow> {scrollMenu}</TableRow>
						<TableRow>
							<TableCell>Name</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>{makeDataRows(folder)}</TableBody>
					<TableFooter>
						<TableRow>{scrollMenu}</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		);
		return show;
	}

	// create display

	let show = (error != null) ?
		<Fragment>{error}</Fragment>
		: (folder !== null) ?  makeFinalTable(folder)
			: <Fragment> loading...</Fragment>;
	
	return show;
}
export default PublishedModelsInCas;
