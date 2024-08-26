import React from 'react';

// import {Sheet} from '@mui/joy'
import FormLabel from '@mui/joy/FormLabel';

import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import {RadioGroup as JoyRadioGroup} from '@mui/joy';

function RadioGroup (props) {
  let {name, value, onChange,valueType, designMode,label, sx, ...eProps} = props;
  
  const _handleChange = (e) => {
    let val = e.target.value;
      
    let items =(props.items == null) ? [] : Array.isArray(props.items) ? props.items : props.items;
    if (typeof props.items === 'string') items = items.split(',');
  
    if (valueType === 'index') {
      let i = items.findIndex((m) => m === val);
      val = i.toString();
    }
    
    onChange(val);  
    return;
  }


  let isx ={height: 'inherit', width: 'inherit', margin: '2px', borderStyle: 'solid', borderWidth: '1px', borderRadius: '8px', ...sx};

  let currentSelection = null;

  let options = (props.items == null ? [] : Array.isArray(props.items) ? props.items : 
    (typeof props.items === 'string' ? props.items.split(',') : []));

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
  
  let ePropsL = { 
    id: name, 
    value: currentSelection,
    label: label, 
    row: false,
    size: "sm",
    variant: 'outlined',
    selectOnFocus: true,
    readOnly: designMode, 
     ...eProps
    };

    
    let buttons = options.map((m, i) => {
      return <Radio key={i} value={m} label={m} />
    });

    let show = 
    <>
    <FormControl>
      <FormLabel>{label }</FormLabel>
      <JoyRadioGroup defaultValue={currentSelection} {...ePropsL} sx={isx}onChange={_handleChange}>
        {buttons}
      </JoyRadioGroup>
     </FormControl>
     </>
    return show;
}

export default RadioGroup;
