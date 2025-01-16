/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import  {useEffect, useState} from 'react';
import getTableColumns from './utils/getTableColumns';
import BaseSelectorMultiple from './BaseSelectorMultiple';
//import {getTableColumns} from '@sassoftware/restafedit'; 

function SelectColumns(props) {
  const {value, label, source, lib, table,onChange, _appContext} = props;
  
  const [list, setList] = useState(value||[]);

  const _handleChange = (selx) => {
    setSel(selx);
    onChange(selx);
  };
  const _setup = async () => {
    ;
    if (_appContext == null || source == null) {
      return [];
    }
    ;
    console.log(_appContext.getViyaConnection);
    let viyaSession = await _appContext.getViyaSession(source);
    console.log(viyaSession); 
    if (viyaSession === null) {
      return [];
    }
    let r = await getTableColumns(viyaSession.store, viyaSession.session, source, lib, table);
    return r;
  }

  useEffect(() => {
    _setup()
    .then (r => {
      setList(r);
      setSel(value||[]);
    })
    .catch(err => {
      console.log(err);
      setList([]);
      setSel([]);
    });
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [source, lib, table, value] );
    
  return <BaseSelectorMultiple
    name="columns"
    value={sel} 
    items={list} 
    onChange={_handleChange} 
   
    style={style}
    label={label}>
    </BaseSelectorMultiple>;

  };
  
export default SelectColumns;