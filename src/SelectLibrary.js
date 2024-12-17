/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { useEffect, useState } from 'react';
import BaseSelector from './BaseSelector';
import { getLibraryList } from '@sassoftware/restafedit';

function SelectLibrary(props) {
  const { source, value, style, label, onChange, eProps, designMode, _appContext } = props;

  const [liblist, setLiblist] = useState([]);
  const [sel, setSel] = useState(value);


  const _handleChange = (selx) => {
    setSel(selx);
    onChange(selx);
  };
  const _setup = async () => {
    debugger;
    if (_appContext == null) {
      setLiblist([]);
      return;
    }
    debugger;
    console.log(_appContext.getViyaConnection);
    let viyaSession = await _appContext.getViyaSession(source);
    console.log(viyaSession); 
    if (viyaSession === null) {
      setLiblist([]);
      return;
    }
    let {store} = viyaSession;
    try {
      debugger;
      console.log(viyaSession);
      let r = await getLibraryList(viyaSession, null);
      debugger;
      setLiblist(r);
      if (source === 'cas' && value != null && value.toUpperCase() === 'CASUSER') {
        const index = r.findIndex(e => e.indexOf('CASUSER') >= 0);
        if (index >= 0) {
          setSel(r[index]);
        }
      }
    }
    catch (e) {
      debugger;
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

  return <BaseSelector
    value={sel}
    items={liblist}
    onChange={_handleChange}
    designMode={designMode}
    style={style}
    label={label}>
  </BaseSelector>;

};

export default SelectLibrary;