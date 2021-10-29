/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, Fragment, useEffect } from 'react';
import uploadData from '../lib/uploadData';
import SimpleDataForm from './SimpleDataForm';


function CreatePipeline(props) {

    let { store, classes, restaflib, appOptions } = props;
    let { progress, onCompletion } = appOptions.jobStatus;
    let [submission, setSubmission] = useState(null);
    let [appInfo, setAppInfo] = useState({
        msg: null,
        userData: [{
            name: 'name',
            label: 'Pipeline Name',
            type: 'string',
            value: ' ',
        },
        {
            name: 'caslib',
            label: 'caslib',
            type: 'select',
            value: 'Public',
            selections: ['Public']
        },

        {
            name: 'tableName',
            label: 'Table Name',
            type: 'string',
            value: ' '
        },

        {
            name: 'file',
            label: 'Input Data',
            type: 'file',
            value: { name: ' ', src: null, file: null }
        },
        {
            name: 'targetVariable',
            label: 'Target',
            type: 'string',
            value: ' '
        }

        ]
    });

    const _setup = async () => {
        
        let { casManagement } = await store.addServices('casManagement', 'compute');
        let servers = await store.apiCall(casManagement.links('servers'));
        
        let serverName = servers.itemsList(0);
        let p = {
            qs: { limit: 100 }
        }
        let caslibs = await store.apiCall(servers.itemsCmd(serverName, 'caslibs'), p);
        
        let caslibList = caslibs.itemsList().toJS();
        return caslibList;
    }
    useEffect(() => {
        _setup()
            .then(r => {
                let appi = { ...appInfo };
                let c = appi.userData.find((row => row.name === 'caslib'));
                
                c.selections = r;
                setAppInfo(appi);
            })
            .catch(err => {
                alert(err);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const _createPipeline = async (newInfo, uri) => {
        
        let { mlPipelineAutomation } = await store.addServices('mlPipelineAutomation');
        let data = {
            "name": newInfo.name.trim(),
            "dataTableUri": uri,
            "type": "predictive",
            "pipelineBuildMethod": "automatic",
            "analyticsProjectAttributes": {
                "targetVariable": newInfo.targetVariable.trim(),
                "partitionEnabled": "false",
                "targetEventLevel": "1"
            },
            "settings": {
                "applyGlobalMetadata": "false"
            }
        }

        let p = {
            data: data
        };

        // eslint-disable-next-line no-unused-vars
        
        // eslint-disable-next-line no-unused-vars
        let jobContext = {
            id: `${newInfo.name} createPipeline`,
            component: null
        };
        // eslint-disable-next-line no-unused-vars
        let job = store.submit(mlPipelineAutomation.links('createProject'), p, 5, jobContext, onCompletion, progress);
        //let job = await store.apiCall(mlPipelineAutomation.links('createProject'),p)

        
        return data;
    }

    const _upload = (newData) => {
        

        let newInfo = {};
        newData.forEach(s => {
            newInfo[s.name] = s.value;
        });

        let f = newInfo.file;
        if (f.file === null) {
            alert('You must select a file');
        } else {
            let [fname, type] = f.name.split('.');
            if (['csv', 'xlsx', 'xls', 'sashdat', 'sas7bdat'].indexOf(type) === -1) {
                alert(`File type of f.name currently not supported`);
            } else {
                
                if (newInfo.tableName.trim().length > 0) {
                    fname = newInfo.tableName.trim();
                }
                uploadData(newInfo.caslib, fname, f.file, type, store)
                    .then((uri) => _createPipeline(newInfo, uri))
                    .then((r) => {
                        let t = { ...appInfo };
                        t.userData = newData;
                        t.msg = `${newInfo.name} is running. See Job Manager for list of completed jobs`;
                        setSubmission(r);
                    })
                    .catch(err => alert(err))
            }
        }
    }
    let t = [].concat(appInfo.userData);
    let msg = (submission !== null) ? <pre>{JSON.stringify(submission, null, 4)}</pre> : null;
    let show =
        <Fragment>
            <SimpleDataForm classes={classes} onSubmit={_upload} data={t} ></SimpleDataForm>
            {msg}
        </Fragment>

    return show;
}

export default CreatePipeline;
