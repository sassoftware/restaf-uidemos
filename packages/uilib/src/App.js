import React, { useContext } from 'react';
// import {BrowserRouter} from 'react-router-dom'
import SideBar from './components/SideBar';
import ProblemDescription from './components/ProblemDescription';
import DsScoring from './components/DsScoring';
import CasTableSelectorp from './components/CasTableSelectorp';

import PlaceHolder from './components/PlaceHolder';
import TestStuff from './components/TestStuff';
import { AppContext } from './providers';

let menuFuture = [
	{
		path: '/scoreAstore',
		text: 'scoring with any astore',
		icon: null,
		component: PlaceHolder
	},
	{
		path: '/loan',
		text: 'Loan Analysis',
		icon: null,
		component: PlaceHolder
	},
	{
		path: '/browseTable',
		text: 'Browse a Cas table',
		icon: null,
		component: CasTableSelectorp
	},
	{
		path: '/ViewReports',
		text: 'View reports(non-sdk)',
		icon: null,
		component: PlaceHolder
	},
	{
		path: '/vasdk',
		text: 'Example of VA SDK',
		icon: null,
		component: PlaceHolder
	},
	{
		path: '/jobexec',
		text: 'Example of Job Execution',
		icon: null,
		component: PlaceHolder
	},
	{
		path: '/casdms',
		text: 'Run casl on cas server',
		icon: null,
		component: PlaceHolder
	},
	{
		path: '/spredms',
		text: 'Run compute service',
		icon: null,
		component: PlaceHolder
	},
	{
		path: '/testStuff',
		text: 'Testing Zone',
		icon: null,
		component: TestStuff
	}
];

//
// To start at a different component change SideBar to your component
//
function App(props) {
	const appContext = useContext(AppContext);
	debugger;
	let appEnv = appContext.viya.appEnv;
	let store = appContext.store;

	let models = appEnv.models;

	let menu = [
		{
			path: '/',
			text: 'Home',
			icon: null,
			component: ProblemDescription,
			model: null
		}
	];
	models.forEach(m => {
		let subsetVars = m.explainVars.map(s => s.toLowerCase());
		m.explainVars = subsetVars;
		let mrow = {
			path: m.route,
			text: m.desc,
			icon: null,
			model: m
		};
		mrow.component = m.scoreMethod === 'dsscore' ? DsScoring : PlaceHolder;
		menu.push(mrow);
	});
	menu = menu.concat(menuFuture);
	console.log(menu);
	return <SideBar store={store} menu={menu} />;
}

export default App;
