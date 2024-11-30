/*
* Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import  { useEffect, useState, } from 'react';

import getItemsList from './utils/getItemsList.js';
import BaseSelector from './BaseSelector';

function SASItemsDropDown(props) {
  let { name, service, value, limit, label, filter, onChange, style, designMode, _userProps } = props;
  const [menuList, setMenuList] = useState([]);
  const [sel, setSel] = useState('');
  
  useEffect(() => {
    if (_userProps != null && _userProps.viyaEnv != null) {
      getItemsList(_userProps.viyaEnv, service.trim(), limit, filter)

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
      }
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
    >
    </BaseSelector>
};

export default SASItemsDropDown;