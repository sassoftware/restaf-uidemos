/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
// import sanitize from 'sanitize-html';
import Sheet from '@mui/joy/Sheet';
//import parse  from 'html-react-parser';

function HtmlText(props) {
  let {value, name, sx,refresh} = props;
 
 let htmlContent = { __html: value };
 
  let isx = { height: 'inherit', width: 'inherit', overflowY: 'scroll', textAlign: 'left', borderStyle: 'solid', borderWidth: '1px'}; 
  if (sx !== null) {
    isx = { ...isx, ...sx };
  };
  
  let shkey = name + '_sheet';
  if (refresh != null) {
      shkey = shkey + Date();
  }

  return (
    <Sheet key={shkey} style={isx}>
    <div key={name} style={isx} dangerouslySetInnerHTML={htmlContent}></div>
    </Sheet>
  );
}
export default HtmlText;
//  <div style={sx} dangerouslySetInnerHTML={html}></div>