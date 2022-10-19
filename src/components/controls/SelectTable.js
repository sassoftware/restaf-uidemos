/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {getTableList} from '@sassoftware/restafedit';

function SelectTable(props) {
  const {lib, refresh, browse, appEnv, cb} = props;
  const [tableList, setTableList]   = React.useState([]);
  const [value, setValue] = React.useState('');
  const _handleChange = (event) => {
    setValue(browse === true ? ' ' : event.target.value);
    if (cb != null) {
       cb(event.target.value);
    }
  };

  useEffect(() => {
     
    if (lib != null && lib.length > 0) {
      
      getTableList (lib, appEnv) 
        .then (r => {
          setTableList(r);
        })
        .catch (err => {
          setTableList(['No data was returned']);
        })
      };
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lib, refresh] );

  tableList.sort();
  const menuList = tableList.map( l => {
    return <MenuItem disabled={browse} value={l}>{l}</MenuItem>;
  })
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="tablelist">Tables</InputLabel>
        <Select
          labelId="tablelist"
          id="tablelist"
          value={value}
          label={"Current Tables"}
          onChange={_handleChange}
        >
          {menuList}
        </Select>
      </FormControl>
      </div>
  );
}
export default SelectTable;