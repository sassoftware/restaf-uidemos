/*
 * Copyright © 2019, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {Fragment} from 'react';
import Paper from '@material-ui/core/Paper';

function ChampionModelContent (props) {
   let {content} = props;
    debugger;
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
