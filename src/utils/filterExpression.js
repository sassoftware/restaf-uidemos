/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function filterExpression (filter) {
  let filterExp = [];
  let filterExpString = null;
  if (filter != null && Object.keys(filter).length > 0) {
    for(let k in filter) {
      filterExp.push(`eq(${k},"${filter[k]}")`);
    }  
    filterExpString = filterExp.join(',');
    filterExpString = `and(${filterExpString})`;
  }
  return filterExpString;
}
export default filterExpression;