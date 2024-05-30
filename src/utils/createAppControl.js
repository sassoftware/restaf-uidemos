/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import { setup, scrollTable, prepFormData} from '@sassoftware/restafedit';
import getConfigContent from './getConfigContent';
import configTemplate from './configTemplate';
import * as restaflib from '@sassoftware/restaflib';
import * as restafedit from '@sassoftware/restafedit';
import * as restaf from '@sassoftware/restaf';
//import samples from '../samples';

async function createAppControl(setupState, setupConfig, altState, viewType){
  
  let { store, source, lib, name, config, configFolder} = setupState;
  let appControl = null;
  let table = null;

  let sessionID = setupState.sessionID;
  if (setupConfig === true) {
    config = null;
    lib = null;
    name = null;
  }
  if (lib != null && name != null) {
    config = null;
  } 
  if (altState  != null) {
    appControl = altState.appControl;
    sessionID = altState.sessionID;
  } 
  else {
    
    if (config == null) { // no config, so create one
      if (setupConfig !== true) {
        if (lib == null || name == null) {
          // eslint-disable-next-line no-throw-literal
          throw 'ERROR: Missing table information. Please see console.'
        }
        table = {name: name};
        let tlib = (lib.indexOf('CASUSER') >= 0) ? 'casuser' : lib;
        if (source === 'cas') {
          table.caslib = tlib;
        } else {
          table.libref = tlib;
        }
      }
      appControl = configTemplate(source, table, setupConfig);
      appControl.formControl.width = setupState.width;
      appControl.formControl.height = setupState.height;
      // appControl.formControl.style = {height: setupState.height, width: setupState.width};
      appControl.computeContext = setupState.computeContext;
      appControl.casServerName = setupState.casServerName;
      appControl.serverContext = (setupState.source ==='cas') ? setupState.casServer : setupState.computeContext;
      appControl.byvars = (setupState.byvars != null) ? setupState.byvars: []
    //  appControl.initialFetch.qs.limit = 10;
      
      // start with a config
    } else  {
      
      appControl = await getConfigContent(store, configFolder, config, setupConfig,setupState.destination);
      
      if (appControl == null) {
        // eslint-disable-next-line no-throw-literal
        throw 'ERROR: Unable to find form.Please see console.'
      }
    }
  }
    appControl.user = setupState.user;/* needed for appInit */
    if (setupState.qs != null) {
      appControl.initialFetch.qs = {...appControl.initialFetch.qs, ...setupState.qs};
    }
    setupState.builtins.restaf = restaf;
    setupState.builtins.restafedit = restafedit;
    setupState.builtins.restaflib = restaflib;
  
    let appEnv;
    try {
       appEnv = await setup(setupState.logonPayload, appControl, sessionID, setupState.builtins, setupState.user, setupState.userFunctions, setupState.storeConfig);  
    } catch (err) {
      console.log(err);
      throw err;
    }
    
       debugger;
    appEnv.storeConfig = setupState.storeConfig;
    appEnv.frameName = setupState.frameName;
    appEnv.destination = setupState.destination;
    appEnv.workBench = setupState.workBench;
    appEnv.config = setupState.config;
    appEnv.gitConfig = setupState.gitConfig;
    appEnv.configFolder = setupState.configFolder;
    appEnv.gitDomain = setupState.gitDomain;
    appEnv.builtins = setupState.builtins; 
    appEnv.userFunctions = setupState.userFunctions; 
    appEnv.user = setupState.user;
    appEnv.logonPayload = setupState.logonPayload;
    appEnv.viyaConnection = setupState.logonPayload;
    appEnv.casServerName = setupState.casServerName;
    appEnv.computeContext = appControl.computeContext; // (setupConfig === true) ? appControl.computeContext: setupState.computeContext;
    appEnv.serverContext =   (appEnv.appControl.source ==='cas') ? appEnv.casServerName : appEnv.computeContext;
    
    // integrating with parent app
    
    appEnv.callbacks = setupState.callbacks;
    appEnv.workBench = setupState.workBench;
    if (setupState.workBench === 'YES') {
      await appEnv.store.addServices('compute');
    }else {
      await appEnv.store.addServices('folders', 'files', 'compute', 'reports', 'casManagement');
    }
    
    const _matchColumns = () => {
      let oldCols = appEnv.appControl.matchColumns;
      if (oldCols != null && oldCols.length > 0) {
        let nomatch = oldCols.filter(c => appEnv.state.columns[c] == null);
        if (nomatch.length > 0) {
          console.log(`The following columns are not present: ${nomatch}`);
          appEnv.appControl.viewerOptions.show = [];
        }
      }
    }
    debugger;
     
    if (appEnv.workBench === 'YES') {
      appEnv.source= 'compute';
      appEnv.appControl.initialFetch.qs.includeIndex = false;/* patch until resoled with compute folk */
    };

    if (setupConfig !== true && appEnv.table != null){
      debugger;
      await scrollTable('first', appEnv);
      _matchColumns();
    }  else {
      let r = await prepFormData(appEnv.state.cache,appEnv, false);
      appEnv.state.data = r.data;
      appEnv.state.columns = r.columns;
      appEnv.state.cache = r.cache;
      
    }
    
    // Final patchup of appEnv
    if (appEnv.appControl.viewType == null) {
      appEnv.appControl.viewType = (viewType === 'designtable' || viewType === 'table') ? 'viewtable' : 'form';
    }
   

    return appEnv;
    
  }

  // eslint-disable-next-line no-unused-vars
  
  
  export default createAppControl;




