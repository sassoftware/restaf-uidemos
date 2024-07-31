/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useEffect, useState } from 'react';

function Html(props) {

    const [htmlContent, setHtmlContent] = useState(null);
  
    useEffect(() => {
      
      if (htmlContent !== null) {
        return;
      }
      
      fetch(props.value)
      .then((response) => response.text())
      .then((data) => { 
        
        setHtmlContent(data)
      } )
      .catch((error) => setHtmlContent(`<h1> Home page ${props.url} was not found</h1>`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return (htmlContent === null ? null : <div dangerouslySetInnerHTML={{ __html: htmlContent }} style={{border: 'none', textAlign: 'left'}} />);
  };

export default Html;