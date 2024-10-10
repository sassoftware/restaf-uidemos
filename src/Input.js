/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import {Input as C} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

function Input(props) {
  const {onChange, style, ...rest} = props;
  let iStyle = {height: 'inherit', width: 'inherit', ...style};
  return <ChakraProvider> <C {...iStyle} {...rest} onChange={(e) => onChange(e.target.value)} /> </ChakraProvider>
} 
export default Input;