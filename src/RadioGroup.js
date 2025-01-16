// import Reactz from 'react';

import React from 'react';
import FormLabel from '@mui/joy/FormLabel';

import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import { RadioGroup as JoyRadioGroup } from '@mui/joy';

function RadioGroup(props) {
  let { value, items, onChange, label, sx,  ...eProps } = props;

  const _handleChange = (e) => {
    return onChange(parseInt(e.target.value));
  }

  let isx = { height: 'inherit', width: 'inherit', margin: '2px', borderStyle: 'solid', borderWidth: '1px', borderRadius: '8px', ...sx };
  let options = items == null ? [] : items;

  let ePropsL = {
    value: currentSelection,
    label: label,
    size: "sm",
    variant: 'outlined',
    // selectOnFocus: true,
    readOnly: false,
    ...eProps
  };

  let currentSelection = items[value]; 
  ;
  let buttons = options.map((m, i) => {
    return <Radio key={i} value={i.toString()} label={m} />
  });
  ;
  console.log('currentSelection', currentSelection);
  let show =
    <>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <JoyRadioGroup defaultValue={currentSelection} {...ePropsL} sx={isx} onChange={_handleChange}>
          {buttons}
        </JoyRadioGroup>
      </FormControl>
    </>
  return show;
}

export default RadioGroup;
