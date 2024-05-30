import React from 'react';
import {Checkbox as C} from '@chakra-ui/react';

function Checkbox(props) {
  const {onChange, value, label, ...rest} = props;
  const _onChange = (e) => {
    console.log(e);
    onChange(e.target.checked === true ? 1 : 0);
  }   
  let isChecked = value === 1 ? true : false;
  console.log
  return <C isChecked={isChecked} {...rest} onChange={_onChange} >
    {label}
  </C>
} 
export default Checkbox;