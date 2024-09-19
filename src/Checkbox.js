import React from 'react';
import {Checkbox as C} from '@chakra-ui/react';

function Checkbox(props) {
  const {onChange, value, label, style, ...rest} = props;
  console.log('---------------------------------checkbox', value);
  const _onChange = (e) => {
    debugger;
    console.log('---------------------------------checkbox', e);
    onChange(e.target.checked === true ? 1 : 0);
  }   
  let isChecked = value !== 0 ;
  let iStyle = {height: 'inherit', width: 'inherit',  ...style};
  console.log(label);
  debugger;
  return <C isChecked={isChecked} {...iStyle} {...rest}  onChange={_onChange} >
    {label}
  </C>
} 
export default Checkbox;