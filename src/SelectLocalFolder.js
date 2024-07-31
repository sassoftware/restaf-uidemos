/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {useState} from 'react';
import getLocalFolder from './utils/getLocalFolder';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
function SelectLocalFolder(props) {
  let {value, label, style,dataProps,  onChange, ...eProps} = props;
  
  let [newFolder, setNewFolder] = useState(value != null && value.name != null ? value.name : '');
  const _onImport = () => {
    getLocalFolder(value)
    .then (r => {
      
      let {handle, name} = r;
      setNewFolder(name);
      onChange(dataProps.valueType === 'handle' ? handle : name);
      
    })
    .catch(e => {
      console.log(e);
    })
  }
  
  let show = (
          <div style={style}>
            <Input value={newFolder} label={label}
            endDecorator={
            <Button size="sm" key="openButtonform" variant="outlined" onClick={() => _onImport()}>
              Select Folder
            </Button>}
            />
          </div>
    );
  return show;
}
export default SelectLocalFolder;