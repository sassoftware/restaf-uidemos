/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


/* 
* output
* extended columns and data ready for use in dataform and table
*/
import commonHandler from './commonHandler';

async function prepFormData (result, tableForm, appEnv) {
  let {schema, rows} = result;
  let {form, handlers} = tableForm;

  let newRows = [];
  for (let i=0; i < rows.length; i++) {
     let t = makeRowObject(schema, rows[i], form);
     let [t1,status] = await commonHandler('init', t, i, handlers, appEnv);
     if (status.code !== 0) {
       console.log(JSON.stringify(status, null,4));
     }
     newRows.push(t1);
    };


  let keyList = rows[0].map((r, i) => {
    let s = schema[i];
    return { value: s.Column, label: s.Column, dataValue: r };
  });
  
  //extend column and make it an object
  let eColumns = {};
  schema.forEach((s,i) => {
      s.oldName = s.Column;
      let name = s.Column.toLowerCase();
      s.name    = name;
      s.Label   = (s.Label == null || s.Label.length === 0) ? s.Column : s.Label;
      s.custom  = false;
      eColumns[name] = s;
    });

  // add computed columns to the array.
  if (form.customColumns != null) {
    for (let k in form.customColumns) {
      let c = { ...form.customColumns[k] };
      c.name = k;
      c.Type = c.Type == null ? "double" : c.Type;
      c.custom = true;
      eColumns[k] = c;
    }
  }

  return {
    keyList   : keyList,
    columns   : eColumns,
    rowsObject: newRows
  };

  //
  
  function makeRowObject (columns, row, form) {
    let rowObj = {};
    row.forEach((r, i) => {
      let s = columns[i];
      let name = s.Column.toLowerCase();
      if (s.Label == null) {
        s.Label = s.Column;
      }
      rowObj[name] = r;
    });

    if (form.customColumns != null) {
      for (let k in form.customColumns) {
        let c = form.customColumns[k];
        let name = c.Column.toLowerCase();
        rowObj[name] = c.value;
      }
    }
    

    return rowObj;
  }
}
export default prepFormData;
