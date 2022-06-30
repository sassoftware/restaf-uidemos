/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// TBD: change incoming data from array to object to avoid all the transformations

import React, { useState, Fragment } from 'react';

import cellEditEvent from '../lib/cellEditEvent';
import casUpdateRow from '../lib/casUpdateRow';

function DataEditorVisual(props) {
    const {
        table,
        columns,
        tableForm,
        appEnv,
        onEdit,
        onSave,
        onScroll,
        selectEditor,
        appProps
    } = props;
    const currentForm = tableForm.form;
    const handlers = tableForm.handlers;
    const data = [].concat(props.data);
    const [modFlag, setModFlag] = useState(false);

    const _handleSelect = (e) => {
        const r = cellEditEvent(
            e,
            data[e.rowIndex],
            columns,
            handlers,
            appEnv,
            data
        );
        data[e.rowIndex] = r.data;
        // r.status handling
        setModFlag(!modFlag);
        onEdit(r.data, e.rowIndex);

        if (appProps.autoSave === true) {
            const w = {};
            currentForm.keys4Update.forEach((k) => {
                w[k] = r.data[k];
            });
            casUpdateRow(table, r.data, w, columns, appEnv)
                .then((r) => {
                    setModFlag(!modFlag);
                })
                .catch((err) => console.log(err));
        }
    };

    const _onSelect = (selection) => {
        switch (selection.action) {
            case 'up':
            case 'down': {
                onScroll(selection.action);
                break;
            }
            case 'save': {
                if (onSave !== null) {
                    onSave();
                }
                break;
            }
            default:
                break;
        }
    };

    // Now create the body of the table

    // const V = viewType === "table" ? TableEditorMui : DataFormMulti;
    const V = selectEditor(appProps.editor);

    let show = null;
    if (data !== null) {
        show = (
            <Fragment>
                <V
                    data={data}
                    columns={columns}
                    tableForm={currentForm}
                    onEdit={_handleSelect}
                    onselect={_onSelect}
                    onScroll={onScroll}
                    appProps={props.appProps}
                    appEnv={appEnv}
                    currentRow={props.currentRow}
                    nextRow={props.nextRow}
                />
            </Fragment>
        );
    }

    return show;
}

export default DataEditorVisual;
