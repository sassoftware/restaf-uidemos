/*
* Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

let appMenus = [
	{
		component: 'Home',
		text     : 'Introduction',
		hide     : true,
		props    : {
			text : 'Introduction',
			title: 'Default Applications',
		},
	},
	{
		component: 'Sample',
		text     : 'Sample for Documentation',
		hide     : false,
		props    : {
			text : 'Sample CAS',
			title: 'Sample CAS Application',
		},
	},
	{
		component: 'SampleCompute',
		text     : 'Sample for Documentation',
		hide     : false,
		props    : {
			text : 'Sample Compute',
			title: 'Sample Compute Application',
		},
	},
	{
		component: 'DataEditorDriver',
		hide     : false,
		props    : {
			text: 'Form Editing',

			source: 'cas',
			table : {caslib: 'casuser', name: 'testdata'},
			access: {},
			byvars: ['id'],

			cachePolicy: true,

			initialFetch: {
				count : 1,
				from  : 1,
				format: false
			},

			customColumns: {
				total: {
					Column         : "Total",
					Label          : "Grand Total",
					FormattedLength: 12,
					Type           : "double"
					}
			},
			customRows: [],

			secondaryTables: {
				offers: {caslib: 'public', name: 'product_offers'}
			},

			editControl: {
				handlers  : {}, 
				autoSave  : true, 
				handlerSet: 'testdata'
			},
			appData: {
				layout   : {},
				component: 'DataFormMulti',
				getViewer: null,

				form: {
				  defaultComponent: "InputEntry",
				  show            : ['id', 'total', 'x2', 'x1', 'x3'],
				  classes         : {},
				  title           : 'Editing data using forms',
				  visuals         : {
					x2: {
					  component: "Slider",
					  props    : {
						min  : 0,
						max  : 50,
						steps: 1,
					  },
					},
					total: {
					  props: {
						disabled: true,
					  },
					},
					id: {
						props: {
						  disabled: true,
						},
					  }
				  }
				}
			
			}
		}
			
	},
	{
		component: 'DataEditorDriver',
		hide     : false,
		props    : {
			text: 'Product Offering',

			source: 'cas',
			table : {caslib: 'public', name: 'product_master'},

			support: {
				company: {table: {caslib: 'public', name: 'customer_master'}, column: 'company', distinct: []},
				offers : {caslib: 'public', name: 'product_offers'}
			},
			access: {},
			byvars: ['id'],
	
			cachePolicy: true,

			initialFetch: {
				count : 200,
				from  : 1,
				format: false,
				where : ' '
			},

			customColumns: {
				total: {
					Column         : "Total",
					Label          : "Price",
					FormattedLength: 12,
					Type           : "double"
					}
			},

			editControl: {
				handlers  : {},
				save      : true,  
				autoSave  : false, 
				handlerSet: 'products'
		
			},
			appData: {
				layout   : {},
				component: 'TableEditor',
				getViewer: null,
				

				form: {
				  defaultComponent: "InputEntry",
				  show            : ['viya4_solutions', 'version','priceperuser','numberofusers','discount','total'],
				  sort            : ['viya4_solutions', 'version'],
				  title           : 'Product Offering',
				  visuals         : {
					total: {
					  props: {
						disabled: true,
					  },
					}
				  }
				}
			}
	}
}
];
export default appMenus;
