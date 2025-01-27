/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
function HtmlText(props) {
  let {value, sx,refresh} = props;
 
 let htmlContent = { __html: value };
 
  let isx = { height: 'inherit', width: 'inherit', overflow: 'auto', textAlign: 'left', borderRadius: 8, borderStyle: 'solid', borderWidth: '1px'}; 
  if (sx !== null) {
    isx = { ...isx, ...sx };
  };
  
  let shkey = 'htmltext';
  if (refresh != null) {
      shkey = shkey + Date();
  } 

  return (
  
    <div key={shkey} style={isx} dangerouslySetInnerHTML={htmlContent}></div>

  );
}
export default HtmlText;
//  <div style={sx} dangerouslySetInnerHTML={html}></div>