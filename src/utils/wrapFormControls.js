/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import getValue from './getValue';
import getStyles from './getStyles';
function wrapFormControls(formControls) {
  let wrappedComponents = {};
  for (let key in formControls) {   
    wrappedComponents[key] = Wrapper(formControls[key]);
  } 
  return wrappedComponents;
}

function Wrapper (C) {
  return  (props) => {
    
    let updatedProps = getValue(props); 
    let propInfo     = getStyles(props);
    updatedProps = {...updatedProps, ...propInfo};
   
    const _onChange = (value) => {
      const synthE = {
        key   : 'Enter',
        target: {
          value: value,
          name : props.name
        }
      };
      props.sharedProps.onEdit(synthE);
    }
    debugger;
    return <C {...updatedProps} designMode={props.sharedProps.designMode} onChange={_onChange} />
  }}
export default wrapFormControls;