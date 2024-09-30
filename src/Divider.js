import React from 'react';
import {Divider as JoyDivider} from '@mui/joy';

function Divider(props) {
  let {label, value, sx, ...eProps} = props;

  let ePropL = {
    //label: label,
    id: label,
   // disabled: designMode,
    sx: sx,
    orientation: "horizontal",
    ...eProps
  };
  let show = <JoyDivider  {...ePropL}> {value}</JoyDivider> ;
   
  return show;

  
}
export default Divider;