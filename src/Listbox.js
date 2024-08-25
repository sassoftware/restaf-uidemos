/*
* Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

import React, { Fragment} from 'react';

import List from '@mui/joy/List';
import Sheet from '@mui/joy/Sheet';
import ListItemButton from '@mui/joy/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';


function ListMenu(props) {
  let { name, value, label, items, variant, color, onChange, sx, valueType, ...eProps } = props;
  
  const _handleChange = (v,i) => {
    if (v == null) {
      onChange(null);
    } 
    let r = (valueType == 'index') ? i.toString() : v;
    onChange(r);
    return;
  }
  
  let options = (items == null ? [] : Array.isArray(items) ? items : 
    (typeof items === 'string' ? items.split(',') : []));

    let newMenu = options.map((m, i) => {
      let ivariant = 'plain';
      let selected = false;
      let icolor = (color == null) ? 'primary' : color;
      if (m === value) {
        ivariant = (variant == null) ? 'solid': variant;
        selected = true;
      }
    
      return <ListItemButton key={m} selected={selected} color={icolor} variant={ivariant} onClick={(e) => _handleChange(m, i)}>
           {m} 
        </ListItemButton>
    })

  let isx = {maxHeight: '80%', margin: '2px', overflow: 'auto', borderRadius: 'sm'};
  if (sx != null) {
    isx = {...isx, ...sx};
  }
  let title = (label != null) ? label : (name != null) ? name : 'Select';
  let isx2 = {height: 'inherit', width: 'inherit'}
  let show =
    
      <Sheet
      variant="outlined"
      sx = {isx}
      >
        <ListSubheader>{title}</ListSubheader>
      <List sx={isx2}>
        {newMenu}
      </List>
      </Sheet>
   
  
  return show;
}


export default ListMenu;