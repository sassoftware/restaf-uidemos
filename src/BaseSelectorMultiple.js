import React from 'react';

// import {Sheet} from '@mui/joy'
import FormLabel from '@mui/joy/FormLabel';
import Autocomplete from '@mui/joy/Autocomplete';
import FormControl from '@mui/joy/FormControl';
function BaseSelectorMultiple (props) {
  let {name, value, items, separator, onChange, designMode,label, style} = props;
  const _handleChange = (e, val) => {
    if (e == null) {
      return;
    } 
    if (items != null && items.length > 0) {
      onChange(val);
    }
  }
  let sep = (separator == null) ? ' ' : separator;
  let sx = {height: 'inherit', width: '100%', ...style};
  
  if (typeof value === 'string') {
    value = (value == null || value.trim().length === 0) ? [] : value.split(sep);
  } 

  let ePropsL = { 
    id: name, 
    value: value,
    label: label, 
    size: "sm",
    variant: 'outlined',
    selectOnFocus: true,
    multiple: true,
    readOnly: designMode, 
    sx: sx
    };
 
// isOptionEqualToValue={check}
    let show = 
    <FormControl>
      {label !== null ? <FormLabel>{label}</FormLabel> : null}
      <Autocomplete
      {...ePropsL}
      options={items != null ? items : []}
      
      onChange={_handleChange}
      />
     </FormControl>
    return show;
}

export default BaseSelectorMultiple;
// isOptionEqualToValue={(option, value) => (value.trim().length === 0 || option === value) ? true : false}