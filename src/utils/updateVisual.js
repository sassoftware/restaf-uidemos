/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


import updateHandlers from './updateHandlers';
async function updateVisual(visuals, appEnv) {
  let updatedV = visuals.map((v) => {
    return updateHandlers(v, appEnv);
  });
  return updatedV;
}
export default updateVisual;