/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import  { useEffect, useState, useRef } from 'react';
import { getTableList } from '@sassoftware/restafedit';
import BaseSelector from './BaseSelector';

function SelectTable(props) {
  const { name, value, lib, label, refresh, designMode, style, eProps, _appContext, onChange } = props;
  const [tableList, setTableList] = useState([]);
  const [sel, setSel] = useState(value);
  let lastlib = useRef(null);
  const _handleChange = (selx) => {
    setSel(selx);
    onChange(selx);
  };

  
  
  useEffect(() => {
    

    const _setupList = async (lib) => {
      if (lib == null || _appContext == null || _appContext.viyaEnv == null) {
        return [];
      }
      let tabList = await getTableList(lib, _appContext.viyaEnv);
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
   }, [name, lib, value, refresh, _appContext]);


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