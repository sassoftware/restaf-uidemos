import React from "react";
import { Button as C } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
function Button(props) {
  const { onChange, name, style, value, type, ...rest } = props;
  const _onChange = (e) => {
    onChange(value);
  };
  console.log("Button", rest);
  let iStyle = { height: "inherit", width: "inherit", ...style };
  return (
    <ChakraProvider>
      <C key={name} {...iStyle}  {...rest} onClick={_onChange}>
        {value}
      </C>
    </ChakraProvider>
  );
}
export default Button;
