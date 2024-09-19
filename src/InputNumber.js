import React from "react";
import {
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {  NumberInput } from "@chakra-ui/react";
function InputNumber(props) {
  const { onChange, name, type, label, style, ...rest } = props;

  const _onChange = (e) => {
    console.log(e);
    onChange(e);
  };
  let istyle = { height: "inherit", width: "inherit", ...style };
  debugger;

  console.log(rest);

  return (
    <NumberInput style={istyle} {...rest} onChange={_onChange}>
      <NumberInputField >
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
      </NumberInputField>
    </NumberInput>
  );
}
export default InputNumber;
