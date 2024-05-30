/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// TBD: delete repeated code and use this.
// add additional filters before doing that(like documenttype)

async function getFolderUri(store, path) {
  if (path == null) {
    return null;
  }
  let { folders } = await store.addServices("folders");
  // Get folder info
  let payload = {
    qs: {
      filter: `eq(name,"${path}")`
    }
  }

  let userFolder = await store.apiCall(folders.links("folders"), payload);
  
  if (userFolder.itemsList().size === 0) {
    
    throw new Error(`Unable to find folder ${path}`);
  }
  
  let parentFolder = '/folders/folders/' + userFolder.items(path, 'data', 'id');
  return parentFolder;
}
export default getFolderUri;