/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState, useRef } from 'react';
import { getTableList } from '@sassoftware/restafedit';
import BaseSelector from './BaseSelector';

function SelectTable(props) {
  const { name, value, lib, label, refresh, designMode, style, eProps, sharedProps, onChange } = props;
  
  const { appEnv } = sharedProps;
  const [tableList, setTableList] = useState([]);
  const [sel, setSel] = useState(value);
  let lastlib = useRef(null);
  const _handleChange = (selx) => {
    setSel(selx);
    onChange(selx);
  };
 
  
  useEffect(() => {
    
    const _setupList = async (lib) => {
      if (lib == null) {
        return [];
      }
      let tabList = await getTableList(lib, appEnv);
      return tabList;
    }
    if (lib == null) {
      setTableList([]);
      setSel('');
    } else if (refresh !== false || lastlib.current !== lib) {
      
      _setupList(lib)
        .then(r => {
          setTableList(r);
          if (lastlib.current !== lib) {
            setSel('');
          }
          lastlib.current = lib;
        })
        .catch(r => {
          
          setTableList([]);
          setSel('');
        })
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [name, lib, value, refresh, appEnv]);


  return <BaseSelector
    name={name}
    value={sel}
    items={tableList}
    onChange={_handleChange}
    designMode={designMode}
    style={style}
    eProps={eProps}
    label={label}>
  </BaseSelector>;
}
export default SelectTable;