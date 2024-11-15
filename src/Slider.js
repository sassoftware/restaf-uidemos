/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// import React from 'react';
import  { useState } from 'react';
import JoySlider  from '@mui/joy/Slider';

function Slider(props) {
  const { name, value, designMode, onChange, sx,_userProps, ...eProps } = props;
  const [val, setVal] = useState(value);

  const _onChange = (_e, value) => {
    setVal(val);
  };
  const _onCommit = (_e, value) => {
    setVal(value)
    onChange(value);
  }
  let wh = {width: 'inherit', height: 'inherit'};
  let istyle = (sx != null) ? { ...sx, ...wh} : wh;
  
  let ePropsL = {
    size: 'md',
    color: 'primary',
    variant: 'solid',
    marks: false,
    track: 'normal',
    disabled: false,
    orientation: 'horizontal',
    valueLabelDisplay: 'on',
    ...eProps
  };
  if (ePropsL['aria-label'] == null) {
    ePropsL['aria-label'] = name;
  } ;
 
  return (
    <JoySlider sx={istyle}  value={val} 
    {...ePropsL}
    onChange={(event, value) => _onChange(event, value)}
    onChangeCommitted={(event, value) => _onCommit(event, value)}
    />
  );

 
}
export default Slider;
