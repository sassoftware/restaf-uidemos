/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import getFolderUri from "./getFolderUri";
async function getConfigRaw(store, configFolder,config) {
  const { files } = await store.addServices('files');

  let p = {
    qs: {
      filter: `eq(name, "${config}")`
    }
  };
  if (configFolder != null && configFolder.length > 0) {
    
    let u = await getFolderUri(store, configFolder);
    p.qs.filter = `and(eq(name, "${config}"),eq(parentUri, "${u}"),eq(documentType,"fseditconfig"))`
  };

  try {
    
    let selection = await store.apiCall(files.links('files'), p);
    
    if (selection.items().toJS().length === 0 ){
      // eslint-disable-next-line no-throw-literal
      throw `Config ${config} was not found in folder ${configFolder}`;
    }
    let c = await store.apiCall(selection.itemsCmd(config, 'content'));
    let src = c.items();

    return src;
  } catch (err) {
    console.log(err);
    return null;  
  }
}
export default getConfigRaw;