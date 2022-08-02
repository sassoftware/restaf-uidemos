/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { useLocation } from 'react-router-dom';
// import {useAppContext} from '../../providers';
function PlaceHolder (props) {
  
  // let r = useAppContext();
  let show =
    <div id="page-wrap">
      <pre> {JSON.stringify(useLocation().state, null, 4)} </pre>
      <pre> {JSON.stringify(props, null,4)}</pre>

    </div>;
  return show;
  }
export default PlaceHolder;
