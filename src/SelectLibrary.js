/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {useEffect, useState} from 'react';
import BaseSelector from './BaseSelector';
import {getLibraryList} from '@sassoftware/restafedit';

function SelectLibrary(props) {
  const {name, value, style, label,onChange, eProps, designMode, _userProps} = props;
  const {source, session} = _userProps;
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
      getLibraryList(_userProps.viyaEnv)
        .then ( r => {
          setLiblist(r);
          if (source === 'cas' && value != null && value.toUpperCase() === 'CASUSER') {
            const index = r.findIndex (e => e.indexOf('CASUSER') >= 0 );
            if (index >= 0) {
              setSel(r[index]);
            }
          }
        })
        .catch(err => {
          console.log(err);
          setSel('');
          setLiblist([]);
        });
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);
  return <BaseSelector
    name={name}
    value={sel} 
    items={liblist} 
    onChange={_handleChange} 
    designMode={designMode} 
    style={style}
    label={label}>
    </BaseSelector>;

  };
  
export default SelectLibrary;