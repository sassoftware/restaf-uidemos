/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import Sheet from '@mui/joy/Sheet';
function HtmlText(props) {
  let {value, name, sx,refresh,_appContext} = props;
 
 let htmlContent = { __html: value };
 
  let isx = { height: 'inherit', width: 'inherit', overflow: 'auto', textAlign: 'left', borderStyle: 'solid', borderWidth: '1px'}; 
  if (sx !== null) {
    isx = { ...isx, ...sx };
  };
  
  let shkey = name + '_sheet';
  if (refresh != null) {
      shkey = shkey + Date();
  }

  return (
  
    <div key="htmltext" style={isx} dangerouslySetInnerHTML={htmlContent}></div>

  );
}
export default HtmlText;
//  <div style={sx} dangerouslySetInnerHTML={html}></div>