/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import initialLayout from '../components/formControls/initialLayout';
import updateHandlers from './updateHandlers';
import {scrollTable, prepFormData} from '@sassoftware/restafedit';

async function addNewVisual(newVisual, appEnv) {
  let formControl = appEnv.appControl.formControl;
  let name = newVisual.name.toLowerCase();
  let itemLayout = {...initialLayout()[newVisual.component]};
  itemLayout.id = newVisual.id;
  itemLayout.name = newVisual.props.name;
  itemLayout.y = 10;
  itemLayout.x = 10;
  
  // update handlers
  let r  = updateHandlers(newVisual, appEnv, 'onEdit');
  newVisual = r.newVisual;
  r  = updateHandlers(newVisual, appEnv, 'style');
  newVisual = r.newVisual;
  r  = updateHandlers(newVisual, appEnv, 'dataProps');
  newVisual = r.newVisual;

  // update appEnv as though we are using configuration editor
  formControl.items.push(itemLayout);
  formControl.visuals.push(newVisual);
  // should we bump by more than 1?
  formControl.itemCounter = formControl.itemCounter + 1;
  formControl.currentItems.push(newVisual.props.name);
  
  // Now add computed variable
  
  let custom = {
    Column: name,
    Label: name,
    Type:  newVisual.props.type, //(newVisual.props.type === 'char') ? 'char' : 'double',
    FormattedLength: 12,
    value: newVisual.props.value
  }
  if (appEnv.state.columns[name] == null) {/* only add if a new name */
    appEnv.appControl.customColumns[name] = custom;
  }
  
  // refresh data with new calculations(if using table)
  if (appEnv.table != null){
     await scrollTable('first', appEnv);
  } else {
    let r = await prepFormData(appEnv.state.cache, appEnv, false);
    appEnv.state.data = r.data;
    appEnv.state.columns = r.columns;
    appEnv.state.cache = r.cache;
    
  }
  return;

}
export default addNewVisual;