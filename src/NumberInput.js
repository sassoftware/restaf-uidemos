import React from 'react';
import {NumberInput as C} from '@chakra-ui/react';
function NumberInput(props) {
  const {onChange, name, type, label, ...rest} = props;
  const _onChange = (e) => {
    console.log(e);
    onChange(e.target.value);
  }
  console.log(C);
  debugger;
  console.log(rest);
  return <C {...rest} onChange={_onChange} />
} 
export default NumberInput;