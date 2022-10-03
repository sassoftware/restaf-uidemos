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

function SelectTable(props) {
  const {currentLib, appEnv, cb} = props;
  const {store, session, servers, source} = appEnv;
  const [value, setValue] = React.useState(source === 'cas' ? appEnv.table.caslib : appEnv.table.libref);
  const [liblist, setLiblist]   = React.useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
    cb(event.target.value);
  };

  useEffect(() => {
    
    const getLibrefs = async () => {
      const p = {
        qs: {
          start: 0,
          limit: 1000
        }
      }
      const r = await store.apiCall(session.links('librefs'), p);
      return r;
    }
    const getCaslibs = async () => {
      const p = {
        qs: {
          start: 0,
          limit: 1000
        }
      }
      
      const rafLink = servers.itemsCmd(servers.itemsList(0),'caslibs');
      const r = await store.apiCall(rafLink, p);
      return r;
    }

    const getFunc =  (appEnv.source === 'cas') ? getCaslibs : getLibrefs;
    getFunc()
      .then ( r => {
        const libs = r.itemsList().toJS();
        console.log(libs)
        setLiblist(libs);
      })
      .catch(err => {
        console.log(err);
        setLiblist(['Failed to get list']);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );
 
  const menuList = liblist.map( l => {
    return <MenuItem value={l}>{l}</MenuItem>;
  })
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
export default SelectTable;