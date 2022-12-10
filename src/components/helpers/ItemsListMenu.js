/*
* Copyright © 2021, SAS Institute Inc., Cary, NC, USA.  All Rights Reserved.
* SPDX-License-Identifier: Apache-2.0
*/

import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import {useAppContext} from '../../providers';

function ItemsListMenu(props) {
    let { result, selected, onSelect} = props;
    let {classes} = useAppContext();
    let newMenu = [];
    let menu = result.itemsList();
    
    if (menu.size === 0) {
        newMenu.push(<ListItem key={0} button  >
            <ListItemText primary="None" />
        </ListItem>)
    } else {
        menu.forEach((m, key) => {
            newMenu.push(
                <ListItem key={key} button onClick={() => onSelect(key, m, result)} selected={key === selected}>
                <ListItem className={classes.listitem}>
                    <Typography> {m} </Typography>
                </ListItem>
                </ListItem>)
        });
    }
    let show =
        <Fragment>
            <List component="nav" dense={true} className={classes.list}>
                {newMenu}
            </List>
        </Fragment>;

    return show;
}
ItemsListMenu.propTypes = {
    /** current result */
    result: PropTypes.object.isRequired,

    /** Selection handler */
    onSelect: PropTypes.func.isRequired

}
export default ItemsListMenu;
