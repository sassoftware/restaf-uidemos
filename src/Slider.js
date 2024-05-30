/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useRef } from 'react';
import { Slider as JoySlider } from '@mui/joy';


function Slider(props) {
  const { name, value, style, label, designMode, eProps, onChange } = props;
  const [val, setVal] = useState(value);
  const divref = useRef(null);


  const _onChange = (_e, value) => {
    setVal(val);
  };
  const _onCommit = (_e, value) => {
    setVal(value)
    onChange(value);
  }
  let istyle = { ...style, width: 'inherit', height: 'inherit' };

  let slotProps = {
    root: {
      width: 'inherit', height: 'inherit'
    }
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
  let divStyle = { width: "inherit", height: "inherit", border: (designMode === true) ? "1px solid black": 'none'};
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
