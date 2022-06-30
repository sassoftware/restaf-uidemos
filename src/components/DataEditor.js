/* eslint-disable no-throw-literal */
/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * appProps (object) - app conntrol information
 * viyaConnection (object) - info settting up connection to Viya
 * tableForm (object) - form for this table
 * selecteditor (function) - function returns React framework component
 */
import React, { useEffect, useState } from 'react';
import setupConnections from '../lib/setupConnections';
import DataViewer from './DataViewer';

function DataEditor(props) {
    const { appProps, viyaConnection, tableForm, selectEditor } = props;
    const [state, setState] = useState({});

    useEffect(() => {
        setupConnections(viyaConnection)
            .then((r) => {
                setState(r);
            })
            .catch((err) => {
                throw { Error: JSON.stringify(err) };
            });
    }, [
        props.appProps.editor,
        props.appProps.table.caslib,
        props.appProps.table.name
    ]);

    let show = null;
    if (state.session != null) {
        show = (
            <div id='page-wrap' key={Date()}>
                <DataViewer
                    appProps={appProps}
                    selectEditor={selectEditor}
                    appEnv={state}
                    from={appProps.from}
                    tableForm={tableForm}
                />
            </div>
        );
    }
    return show;
}
export default DataEditor;
