import React from 'react';

// import {Sheet} from '@mui/joy'
import FormLabel from '@mui/joy/FormLabel';
import Autocomplete from '@mui/joy/Autocomplete';
import FormControl from '@mui/joy/FormControl';
function BaseSelectorMultiple (props) {
  let {value, items, onChange, label, valueType,sx} = props;
  
  const _handleChange = (e, val) => {
    ;
    if (valueType !==  'index') {
      onChange(val);
    } else {
      let v = val.map((item) => items.indexOf(item));
      onChange(v);
    }
    return;
  }
  ;
  let isx = {height: 'inherit', width: '100%', ...sx};
  let options = items == null ? [] : items;
  let currentSelection = [];
  if (value !== null) {
    if (valueType === 'index') {
      for (let i = 0; i < value.length; i++ ) {
        currentSelection.push(items[value[i]]);
      }
    } else {
      currentSelection = value;
    }
  }

  let ePropsL = { 
    id:label, 
    value: currentSelection,
    label: label, 
    size: "sm",
    variant: 'outlined',
    selectOnFocus: true,
    multiple: true,
    readOnly: false, 
    loading: true,
    sx: isx
    };
 
// isOptionEqualToValue={check}
    let show = 
    <FormControl>
      {label !== null ? <FormLabel>{label}</FormLabel> : null}
      <Autocomplete
      {...ePropsL}
      options={options}
      
      onChange={_handleChange}
      />
     </FormControl>
    return show;
}

export default BaseSelectorMultiple;
// isOptionEqualToValue={(option, value) => (value.trim().length === 0 || option === value) ? true : false}