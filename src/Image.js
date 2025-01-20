/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import btoa from 'btoa';

function Image(props) {
  const {value, label, sx, srcType, _appContext,refresh} = props;



  // using value - to allow for changing the text of the button programmatically

  let isx = {borderStyle: 'solid',borderWidth: '1px', borderRadius: 8, width: 'inherit', height: 'inherit', ...sx};
  let sx2 = {height: 'inherit',width: 'inherit'};
  
  let src = (value == null) ? "data:," : value;
  let ilabel = (label == null) ? "Image" : label;
  if (srcType != null) {  
    src = dataUrl(value, srcType);
  }
  let key = (refresh != null) ? refresh : 'image';
  let show =  <div key={key} style={isx} ><img src={src} crossOrigin="" alt={ilabel} style={sx2}  /> </div>;

  return show;

function svgToDataURL(svgString) {
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
}

function pngToDataURL(pngBuffer) {
  return 'data:image/png;base64,' + pngBuffer.toString('base64');
}
function dataUrl (value, srcType) {
    let data  = (srcType === 'svg') ? svgToDataURL(value) : pngToDataURL(value);
    return data;
  }
}
export default Image;