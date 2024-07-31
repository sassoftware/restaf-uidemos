/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import filterExpression from './filterExpression';
import getFolderUri from './getFolderUri';
async function getConfigList (store, path, filter) {
  const {files} = await store.addServices('files');
  let parentFolder = ( path != null && path.trim().length > 0) ? await getFolderUri(store, path) : null;
  
  // let filterExp = (parentFolder != null) ? [`eq(parentUri,"${parentFolder}")`] : [];
  let tfilter = {...filter};
  tfilter.documentType = 'fseditconfig';
  if (parentFolder != null) {
    tfilter.parentUri = parentFolder;
  }

  let filterExpString = filterExpression(tfilter);
  let p = {
    qs: {
     limit: 1000,
     start: 0
    }
 };
 if (filterExpString != null) {
    p.qs.filter = filterExpString;
 }

 let selection = await store.apiCall(files.links('files'), p);
 return selection.itemsList().toJS() ;

}
export default getConfigList;
/*

}
*/
