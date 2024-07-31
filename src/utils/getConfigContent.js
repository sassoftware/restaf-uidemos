/*
 * Copyright © 2022, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import getConfigRaw from "./getConfigRaw";
import parseConfig from "./parseConfig";
import samples from "../samples";
async function getConfigContent(
  store,
  configFolder,
  config,
  setupConfig,
  destination,
  sample
) {
  let appControl;

  let src = null;
  if (sample != null) {
    src = readSample(sample);
  }
  else if (destination === "local") {
    src = await config.text() ;
  } else {
    debugger;
    src = await getConfigRaw(store, configFolder, config);
  }
  debugger;
  if (src.substr(0, 22) !== 'function getAppControl' ) {
    // eslint-disable-next-line no-throw-literal
    let n = destination === "local" ? config.name : config;
    // eslint-disable-next-line no-throw-literal
    throw ` ${n} is not a valid fsedit config`;
  }
  appControl = await parseConfig(src, setupConfig);
 // appControl.label = (destination === 'local' ? config.name : config);
  return appControl;
}

function readSample(sample) {
  
  let form  = samples[sample].form;
  //form = form.replace(/\r\n|\n|\r/gm, ' ');
  return form;
}

export default getConfigContent;
