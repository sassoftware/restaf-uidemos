/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

function ButtonMenuBar (props) {
  const { menus, onSelect } = props;

  const _select = (m) => {
    const flag = !menus[m].state;
    
    onSelect(m, flag);
  };

  const menu = [];
  for (const m in menus) {
    const c = menus[m];
    let t =
        <Grid item key={c.text}>
          <Button
            onClick={() => _select(m, false)}
            key={c.action}
            disabled={c.disabled}
            variant="text"
            color="primary"
            size="small"
        
          >
            {c.text}{' '}
          </Button>
          <Divider orientation="vertical" flexItem />
        </Grid>
    menu.push(t);
  }

  return menu;
}

export default ButtonMenuBar;
