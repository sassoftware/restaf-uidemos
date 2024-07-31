/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useRef } from 'react';
import { Slider as JoySlider } from '@mui/joy';
import {Box, Typography} from '@mui/joy';
import useSize from '@react-hook/size';



function Slider(props) {
  const { name, value, style, label, designMode, onChange, eProps } = props;
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
  let istyle = { ...style, ...wh};

  let slotProps = {
    root: wh
  }
  let ePropsL = {
    size: 'md',
    color: 'primary',
    variant: 'solid',
    marks: false,
    track: 'normal',
    disabled: designMode,
    valueLabelDisplay: 'on',
   // step: step,
    'aria-label': label,
    ...eProps
  };
  let divStyle = { width: wh.width, height: wh.height, border: (designMode === true) ? "1px solid black": 'none'};
  const V = <JoySlider style={istyle}
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

  /*
  const t = <Box sx= {{width: 'inherit', height: 'inherit'}} ref={divref}>
    <Typography id={name + 'label'}>{label}</Typography>
    <JoySlider style={istyle}
      key={name + 'slider'}
      value={val}
      {...ePropsL}
      slotProps={slotProps}
      onChange={(event, value) => _onChange(event, value)}
      onChangeCommitted={(event, value) => _onCommit(event, value)}
    />
  </Box>;
  */
}
export default Slider;
