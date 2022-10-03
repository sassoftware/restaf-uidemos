/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {useState, Fragment} from 'react';
import {cellEdit, scrollTable, saveTable, setWhere} from '@sassoftware/restafedit';
import PropTypes from 'prop-types';

function DataViewer (props) {
    const {appEnv, editor}   = props;
    const [modFlag, setModFlag] = useState(true);
    const [status, setStatus] = useState(null);

    const _handleErrors = (err) => {
        setStatus({status: 2, msg: err});
    };

    // scroll based on pagination data from previous fetch
    const _onScroll = (direction, payload, where) => {
        if (where !=  null) {
            setWhere(where, appEnv);
        }
        scrollTable (direction, appEnv, payload) 
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

    // Save the current table to disk
    // Useful only if autoSave is turned on, but will do it anyway
    // will replace the current version
    const _onSave = () => {
        
        saveTable(appEnv)
            .then((r) => {
                setStatus(r);
            })
            .catch((err) => setStatus({status: 2, msg: err}));
        
    };
    
    const V = editor();
    
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
DataViewer.propTypes = {
    /** Application control */
    appEnv: PropTypes.object.isRequired,
    /** user's component for editing     */
    editor: PropTypes.func.isRequired

};
export default DataViewer;
