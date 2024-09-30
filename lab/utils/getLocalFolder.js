/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
async function getLocalFolder(folder) {
    const pickerOpts = {
        multiple: false,
        mode: 'readwrite'
    };
  
  if (folder !== null){
    pickerOpts.startIn = folder;  
  }
    
  let dirHandle = await window.showDirectoryPicker(pickerOpts);
  
  let r = {name: dirHandle.name, handle: dirHandle, content: null};
  return r;
 
};
export default getLocalFolder;