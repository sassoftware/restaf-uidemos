/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import {Switch as C} from '@chakra-ui/react';
import {ChakraProvider} from '@chakra-ui/react';

function Switch(props) {
  const {onChange, value, label, style, ...rest} = props;
  let iStyle = {height: 'inherit', width: 'inherit',  ...style};
  return  <ChakraProvider> 
    <C {...iStyle} isChecked={value} {...rest} onChange={(e) => onChange(e.target.checked)}>
       {label}
    </C>
  </ChakraProvider>
    
} 
export default Switch;