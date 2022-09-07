/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

function ButtonMenuBar (props) {
  const { menus, onSelect } = props;

  const _select = (m) => {
    const flag = !menus[m].state;
    
    onSelect(m, flag);
  };

  const menu = [];
  for (const m in menus) {
    const c = menus[m];
    let t;
    
    if (c.component === 'Switch') { /* here as a sample */
      t = (
        <Grid item key={c.text}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={m.state}
                  color="primary"
                  onChange={() => _select(m, false)}
                />
              }
              label={c.text}
            />
          </FormGroup>
        </Grid>
      );
    } else {
      t = (
        <Grid item key={c.text}>
          <Button
            onClick={() => _select(m, false)}
            key={c.action}
            disabled={c.disabled}
            variant="contained"
            color="primary"
            size="small"
          >
            {c.text}{' '}
          </Button>
          <Divider orientation="vertical" flexItem />
        </Grid>
      );
    }
    menu.push(t);
  }

  return (
    <Fragment>
      <Grid container key={'buttonMenu'} spacing={2} direction="row">
        {menu}
      </Grid>
    </Fragment>
  );
}

export default ButtonMenuBar;
