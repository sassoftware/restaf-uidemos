/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import SASItemsDropDown from './SASItemsDropDown';

//TBD: need to skip this jump since this is just a simple wrapper
function SelectReport(props) {
  let {service, ...eprops} = props; 
  let iservice = service || "reports";
 return <SASItemsDropDown  {...eprops} service={iservice} />;
}
export default SelectReport;