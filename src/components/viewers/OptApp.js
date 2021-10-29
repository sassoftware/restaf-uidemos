/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useContext, useState, useRef, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../providers';
import SimpleDataForm from '../helpers/SimpleDataForm';
import { ComputerOutlined } from '@material-ui/icons';

function OptApp(props) {
	let { classes, store, restaflib } = props;
	let { computeSetup, computeRun, computeResults } = restaflib;
	let [message, setMessage] = useState('');
	let [jobInfo, setJobInfo] = useState({
		session: null,
		ods: '<h2>Select values and Submit</h2>',
		log: null,
		userInput: [
			{ name: 'Manufacturing_Cost', value: 0, label: 'Manufacturing Cost', type: 'number' },
			{ name: 'List_Price', value: 0, label: 'List Price', type: 'number' },
			{ name: 'Total_Period', value: 0, label: 'Total Period', type: 'number' },
			{ name: 'elasticity', value: 1.0, label: 'Elasticity', type: 'number' },
			{ name: 'Inventory_Cost', value: 1.0, label: 'Inventory Cost', type: 'number' },
			{ name: 'Initial_Stock', value: 1.0, label: 'Initial_Stock', type: 'number' },
		],
	});

	let currentSession = useRef(null);

	let sascode = `ods html style=barrettsblue;
  proc optmodel;
var Discount init &List_Price >= 0;
var Promotion_period init &Total_Period >= 0;
number a, List_Price, Manufacturing_cost, Total_Period, elasticity,Initial_Stock,Inventory_cost,Cost_Retailer_Regular, Cost_Retailer_Promotion, Price_Consumer_Regular, Price_Consumer_Promotion, Demand_Regular, Demand_Promotion, Retailer_Profit; 
a = 5000; &List_Price.;&Manufacturing_cost.; 
&Total_Period.; &elasticity.;&Initial_Stock.;&Inventory_cost.; 

con &List_Price.-Discount >=0.01,
&Total_Period. >=Promotion_period;

max f = (((a*(&List_Price.-Discount-&Manufacturing_cost.)*Promotion_period*(((&List_Price.-Discount)*(&elasticity./(&elasticity.+1)))**(&elasticity.)))+(a*(&List_Price.-&Manufacturing_cost.)*(&Total_Period.-Promotion_period)*((&List_Price.*(&elasticity./(&elasticity.+1)))**(&elasticity.))))-(((((2*&Initial_Stock.)-((a*(&elasticity./(&elasticity.+1))**(&elasticity.))*((((&List_Price.-Discount)**&elasticity.)*Promotion_period)+((&List_Price.**&elasticity.)*(&Total_Period.-Promotion_period)))))/2)*&Inventory_cost.*&Total_Period.)));
con nlc1: (a*Promotion_period*(((&List_Price.-Discount)*(&elasticity./(&elasticity.+1)))**(&elasticity.))*(((&List_Price.-Discount)*(&elasticity./(&elasticity.+1)))-(&List_Price.-Discount)))+(a*(&Total_Period.-Promotion_period)*((&List_Price.*(&elasticity./(&elasticity.+1)))**(&elasticity.))*(&List_Price.*(&elasticity./(&elasticity.+1))-&List_Price.)) >= 347.02,
nlc2: ((a*(&elasticity./(&elasticity.+1))**(&elasticity.))*((((&List_Price.-Discount)**&elasticity.)*Promotion_period)+((&List_Price.**&elasticity.)*(&Total_Period.-Promotion_period))))<=&Initial_Stock.;  
solve;

Cost_Retailer_Regular=&List_Price.
Cost_Retailer_Promotion=&List_Price.-Discount
Price_Consumer_Regular=(&elasticity./(&elasticity.+1))* Cost_Retailer_Regular
Price_Consumer_Promotion=(&elasticity./(&elasticity.+1))* Cost_Retailer_Promotion
Demand_Regular=a*(Price_Consumer_Regular**&elasticity.)
Demand_Promotion=a*(Price_Consumer_Promotion**&elasticity.)
Retailer_Profit=(( Price_Consumer_Regular- Cost_Retailer_Regular)* Demand_Regular*(&Total_Period.-Promotion_Period))+(( Price_Consumer_Promotion- Cost_Retailer_Promotion)*Promotion_Period* Demand_Promotion)

print Discount Promotion_period ;
print Cost_Retailer_Regular Cost_Retailer_Promotion;
print Price_Consumer_Regular Price_Consumer_Promotion;
print Demand_Regular Demand_Promotion;
print Retailer_Profit;


quit;
ods html close;
`;

	useEffect(() => {
		return () => {
			let session = (currentSession.current = null);
			currentSession.current = null;
			if (session != null) {
				session.links('delete');
			}
		};
	}, []);

	const _onSubmit = (inputValues) => {
		_runCode(inputValues)
			.then((newJob) => {
				setJobInfo(newJob);
			})
			.catch((err) => {
				alert(err);
			});
	};

	const _runCode = async (inputValues) => {
		let macros = {};
		inputValues.forEach((v) => {
			macros[v.name] = v.value;
		});

		setMessage('...running');
		let session = jobInfo.session;
		if (session === null) {
			session = await computeSetup(store, null, null);
			currentSession.current = session;
		}

		let computeInfo = await computeRun(store, session, sascode, macros, 'wait', 2);
		
		console.log(computeInfo.SASJobStatus);
		let ods = await computeResults(store, computeInfo, 'ods');
		let log = await computeResults(store, computeInfo, 'log');

		
		let newJob = { session: session, ods: ods, log: log, userInput: inputValues };
		setMessage(null);
		return newJob;
	};

	let html = { __html: jobInfo.ods };

	let show = (
		<div className={classes.divmargin}>
			<Fragment>
				{/* <pre>{JSON.stringify(state.desc, null, 4)}</pre> */}
				<SimpleDataForm
					title={'Enter Values and Submit'}
					data={jobInfo.userInput}
					classes={classes}
					onSubmit={_onSubmit}
				/>
			</Fragment>
			{jobInfo.ods !== null ? (
				<Fragment>
					<div dangerouslySetInnerHTML={html}></div>
				</Fragment>
			) : null}
			{jobInfo.log !== null ? (
				<pre>
					{JSON.stringify(jobInfo.log, null, 4)}
				</pre>
			) : null}
			<Fragment>{message}</Fragment>
		</div>
	);
	return show;
}

export default OptApp;
