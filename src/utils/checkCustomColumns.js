/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function checkCustomColumns(currentColumns, custom) {
  
  let updated = {};
  let errcnt = 0;
  ;
  if (Object.keys(custom).length === 0) {
    return {err: false, custom: {}}
  }
  for (let c in custom) {
    let cl = c.toLowerCase();
    let v = { Column: cl, FormattedLength: 12, Label: cl, Type: 'double' };
    let col = custom[c];
    for (let p in col) {
      let pl = p.toLowerCase();
      switch (pl) {
        case 'column': {
          v.Column = col[p];
          break;
        }
        case 'formattedlength':
        case 'length': {
          v.FormattedLength = col[p];
          break;
        }
        case 'label': {
          v.Label = col[p];
          break;
        }
        case 'type': {
          v.Type = col[p];
          break;
        }
        case 'value': {
          v.value= col[p];
          break;
        }
        default: {
          errcnt++;
          break;
        }
      }
      
      
    }
    updated[cl] = {...v};
  }
  if (errcnt > 0) {
    return { err: true, custom: null};
  }

  let errCol = [];
  let customKeys = Object.keys(updated);
  customKeys.forEach ((c) => {
    let cr = currentColumns[c];
    if (cr != null && cr.custom === false) {
      errCol.push(c);
    }
  })
  if (errCol.length > 0 ) {
    console.log('ERROR: The following custom column name exists in the table', errCol);
    return {err: true, custom: updated}
  }
  else {
    
    return {err: false, custom: updated};
  }
}
export default checkCustomColumns;
