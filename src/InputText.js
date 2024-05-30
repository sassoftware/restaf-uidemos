/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, {useState, useEffect } from 'react';
import { Input as JoyInput} from '@mui/joy';

import {FormLabel} from '@mui/joy';

function InputText(props) {

  const { name, label, type, style, onChange,designMode} = props;

  debugger;
  console.log('InputText', props);
  const [value, setValue] = useState(()=> (props.value == null) ? ' ' : props.value);
  let eProps = (props.eProps == null) ? {} : props.eProps;
  let disabled = (designMode == null) ? false : designMode;
  disabled = (eProps.disabled != null && eProps.disabled === true) ? true : eProps.disabled;

  useEffect (() => {
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
        key   : 'Enter',
        target: {
          value: e.target.value,
          name : name
        }
      };
      handleChange(synthE);
    }
    
    return true;
  }
  
  let istyle = {...style};
  istyle.textAlign = (type  === 'char'|| type === 'text') ? 'left': 'right';

  const _onBlur = (e) => {
    const synthE = {
      key   : 'Enter',
      target: {
        value: e.target.value,
        name : name
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
    inputMode : 'text',
    step: 'any',
    style: istyle,
    onKeyPress: _onKeyPress,
    onBlur    : _onBlur,
    onFocus: _onFocus

  };
 
  let isx = {width: 'inherit', height: 'inherit', ...istyle};
 //isx = { ...istyle}
  let ePropsL = {
    key: name,
    name: name,
    size: 'sm',
    readOnly: disabled,
    label: label,
    variant: "outlined",
   
  //  sx: {isx},
    slotProps: {
      input: inputProps
      },
    ...eProps

  };
  delete ePropsL.disabled;
/*
  const t =
  <Sheet key={'inputSheet'} style={isx}>
    <FormControl>
      <FormLabel>{label}</FormLabel>
    <JoyInput
        {...ePropsL}
        value={value}
        onChange={_onChange}
    ></JoyInput>
    </FormControl>
    </Sheet>
    */

    const t =
    <>
    <FormLabel>{label}</FormLabel>
      <JoyInput
          sx={isx}
          {...ePropsL}
          value={value}
          onChange={_onChange}
      ></JoyInput>
      </>
   
  return t;
}
export default InputText;
