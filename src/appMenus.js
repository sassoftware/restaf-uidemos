
/*
* Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

let appMenus =  [
	{
		component: 'Home',
		text     : 'Introduction',
		hide     : false,
		props    : {
			text     : 'Introduction',
			title    : 'AI Assistant for SAS Viya	using Openai and Azureai Assistant API',
			homePage : 'https://localhost:8080/assistantapi/README.md'
		},
	},
	{
	
		component: 'OptApp',
		hide: true,
		props: {
			text: 'Promotion optimization App',
			
			three: 3,
		}
	},
	
	{
		component: 'MasModel',
		hide: true,
		props    : {
			text : 'Car Auction',
			models: [
				{
				 label: 'Car Auction',
				 name : 'mfgCarAuction1_0',
				 viewData: {
					 make_     : {label: 'Make of Car', viewType: 'select', value: 'FORD', selections: ['FORD', 'BMW', 'LEXUS', 'PRIUS']},
					 mileage_  : {label: 'Mileage', value :10000,  viewType: 'slider', min:5000, max: 50000},
					 num_vehicles_  : {label: 'No. of similar vehicles',   value :10,  viewType: 'slider', min:0, max: 20},
					 quality_: {label: 'Quality of vehicles', value :5.0, viewType: 'slider', min:0, max:10}
					 },
				 target: {
					 name     : 'OFFER',
					 threshold: 'NO OFFER'

				 }
			 }
		  ]
		}
	},
	
	{
		component: 'CommonViewer',
		hide: true,
		props    : {
			text      : 'Browse MAS models and Score',
			initialTab: 0,
			tabs      : [ { label: 'Mas Model', component: 'MasList' } ],
		},
	},
	{
        component: 'CommonViewer',
				hide: true,
        props: {
            text: 'Pipeline Management',
            service: 'mlPipelineAutomation',
            initialRel: 'collection',
            tabs: [
                { label: 'View Projects', component: 'ViewPipelines' },
                { label: 'Create Project', component: 'CreatePipeline' },
                { label: 'View MAS Modules', component: 'ViewMas', service: "microanalyticScore", initialRel: 'modules' },
            ]
        },
    },
	{
		component: 'Casl',
		hide: true,
		props    : {
			text      : 'Import and Run Casl Code',
			initialTab: 0,
			tabs      : [ { label: 'Results', component: 'CaslResult' } ],
		},
	},
	{
		component: 'ComputeService',
		hide: true,
		props    : {
			text      : 'Import and Run SAS Program',
			initialTab: 0,
			tabs      : [
				{ label: 'ODS', type: 'ods', component: 'ODS' },
				{ label: 'Log', type: 'log', component: 'LogList' },
			],
		},
	},
	{
		component: 'PlaceHolder',
		hide: true,
		props    : {
			text : 'Describe Viewer Props',
			three: 3,
		},
	},
	{
		component: 'SASAssistant',
			// hide: true,
			props    : {
				text : 'SASAssistant(openai)',
				provider: 'openai',
				source: 'cas'
			},
		},
		{component: 'SASAssistant',
		// hide: true,
		props    : {
			text : 'SAS Assistant(azure)',
			provider: 'azureai',
			source: 'cas',
			addrunsas: true
		},
	},
	{
		component: 'SASAssistant',
			// hide: true,
			props    : {
				text : 'SASAssistant(openai)(compute)',
				provider: 'openai',
				source: 'compute'
			},
		},
		{component: 'SASAssistant',
		// hide: true,
		props    : {
			text : 'SAS Assistant(azure)(compute)',
			provider: 'azureai',
			source: 'compute'
		},
	},
	{
		component: 'SimpleDataFormTest',
		hide: true,
		props    : {
			text : 'Test Data form',
			three: 3,
		},
	},
	{
		component: 'JobManager',
		hide     : true,
		props    : {
				text: 'Job Manager'
		}
    }
];
export default appMenus;
