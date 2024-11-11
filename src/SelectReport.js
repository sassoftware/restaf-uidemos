/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// import Reactz from 'react';
import SASItemsDropDown from './SASItemsDropDown';

//TBD: need to skip this jump since this is just a simple wrapper
function SelectReport(props) {
 return <SASItemsDropDown  {...props} service="reports" />;
}
export default SelectReport;