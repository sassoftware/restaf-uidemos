/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useRef } from 'react';
import { Slider as JoySlider } from '@mui/joy';
import {Box, Typography} from '@mui/joy';
import useSize from '@react-hook/size';



function Slider(props) {
  const { name, value, designMode, onChange, sx,...eProps } = props;
  const [val, setVal] = useState(value);
  const divref = useRef(null);
  const [width, height] = useSize(divref);

  const _onChange = (_e, value) => {
    setVal(val);
  };
  const _onCommit = (_e, value) => {
    setVal(value)
    onChange(value);
  }
  let wh = {width: 'inherit', height: 'inherit'};
  let istyle = (sx != null) ? { ...sx, ...wh} : wh;
  
  let slotProps = {
    root: wh
  }
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
  } 

  const V = <JoySlider sx={istyle}
    key={name + 'slider'}
    value={val}
    {...ePropsL}
   
    onChange={(event, value) => _onChange(event, value)}
    onChangeCommitted={(event, value) => _onCommit(event, value)}
    />;
  return V;
  /*
  let divStyle = { width: wh.width, height: wh.height, border: (designMode === true) ? "1px solid black": 'none'};
nChangeCommitted={(event, value) => _onCommit(event, value)}
    />
  const V = <JoySlider sx={istyle}
      key={name + 'slider'}
      value={val}
      {...ePropsL}
      slotProps={slotProps}
      onChange={(event, value) => _onChange(event, value)}
      onChangeCommitted={(event, value) => _onCommit(event, value)}
    />
  return  (<div ref={divref} style={divStyle}>
           {V}
           </div>);
           */
}
export default Slider;
