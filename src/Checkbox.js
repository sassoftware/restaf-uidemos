import React, { useState } from "react";
import { Checkbox as JoyCheckbox } from "@mui/joy";
//

function Checkbox(props) {
  let { name, value, eProps, designMode, onChange, label, style } = props;
  const divref = React.useRef(null);
  
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
  let sx = { ...style };
  let ePropsL = {
    label: label,
    id: name,
    sx: sx,
    readOnly: disabled,
    variant: "outlined",
    ...eProps,
  };
  delete ePropsL.disabled;
  
  let V = <JoyCheckbox {...ePropsL} overlay checked={val} onChange={_onChange} />;
  let divStyle = { width: "inherit", height: "inherit", border: (designMode === true) ? "1px solid black": 'none'};
  return (
    <div ref={divref} style={divStyle}>
      {V}
    </div>
  );

}
export default Checkbox;
