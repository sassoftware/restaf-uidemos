/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
async function saveToLocalFile(name, type, content) {
  debugger;
  let base = name.split('.');
  debugger;
  console.log(base);
  console.log(type);
  let fileHandle = await window.showSaveFilePicker({suggestname: name});
  let writable = await fileHandle.createWritable();
  if (content !== null) {
    let blob = new Blob([content], {type: type});
    await writable.write(blob);
    await writable.close();
    return ;
  } else {
    return writable;
  }
 
};
export default saveToLocalFile;