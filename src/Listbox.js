/*
* Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

import React, { Fragment} from 'react';

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Sheet from '@mui/joy/Sheet';
import ListItemButton from '@mui/joy/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/joy/Typography';


function Listbox(props) {
  let { name, value, label, items, variant, color, onChange, sx, labelProp, valueType, ...eProps } = props;
  
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

  let isx = {  border: '1px',overflow: 'auto', borderRadius: '8px'};
  if (sx != null) {
    isx = {...isx, ...sx};
  }
  let title = (label != null && label.trim().length > 0) ? label : null;
  let isx2 = {height: 'inherit', width: 'inherit'}
  let lprop = (labelProp != null) ? {level: 'h4', sticky: true, ...labelProp} : {level: 'h4'}
  let show =
      <Sheet
      variant="outlined"
      sx = {isx}
      > 
      <ListItem nested>
        <ListSubheader {...lprop}>{title}</ListSubheader>
        <List>
         {newMenu}
         </List>
      </ListItem>
      </Sheet>

  return show;
}


export default Listbox;