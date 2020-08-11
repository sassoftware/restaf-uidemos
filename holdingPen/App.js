
import React from "react";


// import PropTypes from 'prop-types';

import SideBar from './components/viewers/SideBar';

import { withStyles } from '@material-ui/core/styles';
import PlaceHolder from './components/viewers/PlaceHolder';
import TestStuff from './components/viewers/TestStuff';
import ProblemDescription from './components/viewers/ProblemDescription';
import ItemsTableViewer from './components/viewers/ItemsTableViewer';
import PublishedModelsInCas from './components/viewers/PublishedModelsInCas';

const muiJss = {
	list: {
		width: 250,
		backgroundColor: 'white',
		foregroundColor: 'black',
	},
	fullList: {
		width: 'auto',
	},
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	appBar1: {
		backgroundColor: '#2E547B',
		foregroundColor: 'white',
	},
	paper: {
		backgroundColor: 'white',
	},
	table: {
		minWidth: 650,
	}
};
//
// To start at a different component change the code below
//
function Appi (props) {
    let menu = [
		{
			path: '/',
			name: 'HomePage',
			text: 'Home',
			Component: ProblemDescription,
			props: {},
		},
		{
			path: '/files',
			name: 'files',
			text: 'Files Browser',
			Component: ItemsTableViewer,
			props: { newView: true },
		},
		{
			path: '/reports',
			name: 'reports',
			text: 'Reports Browser',
			Component: ItemsTableViewer,
			props: { newView: true },
		},
		{
			path: '/folder',
			name: 'folders',
			text: 'Folder Browser',
			Component: ItemsTableViewer,
			props: { newView: true },
		},
		{
			path: '/modelPublish',
			name: 'modelPublish',
			text: 'Model Destinations',
			Component: PublishedModelsInCas,
			props: {},
		},
		{
			path: '/casModels',
			name: 'modelRepository',
			text: 'Models in model Repository',
			Component: PublishedModelsInCas,
			props: {},
		},
		{
			path: '/masModels',
			name: 'microanalyticScore',
			text: 'Models in MAS',
			Component: PublishedModelsInCas,
			props: {},
		},
		{
			path: '/test1',
			name: 'PlaceHolder',
			text: 'testPlaceHolder',
			Component: PlaceHolder,
			props: {},
		},
		{
			path: '/test2',
			name: 'TestStuff',
			text: 'testTestStuff',
			Component: TestStuff,
			props: {},
		},
	];
    debugger;
    console.log(props);
    console.log('...');
    debugger;
	return <SideBar menu={menu} title={"test"} {...props}></SideBar>;
}
export default withStyles(muiJss)(Appi);
