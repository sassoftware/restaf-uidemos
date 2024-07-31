/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

import Box from '@mui/joy/Box';
import MoreVert from '@mui/icons-material/MoreVert';
import FirstPage from '@mui/icons-material/FirstPage';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import LastPage from '@mui/icons-material/LastPage';
import IconButton from '@mui/joy/IconButton';
import ButtonGroup from '@mui/joy/ButtonGroup';
import DropDownMenu from './DropdownMenu';
import WherePrompt from './WherePrompt';

function ScrollMenu (props) {
  const { menus, onSelect, where, groups} = props;
  const iconList = {
    first: <FirstPage size="small" />,
    last: <LastPage size="small"/>,
    next: <ChevronRight size="small" />,
    prev: <ChevronLeft size="small"/>,
    more: <MoreVert size="small"/>
  };

  const _select = (m) => {
    const flag = !menus[m].state;
    onSelect(m, flag);
  };
  const showGroups = (groups === null) ? {} : groups;
  
  const _dropDown = (m) => {
    onSelect(m, true);
  }
  const _where = (m) => {;
    onSelect('where', m);
  }
  const menu = [];
 // let direction =(orientation == null) ? "horizontal" : orientation;
  let sxb ={textTransform: 'capitalize',justifyContent: 'flex-start' };
  
  let rest ={};
  let scroll ={};
  for (const m in menus) {
    const c = menus[m];
    if (m === 'first' || m === 'last' || m === 'next' || m === 'prev' ){
     scroll[m] = c;
    } else {
     rest[m] = c;
    }
   
  }
  let p = {
    items: Object.keys(rest),
    style: {width: 'auto'},
    valueType: 'key',
    label: ''
  }
  if (showGroups.includes('dropdown') === true) { 
    menu.push(<DropDownMenu key="more" {...p} onChange={_dropDown} />);
  }
  if (showGroups.includes('scroll') === true) {
    for (const m in scroll) {
      const c = menus[m];
      
      let t =
            <IconButton
              onClick={() => _select(m, false)}
              key={m}
              disabled={c.disabled}
              sx={sxb}
              size="small" 
              variant="outlined"
            >
              {iconList[m]  }
            </IconButton>;
      menu.push(t);
    }
  }

  // let show = <ButtonGroup  key="buttongrid" sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}> {menu} </ButtonGroup>;
  let show = <Box display="flex" alignItems="start" justifyContent="left">
               <ButtonGroup  key="buttongrid" > {menu} </ButtonGroup>
               {showGroups.includes('where') === true ? <WherePrompt key="where"   value={where} onChange={_where} /> : null}
             </Box>
  return show;
}

export default ScrollMenu;
