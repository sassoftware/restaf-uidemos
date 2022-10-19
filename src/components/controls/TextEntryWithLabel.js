/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Fragment } from 'react';

import OutlinedInput from '@mui/material/OutLinedInput';
import Grid from '@mui/material/Grid';

// import InputLabel from '@mui/material/InputLabel';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



function TextEntry (props) {
  const { details, onEnter, controlProps, rowIndex, classes } = props;
  let value = props.value;
  const disabled = (controlProps.disabled != null) ? controlProps.disabled : false;
  const key = details.name;

  const _onChange = (e) => {
    const synthE = {
      key   : e.key,
      rowIndex,
      target: {
        value: e.target.value,
        name : key
      }
    };
    onEnter(synthE);
  };

  /*
  const _onKeyPress = (e) => {
      const synthE = {
        key   : 'Enter',
        rowIndex,
        target: {
          value: e.target.value,
          name : key
        }
      };
      onEnter(synthE);
    };
  
  const _onBlur = (e) => {
    const synthE = {
      key   : 'Enter',
      rowIndex,
      target: {
        value: e.target.value,
        name : key
      }
    };
    onEnter(synthE);
  };
  */
  const inputProps = {
    inputMode : 'text',
   // onKeyPress: _onKeyPress,
  // onBlur    : _onBlur,
    style     : { textAlign: props.align }

  };
    // let className = (disabled === true) ? classes.inputDisabled : classes.input;
 
  

  const t =
    <Fragment>
      <Grid item xs={6} >
      <FormGroup>
         <FormControlLabel 
          control={
            <OutlinedInput
            key={`${key}_input`}
            id={key}
            value={value}
            type="text"
            className={classes.input}
            inputProps={inputProps}
            onChange={_onChange}
            disabled={disabled}
            size="small"
            name={details.name} />}
            label={details.Label}>
          </FormControlLabel>

      </FormGroup>  
      </Grid>   
    </Fragment>;

  return t;
}
export default TextEntry;
