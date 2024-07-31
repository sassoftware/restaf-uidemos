/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import visualTemplate from "./utils/visualTemplate";
function visualProps(userControls) {

  const _makeProps = (modifiers, component, label) => {
    let v = visualTemplate();
    v.component = component;
    v.label = label;
    v.grow = (modifiers.grow == 'b') ? 'both' :
             (modifiers.grow === 'h') ? 'horizontal' : 
             (modifiers.grow === 'v') ? 'vertical' : 'none';
   
    let p = v.props;
    p.export  = false;
    p.visible = true;
    for (let k in modifiers) {
      if (k !== 'grow'){
        p[k] = modifiers[k];    
      }
    }
    v.disabled = false;
    return v;
  }
  
  if (userControls != null) {
    let uitems = {};
    for (let k in userControls) {
      let ut = userControls[k];
      let m = {value: ut.value, type: ut.type, grow: ut.grow};
      m.style = JSON.stringify(ut.props);
      m.dataProps= JSON.stringify(ut.dataProps);
      uitems[k] = _makeProps(m, k, ut.label);
    }
    return uitems;
  }

  let items = {
    /* text */
    Input: _makeProps({ value: 0, type: 'double',grow: 'h' }, 'Input', 'Input'),
    InputText: _makeProps({ grow: 'h',value: ' ', type: 'char', length: 24 }, 'InputText', 'Input Text'),
    Inputarea: _makeProps({ value: ' ', type: 'char', grow: 'both',style: "{eProps: {minRows: 2}}"}, 'Inputarea', 'Inputarea'),
    Typography: _makeProps({ value: 'Text' , style: "{border: '1px', borderStyle:'solid', borderWidth: 1, borderRadius: 8, eProps: {level: 'h2'}}"}, 'Typography', 'Typography'),
    HtmlText: _makeProps({ value: '<h1>Some html</h1>' }, 'HtmlText', 'Html Text'),
    VSCode: _makeProps({ value: ' ', type: 'char', style: "{eProps: {language: 'text'}}"}, 'VScode', 'Editor'),
  
    /* buttons and selectors */
    Button: _makeProps({ value: 'button', type: 'char' }, 'Button', 'Button'),
    Checkbox: _makeProps({ grow: 'h',value: 1, type: 'double' }, 'Checkbox', 'Checkbox'),
    RadioGroup: _makeProps({ value: ' ', type: 'char', dataProps:  "{items: ['item 1', 'Item 2'], itemType: 'label'}"}, 'RadioGroup', 'Radio Group'),
    Dropdown: _makeProps({ grow: 'h',value: ' ', type: 'char', dataProps:  "{items: ['item 1', 'Item 2']}"}, 'Dropdown', 'Dropdown'),
    DropdownMenu: _makeProps({grow: 'n', value: ' ', type: 'char', dataProps:  "{items: ['item 1', 'Item 2']}"}, 'DropdownMenu', 'Dropdown Menu'),
    Slider: _makeProps({ grow: 'h',type: 'double', value: 0.5, style:  "{eProps: {min: 0, max: 1, step: 0.1}}"}, 'Slider', 'Slider'),
 
    /* misc */
    Divider: _makeProps({ grow: 'h',value: 'Divider', style:"{eProps: {orientation: 'horizontal'}}" }, 'Divider', 'Divider'),
    PlaceHolder: _makeProps({ value: ''}, 'PlaceHolder', 'Border'),
    Image: _makeProps({ value: ' ', style: "{eProps: {height: 'inherit', width: 'inherit'}}"}, 'Image', 'Image'),
    VaSDK: _makeProps({  value: 'Retail Insights' , dataProps:  "{url: ' ', auth: 'credentials'}"}, 'VaSDK', 'Report Viewer'),
   
    /* data */
    SelectLibrary: _makeProps({ grow: 'h',value: ' '}, 'SelectLibrary', 'Select Library'),
    SelectTable: _makeProps({ grow: 'h',value: ' ', dataProps:  "{lib: ' ', refresh: false}"}, 'SelectTable', 'Select Table'),
    SelectColumns: _makeProps({ grow: 'h',value: ' ', type: 'char', dataProps:  "{lib: ' ', table: ' ', separator: ' ', refresh: false }"}, 'SelectColumns', 'Select Columns'),
    DistinctValues: _makeProps({ grow: 'h',value: ' ', dataProps: "{lib: ' ', table: ' ', column: ' ', where: ' ' }"}, 'DistinctValues', 'Distinct Values'),
  
    /* local files */
    SelectLocalFile: _makeProps({ grow: 'h',value: ' ', label: 'Open', buttonLabel: 'Open',dataProps:  "{valueType: 'content'}"}, 'SelectLocalFile', 'Select Local File'),
    SelectLocalFolder: _makeProps({ grow: 'h',value: ' ', label: 'Open', dataProps:  "{valueType: 'name'}"}, 'SelectLocalFolder', 'Select Local Folder'),
   
    /* composites */
    TableViewer: _makeProps({value: ' ',style: "{border: '1px', borderStyle:'solid', borderWidth: 1, borderRadius: 8}", 
                 dataProps:  "{lib: ' ', table: ' ', form: ' ', folder: ' ',userFunctions: null, _byvars: [], show: [], drop:[],where: ' ', limit: 10 }"}, 'TableViewer', 'Table Viewer'),
    FormViewer: _makeProps({value: ' ',style: "{border: '1px', borderStyle:'solid', borderWidth: 1, borderRadius: 8}",
                 dataProps:  "{lib: ' ', table: ' ', form: ' ', folder: ' ',userFunctions: null, _byvars: [], show: [], drop:[],where: ' ', limit: 1 }"}, 'FormViewer', 'Form Viewer'),
    
    /* only for Viya and not workbench */
    SelectReport: _makeProps({ grow: 'h',value: ' ', dataProps:  "{folder: ' ', filter: {} }"}, 'SelectReport', 'Select Report'),
    SelectFolder: _makeProps({ grow: 'h',value: ' ', dataProps:  "{filter: {} }"}, 'SelectFolder', 'Select Folder'),
    SelectFiles: _makeProps({ grow: 'h',value: ' ', dataProps:  "{folder: ' ', filter: {} }"}, 'SelectFiles', 'Select File'),
 
  };
  return items;


}
export default visualProps;



