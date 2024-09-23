/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import frameControl from "./src/index.js";
function main(set) {
  let small = { height: 30, width: 200 };
  let medium = { height: 120, width: 400 };
  let large = { height: 120, width: 400 };
  let props = {}; // if you want to pass in some default props - helpful to users in property sheet
  

  let controls = {
    Input: _visualTemplate(
      frameControl.Input,
      "Input",
      "double",
      0,
      small,
      { align: "right" },
      "h"
    ),
    InputText: _visualTemplate(
      frameControl.InputText,
      "InputText",
      "char",
      "text",
      small,
      { align: "left" },
      "h"
    ),
    Inputarea: _visualTemplate(
      frameControl.Inputarea,
      "InputArea",
      "char",
      " ",
      medium,
      { minRows: 2, maxRows: 5 },
      "h"
    ),
    Button: _visualTemplate(
      frameControl.Button,
      "Button",
      "char",
      "button",
      small,
      {},
      "b"
    ),
    Checkbox: _visualTemplate(
      frameControl.Checkbox,
      "Checkbox",
      "double",
      1,
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
      },
      "h"
    ),
    RadioGroup: _visualTemplate(
      frameControl.RadioGroup,
      "RadioGroup",
      "char",
      " ",
      small,
      { items: ["item 1", "Item 2"], valueType: "label" },
      "h"
    ),
    Dropdown: _visualTemplate(
      frameControl.Dropdown,
      "Dropdown",
      "char",
      " ",
      small,
      { items: ["item 1", "Item 2"] },
      "h"
    ),
    Dropdown: _visualTemplate(
      frameControl.Dropdown,
      "Dropdown",
      "char",
      " ",
      small,
      { items: ["item 1", "Item 2"], multiple: false },
      "h"
    ),
    DropdownMenu: _visualTemplate(
      frameControl.DropdownMenu,
      "DropdownMenu",
      "char",
      " ",
      small,
      { items: ["item 1", "Item 2"], valueType: "label" },
      "n"
    ),
    //Listbox: _visualTemplate(frameControl.Listbox,'Listbox','char',' ',small,
    //   {sx: {borderStyle: 'solid', borderWidth: '1px', borderColor: 'black'},items: ['item 1', 'Item 2'], valueType: 'label', labelProp: {sx: {backgroundColor: 'lightgrey'},level: 'h4'}},'b'),
    Slider: _visualTemplate(
      frameControl.Slider,
      "Slider",
      "double",
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
      },
      "h"
    ),

    Typography: _visualTemplate(
      frameControl.Typography,
      "Typography",
      "char",
      "Text",
      medium,
      {
        sx: {
          border: "1px",
          borderStyle: "solid",
          borderWidth: 1,
          borderRadius: 8,
        },
        color: "neutral",
        level: "h2",
      },
      "h"
    ),
    HtmlText: _visualTemplate(
      frameControl.HtmlText,
      "HtmlText",
      "char",
      "<h1>Some html</h1>",
      medium,
      {},
      "b"
    ),
    WebContent: _visualTemplate(
      frameControl.WebContent,
      "WebContent",
      "char",
      "<h1>Some html</h1>",
      medium,
      {},
      "b"
    ),
    //Image: _visualTemplate(frameControl.Image,'Image','char',' ',small,{},'b'),
    VSCode: _visualTemplate(
      frameControl.VScode,
      "VSCode",
      "char",
      " ",
      medium,
      { language: "text" },
      "b"
    ),

    /* misc */
    Divider: _visualTemplate(
      frameControl.Divider,
      "Divider",
      "char",
      "Divider",
      small,
      { orientation: "horizontal" },
      "h"
    ),
    Border: _visualTemplate(
      frameControl.Border,
      "Border",
      "char",
      " ",
      medium,
      {
        name: " ",
        sx: { backgroundColor: "#f5f5f5", borderRadius: 4, boxShadow: 4 },
      },
      "b",
      1
    ),
    Image: _visualTemplate(
      frameControl.Image,
      "Image",
      "char",
      " ",
      small,
      {},
      "b"
    ),
  };
  /* local files */
  // SelectLocalFiles: _visualTemplate(frameControl.SelectLocalFile,'SelectLocalFile','char',' ',small,{valueType: 'content'},'h'),

  let sasControls = {
    VaSDK: _visualTemplate(
      frameControl.VaSDK,
      "VA Reports",
      "char",
      "Retail Insights",
      medium,
      { name: " ", url: " ", auth: "credentials", appConfig: " " },
      "b"
    ),
    SelectLibrary: _visualTemplate(
      frameControl.SelectLibrary,
      "SelectLibrary",
      "char",
      " ",
      small,
      { name: " ", source: " ", appConfig: " " },
      "h"
    ),
    SelectTable: _visualTemplate(
      frameControl.SelectTable,
      "SelectTable",
      "char",
      " ",
      small,
      { name: " ", lib: " ", appConfig: " ", refresh: false },
      "h"
    ),
    SelectColumns: _visualTemplate(
      frameControl.SelectColumns,
      "SelectColumns",
      "char",
      " ",
      small,
      {
        name: " ",
        lib: " ",
        table: " ",
        appConfig: " ",
        separator: " ",
        refresh: false,
      },
      "h"
    ),
    DistinctValues: _visualTemplate(
      frameControl.DistinctValues,
      "DistinctValues",
      "char",
      " ",
      small,
      {
        name: " ",
        lib: " ",
        table: " ",
        appConfig: " ",
        column: " ",
        where: " ",
      },
      "h"
    ),
  };

  let viyaControls = {
    /* only for Viya and not workbench */
    SelectReport: _visualTemplate(
      frameControl.SelectReport,
      "SelectReport",
      "char",
      " ",
      small,
      { folder: " ", filter: {}, appConfig: " " },
      "h"
    ),
    SelectFolder: _visualTemplate(
      frameControl.SelectFolder,
      "SelectFolder",
      "char",
      " ",
      small,
      { filter: {}, appConfig: " " },
      "h"
    ),
    SelectFiles: _visualTemplate(
      frameControl.SelectFiles,
      "SelectFiles",
      "char",
      " ",
      small,
      { folder: " ", filter: {}, appConfig: " " },
      "h"
    ),
  };

  let r =
    set === "basic"
      ? controls
      : set === "sas"
      ? Object.assign({}, controls, sasControls)
      : set === "viya"
      ? Object.assign({}, controls, sasControls, viyaControls)
      : {};
  return r;

  function _visualTemplate(
    component,
    label,
    type,
    value,
    initialSize,
    props,
    resize,
    zIndex
  ) {
    /**
     * component: React component
     * label: label for the component property sheet
     * type: type of the component(number or char)
     * value: default value 
     * initialSize: initial size of the component{width: 200, height: 30}
     * props: props for the component ( a javascript object with calculations)
     * resize: allowed resize direction in designer (h, v, n = horizonatal, vertical, both)
     * zIndex: z-index for the component ( the default is 2. used primarily for the border component)
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
      props: { name: " ", label: "*", ...props }
    };
  }
}
export default main;
