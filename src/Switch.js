import React from 'react';
import {Switch as C} from '@chakra-ui/react';
import {Stack, FormControl,FormLabel} from '@chakra-ui/react';

function Switch(props) {
  const {onChange, value, style, ...rest} = props;
  const _onChange = (e) => {
    console.log(e);
    onChange(e.checked === true ? 'a' : 'b');
  }  
  return <C {...rest} onChange={_onChange} />;
} 
export default Switch;