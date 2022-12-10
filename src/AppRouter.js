/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {useEffect, useContext} from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import viewers from './components/viewers';
import appMenus from './appMenus';
import Header from './components/helpers/Header';

function AppRouter(_props) {
	let homeState = {};
	let HomeComp = null;
	
	// create menu for hamburger in Header (excluding Home)
	console.log(appMenus);
	let switches = appMenus.map((m, key) => {
		let Comp = viewers[m.component];
		let path = `/${m.component}`;
		if (m.component === 'Home') {
			HomeComp = Comp;
			path = '*';
			m.props.appMenus = appMenus;
			homeState = m.props;
		 } 
		return <Route path={path} key={key} element={<Comp {...m.props} />} />;
		});
	// switches.push(<Route key="redirect" to={{ pathname: '/Home', state: homeState }} />);
	switches.push(<Route key="redirect" element={<HomeComp {...homeState} />} />);
  
	return (
		<Router>
			<div id="App" className="sm-navy w-100 h-100">
				<Header {...homeState} ></Header>
				<Routes>{switches}</Routes>
			</div>
		</Router>
	);
}

export default AppRouter;
