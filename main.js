/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import frameControl from './src/index.js';
function main() {

console.log('frameControl', frameControl);
let small = {height: 30, width: 200};
let medium ={height: 120, width: 400};
let large = {height: 120, width: 400};
let props = {};  // if you want to pass in some default props - helpful to users in property sheet
// notes:
// The component is the actual react component that will be rendered
// The resize property is used to determine if the user can resize the control and in what direction
// The label is the label that will be displayed in the property sheet
// Type: currently only 'char' and 'number'. 
// The following are are initial values - user can change them in the property sheet
// initialSize:  width and height are used for initial sizing of the control
// props:  used to pass in any default props you want to pass in other than style

/*
let controls ={
  Input: VisualTemplate(frameControl.Input,'Input','double',0,small,{align: 'right'},'h'),
  InputText: VisualTemplate(frameControl.InputText, 'Input Text', 'char',' ', small, props, 'h'),
  Checkbox: VisualTemplate(frameControl.Checkbox, 'Checkbox', 'double', 0, small, props, 'h'),
  Button: VisualTemplate(frameControl.Button, 'Button', 'char', ' ', small, props, 'b'),
  RadioGroup: VisualTemplate(frameControl.RadioGroup, 'Radio Group', 'char',' ', medium, {items: ['item 1', 'Item 2'], valueType: 'label'}, 'b'),
  DropDownMenu: VisualTemplate(frameControl.DropdownMenu, 'Dropdown Menu', 'char',' ', medium, {items: ['item 1', 'Item 2'], valueType: 'label'}, 'b'),
  HtmlText: VisualTemplate(frameControl.HtmlText, 'Html Text', 'char','<h1>text<h1>', large, props, 'b'),
  };
*/

 let controls = {
  Input: _visualTemplate(frameControl.Input,'Input','double',0,small,{align: 'right'},'h'),
  InputText: _visualTemplate(frameControl.InputText,'InputText','char','text',small,{align: 'left'},'h'),
  Inputarea: _visualTemplate(frameControl.Inputarea,'InputArea','char', ' ', medium,{minRows: 2},'b'),
    /* buttons and selectors */

  Button: _visualTemplate(frameControl.Button,'Button','char','button',small,{},'h'),
  Checkbox: _visualTemplate(frameControl.Checkbox,'Checkbox','double',1,small,{},'h'),
  RadioGroup: _visualTemplate(frameControl.RadioGroup,'RadioGroup','char',' ',small,{items: ['item 1', 'Item 2'], itemType: 'label'},'b'),
  Dropdown: _visualTemplate(frameControl.Dropdown,'Dropdown','char',' ',small,{items: ['item 1', 'Item 2']},'h'),
  DropdownMenu: _visualTemplate(frameControl.DropdownMenu,'DropdownMenu','char',' ',small,{items: ['item 1', 'Item 2']},'h'),
  Slider: _visualTemplate(frameControl.Slider,'Slider','double',0.5,small,{min: 0, max: 1, step: 0.1},'h'),

  Typography: _visualTemplate(frameControl.Typography,'Typography','char','Text',medium,{style: {border: '1px', borderStyle:'solid', borderWidth: 1, borderRadius: 8}, eProps: {level: 'h2'}}, 'b'),  
  HtmlText: _visualTemplate(frameControl.HtmlText,'HtmlText','char','<h1>Some html</h1>',medium,{},'b'),
  Image: _visualTemplate(frameControl.Image,'Image','char',' ',small,{},'b'), 
  VSCode: _visualTemplate(frameControl.VScode,'VSCode','char',' ',medium,{language: 'text'},'b'),



  /* misc */
  Divider: _visualTemplate(frameControl.Divider,'Divider','char','Divider',small,{orientation: 'horizontal'},'h'), 
  PlaceHolder: _visualTemplate(frameControl.PlaceHolder,'PlaceHolder','char',' ',small,{},'b'),
  Image: _visualTemplate(frameControl.Image,'Image','char',' ',small,{},'b'), 
  

  /* local files */
 // SelectLocalFiles: _visualTemplate(frameControl.SelectLocalFile,'SelectLocalFile','char',' ',small,{valueType: 'content'},'h'),

  /* composites */
  //TableViewer: _visualTemplate(frameControl.TableViewer,'TableViewer','char',' ',medium,
  // {style: {border: '1px', borderStyle:'solid', borderWidth: 1, borderRadius: 8}, sharedProps: ' ',dataProps: {lib: ' ', table: ' ', form: ' ', folder: ' ',userFunctions: null, _byvars: [], show: [], drop:[],where: ' ', limit: 10 }},{}, 'b'),
  //FormViewer: _visualTemplate(frameControl.FormViewer,'FormViewer','char',' ',medium,
  //  {style: {border: '1px', borderStyle:'solid', borderWidth: 1, borderRadius: 8},sharedProps: ' ', dataProps: {lib: ' ', table: ' ', form: ' ', folder: ' ',userFunctions: null, _byvars: [], show: [], drop:[],where: ' ', limit: 1 }},{}, 'b'), 
  // VaSDK: _visualTemplate(frameControl.VaSDK,'VaSDK','char','Retail Insights',medium,{url: ' ', auth: 'credentials', sharedProps: ' '},{}, 'b'),

  /* data */
  //SelectLibrary: _visualTemplate(frameControl.SelectLibrary,'SelectLibrary','char',' ',small,{source: ' ',sharedProps: ' '},{}, 'h'),
  //SelectTable: _visualTemplate(frameControl.SelectTable,'SelectTable','char',' ',small,{lib: ' ', sharedProps: ' ',refresh: false},{}, 'h'),
  //SelectColumns: _visualTemplate(frameControl.SelectColumns,'SelectColumns','char',' ',small,{lib: ' ', table: ' ', sharedProps: ' ',separator: ' ', refresh: false},{}, 'h'),
  //DistintValues: _visualTemplate(frameControl.DistinctValues,'DistinctValues','char',' ',small,{lib: ' ', table: ' ', sharedProps: ' ',column: ' ', where: ' ' },{}, 'h'),
  /* only for Viya and not workbench */
  // SelectReport: _visualTemplate(frameControl.SelectReport,'SelectReport','char',' ',small,{folder: ' ', filter: {}, sharedProps: ' '},{}, 'h'),
  // SelectFolder: _visualTemplate(frameControl.SelectFolder,'SelectFolder','char',' ',small,{filter: {}, sharedProps: ' '},{}, 'h'),
  // SelectFiles: _visualTemplate(frameControl.SelectFiles,'SelectFiles','char',' ',small,{folder: ' ', filter: {}, sharedProps: ' '},{}, 'h'),
 }

return controls;
function _visualTemplate(component, label, type, value, initialSize, props, resize) {
  return {
    component: component,
    label: label,
    type: type,
    grow: resize,
    value: value,
    width: initialSize.width,
    height: initialSize.height,
    props: props,
    dataProps: ''
    }
};
}
export default main;
