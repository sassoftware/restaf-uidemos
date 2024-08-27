import React from 'react';

// import {Sheet} from '@mui/joy'
import FormLabel from '@mui/joy/FormLabel';
import Autocomplete from '@mui/joy/Autocomplete';
import FormControl from '@mui/joy/FormControl';
function BaseSelector (props) {
  let {name, value, items, onChange, designMode,label, sx} = props;
  const _handleChange = (e, val) => {
    if (e == null) {
      onChange(null);
    } 
    let v = (items != null && items.length > 0 && val != null && val.trim().length > 0)? val.trim(): null;
    onChange(v);
    return;
  }
  

  let isx = {height: 'inherit', width: 'inherit', ...sx};
  let currentSelection = null;
  let options = (items == null ? [] : Array.isArray(items) ? items : 
    (typeof items === 'string' ? items.split(',') : []));
 
  value = (value != null) ? value.trim(): null;
  if (options.length === 0 ) {
    currentSelection =  'No items to display';
  } else {
    currentSelection = (options.includes(value)) ? value : null;
  }
 
  let ePropsL = { 
    autoComplete: true,
    value: currentSelection,
    label: (label == null) ? name : label, 
    size: "sm",
    variant: 'outlined',
    selectOnFocus: true,
    readOnly: (designMode === true) ? true : false,
    sx: isx
    };
    //for debugging purposes
    
    const check = (option, value) => {
      if (option === value) {
        return true;
      } else
        return false;
     }
  
    debugger;
    let show = 
    <FormControl>
      {label != null ? <FormLabel>{label}</FormLabel> : null}
      <Autocomplete
      {...ePropsL }
      options={options != null ? options : []}
      isOptionEqualToValue={check}
      onChange={_handleChange}
      />
     </FormControl>
    return show;
}

export default BaseSelector;
// isOptionEqualToValue={(option, value) => (value.trim().length === 0 || option === value) ? true : false}