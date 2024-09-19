import React from 'react';
import {Input as C} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

function Input(props) {
  const {onChange, name, style, type, ...rest} = props;
  const _onChange = (e) => {
    console.log(e);
    props.onChange(e.target.value);
  }
  let iStyle = {height: 'inherit', width: 'inherit', ...style};
  console.log('Input', rest);
  return <ChakraProvider> <C {...iStyle} {...rest} onChange={_onChange} /> </ChakraProvider>
} 
export default Input;