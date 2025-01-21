/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import jsx  from 'react/jsx-runtime';
//import React from 'react';
import frameControl from "./src/index.js";
import _visualTemplate from "./_visualTemplate.js";


  let small = { height: 30, width: 200 };
  let medium = { height: 120, width: 400 };
 // let large = { height: 120, width: 400 };
 // let props = {}; // if you want to pass in some default props - helpful to users in property sheet
  

  let basicControls = {
    Input: _visualTemplate(
      frameControl.Input,
      "Input",
      "number",
      0,
      small,
      { align: "right", label: "", sx: {} },
      "h"
    ),
    InputText: _visualTemplate(
      frameControl.InputText,
      "InputText",
      "string",
      " ",
      small,
      { align: "left", label: "", sx:{} },
      "h"
    ),
    Inputarea: _visualTemplate(
      frameControl.Inputarea,
      "InputArea",
      "string",
      " ",
      medium,
      { minRows: 2, maxRows: 5 , sx:{}, label: "" },
      "h"
    ),
    Button: _visualTemplate(
      frameControl.Button,
      "Button",
      "string",
      "button",
      small,
      {label: " ", sx:{}},
      "b"
    ),
    Checkbox: _visualTemplate(
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
      frameControl.RadioGroup,
      "RadioGroup",
      'array',
      [],
      small,
      { items: ["item1", "Item2"], label: " ", valueType: 'index', sx:{} },
      "h"
    ),
    Dropdown: _visualTemplate(
      frameControl.Dropdown,
      "Dropdown",
      "array",
      [],
      small,

      { items: ["item 1", "Item 2"], label: " ",  valueType: 'index', sx:{}},
      "h"
    ),
   
    DropdownMenu: _visualTemplate(
      frameControl.DropdownMenu,
      "DropdownMenu",
      "array",
      [],
      small,
      { items: ["item1", "Item2"], valueType: "index", sx:{} },
      "n"
    ),
    //Listbox: _visualTemplate(frameControl.Listbox,'Listbox','char',' ',small,
    //   {sx: {borderStyle: 'solid', borderWidth: '1px', borderColor: 'black'},items: ['item 1', 'Item 2'], valueType: 'index', labelProp: {sx: {backgroundColor: 'lightgrey'},level: 'h4'}},'b'),
    Slider: _visualTemplate(
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

    Typography: _visualTemplate(
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
        altValue: "Text",
        color: "neutral",
        level: "h2",
      },
      "h"
    ),
    
    /* misc */
    Divider: _visualTemplate(
      frameControl.Divider,
      "Divider",
      "string",
      "Divider",
      small,
      { orientation: "horizontal", label: " ", sx:{} },
      "h"
    ),
    Background: _visualTemplate(
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
    HtmlText: _visualTemplate(
      frameControl.HtmlText,
      "HtmlText",
      "string",
      "<h1>Some html</h1>",
      medium,
      {label: " ", sx:{}},
      "b"
    ),
    WebContent: _visualTemplate(
      frameControl.WebContent,
      "WebContent",
      "string",
      "",
      medium,
      {label: " ", sx:{}},
      "b"
    ),
    Image: _visualTemplate(
      frameControl.Image,
      "Image",
      "string",
      " ",
      medium,
      {label: " ", srcType: null, sx:{}},
      "b"
    ),
    VScode: _visualTemplate(
      frameControl.VScode,
      "VSCode",
      "string",
      " ",
      medium,
      { language: "text" , label: " ", sx:{}},
      "b"
    ),

    
    
    
    //SelectLocalFiles: _visualTemplate(frameControl.SelectLocalFile,'SelectLocalFile','char',' ',small,{valueType: 'content'},'h'),
  };
  /* local files */
  

  let sasControls = {
    ...basicControls,
    SelectLibrary: _visualTemplate(
      frameControl.SelectLibrary,
      "SelectLibrary",
      "string",
      " ",
      small,
      { source: 'cas' ,sx:{}},
      "h"
    ),
    SelectTable: _visualTemplate(
      frameControl.SelectTable,
      "SelectTable",
      "string",
      " ",
      small,
      { lib: " ",  source: 'cas', refresh: false, sx:{} },
      "h"
    ),
    DataGrid: _visualTemplate(
      frameControl.DataGrid,
      "DataGrid",
      "string",
      " ",
      medium,
      { sx:{}, source: 'cas', value: '',lib: '',table: '',limit: 20, keep: [], gridOptions: {}, gridClass:'', refresh: false },
      "b"
    ),
    SelectColumns: _visualTemplate(
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
  };

  let controls = {
    /* only for Viya and not workbench */
    ...sasControls,
    SelectReport: _visualTemplate(
      frameControl.SelectReport,
      "SelectReport",
      "string",
      " ",
      small,
      { folder: " ", filter: {}, sx:{}},
      "h"
    ),
    VaSDK: _visualTemplate(
      frameControl.VaSDK,
      "View VA Report",
      "string",
      "Retail Insights",
      medium,
      {  url: " ", auth: "credentials", sx:{}},
      "b"
    )
  };
 
 export {controls};

 
  

