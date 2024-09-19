import React from 'react';
import {Switch as C} from '@chakra-ui/react';
import {ChakraProvider} from '@chakra-ui/react';


function Switch(props) {
  const {onChange, value, style, ...rest} = props;
  const _onChange = (e) => {
    console.log(e);
    onChange(e.checked === true ? 1 : 0);
  }  
  let iStyle = {height: 'inherit', width: 'inherit',  ...style};
  return  <ChakraProvider> <C {...iStyle} {...rest} onChange={_onChange} /></ChakraProvider>
    
} 
export default Switch;