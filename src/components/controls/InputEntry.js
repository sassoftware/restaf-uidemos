/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Fragment } from 'react';

import Input from '@mui/material/Input';
import { InputAdornment } from '@mui/material';
import {Typography} from '@mui/material';
import Grid from '@mui/material/Grid';

function InputEntry (props) {
  const { details, onEnter, controlProps, showLabel, rowIndex, classes } = props;
  let value = props.value;
  const disabled = (controlProps.disabled != null) ? controlProps.disabled : false;
  const key = details.name;

  const _onChange = (e) => {
    const synthE = {
      key   : e.key,
      rowIndex,
      target: {
        value: e.target.value,
        name : details.name
      }
    };
    onEnter(synthE);
  };

  const _onKeyPress = (e) => {
    if (e.key === 'Enter') {
      const synthE = {
        key   : 'Enter',
        rowIndex,
        target: {
          value: e.target.value,
          name : details.name
        }
      };
      onEnter(synthE);
    }
    return true;
  };
  const _onBlur = (e) => {
    const synthE = {
      key   : 'Enter',
      rowIndex,
      target: {
        value: e.target.value,
        name : details.name
      }
    };
    onEnter(synthE);
  };
  const inputProps = {
    inputMode : 'text',
    onKeyPress: _onKeyPress,
    onBlur    : _onBlur,
    style     : { textAlign: props.align }

  };
    // let className = (disabled === true) ? classes.inputDisabled : classes.input;
  console.log('input entry');
 // let ws = { width: details.Type === 'double'  ? "12ch" : "80%"};
  debugger;
  const width = details.FormattedLength.toString().trim() + 'ch';
  debugger;
  const t =
        <Grid container item>
          <Grid item xs={4} alignContent="left">
            <Typography>{details.name}</Typography>
          </Grid>
        <Grid item xs={8}>
        <Input 
            key={`${key}_input`}
            id={key}
            value={value}

            style={{width: width}}
            type="text"
            className={classes.input}
            inputProps={inputProps}
     
            onChange={_onChange}
            disabled={disabled}
            size="small"
            placeholder={details.Label}
            name={details.name}
            label={details.Label}
        />
        </Grid>
        </Grid>;

  return t;
}
export default InputEntry;
/*
 {showLabel === true
          ? <InputLabel key={details.name}
            htmlFor={key}>{details.Label}</InputLabel>
          : null}
          */