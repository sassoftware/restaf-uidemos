import React from "react";
import {
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ChakraProvider,
} from "@chakra-ui/react";
import {  NumberInput } from "@chakra-ui/react";

function InputNumber(props) {
  const { onChange, type, style, ...rest } = props;
  const _onChange = (e) => {
    debugger;
    onChange(e);
  };
  let istyle = { height: "inherit", width: "inherit" , ...style};
  let show =
    <ChakraProvider>
    <NumberInput {...istyle} {...rest} onChange={_onChange}>
      <NumberInputField >
      </NumberInputField>
    </NumberInput>
    </ChakraProvider>
  ;
  return show;
}
export default InputNumber;
