/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState, Fragment, useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import Warning from '@material-ui/icons/Warning';
import Error from '@material-ui/icons/Error';
import Info from '@material-ui/icons/Info';

import { casSetup, caslRun } from '@sassoftware/restaflib/dist/restaflib.js';
import helpers from '../helpers';
import { useLocation } from 'react-router-dom';
import FileSelectorButton from '../helpers/FileSelectorButton';
import { StoreMallDirectory } from '@material-ui/icons';
import ItemsListMenu from '../helpers/ItemsListMenu';





/**
 *
 * @param {         
    *
    * } props
    */ //these are set at the bottom of a file like ODS.js



function Mlpa (props) {

    let { store, classes } = props;
    let [ currentTab, setCurrentTab ] = useState(0);
    let [ computeInfo, setComputeInfo ] = useState({
        session: null,
        result : null,
        fname  : null,
        msgText: null,
        msgIcon: null,
        caslib : 'Public',

    })


    let location = useLocation();
    let { initialTab, tabs } = location.state;

    let currentInfo = useRef(null);
      
    let tabsBar = tabs.map((t, i) => {
        return <Tab label={t.label} value={i} key={i} className={classes.tab} />;
    });


    const _tabView = () => {
          
        let tabn = currentTab === -1 ? initialTab : currentTab;
        let V = computeInfo.result !== null ? helpers[ tabs[ tabn ].component ] : helpers[ 'NoData' ];
        let MsgIcon = (computeInfo.msgIcon === 'warning') ? <Warning /> : (computeInfo.msgIcon === 'error') ? <Error /> : <Info />;
        let msgText = (computeInfo.msgText === null) ? 'Please select table to upload' : computeInfo.msgText;
        return <Fragment>
            <Button size="small" variant="outlined" color={computeInfo.msgIcon === 'error' ? 'secondary' : computeInfo.msgIon === 'warning' ? 'primary' : 'default'} className={classes.button}
                startIcon={MsgIcon}>{msgText}</Button>
                  <V {...props} computeInfo={computeInfo} />
               </Fragment>;
    };

    const _tabSelection = (ev, newValue) => {
        setCurrentTab(newValue);
    };

    /*
    const _getCollections = async () => {
        let { mlPipelineAutomation } = await store.addServices('mlPipelineAutomation');
        let projects = await store.apiCall(mlPipelineAutomation.links('collection'));
        console.log(JSON.stringify(projects.itemsList(), null, 4));
        return true;
    
    }
    */

   

    useEffect(() => {
        casSetup(store, null)
            .then((r) => {
                setComputeInfo({ session: r.session, result: null, msgText: null, msgIcon: null, fname: null });
                currentInfo.current = r.session;
            })
            
            .catch((err) => {
                alert(err);
            });

        return () => {
            let session = currentInfo.current;
            currentInfo.current = null;
            if (session != null) {
                return session.links('delete');
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);





    function showAlert (err) {
        console.log(err);
        alert((typeof err === 'object')
               ? JSON.stringify(err,null, 4)
               : err) ;
    }



    const _upload = (src, name) => {

        let [fileName, type] = name.split('.');

        let JSON_Parameters =  {
            casout: {
                caslib: computeInfo.caslib, /* a valid caslib */
                name  : fileName, /* name of output file on cas server */
            },

            importOptions: {
                fileType: type, /* type of the file being uploaded */
            },
        };
        ;
        let payload = {
            action: 'upload',
            data: src,
            headers: {
                "JSON-Parameters": JSON.stringify(JSON_Parameters)
            }
        }
        ;
        
        store.runAction( computeInfo.session, payload )
            .then ( r => {
                let t = {...computeInfo};
                t.result = r;
                setComputeInfo(t);
            })
            .catch (err => showAlert(err))

    }

    let show =
        <div>
            <AppBar position="static">
                <Paper square>
                    <Tabs value={currentTab} onChange={_tabSelection} indicatorColor="primary"
                        textColor="primary">
                        {tabsBar}
                    </Tabs>
                </Paper>
            </AppBar>
            {_tabView()}
            <Fragment>
                <FileSelectorButton label="Upload table" onSelect={_upload} classes={classes}></FileSelectorButton>
            </Fragment>
            {computeInfo.result !== null ? JSON.stringify(computeInfo.result.items(),null,4) : null}
            
        </div>;
    return show;
}
	



export default Mlpa;
