/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Box from '@mui/material/Box';
function Background (props) {
const {sx} = props;

let isx = {height: 'inherit', width: 'inherit', zindex: 1, boxShadow: 2, ...sx};

return (
    <Box key={"paper"} sx={isx}>
    </Box>

);
}
export default Background;
