/*
* Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import  { useEffect, useState, } from 'react';

import getItemsList from './utils/getItemsList.js';
import BaseSelector from './BaseSelector';

function SASItemsDropDown(props) {
  let { name, service, value, limit, label, filter, onChange, style, _appContext } = props;
  const [menuList, setMenuList] = useState([]);
  const [sel, setSel] = useState('');
  
const _setup = async () => {
  if (_appContext == null) {
    setMenuList([]);
    setSel('');
    return;
  }
  ;
  let viyaSession = await _appContext.getViyaSession(null);

  if (viyaSession === null) {
    setMenuList([]);
    return;
  }
  let r = await getItemsList(viyaSession, service, limit, filter)
  setMenuList(r);   
  if (value !== undefined && value !== null && value !== '' && r.includes(value)) {
    setSel(value);
  } 
}
  useEffect(() => {
    _setup()
      .then (r => {console.log('ready')})
      .catch(err => {
         console.log(err);
         setSel
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, name, service, filter]);

  const _handleChange = (val) => {
    setSel(val[0]);
    onChange(val[0]);
  }
  
  return <BaseSelector
    name={name}
    label={label}
    value={[sel]}
    onChange={_handleChange}
    items={menuList}
    valueType="label"
    loadingText="Loading..."
    style={style}
    >
    </BaseSelector>
};

export default SASItemsDropDown;