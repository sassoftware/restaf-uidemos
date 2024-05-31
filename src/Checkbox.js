import React from 'react';
import {Checkbox as C} from '@chakra-ui/react';

function Checkbox(props) {
  const {onChange, value, label, style, ...rest} = props;
  const _onChange = (e) => {
    console.log(e);
    onChange(e.target.checked === true ? 1 : 0);
  }   
  let isChecked = value !== 0 ;
  let iStyle = {border: '1', ...style};

  return <C isChecked={isChecked} style={iStyle} {...rest} onChange={_onChange} >
    {label}
  </C>
} 
export default Checkbox;