import React from 'react';
import {Divider as JoyDivider} from '@mui/joy';

function Divider(props) {
  let {name, value, style, ...eProps} = props;
  let sx = { ...style};
  let ePropL = {
    //label: label,
    id: name,
   // disabled: designMode,
    sx: sx,
    orientation: "horizontal",
    ...eProps
  };
  let show = <JoyDivider  {...ePropL}> {value}</JoyDivider> ;
   
  return show;

  
}
export default Divider;