/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import btoa from 'btoa';

function Image(props) {
  const {value, label, style, srcType, refresh} = props;

  // let ePropsL = {variant: 'outlined', disabled: designMode, color: 'primary', size:"md", ...eProps};

  // using value - to allow for changing the text of the button programmatically

  let sx = {height: 'inherit',borderStyle: 'solid',borderWidth: '1px', borderRadius: 8, width: 'inherit', ...style};
  let sx2 = {height: 'inherit',width: 'inherit'};
  
  let src = value;
  if (srcType != null) {  
    src = dataUrl(value, srcType);
  }
  
  let show =  <div key={refresh} style={sx} ><img src={src} crossOrigin="" alt={label} key={refresh+1} style={sx2}  /> </div>;

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