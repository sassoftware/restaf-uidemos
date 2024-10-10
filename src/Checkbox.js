import React from 'react';
import {Checkbox as C} from '@chakra-ui/react';

function Checkbox(props) {
  const {onChange, value, label, style, ...rest} = props;  
  let iStyle = {height: 'inherit', width: 'inherit',  ...style};
  return <C isChecked={value} {...iStyle} {...rest}  onChange={(e) => onChange(e.target.checked)} >
    {label}
  </C>
} 
export default Checkbox;