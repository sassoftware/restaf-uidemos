/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React  from 'react';
import Paper from '@mui/material/Paper';
function PlaceHolder (props) {
  const {sx, usediv, ...eProps} = props;
 // let isx = {height: 'inherit',  borderStyle: 'solid',borderWidth: '1px', borderRadius: 8, width: 'inherit', ...sx};
  return (usediv ===  true) ? <div style={sx} {...eProps} ></div>  : <Paper style={sx} {...eProps} ></Paper>
}
export default PlaceHolder;