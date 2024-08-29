/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState } from 'react';
import HtmlText from './HtmlText';

function Html(props) {
    let {sx, name, value, refresh} = props;
    const [htmlContent, setHtmlContent] = useState('<h2> No link specified </h2>');
  
    useEffect(() => {
      /*
      if (htmlContent !== null) {
        return;
      }
        */
      if (value == null || value.trim().length === 0) {
        setHtmlContent('<h2> No link specified </h2>');

      } else {
        fetch(props.value)
        .then((response) => response.text())
        .then((data) => { 
          
          setHtmlContent(data)
        } )
      .catch((error) => {
        console.log(error);
        setHtmlContent(`<h1> ${props.value} was not found</h1>`);
       })
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[name, value]);
    console.log('htmlContent', htmlContent);
    return <HtmlText sx={sx} name={name} refresh={refresh} value={htmlContent} />;
  }
  export default Html;