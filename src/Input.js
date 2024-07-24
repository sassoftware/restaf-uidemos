import React from 'react';
import {Input as C} from '@chakra-ui/react';

function Input(props) {
  const {onChange, name, type, ...rest} = props;
  const _onChange = (e) => {
    console.log(e);
    props.onChange(e.target.value);
  }
  console.log('Input', rest);
  return <C {...rest} onChange={_onChange} />;
} 
export default Input;