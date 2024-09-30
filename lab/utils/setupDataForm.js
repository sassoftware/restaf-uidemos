/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
/* obsolete see updateFormControl.js */
import setDefaultItem from './setDefaultItem';

function setupDataForm(appEnv) {
  let items = [];
  let visuals = [];

  const columns = appEnv.state.columns;
  let showColumns = appEnv.appControl.viewerOptions.show;
  if (showColumns.length === 0) {
    showColumns = Object.keys(columns).filter(c => columns[c].internal == null);
  };

  let defaultComponent = appEnv.appControl.formControl.defaultComponent;
  let startRow = 2;
  let currentItems = [];
  let vcol = 0;
  showColumns.forEach((name, i) => {
    
    let {item, visual}= setDefaultItem(i, name, columns[name].Label, columns[name].type,vcol, startRow, defaultComponent);
    items.push(item);
    visuals.push(visual);
    currentItems.push(name);
    if ((i+1) % 5 === 0) {
      vcol = vcol + 1;
      startRow = 2;
    } else { 
      startRow = startRow + item.height + 20;
    }
  });
  
  let itemCounter = items.length;
  return {items: items, visuals: visuals, itemCounter: itemCounter, currentItems: currentItems};
}
export default setupDataForm;