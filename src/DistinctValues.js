/*
* Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { distinctValues } from '@sassoftware/restafedit';
import BaseSelector from './BaseSelector';

function DistinctValues(props) {
  let { name, column, value, label, lib, table, where, style, onChange, designMode, sharedProps,...eProps } = props;
  let { appEnv } = sharedProps;

  const [list, setList] = useState([]);
  const [sel, setSel] = useState(value);

  const _handleChange = (selx) => {
    setSel(selx);
    onChange(selx);
  };

  useEffect(() => {
    if (column == null || column.trim().length === 0) {
      setList([])
    } else {
      
      let w = (where == null) ? '' : where;
      let t = {name: table};
      if (appEnv.source === 'cas') {
        t.caslib = lib;
      } else {
        t.libref = lib;
      }

      distinctValues(column, appEnv, t, w)
        .then(r => {
          
          setList(r[column]);
        })
        .catch(err => {
          
          console.log(err);
          setList([]);
          setSel('');
        })
      }

  }, [name, column, lib,table, where, appEnv]);

  let pr = {
    name: 'distinct',
    value: sel,
    items: list,
    label: label,
    onChange: _handleChange,
    designMode: designMode, 
    style: style,
    eProps: eProps

  }
  
  return (
    <BaseSelector {...pr} />
  );
}

export default DistinctValues;
