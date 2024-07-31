/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {useEffect, useState} from 'react';
import BaseSelector from './BaseSelector';
import {getLibraryList} from '@sassoftware/restafedit';

function IselectLibrary(props) {
  const {name, value, style, onChange, refresh, designMode,appEnv} = props;
  const {source, session} = appEnv;
  const [liblist, setLiblist] = useState([]);
  const [sel, setSel] = useState(value);

  const _handleChange = (selx) => {
    setSel(selx);
    onChange(selx);
  };
  useEffect(() => {
    
    if (source === 'compute' && session === null) {
      setLiblist([])
    } else {
      getLibraryList(appEnv)
        .then ( r => {
          setLiblist(r);
          if (source === 'cas' && value != null) {
            if (value.toUpperCase() === 'CASUSER') {
              const index = r.findIndex (e => e.indexOf('CASUSER') >= 0 );
              if (index >= 0) {
                setSel(r[index]);
              }
            }
          }
          // setValue((props.name.trim().length === 0) ? '-None Selected-' : props.name);
        
        })
        .catch(err => {
          console.log(err);
          setSel('');
          setLiblist([]);
        });
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.name, source, refresh] );
  return <BaseSelector 
    name={name}
    value={sel} 
    items={liblist} 
    onChange={_handleChange} 
    designMode={designMode} 
    style={style}
    label={source === 'cas' ? "caslib" : "libref"}>
    </BaseSelector>;

  };
  
export default IselectLibrary;