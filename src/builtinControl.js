/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import frameControl from './index.js'
function builtinControls() {
  let small = {height: 30, width: 200};
  let medium ={height: 120, width: 400};
  //let large = {height: 400, width: 400};
  function _visualTemplate(component, label, type, value, initialSize, props,dataProps, grow) {
    return {
      component: component,
      label: label,
      type: type,
      value: value,
      grow: grow,
      width: initialSize.width,
      height: initialSize.height,
      props: props, 
      dataProps: dataProps
      }
  };

let controls = {
    /* text */
    Input: _visualTemplate(frameControl.Input,'Input','double',0,small,{align: 'right'},{}, 'h'),
    InputText: _visualTemplate(frameControl.InputText,'InputText','char','text',small,{align: 'left'},{}, 'h'),
    Inputarea: _visualTemplate(frameControl.Inputarea,'InputArea','char', ' ', medium,{minRows: 2},{}, 'b'),

    Typography: _visualTemplate(frameControl.Typography,'Typography','char','Text',medium,{style: {border: '1px', borderStyle:'solid', borderWidth: 1, borderRadius: 8}, eProps: {level: 'h2'}},{}, 'b'),  
    HtmlText: _visualTemplate(frameControl.HtmlText,'HtmlText','char','<h1>Some html</h1>',medium,{},{}, 'b'),
    VSCode: _visualTemplate(frameControl.VScode,'VSCode','char',' ',medium,{language: 'text'},{}, 'b'),
  
    /* buttons and selectors */
    Button: _visualTemplate(frameControl.Button,'Button','char','button',small,{},{}, 'h'),
    Checkbox: _visualTemplate(frameControl.Checkbox,'Checkbox','double',1,small,{},{}, 'h'),
    RadioGroup: _visualTemplate(frameControl.RadioGroup,'RadioGroup','char',' ',small,{items: ['item 1', 'Item 2'], itemType: 'label'},{}, 'b'),
    Dropdown: _visualTemplate(frameControl.Dropdown,'Dropdown','char',' ',small,{items: ['item 1', 'Item 2']},{}, 'h'),
    DropdownMenu: _visualTemplate(frameControl.DropdownMenu,'DropdownMenu','char',' ',small,{items: ['item 1', 'Item 2']},{}, 'h'),
    Slider: _visualTemplate(frameControl.Slider,'Slider','double',0.5,small,{min: 0, max: 1, step: 0.1},{}, 'h'),
 
    /* misc */
    Divider: _visualTemplate(frameControl.Divider,'Divider','char','Divider',small,{orientation: 'horizontal'},{}, 'h'), 
    PlaceHolder: _visualTemplate(frameControl.PlaceHolder,'PlaceHolder','char',' ',small,{},{}, 'b'),
    Image: _visualTemplate(frameControl.Image,'Image','char',' ',small,{},{}, 'b'), 
    VaSDK: _visualTemplate(frameControl.VaSDK,'VaSDK','char','Retail Insights',medium,{url: ' ', auth: 'credentials', sharedProps: ' '},{}, 'b'),
   
    /* data */
    SelectLibrary: _visualTemplate(frameControl.SelectLibrary,'SelectLibrary','char',' ',small,{source: ' ',sharedProps: ' '},{}, 'h'),
    SelectTable: _visualTemplate(frameControl.SelectTable,'SelectTable','char',' ',small,{lib: ' ', sharedProps: ' ',refresh: false},{}, 'h'),
    SelectColumns: _visualTemplate(frameControl.SelectColumns,'SelectColumns','char',' ',small,{lib: ' ', table: ' ', sharedProps: ' ',separator: ' ', refresh: false},{}, 'h'),
    DistintValues: _visualTemplate(frameControl.DistinctValues,'DistinctValues','char',' ',small,{lib: ' ', table: ' ', sharedProps: ' ',column: ' ', where: ' ' },{}, 'h'),
  
    /* local files */
    SelectLocalFiles: _visualTemplate(frameControl.SelectLocalFile,'SelectLocalFile','char',' ',small,{valueType: 'content'},{}, 'h'),
  
    /* composites */
    TableViewer: _visualTemplate(frameControl.TableViewer,'TableViewer','char',' ',medium,
      {style: {border: '1px', borderStyle:'solid', borderWidth: 1, borderRadius: 8}, sharedProps: ' ',dataProps: {lib: ' ', table: ' ', form: ' ', folder: ' ',userFunctions: null, _byvars: [], show: [], drop:[],where: ' ', limit: 10 }},{}, 'b'),
    FormViewer: _visualTemplate(frameControl.FormViewer,'FormViewer','char',' ',medium,
      {style: {border: '1px', borderStyle:'solid', borderWidth: 1, borderRadius: 8},sharedProps: ' ', dataProps: {lib: ' ', table: ' ', form: ' ', folder: ' ',userFunctions: null, _byvars: [], show: [], drop:[],where: ' ', limit: 1 }},{}, 'b'), 

    /* only for Viya and not workbench */
    SelectReport: _visualTemplate(frameControl.SelectReport,'SelectReport','char',' ',small,{folder: ' ', filter: {}, sharedProps: ' '},{}, 'h'),
    SelectFolder: _visualTemplate(frameControl.SelectFolder,'SelectFolder','char',' ',small,{filter: {}, sharedProps: ' '},{}, 'h'),
    SelectFiles: _visualTemplate(frameControl.SelectFiles,'SelectFiles','char',' ',small,{folder: ' ', filter: {}, sharedProps: ' '},{}, 'h'),
 
  };
  return controls;
}
export default builtinControls;