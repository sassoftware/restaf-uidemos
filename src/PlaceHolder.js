/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React  from 'react';
import Sheet from '@mui/joy/Sheet';
function PlaceHolder (props) {
  const {sx, sheet} = props;
  let isx = {height: 'inherit',  borderStyle: 'solid',borderWidth: '1px', borderRadius: 8, width: 'inherit', ...sx};
  return (sheet === true) ? <Sheet><div style={isx} >{props.value}</div></Sheet> : <div style={isx} >{props.value}</div>    
}
export default PlaceHolder;