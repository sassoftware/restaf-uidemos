/*
* Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
import React, {Fragment} from 'react';
import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';

function ReadMeMd(props) {
  let { text } = props;
 // let html = parse(text);
  return <Fragment>

    <ReactMarkdown children={text}  />;
  </Fragment>
}

// disallowedtypes={[ "inlinecode" ]}
export default  ReadMeMd;