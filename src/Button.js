import React from 'react';
import {Button as C} from '@chakra-ui/react';
function Button(props) {
  const {onChange, name, value, type, ...rest} = props;
  const _onChange = (e) => {
    onChange(value);
  }
  console.log('Button', rest);
  return <C key={name} {...rest} onClick={_onChange}>
    {value} 
    </C> 
} 
export default Button;