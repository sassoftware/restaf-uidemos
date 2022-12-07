/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React , {useContext} from 'react';
import {AppContext} from '../../providers';
function PlaceHolder (props) {
  let r = useContext(AppContext);
  console.log(r);
  let show =
    <div id="page-wrap">
      <pre> {JSON.stringify(r, null, 4)} </pre>
      <pre> {JSON.stringify(props, null,4)}</pre>

    </div>;
  return show;
  }
export default PlaceHolder;
