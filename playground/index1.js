/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// import { jsx } from 'react/jsx-runtime';
import React from 'react';  
import JoyButton from "./src/JoyButton.js";
import _visualTemplate from "../_visualTemplate.js";

  let small = { height: 30, width: 200 };
  let medium = { height: 120, width: 400 };
  let large = { height: 120, width: 400 };
  let props = {}; // if you want to pass in some default props - helpful to users in property sheet
  

  let controls = {
   
    Button: _visualTemplate(
      JoyButton,
      "Button",
      "string",
      "button",
      small,
      {label: " "},
      "b"
    ),
    
    //SelectLocalFiles: _visualTemplate(frameControl.SelectLocalFile,'SelectLocalFile','char',' ',small,{valueType: 'content'},'h'),
  };
 

 export {controls}; 
 
  

