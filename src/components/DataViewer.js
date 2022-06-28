/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import DataEditorVisual from "./DataEditorVisual.js";
import fetchTableRows from "../lib/fetchTableRows";
import casUpdateRow from "../lib/casUpdateRow";

function DataViewer (props) {
	let { appProps, tableForm, selectEditor, appEnv} = props;
	const { useState, useEffect, useRef } = React;

	const [from, setFrom] = useState(props.from);
	const [result, setResult] = useState(null);
	const [columns, setColumns] = useState(null);
	// eslint-disable-next-line no-unused-vars
	const [keyList, setKeyList] = useState({});
	const [pagination, setPagination] = useState({});
	// eslint-disable-next-line no-unused-vars
	const [errors, setErrors] = useState(null);
	const [modFlag, setModFlag] = useState(true);
	
	let modified = [];

	let lastTable = useRef("");
	
	/* same as pagination structure */
	let ftable = `${appProps.table.caslib}.${appProps.table.name}`;
	let control = {
		table : {...appProps.table},
		from  : lastTable.current !== ftable ? props.from : from,
		count : appProps.count,
		where : appProps.where,
		format: appProps.format,
	};

	const _handleResults = (r) => {
        
		setErrors(null);
		setModFlag(0);
		setPagination(r.pagination);
		setKeyList(r.keyList);
		setColumns(r.columns);
		setResult(r.rowsObject);
		let ftable = `${appProps.table.caslib}.${appProps.table.name}`;
		if (lastTable.current !== ftable) {
			setFrom(appProps.from);
		}
		lastTable.current = ftable;
		setErrors(null);
	};

	const _handleErrors = (err) => {
		setErrors(err);
		setResult({});/* not clear what thebest way to handle this in an informative manner */
	};

	useEffect(() => {
		
		//
		// Only place where the data is read from CAS
		//
		
		fetchTableRows(control, tableForm, appEnv)
			.then(r => {	
				_handleResults(r);
			})
			.catch(err => {
				
				_handleErrors(err);
			});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [from, appProps.table.caslib, appProps.table.name, appProps.editor]);

	// scroll based on pagination data from previous fetch
	const _onScroll = (direction) => {
		
		//TBD: Add checks for modified rows */

		control = direction === "up" ? pagination.prev : pagination.next;
		setFrom(control.from);
		
	};

	// this is driven by the Editor on a change
	// can we save result locally?

	const _onEdit = (rowObject,rowIndex) => {
		
		let tResult = [].concat(result);
		tResult[rowIndex] = rowObject;
		setResult(tResult);

		let ind = modified.findIndex((m => m === rowIndex));
		if (ind === -1) {
			modified.push(rowIndex);
		}
		setModFlag(!modFlag);
	};

	// Save only modified rows
	// TBD: propagate messages to UI app
	const _onSave = () => {
		
		casUpdateRow(appProps.table, result, tableForm.form.keys4Update, modified, appEnv)
		.then (r  => {
			console.log('saved');
		})
		.catch (err => console.log(err));
		
	};

	
	let show = null;
	if (result != null) {	
		let recordKey = appProps.table.caslib + appProps.table.name + "/" + control.from.toString();

		show = (
			<div>
				
			  <DataEditorVisual
			    table={control.table}
				data={result}
				columns={columns}
				onSave={_onSave}
				onEdit={_onEdit}
				onScroll={_onScroll}
				currentRow={control.from}
				nextRow={pagination.next.from}
				tableForm={tableForm}
				recordKey={recordKey}
				appProps={appProps}
				selectEditor={selectEditor}
				appEnv={appEnv}
			/>
			</div>   			
		);
		}
	return show;
}
export default DataViewer;