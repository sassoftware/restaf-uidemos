/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function checkColumns(currentColumns, customColumns, show, label) {

  let errCol = [];
  let colKeys = Object.keys(currentColumns).concat(Object.keys(customColumns))
  for (let i = 0; i < show.length; i++) {
    let c = show[i];
    if (colKeys.includes(c) === false) {
      errCol.push(c);
    }
  };
  if (errCol.length > 0) {
    console.log(`ERROR: The following ${label} columns are not defined`, errCol);
  }
  return errCol;
}
export default checkColumns;
