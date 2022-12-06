/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {Fragment} from 'react';
import Paper from '@mui/material/Paper';

function ChampionModelContent (props) {
   let {content} = props;
    
    let html = { __html: content };
    return (
		<Fragment>
      <Paper elevation={5}>
        <div dangerouslySetInnerHTML={html}></div>
      </Paper>
      <br></br>
		</Fragment>
 );

};

export default ChampionModelContent;
