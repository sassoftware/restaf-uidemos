/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

async function saveToFolder(appEnv, name, stype, src) {
  let {store, configFolder} = appEnv;
  
  
  let folderName = (configFolder === null || configFolder.trim().length === 0) 
                   ? appEnv.user 
                   : configFolder;
  let parentFolderUrl = await getFolderUrl(store, folderName);
  let { files } = await store.addServices('files');
    let payload = {
        data   : src,
        headers: {
            'Content-Disposition': `text/plain`,
            'content-type'       : 'text/plain'
        },
        qs: {
          /*parentFolderUri: parentFolder,
          parentUri: parentFolder,*/
          versioned: true
        }
    };

    let p = {
      qs: {
        filter: `and(eq(name,"${name}"),eq(documentType,"fseditconfig"))`
      }
    }
    let prevFile = await store.apiCall(files.links('files'), p);
    if (prevFile.itemsList().size === 1) {
      await store.apiCall(prevFile.itemsCmd(name, 'delete'), p)
      
    }
    //create a file
    let createCmd = files.links('create');
    let newFile = await store.apiCall(createCmd, payload);
    await store.apiCall(newFile.links('content'));
    // set name and other attributes
    p = {
        data: {
            name: name,
            description: 'viyaFsedit configuration',
            parentFolderUri: parentFolderUrl,
            parentUri: parentFolderUrl,
            type: "child",
            properties: {
              application: 'viyaedit',
              configFolder: appEnv.configFolder 
            },
            documentType: "fseditconfig"
        },
        headers: {
            'if-unmodified-since': newFile.headers('last-modified')
        }
    }
    
    await store.apiCall(newFile.links('update'), p);
    return {statusCode: 0, msg: `Saved config ${name} in  folder ${folderName}`}


}
async function getFolderUrl(store, folderName) {

  let { folders } = await store.addServices("folders");
  
  let payload = {
    qs: {
      filter: `eq(name,"${folderName}")`
    }
  }
  let folderList = await store.apiCall(folders.links("folders"), payload);
  if (folderList.itemsList().size === 0) {
    throw new Error(`${folderName} not found`);
  }
  let parentFolder = '/folders/folders/' + folderList.items(folderName, 'data', 'id');
  return parentFolder;
}
export default saveToFolder;


