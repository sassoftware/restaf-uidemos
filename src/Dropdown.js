/*
* Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

import BaseSelectorMultiple from './BaseSelectorMultiple';
import BaseSelector from './BaseSelector';
function Dropdown(props) {
  let {_appContext, ...eProps} = props;
  return (props.multiple === true) ? <BaseSelectorMultiple {...eProps} /> : <BaseSelector {...eProps} />;

}
export default Dropdown;


