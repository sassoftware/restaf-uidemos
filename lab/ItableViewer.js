/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {useEffect, useState, Fragment} from 'react';
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/style/ag-grid.css';
// import 'ag-grid-community/style/ag-theme-alpine.css';
import {setup, scrollTable} from '@sassoftware/restafedit';

function ItableViewer (props) {
  const {appControl, sessionID, logonPayload, refresh, style,edit, eProps} = props;
  const [appEnv, setAppEnv] = useState(null);
  // const columnDefs = Object.keys(data[0]) ;

  const getColumnDefs = (appEnv) => {
    const columns = appEnv.state.columns;
    let showColumns = [];
    let drop = (appEnv.appControl.viewerOptions.drop == null) ? [] : appEnv.appControl.viewerOptions.drop;
     if (appEnv.appControl.viewerOptions.show.length > 0) {
      showColumns = appEnv.appControl.viewerOptions.show.filter(c => columns[c] == null);
    } else {
      showColumns = Object.keys(columns).filter(c => {
         if (columns[c].internal === true) {
            return false;
         } else {
           return (drop.includes(c) !== true);
           };
      })
    };
    const columnDefs = showColumns.map(c => {
      let editable  = edit === true ? true : false;
      let colDef = {
        field: c,
        colId: c,
        editable: editable,
        sortable: true,
        cellStyle: {paddingRight: '5px'}
      };
      let type = columns[c].customType;
      if (type === 'number') {
        colDef.type = 'rightAligned';
      }
      return colDef;
    });
    return columnDefs;
  }
  const _readData = async ()=>{
    ;
    let appEnv = await setup(logonPayload, appControl, sessionID,  {}, ' ', {})  ;
    
    await scrollTable('first', appEnv);
    return appEnv;
  };
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
     
     _readData() 
      .then ( (appEnv) => {
        setAppEnv(appEnv);
      })
      .catch(err => {
        
        console.log(err);
        setAppEnv(null);
        ;
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appControl.table, refresh]);

  ;
  let sx ={height: '100%', width: '100%', borderStyle: 'solid', borderWidth: '1px', borderRadius: '8px', ...style};
  
  let show = (appEnv == null ) ? <Fragment><h2> Waiting on data</h2> </Fragment> :
       <div  {...eProps} style={sx} className={appControl.viewerOptions.agGridTheme}>
           <AgGridReact
               rowData={appEnv.state.data}

               columnDefs={getColumnDefs(appEnv)}>
           </AgGridReact>
       </div>;
  return show;
};
export default ItableViewer;