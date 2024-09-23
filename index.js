/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.

 * SPDX-License-Identifier: Apache-2.0
 */
import frameControl from './src/index.js';
console.log('frameControl', frameControl);
let small = {height: 30, width: 200};
let medium ={height: 120, width: 400};
// let large = {height: 120, width: 400};
let props = {size: 'md', variant: 'outline'};  // if you want to pass in some default props - helpful to users in property sheet


let controls = {
  Input: VisualTemplate(frameControl.Input, 'Input Text', 'string',' ', small, props, 'h'),
  Checkbox: VisualTemplate(frameControl.Checkbox, 'Checkbox', 'number', 0, small,
  {label: 'Select me', ...props},'h'),
  Button: VisualTemplate(frameControl.Button, 'Button', 'string', ' ', small, props,'b'),
  Switch: VisualTemplate(frameControl.Switch, 'Switch', 'number', 0, medium, props, 'h'),
  InputNumber: VisualTemplate(frameControl.InputNumber, 'Input Number', 'number',' ', small, props, 'h'),
}


function VisualTemplate(component, label, type, value, initialSize, props,resize,zIndex) {
  /**
   * This function is a template for creating a visual control object
   * @param {React.Component} component - the component to be rendered
   * @param {string} label - the label for the contro - used in the property sheet
   * @param {string} type - the type of the control - char, numeric
   */
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
export {controls};

