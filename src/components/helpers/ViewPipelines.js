/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
import ItemsMenu from '../helpers/ItemsMenu';
import ItemsCmdMenu from '../helpers/ItemsCmdMenu';
import SummaryViewer from '../helpers/SummaryViewer';
import ChampionModelContent from '../helpers/ChampionModelContent';
import championModelNotes from '../lib/championModelNotes';

/**
 *
 * @param {
 *
 * } props
 */
function ViewPipelines(props) {
    let { store, appOptions, classes } = props;
    let location = useLocation();
    let { service, initialRel } = location.state;

    let [appInfo, setAppInfo] = useState({
        result: null,
        index: 0,
        name: null,
        content: null,
        msgText: null,
        msgIcon: null
    });
    // setting up this way to allow more setup calls as needed
    const _setup = async () => {
        let r = await store.addServices(service);
        console.log(r);
        debugger;
        let result = await store.apiCall(r[service].links(initialRel));
        console.log(result)
        return result;
    }

    const _onChampionContent = () => {
        championModelNotes(store, appInfo.result, appInfo.index)
            .then(r => {
                let t = { ...appInfo };
                t.content = r;
                setAppInfo(t);
            })
            .catch(err => {
                alert(err)
            })
    }
    useEffect(() => {
        debugger;
        _setup()
            .then((result) => {
                setAppInfo({ result: result, msgText: null, msgIcon: null, index: 0, content: null });
            })
            .catch((err) => {
                alert(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [service]);

    // driven on selection and on scroll
    const _onSelect = (result, index, name) => {
        let t = { ...appInfo };
        t.result = result;
        t.index = index;
        t.name = name;
        t.content = null;
        setAppInfo(t);
    }
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
            debugger;
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
    const _setButton = () => {
        let n = appInfo.result.itemsList(appInfo.index);
        let t = appInfo.result.itemsCmd(n, 'championModel') == null ? true : false;
        debugger;
        return t;
    }
    let show = (
        <Fragment>
            { appInfo.result !== null ?
                <Grid container spacing={3} direction="row">
                    <Grid item xs={3}>
                        <ItemsMenu result={appInfo.result} selected={appInfo.index} showMenu={true} onSelect={_onSelect} {...props} />
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction='column'>
                            <Grid item>
                                <Button key="something" className={classes.button} variant="contained" color="primary" disabled={_setButton()} onClick={_onChampionContent}>
                                    Notes
                         </Button>
                                <ChampionModelContent content={appInfo.content} />
                            </Grid>
                            <Grid item>
                                <SummaryViewer result={appInfo.result} selected={appInfo.index} {...props} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={3}>
                        <ItemsCmdMenu spacing={3} result={appInfo.result} selected={appInfo.index} showMenu={true} onSelect={_onSelectCmd} {...props} />
                    </Grid>
                </Grid>
                : null}
        </Fragment>
    );
    return show;
}

export default ViewPipelines;
