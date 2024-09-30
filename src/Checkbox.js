import React, { useState } from "react";
import { Checkbox as JoyCheckbox } from "@mui/joy";

function Checkbox(props) {
  let { label, value, designMode, onChange, sx, ...eProps } = props;
  const divref = React.useRef(null);
  //const [width, height] = useSize(divref);
  let [val, setVal] = useState(() =>
    value == null ? false : value
  );
  let disabled =
    designMode === true
      ? true
      : eProps.disabled == null
      ? false
      : eProps.disabled;

  const _onChange = (e) => {
    if (!designMode && !disabled) {
      onChange(e.target.checked === true)
    }
  };
  let isx = { height: 'inherit', width: 'inherit', ...sx };
  let ePropsL = {
    label: label,
    readOnly: disabled,
    variant: "outlined",
    ...eProps,
  };
  delete ePropsL.disabled;
  if (ePropsL.label == null) {
    ePropsL.label = 'checkbox'
  }
  let V = <JoyCheckbox key={label} sx={isx} {...ePropsL} checked={val} onChange={_onChange} />;
  return V;


}
export default Checkbox;
