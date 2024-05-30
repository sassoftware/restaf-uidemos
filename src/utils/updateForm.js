/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

/* Update the form based on editing the visuals */
function updateForm(visuals, currentItems, appEnv) {
  let newItems = [];
  let newVisuals = [];
  let handlers = appEnv.appControl.editControl.handlers;
  // let activeColumns = appEnv.state.columns;
 // let id = appEnv;
  let hiddenSet = [];
  let longRunning = [];
  visuals.forEach((v, i) => {
    
    if (v.hide === false){
      
      if (v.props.handlers.onEdit !== null) {
        handlers[v.name] = v.props.handlers.onEdit;
        if (v.props.handlerType === 'longRunning') {
          longRunning.push(v.name);
        }
      } else {
        delete handlers[v.name];
      }
      newVisuals.push(v);
      let item = {...currentItems[i]};
      item.name = v.name;
      // item.id = v.id;
      newItems.push(item);
      // id = id + 1;
    } else {
      hiddenSet.push(v.name);
      if (handlers[v.name] != null) {
        delete handlers[v.name];
      }
    }
  });
  
  appEnv.appControl.formControl.visuals = [].concat(newVisuals);
  appEnv.appControl.formControl.items = [].concat(newItems);
  appEnv.appControl.editControl.longRunningHandlers = (longRunning.length > 0 ) ? longRunning : null;

  // update the edit handlers and the computed columns
 
  let computeColumns = {};
  let currentN = [];
  // recreate the computed columns
  
  newVisuals.forEach((v) => {
    let newProp = v.props;
    currentN.push(newProp.name);
    if (v.custom === true) {
      let custom = {
        Column: newProp.name,
        Type: newProp.type,
        FormattedLength: newProp.length,
        Label: newProp.label,
        value: newProp.value
      }
      computeColumns[newProp.name] = custom;
    }
    if (newProp.handlers.onEdit !== null) {
      handlers[newProp.name] = newProp.handlers.onEdit;
    }

  });
  // clear the handlers for the deleted columns
  let reservedLabels = ['init', 'main', 'term', 'initApp', 'termApp'];
  Object.keys(handlers).forEach((k) => {
    if ( reservedLabels.includes(k) === false && currentN.includes(k) === false) {
      /* allow user-defined non-data columns to remain */
      if (hiddenSet.includes(k) === true) { 
      delete handlers[k];
      }
    }
  });

  appEnv.appControl.customColumns = computeColumns;
  appEnv.appControl.formControl.currentItems = currentN;

  return;
}
export default updateForm;