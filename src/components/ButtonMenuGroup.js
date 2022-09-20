/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

function ButtonMenuGroup (props) {
  const { menus, onSelect } = props;

  const _select = (m) => {
    const flag = !menus[m].state;
    
    onSelect(m, flag);
  };

  const menu = [];
  for (const m in menus) {
    const c = menus[m];
    let t =
          <Button
            onClick={() => _select(m, false)}
            key={c.action}
            disabled={c.disabled}
            variant="text"
            color="primary"
            size="small"
        
          >
            {c.text}{' '}
          </Button>;
    menu.push(t);
  }
  let show = <ButtonGroup size="small">
              {menu}
             </ButtonGroup>
  return show;
}

export default ButtonMenuGroup;
