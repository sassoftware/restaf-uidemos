/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import  {useEffect, useState} from 'react';
import getTableColumns from './utils/getTableColumns';
import BaseSelectorMultiple from './BaseSelectorMultiple';
import BaseSelector from './BaseSelector';
//import {getTableColumns} from '@sassoftware/restafedit'; 

function SelectColumns(props) {
  const {value, label, source, lib, multiple, table,onChange,sx, _appContext} = props;
  
  const [list, setList] = useState(value||[]);
  const [sel, setSel] = useState(value||[]);

  const _handleChange = (selx) => {
    setSel(selx);
    onChange(selx);
  };
  const _setup = async () => {
    ;
    if (_appContext == null || source == null) {
      return [];
    }
    
    let viyaSession = await _appContext.getViyaSession(source);

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
    }, [source, lib, table, value, multiple] );
  
  return (multiple === true) ?
   <BaseSelectorMultiple
    name="columns"
    value={sel} 
    items={list} 
    onChange={_handleChange} 
    valueType= "label"
    sx={sx}
    loadingText="Loading..."
    label={label}>
    </BaseSelectorMultiple>
    :
    <BaseSelector
      value={sel} 
      items={list} 
      onChange={_handleChange} 
      valueType= "label"
      sx={sx}
      loadingText="Loading..."
      label={label}>
    </BaseSelector>;


  };
  
export default SelectColumns;