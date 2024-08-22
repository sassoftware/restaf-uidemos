import React, { useState } from "react";
import { Checkbox as JoyCheckbox } from "@mui/joy";

function Checkbox(props) {
  let { name, value, designMode, onChange, sx, ...eProps } = props;
  const divref = React.useRef(null);
  //const [width, height] = useSize(divref);
  let [val, setVal] = useState(() =>
    value == null ? false : value === 0 ? false : true
  );
  let disabled =
    designMode === true
      ? true
      : eProps.disabled == null
      ? false
      : eProps.disabled;

  const _onChange = (e) => {
    if (!designMode && !disabled) {
      setVal(e.target.checked);
      onChange(e.target.checked === true ? 1 : 0);
    }
  };
  let isx = { height: 'inherit', width: 'inherit', ...sx };
  let ePropsL = {
    label: name,
    readOnly: disabled,
    variant: "outlined",
    ...eProps,
  };
  delete ePropsL.disabled;
  if (ePropsL.label == null) {
    ePropsL.label = 'checkbox'
  }
  let V = <JoyCheckbox key={name} sx={isx} {...ePropsL} checked={val} onChange={_onChange} />;
  return V;

  /*let divStyle = { width: 'inherit', height: 'inherit', border: (designMode === true) ? "1px solid black": 'none'};
  return (
    <div ref={divref} style={divStyle}>
      {V}
    </div>
  );
  */

}
export default Checkbox;
