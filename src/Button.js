/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from "react";
import { Button as C } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
function Button(props) {
  const { onChange, style, value, type, ...rest } = props;
  let iStyle = { height: "inherit", width: "inherit", ...style };
  debugger;
  return (
    <ChakraProvider>
      <C  {...iStyle}  {...rest} onClick={(e) => onChange(value)}>
        {value}
      </C>
    </ChakraProvider>
  );
}
export default Button;
