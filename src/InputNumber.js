/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from "react";
import {
  NumberInputField,
  ChakraProvider,
} from "@chakra-ui/react";
import {  NumberInput } from "@chakra-ui/react";

function InputNumber(props) {
  const { onChange, type, style, ...rest } = props;
  let istyle = { height: "inherit", width: "inherit" , ...style};
  let show =
    <ChakraProvider>
    <NumberInput {...istyle} {...rest} onChange={(e) => onChange(e)}>
      <NumberInputField >
      </NumberInputField>
    </NumberInput>
    </ChakraProvider>
  return show;
}
export default InputNumber;
