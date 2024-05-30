import React from 'react';

// import {Sheet} from '@mui/joy'
import FormLabel from '@mui/joy/FormLabel';

import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import {RadioGroup as JoyRadioGroup} from '@mui/joy';

function RadioGroup (props) {
  let {name, value, onChange,valueType, label, style} = props;
  
  const _handleChange = (e) => {
    let val = e.target.value;
    
    if (valueType === 'index') {
      let i = items.findIndex((m) => m === val);
      val = i.toString();
    }
    onChange(val);  
    return;
  }

  let sx ={height: 'inherit', width: 'inherit', margin: '2px', borderStyle: 'solid', borderWidth: '1px', borderRadius: '8px', ...style};

  let currentSelection = null;
  let items = (props.items == null) ? [] : props.items;
  let options = (items == null ? [] : Array.isArray(items) ? items : 
    (typeof items === 'string' ? items.split(',') : []));

  if (typeof value === 'number') {
    value = value.toString();
  }
  value = (value != null) ? value.trim(): null;
  currentSelection = options[0];
  if (valueType === 'index' && value != null) {
    let ival = parseInt(value);
    if (!isNaN(ival) && ival >= 0 && ival < options.length) {
      currentSelection = options[ival];
    }
  }

  if (options.length === 0 ) {  
    currentSelection =  'No items to display';
  } else {
    if (valueType === 'index' && value != null)
    currentSelection = (options.includes(value)) ? value : null;
  }
  /*
  let ePropsL = { 
    id: name, 
    value: currentSelection,
    label: label, 
    size: "sm",
    variant: 'outlined',
    selectOnFocus: true,
    readOnly: designMode, 
    sx: sx,
     ...eProps
    };
    */

    
    let buttons = options.map((m, i) => {
      return <Radio key={i} value={m} label={m} />
    });

    let show = 
    <div style={sx}>
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <JoyRadioGroup defaultValue={currentSelection} onChange={_handleChange}>
        {buttons}
      </JoyRadioGroup>
     </FormControl>
     </div>
    return show;
}

export default RadioGroup;
