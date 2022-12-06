/*
 * Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Fragment } from 'react'
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function ScoreForm(props) {
    let { inputs, classes, onSelect } = props
    // let { inputs, name, restaflib, onSelect, classes } = props

    let show =
        <Fragment>
            <Button color="primary" onSelect={onSelect}>Get Inputs</Button>
            <List component="ul" dense={true} className={classes.list} >
                {inputs}
            </List>
        </Fragment>


    return show
}
