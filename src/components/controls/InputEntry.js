/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Fragment } from 'react';

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

function InputEntry (props) {
  const { details, onEnter, controlProps, showLabel, rowIndex, classes } = props;
  let value = props.value;
  const disabled = (controlProps.disabled != null) ? controlProps.disabled : false;
  const key = details.name;

  let label = null;
  if (details.Type === 'double') {
    if (value == null || isNaN(value)) {
      value = ' ';
    }
    label = `${value} is incorrect`;
  };

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

  const _onKeyPress = (e) => {
    if (e.key === 'Enter') {
      const synthE = {
        key   : 'Enter',
        rowIndex,
        target: {
          value: e.target.value,
          name : key
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
        name : key
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
  
  const t =
    <Fragment>
        {showLabel === true
          ? <InputLabel key={details.name}
            htmlFor={key}>{details.Label}</InputLabel>
          : null}
        <Input
            key={`${key}_input`}
            id={key}
            value={value}
            type="text"
            className={classes.input}
            inputProps={inputProps}
            onChange={_onChange}
            disabled={disabled}
            size="small"
            placeholder={label}
            name={details.name}
            variant={disabled === true ? 'filled' : 'standard'}

        />
        </Fragment>;

  return t;
}
export default InputEntry;
