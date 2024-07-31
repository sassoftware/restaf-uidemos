/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React  from 'react';
function PlaceHolder (props) {
  const {style} = props;
  let sx = {height: 'inherit', zindex: -1, borderStyle: 'solid',borderWidth: '1px', borderRadius: 8, width: 'inherit', ...style};
  return <div style={sx}>{props.value}</div>
}
export default PlaceHolder;
