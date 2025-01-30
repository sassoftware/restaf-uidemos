/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { useEffect, useState } from 'react';
import BaseSelector from './BaseSelector';
import { getLibraryList } from '@sassoftware/restafedit';

function SelectLibrary(props) {
  const { source, value, style, label, onChange, eProps, _appContext } = props;

  const [liblist, setLiblist] = useState([]);
  const [sel, setSel] = useState(value);


  const _handleChange = (selx) => {
    setSel(selx[0]);
    onChange(selx[0]);;
  };
  const _setup = async () => {
    ;
    if (_appContext == null || source == null) {
      setLiblist([]);
      return;
    }
  
    let viyaSession = await _appContext.getViyaSession(source);
    
    if (viyaSession === null) {
      setLiblist([]);
      return;
    }
    let {store} = viyaSession;
    try {
      let r = await getLibraryList(viyaSession, null);
      ;
      setLiblist(r);
      if (source === 'cas' && value != null && value.toUpperCase() === 'CASUSER') {
        const index = r.findIndex(e => e.indexOf('CASUSER') >= 0);
        if (index >= 0) {
          setSel(r[index]);
        }
      }
    }
    catch (e) {
      ;
      console.log(e)
      setLiblist([])
    }
    return;
  }
  useEffect(() => {
    _setup()
     .then (r => {console.log('ready')})
    .catch(err => {
      console.log(err);
      setLiblist([]);
      setSel('');
    });
    }, [value,source, _appContext]);

  return  <BaseSelector
    value={[sel]}
    items={liblist}
    onChange={_handleChange}
    valueType="label"
    style={style}
    label={label}>
  </BaseSelector>;

};

export default SelectLibrary;