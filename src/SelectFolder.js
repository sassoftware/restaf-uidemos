/*
 * Copyright © 2024, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import SASItemsDropDown from './SASItemsDropDown';
function SelectFolder(props) {
 return <SASItemsDropDown key={props.name} {...props} service="folders" />;
}
export default SelectFolder;