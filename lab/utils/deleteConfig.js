import getFolderUri from "./getFolderUri";
async function deleteConfig(folder, config, appEnv) {
  let {store} = appEnv;
  let {files} = await store.addServices("files");
  let folderUri = await getFolderUri(store, folder);
  
  let p = {
    qs: {
      filter: `and(eq(name, "${config}"),eq(parentUri, "${folderUri}"),eq(documentType,"fseditconfig"))`
    }
  };
  let selection = await store.apiCall(files.links('files'), p);
  
  if (selection.items().size === 1){
    await store.apiCall(selection.itemsCmd(config, 'delete'));
    return true;
  }
  
  return false;

}
export default deleteConfig;