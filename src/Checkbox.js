import React, { useState } from "react";
import { Checkbox as JoyCheckbox } from "@mui/joy";

function Checkbox(props) {
  let { label, value, onChange, sx, ...eProps } = props;

  const _onChange = (e) => {
    onChange(e.target.checked)
  };
  let isx = { height: 'inherit', width: 'inherit', ...sx };
  let ePropsL = {
    label: label,
    variant: "outlined",
    ...eProps,
  };
  let V = <JoyCheckbox sx={isx} {...ePropsL} checked={value} onChange={_onChange} />;
  return V;


}
export default Checkbox;
