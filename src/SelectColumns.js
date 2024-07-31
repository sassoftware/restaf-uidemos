/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {useEffect, useState} from 'react';
import getTableColumns from './utils/getTableColumns';
import BaseSelectorMultiple from './BaseSelectorMultiple';
//import {getTableColumns} from '@sassoftware/restafedit'; 

function SelectColumns(props) {
  const {name, value, separator, style, label, lib, table,asArray, onChange, sharedProps} = props;
  const {appEnv, designMode} = sharedProps;
  let source = appEnv.source;
  const [list, setList] = useState([]);
  let sep = (separator == null) ? ' ' : separator;
  
  const [sel, setSel] = useState(() => {  
    if (value == null) {
      return [];
    } else if (typeof value === 'string') {
       return (value.length > 0) ? value.split(sep) : [];
    } 
    else if (Array.isArray(value) === true) {
      return value;
    }

  });
  debugger;
  const _handleChange = (selx) => {
    setSel(selx);
    onChange(asArray === true ?  selx: selx.join(sep) );
  };
  useEffect(() => {
    debugger;
    if (table == null || table.trim().length === 0 || lib == null || lib.trim().length === 0) {
      setList([]);
      setSel([]);
    } else {
      getTableColumns(appEnv.store, appEnv.session, source, lib, table)
        .then ( r => {
          setList(r);
          setSel([]);
          })
        .catch(err => {
          
          console.log(err);
          setSel([]);
          setList([]);
        });
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, source, lib, table] );
    
  return <BaseSelectorMultiple
    name={name}
    value={sel} 
    items={list} 
    onChange={_handleChange} 
    designMode={designMode} 
    style={style}
    label={label}>
    </BaseSelectorMultiple>;

  };
  
export default SelectColumns;