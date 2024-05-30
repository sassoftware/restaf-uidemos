/*
* Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState, } from 'react';

import getItemsList from './utils/getItemsList';
import BaseSelector from './BaseSelector';

function SASItemsDropDown(props) {
  let { name, service, value, count, label, filter, onChange, style, eProps,sharedProps } = props;
  let { appEnv, designMode} = sharedProps;

  const [menuList, setMenuList] = useState([]);
  const [sel, setSel] = useState('');
  
  useEffect(() => {
    
    getItemsList(appEnv, service.trim(), count, filter)

      .then(r => { 
        
        setMenuList(r);
        if (value !== undefined && value !== null && value !== '' && r.includes(value)) {
          setSel(value);
        } else {
          setSel(null);
        }
        
      })
      .catch(err => {
        console.log(err);
        setSel('');

      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, name, service, filter]);

  const _handleChange = (val) => {
    setSel(val);
    onChange(val);
  }
  
  return <BaseSelector
    name={name}
    label={label}
    value={sel}
    onChange={_handleChange}
    items={menuList}
    designMode={designMode}
    style={style}
    eProps={eProps}>
    </BaseSelector>
};

export default SASItemsDropDown;