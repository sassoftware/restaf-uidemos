/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function getStyles(props) {
  let {name, handlers, sharedProps} = props;
  const {data, appEnv} = sharedProps;
  let sx = (typeof handlers.style === 'function') ? handlers.style(data[0], name, 0, appEnv) : {};
  
  // next gen
  // allow for this form: {style: {}, other props};
  
  if (sx.hasOwnProperty('style') === true) { // version 2 - new style
    return sx;  // v2 means new style;   
  } else {
    let eProps = (sx.eProps != null) ? {...sx.eProps} : {};
    delete sx.eProps;
    let newStyle = {style: sx, eProps: eProps};
    return newStyle;
  }
}
export default getStyles;
