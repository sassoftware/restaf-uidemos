/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initialLayout() {

  let microProp = {
    x: 0,
    y: 0,
    width: 200,
    height: 5,
    backgroundColor: 'none',
    touchAction: 'None',
    zIndex: 2,
    position: 'absolute'
  };
  let defaultProp = {
    x: 0,
    y: 0,
    width: 200,
    height: 15,
    backgroundColor: 'none',
    touchAction: 'None',
    position: 'absolute',
    zIndex: 2,
  };
  let smallProp = {
    x: 0,
    y: 0,
    width: 200,
    height: 30,
    backgroundColor: 'none',
    touchAction: 'None',
    position: 'absolute',
    zIndex: 2 
  };
  let smallLongProp = {
    x: 0,
    y: 0,
    width: 400,
    height:60,
    backgroundColor: 'none',
    touchAction: 'None',
    zIndex: 2,
    position: 'absolute'
  };
  let mediumProp = {
    x: 0,
    y: 0,
    width: 400,
    height:120,
    backgroundColor: 'none',
    touchAction: 'None',
    zIndex: 2,
    position: 'absolute'
  };
  let largeProp = {
    x: 0,
    y: 0,
    width: 400,
    height:120,
    backgroundColor: 'none',
    touchAction: 'None',
    zIndex: 2,
    position: 'absolute'
  }

  let items = {
    Button     : { ...smallProp },
    Checkbox   : { ...smallProp },
    Dropdown   : { ...defaultProp },
    Html       : {...mediumProp},
    HtmlText   : {...mediumProp},
    Input      : { ...defaultProp},
    InputText  : { ...defaultProp},
    Inputarea  : { ...defaultProp},
    Divider    : { ...microProp},
    // PlaceHolder: {...mediumProp},
    // SASItemsDropDown: {...defaultProp},
    DistinctValues: {...defaultProp},
    SelectLibrary: {...defaultProp},
    SelectTable: {...defaultProp},
    SelectColumns: {...defaultProp},
    SelectReport: {...defaultProp},
    SelectFolder: {...defaultProp},
    SelectFiles: {...defaultProp},
    SelectLocalFile: {...defaultProp},
    SelectLocalFolder: {...defaultProp},
    Slider: {...defaultProp},
    TableViewer: {...largeProp},
    FormViewer: {...largeProp},
    Typography: {...smallLongProp},
    VaSDK: {...largeProp},
    PlaceHolder: {...mediumProp, zIndex: 0},
    Image: {...mediumProp},
    DropdownMenu: {...defaultProp},
    RadioGroup: {...mediumProp},
    Select: {...defaultProp},
    VScode : {...largeProp},
    //Markdown: {...mediumProp}
  }
  return items;
}
export default initialLayout;