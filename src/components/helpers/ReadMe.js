/*
* Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
import React, {Fragment} from 'react';
import ReactMarkdown from 'react-markdown';

function ReadMe (props) {
  let { text } = props;
    
  return <Fragment>

    <ReactMarkdown children={text} disallowedtypes={[ "inlinecode" ]} />;
  </Fragment>
}

export default  ReadMe;