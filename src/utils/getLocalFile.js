/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
async function getLocalFile(valueType, options, mode, accept) {
  let pickerOpts = {
      types: [
        {
          description: 'js',
          accept: {
          "text/*": accept
          }
        }
      ],
      
      excludeAcceptAllOption: true,
      multiple: false,
      mode: 'readwrite'
  };
  
  if (options !== null && options.name  != null){
    // pickerOpts.startIn = options.folder;
    pickerOpts.suggestedName = options.name;  
  }
  
  let result = null;
  if (mode === 'write') {
    const handle  = await window.showSaveFilePicker(pickerOpts);
    
    result = {name: handle.name, handle: handle, content: null};
  } else {
     let [fileHandle] = await window.showOpenFilePicker(pickerOpts);
     let file = await fileHandle.getFile();
     let content = (valueType === 'content' ) ? await file.text() : null;
     result = {name: file.name, handle: file, content: content};
  }
  return result;
};
export default getLocalFile;