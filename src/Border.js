/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React  from 'react';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function Border (props) {
  const {name, sx, elevation, ...eProps} = props;

let isx = {height: 'inherit', width: 'inherit', backgroundColor:  '#f5f5f5', ...sx};
// Create a custom theme
let tprop  =  {
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: isx.backgroundColor, // Change background color
         // padding: '16px',            // Add some padding
          elevation: (elevation == null) ? 5 : elevation, // Add shadow depth  
          height: isx.height,
          width: isx.width,           // Set elevation for shadow effect
          borderRadius: '8px'        // Rounded corners
        },
      },
    },
  }};
  console.log('tprop', tprop);
const theme = createTheme(tprop);

return (
  <ThemeProvider theme={theme}>
    <Paper key={`${name}paper`} sx={{zindex: 1}}>
    </Paper>
  </ThemeProvider>
);
}
export default Border;