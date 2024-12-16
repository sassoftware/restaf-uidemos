/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import  { useEffect, useState, useRef } from 'react';
import { getTableList } from '@sassoftware/restafedit';
import BaseSelector from './BaseSelector';

function SelectTable(props) {
  const { value, lib, label, refresh, designMode, style, eProps, _appContext, onChange } = props;
  const [tableList, setTableList] = useState([]);
  const [sel, setSel] = useState(value);
  let lastlib = useRef(null);
  const _handleChange = (selx) => {
    setSel(selx);
    onChange(selx);
  };

  
  const _setup = async () => {
    if (_appContext != null) {
      setLiblist([]);
      return;
    }
    if (lib == null) {
      setTableList([]);
      setSel('');
      return;
    }
    let viyaSession = await _appContext.getViyaSession(source);
    if (viyaSession === null) {
      setLiblist([]);
      setSel('');
      return;
    }
    try {
      let r = await getTableList(lib, viyaSession);
      setTableList(r);
      if (lastlib.current !== lib) {
        setSel('');
      }
    }
    catch (r) {
      setLiblist([]);
      setSel('');
    }
    return;
  }
  useEffect(() => {
    _setup() 
    .then (r => {console.log('ready')})
    .catch(err => {
      console.log(err);
      setTableList([]);
      setSel('');
    });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [lib, value, source, refresh, _appContext]);


  return <BaseSelector
  
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