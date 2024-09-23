/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { Input as JoyInput } from '@mui/joy';
import { FormLabel } from '@mui/joy';

function Input(props) {
  const { name, label, type, sx, designMode, onChange, ...eProps} = props;
  const [value, setValue] = useState(() => (props.value == null) ? ' ' : props.value);

  let disabled = (eProps.disabled == null) ? false : eProps.disabled;
  
  disabled = (designMode === true) ? true : disabled;
  let extendedProps = (eProps == null) ? {} : eProps;

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  const handleChange = (synthE) => {
    setValue(synthE.target.value);
   
    if (synthE.key === 'Enter') {
      onChange(synthE.target.value, synthE)
    }
  };

  const _onChange = (e) => {
    const synthE = {
      key: e.key,
      target: {
        value: e.target.value,
        name: name
      }
    };
    handleChange(synthE);
  };

  const _onKeyPress = (e) => {
    if (e.key === 'Enter') {
      const synthE = {
        key: 'Enter',
        target: {
          value: e.target.value,
          name: name
        }
      };
      handleChange(synthE);
    }

    return true;
  };

  let istyle = { ...sx };
  istyle.textAlign = (props.align == null) ? 'right' : props.align;

  const _onBlur = (e) => {
    const synthE = {
      key: 'Enter',
      target: {
        value: e.target.value,
        name: name
      }
    }
    handleChange(synthE);
    setValue(e.target.value);
    return true;
  };
  const _onFocus = (e) => {
    const synthE = {
      key: 'onFocus',
      target: {
        value: e.target.value,
        name: name
      }
    }
    handleChange(synthE);
    setValue(e.target.value);
    return true;
  };


  let inputProps = {
    inputMode: 'text',
    step: 'any',
    style: istyle,
    onKeyPress: _onKeyPress,
    onBlur: _onBlur,
    onFocus: _onFocus
  };
 
  let isx = { width: 'inherit', height: 'inherit', ...istyle };
  isx = {
    width: 'inherit', height: 'inherit',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: 8,
    ...istyle
  }

  let ePropsL = {
    //key: name,
    name: name,
    size: 'sm',
    readOnly: disabled,
    'aria-label': label,
    variant: "outlined",
    color: 'neutral',
    sx: { isx },

    slotProps: {
      input: inputProps
    },
    ...extendedProps


  };
  delete ePropsL.disabled;

  const t = <>
    <FormLabel key={name}>{label}</FormLabel>
    <JoyInput
      {...ePropsL}
      value={value}
      onChange={_onChange}
    ></JoyInput>
  </>;
  return t;
}
export default Input;
