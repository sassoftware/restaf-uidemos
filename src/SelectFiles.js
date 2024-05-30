/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {useState, useEffect} from 'react';
import BaseSelector from './BaseSelector';

import getFolderUri from './utils/getFolderUri';
import getItemsList from './utils/getItemsList';

//TBD: need to skip this jump since this is just a simple wrapper
function SelectFiles(props) {
  const {name, value, label, eProps, style, designMode, folder, filter, onChange, sharedProps} = props;
  const [list, setList] = useState([]);
  const [sel, setSel] = useState('');
  const {appEnv} = sharedProps;
 // let value = (refresh  === true) ? null : value;

  const _handleChange = (selx) => {
    setSel(selx);
    onChange(selx);
  };
  
  
 
  useEffect (() => {
    const setupCall = async () => {
      let folderUri = await getFolderUri(appEnv.store, folder);
      let tfilter = (filter == null) ? {} : {...filter};
      tfilter.documentType = 'fseditconfig';
      if (folderUri != null) {
        tfilter.parentUri = folderUri;
      }
      let r = await getItemsList(appEnv, 'files', 1000, tfilter);
      return r;
    }
    
    setupCall()
      .then (r => {
        setList(r);
        setSel(r.length === 0 || value == null || value.trim().length === 0 ? null : value);
      })
      .catch(err => {
        console.log(err);
        setSel(null);
        setList([]);
      })
    }, [appEnv, value, folder, filter] );

    return <BaseSelector 
        name={name}
        value={sel} 
        items={list} 
        onChange={_handleChange} 
        designMode={designMode} 
        style={style}
        eProps={eProps}
        label={label} >
      </BaseSelector>;

}
export default SelectFiles;