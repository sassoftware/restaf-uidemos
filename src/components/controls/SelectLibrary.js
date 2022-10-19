/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {getLibraryList} from '@sassoftware/restafedit';

function SelectLibrary(props) {
  const {appEnv, lib, cb} = props;
  const { source } = appEnv;
  const [value, setValue] = React.useState(props.lib);
  const [liblist, setLiblist]   = React.useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
    cb(event.target.value);
  };

  useEffect(() => {
  
    getLibraryList(appEnv)
      .then ( r => {
        let t = lib;
        if (lib.toUpperCase() === 'CASUSER' && appEnv.source === 'cas') {
          const ind = r.find (e => e.indexOf('CASUSER') >= 0 );
          if (ind >= 0) {
            t = r[ind];
          }
          setValue(t);
        }
        setValue(t);
        setLiblist(r);
      })
      .catch(err => {
        setLiblist([]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lib] );
 
  liblist.sort();
  const menuList = liblist.map( l => {
    return <MenuItem value={l.trim()}>{l}</MenuItem>;
  });
  
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="liblist">{source === 'cas' ? "caslib" : "libref"}</InputLabel>
        <Select
          labelId="liblist"
          id="liblist"
          value={value}
          label={source === 'cas' ? "caslib": "libref"}
          onChange={handleChange}
        >
          {menuList}
        </Select>
        <FormHelperText>Select target library</FormHelperText>
      </FormControl>
      </div>
  );
}
export default SelectLibrary;