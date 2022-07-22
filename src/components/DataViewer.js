/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {useState, Fragment} from 'react';
import {cellEdit, casUpdateRow, scrollTable} from '@sassoftware/restafedit';

function DataViewer (props) {
    const {appEnv}   = props;
    const [modFlag, setModFlag] = useState(true);
    const [status, setStatus] = useState(null);

    const _handleErrors = (err) => {
        setStatus({status: 2, msg: err});
    };

    // scroll based on pagination data from previous fetch
    const _onScroll = (direction) => {
        scrollTable (direction, appEnv) 
            .then (r => {
                setModFlag(!modFlag); 
                setStatus({status: 0, msg: null});
            })
            .catch(err => {
                _handleErrors(err);
            });
    };

    const _onEdit = (name, value, rowIndex, data) => {
        cellEdit (name, value, rowIndex, data, appEnv)
         .then (r => {
            setModFlag(!modFlag); 
            setStatus(null);
         })
         .catch(err => {
            _handleErrors(err);
            setStatus(err);
        });
         
    };

    // Save only modified rows
    // TBD: propagate messages to UI app
    const _onSave = (result) => {
        casUpdateRow(result, appEnv)
            .then((r) => {
                setStatus({status: 0, msg: r});
            })
            .catch((err) => setStatus({status: 2, msg: err}));
    };
    debugger;
    const V = appEnv.appControl.appData.getViewer(appEnv.appControl.appData);
    debugger;
    return (
            <Fragment>
                <V 
                    onEdit={_onEdit}
                    onScroll={_onScroll}
                    onSave={_onSave}
                    status={status}
                    appEnv={appEnv}
                />
            </Fragment>
        );
}
export default DataViewer;