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
  const { onChange, name, type, label, style, ...rest } = props;

  const _onChange = (e) => {
    console.log(e);
    onChange(e);
  };
  let istyle = { height: "inherit", width: "inherit" };
  debugger;

  console.log(rest);

  let show =
    <ChakraProvider>
    <NumberInput style={istyle} {...rest} onChange={_onChange}>
      <NumberInputField >
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
      </NumberInputField>
    </NumberInput>
    </ChakraProvider>
  ;
  return show;
}
export default InputNumber;
