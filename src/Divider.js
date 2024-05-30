import React from 'react';
import {Divider as JoyDivider} from '@mui/joy';

function Divider(props) {
  let {name, value, eProps, style} = props;
  let sx = { ...style};
  let ePropL = {
    //label: label,
    id: name,
   // disabled: designMode,
    sx: sx,
    orientation: "horizontal",
  };
  ePropL = {...ePropL, ...eProps};
  let show = <JoyDivider {...eProps} {...ePropL}> {value}</JoyDivider> ;
   
  return show;

  
}
export default Divider;