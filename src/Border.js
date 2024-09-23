/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React  from 'react';
import Box from '@mui/material/Box';
function Border (props) {
  const {name, sx} = props;

// let isx = {height: 'inherit', width: 'inherit', zindex: 1, boxShadow: 2, backgroundColor:  '#f5f5f5',border: 1, borderRadius: 4, ...sx};
let isx = {height: 'inherit', width: 'inherit', zindex: 1, boxShadow: 2, ...sx};
console.log(isx);
return (
    <Box key={`${name}paper`} sx={isx}>
    </Box>

);
}
export default Border;
