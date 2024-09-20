import React from 'react';
import {Switch as C} from '@chakra-ui/react';
import {ChakraProvider} from '@chakra-ui/react';


function Switch(props) {
  const {onChange, value, label, style, ...rest} = props;
  const _onChange = (e) => {
    debugger;
    onChange(e.target.checked === true ? 1 : 0);
  }  
  let isChecked = value !== 0 ;
  let iStyle = {height: 'inherit', width: 'inherit',  ...style};
  return  <ChakraProvider> <C {...iStyle} isChecked={isChecked} {...rest} onChange={_onChange} />
  {label}
  </ChakraProvider>
    
} 
export default Switch;