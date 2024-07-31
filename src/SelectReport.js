/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
// import getStyles from './utils/getStyles';
import SASItemsDropDown from './SASItemsDropDown';

//TBD: need to skip this jump since this is just a simple wrapper
function SelectReport(props) {
 return <SASItemsDropDown key={props.name} {...props} service="reports" />;
}
export default SelectReport;