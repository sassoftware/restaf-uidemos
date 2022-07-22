/* eslint-disable no-throw-literal */
/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState} from 'react';
import {setup, scrollTable} from '@sassoftware/restafedit';
import DataViewer from './DataViewer';

function DataEditor (props) {
    debugger;
    const { viyaConnection, appControl} = props;
    const [state, setState] = useState({});

    //
    // Keeping it simple - convert to suspense, lazy etc at some point
    //
    const initialize = async () => {
        debugger;
        let r = await setup(viyaConnection, appControl);
        await scrollTable('first', r);
        return r;
    };

    useEffect(() => {
        initialize()
            .then((r) => {
                setState(r);
            })
            .catch((err) => {
                throw new Error (JSON.stringify(err));
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let show = null;
    if (state.session != null) {
        show =
            <div id="page-wrap" key={Date()}>
                <DataViewer appEnv={state} key={state.id} />
            </div>;
    }
    return show;
}
DataEditor.propTypes = {
    /** Information to setup connection to Viya */
    viyaConnection: PropTypes.object.isRequired,

/** Information to setup application */
    appControl: PropTypes.object.isRequired,

};
export default DataEditor;
