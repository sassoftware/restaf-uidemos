/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import checkCode from './checkCode';
function updateHandlers(newVisual, appEnv, type) {
  // make sure OnEdit, style and elementProps can be parsed and converted to functions
  let src = newVisual.props[type];
  let stat = {open: false, status: null};
  // no code, just return
  if (src == null || src.trim().length === 0) {
    newVisual.props.handlers[type] = null;
    return {newVisual, stat};
  }
  newVisual.props.handlers[type] = null;
  switch (type) {
    case 'onEdit': {
      let f = checkCode(src, 'async ', false);
      if (f === null) {
        stat = { open: true, status: {statusCode: 2, msg: `Failed to parse ${type}. Please see console` }};
      } else {
        newVisual.props.handlers.onEdit = f();
      }
      return { newVisual, stat };
    }
    case 'style'    :
    case 'dataProps': {
      src = (src.indexOf('return') < 0) ? 'return ' + src + ';' : src;
      let f = checkCode(src, ' ', true);
      if (f === null) { 
        stat = { open: true, status: {statusCode: 2, msg: `Failed to parse ${type}. Please see console` }};
      } else {
        newVisual.props.handlers[type] = f();
      }
      return { newVisual, stat };
    }
   
    default: {
      return {newVisual, stat};
    }
  }
}
export default updateHandlers;