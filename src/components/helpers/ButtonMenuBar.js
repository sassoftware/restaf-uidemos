/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Grid from "@material-ui/core/Grid";;

function ButtonMenuBar (props) {
    
    let { menuList, onSelect } = props;
    const _select = (c => {
        
        onSelect(c);
    });
    let menu = menuList.map((c)  => {
        let t = <Grid item key={c.text} >
                   <Button  onClick= {() => _select(c) } key={c.action} disabled={c.disabled}
                            variant="contained" color="primary" size="small">{c.text} </Button>
                   <Divider orientation="vertical" flexItem />
                   </Grid>;
        return t;
    });
    
    return (
        <Fragment>
            <Grid container key={"buttonMenu"} spacing={2} direction="row">
            {menu}
            </Grid>
        </Fragment>
    );
}

export default ButtonMenuBar;
