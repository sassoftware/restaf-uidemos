/*
* Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/
import React, {Fragment} from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function ReadMe (props) {
  let { text } = props;
 // let html = parse(text);
 debugger;
 console.log('in readme:', text);
 console.log(ReactMarkdown)
  return <Fragment>

    <ReactMarkdown children={text} rehypePlugins={[rehypeRaw]}></ReactMarkdown>
  </Fragment>
}
export default  ReadMe;