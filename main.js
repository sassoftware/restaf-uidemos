/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.

 * SPDX-License-Identifier: Apache-2.0
 */
import frameControl from './src/index.js';
import { ChakraProvider } from '@chakra-ui/react';
function main() {

console.log('frameControl', frameControl);
let small = {height: 30, width: 200};
let medium ={height: 120, width: 400};
// let large = {height: 120, width: 400};
let props = {size: 'md', variant: 'outline'};  // if you want to pass in some default props - helpful to users in property sheet
// notes:
// The component is the actual react component that will be rendered
// The grow property is used to determine if the user can grow the control and in what direction
// The label is the label that will be displayed in the property sheet
// Type: currently only 'char' and 'number'. 
// The following are are initial values - user can change them in the property sheet
// initialSize:  width and height are used for initial sizing of the control
// props:  used to pass in any default props you want to pass including style
// The length,width and position will be controlled by the framebuilder


let controls = {
  Input: VisualTemplate(frameControl.Input, 'Input Text', 'char',' ', small, props, 'h'),
  Checkbox: VisualTemplate(frameControl.Checkbox, 'Checkbox', 'number', 0, small,
  props,'h'),
  Button: VisualTemplate(frameControl.Button, 'Button', 'char', ' ', small, props,'both'),
  Switch: VisualTemplate(frameControl.Switch, 'Switch', 'number', 0, medium, props, 'h'),
  //InputNumber: VisualTemplate(frameControl.InputNumber, 'Input Number', 'number', 0, small, 
  //{min: 1, max: 10, defaultValue: 2, },'h')
}
return controls;

function VisualTemplate(component, label, type, value, initialSize, props,resize,zIndex) {
  return {
    component: component,
    label: label,
    type: type,
    grow: resize,
    zIndex: zIndex == null ? 2 : zIndex,
    value: value,
    width: initialSize.width,
    height: initialSize.height,
    props: { ...props },
  };
};
}
export default main;
