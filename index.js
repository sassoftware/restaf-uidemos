/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import jsx  from 'react/jsx-runtime';
//import React from 'react';
import frameControl from "./src/index.js";
import _visualTemplate from "./_visualTemplate.js";

  let defsize = {width: 'fit-content', height: 'fit-content'};
  let small = { height: 30, width: 200 };
  let medium = { height: 120, width: 400 };
 // let large = { height: 120, width: 400 };
 // let props = {}; // if you want to pass in some default props - helpful to users in property sheet
  
  console.log("frameControl", frameControl);
  debugger;
  let basicControls = {
    
    Input: _visualTemplate(
      'Inputs', 
      frameControl.Input,
      "Input",
      "number",
      0,
      small,
      { align: "right", label: "", sx: {} },
      "h"
    ),
    InputText: _visualTemplate(
      'Inputs', 
      frameControl.InputText,
      "InputText",
      "string",
      " ",
      small,
      { align: "left", label: "", sx:{} },
      "h"
    ),
    
    Inputarea: _visualTemplate(
      'Inputs', 
      frameControl.Inputarea,
      "InputArea",
      "string",
      " ",
      medium,
      { minRows: 2, maxRows: 5 , sx:{}, label: "" },
      "h"
    ),
    Button: _visualTemplate(
      'Inputs',
      frameControl.Button,
      "Button",
      "string",
      "button",
      small,
      {label: " ", sx:{}},
      "b"
    ), 
    Slider: _visualTemplate(
      "Inputs",
      frameControl.Slider,
      "Slider",
      "number",
      0.5,
      small,
      {
        min: 0,
        max: 1,
        step: 0.1,
        marks: true,
        color: "primary",
        variant: "solid",
        track: "normal",
        size: "sm",
        label: " ",
        sx:{}
      },
      "h"
    ),
    Checkbox: _visualTemplate(
      'Inputs',
      frameControl.Checkbox,
      "Checkbox",
      "boolean",
      true,
      small,
      {
        sx: {
          border: "1px",
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: 6,
        },
        variant: "outlined",
        size: "sm",
        label: " ",
      },
      "h"
    ),
    RadioGroup: _visualTemplate(
      "Inputs",
      frameControl.RadioGroup,
      "RadioGroup",
      'array',
      [],
      small,
      { items: ["item1", "Item2"], label: " ", valueType: 'index', sx:{} },
      "h"
    )

    
  };
  let selectors = {
   
   
    Dropdown: _visualTemplate(
      'Selectors',
      frameControl.Dropdown,
      "Dropdown",
      "array",
      [],
      small,

      { items: ["item 1", "Item 2"], label: " ", multiple: false, valueType: 'index', sx:{}},
      "h"
    ),
   
    MenuIcon: _visualTemplate(
      'Selectors',
      frameControl.MenuIcon,
      "MenuIcon",
      "array",
      [],
      defsize,
      { items: ["item1", "Item2"], valueType: "index", sx:{} },
      "n"
    ),
   
  };
  debugger;
  let xdocuments= {
    Image: _visualTemplate(
      'Documents',
      frameControl.Image,
      "Image",
      "string",
      " ",
      medium,
      {label: " ", srcType: null, sx:{}},
      "b"
    ),
       
    Typography: _visualTemplate(
      'Documents',
      frameControl.Typography,
      "Typography",
      "string",
      "",
      medium,
      {
        sx: {
          border: "1px",
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: 8,
        },
        altText: "Your text",
        color: "neutral",
        level: "h2",
      },
      "h"
    ),
    Notes: _visualTemplate(
      'Documents',
      frameControl.Notes,
      "Notes",
      "string",
      "",
      defsize,
      {  iconProps:{fontSize: 'small'}, 
      position: {
         anchorPosition:{ top: 50, left: 50 },
         anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
         transformOrigin:{
            vertical: 'top',
            horizontal: 'right',
          }
        },
        notes: true, 
        sx: {height: 200, width: 300}
       },
        "n"
    ),
    
    HTMLText: _visualTemplate(
      'Documents',
      frameControl.HtmlText,
      "HtmlText",
      "string",
      "<h1>Some html</h1>",
      medium,
      {label: " ",type: 'html', sx:{}},
      "b"
    ),
    WebContent: _visualTemplate(
      'Documents',
      frameControl.WebContent,
      "WebContent",
      "string",
      "",
      medium,
      {label: " ", sx:{}},
      "b"
    ),
    VScode: _visualTemplate(
      'Documents',
      frameControl.VScode,
      "VSCode",
      "string",
      " ",
      medium,
      { language: "text" , label: " ", sx:{}},
      "b"
    ) 
  };
  let misc = {
    
    /* misc */
    Divider: _visualTemplate(
      'Misc',
      frameControl.Divider,
      "Divider",
      "string",
      "Divider",
      small,
      { orientation: "horizontal", label: " ", sx:{} },
      "h"
    ),
    Background: _visualTemplate(
      'Misc',
      frameControl.Background,
      "Background",
      "string",
      " ",
      medium,
      {
        label: " ",
        sx: { backgroundColor: "#f5f5f5", borderRadius: 4, boxShadow: 4 },
      },
      "b",
      1
    ),
   
   

  };
  
  

  let sasControls = {
    SelectLibrary: _visualTemplate(
      'Viya',
      frameControl.SelectLibrary,
      "SelectLibrary",
      "string",
      " ",
      small,
      { source: 'cas' ,sx:{}},
      "h"
    ),
    SelectTable: _visualTemplate(
      'Viya',
      frameControl.SelectTable,
      "SelectTable",
      "string",
      " ",
      small,
      { lib: " ",  source: 'cas', refresh: false, sx:{} },
      "h"
    ),
    SelectColumns: _visualTemplate(
      'Viya',
      frameControl.SelectColumns,
      "SelectColumns",
      "array",
      [],
      small,
      {
        sx:{},
        source: 'cas',
        lib: " ",
        table: " ",
        multiple: true,
        refresh: false,
      },
      "h"
    ),
    DistinctValues: _visualTemplate(
      'Viya',
      frameControl.DistinctValues,
      "DistinctValues",
      "string",
      " ",
      small,
      {
        sx:{},
        source: 'cas',
        lib: " ",
        table: " ",
        column: " ",
        where: " ",
      },
      "h"
    ),
    DataGrid: _visualTemplate(
      'Viya',
      frameControl.DataGrid,
      "DataGrid",
      "string",
      " ",
      medium,
      { sx:{}, source: 'cas', value: '',lib: '',table: '',limit: 20, keep: [], gridOptions: {}, gridClass:'', refresh: false },
      "b"
    ),

    SelectReport: _visualTemplate(
      'Viya',
      frameControl.SelectReport,
      "SelectReport",
      "string",
      " ",
      small,
      { folder: " ", filter: {}, sx:{}},
      "h"
    ),
    VaSDK: _visualTemplate(
      'Viya',
      frameControl.VaSDK,
      "View VA Report",
      "string",
      "Retail Insights",
      medium,
      {  url: " ", auth: "credentials", sx:{}},
      "b"
    )
  };
  console.log(xdocuments);
  let controls = {
    ...basicControls,
    ...selectors,
    ...xdocuments,
    ...sasControls,
    ...misc,
   
  };
  console.log("Frame Controls", controls);  

 
 export {controls};

 
  

