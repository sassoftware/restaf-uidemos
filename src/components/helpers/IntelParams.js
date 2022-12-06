/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState, useLocation } from 'react';
import Grid from '@mui/material/Grid';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Button } from '@mui/material';

import EventIcon from '@mui/icons-material/Event';
import ContinuousSlider from './ContinuousSlider';
import SettingsIcon from '@mui/icons-material/Settings';




function IntelParams (props) {
  
  const { onInput, classes } = props;

  const [ inputs, setInputs ] = useState(props.inputs)

  const onInputi = (name, value) => {
    let t = {...inputs};
    t[name] = value;
    setInputs(t);
  }

  const onSimulate = () => {
    onInput(inputs);
  }


  let inputItems = props.inputs.map(item => {
    return (
        <Grid item xs>
              <Typography className={classes.title2} color="textPrimary" gutterBottom>
                  {item.label}
                  </Typography>
                  <TextField id={item.id} label={item.label} variant="outlined" value={item.value} required onChange={(e) => onInputi(item.name,e.target.value)}/> <FilterListIcon fontSize="large"/>
        </Grid>
    )

  })

    return (
      <div className={classes.root}>
        <Grid justify="center" container spacing={3}>
          {inputItems}
        </Grid>
        <Button variant="contained" color="primary" onClick={() => onSimulate()}>Simulate</Button>
      </div>
    )
  }

export default IntelParams;


