import React from 'react';
import {Input as C} from '@chakra-ui/react';

function Input(props) {
  const {onChange, name, type, ...rest} = props;
  const _onChange = (e) => {
    console.log(e);
    props.onChange(e.target.value);
  }
  let irest = {variant: 'outline', ...rest};
  return <C {...irest} onChange={_onChange} />;
} 
export default Input;