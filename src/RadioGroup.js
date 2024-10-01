import React from 'react';

// import {Sheet} from '@mui/joy'
import FormLabel from '@mui/joy/FormLabel';

import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import {RadioGroup as JoyRadioGroup} from '@mui/joy';

function RadioGroup (props) {
  let {value, items, onChange,label, sx, ...eProps} = props;
  
  const _handleChange = (e) => {
    onChange(e.target.value);  
  }


  let isx ={height: 'inherit', width: 'inherit', margin: '2px', borderStyle: 'solid', borderWidth: '1px', borderRadius: '8px', ...sx};

  let currentSelection = null;

  let options = (items == null ? [] : items);

 
  /*
  if (valueType === 'index' && value != null) {
    let ival = parseInt(value);
    if (!isNaN(ival) && ival >= 0 && ival < options.length) {
      currentSelection = options[ival];
    }
  }
    */

  if (options.length === 0 ) {  
    currentSelection =  'No items to display';
  } else {
    currentSelection = (options.includes(value)) ? value : null;
  }
  
  let ePropsL = { 
    value: currentSelection,
    label: label, 
    row: false,
    size: "sm",
    variant: 'outlined',
    selectOnFocus: true,
    readOnly: false, 
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
