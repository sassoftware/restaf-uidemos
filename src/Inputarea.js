/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { Textarea } from '@mui/joy';

import { FormLabel } from '@mui/joy';
import { FormControl } from '@mui/joy';

function Inputarea(props) {
  const { name, label, type, style, designMode, onChange, minRows, maxRows} = props;

  const [value, setValue] = useState(() => (props.value == null) ? ' ' : props.value);
  let disabled = (props.disabled == null) ? false : props.disabled;
  disabled = (designMode === true) ? true : disabled;

  useEffect(() => {
    setValue(props.value == null ? ' ' : props.value);
  }, [props.value]);

  const handleChange = (synthE) => {
    setValue(synthE.target.value);
    if (synthE.key === 'Enter') {
      onChange(synthE.target.value, synthE)
    }
  };

  const _onChange = (e) => {
    const synthE = {
      key   : e.key,
      target: {
        value: e.target.value,
        name : name
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
  }
  const _onFocus = (e) => {
;
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

  let istyle = { ...style };
  istyle.textAlign = 'left';


  const _onBlur = (e) => {
    const synthE = {
      key: 'Enter',
      target: {
        value: e.target.value,
        name: name
      }
    }
    handleChange(synthE);
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
  isx = { width: 'inherit', height: 'inherit', ...istyle }
  let ePropsL = {
    name: name,
    size: 'md',
    readOnly: disabled,
    label: label,
    variant: "outlined",
    minRows: (minRows == null) ? 2 : minRows,
    maxRows: (maxRows == null) ? 5 : maxRows,
    onKeyPress: _onKeyPress,
    onBlur: _onBlur,
    sx: isx,
    slotProps: {
      input: inputProps
    },
    

  };
  delete ePropsL.disabled;
  let tx = <Textarea  key={name}
    {...ePropsL}
    value={value}
    onChange={_onChange}
  ></Textarea>;

  const t = (label != null) ?
    <FormControl>
      <FormLabel>{label}</FormLabel>
      {tx}
    </FormControl>
    : tx;
  return t;
}
export default Inputarea;
