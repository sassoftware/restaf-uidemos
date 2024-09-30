/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import setDefaultItem from './setDefaultItem';
function updateFormControl(appEnv) {
  let {itemCounter, currentItems, defaultComponent} = appEnv.appControl.formControl;
  let columns    = appEnv.state.columns;

  if (currentItems.length > 0 ) {
    let visuals = appEnv.appControl.formControl.visuals;
    /* temp patch - remove this later */
    for (let i = 0; i < visuals.length; i++) {
      let v = visuals[i];
      if (v.props.visible == null) {
        v.props.visible = true;
        v.props.export = false;
      }
    }
    return {items: appEnv.appControl.formControl.items, visuals: appEnv.appControl.formControl.visuals};
  }
  let columnList = appEnv.appControl.viewerOptions.show;
  if (columnList.length === 0) {
    columnList = Object.keys(columns).filter(c => columns[c].internal !== true);
  };
  
 // let newItems = [].concat(items);
 // let newVisuals = [].concat(visuals);

  let newItems = [];
  let newVisuals = [];
  let newCurrentItems = [];

  // Drop current items not on the show list
  
  /*
  items.forEach((item,i) => {
    if (columnList.includes(item.name) === true) {
      newItems.push(item);
      newVisuals.push(visuals[i]);
    }
  })
  */
  
  // now add any new columns
  let startRow = 2;
  let vcol = 0;
  columnList.forEach( (c)=> {
    if (currentItems.includes(c) === false) { 
      itemCounter = itemCounter + 1;
      let vcol2 = Math.floor(itemCounter/5);
      if (vcol2 > vcol) {
        vcol = vcol2;
        startRow = 2;
      }

      let {item, visual} = setDefaultItem(itemCounter, columns[c],vcol, startRow, defaultComponent);
      /* temp patch for backward compatability */
  

      newItems.push(item);
      newVisuals.push(visual);
      newCurrentItems.push(c);
      startRow = startRow + 100;
    }
  });

  let formControl = appEnv.appControl.formControl;
  formControl.itemCounter = itemCounter++;
  formControl.currentItems = newCurrentItems;
  formControl.items = newItems;
  formControl.visuals = newVisuals;
  return {items: newItems, visuals: newVisuals};

}
export default updateFormControl