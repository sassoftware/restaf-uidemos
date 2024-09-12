/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React  from 'react';
import Paper from '@mui/material/Paper';
import shadows from '@mui/system/shadows';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function Border (props) {
  const {name, sx, usediv, elevation, ...eProps} = props;
  let tprop = {
    MuiPaper: {
      root: {
        backgroundColor: '#f5f5f5', // Light grey background
        elevation: elevation,                // Set elevation for shadow effect
        borderRadius: '8px',         // Rounded corners
      }
    }};
  console.log('--------------------', tprop);
  debugger;
  const theme = createTheme(tprop);

 let isx = {height: 'inherit',  width: 'inherit',zindex: 1, ...sx};
 let V =  <Paper key={`${name}paper`} style={isx}  {...eProps} ></Paper>;

 return <ThemeProvider theme={theme}>{V}</ThemeProvider>;
}
export default Border;