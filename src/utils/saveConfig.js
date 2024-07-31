/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import tosource from "tosource";
import saveToFolder from "./saveToFolder";

async function saveConfig(appEnv, src) {
  
  //final cleanup
  let name = (appEnv.destination === "local") ? appEnv.config.name :  appEnv.config;
  let base = name.split('.');
  console.log(base);
  name = base[0] + '.form';
  /*
  if (name.substr(-8) !== ".form.js") {
    let base = name.split('.');
    name = base[0] + '.form.js';
  }
  */
  if (appEnv.appControl != null) {
    appEnv.appControl.label = name; 
    if (appEnv.destination !== "local") {
      appEnv.appControl.config = name;
    }
  }
  //appEnv.config = name;
  //
  
  let tAppControl = Object.assign({},appEnv.appControl);
  
  delete tAppControl.logonPayload;
  delete tAppControl.user;
  let code2Upload =
    src != null
      ? src
      : "function getAppControl() {\n return " +
        tosource(tAppControl) +
        "};";
  
  if (appEnv.destination === "local") {
    let srcBlob = new Blob([code2Upload], { type: "text/javascript" });
    const writable = await appEnv.config.createWritable();
    await writable.write(srcBlob);
    await writable.close();
    return { statusCode: 0, msg: `${appEnv.config.name} has been saved` };
  }

  // let table = appEnv.table;
  let config = appEnv.config;
  

  try {
    return saveToFolder(
      appEnv,
      config,
      null,
      code2Upload
    );
  } catch (err) {
    console.log(err);
    return { statusCode: 2, msg: "Syntax errors. See console for errors" };
  }
}
export default saveConfig;
