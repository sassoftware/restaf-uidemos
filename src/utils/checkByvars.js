/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function checkByvars(currentColumns, byvars) {
  let errCol = [];
  byvars.forEach((c) => {
    let cr = currentColumns[c];
    if (cr == null || cr.custom === true) {
      errCol.push(c);
    }
  });

  if (errCol.length > 0) {
    console.log('ERROR: The following byvars columns do not exist in the table', errCol);
  }
  return errCol;
}
export default checkByvars;
