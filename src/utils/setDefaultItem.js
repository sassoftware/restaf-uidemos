/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import visualTemplate from './visualTemplate';
function setDefaultItem(id, column, vcol, startRow) {
  
  let visual = visualTemplate();
  let comp =(column.Type === 'char')  ? 'InputText' : 'Input';;
  visual.id = id;
  visual.name = column.Column.toLowerCase();
  visual.component = comp;
  visual.label = comp;
  visual.props.name = column.name;
  visual.props.type = column.Type;
  visual.props.value = (column.customType === 'text') ? ' ' : 0;
  visual.props.label = (column.Label == null) ? column.Label :   column.Column;
  visual.props.length = column.FormattedLength;
  visual.custom = column.custom;

  let item = {
    id: id,
    name: visual.name,
    x: vcol * 250,
    y: startRow,
    width: 200,
    height: 15,
    backgroundColor: 'none',
    zIndex: 2,
    touchAction: 'None',
    position: 'absolute'
  };

  return { item, visual };
}
export default setDefaultItem;