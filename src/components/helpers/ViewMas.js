/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ItemsMenu from '../helpers/ItemsMenu';
import ItemsCmdMenu from '../helpers/ItemsCmdMenu';
import SummaryViewer from '../helpers/SummaryViewer';
import ChampionModelContent from '../helpers/ChampionModelContent';
import championModelNotes from '../lib/championModelNotes';
import { Paper } from '@mui/material';
// import restaflib from '@sassoftware/restaflib/dist/restaflib';
import ScoreForm from '../helpers/ScoreForm';
import SimpleDataForm from './SimpleDataForm';
import MasRun from '../helpers/MasRun';

/**
 *
 * @param {
 *
 * } props
 */

function ViewMas(props) {
    let { store, appOptions, restaflib, classes } = props;

    let location = useLocation();
    // let { service, initialRel } = location.state;
    let service = 'microanalyticScore'
    let initialRel = 'modules'
    let [appInfo, setAppInfo] = useState({
        result: null,
        index: 0,
        name: null,
        content: null,
        msgText: null,
        msgIcon: null,
        desc: null,
        masControl: null,
    });

    const _setUp = async () => {
        
        let r = await store.addServices(service); //adding the microanalyticScore service
        
        // r is {microanalyticScore: rafobject}
        // r.microanalyticScore  == r[service]
        //  js: t ={x:1, y:2}
        // t.x or t['x']
        let result = await store.apiCall(r[service].links(initialRel));
        
        let masControl = await restaflib.masSetup(store, []);
        // let d = result.items(result.itemsList(selected), 'data').toJS();
        return { result, masControl };
    }



    useEffect(() => {

        // let n = appInfo.result.itemsList(appInfo.index);
        // let n = appInfo.result.itemsList(appInfo.index);
        // let d = result.items(result.itemsList(selected), 'data').toJS();
        
        _setUp()
            .then((x) => {
                setAppInfo({ result: x.result, msgText: null, msgIcon: null, index: 0, content: null, masControl: x.masControl, desc: null })
            })
            .catch((err) => {
                alert(err);
            })
    }, [service]);

    const _onSelect = (result, index, name) => {
        let t = { ...appInfo };
        t.result = result;
        t.index = index;
        t.name = name;
        t.label = name;
        
        setAppInfo(t)
    }



    // setAppInfo(t);

    // let scenario = desc.map((m) => {
    //     m.value = 1.5;
    //     return m;


    //     let result = await restaflib.masRun(store, masControl, model, scenario, 'score');
    //     console.log(JSON.stringify(result, null, 4));
    //     // let masControl = await restaflib.masSetup(store, [name]);
    //     // 
    //     // let desc = restaflib.masDescribe(masControl, name, "execute");
    //     // 
    //     // console.log(desc);
    //     // return desc




    const _onSelectCmd = (rafLink, rel) => {
        let jobContext = {
            id: appInfo.result.itemsList(appInfo.index) + ' ' + rel,
            component: null
        };

        console.log(jobContext);

        if (rel === 'championModel') {
            store.apiCall(rafLink)
                .then(r => console.log(JSON.stringify(r.items(), null, 4)))
                .catch(err => alert(err))
        } else if (rel === 'publishChampionModel') {
            console.log(JSON.stringify(rafLink, null, 4));
            let p = {
                qs: {
                    action: 'publish',
                    destinationName: 'maslocal'
                },
                headers: {
                    Accept: "*/*"
                }
            };

            appOptions.runAndReport(rafLink, p, jobContext);
        } else if (rel === 'registerChampionModel') {
            
            console.log(JSON.stringify(rafLink, null, 4));
            let p = {
                qs: {
                    action: 'register',
                    destinationName: 'cas2'
                },
                headers: {
                    Accept: "*/*"
                }
            };
            appOptions.runAndReport(rafLink, p, jobContext);
        } else {
            alert(jobContext.id)
        }
    }



    let show = (
        <Fragment>
            { appInfo.result !== null ?
                <Grid container spacing={5} direction="row" alignContent='space-around'>
                    <Grid item xs={3}>
                        <ItemsMenu result={appInfo.result} selected={appInfo.index} showMenu={true} onSelect={_onSelect} {...props} />
                    </Grid>
                    {/* <Grid container direction='row'> */}
                    {/* <Grid item>
                            <Button key="something" className={classes.button} variant="contained" color="primary" onClick={_getInputs}>
                                Get Inputs
                            </Button>
                            <ScoreForm name={model} inputs={inputs} />
                        </Grid> */}
                    <Grid item >

                        <MasRun result={appInfo.result} index={appInfo.index} masControl={appInfo.masControl} {...props} />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction='column'>
                            {/* <Grid item>
                                    <SummaryViewer result={appInfo.result} selected={appInfo.index} {...props} />
                                </Grid> */}
                        </Grid>
                        {/* </Grid> */}

                        <Grid item xs={3}>
                            <ItemsCmdMenu spacing={3} result={appInfo.result} selected={appInfo.index} showMenu={true} onSelect={_onSelectCmd} {...props} />
                        </Grid>
                    </Grid>
                </Grid>
                : null}
        </Fragment>
    );
    return show;

}

export default ViewMas;