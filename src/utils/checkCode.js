/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function checkCode(isrc, type) {
  let src = isrc;
  
  if (src.indexOf('return') >= 0) {
    src = `{${src}}`;
  } else if (src.indexOf(';') > 0) {
      console.log('Code must be a single statement with no semi-colon');
      return null;
  }
  src = `return (${type} (data,name, row, appEnv) => ${src})`;
 
  try {
    // eslint-disable-next-line no-new-func
    let f = new Function(src);
    return f;
  }
  catch (err) {
    console.log(err);
    // eslint-disable-next-line no-throw-literal
    return null;
  }
}
export default checkCode;
