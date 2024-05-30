/*
* Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

import BaseSelectorMultiple from './BaseSelectorMultiple';
import BaseSelector from './BaseSelector';
function Dropdown(props) {
  let {eProps} = props;
  return (eProps.multiple === true) ? <BaseSelectorMultiple {...props} /> : <BaseSelector {...props} />;

}
export default Dropdown;


