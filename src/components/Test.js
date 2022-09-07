/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { Fragment } from 'react';

function Test (props) {
  console.log('------------------ in Test');
  console.log(props);
  debugger;
  return <Fragment> <p> HI there</p></Fragment>;
}
export default Test;
