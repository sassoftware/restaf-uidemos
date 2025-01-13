import React from 'react';

// import {Sheet} from '@mui/joy'
import FormLabel from '@mui/joy/FormLabel';
import Autocomplete from '@mui/joy/Autocomplete';
import FormControl from '@mui/joy/FormControl';
function BaseSelectorMultiple (props) {
  let {value, items, separator, onChange, label, valueType,sx} = props;
  const _handleChange = (e, val) => {
    let v = (items == null || items.length === 0 || val === null) ? null : val;
  
    if (valueType === 'index') {
      v = items.indexOf(v);
    }
    onChange(v);
    return;
  }
  let sep = (separator == null) ? ' ' : separator;
  let isx = {height: 'inherit', width: '100%', ...sx};
  
  if (typeof value === 'string') {
    value = (value == null || value.trim().length === 0) ? [] : value.split(sep);
  } 

  let ePropsL = { 
    id:label, 
    value: value,
    label: label, 
    size: "sm",
    variant: 'outlined',
    selectOnFocus: true,
    multiple: true,
    readOnly: false, 
    sx: isx
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